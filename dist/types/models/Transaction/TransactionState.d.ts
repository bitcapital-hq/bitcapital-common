import { Transaction, TransactionSchema } from "./Transaction";
import { TransactionStatus } from "./TransactionStatus";
import { BaseModel } from "../../base";
export interface TransactionStateSchema {
    transaction?: TransactionSchema;
    status: TransactionStatus;
    additionalData?: any;
}
export declare class TransactionState extends BaseModel implements TransactionStateSchema {
    transaction: Transaction;
    status: TransactionStatus;
    additionalData?: any;
    constructor(data?: Partial<TransactionStateSchema>);
}
