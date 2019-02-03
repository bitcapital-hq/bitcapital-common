import { BaseModel, BaseModelSchema } from "../../base";
import { User, UserSchema } from "../User";

export enum CardStatus {
  AVAIABLE = "available",
  BLOCKED = "blocked",
  CANCELLED = "cancelled"
}

export interface CardSchema extends BaseModelSchema {
  user?: UserSchema;
  status: string;
}

export class Card extends BaseModel implements CardSchema {
  user?: User = undefined;
  status: string = undefined;

  constructor(data: Partial<CardSchema>) {
    super(data);
    Object.assign(this, data);
  }
}
