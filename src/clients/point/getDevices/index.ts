import { RestClient } from '@src/utils/restClient';
import { GetDevicesResponse } from '../commonTypes';
import { Search } from './types';
import type { Options } from '@src/types';

export default function getDevices({ filters, config, requestOptions }: Search): Promise<GetDevicesResponse> {
	const options: Options = Object.assign(config.options, requestOptions);
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
