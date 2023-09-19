import { Paging } from '@src/clients/commonTypes';
import type { MercadoPagoConfig } from '@src/mercadoPagoConfig';
import type { Customer } from '../commonTypes';
import type { Options } from '@src/types';

export declare type CustomerSearchRequest = {
  filters?: CustomerSearchOptions;
  config: MercadoPagoConfig;
  requestOptions: Options;
};

export declare type CustomerSearchOptions = {
  email?: string;
};

export declare type CustomerSearchResultsPage = {
  results: Customer[];
  paging: Paging;
};
