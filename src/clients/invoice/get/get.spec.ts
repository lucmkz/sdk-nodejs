import get from './index';

import { RestClient } from '@utils/restClient';
import { MercadoPagoConfig } from '@src/mercadoPagoConfig';

jest.mock('@utils/restClient');

describe('Testing invoice, get', () => {
	test('should make a GET request with the correct parameters', async () => {
		const client = new MercadoPagoConfig({ accessToken: 'token', options: { timeout: 5000 } });
		const id = '1234';

		const expectedHeaders = {
			'Authorization': 'Bearer token'
		};

		await get({ id, config : client });
		const spyFetch = jest.spyOn(RestClient, 'fetch');
		expect(spyFetch).toHaveBeenCalledWith(
			`/authorized_payments/${id}`,
			expect.objectContaining({
				headers: expectedHeaders,
			})
		);
	});
});
