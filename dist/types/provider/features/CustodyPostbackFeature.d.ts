import BaseCustodyFeature, { CustodyFeature } from "../BaseCustodyFeature";
import { PaymentSchema } from "../../models";
export declare abstract class CustodyPostbackFeature extends BaseCustodyFeature {
    type: CustodyFeature;
    abstract onPostback(data?: any): Promise<PaymentSchema>;
}
