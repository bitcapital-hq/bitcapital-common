import { Http, HttpOptions } from "../../base";
import { BaseCustodyOptions, CustodyPhoneChargeFeature } from "../../provider";
export interface CustodyPhoneChargeWebServiceOptions extends HttpOptions, BaseCustodyOptions {
    http?: Http;
}
export default class CustodyPhoneChargeWebService extends CustodyPhoneChargeFeature {
    readonly options: CustodyPhoneChargeWebServiceOptions;
    http: Http;
    constructor(options?: CustodyPhoneChargeWebServiceOptions);
    getMobileCreditProviders(): Promise<any>;
}
