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
    Object.assign(this, data);
    this.accessToken = data['accessToken'] || data.access_token || this.accessToken;
    this.refreshToken = data['refreshToken'] || data.refresh_token || this.refreshToken;
    this.userId = data['userId'] || data.user_id || this.userId;
    this.virtual = data.virtual || this.virtual || false;

    if (data.expires_in) {
      this.expiresAt = new Date(Date.now() + data.expires_in * 1000);
    }
  }
}
