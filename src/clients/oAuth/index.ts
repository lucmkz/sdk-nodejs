import { MercadoPagoConfig } from '@src/mercadoPagoConfig';
import { OAuthRequest } from './create/types';
import create from './create';
import refresh from './refresh';
import getAuthorizationURL from './getAuthorizationURL';
import { AuthorizationRequest } from './getAuthorizationURL/types';
import { OAuthRefresh } from './refresh/types';
import { OAuthResponse } from './commonTypes';
import type { Options } from '@src/types';

/**
 * Mercado Pago OAuth.
 *
 * @see {@link https://www.mercadopago.com/developers/en/reference/oauth/_oauth_token/post Documentation }.
 */
export class OAuth {
	private config: MercadoPagoConfig;

	constructor(mercadoPagoConfig: MercadoPagoConfig) {
		this.config = mercadoPagoConfig;
	}

	/**
	 * Mercado Pago OAuth Create.
	 *
	 * @see {@link https://github.com/mercadopago/sdk-nodejs/blob/master/src/examples/src/oauth/create/create.ts Usage Example  }.
	 */
	create(oauthRequest: OAuthRequest, requestOptions?: Options): Promise<OAuthResponse> {
		return create({ oauthRequest, config: this.config, requestOptions });
	}

	/**
	 * Mercado Pago OAuth Refresh.
	 *
	 * @see {@link https://github.com/mercadopago/sdk-nodejs/blob/master/src/examples/src/oauth/refresh/refresh.ts Usage Example  }.
	 */
	refresh(oauthRequest: OAuthRefresh, requestOptions?: Options): Promise<OAuthResponse> {
		return refresh({ oauthRequest, config: this.config, requestOptions });
	}

	/**
	 * Mercado Pago OAuth getAuthorizationURL.
	 *
	 * @see {@link https://github.com/mercadopago/sdk-nodejs/blob/master/src/examples/src/oauth/getAuthorizationURL/getAuthorizationURL.ts Usage Example  }.
	 */
	getAuthorizationURL(filters : AuthorizationRequest): string {
		return getAuthorizationURL({ filters });
	}

}
