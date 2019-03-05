import { Http, HttpOptions } from "../../base";
import { BaseCustodyOptions, CustodyPostbackFeature } from "../../provider";

export interface CustodyPostbackWebServiceOptions extends HttpOptions, BaseCustodyOptions {
  http?: Http;
}

export default class CustodyPostbackWebService extends CustodyPostbackFeature {
  public http: Http;

  constructor(public readonly options: CustodyPostbackWebServiceOptions) {
    super();
    this.http = options.http || new Http(options);
  }

  public async onPostback(data: any): Promise<void> {
    const response = await this.http.post("/postback/payment", { data });

    if (response.data && response.data.id) {
      return response.data;
    }

    throw response;
  }
}
