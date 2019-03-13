export enum CustodyFeature {
  AUDIT = "audit",
  BLOCK = "block",
  BOLETO = "boleto",
  CARD = "card",
  DEPOSIT = "deposit",
  PAYMENT = "payment",
  POSTBACK = "postback",
  WITHDRAW = "withdraw",
  PHONE_CHARGE = "phone_charge"
}

export default abstract class BaseCustodyFeature {
  public abstract readonly type: CustodyFeature;
}
