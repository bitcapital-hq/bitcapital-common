import { BaseModel, BaseModelSchema } from "../../base";
import { User, UserSchema } from "../User";
import { DomainSettingsSchema, DomainSettings } from "./DomainSettings";
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
    settings: DomainSettingsSchema;
}
export default class Domain extends BaseModel implements DomainSchema {
    name: string;
    role: DomainRole;
    slug?: string;
    urls?: string[];
    users: User[] | null;
    settings: DomainSettings;
    test?: boolean;
    constructor(data: Partial<DomainSchema>);
}
