import { RestClient } from '@src/utils/restClient';
import { mergeOptions } from '@src/utils/mergeOptions';

import { CreatePaymentIntent } from './types';
import { PaymentIntentResponse } from '../commonTypes';
import type { Options } from '@src/types';

export default function createPaymentIntent({ device_id, request, config, requestOptions }: CreatePaymentIntent): Promise<PaymentIntentResponse> {
	const options: Options = mergeOptions(config.options, requestOptions);
	return RestClient.fetch<PaymentIntentResponse>(
		`/point/integration-api/devices/${device_id}/payment-intents`,
		{
			method: 'POST',
			headers: {
				Authorization: `Bearer ${config.accessToken}`,
			},
			body: JSON.stringify(request),
			...options,
		}
	);
}
