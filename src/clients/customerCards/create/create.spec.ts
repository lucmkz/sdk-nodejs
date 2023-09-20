import create from '.';
import { MercadoPagoConfig } from '@src/mercadoPagoConfig';
import { RestClient } from '@utils/restClient';

jest.mock('@utils/restClient');

describe('Testing customer cards, create', () => {
	test('shoud pass foward request options from create to RestClient.fetch', async () => {
		const client = new MercadoPagoConfig({ accessToken: 'token', options: { timeout: 5000 } });

		const body = {
			token : '123',
		};
		const requestOptions = {};
		await create({ customerId:'123', body: body, config: client, requestOptions });
		const spyFetch = jest.spyOn(RestClient, 'fetch');
		expect(spyFetch).toHaveBeenCalledWith('/v1/customers/123/cards', { 'body': '{"token":"123"}', 'headers': { 'Authorization': 'Bearer token' }, 'method': 'POST', 'timeout': 5000 });
	});
});
