import create from '.';
import { RestClient } from '@utils/restClient';
import { MercadoPagoConfig } from '@src/mercadoPagoConfig';

import type { Create } from './types';

jest.mock('@utils/restClient');

describe('Testing create payments', () => {
	test('shoud pass foward request options from create to RestClient.create', async () => {
		const client = new MercadoPagoConfig({ accessToken: 'token', options: { timeout: 5000 } });
		const mockBody = {
			description: 'description',
			payer: {
				email: 'emal@email.com'
			},
			transaction_amount: 12.34,
		};
		const requestOptions = {};
		const mockCreate: Create = {
			body: mockBody,
			config: client,
			requestOptions
		};
		await create(mockCreate);
		const spyFetch = jest.spyOn(RestClient, 'fetch');
		expect(spyFetch).toHaveBeenCalledWith('/v1/payments',
			{
				body: JSON.stringify(mockBody),
				headers: {
					Authorization: 'Bearer token'
				},
				method: 'POST',
				timeout: 5000
			}
		);
	});
});
