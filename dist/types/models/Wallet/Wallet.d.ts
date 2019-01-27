import { User, UserSchema } from "../User/User";
import { WalletBalance } from "./WalletBalance";
import { BankingWalletData, StellarWalletData } from "./WalletData";
import { WalletStatus } from "./WalletStatus";
import { BaseModelSchema, BaseModel } from "../../base";
import { AssetSchema } from "../Asset";
import { TransactionSchema } from "../Transaction";
import { PaymentSchema } from "../Payment";
export { StellarWalletData, BankingWalletData, WalletBalance };
export interface WalletSchema extends BaseModelSchema {
    status?: WalletStatus;
    stellar?: StellarWalletData;
    user?: UserSchema | string;
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
    user?: User | string;
    additionalData?: any;
    balances?: WalletBalance[];
    issuedAssets?: AssetSchema[];
    assets?: AssetSchema[];
    transactions?: TransactionSchema[];
    received?: PaymentSchema[];
    constructor(data: Partial<WalletSchema>);
}
