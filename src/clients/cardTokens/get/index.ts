import { RestClient } from '@utils/restClient';
import type { CardTokenGet, CardTokenResponse } from './types';
import { Options } from '@src/types';

export default function get({ id, config, requestOptions }: CardTokenGet): Promise<CardTokenResponse> {
	const options: Options = Object.assign(config.options, requestOptions);
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
