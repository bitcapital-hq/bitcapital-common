import { Http, HttpOptions } from "../../base";
import { WalletSchema, Payment, PaymentSchema } from "../../models";
import { BaseCustodyOptions, CustodyWithdrawFeature } from "../../provider";

export interface CustodyWithdrawWebServiceOptions extends HttpOptions, BaseCustodyOptions {}

export default class CustodyWithdrawWebService extends CustodyWithdrawFeature {
  protected http: Http;

  constructor(public readonly options: CustodyWithdrawWebServiceOptions) {
    super();
    this.http = new Http(options);
  }

  public async info(wallet: WalletSchema, extra?: any): Promise<Payment> {
    const response = await this.http.get("/provider/withdraw", { wallet, extra });

    if (response.data) {
      return new Payment(response.data);
    }

    throw response;
  }

  public async withdraw(payment: PaymentSchema, extra?: any): Promise<Payment> {
    const response = await this.http.post("/provider/withdraw", { payment, extra });

    if (response.data && response.data.id) {
      return new Payment(response.data);
    }

    throw response;
  }

  public async onWithdraw(payment: PaymentSchema, extra?: any): Promise<Payment> {
    const response = await this.http.post("/provider/withdraw/postback", { payment, extra });

    if (response.data && response.data.id) {
      return new Payment(response.data);
    }

    throw response;
  }
}
