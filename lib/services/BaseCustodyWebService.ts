import { Http, HttpOptions } from "../base";
import { Transaction, User, Wallet } from "../models";
import { BaseCustody, UnregisterReason } from "../provider";

export interface CustodyProviderWebServiceOptions extends HttpOptions {
}

export default abstract class CustodyProviderWebService extends BaseCustody {
  protected http: Http;

  constructor(protected readonly options: CustodyProviderWebServiceOptions) {
    super();
    this.http = new Http(options);
  }

  public register(user: User, wallet: Wallet) {
    return this.http.post('/provider/register', { user, wallet });
  }

  public wallet(wallet: Wallet) {
    return this.http.get('/provider/wallets', { wallet });
  }

  public transaction(transaction: Transaction) {
    return this.http.get('/provider/transaction', { transaction });
  }

  public update(user: User, wallet: Wallet) {
    return this.http.post('/provider/update', { user, wallet });
  }

  public history(wallet: Wallet) {
    return this.http.get('/provider/history', { wallet });
  }

  public balance(wallet: Wallet) {
    return this.http.get('/provider/balance', { wallet });
  }

  public unregister(user: User, wallet: Wallet, reason: UnregisterReason) {
    return this.http.post('/provider/wallet', { user, reason, wallet });
  }
}
