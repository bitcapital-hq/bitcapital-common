import { Http, HttpOptions } from "../../base";
import { PaymentSchema, Wallet } from "../../models";
import { BaseCustodyOptions, CustodyWithdrawFeature } from "../../provider";
export interface CustodyWithdrawWebServiceOptions extends HttpOptions, BaseCustodyOptions {
}
export default class CustodyWithdrawWebService extends CustodyWithdrawFeature {
    readonly options: CustodyWithdrawWebServiceOptions;
    protected http: Http;
    constructor(options: CustodyWithdrawWebServiceOptions);
    info(wallet: Wallet, extra?: any): Promise<PaymentSchema>;
    withdraw(amount: string, wallet: Wallet, extra?: any): Promise<PaymentSchema>;
    onWithdraw(amount: string, wallet: Wallet, extra?: any): Promise<PaymentSchema>;
}
