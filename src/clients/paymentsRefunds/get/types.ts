import type { MercadoPagoConfig } from '@src/mercadoPagoConfig';
import { Options } from '@src/types';

export declare type GetRefund = {
  payment_id: string;
  refund_id: string;
};

export declare type Get = {
  requestOptions: Options;
  payment_id: string;
  refund_id: string;
  config: MercadoPagoConfig;
};
