import type { MercadoPagoConfig } from '@src/mercadoPagoConfig';
import { Options } from '@src/types';

export declare type GetPreApprovalPlan = {
  id: string;
  config: MercadoPagoConfig;
  requestOptions?: Options;
};

export declare type PreApprovalPlanId = {
  preApprovalPlanId: string;
};
