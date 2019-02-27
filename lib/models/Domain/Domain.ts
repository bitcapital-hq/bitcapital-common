import { IsEnum, IsFQDN, IsNotEmpty } from "class-validator";
import { BaseModel, BaseModelSchema } from "../../base";
import { User, UserSchema } from "../User";
import { DomainSettingsSchema, DomainSettings } from "./DomainSettings";

export enum DomainRole {
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
  settings?: DomainSettingsSchema;
}

export class Domain extends BaseModel implements DomainSchema {
  @IsNotEmpty() name: string = undefined;

  @IsNotEmpty()
  @IsEnum(DomainRole)
  role: DomainRole = undefined;

  @IsFQDN({}, { each: true })
  urls?: string[] = undefined;

  postbackUrl?: string;
  users?: User[] | null = undefined;
  settings?: DomainSettings = undefined;
  test?: boolean = undefined;

  constructor(data: Partial<DomainSchema>) {
    super(data);

    Object.assign(this, data);

    this.users = data.users && data.users.map(user => new User(user));
    this.settings = data.settings && new DomainSettings(data.settings);
  }
}
