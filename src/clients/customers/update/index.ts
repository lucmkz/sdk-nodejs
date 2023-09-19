import { RestClient } from '@utils/restClient';
import type { Customer } from '../commonTypes';
import type { CustomerUpdateRequest } from './types';
import type { Options } from '@src/types';

export default function update({ customerId, body, config, requestOptions }: CustomerUpdateRequest): Promise<Customer> {
	const options: Options = Object.assign(config.options, requestOptions);
	return RestClient.fetch<Customer>(
		`/v1/customers/${customerId}`,
		{
			headers: {
				'Authorization': `Bearer ${config.accessToken}`
			},
			body: JSON.stringify(body),
			method: 'PUT',
			...options
		}
	);
}
