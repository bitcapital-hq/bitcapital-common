import { IsBase64, IsDate, IsEnum, IsNotEmpty, IsOptional, IsUUID, MaxDate } from "class-validator";
import { BaseModelSchema, BaseModel } from "../../base";
import Consumer from "./Consumer";

export enum DocumentType {
  BRL_IDENTITY = "brl_identity",
  BRL_INDIVIDUAL_REG = "brl_individual_reg",
  BRL_ADDRESS_STATEMENT = "brl_address_statement"
}

export interface DocumentSchema extends BaseModelSchema {
  consumer?: Consumer;
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
  @IsUUID() consumerId: string = undefined;

  @IsNotEmpty()
  @IsEnum(DocumentType)
  type: DocumentType = undefined;

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
