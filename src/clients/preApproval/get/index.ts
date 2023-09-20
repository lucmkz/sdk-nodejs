import { RestClient } from '@utils/restClient';
import { mergeOptions } from '@src/utils/mergeOptions';
import type { GetPreApprovalRequest } from './types';
import type { PreApprovalResponse } from '@src/clients/preApproval/commonTypes';
import type { Options } from '@src/types';

export default function get({ id, config, requestOptions }: GetPreApprovalRequest): Promise<PreApprovalResponse> {
	const options: Options = mergeOptions(config.options, requestOptions);
	return RestClient.fetch<PreApprovalResponse>(
		`/preapproval/${id}`,
		{
			method: 'GET',
			headers: {
				'Authorization': `Bearer ${config.accessToken}`,
			},
			...options
		}
	);
}
