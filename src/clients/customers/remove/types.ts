import type { MercadoPagoConfig } from '@src/mercadoPagoConfig';
import type { Options } from '@src/types';

export declare type CustomerDeleteRequest = {
  customerId: string;
  config: MercadoPagoConfig;
  requestOptions: Options;
};
