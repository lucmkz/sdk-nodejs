import type { MercadoPagoConfig } from '@src/mercadoPagoConfig';
import type { Options } from '@src/types';

export declare type PaymentCancelRequestBody = {
  id: string;
}

export declare interface PaymentCancelRequest extends PaymentCancelRequestBody {
  requestOptions: Options;
  config: MercadoPagoConfig;
}
