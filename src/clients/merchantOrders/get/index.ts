import { RestClient } from '@utils/restClient';
import { MerchantOrder } from '../commonTypes';
import { mergeOptions } from '@src/utils/mergeOptions';

import type { MerchantOrderGetRequest } from './types';
import type { Options } from '@src/types';

export default function get({ merchantOrderId, config, requestOptions }: MerchantOrderGetRequest): Promise<MerchantOrder> {
	const options: Options = mergeOptions(config.options, requestOptions);
	return RestClient.fetch<MerchantOrder>(
		`/merchant_orders/${merchantOrderId}`,
		{
			headers: {
				'Authorization': `Bearer ${config.accessToken}`
			},
			...options
		}
	);
}

