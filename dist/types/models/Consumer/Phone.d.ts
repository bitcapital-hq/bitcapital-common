import { BaseModel, BaseModelSchema } from "../../base";
import Consumer from "./Consumer";
export declare enum PhoneType {
    HOME = "home",
    WORK = "work",
    MOBILE = "mobile"
}
export interface PhoneSchema extends BaseModelSchema {
    type?: PhoneType;
    consumer?: Consumer;
    consumerId: string;
    code: string;
    number: string;
    extension?: string;
    verifiedAt?: Date | string;
}
export default class Phone extends BaseModel implements PhoneSchema {
    type: PhoneType;
    consumer?: Consumer;
    consumerId: string;
    code: string;
    number: string;
    extension?: string;
    verifiedAt?: Date;
    constructor(data: Partial<PhoneSchema>);
}
