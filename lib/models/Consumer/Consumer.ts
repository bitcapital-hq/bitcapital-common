import { IsEnum, IsNotEmpty, IsUUID } from "class-validator";
import { BaseModel, BaseModelSchema } from "../../base";
import { User, UserSchema } from "../User";
import { Address, AddressSchema } from "./Address";
import { ConsumerStatus } from "./ConsumerStatus";
import { Document, DocumentSchema } from "./Document";
import { Phone, PhoneSchema } from "./Phone";

export interface ConsumerSchema extends BaseModelSchema {
  status: ConsumerStatus;
  user?: UserSchema;
  userId?: string;
  taxId?: string;
  documents?: DocumentSchema[];
  phones?: PhoneSchema[];
  addresses?: AddressSchema[];
}

export class Consumer extends BaseModel implements ConsumerSchema {
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
