import { MercadoPagoConfig } from '@src/mercadoPagoConfig';
import type { Options } from '@src/types';

export declare type Search = {
  filters?: GetDevicesSearch;
  config: MercadoPagoConfig;
  requestOptions?: Options;
};

export declare type GetDevicesRequest = {
  filters?: GetDevicesSearch;
};

export declare type GetDevicesSearch = {
  store_id: string;
  pos_id: string;
  limit: number;
  offset: number;
};
