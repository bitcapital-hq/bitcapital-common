import { BaseModel, BaseModelSchema } from "../../base";
import { Payment, PaymentSchema } from "../Payment";
import { User, UserSchema } from "../User";
import { Wallet, WalletSchema } from "../Wallet";
import { TransactionState, TransactionStateSchema } from "./TransactionState";
import { TransactionType } from "./TransactionType";
export { TransactionType };
export interface TransactionAdditionalData {
    hash?: string;
    assetId?: string;
    assetCode?: string;
    asset_id?: string;
    asset_code?: string;
    wallet_id?: string;
    card_id?: string;
    conductorType?: "boleto" | "teddoc" | "card" | "transaction_reversal";
}
export interface TransactionSchema extends BaseModelSchema {
    type: TransactionType;
    source: WalletSchema;
    payments?: PaymentSchema[];
    states?: TransactionStateSchema[];
    createdBy?: UserSchema;
    additionalData?: TransactionAdditionalData;
}
export declare class Transaction extends BaseModel implements TransactionSchema {
    type: TransactionType;
    source: Wallet;
    createdBy?: User;
    payments?: Payment[];
    states?: TransactionState[];
    additionalData?: TransactionAdditionalData;
    constructor(data: Partial<TransactionSchema>);
}
