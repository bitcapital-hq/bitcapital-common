import { BaseModel, BaseModelSchema } from "../../base";
import { Consumer, ConsumerSchema } from "../Consumer";
import { Domain, DomainSchema } from "../Domain";
import { OAuthCredentials } from "../OAuth";
import { Wallet, WalletSchema } from "../Wallet";
import { UserRole } from "./UserRole";
import { UserStatus } from "./UserStatus";
import { Product, ProductSchema } from "../Domain/Product";
import { CardSchema, Card } from "../Card";
import { UserState, UserStateSchema } from "./UserState";
export interface UserSchema extends BaseModelSchema {
    name?: string;
    firstName: string;
    lastName: string;
    email: string;
    role?: UserRole;
    status?: UserStatus;
    states?: UserStateSchema[];
    password?: string;
    credentials?: OAuthCredentials;
    domain?: DomainSchema;
    consumer?: ConsumerSchema;
    product?: ProductSchema;
    wallets?: WalletSchema[];
    cards?: CardSchema[];
    virtual?: boolean;
}
export declare class User extends BaseModel implements UserSchema {
    name?: string;
    firstName: string;
    lastName: string;
    email: string;
    role?: UserRole;
    status?: UserStatus;
    domain?: Domain;
    password?: string;
    states?: UserState[];
    consumer?: Consumer;
    wallets?: Wallet[];
    product?: Product;
    credentials?: OAuthCredentials;
    cards?: Card[];
    virtual: boolean;
    constructor(data: Partial<UserSchema>);
}
