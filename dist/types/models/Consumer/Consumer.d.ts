import { BaseModel, BaseModelSchema } from "../../base";
import { User, UserSchema } from "../User";
import { Address, AddressSchema } from "./Address";
import { Banking, BankingSchema } from "./Banking";
import { ConsumerState, ConsumerStateSchema } from "./ConsumerState";
import { ConsumerStatus } from "./ConsumerStatus";
import { Document, DocumentSchema } from "./Document";
import { Phone, PhoneSchema } from "./Phone";
import { AccountType } from "./AccountType";
import { CompanyData } from "./CompanyData";
export interface ConsumerSchema extends BaseModelSchema {
    status?: ConsumerStatus;
    user?: UserSchema;
    taxId?: string;
    type: AccountType;
    companyData?: CompanyData;
    addresses?: AddressSchema[];
    bankings?: BankingSchema[];
    documents?: DocumentSchema[];
    phones?: PhoneSchema[];
    states?: ConsumerStateSchema[];
}
export declare class Consumer extends BaseModel implements ConsumerSchema {
    user?: User;
    taxId?: string;
    type: AccountType;
    companyData?: CompanyData;
    status: ConsumerStatus;
    states?: ConsumerState[];
    addresses?: Address[];
    bankings?: Banking[];
    documents?: Document[];
    phones?: Phone[];
    constructor(data: Partial<ConsumerSchema>);
}
