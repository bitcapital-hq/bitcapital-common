import { Wallet } from "../../models";

export default abstract class CustodyBlockFeature {

  public abstract async block(wallet: Wallet);

  public abstract async unblock(wallet: Wallet);

}