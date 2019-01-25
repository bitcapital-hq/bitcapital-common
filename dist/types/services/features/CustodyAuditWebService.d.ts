import { Http, HttpOptions } from "../../base";
import { PaymentSchema, Wallet } from "../../models";
import { BaseCustodyOptions, CustodyAuditFeature } from "../../provider";
export interface CustodyAuditWebServiceOptions extends HttpOptions, BaseCustodyOptions {
}
export default class CustodyAuditWebService extends CustodyAuditFeature {
    readonly options: CustodyAuditWebServiceOptions;
    protected http: Http;
    constructor(options: CustodyAuditWebServiceOptions);
    balance(wallet: Wallet): Promise<[{
        balance: string;
    }]>;
    history(wallet: Wallet): Promise<PaymentSchema[]>;
}
