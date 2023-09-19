import type { MercadoPagoConfig } from '@src/mercadoPagoConfig';
import type { CustomerRequestBody } from '../commonTypes';
import type { Options } from '@src/types';

export declare type CustomerUpdate = {
  customerId: string;
  body: CustomerRequestBody;
};

export declare type CustomerUpdateRequest = {
  customerId: string;
  body: CustomerRequestBody;
  config: MercadoPagoConfig;
  requestOptions: Options;
};
