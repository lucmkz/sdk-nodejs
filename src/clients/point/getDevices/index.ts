import { RestClient } from '@src/utils/restClient';
import { mergeOptions } from '@src/utils/mergeOptions';

import { GetDevicesResponse } from '../commonTypes';
import { Search } from './types';
import type { Options } from '@src/types';

export default function getDevices({ filters, config, requestOptions }: Search): Promise<GetDevicesResponse> {
	const options: Options = mergeOptions(config.options, requestOptions);
	return RestClient.fetch<GetDevicesResponse>(
		'/point/integration-api/devices',
		{
			method: 'GET',
			headers: {
				Authorization: `Bearer ${config.accessToken}`,
				'Content-Type': 'application/json',
			},
			queryParams: {
				...filters,
			},
			...options,
		}
	);
}
