import { RestClient } from '@utils/restClient';
import type { CustomerSearchRequest, CustomerSearchResultsPage } from './types';
import type { Options } from '@src/types';

export default function search({ filters, config, requestOptions }: CustomerSearchRequest): Promise<CustomerSearchResultsPage> {
	const options: Options = Object.assign(config.options, requestOptions);
	return RestClient.fetch<CustomerSearchResultsPage>(
		'/v1/customers/search',
		{
			headers: {
				'Authorization': `Bearer ${config.accessToken}`
			},
			queryParams: {
				...filters
			},
			...options
		}
	);
}
