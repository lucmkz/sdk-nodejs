import { RestClient } from '@utils/restClient';
import { mergeOptions } from '@src/utils/mergeOptions';

import type { UserGet, UserResponse } from './types';
import type { Options } from '@src/types';

export default function get({ config, requestOptions }: UserGet): Promise<UserResponse[]> {
	const options: Options = mergeOptions(config.options, requestOptions);
	return RestClient.fetch<UserResponse[]>(
		'/users/me',
		{
			headers: {
				'Authorization': `Bearer ${config.accessToken}`
			},
			...options
		}
	);
}
