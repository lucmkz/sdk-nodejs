import list from '.';
import { MercadoPagoConfig } from '@src/mercadoPagoConfig';
import { RestClient } from '@utils/restClient';

jest.mock('@utils/restClient');

describe('Testing get list identification types', () => {
	test('shoud pass foward request options from get to RestClient.fetch', async () => {
		const client = new MercadoPagoConfig({ accessToken: 'token', options: { timeout: 5000 } });
		const requestOptions = {};
		await list({ config: client, requestOptions });
		const spyFetch = jest.spyOn(RestClient, 'fetch');
		expect(spyFetch).toHaveBeenCalledWith('/v1/identification_types', { 'headers': { 'Authorization': 'Bearer token' }, 'timeout': 5000 });
	});
});
