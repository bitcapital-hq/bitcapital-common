import { BaseModel, BaseModelSchema } from "../../base";

export interface OAuthCredentialsSchema extends BaseModelSchema {
  access_token: string;
  refresh_token?: string;
  token_type?: string;
  expires_in?: number;
  user_id?: string;
  virtual?: boolean;
  scope: string[];
}

export default class OAuthCredentials extends BaseModel {
  virtual?: boolean = false;
  accessToken: string;
  refreshToken?: string;
  tokenType?: string;
  userId?: string;
  expiresAt?: Date;
  scope: string[];

  constructor(data: Partial<OAuthCredentialsSchema>) {
    super(data);
    this.expiresAt = new Date(Date.now() + data.expires_in * 1000);
    this.userId = data.user_id;
    this.virtual = data.virtual || this.virtual;
  }
}