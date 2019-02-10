import { Http, HttpOptions } from "../base";
import { User, Wallet } from "../models";
import { BaseCustody, BaseCustodyOptions, UnregisterReason } from "../provider";

export interface CustodyProviderWebServiceOptions extends HttpOptions, BaseCustodyOptions {
}

export default abstract class CustodyProviderWebService extends BaseCustody {
  protected http: Http; 

  constructor(public readonly options: CustodyProviderWebServiceOptions) {
    super(options);
    this.http = new Http(options);
  }

  public async register(user: User, wallet: Wallet): Promise<{ externalId: string }> {
    const response = await this.http.post('/provider/register', { user, wallet });

    if (response.data && response.data.id) {
      return response.data;
    }

    throw response;
  }

  public async update(user: User, wallet: Wallet): Promise<{ externalId: string }> {
    const response = await this.http.post('/provider/update', { user, wallet });

    if (response.data && response.data.id) {
      return response.data;
    }

    throw response;
  }

  public async unregister(user: User, wallet: Wallet, reason: UnregisterReason): Promise<{ externalId: string }> {
    const response = await this.http.post('/provider/unregister', { user, wallet, reason });

    if (response.data && response.data.id) {
      return response.data;
    }

    throw response;
  }
}
