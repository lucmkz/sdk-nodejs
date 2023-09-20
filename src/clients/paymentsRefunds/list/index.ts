import { RestClient } from '@utils/restClient';
import { mergeOptions } from '@src/utils/mergeOptions';

import type { GetRefundByPaymentId } from './types';
import type { RefundResponse } from '../commonTypes';
import type { Options } from '@src/types';

export default function list({ payment_id, config, requestOptions }: GetRefundByPaymentId): Promise<Array<RefundResponse>> {
	const options: Options = mergeOptions(config.options, requestOptions);
	return RestClient.fetch<Array<RefundResponse>>(
		`/v1/payments/${payment_id}/refunds/`,
		{
			headers: {
				'Authorization': `Bearer ${config.accessToken}`
			},
			...options
		}
	);
}
