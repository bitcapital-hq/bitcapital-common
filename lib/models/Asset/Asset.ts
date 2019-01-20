import { IsNotEmpty, IsOptional } from "class-validator";
import { BaseModel, BaseModelSchema } from "../../base";
import { Wallet, WalletSchema } from "../Wallet";

export interface AssetSchema extends BaseModelSchema {
  name?: string;
  code: string;
  wallet?: WalletSchema;
}

export default class Asset extends BaseModel implements AssetSchema {
  @IsNotEmpty() code: string = undefined;

  @IsOptional() name?: string = undefined;

  @IsOptional() wallet?: Wallet = undefined;

  constructor(data: Partial<AssetSchema>) {
    super(data);
  }
}
