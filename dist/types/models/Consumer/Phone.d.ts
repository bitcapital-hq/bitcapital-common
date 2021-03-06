import { BaseModel, BaseModelSchema } from "../../base";
import { Consumer, ConsumerSchema } from "./Consumer";
export declare enum PhoneType {
    HOME = "home",
    WORK = "work",
    MOBILE = "mobile"
}
export interface PhoneSchema extends BaseModelSchema {
    type?: PhoneType;
    consumer?: ConsumerSchema;
    code: string;
    number: string;
    extension?: string;
    verifiedAt?: Date | string;
}
export declare class Phone extends BaseModel implements PhoneSchema {
    type?: PhoneType;
    consumer?: Consumer;
    code: string;
    number: string;
    extension?: string;
    verifiedAt?: Date;
    constructor(data: Partial<PhoneSchema>);
}
