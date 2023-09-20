import { RestClient } from '@utils/restClient';
import { mergeOptions } from '@src/utils/mergeOptions';

import type { CreateOAuthRequest } from './types';
import type { OAuthResponse } from '../commonTypes';
import type { Options } from '@src/types';

export default function create({ oauthRequest, config, requestOptions }: CreateOAuthRequest): Promise<OAuthResponse> {
	const options: Options = mergeOptions(config.options, requestOptions);
	const defaultRequest = {
		...oauthRequest,
		'grant_type': 'authorization_code',
	};

	return RestClient.fetch<OAuthResponse>(
		'/oauth/token',
		{
			method: 'POST',
			headers: {
				'Authorization': `Bearer ${config.accessToken}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(defaultRequest),
			...options
		}
	);
}
