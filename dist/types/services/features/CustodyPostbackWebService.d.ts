import { Http, HttpOptions } from "../../base";
import { BaseCustodyOptions, CustodyPostbackFeature } from "../../provider";
export interface CustodyPostbackWebServiceOptions extends HttpOptions, BaseCustodyOptions {
    http?: Http;
}
export default class CustodyPostbackWebService extends CustodyPostbackFeature {
    readonly options: CustodyPostbackWebServiceOptions;
    http: Http;
    constructor(options: CustodyPostbackWebServiceOptions);
    onPostback(data: any): Promise<void>;
}
