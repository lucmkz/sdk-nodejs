import type { MercadoPagoConfig } from '@src/mercadoPagoConfig';
import type { CustomerRequestBody } from '../commonTypes';
import type { Options } from '@src/types';

export declare type CustomerCreate = {
  body: CustomerRequestBody;
};

export declare type CustomerCreateRequest = {
  body: CustomerRequestBody;
  config: MercadoPagoConfig;
  requestOptions?: Options;
};
