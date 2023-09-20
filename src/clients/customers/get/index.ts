import { RestClient } from '@utils/restClient';
import { mergeOptions } from '@src/utils/mergeOptions';

import type { CustomerGetRequest } from './types';
import type { Customer } from '../commonTypes';
import type { Options } from '@src/types';

export default function get({ customerId, config, requestOptions }: CustomerGetRequest): Promise<Customer> {
	const options: Options = mergeOptions(config.options, requestOptions);
	return RestClient.fetch<Customer>(
		`/v1/customers/${customerId}`,
		{
			headers: {
				'Authorization': `Bearer ${config.accessToken}`
			},
			...options
		}
	);
}
