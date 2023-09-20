import { RestClient } from '@utils/restClient';
import { mergeOptions } from '@src/utils/mergeOptions';

import type { PaymentsResponse } from '../commonTypes';
import type { PaymentCaptureRequest } from './types';
import type { Options } from '@src/types';

export default function capture({ id, transaction_amount, config, requestOptions }: PaymentCaptureRequest): Promise<PaymentsResponse>  {
	const options: Options = mergeOptions(config.options, requestOptions);
	const captureBody = {
		capture: true,
		transaction_amount
	};

	return RestClient.fetch<PaymentsResponse>(
		`/v1/payments/${id}`,
		{
			method: 'PUT',
			headers: {
				'Authorization': `Bearer ${config.accessToken}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(captureBody),
			...options
		}
	);
}
