import { RestClient } from '@utils/restClient';
import { mergeOptions } from '@src/utils/mergeOptions';

import type { CustomerCardResponse } from '../commonTypes';
import type { CustomerCardConfigs } from '../get/types';
import type { Options } from '@src/types';

export default function remove({ customerId, cardId, config, requestOptions }: CustomerCardConfigs): Promise<CustomerCardResponse> {
	const options: Options = mergeOptions(config.options, requestOptions);
	return RestClient.fetch<CustomerCardResponse>(
		`/v1/customers/${customerId}/cards/${cardId}`,
		{
			headers: {
				'Authorization': `Bearer ${config.accessToken}`
			},
			method: 'DELETE',
			...options
		}
	);
}
