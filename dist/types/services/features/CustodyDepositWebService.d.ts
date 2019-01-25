import { Http, HttpOptions } from "../../base";
import { PaymentSchema, Wallet } from "../../models";
import { BaseCustodyOptions, CustodyDepositFeature } from "../../provider";
export interface CustodyDepositWebServiceOptions extends HttpOptions, BaseCustodyOptions {
}
export default class CustodyDepositWebService extends CustodyDepositFeature {
    readonly options: CustodyDepositWebServiceOptions;
    protected http: Http;
    constructor(options: CustodyDepositWebServiceOptions);
    info(wallet: Wallet, extra?: any): Promise<PaymentSchema>;
    onDeposit(amount: string, wallet: Wallet, extra?: any): Promise<PaymentSchema>;
}
