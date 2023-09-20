import remove from '.';
import { RestClient } from '@utils/restClient';
import { MercadoPagoConfig } from '@src/mercadoPagoConfig';

jest.mock('@utils/restClient');

describe('Testing customer, remove', () => {
	test('shoud pass foward request options from remove to RestClient.fetch', async () => {
		const client = new MercadoPagoConfig({ accessToken: 'token', options: { timeout: 5000 } });
		const requestOptions = {};
		await remove({ customerId: '123', config: client, requestOptions });
		const spyFetch = jest.spyOn(RestClient, 'fetch');
		expect(spyFetch).toHaveBeenCalledWith( '/v1/customers/123', { 'headers': { 'Authorization': 'Bearer token' }, 'method': 'DELETE', 'timeout': 5000 });
	});
});
