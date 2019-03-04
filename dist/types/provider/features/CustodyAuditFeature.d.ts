import { PaymentSchema, WalletSchema } from "../../models";
import BaseCustodyFeature, { CustodyFeature } from "../BaseCustodyFeature";
export declare abstract class CustodyAuditFeature extends BaseCustodyFeature {
    type: CustodyFeature;
    /**
     * @param wallet The wallet to get the balance from
     */
    abstract balance(wallet: WalletSchema): Promise<[{
        balance: string;
    }]>;
    /**
     * @param wallet The wallet to get the history from
     */
    abstract history(wallet: WalletSchema): Promise<PaymentSchema[]>;
}
