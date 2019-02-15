import { Http, HttpOptions } from "../../base";
import { BaseCustodyOptions, CustodyPostbackFeature } from "../../provider";

export interface CustodyPostbackWebServiceOptions extends HttpOptions, BaseCustodyOptions {}

export default class CustodyPostbackWebService extends CustodyPostbackFeature {
  protected http: Http;

  constructor(public readonly options: CustodyPostbackWebServiceOptions) {
    super();
    this.http = new Http(options);
  }

  public async onPostback(data: any): Promise<void> {
    const response = await this.http.post("/postback/payment", { data });

    if (response.data && response.data.id) {
      return response.data;
    }

    throw response;
  }
}
