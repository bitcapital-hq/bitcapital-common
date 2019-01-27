import { IsNotEmpty, IsOptional, IsEnum } from "class-validator";
import { BaseModel, BaseModelSchema } from "../../base";
import { CustodyProvider } from "../../provider";
import { Wallet, WalletSchema } from "../Wallet";
import { PaymentSchema, Payment } from "../Payment";

export interface AssetSchema extends BaseModelSchema {
  name?: string;
  code: string;
  issuer?: WalletSchema;
  wallets?: WalletSchema[];
  payments?: PaymentSchema[];
  provider?: CustodyProvider;
}

export class Asset extends BaseModel implements AssetSchema {
  @IsNotEmpty() code: string = undefined;

  @IsOptional() name?: string = undefined;

  @IsOptional() issuer?: Wallet = undefined;

  @IsOptional() wallets?: Wallet[] = undefined;

  @IsOptional() 
  payments?: Payment[] = undefined;

  @IsOptional() 
  @IsEnum(CustodyProvider)
  provider?: CustodyProvider = undefined;

  constructor(data: Partial<AssetSchema>) {
    super(data);
  }
}
