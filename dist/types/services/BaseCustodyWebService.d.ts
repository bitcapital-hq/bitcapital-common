import { Http, HttpOptions } from "../base";
import { Transaction, User, Wallet } from "../models";
import { BaseCustody, UnregisterReason } from "../provider";
export interface CustodyProviderWebServiceOptions extends HttpOptions {
}
export default abstract class CustodyProviderWebService extends BaseCustody {
    protected readonly options: CustodyProviderWebServiceOptions;
    protected http: Http;
    constructor(options: CustodyProviderWebServiceOptions);
    register(user: User, wallet: Wallet): Promise<import("../../node_modules/axios/index").AxiosResponse<any>>;
    wallet(wallet: Wallet): Promise<import("../../node_modules/axios/index").AxiosResponse<any>>;
    transaction(transaction: Transaction): Promise<import("../../node_modules/axios/index").AxiosResponse<any>>;
    update(user: User, wallet: Wallet): Promise<import("../../node_modules/axios/index").AxiosResponse<any>>;
    history(wallet: Wallet): Promise<import("../../node_modules/axios/index").AxiosResponse<any>>;
    balance(wallet: Wallet): Promise<import("../../node_modules/axios/index").AxiosResponse<any>>;
    unregister(user: User, wallet: Wallet, reason: UnregisterReason): Promise<import("../../node_modules/axios/index").AxiosResponse<any>>;
}
