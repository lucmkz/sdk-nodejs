import { RestClient } from '@utils/restClient';
import { mergeOptions } from '@src/utils/mergeOptions';

import type { CustomerCreateRequest } from './types';
import type { Customer } from '../commonTypes';
import type { Options } from '@src/types';

export default function create({ body, config, requestOptions }: CustomerCreateRequest): Promise<Customer> {
	const options: Options = mergeOptions(config.options, requestOptions);
	return RestClient.fetch<Customer>(
		'/v1/customers',
		{
			headers: {
				'Authorization': `Bearer ${config.accessToken}`
			},
			body: JSON.stringify(body),
			method: 'POST',
			...options
		}
	);
}
