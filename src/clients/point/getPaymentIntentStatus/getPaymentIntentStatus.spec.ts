import { MercadoPagoConfig } from '@src/mercadoPagoConfig';
import { RestClient } from '@src/utils/restClient';
import getPaymentIntentStatus from '.';

jest.mock('@utils/restClient');

describe('Testing payment intent, status', () => {
	test('should make a GET request with the correct parameters', async () => {
		const client = new MercadoPagoConfig({
			accessToken: 'token',
			options: { timeout: 5000 },
		});
		const payment_intent_id: string = '123456789';

		const expectedHeaders = {
			Authorization: 'Bearer token',
		};
		const requestOptions = {};
		await getPaymentIntentStatus({ payment_intent_id, config: client, requestOptions });
		const spyFetch = jest.spyOn(RestClient, 'fetch');
		expect(spyFetch).toHaveBeenCalledWith(
			'/point/integration-api/payment-intents/123456789/events',
			expect.objectContaining({
				method: 'GET',
				headers: expectedHeaders,
				...client.options,
			})
		);
	});
});
