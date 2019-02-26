import { BaseModel, BaseModelSchema } from "../../base";
import { CardStatus } from "./CardStatus";
import { IsOptional } from "class-validator";

export interface CardSchema extends BaseModelSchema {
  userId?: string;
  walletId?: string;
  virtual: boolean;
  status: CardStatus;
}

export class Card extends BaseModel implements CardSchema {
  @IsOptional() userId?: string = undefined;
  @IsOptional() walletId?: string = undefined;
  virtual: boolean = undefined;
  status: CardStatus = undefined;

  constructor(data: Partial<CardSchema>) {
    super(data);
    Object.assign(this, data);
  }
}
