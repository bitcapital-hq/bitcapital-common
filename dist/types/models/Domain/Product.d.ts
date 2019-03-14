import { BaseModel, BaseModelSchema } from "../../base";
import { Domain, DomainSchema } from "../Domain";
import { Wallet, WalletSchema } from "../Wallet";
export interface ProductSchema extends BaseModelSchema {
    name: string;
    domain?: DomainSchema;
    wallets?: WalletSchema[];
}
export declare class Product extends BaseModel implements ProductSchema {
    name: string;
    domain?: Domain;
    wallets?: Wallet[];
    constructor(data: Partial<ProductSchema>);
}
