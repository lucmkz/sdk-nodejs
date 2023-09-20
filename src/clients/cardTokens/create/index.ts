import { RestClient } from '@utils/restClient';
import { mergeOptions } from '@src/utils/mergeOptions';

import type { CardTokenResponse } from '../get/types';
import type { CardTokenCreate } from './types';
import type { Options } from '@src/types';

export default function create({ body, config, requestOptions }: CardTokenCreate): Promise<CardTokenResponse> {
	const options: Options = mergeOptions(config.options, requestOptions);
	return RestClient.fetch<CardTokenResponse>(
		'/v1/card_tokens',
		{
			headers: {
				'Authorization': `Bearer ${config.accessToken}`
			},
			body: JSON.stringify(body),
			method: 'POST',
			...options
		}
	);
}
