import { Transaction, User, Wallet } from "../models";
import BaseCustodyFeature from "./BaseCustodyFeature";

export enum UnregisterReason {
  USER_CANCELLATION = 'user-cancelation',
  MEDIATOR_CANCELLATION = 'mediator-cancelation',
  PROVIDER_CANCELLATION = 'provider-cancelation',
  ADMIN_CANCELLATION = 'admin-cancelation',
  OTHER = 'other',
}

export default abstract class BaseCustody {
  public abstract readonly features: BaseCustodyFeature[];

  public abstract async register(user: User, wallet: Wallet);

  public abstract async wallet(wallet: Wallet);

  public abstract async transaction(transaction: Transaction);

  public abstract async update(user: User, wallet: Wallet);

  public abstract async history(wallet: Wallet);

  public abstract async balance(wallet: Wallet);

  public abstract async unregister(user: User, wallet: Wallet, reason: UnregisterReason);

}