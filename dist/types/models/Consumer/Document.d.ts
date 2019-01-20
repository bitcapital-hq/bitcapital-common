import { BaseModelSchema, BaseModel } from "../../base";
import Consumer, { ConsumerSchema } from "./Consumer";
export declare enum DocumentType {
    TAX_ID = "tax_id",
    BRL_IDENTITY = "brl_identity",
    BRL_INDIVIDUAL_REG = "brl_individual_reg",
    BRL_DRIVERS_LICENSE = "brl_drivers_license",
    BRL_ADDRESS_STATEMENT = "brl_address_statement",
    PASSPORT = "passport"
}
export declare enum DocumentVerificationError {
    NO_MATCHS = "no_matchs",
    IS_DEAD = "is_dead",
    SUSPENDED = "suspended",
    CANCELED = "canceled",
    PENDING_REGULATION = "pending_regulation",
    NULL = "null",
    INCOMPLETE_TAX_ID_DATA = "incomplete_tax_id_data",
    FACE_DIDNT_MATCH = "face_didnt_match",
    RECOGNITION_ERROR = "recognition_error",
    NO_DOC_PICTURE = "no_doc_picture",
    NO_FACIAL_PICTURE = "no_facial_picture",
    NO_INFO_FOUND = "no_info_found",
    DOC_IS_NOT_BASE_64 = "doc_is_not_base_64",
    FACE_IS_NOT_BASE_64 = "face_is_not_base_64",
    POLITICALLY_EXPOSED_PERSON = "politically_exposed_person",
    SANCTIONED = "sanctioned"
}
export declare enum DocumentStatus {
    VERIFIED = "verified",
    MANUALLY_VERIFIED = "manually_verified",
    DELETED_BY_USER = "deleted_by_user",
    PENDING_INFORMATION = "pending_information",
    PROCESSING = "processing",
    FAILED_VERIFICATION = "failed_verification",
    FAILED_MANUAL_VERIFICATION = "failed_manual_verification"
}
export interface DocumentSchema extends BaseModelSchema {
    consumer?: ConsumerSchema;
    status: DocumentStatus;
    consumerId?: string;
    type: DocumentType;
    number?: string;
    front?: string;
    back?: string;
    selfie?: string;
    verifiedAt?: Date | string;
}
export default class Document extends BaseModel implements DocumentSchema {
    consumer?: Consumer;
    consumerId: string;
    type: DocumentType;
    status: DocumentStatus;
    number?: string;
    front?: string;
    back?: string;
    selfie?: string;
    verifiedAt?: Date;
    constructor(data: Partial<DocumentSchema>);
}
