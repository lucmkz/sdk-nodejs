import { RestClient } from '@utils/restClient';
import type { MerchantOrder } from '../commonTypes';
import type { MerchantOrderUpdateRequest } from './types';
import { Options } from '@src/types';
import { mergeOptions } from '@src/utils/mergeOptions';

export default function update({ merchantOrderId, body, config, requestOptions }: MerchantOrderUpdateRequest): Promise<MerchantOrder> {
	const options: Options = mergeOptions(config.options, requestOptions);
	return RestClient.fetch<MerchantOrder>(
		`/merchant_orders/${merchantOrderId}`,
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

