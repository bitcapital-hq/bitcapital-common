import { BaseModel, BaseModelSchema } from "../../base";
import { User, UserSchema } from "../User";
export declare enum CardStatus {
    AVAIABLE = "available",
    BLOCKED = "blocked",
    CANCELLED = "cancelled"
}
export interface CardSchema extends BaseModelSchema {
    user?: UserSchema;
    status: string;
}
export declare class Card extends BaseModel implements CardSchema {
    user?: User;
    status: string;
    constructor(data: Partial<CardSchema>);
}
