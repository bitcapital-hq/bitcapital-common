import { BaseModel, BaseModelSchema } from "../../base";
import { Domain, DomainSchema } from "../Domain";
import { User, UserSchema } from "../User";
export interface ProductSchema extends BaseModelSchema {
    name: string;
    domain?: DomainSchema;
    users?: UserSchema[];
}
export declare class Product extends BaseModel implements ProductSchema {
    name: string;
    domain?: Domain;
    users?: User[];
    constructor(data: Partial<ProductSchema>);
}
