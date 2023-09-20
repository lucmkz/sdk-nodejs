import { MercadoPagoConfig } from '@src/mercadoPagoConfig';
import type { Options } from '@src/types';

export declare type SearchPaymentIntent = {
  payment_intent_id: string;
  config: MercadoPagoConfig;
  requestOptions: Options;
}
