import { RestClient } from '@utils/restClient';
import { mergeOptions } from '@src/utils/mergeOptions';

import type { PaymentMethodGet, PaymentMethodResponse } from './types';
import type { Options } from '@src/types';

export default function get({ config, requestOptions }: PaymentMethodGet): Promise<PaymentMethodResponse[]> {
	const options: Options = mergeOptions(config.options, requestOptions);
	return RestClient.fetch<PaymentMethodResponse[]>(
		'/v1/payment_methods',
		{
			headers: {
				'Authorization': `Bearer ${config.accessToken}`
			},
			...options
		}
	);
}
