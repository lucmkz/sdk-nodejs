import { MercadoPagoConfig } from '@src/mercadoPagoConfig';
import type { Options } from '@src/types';

export declare type ChangeDeviceOperatingMode = {
  device_id: string;
  request: OperatingMode;
  config: MercadoPagoConfig;
  requestOptions?: Options;
};

export declare type ChangeDeviceOperatingModeRequest = {
  device_id: string;
  request: OperatingMode;
};

export declare type OperatingMode = {
  operating_mode?: string;
};
