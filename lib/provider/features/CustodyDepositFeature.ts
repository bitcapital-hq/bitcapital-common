import { Wallet } from "../../models";

export default abstract class CustodyDepositFeature {

  public abstract async info(wallet: Wallet);

  public abstract async deposit?(wallet: Wallet);

  public abstract async onDeposit(wallet: Wallet);

}