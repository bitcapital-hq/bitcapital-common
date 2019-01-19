import Wallet from "../Wallet/Wallet";
import { IsNotEmpty, IsNumberString, IsUUID } from "class-validator";
import { BaseModelSchema, BaseModel } from "../../base";

export interface RecipientSchema extends BaseModelSchema {
  amount: string;
  destination: Wallet | string;
}

export default class Recipient extends BaseModel implements RecipientSchema {
  @IsNotEmpty()
  @IsNumberString()
  amount: string = undefined;

  @IsUUID() destination: Wallet | string = undefined;

  constructor(data: Partial<RecipientSchema>) {
    super(data);
  }
}
