import { BaseModel, BaseModelSchema } from "../../base";
import { Wallet, WalletSchema } from "../Wallet";
import { BankTransfer } from "./BankTransfer";
export interface BankTransferPaymentSchema extends BaseModelSchema {
    type: string;
    bitcapitalCoreId: string;
    transactionCode?: string;
    source: WalletSchema | string;
    amount: string;
    bankTransfer: BankTransfer;
}
export declare class BankTransferPayment extends BaseModel implements BankTransferPaymentSchema {
    source: Wallet | string;
    type: string;
    bitcapitalCoreId: string;
    transactionCode?: string;
    amount: string;
    bankTransfer: BankTransfer;
    constructor(data: Partial<BankTransferPaymentSchema>);
}
