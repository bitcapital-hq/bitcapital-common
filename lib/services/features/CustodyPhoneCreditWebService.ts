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
    
    public async getMobileCreditProviders(){
        const response = await this.http.get("/provider/mobile/providers/info");

        if (response.data) {
            return response.data;
        }

        throw response;
    }

    public async createOrder(phoneCode:string, phoneNumber:string, providerCode:string){
        const requestBody = {
            phoneCode,
            phoneNumber,
            providerCode
        };
        const response = await this.http.post("/provider/mobile/order/create", requestBody);

        if (response.data) {
            return response.data;
        }

        throw response;
    }

    public async completeOrder(amountKey:string, walletId:string, phoneCreditOrderId:string){
        const requestBody = {
            amountKey,
            walletId,
            phoneCreditOrderId
        };
        const response = await this.http.post("/provider/mobile/order/complete", requestBody);

        if (response.data) {
            return response.data;
        }

        throw response;
    }
}