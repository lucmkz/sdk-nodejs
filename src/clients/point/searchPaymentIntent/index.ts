import { RestClient } from '@src/utils/restClient';
import { mergeOptions } from '@src/utils/mergeOptions';

import { PaymentIntentResponse } from '../commonTypes';
import { SearchPaymentIntent } from './types';
import type { Options } from '@src/types';

export default function searchPaymentIntent({ payment_intent_id, config, requestOptions }: SearchPaymentIntent): Promise<PaymentIntentResponse> {
	const options: Options = mergeOptions(config.options, requestOptions);
	return RestClient.fetch<PaymentIntentResponse>(
		`/point/integration-api/payment-intents/${payment_intent_id}`,
		{
			method: 'GET',
			headers: {
				Authorization: `Bearer ${config.accessToken}`,
			},
			...options,
		}
	);
}
