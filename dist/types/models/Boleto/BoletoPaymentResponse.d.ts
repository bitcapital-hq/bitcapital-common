import { BaseModel, BaseModelSchema } from "../../base";
export interface BoletoPaymentResponseSchema extends BaseModelSchema {
    paymentId: number;
    accountId: number;
    status: string;
    description: string;
    barcode: string;
    expiresAt: Date | string;
    recipientName: string;
    discount: number;
    taxAmount: number;
    amount: number;
}
export declare class BoletoPaymentResponse extends BaseModel implements BoletoPaymentResponseSchema {
    paymentId: number;
    accountId: number;
    status: string;
    description: string;
    barcode: string;
    expiresAt: Date;
    recipientName: string;
    discount: number;
    taxAmount: number;
    amount: number;
    constructor(data: Partial<BoletoPaymentResponse>);
}
