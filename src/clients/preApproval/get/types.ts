import type { MercadoPagoConfig } from '@src/mercadoPagoConfig';
import type { Options } from '@src/types';

export declare type GetPreApprovalRequest = {
  id: string;
  config: MercadoPagoConfig;
  requestOptions?: Options;
};

