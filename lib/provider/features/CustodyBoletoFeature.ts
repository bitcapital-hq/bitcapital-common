import { BoletoSchema, WalletSchema } from "../../models";
import BaseCustodyFeature, { CustodyFeature } from "../BaseCustodyFeature";

export abstract class CustodyBoletoFeature extends BaseCustodyFeature {
  type = CustodyFeature.BOLETO;

  /**
   * Gets information about depositing assets in the specified wallet using
   * boletos. This is a utility method and is different for each provider.
   * 
   * @param wallet The wallet where the asset will be deposited.
   */
  public abstract async info(wallet: WalletSchema, extra?: any): Promise<any>;

  /**
  * Emit a new deposit Boleto in the custody wallet, 
  * done from outside of the Bitcapital platform, such as a banking deposit.
  * 
  * @param amount The amount that was deposited
  * @param wallet The wallet in which the amount was deposited into
  */
  public abstract async emit(amount: string, wallet: WalletSchema, extra?: any): Promise<BoletoSchema>;

}