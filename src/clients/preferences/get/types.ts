import type { MercadoPagoConfig } from '@src/mercadoPagoConfig';
import type { Options } from '@src/types';

export declare type GetPreference = {
  id: string;
  config: MercadoPagoConfig;
  requestOptions: Options;
};

export declare type PreferenceId = {
  preferenceId: string;
};
