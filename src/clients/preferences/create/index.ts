import { RestClient } from '@utils/restClient';
import type { CreatePreferenceRequest } from './types';
import type { PreferenceResponse } from '@src/clients/preferences/commonTypes';
import { Options } from '@src/types';

export default function create({ preferenceRequest, config, requestOptions }: CreatePreferenceRequest): Promise<PreferenceResponse> {
	const options: Options = Object.assign(config.options, requestOptions);
	return RestClient.fetch<PreferenceResponse>(
		'/checkout/preferences/',
		{
			method: 'POST',
			headers: {
				'Authorization': `Bearer ${config.accessToken}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(preferenceRequest),
			...options
		}
	);
}
