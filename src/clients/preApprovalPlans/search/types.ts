import type { MercadoPagoConfig } from '@src/mercadoPagoConfig';
import type { PreApprovalPlanResponse } from '../commonTypes';
import type { Options } from '@src/types';

export declare type Search = {
  filters?: PreApprovalPlanSearchOptions;
  config: MercadoPagoConfig;
  requestOptions: Options;
};

export declare type PreApprovalPlanSearchOptions = {
  status?: string;
  q?: string;
  sort?: string;
  criteria?: string;
  offset?: string;
  limit?: string;
};

export declare type PreApprovalPlanSearchResponse = {
  paging: PreApprovalPlanSearchPaging;
  results: Array<PreApprovalPlanResponse>;
};

export declare type PreApprovalPlanSearchPaging = {
  total: number;
  limit: number;
  offset: number;
};


