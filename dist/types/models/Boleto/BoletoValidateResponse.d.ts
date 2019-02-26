import { BaseModel, BaseModelSchema } from "../../base";
export interface BoletoInfoSchema {
    description: string;
    amount: number;
    expiresAt: Date | string;
    hasExpirationDate: boolean;
    barcodeNumber: string;
}
export declare class BoletoInfo implements BoletoInfoSchema {
    description: string;
    amount: number;
    expiresAt: Date;
    hasExpirationDate: boolean;
    barcodeNumber: string;
    constructor(data: Partial<BoletoInfoSchema>);
}
export interface TradersInfoSchema {
    recipient: string;
    recipientDocument: string;
    payerName: string;
    payerDocument: string;
}
export declare class TradersInfo implements TradersInfoSchema {
    recipient: string;
    recipientDocument: string;
    payerName: string;
    payerDocument: string;
    constructor(data: Partial<TradersInfoSchema>);
}
export interface PartialAmountDetailsSchema {
    code: number;
    description: string;
}
export declare class PartialAmountDetails implements PartialAmountDetailsSchema {
    code: number;
    description: string;
    constructor(data: Partial<PartialAmountDetailsSchema>);
}
export interface PaymentAmountDetailsSchema {
    interestAmount: number;
    discount: number;
    fineAmount: number;
    totalAmount: number;
    paymentAmountUpdated: number;
    calculationDate: Date | string;
}
export declare class PaymentAmountDetails implements PaymentAmountDetailsSchema {
    interestAmount: number;
    discount: number;
    fineAmount: number;
    totalAmount: number;
    paymentAmountUpdated: number;
    calculationDate: Date;
    constructor(data: Partial<PaymentAmountDetailsSchema>);
}
export interface PaymentInfoSchema {
    contractId: string;
    idNumber: string;
    traders: TradersInfo;
    expiresAt: Date | string;
    totalAmount: number;
    amountDetails: PaymentAmountDetailsSchema;
    acceptPartialAmount: PartialAmountDetailsSchema;
    barcode: string;
    digitableLine: string;
    paymentDeadline: Date | string;
    validDate: boolean;
    nextBusinessDay: string;
}
export declare class PaymentInfo implements PaymentInfoSchema {
    contractId: string;
    idNumber: string;
    traders: TradersInfo;
    expiresAt: Date;
    totalAmount: number;
    amountDetails: PaymentAmountDetails;
    acceptPartialAmount: PartialAmountDetails;
    barcode: string;
    digitableLine: string;
    paymentDeadline: Date;
    validDate: boolean;
    nextBusinessDay: string;
    constructor(data: Partial<PaymentInfoSchema>);
}
export interface BoletoValidateResponseSchema extends BaseModelSchema {
    paid: boolean;
    boletoInfo: BoletoInfoSchema;
    paymentInfo: PaymentInfoSchema;
}
export declare class BoletoValidateResponse extends BaseModel implements BoletoValidateResponseSchema {
    paid: boolean;
    boletoInfo: BoletoInfo;
    paymentInfo: PaymentInfo;
    constructor(data: Partial<BoletoValidateResponseSchema>);
}
