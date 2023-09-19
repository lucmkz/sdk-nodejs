import type { MercadoPagoConfig } from '@src/mercadoPagoConfig';
import type { Options } from '@src/types';

export declare type CustomerGetRequest = {
  customerId: string;
  config: MercadoPagoConfig;
  requestOptions: Options;
};
