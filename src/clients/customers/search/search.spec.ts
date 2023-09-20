import search from '.';
import { RestClient } from '@utils/restClient';
import { MercadoPagoConfig } from '@src/mercadoPagoConfig';
import type { CustomerSearchOptions } from './types';

jest.mock('@utils/restClient');

describe('Testing customer, search', () => {
	test('shoud pass foward request options from search to RestClient.fetch', async () => {
		const client = new MercadoPagoConfig({ accessToken: 'token' });

		const searchFilters: CustomerSearchOptions = {
			email: 'john.doe@example.com'
		};

		await search({ filters: searchFilters, config: client, requestOptions: { timeout: 5000 } });
		const spyFetch = jest.spyOn(RestClient, 'fetch');
		expect(spyFetch).toHaveBeenCalledWith('/v1/customers/search', {
			'headers': { 'Authorization': 'Bearer token' },
			'queryParams': { 'email': 'john.doe@example.com' },
			'timeout': 5000 });
	});
});
