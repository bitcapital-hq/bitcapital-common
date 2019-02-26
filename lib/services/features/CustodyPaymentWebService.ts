import { Http, HttpOptions } from "../../base";
import { TransactionSchema, Transaction } from "../../models";
import { BaseCustodyOptions, CustodyPaymentFeature } from "../../provider";

export interface CustodyPaymentWebServiceOptions extends HttpOptions, BaseCustodyOptions {}

export default class CustodyPaymentWebService extends CustodyPaymentFeature {
  protected http: Http;

  constructor(public readonly options: CustodyPaymentWebServiceOptions) {
    super();
    this.http = new Http(options);
  }

  public async payment(schema: TransactionSchema): Promise<Transaction> {
    const response = await this.http.post("/provider/payment", { ...schema });

    if (response.data && response.data.length) {
      return new Transaction(response.data);
    }

    throw response;
  }
}
