import Wallet from "../Wallet/Wallet";
import { BaseModelSchema, BaseModel } from "../../base";
export interface RecipientSchema extends BaseModelSchema {
    amount: string;
    destination: Wallet | string;
}
export default class Recipient extends BaseModel implements RecipientSchema {
    amount: string;
    destination: Wallet | string;
    constructor(data: Partial<RecipientSchema>);
}
