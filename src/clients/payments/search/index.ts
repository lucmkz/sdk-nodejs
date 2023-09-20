import { RestClient } from '@src/utils/restClient';
import { mergeOptions } from '@src/utils/mergeOptions';

import type { PaymentsSearch, Search } from './types';
import type { Options } from '@src/types';

export default function search({ filters, config, requestOptions }: Search): Promise<PaymentsSearch> {
	const options: Options = mergeOptions(config.options, requestOptions);
	return RestClient.fetch<PaymentsSearch>(
		'/v1/payments/search',
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
