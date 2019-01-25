import { PaymentSchema, Wallet } from "../../models";
import { CustodyFeature } from "../BaseCustodyFeature";

export default abstract class CustodyAuditFeature {
  type = CustodyFeature.AUDIT;

  /**
   * @param wallet The wallet to get the balance from
   */
  public abstract async balance(wallet: Wallet): Promise<[{ balance: string }]>;

  /**
   * @param wallet The wallet to get the history from
   */
  public abstract async history(wallet: Wallet): Promise<PaymentSchema[]>;

}