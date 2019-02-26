import { TransactionSchema } from "../../models";
import BaseCustodyFeature, { CustodyFeature } from "../BaseCustodyFeature";

export abstract class CustodyPaymentFeature extends BaseCustodyFeature {
  type = CustodyFeature.PAYMENT;

  public abstract async payment(transaction: TransactionSchema): Promise<TransactionSchema>;
}
