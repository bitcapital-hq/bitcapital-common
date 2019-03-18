import { IsEnum, IsNotEmpty } from "class-validator";
import { BaseModel, BaseModelSchema } from "../../base";
import { User, UserSchema } from "../User";
import { Address, AddressSchema } from "./Address";
import { Banking, BankingSchema } from "./Banking";
import { ConsumerState, ConsumerStateSchema } from "./ConsumerState";
import { ConsumerStatus } from "./ConsumerStatus";
import { Document, DocumentSchema } from "./Document";
import { Phone, PhoneSchema } from "./Phone";

export interface ConsumerSchema extends BaseModelSchema {
  user?: UserSchema;
  taxId?: string;
  status: ConsumerStatus;
  motherName?: string;
  birthday: Date;
  addresses?: AddressSchema[];
  bankings?: BankingSchema[];
  documents?: DocumentSchema[];
  phones?: PhoneSchema[];
  states?: ConsumerStateSchema[];
}

export class Consumer extends BaseModel implements ConsumerSchema {
  user?: User = undefined;
  taxId?: string = undefined;

  @IsNotEmpty()
  @IsEnum(ConsumerStatus)
  status: ConsumerStatus = undefined;

  motherName?: string;
  birthday: Date;
  states?: ConsumerState[] = undefined;
  addresses?: Address[] = undefined;
  bankings?: Banking[] = undefined;
  documents?: Document[] = undefined;
  phones?: Phone[] = undefined;

  constructor(data: Partial<ConsumerSchema>) {
    super(data);

    Object.assign(this, data);

    this.birthday = data.birthday && new Date(data.birthday);
    this.user = data.user && new User(data.user);
    this.states = data.states && data.states.map(state => new ConsumerState(state));
    this.addresses = data.addresses && data.addresses.map(address => new Address(address));
    this.bankings = data.bankings && data.bankings.map(banking => new Banking(banking));
    this.documents = data.documents && data.documents.map(document => new Document(document));
    this.phones = data.phones && data.phones.map(phone => new Phone(phone));
  }
}
