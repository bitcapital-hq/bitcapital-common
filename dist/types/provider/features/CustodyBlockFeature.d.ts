import { Wallet } from "../../models";
export default abstract class CustodyBlockFeature {
    abstract block(wallet: Wallet): any;
    abstract unblock(wallet: Wallet): any;
}
