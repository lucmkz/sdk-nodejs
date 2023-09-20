import { RestClient } from '@utils/restClient';
import type { UpdatePreApprovalPlan } from './types';
import type { PreApprovalPlanResponse } from '@src/clients/preApprovalPlans/commonTypes';
import { Options } from '@src/types';

export default function update({ id, updatePreApprovalPlanRequest, config, requestOptions }: UpdatePreApprovalPlan): Promise<PreApprovalPlanResponse> {
	const options: Options = Object.assign(config.options, requestOptions);
	return RestClient.fetch<PreApprovalPlanResponse>(
		`/preapproval_plan/${id}`,
		{
			method: 'PUT',
			headers: {
				'Authorization': `Bearer ${config.accessToken}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(updatePreApprovalPlanRequest),
			...options
		}
	);
}
