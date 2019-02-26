import { User, UserSchema } from "../User/User";
import { WalletBalance } from "./WalletBalance";
import { BankingWalletData, StellarWalletData } from "./WalletData";
import { WalletStatus } from "./WalletStatus";
import { BaseModelSchema, BaseModel } from "../../base";
import { AssetSchema, Asset } from "../Asset";
import { TransactionSchema, Transaction } from "../Transaction";
import { PaymentSchema, Payment } from "../Payment";
export { StellarWalletData, BankingWalletData, WalletBalance };
export interface WalletSchema extends BaseModelSchema {
    status?: WalletStatus;
    stellar?: StellarWalletData;
    user?: UserSchema;
    additionalData?: any;
    balances?: WalletBalance[];
    issuedAssets?: AssetSchema[];
    assets?: AssetSchema[];
    transactions?: TransactionSchema[];
    received?: PaymentSchema[];
}
export declare class Wallet extends BaseModel implements WalletSchema {
    status?: WalletStatus;
    stellar?: StellarWalletData;
    user?: User;
    additionalData?: any;
    balances?: WalletBalance[];
    issuedAssets?: Asset[];
    assets?: Asset[];
    transactions?: Transaction[];
    received?: Payment[];
    constructor(data: Partial<WalletSchema>);
}
