import { RestClient } from '@utils/restClient';

import type { UserGet, UserResponse } from './types';
import type { Options } from '@src/types';

export default function get({ config, requestOptions }: UserGet): Promise<UserResponse[]> {
	const options: Options = Object.assign(config.options, requestOptions);
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
