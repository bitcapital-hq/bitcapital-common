import { UserSchema, WalletSchema } from "../models";
import BaseCustodyFeature, { CustodyFeature } from "./BaseCustodyFeature";
import { CustodyProvider } from "./CustodyProvider";
import { CustodyAuditFeature, CustodyBlockFeature, CustodyBoletoFeature, CustodyCardFeature, CustodyDepositFeature, CustodyPaymentFeature, CustodyPostbackFeature, CustodyWithdrawFeature } from "./features";
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
    abstract readonly type: CustodyProvider;
    abstract readonly features: BaseCustodyFeature[];
    constructor(options: BaseCustodyOptions);
    feature(type: CustodyFeature.AUDIT): CustodyAuditFeature;
    feature(type: CustodyFeature.BLOCK): CustodyBlockFeature;
    feature(type: CustodyFeature.BOLETO): CustodyBoletoFeature;
    feature(type: CustodyFeature.CARD): CustodyCardFeature;
    feature(type: CustodyFeature.DEPOSIT): CustodyDepositFeature;
    feature(type: CustodyFeature.PAYMENT): CustodyPaymentFeature;
    feature(type: CustodyFeature.POSTBACK): CustodyPostbackFeature;
    feature(type: CustodyFeature.WITHDRAW): CustodyWithdrawFeature;
    feature(type: CustodyFeature): BaseCustodyFeature;
    /**
     * Registers a new wallet in the provider for a specific User.
     *
     * @param user The user instance to be registered in provider
     * @param wallet The specific wallet to be registered in provider
     * @param externalId The ID of the existing user in the provider
     */
    abstract register(user: UserSchema, wallet: WalletSchema, externalId?: any): Promise<{
        externalId: string;
    }>;
    /**
     * Updates the information of an existing user and wallet in the external provider.
     *
     * @param user The user instance to be updated
     * @param wallet The wallet instance to be updated
     */
    abstract update(user: UserSchema, wallet: WalletSchema): Promise<{
        externalId: string;
    }>;
    /**
     * Unregisters a wallet from the provider for a specific User. This
     * may be irreversible.
     *
     * @param user The user instance to be unregistered in provider
     * @param wallet The specific wallet to be unregistered in provider
     */
    abstract unregister(user: UserSchema, wallet: WalletSchema, reason: UnregisterReason): Promise<{
        externalId: string;
    }>;
}
