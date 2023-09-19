import type { CustomerCardCardholder } from '@src/clients/cardTokens/get/types';
import type { MercadoPagoConfig } from '@src/mercadoPagoConfig';
import type { Options } from '@src/types';

export declare type CustomerCardConfigUpdate = {
  customerId: string;
  cardId: string;
  body: CustomerCardUpdateBody;
  config: MercadoPagoConfig;
  requestOptions: Options;
};

export declare type CustomerCardUpdateBody = {
  expiration_month?: number;
  expiration_year?: string;
  cardholder: CustomerCardCardholder;
  token?: string;
};

export declare type CustomerCardUpdate = {
  customerId: string;
  cardId: string;
  customerCardBody: CustomerCardUpdateBody;
};
