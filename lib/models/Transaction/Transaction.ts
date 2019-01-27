import { IsEnum, IsNotEmpty } from "class-validator";
import { BaseModel, BaseModelSchema } from "../../base";
import { Payment, PaymentSchema } from "../Payment";
import { User, UserSchema } from "../User";
import { Wallet, WalletSchema } from "../Wallet";
import { TransactionState, TransactionStateSchema } from "./TransactionState";
import { TransactionType } from "./TransactionType";

export { TransactionType };

export interface TransactionAdditionalData {
  hash?: string;
  assetId?: string;
  assetCode?: string;
  asset_id?: string;
  wallet_id?: string;
  asset_code?: string;
  conductorType?: "boleto" | "teddoc";
}

export interface TransactionSchema extends BaseModelSchema {
  type: TransactionType;
  source: WalletSchema;
  payments?: PaymentSchema[];
  states?: TransactionStateSchema[];
  createdBy?: UserSchema;
  additionalData?: TransactionAdditionalData;
}

export default class Transaction extends BaseModel implements TransactionSchema {
  @IsNotEmpty()
  @IsEnum(TransactionType)
  type: TransactionType = undefined;

  @IsNotEmpty() source: Wallet = undefined;

  createdBy?: User = undefined;
  payments?: Payment[] = undefined;
  states?: TransactionState[] = undefined;
  additionalData?: TransactionAdditionalData = undefined;

  constructor(data: Partial<TransactionSchema>) {
    super(data);
    this.source = data.source && new Wallet(data.source);
    this.createdBy = data.createdBy && new User(data.createdBy);
    this.payments = data.payments && data.payments.map(payment => new Payment(payment));
    this.states = data.states && data.states.map(state => new TransactionState(state));
  }
}
