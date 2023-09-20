import get from '.';
import { RestClient } from '@utils/restClient';
import { MercadoPagoConfig } from '@src/mercadoPagoConfig';

jest.mock('@utils/restClient');

describe('Testing create get', () => {
	test('shoud pass foward request options from get to RestClient.get', async () => {
		const client = new MercadoPagoConfig({ accessToken: 'token', options: { timeout: 5000 } });
		const mockId = '00000000';
		const requestOptions = {};
		await get({ id: mockId, config: client, requestOptions });
		const spyFetch = jest.spyOn(RestClient, 'fetch');
		expect(spyFetch).toHaveBeenCalledWith(`/v1/payments/${mockId}`, {
			headers: { Authorization: 'Bearer token', 'Content-Type': 'application/json' },
			timeout: 5000
		});
	});
});
