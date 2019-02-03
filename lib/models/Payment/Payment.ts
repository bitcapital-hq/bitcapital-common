import { BaseModel, BaseModelSchema } from "../../base";
import { Asset, AssetSchema } from "../Asset";
import { Transaction, TransactionSchema } from "../Transaction";
import { Wallet, WalletSchema } from "../Wallet";

export enum PaymentType {
  DEPOSIT = "deposit",
  WITHDRAWAL = "withdrawal",
  TRANSFER = "transfer"
}

export interface PaymentSchema extends BaseModelSchema {
  type: PaymentType;
  amount: string;
  destination?: WalletSchema;
  transaction?: TransactionSchema;
  asset?: AssetSchema;
}

export class Payment extends BaseModel implements PaymentSchema {
  type: PaymentType = undefined;
  amount: string = undefined;
  transaction?: Transaction;
  destination?: Wallet;
  asset?: Asset;

  constructor(data: Partial<PaymentSchema> = {}) {
    super(data);
    Object.assign(this, data);

    this.transaction = data.transaction && new Transaction(data.transaction);
    this.destination = data.destination && new Wallet(data.destination);
    this.asset = data.asset && new Asset(data.asset);
  }
}
