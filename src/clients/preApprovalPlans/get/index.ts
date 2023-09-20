import { RestClient } from '@utils/restClient';
import type { GetPreApprovalPlan } from './types';
import type { PreApprovalPlanResponse } from '@src/clients/preApprovalPlans/commonTypes';
import type { Options } from '@src/types';

export default function get({ id, config, requestOptions }: GetPreApprovalPlan): Promise<PreApprovalPlanResponse> {
	const options: Options = Object.assign(config.options, requestOptions);
	return RestClient.fetch<PreApprovalPlanResponse>(
		`/preapproval_plan/${id}`,
		{
			headers: {
				'Authorization': `Bearer ${config.accessToken}`
			},
			...options
		}
	);
}
