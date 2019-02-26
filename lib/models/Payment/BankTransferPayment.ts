import { IsNotEmpty, IsOptional } from "class-validator";
import { BaseModel, BaseModelSchema } from "../../base";
import { Wallet, WalletSchema } from "../Wallet";
import { BankTransfer, BankTransferSchema } from "./BankTransfer";

export interface BankTransferPaymentSchema extends BaseModelSchema {
  type: string;
  bitcapitalCoreId: string;
  transactionCode?: string;
  source: WalletSchema | string;
  amount: string;
  bankTransfer: BankTransferSchema;
}

export class BankTransferPayment extends BaseModel implements BankTransferPaymentSchema {
  @IsNotEmpty() source: Wallet | string = undefined;
  @IsNotEmpty() type: string = undefined;
  @IsNotEmpty() bitcapitalCoreId: string = undefined;
  @IsOptional() transactionCode?: string = undefined;
  @IsNotEmpty() amount: string = undefined;
  @IsNotEmpty() bankTransfer: BankTransfer = undefined;

  constructor(data: Partial<BankTransferPaymentSchema>) {
    super(data);

    Object.assign(this, data);

    if (data.source) {
      this.source = typeof data.source === "string" ? data.source : new Wallet(data.source);
    }
  }
}
