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
  balance?: string;
  root?: boolean;
}

export class Asset extends BaseModel implements AssetSchema {
  @IsOptional() name?: string = undefined;

  @IsNotEmpty() code: string = undefined;

  @IsOptional() issuer?: Wallet = undefined;

  @IsOptional() wallets?: Wallet[] = undefined;

  @IsOptional() payments?: Payment[] = undefined;

  @IsOptional() balance?: string = undefined;

  @IsOptional() root?: boolean = undefined;

  @IsOptional()
  @IsEnum(CustodyProvider)
  provider?: CustodyProvider = undefined;

  constructor(data: Partial<AssetSchema>) {
    super(data);

    Object.assign(this, data);

    this.issuer = data.issuer && new Wallet(data.issuer);
    this.wallets = data.wallets && data.wallets.map(wallet => new Wallet(wallet));
    this.payments = data.payments && data.payments.map(payment => new Payment(payment));
  }
}
