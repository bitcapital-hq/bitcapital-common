import { IsEnum, IsNotEmpty } from "class-validator";
import { BaseModel, BaseModelSchema } from "../../base";
import { Payment, PaymentSchema } from "../Payment";
import { User, UserSchema } from "../User";
import { Wallet, WalletSchema } from "../Wallet";
import { TransactionState, TransactionStateSchema } from "./TransactionState";
import { TransactionType } from "./TransactionType";
import { TransactionStatus } from "./TransactionStatus";

export { TransactionType };

export interface TransactionAdditionalData {
  hash?: string;
  assetId?: string;
  assetCode?: string;
  asset_id?: string;
  asset_code?: string;
  wallet_id?: string;
  card_id?: string;
  externalTransactionCreatedAt?: Date;
  conductorType?: "boleto" | "teddoc" | "card" | "transaction_reversal";
}

export interface TransactionSchema extends BaseModelSchema {
  type: TransactionType;
  source: WalletSchema;
  payments?: PaymentSchema[];
  status?: TransactionStatus;
  states?: TransactionStateSchema[];
  createdBy?: UserSchema;
  additionalData?: TransactionAdditionalData;
}

export class Transaction extends BaseModel implements TransactionSchema {
  @IsNotEmpty()
  @IsEnum(TransactionType)
  type: TransactionType = undefined;

  @IsNotEmpty() source: Wallet = undefined;

  createdBy?: User = undefined;
  payments?: Payment[] = undefined;
  status?: TransactionStatus = undefined;
  states?: TransactionState[] = undefined;
  additionalData?: TransactionAdditionalData = undefined;

  constructor(data: Partial<TransactionSchema>) {
    super(data);

    Object.assign(this, data);

    this.source = data.source ? new Wallet(data.source) : undefined;
    this.createdBy = data.createdBy && new User(data.createdBy);
    this.payments = data.payments && data.payments.map(payment => new Payment(payment));
    this.states = data.states && data.states.map(state => new TransactionState(state));
  }
}
