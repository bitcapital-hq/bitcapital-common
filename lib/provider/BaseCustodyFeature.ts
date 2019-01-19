export enum CustodyFeature {
  DEPOSIT = 'deposit',
  WITHDRAW = 'withdraw',
  PAYMENT = 'payment',
  BLOCK = 'block',
}

export default abstract class BaseCustodyFeature {
  public abstract readonly type: CustodyFeature;
}