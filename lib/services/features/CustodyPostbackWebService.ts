import { Http, HttpOptions } from "../../base";
import { BaseCustodyOptions, CustodyPostbackFeature } from "../../provider";
import { Payment } from "../../models";

export interface CustodyPostbackWebServiceOptions extends HttpOptions, BaseCustodyOptions {
  http?: Http;
}

export default class CustodyPostbackWebService extends CustodyPostbackFeature {
  public http: Http;

  constructor(public readonly options: CustodyPostbackWebServiceOptions) {
    super();
    this.http = options.http || new Http(options);
  }

  public async onPostback(data: any): Promise<Payment> {
    const response = await this.http.post("/postback/payment", { data });

    if (response.data && response.data.id) {
      return new Payment(response.data);
    }

    throw response;
  }
}
