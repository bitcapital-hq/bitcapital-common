import { BaseModelSchema, BaseModel } from "../../base";
import { User } from "../User";
import Phone from "./Phone";
import Address from "./Address";
export declare enum ConsumerStatus {
    PENDING_DOCUMENTS = "pending_documents",
    PENDING_SELFIE = "pending_selfie",
    PROCESSING = "processing",
    VERIFIED = "verified",
    SUSPENDED = "suspended",
    DELETED = "deleted",
    INVALID_DOCUMENTS = "invalid_documennts",
    INVALID_SELFIE = "invalid_selfie",
    MANUAL_VERIFICATION = "manual_verification"
}
export interface ConsumerSchema extends BaseModelSchema {
    status: ConsumerStatus;
    user?: User;
    userId: string;
    documents?: Document[];
    phones?: Phone[];
    addresses?: Address[];
}
export default class Consumer extends BaseModel implements ConsumerSchema {
    user?: User;
    userId: string;
    status: ConsumerStatus;
    documents?: Document[];
    phones?: Phone[];
    addresses?: Address[];
    constructor(data: Partial<ConsumerSchema>);
}
