import { Http, HttpOptions } from "../../base";
import { WalletSchema, Payment, Boleto, PaymentSchema } from "../../models";
import { BaseCustodyOptions, CustodyBoletoFeature, BoletoPaymentExtra } from "../../provider";
export interface CustodyBoletoWebServiceOptions extends HttpOptions, BaseCustodyOptions {
}
export default class CustodyBoletoWebService extends CustodyBoletoFeature {
    readonly options: CustodyBoletoWebServiceOptions;
    protected http: Http;
    constructor(options: CustodyBoletoWebServiceOptions);
    info(wallet: WalletSchema, extra?: any): Promise<Payment>;
    emit(amount: string, wallet: WalletSchema, extra?: any): Promise<Boleto>;
    getById(externalId: string, extra?: any): Promise<Boleto>;
    validate(barCode: string, extra?: BoletoPaymentExtra): Promise<any>;
    pay(barCode: string, payment: PaymentSchema, extra?: BoletoPaymentExtra): Promise<PaymentSchema>;
}
