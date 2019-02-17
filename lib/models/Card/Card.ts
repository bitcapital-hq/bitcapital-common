import { BaseModel, BaseModelSchema } from "../../base";
import { User, UserSchema } from "../User";
import { CardStatus } from "./CardStatus";

export interface CardSchema extends BaseModelSchema {
  user?: UserSchema;
  status: CardStatus;
}

export class Card extends BaseModel implements CardSchema {
  user?: User = undefined;
  status: CardStatus = undefined;

  constructor(data: Partial<CardSchema>) {
    super(data);
    Object.assign(this, data);
  }
}
