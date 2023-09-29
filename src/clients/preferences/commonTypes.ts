import type { Address, Identification, Items, Shipments } from '@src/clients/commonTypes';
import { ApiResponse } from '@src/types';

export declare type Phone = {
  area_code?: string;
  number?: string;
};

export declare type Payer = {
  name?: string;
  surname?: string;
  email?: string;
  phone?: Phone;
  identification?: Identification;
  address?: Address;
  date_created?: string;
  last_purchase?: string;
};

export declare type DifferentialPricing = {
  id?: number;
};

export declare type ExcludedPaymentMethods = {
  id?: string;
};

export declare type ExcludedPaymentTypes = {
  id?: string;
};

export declare type PaymentMethods = {
  default_card_id?: string;
  default_payment_method_id?: string;
  excluded_payment_methods?: Array<ExcludedPaymentMethods>;
  excluded_payment_types?: Array<ExcludedPaymentTypes>;
  installments?: number;
  default_installments?: number;
};

export declare type TrackValues = {
  conversion_id?: string;
  conversion_label?: string;
  pixel_id?: string;
};

export declare type Track = {
  type?: string;
  values?: TrackValues;
};

export declare type BackUrls = {
  success?: string;
  pending?: string;
  failure?: string;
};

export declare type Tax = {
  type?: string;
  value?: number;
};


export declare type PreferenceRequest = {
  additional_info?: string;
  auto_return?: string;
  back_urls?: BackUrls;
  binary_mode?: boolean;
  date_of_expiration?: string;
  differential_pricing?: DifferentialPricing;
  expiration_date_from?: string;
  expiration_date_to?: string;
  expires?: boolean;
  external_reference?: string;
  items: Array<Items>;
  marketplace?: string;
  marketplace_fee?: number;
  metadata?: any;
  notification_url?: string;
  operation_type?: string;
  payer?: Payer;
  payment_methods?: PaymentMethods;
  processing_modes?: Array<string>;
  purpose?: string;
  shipments?: Shipments;
  statement_descriptor?: string;
  taxes?: Array<Tax>;
  tracks?: Array<Track>;
}

export declare interface PreferenceResponse extends ApiResponse {
  additional_info?: string;
  auto_return?: string;
  back_urls?: BackUrls;
  binary_mode?: boolean;
  client_id?: string;
  collector_id?: number;
  date_created?: string;
  date_of_expiration?: string;
  differential_pricing?: DifferentialPricing;
  expiration_date_from?: string;
  expiration_date_to?: string;
  expires?: boolean;
  external_reference?: string;
  id?: string;
  init_point?: string;
  internal_metadata?: any;
  items?: Array<Items>;
  marketplace?: string;
  marketplace_fee?: number;
  metadata?: any;
  notification_url?: string;
  operation_type?: string;
  payer?: Payer;
  payment_methods?: PaymentMethods;
  processing_modes?: Array<string>;
  purpose?: string;
  sandbox_init_point?: string;
  site_id?: string;
  shipments?: Shipments;
  statement_descriptor?: string;
  tracks?: Array<Track>;
  taxes?: Array<Tax>;
}
