import { RestClient } from '@src/utils/restClient';
import { PaymentIntentStatusResponse } from '../commonTypes';
import { PaymentIntentStatus } from './types';
import type { Options } from '@src/types';

export default function getPaymentIntentStatus({ payment_intent_id, config, requestOptions }: PaymentIntentStatus): Promise<PaymentIntentStatusResponse> {
	const options: Options = Object.assign(config.options, requestOptions);
	return RestClient.fetch<PaymentIntentStatusResponse>(
		`/point/integration-api/payment-intents/${payment_intent_id}/events`,
		{
			method: 'GET',
			headers: {
				Authorization: `Bearer ${config.accessToken}`,
			},
			...options,
		}
	);
}
