import { PaymentSchema } from "../../models";
import BaseCustodyFeature, { CustodyFeature } from "../BaseCustodyFeature";
export default abstract class CustodyPaymentFeature extends BaseCustodyFeature {
    type: CustodyFeature;
    abstract payment(payment: PaymentSchema): Promise<PaymentSchema>;
}
