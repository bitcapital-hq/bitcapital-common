import { IsNotEmpty } from "class-validator";
import { BaseModel, BaseModelSchema } from "../../base";
import { Consumer, ConsumerSchema } from "./Consumer";

export enum BankingType {
  CHECKING = "checking",
  SAVINGS = "savings"
}

export interface BankingSchema extends BaseModelSchema {
  consumer?: ConsumerSchema;
  type: BankingType;
  bank: number;
  agency: number;
  agencyDigit: string;
  account: number;
  accountDigit: string;
}

export class Banking extends BaseModel implements BankingSchema {
  @IsNotEmpty() type: BankingType = BankingType.CHECKING;
  @IsNotEmpty() bank: number = undefined;
  @IsNotEmpty() agency: number = undefined;
  @IsNotEmpty() agencyDigit: string = undefined;
  @IsNotEmpty() account: number = undefined;
  @IsNotEmpty() accountDigit: string = undefined;

  consumer: Consumer = undefined;

  constructor(data: Partial<BankingSchema>) {
    super(data);

    Object.assign(this, data);

    this.consumer = data.consumer && new Consumer(data.consumer);
  }
}
