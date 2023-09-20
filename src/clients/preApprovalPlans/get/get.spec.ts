import get from '.';
import { RestClient } from '@utils/restClient';
import { MercadoPagoConfig } from '@src/mercadoPagoConfig';

jest.mock('@utils/restClient');

describe('Testing pre approval plan, get', () => {
	test('should make a GET request with the correct parameters', async () => {
		const client = new MercadoPagoConfig({ accessToken: 'token', options: { timeout: 5000 } });
		const id = '1234';

		const expectedHeaders = {
			'Authorization': 'Bearer token'
		};
		const requestOptions = {};
		await get({ id, config: client, requestOptions });
		const spyFetch = jest.spyOn(RestClient, 'fetch');
		expect(spyFetch).toHaveBeenCalledWith(
			`/preapproval_plan/${id}`,
			expect.objectContaining({
				headers: expectedHeaders,
			})
		);

	});
});
