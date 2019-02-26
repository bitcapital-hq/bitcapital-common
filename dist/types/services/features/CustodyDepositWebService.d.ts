import { Http, HttpOptions } from "../../base";
import { Payment, WalletSchema } from "../../models";
import { BaseCustodyOptions, CustodyDepositFeature } from "../../provider";
export interface CustodyDepositWebServiceOptions extends HttpOptions, BaseCustodyOptions {
}
export default class CustodyDepositWebService extends CustodyDepositFeature {
    readonly options: CustodyDepositWebServiceOptions;
    protected http: Http;
    constructor(options: CustodyDepositWebServiceOptions);
    info(wallet: WalletSchema, extra?: any): Promise<Payment>;
    onDeposit(amount: string, wallet: WalletSchema, extra?: any): Promise<Payment>;
}
