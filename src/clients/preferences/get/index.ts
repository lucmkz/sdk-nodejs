import { RestClient } from '@utils/restClient';
import type { GetPreference } from './types';
import type { PreferenceResponse } from '@src/clients/preferences/commonTypes';
import type { Options } from '@src/types';

export default function get({ id, config, requestOptions }: GetPreference): Promise<PreferenceResponse> {
	const options: Options = Object.assign(config.options, requestOptions);
	return RestClient.fetch<PreferenceResponse>(
		`/checkout/preferences/${id}`,
		{
			headers: {
				'Authorization': `Bearer ${config.accessToken}`
			},
			...options
		}
	);
}
