import { RestClient } from '@utils/restClient';
import { mergeOptions } from '@src/utils/mergeOptions';

import type { Customer } from '../commonTypes';
import type { CustomerDeleteRequest } from './types';
import type { Options } from '@src/types';

export default function remove({ customerId, config, requestOptions }: CustomerDeleteRequest): Promise<Customer> {
	const options: Options = mergeOptions(config.options, requestOptions);
	return RestClient.fetch<Customer>(
		`/v1/customers/${customerId}`,
		{
			headers: {
				'Authorization': `Bearer ${config.accessToken}`
			},
			method: 'DELETE',
			...options
		}
	);
}
