import get from './get';
import create from './create';
import remove from './remove';
import update from './update';
import search from './search';
import { CustomerCard } from '@src/clients/customerCards';

import type { MercadoPagoConfig } from '@src/mercadoPagoConfig';
import type { Customer as CustomerObj } from './commonTypes';
import type { CustomerCreate } from './create/types';
import type { CustomerUpdate } from './update/types';
import type { CustomerSearchOptions, CustomerSearchResultsPage } from './search/types';
import type { CustomerCardCreate } from '../customerCards/create/types';
import type { CustomerCardResponse } from '../customerCards/commonTypes';
import type { CustomerCardIds } from '../customerCards/get/types';
import type { CustomerCardId } from '../customerCards/list/types';
import type { Options } from '@src/types';

/**
 * Mercado Pago Customer.
 *
 * @see {@link https://www.mercadopago.com/developers/en/reference/customers/_customers/post Documentation }.
 */
export class Customer {
	private config: MercadoPagoConfig;
	private customerCard: CustomerCard;

	constructor(mercadoPagoConfig: MercadoPagoConfig) {
		this.config = mercadoPagoConfig;
		this.customerCard = new CustomerCard(mercadoPagoConfig);
	}

	/**
	 * Mercado Pago Customer create.
	 *
	 * @see {@link https://github.com/mercadopago/sdk-nodejs/blob/master/src/examples/src/customer/create/create.ts Usage Example  }.
	 */
	create ({ body }: CustomerCreate, requestOptions?: Options): Promise<CustomerObj> {
		return create({ body, config: this.config, requestOptions });
	}

	/**
	 * Mercado Pago customer get.
	 *
	 * @see {@link https://github.com/mercadopago/sdk-nodejs/blob/master/src/examples/src/customer/get/get.ts Usage Example  }.
	 */
	get(customerId: string, requestOptions?: Options ): Promise<CustomerObj> {
		return get({ customerId, config: this.config, requestOptions });
	}

	/**
	 * Mercado Pago customer remove.
	 *
	 * @see {@link https://github.com/mercadopago/sdk-nodejs/blob/master/src/examples/src/customer/remove/remove.ts Usage Example  }.
	 */
	remove(customerId: string, requestOptions?: Options ): Promise<CustomerObj> {
		return remove({ customerId, config: this.config, requestOptions });
	}

	/**
	 * Mercado Pago customer update.
	 *
	 * @see {@link https://github.com/mercadopago/sdk-nodejs/blob/master/src/examples/src/customer/update/update.ts Usage Example  }.
	 */
	update({ customerId, body }: CustomerUpdate, requestOptions?: Options ): Promise<CustomerObj> {
		return update({ customerId: customerId, body, config: this.config, requestOptions });
	}

	/**
	 * Mercado Pago customer search.
	 *
	 * @see {@link https://github.com/mercadopago/sdk-nodejs/blob/master/src/examples/src/customer/search/search.ts Usage Example  }.
	 */
	search(filters?: CustomerSearchOptions, requestOptions?: Options ): Promise<CustomerSearchResultsPage> {
		return search({ filters, config: this.config, requestOptions });
	}

	/**
	 * Mercado Pago create card for customer.
	 *
	 * @see {@link https://github.com/mercadopago/sdk-nodejs/blob/master/src/examples/src/customer/createcard/createcard.ts Usage Example  }.
	 */
	createCard({ customerId, customerCardBody }: CustomerCardCreate, requestOptions?: Options ): Promise<CustomerCardResponse> {
		return this.customerCard.create({ customerId, customerCardBody }, requestOptions);
	}

	/**
	 * Mercado Pago  get customer's card.
	 *
	 * @see {@link https://github.com/mercadopago/sdk-nodejs/blob/master/src/examples/src/customer/getcard/getcard.ts Usage Example  }.
	 */
	getCard({ customerId, cardId }: CustomerCardIds, requestOptions?: Options ): Promise<CustomerCardResponse> {
		return this.customerCard.get({ customerId, cardId }, requestOptions);
	}

	/**
	 * Mercado Pago remove customer's card .
	 *
	 * @see {@link https://github.com/mercadopago/sdk-nodejs/blob/master/src/examples/src/customer/removecard/removecard.ts Usage Example  }.
	 */
	removeCard({ customerId, cardId }: CustomerCardIds, requestOptions?: Options ): Promise<CustomerCardResponse> {
		return this.customerCard.remove({ customerId, cardId: cardId }, requestOptions);
	}

	/**
	 * Mercado Pago  list customer's cards .
	 *
	 * @see {@link https://github.com/mercadopago/sdk-nodejs/blob/master/src/examples/src/customer/listcards/listcards.ts Usage Example  }.
	 */
	listCards({ customerId }: CustomerCardId, requestOptions?: Options ): Promise<CustomerCardResponse[]> {
		return this.customerCard.list({ customerId }, requestOptions);
	}
}
