import { BaseModel, BaseModelSchema } from "../../base";
import { User, UserSchema } from "../User";
import Address, { AddressSchema } from "./Address";
import Document, { DocumentSchema } from "./Document";
import Phone, { PhoneSchema } from "./Phone";
export declare enum ConsumerStatus {
    READY = "ready",
    REJECTED = "rejected",
    PENDING_DOCUMENTS = "pending_documents",
    PROCESSING_DOCUMENTS = "processing_documents",
    PROCESSING_WALLETS = "processing_wallets",
    PROVIDER_FAILED = "provider_failed",
    INVALID_DOCUMENTS = "invalid_documents",
    MANUAL_VERIFICATION = "manual_verification",
    BLOCKED = "blocked"
}
export interface ConsumerSchema extends BaseModelSchema {
    status: ConsumerStatus;
    user?: UserSchema;
    userId?: string;
    taxId?: string;
    documents?: DocumentSchema[];
    phones?: PhoneSchema[];
    addresses?: AddressSchema[];
}
export default class Consumer extends BaseModel implements ConsumerSchema {
    user?: User;
    taxId?: string;
    userId?: string;
    status: ConsumerStatus;
    documents?: Document[];
    phones?: Phone[];
    addresses?: Address[];
    constructor(data: Partial<ConsumerSchema>);
}
