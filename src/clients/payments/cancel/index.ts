import { RestClient } from '@utils/restClient';
import { mergeOptions } from '@src/utils/mergeOptions';

import type { PaymentsResponse } from '../commonTypes';
import type { PaymentCancelRequest } from './types';

export default function cancel({ id, config, requestOptions }: PaymentCancelRequest): Promise<PaymentsResponse>  {
	const options = mergeOptions(config.options, requestOptions);
	const cancelBody = {
		status: 'cancelled'
	};
	return RestClient.fetch<PaymentsResponse>(
		`/v1/payments/${id}`,
		{
			method: 'PUT',
			headers: {
				'Authorization': `Bearer ${config.accessToken}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(cancelBody),
			...options
		}
	);
}
