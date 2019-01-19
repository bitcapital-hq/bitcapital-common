import { Payment, Wallet } from "../../models";

export default abstract class CustodyPaymentFeature {

  public abstract async info(wallet: Wallet);

  public abstract async payment(payment: Payment);

}