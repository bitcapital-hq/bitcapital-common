import { Http, HttpOptions } from "../base";
import { UserSchema, WalletSchema } from "../models";
import { BaseCustody, BaseCustodyOptions, UnregisterReason, CustodyFeature } from "../provider";
export interface CustodyProviderWebServiceOptions extends HttpOptions, BaseCustodyOptions {
}
export default abstract class CustodyProviderWebService extends BaseCustody {
    readonly options: CustodyProviderWebServiceOptions;
    protected http: Http;
    constructor(options: CustodyProviderWebServiceOptions);
    feature<Type>(type: CustodyFeature): Type;
    register(user: UserSchema, wallet: WalletSchema): Promise<{
        externalId: string;
    }>;
    update(user: UserSchema, wallet: WalletSchema): Promise<{
        externalId: string;
    }>;
    unregister(user: UserSchema, wallet: WalletSchema, reason: UnregisterReason): Promise<{
        externalId: string;
    }>;
}
