import { RestClient } from '@utils/restClient';
import type { CustomerCard } from './types';
import type { CustomerCardResponse } from '../commonTypes';
import type { Options } from '@src/types';

export default function create({ customerId, body, config, requestOptions }: CustomerCard): Promise<CustomerCardResponse> {
	const options: Options = Object.assign(config.options, requestOptions);
	return RestClient.fetch<CustomerCardResponse>(
		`/v1/customers/${customerId}/cards`,
		{
			headers: {
				'Authorization': `Bearer ${config.accessToken}`
			},
			body: JSON.stringify(body),
			method: 'POST',
			...options
		}
	);
}
