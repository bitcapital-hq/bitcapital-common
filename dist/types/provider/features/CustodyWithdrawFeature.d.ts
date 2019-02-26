import { PaymentSchema, WalletSchema } from "../../models";
import BaseCustodyFeature, { CustodyFeature } from "../BaseCustodyFeature";
export declare abstract class CustodyWithdrawFeature extends BaseCustodyFeature {
    type: CustodyFeature;
    /**
     * Gets information about withdrawing assets from the specified wallet. This
     * is a utility method and is different for each provider.
     *
     * @param wallet The wallet where the asset will be deposited.
     */
    abstract info(wallet: WalletSchema, extra?: any): Promise<any>;
    /**
     * Performs a synchronous withdrawal in the custody wallet, may
     * not be available for all providers.
     *
     * @param amount The amount to be withdrawed
     * @param wallet The wallet to be withdrawed from
     */
    abstract withdraw?(amount: string, wallet: WalletSchema, extra?: any): Promise<PaymentSchema>;
    /**
     * Register an asynchronous withdraw in the custody wallet,
     * done from outside of the Bitcapital platform, such as a banking withdraw.
     *
     * @param amount The amount that was withdrawed
     * @param wallet The wallet in which the amount was withdrawed from
     */
    abstract onWithdraw(amount: string, wallet: WalletSchema): Promise<PaymentSchema>;
}
