import { IsEnum, IsNotEmpty, IsUUID } from "class-validator";
import { BaseModel, BaseModelSchema } from "../../base";
import { User, UserSchema } from "../User";
import Address, { AddressSchema } from "./Address";
import Document, { DocumentSchema } from "./Document";
import Phone, { PhoneSchema } from "./Phone";

export enum ConsumerStatus {
  /* Success states */
  READY = "ready",
  REJECTED = "rejected",

  /* Pending states */
  PENDING_DOCUMENTS = "pending_documents",

  /* Processing states */
  PROCESSING_DOCUMENTS = "processing_documents",
  PROCESSING_WALLETS = "processing_wallets",

  /* Error states */
  PROVIDER_FAILED = "provider_failed",
  INVALID_DOCUMENTS = "invalid_documents",
  MANUAL_VERIFICATION = "manual_verification",

  /* Blocked state */
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
  user?: User = undefined;
  taxId?: string = undefined;
  @IsUUID() userId?: string = undefined;

  @IsNotEmpty()
  @IsEnum(ConsumerStatus)
  status: ConsumerStatus = undefined;

  documents?: Document[] = undefined;
  phones?: Phone[] = undefined;
  addresses?: Address[] = undefined;

  constructor(data: Partial<ConsumerSchema>) {
    super(data);
  }
}
