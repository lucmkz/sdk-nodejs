import { RestClient } from '@utils/restClient';
import type { CustomerCardConfigs } from './types';
import type { CustomerCardResponse } from '../commonTypes';
import type { Options } from '@src/types';

export default function get({ customerId, cardId, config, requestOptions }: CustomerCardConfigs): Promise<CustomerCardResponse> {
	const options: Options = Object.assign(config.options, requestOptions);
	return RestClient.fetch<CustomerCardResponse>(
		`/v1/customers/${customerId}/cards/${cardId}`,
		{
			headers: {
				'Authorization': `Bearer ${config.accessToken}`
			},
			...options
		}
	);
}
