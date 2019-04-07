import { Http, HttpOptions } from "../base";
import { UserSchema, WalletSchema } from "../models";
import { BaseCustody, BaseCustodyOptions, UnregisterReason, CustodyFeature, BaseCustodyFeature, CustodyAuditFeature, CustodyBlockFeature, CustodyBoletoFeature, CustodyCardFeature, CustodyDepositFeature, CustodyPaymentFeature, CustodyPostbackFeature, CustodyWithdrawFeature, CustodyPhoneCreditFeature } from "../provider";
export interface CustodyProviderWebServiceOptions extends HttpOptions, BaseCustodyOptions {
}
export default abstract class CustodyProviderWebService extends BaseCustody {
    readonly options: CustodyProviderWebServiceOptions;
    protected http: Http;
    constructor(options: CustodyProviderWebServiceOptions);
    feature(type: CustodyFeature.AUDIT): CustodyAuditFeature;
    feature(type: CustodyFeature.BLOCK): CustodyBlockFeature;
    feature(type: CustodyFeature.BOLETO): CustodyBoletoFeature;
    feature(type: CustodyFeature.CARD): CustodyCardFeature;
    feature(type: CustodyFeature.DEPOSIT): CustodyDepositFeature;
    feature(type: CustodyFeature.PAYMENT): CustodyPaymentFeature;
    feature(type: CustodyFeature.POSTBACK): CustodyPostbackFeature;
    feature(type: CustodyFeature.WITHDRAW): CustodyWithdrawFeature;
    feature(type: CustodyFeature.PHONE_CREDITS): CustodyPhoneCreditFeature;
    feature(type: CustodyFeature): BaseCustodyFeature;
    register(user: UserSchema, wallet: WalletSchema, externalId?: any): Promise<{
        externalId: string;
    }>;
    update(user: UserSchema, wallet: WalletSchema): Promise<{
        externalId: string;
    }>;
    unregister(user: UserSchema, wallet: WalletSchema, reason: UnregisterReason): Promise<{
        externalId: string;
    }>;
}
