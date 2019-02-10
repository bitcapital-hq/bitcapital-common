import { Http, HttpOptions } from "../../base";
import { BoletoSchema, PaymentSchema, Wallet } from "../../models";
import { BaseCustodyOptions, CustodyBoletoFeature, BoletoPaymentExtra } from "../../provider";
export interface CustodyBoletoWebServiceOptions extends HttpOptions, BaseCustodyOptions {
}
export default class CustodyBoletoWebService extends CustodyBoletoFeature {
    readonly options: CustodyBoletoWebServiceOptions;
    protected http: Http;
    constructor(options: CustodyBoletoWebServiceOptions);
    info(wallet: Wallet, extra?: any): Promise<PaymentSchema>;
    emit(amount: string, wallet: Wallet, extra?: any): Promise<BoletoSchema>;
    getById(externalId: string, extra?: any): Promise<BoletoSchema | undefined>;
    validate(barCode: string, extra?: BoletoPaymentExtra): Promise<any>;
    pay(barCode: string, wallet: Wallet, extra?: BoletoPaymentExtra): Promise<PaymentSchema>;
}
