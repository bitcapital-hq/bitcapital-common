import { BaseModel, BaseModelSchema } from "../../base";
import { Consumer, ConsumerSchema } from "./Consumer";
export declare enum BankingType {
    CHECKING = "checking",
    SAVINGS = "savings"
}
export interface BankingSchema extends BaseModelSchema {
    consumer?: ConsumerSchema;
    type?: BankingType;
    bank: number;
    agency: number;
    agencyDigit: string;
    account: number;
    accountDigit: string;
}
export declare class Banking extends BaseModel implements BankingSchema {
    type: BankingType;
    bank: number;
    agency: number;
    agencyDigit: string;
    account: number;
    accountDigit: string;
    consumer: Consumer;
    constructor(data: Partial<BankingSchema>);
}
