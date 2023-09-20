import get from '.';
import { RestClient } from '@utils/restClient';
import { MercadoPagoConfig } from '@src/mercadoPagoConfig';

jest.mock('@utils/restClient');

describe('Testing User, get method', () => {
	test('shoud pass foward request options from get to RestClient.fetch', async () => {
		const client = new MercadoPagoConfig({ accessToken: 'token', options: { timeout: 5000 } });
		const requestOptions = {};
		await get({ config: client, requestOptions });
		const spyFetch = jest.spyOn(RestClient, 'fetch');
		expect(spyFetch).toHaveBeenCalledWith('/users/me', { 'headers': { 'Authorization': 'Bearer token' }, 'timeout': 5000 });
	});
});
