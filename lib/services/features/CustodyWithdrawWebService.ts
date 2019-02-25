import { Http, HttpOptions } from "../../base";
import { PaymentSchema, WalletSchema } from "../../models";
import { BaseCustodyOptions, CustodyWithdrawFeature } from "../../provider";

export interface CustodyWithdrawWebServiceOptions extends HttpOptions, BaseCustodyOptions {}

export default class CustodyWithdrawWebService extends CustodyWithdrawFeature {
  protected http: Http;

  constructor(public readonly options: CustodyWithdrawWebServiceOptions) {
    super();
    this.http = new Http(options);
  }

  public async info(wallet: WalletSchema, extra?: any): Promise<PaymentSchema> {
    const response = await this.http.get("/provider/withdraw", { wallet, extra });

    if (response.data) {
      return response.data;
    }

    throw response;
  }

  public async withdraw(amount: string, wallet: WalletSchema, extra?: any): Promise<PaymentSchema> {
    const response = await this.http.post("/provider/withdraw", { amount, wallet, extra });

    if (response.data && response.data.id) {
      return response.data;
    }

    throw response;
  }

  public async onWithdraw(amount: string, wallet: WalletSchema, extra?: any): Promise<PaymentSchema> {
    const response = await this.http.post("/provider/withdraw/postback", { amount, wallet, extra });

    if (response.data && response.data.id) {
      return response.data;
    }

    throw response;
  }
}
