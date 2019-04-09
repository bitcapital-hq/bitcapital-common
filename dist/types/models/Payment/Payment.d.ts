import { BaseModel, BaseModelSchema } from "../../base";
import { Asset, AssetSchema } from "../Asset";
import { Transaction, TransactionSchema } from "../Transaction";
import { Wallet, WalletSchema } from "../Wallet";
export declare enum PaymentType {
    BOLETO = "boleto",
    CARD = "card",
    DEPOSIT = "deposit",
    WITHDRAWAL = "withdrawal",
    TRANSFER = "transfer",
    TRANSACTION_REVERSAL = "transaction_reversal",
    SERVICE_FEE = "service_fee"
}
export interface PaymentSchema extends BaseModelSchema {
    type: PaymentType;
    amount: string;
    destination?: WalletSchema;
    transaction?: TransactionSchema;
    asset?: AssetSchema;
}
export declare class Payment extends BaseModel implements PaymentSchema {
    type: PaymentType;
    amount: string;
    transaction?: Transaction;
    destination?: Wallet;
    asset?: Asset;
    constructor(data?: Partial<PaymentSchema>);
}
