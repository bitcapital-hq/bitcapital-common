import { BaseModelSchema, BaseModel } from "../../base";
import Consumer, { ConsumerSchema } from "./Consumer";
export declare enum AddressType {
    HOME = "home",
    WORK = "work"
}
export interface AddressSchema extends BaseModelSchema {
    type?: AddressType;
    consumer?: ConsumerSchema;
    consumerId?: string;
    country: string;
    city: string;
    code: string;
    state: string;
    street: string;
    complement?: string;
    number: string;
    reference?: string;
}
export default class Address extends BaseModel implements AddressSchema {
    consumer?: Consumer;
    consumerId?: string;
    type?: AddressType;
    reference?: string;
    country: string;
    state: string;
    city: string;
    code: string;
    street: string;
    complement?: string;
    number: string;
    constructor(data: Partial<AddressSchema>);
}
