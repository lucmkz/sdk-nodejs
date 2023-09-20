import { RestClient } from '@utils/restClient';
import { mergeOptions } from '@src/utils/mergeOptions';

import type { UpdatePreApproval, PreApprovalUpdateResponse } from './types';
import type { Options } from '@src/types';

export default function update({ id, body, config, requestOptions }: UpdatePreApproval): Promise<PreApprovalUpdateResponse> {
	const options: Options = mergeOptions(config.options, requestOptions);
	return RestClient.fetch<PreApprovalUpdateResponse>(
		`/preapproval/${id}`,
		{
			method: 'PUT',
			headers: {
				'Authorization': `Bearer ${config.accessToken}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
			...options
		}
	);
}
