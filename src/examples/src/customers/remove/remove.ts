/**
 * Mercado Pago Customer card remove.
 *
 * @see {@link https://www.mercadopago.com.br/developers/pt/reference/cards/_customers_customer_id_cards_id/delete Documentation }.
*/
import MercadoPago, { Customer } from '@src/index';

const client = new MercadoPago({ accessToken: 'access_token' });
const customerClient = new Customer(client);

customerClient.remove('123')
	.then((result) => console.log(result));