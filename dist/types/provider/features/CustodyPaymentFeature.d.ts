import { PaymentSchema } from "../../models";
import BaseCustodyFeature, { CustodyFeature } from "../BaseCustodyFeature";
export declare abstract class CustodyPaymentFeature extends BaseCustodyFeature {
    type: CustodyFeature;
    abstract payment(payment: PaymentSchema): Promise<PaymentSchema>;
}
