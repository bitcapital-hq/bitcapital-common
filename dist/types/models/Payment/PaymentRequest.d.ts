export interface WithdrawalRequestSchema {
    bankingId: string;
    amount: number;
    description: string;
}
export interface PaymentRequestSchema {
    source: string;
    recipients: {
        asset: string;
        amount: string;
        destination: string;
    }[];
}
