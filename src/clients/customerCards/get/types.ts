import type { MercadoPagoConfig } from '@src/mercadoPagoConfig';
import type { Options } from '@src/types';

export declare type CustomerCardConfigs = {
  customerId: string;
  cardId: string;
  config: MercadoPagoConfig;
  requestOptions?: Options;
};

export declare type CustomerCardIds = {
  customerId: string;
  cardId: string;
};
