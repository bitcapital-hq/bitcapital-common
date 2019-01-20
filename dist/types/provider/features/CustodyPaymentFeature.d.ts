import { Payment } from "../../models";
import { CustodyFeature } from "../BaseCustodyFeature";
export default abstract class CustodyPaymentFeature {
    type: CustodyFeature;
    abstract payment(payment: Payment): Promise<Payment>;
}
