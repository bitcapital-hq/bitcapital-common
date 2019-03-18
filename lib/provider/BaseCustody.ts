import { UserSchema, WalletSchema } from "../models";
import BaseCustodyFeature, { CustodyFeature } from "./BaseCustodyFeature";
import { CustodyProvider } from "./CustodyProvider";
import {
  CustodyAuditFeature,
  CustodyBlockFeature,
  CustodyBoletoFeature,
  CustodyCardFeature,
  CustodyDepositFeature,
  CustodyPaymentFeature,
  CustodyPostbackFeature,
  CustodyWithdrawFeature,
  CustodyPhoneCreditFeature
} from "./features";

export enum UnregisterReason {
  USER_CANCELLATION = "user-cancelation",
  MEDIATOR_CANCELLATION = "mediator-cancelation",
  PROVIDER_CANCELLATION = "provider-cancelation",
  ADMIN_CANCELLATION = "admin-cancelation",
  OTHER = "other"
}

export interface BaseCustodyOptions {}

export default abstract class BaseCustody {
  public abstract readonly type: CustodyProvider;
  public abstract readonly features: BaseCustodyFeature[];

  public constructor(public options: BaseCustodyOptions) {}

  public feature(type: CustodyFeature.AUDIT): CustodyAuditFeature;
  public feature(type: CustodyFeature.BLOCK): CustodyBlockFeature;
  public feature(type: CustodyFeature.BOLETO): CustodyBoletoFeature;
  public feature(type: CustodyFeature.CARD): CustodyCardFeature;
  public feature(type: CustodyFeature.DEPOSIT): CustodyDepositFeature;
  public feature(type: CustodyFeature.PAYMENT): CustodyPaymentFeature;
  public feature(type: CustodyFeature.POSTBACK): CustodyPostbackFeature;
  public feature(type: CustodyFeature.WITHDRAW): CustodyWithdrawFeature;
  public feature(type: CustodyFeature.PHONE_CREDITS): CustodyPhoneCreditFeature;
  public feature(type: CustodyFeature): BaseCustodyFeature;
  public feature(type: CustodyFeature): BaseCustodyFeature {
    const feature = this.features.find(f => f.type === type);

    if (!feature) {
      throw new Error(`Provider does not support the "${type}" feature, or has not registered its service`);
    }

    return feature;
  }

  /**
   * Registers a new wallet in the provider for a specific User.
   *
   * @param user The user instance to be registered in provider
   * @param wallet The specific wallet to be registered in provider
   * @param externalId The ID of the existing user in the provider
   */
  public abstract async register(
    user: UserSchema,
    wallet: WalletSchema,
    externalId?: any
  ): Promise<{ externalId: string }>;

  /**
   * Updates the information of an existing user and wallet in the external provider.
   *
   * @param user The user instance to be updated
   * @param wallet The wallet instance to be updated
   */
  public abstract async update(user: UserSchema, wallet: WalletSchema): Promise<{ externalId: string }>;

  /**
   * Unregisters a wallet from the provider for a specific User. This
   * may be irreversible.
   *
   * @param user The user instance to be unregistered in provider
   * @param wallet The specific wallet to be unregistered in provider
   */
  public abstract async unregister(
    user: UserSchema,
    wallet: WalletSchema,
    reason: UnregisterReason
  ): Promise<{ externalId: string }>;
}
