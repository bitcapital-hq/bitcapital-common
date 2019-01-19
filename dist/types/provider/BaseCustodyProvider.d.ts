import { Transaction, User, Wallet } from "../models";
export declare enum UnregisterReason {
    USER_CANCELLATION = "user-cancelation",
    MEDIATOR_CANCELLATION = "mediator-cancelation",
    PROVIDER_CANCELLATION = "provider-cancelation",
    ADMIN_CANCELLATION = "admin-cancelation",
    OTHER = "other"
}
export interface BaseCustodyFeatures {
    deposit: boolean;
    withdraw: boolean;
    p2p: boolean;
    block: boolean;
}
export default abstract class BaseCustody {
    abstract readonly features: BaseCustodyFeatures;
    abstract register(user: User, wallet: Wallet): any;
    abstract wallet(wallet: Wallet): any;
    abstract transaction(transaction: Transaction): any;
    abstract update(user: User, wallet: Wallet): any;
    abstract history(wallet: Wallet): any;
    abstract balance(wallet: Wallet): any;
    abstract unregister(wallet: Wallet, reason: UnregisterReason): any;
}
