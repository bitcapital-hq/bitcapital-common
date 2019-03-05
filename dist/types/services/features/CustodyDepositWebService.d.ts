import { Http, HttpOptions } from "../../base";
import { Payment, WalletSchema, PaymentSchema } from "../../models";
import { BaseCustodyOptions, CustodyDepositFeature } from "../../provider";
export interface CustodyDepositWebServiceOptions extends HttpOptions, BaseCustodyOptions {
    http?: Http;
}
export default class CustodyDepositWebService extends CustodyDepositFeature {
    readonly options: CustodyDepositWebServiceOptions;
    http: Http;
    constructor(options: CustodyDepositWebServiceOptions);
    info(wallet: WalletSchema, extra?: any): Promise<Payment>;
    onDeposit(payment: PaymentSchema, extra?: any): Promise<Payment>;
}
