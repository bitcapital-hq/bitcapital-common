import { Http, HttpOptions } from "../../base";
import { BaseCustodyOptions, CustodyPhoneCreditFeature } from "../../provider";

export interface CustodyPhoneCreditWebServiceOptions extends HttpOptions, BaseCustodyOptions {
  http?: Http;
}

export default class CustodyPhoneCreditWebService extends CustodyPhoneCreditFeature {
  public http: Http;

  constructor(public readonly options: CustodyPhoneCreditWebServiceOptions = {}) {
    super();
    this.http = new Http(options);
  }

  public async getMobileCreditProviders() {
    const response = await this.http.get("/provider/mobile/providers/info");

    if (response.data) {
      return response.data;
    }

    throw response;
  }
}
