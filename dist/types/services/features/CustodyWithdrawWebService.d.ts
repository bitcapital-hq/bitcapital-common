import { Http, HttpOptions } from "../../base";
import { WalletSchema, Payment } from "../../models";
import { BaseCustodyOptions, CustodyWithdrawFeature } from "../../provider";
export interface CustodyWithdrawWebServiceOptions extends HttpOptions, BaseCustodyOptions {
}
export default class CustodyWithdrawWebService extends CustodyWithdrawFeature {
    readonly options: CustodyWithdrawWebServiceOptions;
    protected http: Http;
    constructor(options: CustodyWithdrawWebServiceOptions);
    info(wallet: WalletSchema, extra?: any): Promise<Payment>;
    withdraw(amount: string, wallet: WalletSchema, extra?: any): Promise<Payment>;
    onWithdraw(amount: string, wallet: WalletSchema, extra?: any): Promise<Payment>;
}
