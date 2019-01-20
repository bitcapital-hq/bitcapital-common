import { BaseModel, BaseModelSchema } from "../../base";
import { Wallet, WalletSchema } from "../Wallet";
export interface AssetSchema extends BaseModelSchema {
    name?: string;
    code: string;
    wallet?: WalletSchema;
}
export default class Asset extends BaseModel implements AssetSchema {
    code: string;
    name?: string;
    wallet?: Wallet;
    constructor(data: Partial<AssetSchema>);
}
