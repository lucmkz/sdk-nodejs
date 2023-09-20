import type { MercadoPagoConfig } from '@src/mercadoPagoConfig';
import type { Options } from '@src/types';

export declare type GetRefundList = {
  payment_id: string;
};

export declare type GetRefundByPaymentId = {
  payment_id: string;
  config: MercadoPagoConfig;
  requestOptions?: Options;
};
