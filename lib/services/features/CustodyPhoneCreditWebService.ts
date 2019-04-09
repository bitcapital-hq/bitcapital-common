import { Http, HttpOptions } from "../../base";
import { BaseCustodyOptions, CustodyPhoneCreditFeature } from "../../provider";

export interface CustodyPhoneCreditWebServiceOptions extends HttpOptions, BaseCustodyOptions {
  http?: Http;
}

export default class CustodyPhoneCreditWebService extends CustodyPhoneCreditFeature {
  public http: Http;

  constructor(public readonly options: CustodyPhoneCreditWebServiceOptions = {}) {
    super();
    this.http = new Http(options);
  }

  public async getMobileCreditProviders() {
    const response = await this.http.get("/provider/mobile/providers/info");

    if (response.data) {
      return response.data;
    }

    throw response;
  }

  public async createOrder(requestBody) {
    const response = await this.http.post("/provider/mobile/order/create", requestBody);

    if (response.data) {
      return response.data;
    }

    throw response;
  }

  public async completeOrder(requestBody) {
    const response = await this.http.post("/provider/mobile/order/complete", requestBody);

    if (response.data) {
      return response.data;
    }

    throw response;
  }

  public async getOrderHistory(walletId: string) {
    const response = await this.http.get(`/provider/mobile/order/history/${walletId}`);

    if (response.data) {
      return response.data;
    }

    throw response;
  }

  public async getOrderAmountForWalletToday(walletId: string) {
    const response = await this.http.get(`/provider/mobile/order/${walletId}/amount/today`);

    if (response.data) {
      return response.data;
    }

    throw response;
  }
}
