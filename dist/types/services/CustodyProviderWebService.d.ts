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
        externalId: string;
    }>;
    update(user: User, wallet: Wallet): Promise<{
        externalId: string;
    }>;
    unregister(user: User, wallet: Wallet, reason: UnregisterReason): Promise<{
        externalId: string;
    }>;
}
