import { BaseCustodyFeature } from "..";
import { CustodyFeature } from "../BaseCustodyFeature";

export interface MobileCreditProvider {
  name: string;
  code: string;
}

export abstract class CustodyPhoneCreditFeature extends BaseCustodyFeature {
  type = CustodyFeature.PHONE_CREDITS;

  public abstract async getMobileCreditProviders(): Promise<MobileCreditProvider[]>;

  public abstract async createOrder(requestBody);

  public abstract async completeOrder(requestBody);

  public abstract async getOrderHistory(walletId: string);

  public abstract async getOrderAmountForWalletToday(walletId: string);
}
