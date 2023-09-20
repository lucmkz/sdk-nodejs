import update from '.';
import { RestClient } from '@utils/restClient';
import { MercadoPagoConfig } from '@src/mercadoPagoConfig';
import type { UpdatePreference } from './types';

jest.mock('@utils/restClient');

describe('Testing preference, update', () => {
	test('should make a PUT request with the correct parameters', async () => {
		const client = new MercadoPagoConfig({ accessToken: 'token' });
		const requestOptions = {};
		const preferenceRequest: UpdatePreference = {
			id: '1234',
			updatePreferenceRequest: {
				items: [],
			},
			config: client,
			requestOptions
		};
		const expectedHeaders = {
			'Authorization': 'Bearer token',
			'Content-Type': 'application/json',
		};
		await update(preferenceRequest);
		const spyFetch = jest.spyOn(RestClient, 'fetch');
		expect(spyFetch).toHaveBeenCalledWith(
			`/checkout/preferences/${preferenceRequest.id}`,
			expect.objectContaining({
				method: 'PUT',
				headers: expectedHeaders,
				body: JSON.stringify(preferenceRequest.updatePreferenceRequest),
			})
		);
	});
});
