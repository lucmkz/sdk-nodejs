import type { MercadoPagoConfig } from '@src/mercadoPagoConfig';
import type { Options } from '@src/types';

export declare type MerchantOrderGetRequest = {
  merchantOrderId: string;
  config: MercadoPagoConfig;
  requestOptions?: Options;
}
