import { OAuthAccessToken, OAuthClient } from ".";
import { BaseModel, BaseModelSchema } from "../../base";
import { User, UserSchema } from "../User";
import { OAuthAccessTokenSchema } from "./OAuthAccessToken";
import { OAuthClientSchema } from "./OAuthClient";

export interface OAuthRefreshTokenSchema extends BaseModelSchema {
  id: string;
  refreshToken: string;
  expires: string | Date;
  user: UserSchema;
  client: OAuthClientSchema;
  accessToken: OAuthAccessTokenSchema;
}

export class OAuthRefreshToken extends BaseModel implements OAuthRefreshTokenSchema {
  id: string;
  refreshToken: string;
  expires: Date;
  user: User;
  client: OAuthClient;
  accessToken: OAuthAccessToken;

  constructor(data: Partial<OAuthRefreshTokenSchema>) {
    super(data);

    Object.assign(this, data);

    this.expires = data.expires && new Date(data.expires);
    this.user = data.user && new User(data.user);
    this.client = data.client && new OAuthClient(data.client);
    this.accessToken = data.accessToken && new OAuthAccessToken(data.accessToken);
  }
}
