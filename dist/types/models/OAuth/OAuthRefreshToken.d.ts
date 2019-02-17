import { OAuthAccessToken, OAuthClient } from ".";
import { BaseModel, BaseModelSchema } from "../../base";
import { User } from "../User";
export interface OAuthRefreshTokenSchema extends BaseModelSchema {
    id: string;
    refreshToken: string;
    expires: Date;
    user: User;
    client: OAuthClient;
    accessToken: OAuthAccessToken;
}
export declare class OAuthRefreshToken extends BaseModel implements OAuthRefreshTokenSchema {
    id: string;
    refreshToken: string;
    expires: Date;
    user: User;
    client: OAuthClient;
    accessToken: OAuthAccessToken;
    constructor(data: Partial<OAuthRefreshToken>);
}
