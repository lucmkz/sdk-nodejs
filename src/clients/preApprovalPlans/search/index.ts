import { RestClient } from '@utils/restClient';
import type { Search, PreApprovalPlanSearchResponse } from './types';
import type { Options } from '@src/types';

export default function search({ filters, config, requestOptions }: Search): Promise<PreApprovalPlanSearchResponse> {
	const options: Options = Object.assign(config.options, requestOptions);
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
