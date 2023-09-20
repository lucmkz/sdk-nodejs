import { RestClient } from '@utils/restClient';
import { mergeOptions } from '@src/utils/mergeOptions';

import type { CreateRefundRequest } from './types';
import type { RefundResponse } from '../commonTypes';
import type { Options } from '@src/types';

export default function create({ payment_id, body, config, requestOptions }: CreateRefundRequest): Promise<RefundResponse> {
	const options: Options = mergeOptions(config.options, requestOptions);
	return RestClient.fetch<RefundResponse>(
		`/v1/payments/${payment_id}/refunds`,
		{
			method: 'POST',
			headers: {
				'Authorization': `Bearer ${config.accessToken}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
			...options
		}
	);
}
