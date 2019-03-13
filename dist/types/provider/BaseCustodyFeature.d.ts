export declare enum CustodyFeature {
    AUDIT = "audit",
    BLOCK = "block",
    BOLETO = "boleto",
    CARD = "card",
    DEPOSIT = "deposit",
    PAYMENT = "payment",
    POSTBACK = "postback",
    WITHDRAW = "withdraw"
}
export default abstract class BaseCustodyFeature {
    abstract readonly type: CustodyFeature;
}
