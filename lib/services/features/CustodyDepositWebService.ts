import { Http, HttpOptions } from "../../base";
import { PaymentSchema, Wallet } from "../../models";
import { BaseCustodyOptions, CustodyDepositFeature } from "../../provider";

export interface CustodyDepositWebServiceOptions extends HttpOptions, BaseCustodyOptions {
}

export default class CustodyDepositWebService extends CustodyDepositFeature {
  protected http: Http;

  constructor(public readonly options: CustodyDepositWebServiceOptions) {
    super();
    this.http = new Http(options);
  }

  public async info(wallet: Wallet, extra?: any): Promise<PaymentSchema> {
    const response = await this.http.get('/provider/deposit', { wallet, extra });

    if (response.data) {
      return response.data;
    }

    throw response;
  }

  public async onDeposit(amount: string, wallet: Wallet, extra?: any): Promise<PaymentSchema> {
    const response = await this.http.post('/provider/deposit/postback', { amount, wallet, extra });

    if (response.data && response.data.id) {
      return response.data;
    }

    throw response;
  }

}
