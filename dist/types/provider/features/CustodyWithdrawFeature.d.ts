import { Wallet } from "../../models";
export default abstract class CustodyWithdrawFeature {
    abstract info(): any;
    abstract withdraw?(wallet: Wallet): any;
    abstract onWithdraw(wallet: Wallet): any;
}
