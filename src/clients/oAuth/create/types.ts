import type { MercadoPagoConfig } from '@src/mercadoPagoConfig';
import type { Options } from '@src/types';

export declare type CreateOAuthRequest = {
  oauthRequest: OAuthRequest;
  config: MercadoPagoConfig;
  requestOptions?: Options;
}

export declare type OAuthRequest = {
  client_secret: string;
  client_id?: string;
  code: string;
  redirect_uri: string;
}
