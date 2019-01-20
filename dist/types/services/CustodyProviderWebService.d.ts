import { Http, HttpOptions } from "../base";
import { User, Wallet } from "../models";
import { BaseCustody, BaseCustodyOptions, UnregisterReason } from "../provider";
export interface CustodyProviderWebServiceOptions extends HttpOptions, BaseCustodyOptions {
}
export default abstract class CustodyProviderWebService extends BaseCustody {
    readonly options: CustodyProviderWebServiceOptions;
    protected http: Http;
    constructor(options: CustodyProviderWebServiceOptions);
    register(user: User, wallet: Wallet): Promise<{
        id: string;
    }>;
    update(user: User, wallet: Wallet): Promise<any>;
    history(wallet: Wallet): Promise<any>;
    balance(wallet: Wallet): Promise<any>;
    unregister(user: User, wallet: Wallet, reason: UnregisterReason): Promise<any>;
}
