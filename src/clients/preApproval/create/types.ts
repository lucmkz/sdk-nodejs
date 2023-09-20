import type { MercadoPagoConfig } from '@src/mercadoPagoConfig';
import type { PreApprovalRequest } from '@src/clients/preApproval/commonTypes';
import type { Options } from '@src/types';

export declare type CreatePreApprovalRequest = {
  body: PreApprovalRequest;
  config: MercadoPagoConfig;
  requestOptions?: Options;
};

