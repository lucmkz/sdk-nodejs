import { RestClient } from '@utils/restClient';
import { mergeOptions } from '@src/utils/mergeOptions';

import type { UpdatePreference } from './types';
import type { PreferenceResponse } from '@src/clients/preferences/commonTypes';
import type { Options } from '@src/types';

export default function update({ id, updatePreferenceRequest, config, requestOptions }: UpdatePreference): Promise<PreferenceResponse> {
	const options: Options = mergeOptions(config.options, requestOptions);
	return RestClient.fetch<PreferenceResponse>(
		`/checkout/preferences/${id}`,
		{
			method: 'PUT',
			headers: {
				'Authorization': `Bearer ${config.accessToken}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(updatePreferenceRequest),
			...options
		}
	);
}
