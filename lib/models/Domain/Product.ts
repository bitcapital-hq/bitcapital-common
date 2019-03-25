import { IsNotEmpty, IsOptional } from "class-validator";
import { BaseModel, BaseModelSchema } from "../../base";
import { Domain, DomainSchema } from "../Domain";
import { Wallet, WalletSchema } from "../Wallet";

export interface ProductSchema extends BaseModelSchema {
  name: string;
  domain?: DomainSchema;
  wallets?: WalletSchema[];
}

export class Product extends BaseModel implements ProductSchema {
  @IsNotEmpty() name: string = undefined;
  @IsOptional() domain?: Domain = undefined;
  wallets?: Wallet[] = undefined;

  constructor(data: Partial<ProductSchema>) {
    super(data);

    Object.assign(this, data);

    this.domain = data.domain && new Domain(data.domain);
    this.wallets = data.wallets && data.wallets.map(wallet => new Wallet(wallet));
  }
}
