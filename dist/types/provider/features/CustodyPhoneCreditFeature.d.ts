import { BaseCustodyFeature } from "..";
import { CustodyFeature } from "../BaseCustodyFeature";
export interface MobileCreditProvider {
    name: string;
    code: string;
}
export declare abstract class CustodyPhoneCreditFeature extends BaseCustodyFeature {
    type: CustodyFeature;
    abstract getMobileCreditProviders(): Promise<MobileCreditProvider[]>;
    abstract createOrder(requestBody: any): any;
    abstract completeOrder(requestBody: any): any;
    abstract getOrderHistory(walletId: string): any;
    abstract getOrderAmountForWalletToday(walletId: string): any;
}
