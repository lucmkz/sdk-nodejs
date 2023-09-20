import { RestClient } from '@utils/restClient';
import { mergeOptions } from '@src/utils/mergeOptions';

import type { Search, PreApprovalPlanSearchResponse } from './types';
import type { Options } from '@src/types';

export default function search({ filters, config, requestOptions }: Search): Promise<PreApprovalPlanSearchResponse> {
	const options: Options = mergeOptions(config.options, requestOptions);
	return RestClient.fetch<PreApprovalPlanSearchResponse>(
		'/preapproval_plan/search',
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
