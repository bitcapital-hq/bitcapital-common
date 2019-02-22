import { BaseModelSchema, BaseModel } from "../../base";

export enum OAuthClientStatus {
  ACTIVE = "active",
  INACTIVE = "inactive"
}

export enum OAuthClientPlatform {
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

export class OAuthClient extends BaseModel implements OAuthClientSchema {
  clientId: string;
  clientSecret?: string;
  platform: OAuthClientPlatform;
  status: OAuthClientStatus;

  constructor(data: OAuthClientSchema) {
    super(data);
    Object.assign(this, data);
  }
}
