import type { MercadoPagoConfig } from '@src/mercadoPagoConfig';
import type { Options } from '@src/types';

export declare type CreateRefund = {
  payment_id: string;
  body?: CreateRefundBody;
};

export declare type CreateRefundBody = {
  amount: number;
};

export declare type CreateRefundRequest = {
  requestOptions: Options;
  payment_id: string;
  body?: CreateRefundBody;
  config: MercadoPagoConfig
};
