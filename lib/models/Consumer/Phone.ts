import { IsDate, IsNotEmpty, IsNumberString, IsOptional, IsUUID, MaxDate } from "class-validator";
import { BaseModel, BaseModelSchema } from "../../base";
import Consumer, { ConsumerSchema } from "./Consumer";

export enum PhoneType {
  HOME = "home",
  WORK = "work",
  MOBILE = "mobile"
}

export interface PhoneSchema extends BaseModelSchema {
  type?: PhoneType;
  consumer?: ConsumerSchema;
  consumerId?: string;
  code: string;
  number: string;
  extension?: string;
  verifiedAt?: Date | string;
}

export default class Phone extends BaseModel implements PhoneSchema {
  @IsOptional() type: PhoneType = PhoneType.MOBILE;

  @IsOptional() consumer?: Consumer = undefined;

  @IsUUID() consumerId?: string = undefined;

  @IsNotEmpty()
  @IsNumberString()
  code: string = undefined;

  @IsNotEmpty()
  @IsNumberString()
  number: string = undefined;

  @IsOptional() extension?: string;

  @IsOptional()
  @IsDate()
  @MaxDate(new Date(new Date().getTime() + 5 * 60000)) // Now + 5min for server time differences
  verifiedAt?: Date = undefined;

  constructor(data: Partial<PhoneSchema>) {
    super(data);
    this.verifiedAt = data.verifiedAt instanceof Date ? data.verifiedAt : new Date(data.verifiedAt);
  }
}
