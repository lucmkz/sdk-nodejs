import { MercadoPagoConfig } from '@src/mercadoPagoConfig';
import type { Options } from '@src/types';

export declare type Search = {
  filters?: GetPaymentIntentList;
  config: MercadoPagoConfig;
  requestOptions?: Options;
};

export declare type GetPaymentIntentListRequest = {
  filters?: GetPaymentIntentList;
};

export declare type GetPaymentIntentList = {
  startDate: string;
  endDate: string;
};
