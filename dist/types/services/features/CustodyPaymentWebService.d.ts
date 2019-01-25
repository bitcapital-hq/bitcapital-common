import { Http, HttpOptions } from "../../base";
import { PaymentSchema } from "../../models";
import { BaseCustodyOptions, CustodyPaymentFeature } from "../../provider";
export interface CustodyPaymentWebServiceOptions extends HttpOptions, BaseCustodyOptions {
}
export default class CustodyPaymentWebService extends CustodyPaymentFeature {
    readonly options: CustodyPaymentWebServiceOptions;
    protected http: Http;
    constructor(options: CustodyPaymentWebServiceOptions);
    payment(schema: PaymentSchema): Promise<PaymentSchema>;
}
