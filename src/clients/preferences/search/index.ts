import { RestClient } from '@utils/restClient';
import { mergeOptions } from '@src/utils/mergeOptions';

import type { Search, PreferenceSearchResponse } from './types';
import { Options } from '@src/types';

export default function search({ filters, config, requestOptions }: Search): Promise<PreferenceSearchResponse> {
	const options: Options = mergeOptions(config.options, requestOptions);
	return RestClient.fetch<PreferenceSearchResponse>(
		'/checkout/preferences/search',
		{
			headers: {
				'Authorization': `Bearer ${config.accessToken}`,
				'Content-Type': 'application/json',
			},
			queryParams: {
				...filters
			},
			...options
		}
	);
}
