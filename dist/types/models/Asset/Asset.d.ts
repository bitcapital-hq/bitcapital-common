import { BaseModel, BaseModelSchema } from "../../base";
import { CustodyProvider } from "../../provider";
import { Wallet, WalletSchema } from "../Wallet";
import { PaymentSchema, Payment } from "../Payment";
export interface AssetSchema extends BaseModelSchema {
    name?: string;
    code: string;
    issuer?: WalletSchema;
    wallets?: WalletSchema[];
    payments?: PaymentSchema[];
    provider?: CustodyProvider;
    balance?: string;
    root?: boolean;
}
export declare class Asset extends BaseModel implements AssetSchema {
    name?: string;
    code: string;
    issuer?: Wallet;
    wallets?: Wallet[];
    payments?: Payment[];
    balance?: string;
    root?: boolean;
    provider?: CustodyProvider;
    constructor(data: Partial<AssetSchema>);
}
