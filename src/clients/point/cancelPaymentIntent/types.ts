import { MercadoPagoConfig } from '@src/mercadoPagoConfig';
import type { Options } from '@src/types';

export declare type CancelPaymentIntent = {
  device_id: string;
  payment_intent_id: string;
  config: MercadoPagoConfig;
  requestOptions: Options;
}
