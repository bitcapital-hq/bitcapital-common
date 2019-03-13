import { Http, HttpOptions } from "../../base";
import { BaseCustodyOptions, CustodyPhoneChargeFeature } from "../../provider";

export interface CustodyPhoneChargeWebServiceOptions extends HttpOptions, BaseCustodyOptions {
    http?: Http;
}

export default class CustodyPhoneChargeWebService extends CustodyPhoneChargeFeature {
    public http: Http;

    constructor(public readonly options: CustodyPhoneChargeWebServiceOptions = {}) {
        super();
        this.http = new Http(options);
      }
    
    public async getMobileCreditProviders(){
        const response = await this.http.get("/provider/mobile/providers/info");

        if (response.data) {
            return response.data;
        }

        throw response;
    }
}