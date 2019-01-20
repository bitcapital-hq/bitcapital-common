import { IsNotEmpty, IsOptional, IsEnum } from "class-validator";
import { BaseModel, BaseModelSchema } from "../../base";
import { CustodyProvider } from "../../provider";
import { Wallet, WalletSchema } from "../Wallet";

export interface AssetSchema extends BaseModelSchema {
  name?: string;
  code: string;
  wallet?: WalletSchema;
  provider?: CustodyProvider;
}

export default class Asset extends BaseModel implements AssetSchema {
  @IsNotEmpty() code: string = undefined;

  @IsOptional() name?: string = undefined;

  @IsOptional() wallet?: Wallet = undefined;

  @IsOptional() 
  @IsEnum(CustodyProvider)
  provider?: CustodyProvider = undefined;

  constructor(data: Partial<AssetSchema>) {
    super(data);
  }
}
