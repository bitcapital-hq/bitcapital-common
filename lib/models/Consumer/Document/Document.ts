import { IsBase64, IsDate, IsEnum, IsNotEmpty, IsOptional, MinDate } from "class-validator";
import { BaseModel, BaseModelSchema } from "../../../base";
import { Consumer, ConsumerSchema } from "../Consumer";
import { DocumentState, DocumentStateSchema } from "./DocumentState";
import { DocumentStatus } from "./DocumentStatus";
import { DocumentType } from "./DocumentType";

export interface DocumentSchema extends BaseModelSchema {
  consumer?: ConsumerSchema;
  status?: DocumentStatus;
  type: DocumentType;
  number?: string;
  front?: string;
  back?: string;
  selfie?: string;
  verifiedAt?: Date | string;
  states?: DocumentStateSchema[];
}

export const OperatorOnlyDocuments = [DocumentType.PROOF_OF_ADDRESS, DocumentType.OTHER];

export class Document extends BaseModel implements DocumentSchema {
  @IsOptional() consumer?: Consumer = undefined;

  @IsNotEmpty()
  @IsEnum(DocumentType)
  type: DocumentType = undefined;

  @IsNotEmpty()
  @IsEnum(DocumentStatus)
  status: DocumentStatus = undefined;

  @IsOptional() number?: string = undefined;

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
  @MinDate(new Date()) // Don't allow expired documents
  expiresAt?: Date = undefined;

  @IsOptional() states?: DocumentState[] = undefined;

  constructor(data: Partial<DocumentSchema> = {}) {
    super(data);
    Object.assign(this, data);

    this.expiresAt = data.verifiedAt && new Date(data.verifiedAt);
    this.consumer = data.consumer && new Consumer(data.consumer);
    this.states = data.states && data.states.map(state => new DocumentState(state));
  }
}
