import { IsAlphanumeric, IsEnum, IsFQDN, IsNotEmpty } from "class-validator";
import { BaseModel, BaseModelSchema } from "../../base";
import { User, UserSchema } from "../User";

export interface DomainSettings {
  logo?: string;
  primaryColor?: string;
  tintColor?: string;
}

export enum DomainRole {
  ROOT = "root",
  COMMON = "common"
}

export interface DomainSchema extends BaseModelSchema {
  name: string;
  role: DomainRole;
  test?: boolean;
  urls?: string[];
  users: UserSchema[] | null;
  settings: DomainSettings;
}

export default class Domain extends BaseModel implements DomainSchema {
  @IsNotEmpty() name: string = undefined;

  @IsNotEmpty()
  @IsEnum(DomainRole)
  role: DomainRole = undefined;

  @IsNotEmpty()
  @IsAlphanumeric()
  slug?: string = undefined;

  @IsFQDN({}, { each: true })
  urls?: string[] = undefined;

  users: User[] | null = undefined;
  settings: DomainSettings = undefined;
  test?: boolean = undefined;

  constructor(data: Partial<DomainSchema>) {
    super(data);
  }
}
