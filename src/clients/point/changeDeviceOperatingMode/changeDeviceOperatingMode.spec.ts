import { MercadoPagoConfig } from '@src/mercadoPagoConfig';
import { RestClient } from '@src/utils/restClient';
import changeDeviceOperatingMode from '.';

jest.mock('@utils/restClient');

describe('Testing change device operating mode', () => {
	test('should make a PATCH request with the correct parameters', async () => {
		const client = new MercadoPagoConfig({
			accessToken: 'token',
			options: { timeout: 5000 },
		});
		const request = {
			operating_mode: 'PDV',
		};
		const device_id: string = 'GERTEC_MP123__12345678';
		const expectedHeaders = {
			Authorization: 'Bearer token',
		};
		const requestOptions = {};
		await changeDeviceOperatingMode({ device_id, request, config: client, requestOptions });
		const spyFetch = jest.spyOn(RestClient, 'fetch');
		expect(spyFetch).toHaveBeenCalledWith(
			'/point/integration-api/devices/GERTEC_MP123__12345678',
			expect.objectContaining({
				method: 'PATCH',
				headers: expectedHeaders,
				body: JSON.stringify(request),
			})
		);
	});
});
