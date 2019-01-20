import { BaseModel, BaseModelSchema } from "../../base";
import Consumer, { ConsumerSchema } from "../Consumer/Consumer";
import Domain, { DomainSchema } from "../Domain/Domain";
import { OAuthCredentials } from "../OAuth";
import Wallet, { WalletSchema } from "../Wallet/Wallet";
import { UserRole } from "./UserRole";
import { UserStatus } from "./UserStatus";
export interface UserSchema extends BaseModelSchema {
    name: string;
    firstName: string;
    lastName: string;
    email: string;
    role?: UserRole;
    status?: UserStatus;
    password?: string;
    credentials?: OAuthCredentials;
    domain?: DomainSchema;
    consumer?: ConsumerSchema;
    virtual?: boolean;
    wallets?: WalletSchema[];
}
export default class User extends BaseModel implements UserSchema {
    name: string;
    firstName: string;
    lastName: string;
    email: string;
    role?: UserRole;
    status?: UserStatus;
    domain?: Domain;
    password?: string;
    consumer?: Consumer;
    wallets?: Wallet[];
    credentials?: OAuthCredentials;
    virtual: boolean;
    constructor(data: Partial<UserSchema>);
}
