import { BaseModelSchema, BaseModel } from "../../base";
import { User } from "../User";

export interface OAuthSecretTokenResource {
  entity: "wallet";
  id: string;
}

export interface OAuthSecretTokenSchema extends BaseModelSchema {
  id: string;
  secretToken: string;
  expires: Date;
  user: User;
  scope: string[];
  resources: OAuthSecretTokenResource[];
}

export class OAuthSecretToken extends BaseModel implements OAuthSecretTokenSchema {
  id: string;
  secretToken: string;
  expires: Date;
  user: User;
  scope: string[] = [];
  resources: OAuthSecretTokenResource[] = [];

  constructor(data: Partial<OAuthSecretTokenSchema>) {
    super(data);
    Object.assign(this, data);
  }
}
