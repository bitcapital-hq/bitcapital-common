import { PaymentSchema } from "../../models";
import BaseCustodyFeature, { CustodyFeature } from "../BaseCustodyFeature";

export abstract class CustodyPaymentFeature extends BaseCustodyFeature {
  type = CustodyFeature.PAYMENT;

  public abstract async payment(payment: PaymentSchema): Promise<PaymentSchema>;

}