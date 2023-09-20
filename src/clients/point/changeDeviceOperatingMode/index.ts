import { RestClient } from '@src/utils/restClient';
import { ChangeDeviceOperatingModeResponse } from '../commonTypes';
import { ChangeDeviceOperatingMode } from './types';
import type { Options } from '@src/types';

export default function changeDeviceOperatingMode({ device_id, request, config, requestOptions }: ChangeDeviceOperatingMode): Promise<ChangeDeviceOperatingModeResponse> {
	const options: Options = Object.assign(config.options, requestOptions);
	return RestClient.fetch<ChangeDeviceOperatingModeResponse>(
		`/point/integration-api/devices/${device_id}`,
		{
			method: 'PATCH',
			headers: {
				Authorization: `Bearer ${config.accessToken}`,
			},
			body: JSON.stringify(request),
			...options,
		}
	);
}
