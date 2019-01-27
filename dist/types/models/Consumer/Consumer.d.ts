import { BaseModel, BaseModelSchema } from "../../base";
import { User, UserSchema } from "../User";
import { Address, AddressSchema } from "./Address";
import { ConsumerStatus } from "./ConsumerStatus";
import { Document, DocumentSchema } from "./Document";
import { Phone, PhoneSchema } from "./Phone";
import { ConsumerState, ConsumerStateSchema } from "./ConsumerState";
export interface ConsumerSchema extends BaseModelSchema {
    status: ConsumerStatus;
    user?: UserSchema;
    userId?: string;
    taxId?: string;
    documents?: DocumentSchema[];
    phones?: PhoneSchema[];
    addresses?: AddressSchema[];
    states?: ConsumerStateSchema[];
}
export declare class Consumer extends BaseModel implements ConsumerSchema {
    user?: User;
    taxId?: string;
    userId?: string;
    status: ConsumerStatus;
    states?: ConsumerState[];
    documents?: Document[];
    phones?: Phone[];
    addresses?: Address[];
    constructor(data: Partial<ConsumerSchema>);
}
