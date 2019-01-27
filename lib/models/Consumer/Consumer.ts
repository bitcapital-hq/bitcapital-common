import { IsEnum, IsNotEmpty, IsUUID } from "class-validator";
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

export class Consumer extends BaseModel implements ConsumerSchema {
  user?: User = undefined;
  taxId?: string = undefined;
  @IsUUID() userId?: string = undefined;

  @IsNotEmpty()
  @IsEnum(ConsumerStatus)
  status: ConsumerStatus = undefined;

  states?: ConsumerState[] = undefined;
  documents?: Document[] = undefined;
  phones?: Phone[] = undefined;
  addresses?: Address[] = undefined;

  constructor(data: Partial<ConsumerSchema>) {
    super(data);
  }
}
