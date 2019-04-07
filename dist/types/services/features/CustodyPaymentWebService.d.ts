import { Http, HttpOptions } from "../../base";
import { TransactionSchema, Transaction } from "../../models";
import { BaseCustodyOptions, CustodyPaymentFeature } from "../../provider";
export interface CustodyPaymentWebServiceOptions extends HttpOptions, BaseCustodyOptions {
    http?: Http;
}
export default class CustodyPaymentWebService extends CustodyPaymentFeature {
    readonly options: CustodyPaymentWebServiceOptions;
    http: Http;
    constructor(options: CustodyPaymentWebServiceOptions);
    payment(schema: TransactionSchema): Promise<Transaction>;
}
