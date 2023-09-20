import { RestClient } from '@utils/restClient';
import type { CreatePreApprovalRequest } from './types';
import type { PreApprovalResponse } from '@src/clients/preApproval/commonTypes';
import { mergeOptions } from '@src/utils/mergeOptions';
import { Options } from '@src/types';

export default function create({ body, config, requestOptions }: CreatePreApprovalRequest): Promise<PreApprovalResponse> {
	const options: Options = mergeOptions(config.options, requestOptions);
	return RestClient.fetch<PreApprovalResponse>(
		'/preapproval/',
		{
			method: 'POST',
			headers: {
				'Authorization': `Bearer ${config.accessToken}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
			...options
		}
	);
}
