import { Wallet } from "../../models";

export default abstract class CustodyWithdrawFeature {

  public abstract async info();

  public abstract async withdraw?(wallet: Wallet);

  public abstract async onWithdraw(wallet: Wallet);

}