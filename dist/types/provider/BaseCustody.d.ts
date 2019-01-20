import { UserSchema, WalletSchema } from "../models";
import BaseCustodyFeature from "./BaseCustodyFeature";
export declare enum UnregisterReason {
    USER_CANCELLATION = "user-cancelation",
    MEDIATOR_CANCELLATION = "mediator-cancelation",
    PROVIDER_CANCELLATION = "provider-cancelation",
    ADMIN_CANCELLATION = "admin-cancelation",
    OTHER = "other"
}
export interface BaseCustodyOptions {
}
export default abstract class BaseCustody {
    options: BaseCustodyOptions;
    abstract readonly features: BaseCustodyFeature[];
    constructor(options: BaseCustodyOptions);
    /**
     * Registers a new wallet in the provider for a specific User.
     *
     * @param user The user instance to be registered in provider
     * @param wallet The specific wallet to be registered in provider
     */
    abstract register(user: UserSchema, wallet: WalletSchema): Promise<{
        id: string;
    }>;
    /**
     * Updates the information of an existing user and wallet in the external provider.
     *
     * @param user The user instance to be updated
     * @param wallet The wallet instance to be updated
     */
    abstract update(user: UserSchema, wallet: WalletSchema): Promise<{
        id: string;
    }>;
    /**
     * Unregisters a wallet from the provider for a specific User. This
     * may be irreversible.
     *
     * @param user The user instance to be unregistered in provider
     * @param wallet The specific wallet to be unregistered in provider
     */
    abstract unregister(user: UserSchema, wallet: WalletSchema, reason: UnregisterReason): Promise<{
        id: string;
    }>;
}
