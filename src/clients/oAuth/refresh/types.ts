import type { MercadoPagoConfig } from '@src/mercadoPagoConfig';
import type { Options } from '@src/types';

export declare type OAuthRefreshRequest = {
  oauthRequest: OAuthRefresh;
  config: MercadoPagoConfig;
  requestOptions?: Options;
}

export declare type OAuthRefresh = {
  client_secret: string;
  client_id?: string;
  refresh_token: string;
}
