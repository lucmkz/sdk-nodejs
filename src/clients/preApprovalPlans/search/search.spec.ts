import search from '.';
import { RestClient } from '@utils/restClient';
import { MercadoPagoConfig } from '@src/mercadoPagoConfig';

jest.mock('@utils/restClient');

describe('Testing pre approval plan, search', () => {
	test('should make a SEARCH request with the correct parameters', async () => {
		const client = new MercadoPagoConfig({ accessToken: 'token' });
		const expectedHeaders = {
			'Authorization': 'Bearer token',
			'Content-Type': 'application/json',
		};
		const requestOptions = {};
		await search({ config: client, requestOptions });
		const spyFetch = jest.spyOn(RestClient, 'fetch');
		expect(spyFetch).toHaveBeenCalledWith(
			'/preapproval_plan/search',
			expect.objectContaining({
				headers: expectedHeaders,
				queryParams: {}
			})
		);
	});
});
