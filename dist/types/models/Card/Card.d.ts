import { BaseModel, BaseModelSchema } from "../../base";
import { CardStatus } from "./CardStatus";
export interface CardSchema extends BaseModelSchema {
    userId?: string;
    walletId?: string;
    virtual: boolean;
    status: CardStatus;
}
export declare class Card extends BaseModel implements CardSchema {
    userId?: string;
    walletId?: string;
    virtual: boolean;
    status: CardStatus;
    constructor(data: Partial<CardSchema>);
}
