import { BaseModelSchema, BaseModel } from "../../base";
export declare enum OAuthClientStatus {
    ACTIVE = "active",
    INACTIVE = "inactive"
}
export declare enum OAuthClientPlatform {
    ROOT = "root",
    API = "api",
    WEB = "web"
}
export interface OAuthClientSchema extends BaseModelSchema {
    clientId: string;
    clientSecret?: string;
    platform?: OAuthClientPlatform;
    status?: OAuthClientStatus;
}
export declare class OAuthClient extends BaseModel implements OAuthClientSchema {
    clientId: string;
    clientSecret?: string;
    platform: OAuthClientPlatform;
    status: OAuthClientStatus;
    constructor(data: OAuthClientSchema);
}
