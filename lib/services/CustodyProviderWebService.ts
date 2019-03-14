import { Http, HttpOptions } from "../base";
import { UserSchema, WalletSchema } from "../models";
import {
  BaseCustody,
  BaseCustodyOptions,
  UnregisterReason,
  CustodyFeature,
  BaseCustodyFeature,
  CustodyAuditFeature,
  CustodyBlockFeature,
  CustodyBoletoFeature,
  CustodyCardFeature,
  CustodyDepositFeature,
  CustodyPaymentFeature,
  CustodyPostbackFeature,
  CustodyWithdrawFeature,
  CustodyPhoneChargeFeature
} from "../provider";
import { CustodyProviderErrorInterceptor } from "./interceptors/CustodyProviderErrorInterceptor";

export interface CustodyProviderWebServiceOptions extends HttpOptions, BaseCustodyOptions {}

export default abstract class CustodyProviderWebService extends BaseCustody {
  protected http: Http;

  constructor(public readonly options: CustodyProviderWebServiceOptions) {
    super(options);
    this.http = new Http(options);
    this.http.interceptor(new CustodyProviderErrorInterceptor(this));
  }

  public feature(type: CustodyFeature.AUDIT): CustodyAuditFeature;
  public feature(type: CustodyFeature.BLOCK): CustodyBlockFeature;
  public feature(type: CustodyFeature.BOLETO): CustodyBoletoFeature;
  public feature(type: CustodyFeature.CARD): CustodyCardFeature;
  public feature(type: CustodyFeature.DEPOSIT): CustodyDepositFeature;
  public feature(type: CustodyFeature.PAYMENT): CustodyPaymentFeature;
  public feature(type: CustodyFeature.POSTBACK): CustodyPostbackFeature;
  public feature(type: CustodyFeature.WITHDRAW): CustodyWithdrawFeature;
  public feature(type: CustodyFeature.PHONE_CHARGE): CustodyPhoneChargeFeature;
  public feature(type: CustodyFeature): BaseCustodyFeature;
  public feature(type: CustodyFeature): BaseCustodyFeature {
    const feature = super.feature(type);

    if (feature["http"] && (!feature["options"] || !feature["options"]["http"])) {
      // Override http client if not already overriden
      feature["http"] = this.http;
    }

    return feature;
  }

  public async register(user: UserSchema, wallet: WalletSchema, externalId?: any): Promise<{ externalId: string }> {
    const response = await this.http.post("/provider/register", { user, wallet, externalId });

    if (response.data && response.data) {
      return response.data;
    }

    throw response;
  }

  public async update(user: UserSchema, wallet: WalletSchema): Promise<{ externalId: string }> {
    const response = await this.http.post("/provider/update", { user, wallet });

    if (response.data) {
      return response.data;
    }

    throw response;
  }

  public async unregister(
    user: UserSchema,
    wallet: WalletSchema,
    reason: UnregisterReason
  ): Promise<{ externalId: string }> {
    const response = await this.http.post("/provider/unregister", { user, wallet, reason });

    if (response.data) {
      return response.data;
    }

    throw response;
  }
}
