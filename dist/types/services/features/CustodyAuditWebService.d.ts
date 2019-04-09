import { Http, HttpOptions } from "../../base";
import { WalletSchema, Payment } from "../../models";
import { BaseCustodyOptions, CustodyAuditFeature } from "../../provider";
export interface CustodyAuditWebServiceOptions extends HttpOptions, BaseCustodyOptions {
    http?: Http;
}
export default class CustodyAuditWebService extends CustodyAuditFeature {
    readonly options: CustodyAuditWebServiceOptions;
    http: Http;
    constructor(options: CustodyAuditWebServiceOptions);
    balance(wallet: WalletSchema): Promise<[{
        balance: string;
    }]>;
    history(wallet: WalletSchema): Promise<Payment[]>;
}
