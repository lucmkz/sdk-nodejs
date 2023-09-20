import get from './get';

import type { MercadoPagoConfig } from '@src/mercadoPagoConfig';
import type { PaymentMethodResponse } from './get/types';
import type { Options } from '@src/types';

/**
 * Mercado Pago PaymentMethods.
 *
 * @see {@link https://www.mercadopago.com/developers/en/reference Documentation }.
 */
export class PaymentMethod {
	private config: MercadoPagoConfig;

	constructor(mercadoPagoConfig: MercadoPagoConfig) {
		this.config = mercadoPagoConfig;
	}

	/**
   * Mercado Pago Search.
   *
   * @see {@link https://github.com/mercadopago/sdk-nodejs/blob/master/examples/src/paymentmethods/get.ts Usage Example  }.
   */
	get(requestOptions?: Options): Promise<PaymentMethodResponse[]> {
		return get({ config: this.config, requestOptions });
	}
}
