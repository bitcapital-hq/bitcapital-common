import BaseCustodyFeature, { CustodyFeature } from "../BaseCustodyFeature";

export abstract class CustodyPostbackFeature extends BaseCustodyFeature {
  type = CustodyFeature.POSTBACK;

  public abstract async onPostback(data?: any): Promise<void>;

}