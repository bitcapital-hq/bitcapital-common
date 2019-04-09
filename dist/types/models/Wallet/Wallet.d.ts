import { User, UserSchema } from "../User/User";
import { WalletBalance } from "./WalletBalance";
import { BankingWalletData, StellarWalletData } from "./WalletData";
import { WalletStatus } from "./WalletStatus";
import { BaseModelSchema, BaseModel } from "../../base";
import { AssetSchema, Asset } from "../Asset";
import { TransactionSchema, Transaction } from "../Transaction";
import { PaymentSchema, Payment } from "../Payment";
import { WalletState, WalletStateSchema } from "./WalletState";
import { Product, ProductSchema } from "../Domain/Product";
export { StellarWalletData, BankingWalletData, WalletBalance };
export interface WalletSchema extends BaseModelSchema {
    status?: WalletStatus;
    states?: WalletStateSchema[];
    stellar?: StellarWalletData;
    user?: UserSchema;
    additionalData?: any;
    product?: ProductSchema;
    balances?: WalletBalance[];
    issuedAssets?: AssetSchema[];
    assets?: AssetSchema[];
    transactions?: TransactionSchema[];
    received?: PaymentSchema[];
}
export declare class Wallet extends BaseModel implements WalletSchema {
    status?: WalletStatus;
    states?: WalletState[];
    stellar?: StellarWalletData;
    user?: User;
    product?: Product;
    additionalData?: any;
    balances?: WalletBalance[];
    issuedAssets?: Asset[];
    assets?: Asset[];
    transactions?: Transaction[];
    received?: Payment[];
    constructor(data: Partial<WalletSchema>);
}
