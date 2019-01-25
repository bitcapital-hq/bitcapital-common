import { PaymentSchema, Wallet } from "../../models";
import { CustodyFeature } from "../BaseCustodyFeature";

export default abstract class CustodyDepositFeature {
  type = CustodyFeature.DEPOSIT;

  /**
   * Gets information about depositing assets in the specified wallet. This
   * is a utility method and is different for each provider.
   * 
   * @param wallet The wallet where the asset will be deposited.
   */
  public abstract async info(wallet: Wallet): Promise<any>;

   /**
   * Register an asynchronous deposit in the custody wallet, 
   * done from outside of the Bitcapital platform, such as a banking deposit.
   * 
   * @param amount The amount that was deposited
   * @param wallet The wallet in which the amount was deposited into
   */
  public abstract async onDeposit(amount: string, wallet: Wallet, extra?: any): Promise<PaymentSchema>;

}