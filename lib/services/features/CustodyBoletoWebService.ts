import { Http, HttpOptions } from "../../base";
import { BoletoSchema, PaymentSchema, Wallet } from "../../models";
import { BaseCustodyOptions, CustodyBoletoFeature } from "../../provider";

export interface CustodyBoletoWebServiceOptions extends HttpOptions, BaseCustodyOptions {
}

export default class CustodyBoletoWebService extends CustodyBoletoFeature {
  protected http: Http;

  constructor(public readonly options: CustodyBoletoWebServiceOptions) {
    super();
    this.http = new Http(options);
  }

  public async info(wallet: Wallet, extra?: any): Promise<PaymentSchema> {
    const response = await this.http.get('/provider/boleto/info', { wallet, ...extra });

    if (response.data) {
      return response.data;
    }

    throw response;
  }

  public async emit(amount: string, wallet: Wallet, extra?: any): Promise<BoletoSchema> {
    const response = await this.http.post('/provider/boleto/emit', { amount, wallet, extra });

    if (response.data && response.data.id) {
      return response.data;
    }

    throw response;
  }

  public async getById(externalId: string, extra?: any): Promise<BoletoSchema | undefined> {
    const response = await this.http.get(`/provider/boleto/${externalId}`, { ...extra });

    if (response.data && response.data.id) {
      return response.data;
    }

    throw response;
  }
}
