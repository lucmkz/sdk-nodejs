import type { MercadoPagoConfig } from '@src/mercadoPagoConfig';
import type { Options } from '@src/types';

export declare type IdentificationTypeGet = {
  config: MercadoPagoConfig;
  requestOptions: Options;
};

export declare type IdentificationTypeResponse = {
  id: string;
  name: string;
  type: string;
  min_length: number;
  max_length: number;
};
