import { Http, HttpOptions } from "../../base";
import { BaseCustodyOptions, CustodyPostbackFeature } from "../../provider";
import { Payment } from "../../models";
export interface CustodyPostbackWebServiceOptions extends HttpOptions, BaseCustodyOptions {
}
export default class CustodyPostbackWebService extends CustodyPostbackFeature {
    readonly options: CustodyPostbackWebServiceOptions;
    protected http: Http;
    constructor(options: CustodyPostbackWebServiceOptions);
    onPostback(data: any): Promise<Payment>;
}
