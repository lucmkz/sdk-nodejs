import { MercadoPagoConfig } from '@src/mercadoPagoConfig';
import type { Options } from '@src/types';

export declare type PaymentIntentStatus = {
  requestOptions?: Options;
  payment_intent_id: string;
  config: MercadoPagoConfig;
}
