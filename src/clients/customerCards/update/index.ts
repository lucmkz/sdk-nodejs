import { RestClient } from '@utils/restClient';
import { mergeOptions } from '@src/utils/mergeOptions';

import type { CustomerCardResponse } from '../commonTypes';
import type { CustomerCardConfigUpdate } from './types';
import type { Options } from '@src/types';

export default function update({ customerId, cardId, body, config, requestOptions }: CustomerCardConfigUpdate): Promise<CustomerCardResponse> {
	const options: Options = mergeOptions(config.options, requestOptions);
	return RestClient.fetch<CustomerCardResponse>(
		`/v1/customers/${customerId}/cards/${cardId}`,
		{
			headers: {
				'Authorization': `Bearer ${config.accessToken}`
			},
			body: JSON.stringify(body),
			method: 'PUT',
			...options
		}
	);
}
