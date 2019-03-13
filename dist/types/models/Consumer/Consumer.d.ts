import { BaseModel, BaseModelSchema } from "../../base";
import { User, UserSchema } from "../User";
import { Address, AddressSchema } from "./Address";
import { Banking, BankingSchema } from "./Banking";
import { ConsumerState, ConsumerStateSchema } from "./ConsumerState";
import { ConsumerStatus } from "./ConsumerStatus";
import { Document, DocumentSchema } from "./Document";
import { Phone, PhoneSchema } from "./Phone";
export interface ConsumerSchema extends BaseModelSchema {
    user?: UserSchema;
    taxId?: string;
    status: ConsumerStatus;
    motherName: string;
    birthday: Date;
    addresses?: AddressSchema[];
    bankings?: BankingSchema[];
    documents?: DocumentSchema[];
    phones?: PhoneSchema[];
    states?: ConsumerStateSchema[];
}
export declare class Consumer extends BaseModel implements ConsumerSchema {
    user?: User;
    taxId?: string;
    status: ConsumerStatus;
    motherName: string;
    birthday: Date;
    states?: ConsumerState[];
    addresses?: Address[];
    bankings?: Banking[];
    documents?: Document[];
    phones?: Phone[];
    constructor(data: Partial<ConsumerSchema>);
}
