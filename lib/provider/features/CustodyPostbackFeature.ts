import BaseCustodyFeature, { CustodyFeature } from "../BaseCustodyFeature";
import { PaymentSchema } from "../../models";

export abstract class CustodyPostbackFeature extends BaseCustodyFeature {
  type = CustodyFeature.POSTBACK;

  public abstract async onPostback(data?: any): Promise<PaymentSchema>;
}
