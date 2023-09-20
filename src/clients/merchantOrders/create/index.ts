import { RestClient } from '@utils/restClient';
import { mergeOptions } from '@src/utils/mergeOptions';

import type { MerchantOrderCreateRequest } from './types';
import type { MerchantOrder } from '../commonTypes';
import type { Options } from '@src/types';

export default function create({ body, config, requestOptions }: MerchantOrderCreateRequest): Promise<MerchantOrder> {
	const options: Options = mergeOptions(config.options, requestOptions);
	return RestClient.fetch<MerchantOrder>(
		'/merchant_orders',
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

