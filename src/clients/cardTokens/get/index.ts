import { RestClient } from '@utils/restClient';
import { mergeOptions } from '@src/utils/mergeOptions';

import type { CardTokenGet, CardTokenResponse } from './types';
import type { Options } from '@src/types';

export default function get({ id, config, requestOptions }: CardTokenGet): Promise<CardTokenResponse> {
	const options: Options = mergeOptions(config.options, requestOptions);
	return RestClient.fetch<CardTokenResponse>(
		`/v1/card_tokens/${id}`,
		{
			headers: {
				'Authorization': `Bearer ${config.accessToken}`
			},
			...options
		}
	);
}
