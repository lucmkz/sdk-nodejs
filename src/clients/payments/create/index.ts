import { RestClient } from '@src/utils/restClient';
import type { Create } from './types';
import type { PaymentsResponse } from '../commonTypes';
import type { Options } from '@src/types';

export default function create({ body, config, requestOptions }: Create): Promise<PaymentsResponse> {
	const options: Options = Object.assign(config.options, requestOptions);
	return RestClient.fetch<PaymentsResponse>(
		'/v1/payments',
		{
			method: 'POST',
			headers: {
				'Authorization': `Bearer ${config.accessToken}`
			},
			body: JSON.stringify(body),
			...options
		}
	);
}
