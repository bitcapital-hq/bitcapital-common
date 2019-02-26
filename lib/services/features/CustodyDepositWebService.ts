import { Http, HttpOptions } from "../../base";
import { Payment, WalletSchema } from "../../models";
import { BaseCustodyOptions, CustodyDepositFeature } from "../../provider";

export interface CustodyDepositWebServiceOptions extends HttpOptions, BaseCustodyOptions {}

export default class CustodyDepositWebService extends CustodyDepositFeature {
  protected http: Http;

  constructor(public readonly options: CustodyDepositWebServiceOptions) {
    super();
    this.http = new Http(options);
  }

  public async info(wallet: WalletSchema, extra?: any): Promise<Payment> {
    const response = await this.http.get("/provider/deposit", { wallet, extra });

    if (response.data) {
      return new Payment(response.data);
    }

    throw response;
  }

  public async onDeposit(amount: string, wallet: WalletSchema, extra?: any): Promise<Payment> {
    const response = await this.http.post("/provider/deposit/postback", { amount, wallet, extra });

    if (response.data && response.data.id) {
      return new Payment(response.data);
    }

    throw response;
  }
}
