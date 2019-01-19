import { Wallet } from "../../models";
export default abstract class CustodyDepositFeature {
    abstract info(wallet: Wallet): any;
    abstract deposit?(wallet: Wallet): any;
    abstract onDeposit(wallet: Wallet): any;
}
