import { RestClient } from '@utils/restClient';
import { mergeOptions } from '@src/utils/mergeOptions';

import type { Search, PreApprovalSearchResponse } from './types';
import type { Options } from '@src/types';

export default function search({ filters, config, requestOptions }: Search): Promise<PreApprovalSearchResponse> {
	const options: Options = mergeOptions(config.options, requestOptions);
	return RestClient.fetch<PreApprovalSearchResponse>(
		'/preapproval/search',
		{
			headers: {
				'Authorization': `Bearer ${config.accessToken}`,
				'Content-Type': 'application/json',
			},
			queryParams: {
				...filters
			},
			...options
		}
	);
}
