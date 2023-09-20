import type { MercadoPagoConfig } from '@src/mercadoPagoConfig';
import type { PreApprovalPlanRequest } from '@src/clients/preApprovalPlans/commonTypes';
import type { Options } from '@src/types';

export declare type CreatePreApprovalPlanRequest = {
  preApprovalPlanRequest: PreApprovalPlanRequest;
  config: MercadoPagoConfig;
  requestOptions: Options;
};
