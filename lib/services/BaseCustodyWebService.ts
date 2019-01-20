import { Http, HttpOptions } from "../base";
import { Transaction, User, Wallet } from "../models";
import { BaseCustody, BaseCustodyOptions, UnregisterReason } from "../provider";

export interface CustodyProviderWebServiceOptions extends HttpOptions, BaseCustodyOptions {
}

export default abstract class CustodyProviderWebService extends BaseCustody {
  protected http: Http;

  constructor(public readonly options: CustodyProviderWebServiceOptions) {
    super(options);
    this.http = new Http(options);
  }

  public async register(user: User, wallet: Wallet): Promise<{id: string}> {
    const response = await this.http.post('/provider/register', { user, wallet });

    if(response.data && response.data.id) {
      return response.data;
    }

    throw response;
  }

  public async update(user: User, wallet: Wallet) {
    const response = await this.http.post('/provider/update', { user, wallet });

    if(response.data && response.data.id) {
      return response.data;
    }

    throw response;
  }

  public async history(wallet: Wallet) {
    const response = await this.http.get('/provider/history', { wallet });

    if(response.data && response.data.length) {
      return response.data.map(item => new Transaction(item));
    }

    throw response;
  }

  public async balance(wallet: Wallet) {
    const response = await this.http.get('/provider/balance', { wallet });

    if(response.data && response.data.value) {
      return response.data;
    }

    throw response;
  }

  public async unregister(user: User, wallet: Wallet, reason: UnregisterReason) {
    const response = await this.http.post('/provider/unregister', { user, wallet, reason });

    if(response.data && response.data.id) {
      return response.data;
    }

    throw response;
  }
}
