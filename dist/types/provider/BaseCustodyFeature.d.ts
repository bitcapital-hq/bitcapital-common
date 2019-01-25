export declare enum CustodyFeature {
    DEPOSIT = "deposit",
    WITHDRAW = "withdraw",
    PAYMENT = "payment",
    BLOCK = "block",
    AUDIT = "audit"
}
export default abstract class BaseCustodyFeature {
    abstract readonly type: CustodyFeature;
}
