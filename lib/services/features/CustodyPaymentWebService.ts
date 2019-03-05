import { Http, HttpOptions } from "../../base";
import { TransactionSchema, Transaction } from "../../models";
import { BaseCustodyOptions, CustodyPaymentFeature } from "../../provider";

export interface CustodyPaymentWebServiceOptions extends HttpOptions, BaseCustodyOptions {
  http?: Http;
}

export default class CustodyPaymentWebService extends CustodyPaymentFeature {
  public http: Http;

  constructor(public readonly options: CustodyPaymentWebServiceOptions) {
    super();
    this.http = options.http || new Http(options);
  }

  public async payment(schema: TransactionSchema): Promise<Transaction> {
    const response = await this.http.post("/provider/payment", { ...schema });

    if (response && response.data) {
      return new Transaction(response.data);
    }

    throw response;
  }
}
