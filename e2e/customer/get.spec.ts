import MercadoPago, { Customer } from '@src/index';
import { config } from '../e2e.config';

describe('IT customer, get', () => {
	test('should get a client and match response object', async () => {
		const client = new MercadoPago({ accessToken: config.access_token });
		const customer = new Customer(client);

		const email = createEmailTestUser();

		const body = {
			email: email,
		};

		const createCustomer = await customer.create({ body });
		expect(createCustomer).toHaveProperty('id');

		const customerGet = await customer.get({ customerId: createCustomer.id });

		expect(customerGet).toHaveProperty('id', createCustomer.id);
		expect(customerGet).toHaveProperty('email', body.email);

		const removeCustomer = await customer.remove({ customerId: customerGet.id });
		expect(removeCustomer).toHaveProperty('id', removeCustomer.id);
	});

	function createEmailTestUser() {
		const random = Math.floor(Math.random() * 1000000);
		const email = 'test_user' + random + '@testuser.com';
		return email;
	}
});
