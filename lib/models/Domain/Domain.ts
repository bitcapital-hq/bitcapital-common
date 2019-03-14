import { IsEnum, IsFQDN, IsNotEmpty } from "class-validator";
import { BaseModel, BaseModelSchema } from "../../base";
import { User, UserSchema } from "../User";
import { DomainSettingsSchema, DomainSettings } from "./DomainSettings";
import { Product, ProductSchema } from "./Product";

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
  products?: ProductSchema[];
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
  products: Product[] = undefined;
  settings?: DomainSettings = undefined;
  test?: boolean = undefined;

  constructor(data: Partial<DomainSchema>) {
    super(data);

    Object.assign(this, data);

    this.users = data.users && data.users.map(user => new User(user));
    this.products = data.products && data.products.map(product => new Product(product));
    this.settings = data.settings && new DomainSettings(data.settings);
  }
}
