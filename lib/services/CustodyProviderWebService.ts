import { Http, HttpOptions } from "../base";
import { UserSchema, WalletSchema } from "../models";
import { BaseCustody, BaseCustodyOptions, UnregisterReason, CustodyFeature } from "../provider";
import { CustodyProviderErrorInterceptor } from "./interceptors/CustodyProviderErrorInterceptor";

export interface CustodyProviderWebServiceOptions extends HttpOptions, BaseCustodyOptions {}

export default abstract class CustodyProviderWebService extends BaseCustody {
  protected http: Http;

  constructor(public readonly options: CustodyProviderWebServiceOptions) {
    super(options);
    this.http = new Http(options);
    this.http.interceptor(new CustodyProviderErrorInterceptor(this));
  }

  public feature<Type>(type: CustodyFeature): Type {
    const feature = super.feature(type);

    if (feature["http"] && (!feature["options"] || !feature["options"]["http"])) {
      // Override http client if not already overriden
      feature["http"] = this.http;
    }

    return feature as Type;
  }

  public async register(user: UserSchema, wallet: WalletSchema): Promise<{ externalId: string }> {
    const response = await this.http.post("/provider/register", { user, wallet });

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
