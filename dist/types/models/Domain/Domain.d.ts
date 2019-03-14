import { BaseModel, BaseModelSchema } from "../../base";
import { User, UserSchema } from "../User";
import { DomainSettingsSchema, DomainSettings } from "./DomainSettings";
import { Product, ProductSchema } from "./Product";
export declare enum DomainRole {
    ROOT = "root",
    COMMON = "common"
}
export interface DomainSchema extends BaseModelSchema {
    name: string;
    role: DomainRole;
    test?: boolean;
    urls?: string[];
    postbackUrl?: string;
    users?: UserSchema[];
    products?: ProductSchema[];
    settings?: DomainSettingsSchema;
}
export declare class Domain extends BaseModel implements DomainSchema {
    name: string;
    role: DomainRole;
    urls?: string[];
    postbackUrl?: string;
    users?: User[] | null;
    products: Product[];
    settings?: DomainSettings;
    test?: boolean;
    constructor(data: Partial<DomainSchema>);
}
