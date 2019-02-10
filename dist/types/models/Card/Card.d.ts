import { BaseModel, BaseModelSchema } from "../../base";
import { User, UserSchema } from "../User";
import { CardStatus } from "./CardStatus";
export interface CardSchema extends BaseModelSchema {
    user?: UserSchema;
    status: CardStatus;
}
export declare class Card extends BaseModel implements CardSchema {
    user?: User;
    status: CardStatus;
    constructor(data: Partial<CardSchema>);
}
