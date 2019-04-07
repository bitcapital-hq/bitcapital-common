import { WalletSchema } from "../../models";
import BaseCustodyFeature, { CustodyFeature } from "../BaseCustodyFeature";
export declare abstract class CustodyBlockFeature extends BaseCustodyFeature {
    type: CustodyFeature;
    /**
     * Blocks a wallet temporarily in the external provider.
     *
     * @param wallet The wallet to be blocked in the provider
     */
    abstract block(wallet: WalletSchema): any;
    /**
     * Unblocks a previously blocked wallet in the external provider.
     *
     * @param wallet The wallet to be unblocked in the provider
     */
    abstract unblock(wallet: WalletSchema): any;
}
