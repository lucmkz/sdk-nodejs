import { RestClient } from '@utils/restClient';

import type { PaymentsRefundsGetClient } from './types';
import type { RefundResponse } from '../commonTypes';

export default function get({ payment_id, refund_id, config }: PaymentsRefundsGetClient): Promise<RefundResponse> {
	return RestClient.fetch<RefundResponse>(
		`/v1/payments/${payment_id}/refunds/${refund_id}`,
		{
			headers: {
				'Authorization': `Bearer ${config.accessToken}`
			},
			...config.options
		}
	);
}
