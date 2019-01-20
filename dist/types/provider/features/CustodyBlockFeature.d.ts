import { Wallet } from "../../models";
import { CustodyFeature } from "../BaseCustodyFeature";
export default abstract class CustodyBlockFeature {
    type: CustodyFeature;
    /**
     * Blocks a wallet temporarily in the external provider.
     *
     * @param wallet The wallet to be blocked in the provider
     */
    abstract block(wallet: Wallet): any;
    /**
     * Unblocks a previously blocked wallet in the external provider.
     *
     * @param wallet The wallet to be unblocked in the provider
     */
    abstract unblock(wallet: Wallet): any;
}
