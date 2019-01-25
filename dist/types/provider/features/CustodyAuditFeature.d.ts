import { PaymentSchema, Wallet } from "../../models";
import { CustodyFeature } from "../BaseCustodyFeature";
export default abstract class CustodyAuditFeature {
    type: CustodyFeature;
    /**
     * @param wallet The wallet to get the balance from
     */
    abstract balance(wallet: Wallet): Promise<[{
        balance: string;
    }]>;
    /**
     * @param wallet The wallet to get the history from
     */
    abstract history(wallet: Wallet): Promise<PaymentSchema[]>;
}
