import create from '.';
import { RestClient } from '@utils/restClient';
import { MercadoPagoConfig } from '@src/mercadoPagoConfig';
import type { PreApprovalPlanRequest } from '@src/clients/preApprovalPlans/commonTypes';


jest.mock('@utils/restClient');

describe('Testing pre approval plan, create', () => {
	test('should make a POST request with the correct parameters', async () => {
		const client = new MercadoPagoConfig({ accessToken: 'token', options: { timeout: 5000 } });
		const preApprovalPlanRequest: PreApprovalPlanRequest = {
			back_url: 'https://www.test.com',
			reason: 'test',
			auto_recurring: {
				frequency: 1,
				frequency_type: 'days',
				transaction_amount: 10,
				currency_id: '123'
			}
		};

		const expectedHeaders = {
			'Authorization': 'Bearer token',
			'Content-Type': 'application/json',
		};
		const requestOptions = {};
		await create({ preApprovalPlanRequest, config : client, requestOptions });
		const spyFetch = jest.spyOn(RestClient, 'fetch');
		expect(spyFetch).toHaveBeenCalledWith(
			'/preapproval_plan/',
			expect.objectContaining({
				method: 'POST',
				headers: expectedHeaders,
				body: JSON.stringify(preApprovalPlanRequest),
			})
		);

	});
});
