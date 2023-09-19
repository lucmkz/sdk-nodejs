import { RestClient } from '@utils/restClient';

import type { PaymentsResponse } from '../commonTypes';
import type { PaymentCancelRequest } from './types';
import { Options } from '@src/types';

export default function cancel({ id, config, requestOptions }: PaymentCancelRequest): Promise<PaymentsResponse>  {
	const options: Options = Object.assign(config.options, requestOptions);
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
