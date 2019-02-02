export interface WithdrawalRequestSchema {
  bankingId: string;
  amount: number;
  description: string;
}

export interface PaymentRequestSchema {
  source: string;
  asset?: string;
  recipients: { amount: string, destination: string }[];
}
