import { RestClient } from '@utils/restClient';
import { mergeOptions } from '@src/utils/mergeOptions';

import type { IdentificationTypeGet, IdentificationTypeResponse } from './types';
import type { Options } from '@src/types';

export default function list({ config, requestOptions }: IdentificationTypeGet): Promise<IdentificationTypeResponse[]> {
	const options: Options = mergeOptions(config.options, requestOptions);
	return RestClient.fetch<IdentificationTypeResponse[]>(
		'/v1/identification_types',
		{
			headers: {
				'Authorization': `Bearer ${config.accessToken}`
			},
			...options
		}
	);
}
