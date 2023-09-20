import { RestClient } from '@utils/restClient';
import { mergeOptions } from '@src/utils/mergeOptions';

import type { CustomerCardList } from './types';
import type { CustomerCardResponse } from '../commonTypes';
import type { Options } from '@src/types';

export default function list({ customerId, config, requestOptions }: CustomerCardList): Promise<CustomerCardResponse[]> {
	const options: Options = mergeOptions(config.options, requestOptions);
	return RestClient.fetch<CustomerCardResponse[]>(
		`/v1/customers/${customerId}/cards`,
		{
			headers: {
				'Authorization': `Bearer ${config.accessToken}`
			},
			...options
		}
	);
}
