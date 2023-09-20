import { RestClient } from '@utils/restClient';
import { mergeOptions } from '@src/utils/mergeOptions';

import type { CreatePreApprovalPlanRequest } from './types';
import type { PreApprovalPlanResponse } from '@src/clients/preApprovalPlans/commonTypes';
import type { Options } from '@src/types';

export default function create({ preApprovalPlanRequest, config, requestOptions }: CreatePreApprovalPlanRequest): Promise<PreApprovalPlanResponse> {
	const options: Options = mergeOptions(config.options, requestOptions);
	return RestClient.fetch<PreApprovalPlanResponse>(
		'/preapproval_plan/',
		{
			method: 'POST',
			headers: {
				'Authorization': `Bearer ${config.accessToken}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(preApprovalPlanRequest),
			...options
		}
	);
}
