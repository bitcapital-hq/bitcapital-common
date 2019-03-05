import { Http, HttpOptions } from "../../base";
import { Payment, WalletSchema, PaymentSchema } from "../../models";
import { BaseCustodyOptions, CustodyDepositFeature } from "../../provider";

export interface CustodyDepositWebServiceOptions extends HttpOptions, BaseCustodyOptions {
  http?: Http;
}

export default class CustodyDepositWebService extends CustodyDepositFeature {
  public http: Http;

  constructor(public readonly options: CustodyDepositWebServiceOptions) {
    super();
    this.http = options.http || new Http(options);
  }

  public async info(wallet: WalletSchema, extra?: any): Promise<Payment> {
    const response = await this.http.get("/provider/deposit", { wallet, extra });

    if (response.data) {
      return new Payment(response.data);
    }

    throw response;
  }

  public async onDeposit(payment: PaymentSchema, extra?: any): Promise<Payment> {
    const response = await this.http.post("/provider/deposit/postback", { payment, extra });

    if (response.data && response.data.id) {
      return new Payment(response.data);
    }

    throw response;
  }
}
