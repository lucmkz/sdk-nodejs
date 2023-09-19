import type { MercadoPagoConfig } from '@src/mercadoPagoConfig';
import type { Options } from '@src/types';

export declare type PaymentCaptureRequestBody = {
  id: string;
  transaction_amount: number,
}

export declare interface PaymentCaptureRequest extends PaymentCaptureRequestBody {
  config: MercadoPagoConfig;
  requestOptions: Options
}
