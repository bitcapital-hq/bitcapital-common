import { BaseModel, BaseModelSchema } from "../../base";
import { IsEnum } from "class-validator";
import { WalletStatus } from "./WalletStatus";
import { WalletSchema, Wallet } from "./Wallet";

export interface WalletStateSchema extends BaseModelSchema {
  status: WalletStatus;
  wallet?: WalletSchema;
}

export class WalletState extends BaseModel implements WalletStateSchema {
  @IsEnum(WalletStatus) status: WalletStatus = undefined;

  wallet?: Wallet = undefined;
  consumerId?: string = undefined;

  constructor(data: Partial<WalletStateSchema>) {
    super(data);
    Object.assign(this, data);
    this.wallet = data.wallet && new Wallet(data.wallet);
  }
}
