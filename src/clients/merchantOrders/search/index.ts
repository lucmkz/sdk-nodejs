import { RestClient } from '@utils/restClient';
import type { MerchantOrderSearchRequest, MerchantOrderSearchResultsPage } from './types';
import { Options } from '@src/types';
import { mergeOptions } from '@src/utils/mergeOptions';

export default function search({ filters, config, requestOptions }: MerchantOrderSearchRequest): Promise<MerchantOrderSearchResultsPage> {
	const options: Options = mergeOptions(config.options, requestOptions);
	return RestClient.fetch<MerchantOrderSearchResultsPage>(
		'/merchant_orders/search',
		{
			headers: {
				'Authorization': `Bearer ${config.accessToken}`
			},
			queryParams: {
				...filters
			},
			...options
		}
	);
}
