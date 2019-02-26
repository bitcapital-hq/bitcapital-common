import { Http, HttpOptions } from "../../base";
import { WalletSchema, Payment, Boleto } from "../../models";
import { BaseCustodyOptions, CustodyBoletoFeature, BoletoPaymentExtra } from "../../provider";

export interface CustodyBoletoWebServiceOptions extends HttpOptions, BaseCustodyOptions {}

export default class CustodyBoletoWebService extends CustodyBoletoFeature {
  protected http: Http;

  constructor(public readonly options: CustodyBoletoWebServiceOptions) {
    super();
    this.http = new Http(options);
  }

  public async info(wallet: WalletSchema, extra?: any): Promise<Payment> {
    const response = await this.http.get("/provider/boleto/info", { wallet, ...extra });

    if (response.data) {
      return response.data;
    }

    throw response;
  }

  public async emit(amount: string, wallet: WalletSchema, extra?: any): Promise<Boleto> {
    const response = await this.http.post("/provider/boleto/emit", { amount, wallet, extra });

    if (response.data && response.data.id) {
      return response.data;
    }

    throw response;
  }

  public async getById(externalId: string, extra?: any): Promise<Boleto | undefined> {
    const response = await this.http.get(`/provider/boleto/${externalId}`, { ...extra });

    if (response.data && response.data.id) {
      return response.data;
    }

    throw response;
  }

  public async validate(barCode: string, extra?: BoletoPaymentExtra): Promise<any> {
    const response = await this.http.get(`/provider/boleto/validate`, { barCode, ...extra });

    if (response.data && response.data.id) {
      return response.data;
    }

    throw response;
  }

  public async pay(barCode: string, wallet: WalletSchema, extra?: BoletoPaymentExtra): Promise<Payment> {
    const response = await this.http.post(`/provider/boleto/pay`, { barCode, wallet, ...extra });

    if (response.data && response.data.id) {
      return response.data;
    }

    throw response;
  }
}
