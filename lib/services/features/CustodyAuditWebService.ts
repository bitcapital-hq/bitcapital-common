import { Http, HttpOptions } from "../../base";
import { WalletSchema, Payment } from "../../models";
import { BaseCustodyOptions, CustodyAuditFeature } from "../../provider";

export interface CustodyAuditWebServiceOptions extends HttpOptions, BaseCustodyOptions {}

export default class CustodyAuditWebService extends CustodyAuditFeature {
  protected http: Http;

  constructor(public readonly options: CustodyAuditWebServiceOptions) {
    super();
    this.http = new Http(options);
  }

  public async balance(wallet: WalletSchema): Promise<[{ balance: string }]> {
    const response = await this.http.post("/provider/audit/balance", { wallet });

    if (response.data && response.data.length) {
      return response.data;
    }

    throw response;
  }

  public async history(wallet: WalletSchema): Promise<Payment[]> {
    const response = await this.http.post("/provider/audit/history", { wallet });

    if (response.data && response.data.length) {
      return response.data;
    }

    throw response;
  }
}
