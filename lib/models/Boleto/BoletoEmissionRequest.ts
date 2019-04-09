export interface BoletoEmissionRequestSchema {
  amount: number;
  destination: string;
  extra?: {
    expiresAt?: Date | string;
  };
}
