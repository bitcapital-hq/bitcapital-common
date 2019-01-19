import { BaseModel, BaseModelSchema } from "../../base";
import Transaction from "../Transaction/Transaction";
import Wallet from "../Wallet/Wallet";
import Recipient from "./Recipient";

export interface PaymentSchema extends BaseModelSchema {
  source: Wallet | string;
  recipients: Recipient[];
  totalAmount: number;
  transaction?: Transaction;
}

export default class Payment extends BaseModel implements PaymentSchema {
  source: Wallet | string = undefined;
  transaction: Transaction = undefined;
  recipients: Recipient[] = undefined;
  totalAmount: number = 0;

  constructor(data: Partial<PaymentSchema>) {
    super(data);
  }
}
