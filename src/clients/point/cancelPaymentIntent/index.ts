import { RestClient } from '@src/utils/restClient';
import { mergeOptions } from '@src/utils/mergeOptions';

import { CancelPaymentIntentResponse } from '../commonTypes';
import { CancelPaymentIntent } from './types';
import type { Options } from '@src/types';

export default function cancelPaymentIntent({ device_id, payment_intent_id, config, requestOptions }: CancelPaymentIntent): Promise<CancelPaymentIntentResponse> {
	const options: Options = mergeOptions(config.options, requestOptions);
	return RestClient.fetch<CancelPaymentIntentResponse>(
		`/point/integration-api/devices/${device_id}/payment-intents/${payment_intent_id}`,
		{
			method: 'DELETE',
			headers: {
				Authorization: `Bearer ${config.accessToken}`,
			},
			...options,
		}
	);
}
