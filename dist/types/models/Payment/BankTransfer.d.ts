import { BankTransferDestination, BankTransferDestinationSchema } from "./BankTransferDestination";
export interface BankTransferSchema {
    destination: BankTransferDestinationSchema;
    identificator: number;
    subIssuerCode: number;
}
export declare class BankTransfer implements BankTransferSchema {
    destination: BankTransferDestination;
    identificator: number;
    subIssuerCode: number;
    constructor(data: Partial<BankTransferSchema>);
}
