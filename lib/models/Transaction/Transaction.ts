import { TransactionType } from "./TransactionType";
import Wallet from "../Wallet/Wallet";
import Payment from "../Payment/Payment";
import { IsNotEmpty, IsEnum } from "class-validator";
import { BaseModelSchema, BaseModel } from "../../base";

export { TransactionType };

export interface TransactionAdditionalData {
  hash?: string;
  assetId?: string;
  assetCode?: string;
}

export interface TransactionSchema extends BaseModelSchema {
  data: TransactionAdditionalData;
  type: TransactionType;
  source: Wallet;
  payments?: Payment[];
}

export default class Transaction extends BaseModel implements TransactionSchema {
  @IsNotEmpty() data: TransactionAdditionalData = undefined;

  @IsNotEmpty()
  @IsEnum(TransactionType)
  type: TransactionType = undefined;

  @IsNotEmpty() source: Wallet = undefined;

  payments?: Payment[] = undefined;

  constructor(data: Partial<TransactionSchema>) {
    super(data);
  }
}