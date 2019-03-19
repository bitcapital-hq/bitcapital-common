import { Http, HttpOptions } from "../../base";
import { BaseCustodyOptions, CustodyPhoneCreditFeature } from "../../provider";
export interface CustodyPhoneCreditWebServiceOptions extends HttpOptions, BaseCustodyOptions {
    http?: Http;
}
export default class CustodyPhoneCreditWebService extends CustodyPhoneCreditFeature {
    readonly options: CustodyPhoneCreditWebServiceOptions;
    http: Http;
    constructor(options?: CustodyPhoneCreditWebServiceOptions);
    getMobileCreditProviders(): Promise<any>;
    createOrder(requestBody: any): Promise<any>;
    completeOrder(amountKey: string, walletId: string, phoneCreditOrderId: string): Promise<any>;
}
