import { IsNotEmpty, IsOptional } from "class-validator";
import { BaseModel, BaseModelSchema } from "../../base";
import { Domain, DomainSchema } from "../Domain";
import { User, UserSchema } from "../User";

export interface ProductSchema extends BaseModelSchema {
  name: string;
  domain?: DomainSchema;
  users?: UserSchema[];
}

export class Product extends BaseModel implements ProductSchema {
  @IsNotEmpty() name: string = undefined;
  @IsOptional() domain?: Domain = undefined;
  users?: User[] = undefined;

  constructor(data: Partial<ProductSchema>) {
    super(data);

    Object.assign(this, data);

    this.domain = data.domain && new Domain(data.domain);
  }
}
