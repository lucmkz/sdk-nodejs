import type { MercadoPagoConfig } from '@src/mercadoPagoConfig';
import type { PreApprovalPlanRequest } from '@src/clients/preApprovalPlans/commonTypes';
import type { Options } from '@src/types';

export declare type PreApprovalPlanId = {
  preApprovalPlanId: string;
};

export declare type UpdatePreApprovalPlan = {
  requestOptions?: Options;
  id: string;
  updatePreApprovalPlanRequest: PreApprovalPlanRequest;
  config: MercadoPagoConfig
};

export declare type UpdatePreApprovalPlanRequest = {
  id: string;
  updatePreApprovalPlanRequest: PreApprovalPlanRequest;
}
