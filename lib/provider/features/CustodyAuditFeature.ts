import { PaymentSchema, WalletSchema } from "../../models";
import BaseCustodyFeature, { CustodyFeature } from "../BaseCustodyFeature";

export abstract class CustodyAuditFeature extends BaseCustodyFeature {
  type = CustodyFeature.AUDIT;

  /**
   * @param wallet The wallet to get the balance from
   */
  public abstract async balance(wallet: WalletSchema): Promise<[{ balance: string }]>;

  /**
   * @param wallet The wallet to get the history from
   */
  public abstract async history(wallet: WalletSchema): Promise<PaymentSchema[]>;
}
