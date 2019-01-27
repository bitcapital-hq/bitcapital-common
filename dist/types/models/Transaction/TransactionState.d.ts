import Transaction from "./Transaction";
import { TransactionStatus } from "./TransactionStatus";
import { BaseModel } from "../../base";
export interface TransactionStateSchema {
    consumer: Transaction;
    status: TransactionStatus;
    additionalData?: any;
}
export declare class TransactionState extends BaseModel implements TransactionStateSchema {
    consumer: Transaction;
    status: TransactionStatus;
    additionalData?: any;
    constructor(data?: Partial<TransactionStateSchema>);
}
