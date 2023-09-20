import capture from '.';
import { RestClient } from '@utils/restClient';
import { MercadoPagoConfig } from '@src/mercadoPagoConfig';

jest.mock('@utils/restClient');

describe('Testing search payments, capture', () => {
	test('shoud pass foward request options from capture to RestClient.capture', async () => {
		const client = new MercadoPagoConfig({ accessToken: 'token' });
		const mockPaymentId = '00000000';
		const requestOptions = {};
		await capture({ id: mockPaymentId, transaction_amount: 12.34, config: client, requestOptions });
		const spyFetch = jest.spyOn(RestClient, 'fetch');
		const expectedBody = { capture :true, transaction_amount: 12.34 };
		expect(spyFetch).toHaveBeenCalledWith(`/v1/payments/${mockPaymentId}`, {
			body: JSON.stringify(expectedBody),
			headers: {
				Authorization: 'Bearer token',
				'Content-Type': 'application/json',
			},
			method: 'PUT',
		});
	});
});
