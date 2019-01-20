import { Payment } from "../../models";
import { CustodyFeature } from "../BaseCustodyFeature";
export default abstract class CustodyPaymentFeature {
  type = CustodyFeature.PAYMENT;

  public abstract async payment(payment: Payment): Promise<Payment>;

}