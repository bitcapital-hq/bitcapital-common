import { BaseModel, BaseModelSchema } from "../../base";
import { CustodyProvider } from "../../provider";
import { Wallet, WalletSchema } from "../Wallet";
export interface AssetSchema extends BaseModelSchema {
    name?: string;
    code: string;
    wallet?: WalletSchema;
    provider?: CustodyProvider;
}
export default class Asset extends BaseModel implements AssetSchema {
    code: string;
    name?: string;
    wallet?: Wallet;
    provider?: CustodyProvider;
    constructor(data: Partial<AssetSchema>);
}
