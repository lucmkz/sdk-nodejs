import { RestClient } from '@utils/restClient';
import type { Get } from './types';
import type { RefundResponse } from '../commonTypes';
import type { Options } from '@src/types';

export default function get({ payment_id, refund_id, config, requestOptions }: Get): Promise<RefundResponse> {
	const options: Options = Object.assign(config.options, requestOptions);
	return RestClient.fetch<RefundResponse>(
		`/v1/payments/${payment_id}/refunds/${refund_id}`,
		{
			headers: {
				'Authorization': `Bearer ${config.accessToken}`
			},
			...options
		}
	);
}
