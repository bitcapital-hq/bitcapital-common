import { Wallet } from "../../models";
import BaseCustodyFeature, { CustodyFeature } from "../BaseCustodyFeature";

export default abstract class CustodyBlockFeature extends BaseCustodyFeature {
  type = CustodyFeature.BLOCK;

  /**
   * Blocks a wallet temporarily in the external provider.
   * 
   * @param wallet The wallet to be blocked in the provider
   */
  public abstract async block(wallet: Wallet);

  /**
   * Unblocks a previously blocked wallet in the external provider.
   * 
   * @param wallet The wallet to be unblocked in the provider
   */
  public abstract async unblock(wallet: Wallet);

}