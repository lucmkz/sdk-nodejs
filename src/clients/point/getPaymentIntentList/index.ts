import { RestClient } from '@src/utils/restClient';
import { GetPaymentIntentListResponse } from '../commonTypes';
import { Search } from './types';
import type { Options } from '@src/types';

export default function getPaymentIntentList({ filters, config, requestOptions }: Search): Promise<GetPaymentIntentListResponse> {
	const options: Options = Object.assign(config.options, requestOptions);
	return RestClient.fetch<GetPaymentIntentListResponse>(
		'/point/integration-api/payment-intents/events',
		{
			method: 'GET',
			headers: {
				Authorization: `Bearer ${config.accessToken}`,
				'Content-Type': 'application/json',
			},
			queryParams: {
				...filters,
			},
			...options,
		}
	);
}
