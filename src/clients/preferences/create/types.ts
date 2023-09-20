import type { MercadoPagoConfig } from '@src/mercadoPagoConfig';
import type { PreferenceRequest } from '@src/clients/preferences/commonTypes';
import type { Options } from '@src/types';

export declare type CreatePreferenceRequest = {
  preferenceRequest: PreferenceRequest;
  config: MercadoPagoConfig;
  requestOptions?: Options;
};
