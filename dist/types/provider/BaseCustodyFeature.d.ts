export declare enum CustodyFeature {
    DEPOSIT = "deposit",
    WITHDRAW = "withdraw",
    PAYMENT = "payment",
    BLOCK = "block"
}
export default abstract class BaseCustodyFeature {
    abstract readonly type: CustodyFeature;
}
