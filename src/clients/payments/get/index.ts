import { RestClient } from '@utils/restClient';
import { mergeOptions } from '@src/utils/mergeOptions';

import type { PaymentsResponse } from '../commonTypes';
import type { PaymentGetRequest } from './types';
import type { Options } from '@src/types';

export default function get({ id, config, requestOptions }: PaymentGetRequest): Promise<PaymentsResponse>  {
	const options: Options = mergeOptions(config.options, requestOptions);
	return RestClient.fetch<PaymentsResponse>(
		`/v1/payments/${id}`,
		{
			headers: {
				'Authorization': `Bearer ${config.accessToken}`,
				'Content-Type': 'application/json',
			},
			...options
		}
	);
}
