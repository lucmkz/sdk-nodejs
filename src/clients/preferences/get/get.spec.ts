import get from '.';
import { RestClient } from '@utils/restClient';
import { MercadoPagoConfig } from '@src/mercadoPagoConfig';

jest.mock('@utils/restClient');

describe('Testing preference, get', () => {
	test('should make a GET request with the correct parameters', async () => {
		const client = new MercadoPagoConfig({ accessToken: 'token', options: { timeout: 5000 } });
		const id = '1273205088-4cbd8faf-eb95-4dc3-b7cd-82cf979856b4';

		const expectedHeaders = {
			'Authorization': 'Bearer token'
		};

		await get({ id, config : client });
		const spyFetch = jest.spyOn(RestClient, 'fetch');
		expect(spyFetch).toHaveBeenCalledWith(
			`/checkout/preferences/${id}`,
			expect.objectContaining({
				headers: expectedHeaders,
			})
		);

	});
});
