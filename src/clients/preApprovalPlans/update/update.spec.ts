import update from '.';
import { RestClient } from '@utils/restClient';
import { MercadoPagoConfig } from '@src/mercadoPagoConfig';
import type { UpdatePreApprovalPlan } from './types';

jest.mock('@utils/restClient');

describe('Testing pre approval plan, update', () => {
	test('should make a PUT request with the correct parameters', async () => {
		const client = new MercadoPagoConfig({ accessToken: 'token' });
		const requestOptions = {};
		const preApprovalPlan: UpdatePreApprovalPlan = {
			id: '1234',
			updatePreApprovalPlanRequest: {
				back_url: 'https://www.test.com',
				reason: 'test',
				auto_recurring: {
					frequency: 1,
					frequency_type: 'days',
					transaction_amount: 10,
					currency_id: '123'
				}
			},
			config: client,
			requestOptions
		};
		const expectedHeaders = {
			'Authorization': 'Bearer token',
			'Content-Type': 'application/json',
		};
		await update(preApprovalPlan);
		const spyFetch = jest.spyOn(RestClient, 'fetch');
		expect(spyFetch).toHaveBeenCalledWith(
			`/preapproval_plan/${preApprovalPlan.id}`,
			expect.objectContaining({
				method: 'PUT',
				headers: expectedHeaders,
				body: JSON.stringify(preApprovalPlan.updatePreApprovalPlanRequest),
			})
		);
	});
});
