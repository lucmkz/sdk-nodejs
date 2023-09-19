import type { MercadoPagoConfig } from '@src/mercadoPagoConfig';
import type { Options } from '@src/types';

export declare type CustomerCardList = {
  customerId: string;
  config: MercadoPagoConfig;
  requestOptions: Options;
};

export declare type CustomerCardId = {
  customerId: string;
};
