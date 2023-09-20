import { MercadoPagoConfig } from '@src/mercadoPagoConfig';
import { PaymentIntentRequest } from '../commonTypes';
import type { Options } from '@src/types';

export declare type CreatePaymentIntent = {
  requestOptions?: Options;
  device_id: string;
  request: PaymentIntentRequest;
  config: MercadoPagoConfig;
};

export declare type CreatePaymentIntentRequest = {
  device_id: string;
  request: PaymentIntentRequest;
};
