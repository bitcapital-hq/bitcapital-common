export enum CustodyFeature {
  DEPOSIT = 'deposit',
  WITHDRAW = 'withdraw',
  PAYMENT = 'payment',
  BLOCK = 'block',
  AUDIT = 'audit',
}

export default abstract class BaseCustodyFeature {
  public abstract readonly type: CustodyFeature;
}