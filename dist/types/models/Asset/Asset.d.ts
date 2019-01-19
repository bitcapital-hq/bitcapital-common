import { BaseModel, BaseModelSchema } from "../../base";
import { Wallet } from "../Wallet";
export interface AssetSchema extends BaseModelSchema {
    name?: string;
    code: string;
    wallet?: Wallet;
}
export default class Asset extends BaseModel implements AssetSchema {
    code: string;
    name?: string;
    wallet?: Wallet;
    constructor(data: Partial<AssetSchema>);
}
