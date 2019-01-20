import { IsBase64, IsDate, IsEnum, IsNotEmpty, IsOptional, IsUUID, MaxDate } from "class-validator";
import { BaseModelSchema, BaseModel } from "../../base";
import Consumer, { ConsumerSchema } from "./Consumer";

export enum DocumentType {
  TAX_ID = "tax_id", // CPF
  BRL_IDENTITY = "brl_identity",
  BRL_INDIVIDUAL_REG = "brl_individual_reg",
  BRL_DRIVERS_LICENSE = "brl_drivers_license",
  BRL_ADDRESS_STATEMENT = "brl_address_statement",
  PASSPORT = "passport"
}

export enum DocumentVerificationError {
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

export enum DocumentStatus {
  /* Success states */
  VERIFIED = "verified",
  MANUALLY_VERIFIED = "manually_verified",
  DELETED_BY_USER = "deleted_by_user",

  /* Pending states */
  PENDING_INFORMATION = "pending_information",
  PROCESSING = "processing",

  /* Error states */
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
  consumer?: Consumer = undefined;
  @IsUUID() consumerId?: string = undefined;

  @IsNotEmpty()
  @IsEnum(DocumentType)
  type: DocumentType = undefined;

  @IsNotEmpty()
  @IsEnum(DocumentStatus)
  status: DocumentStatus = undefined;

  @IsOptional()
  @IsNotEmpty()
  number?: string = undefined;

  @IsOptional()
  @IsBase64()
  front?: string = undefined;
  @IsOptional()
  @IsBase64()
  back?: string = undefined;
  @IsOptional()
  @IsBase64()
  selfie?: string = undefined;

  @IsOptional()
  @IsDate()
  @MaxDate(new Date(new Date().getTime() + 5 * 60000)) // Now + 5min for server time differences
  verifiedAt?: Date = undefined;

  constructor(data: Partial<DocumentSchema>) {
    super(data);
    this.verifiedAt = data.verifiedAt instanceof Date ? data.verifiedAt : new Date(data.verifiedAt);
  }
}
