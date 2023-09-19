import type { MercadoPagoConfig } from '@src/mercadoPagoConfig';
import type { Options } from '@src/types';

export declare type CustomerCard = {
  customerId: string;
  body: CustomerCardBody;
  config: MercadoPagoConfig;
  requestOptions: Options;
};

export declare type CustomerCardBody = {
  token: string;
};

export declare type CustomerCardCreate = {
  customerId: string;
  customerCardBody: CustomerCardBody;
};
