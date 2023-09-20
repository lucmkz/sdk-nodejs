import type { MercadoPagoConfig } from '@src/mercadoPagoConfig';
import type { Options } from '@src/types';

export declare type PaymentGetRequestBody = {
  id: string;
}

export declare interface PaymentGetRequest extends PaymentGetRequestBody {
  config: MercadoPagoConfig;
  requestOptions?: Options;
}
