import { BaseCustodyFeature } from "..";
import { CustodyFeature } from "../BaseCustodyFeature";

export interface MobileCreditProvider {
    name: string,
    code: string
} 

export abstract class CustodyPhoneCreditFeature extends BaseCustodyFeature{
    type = CustodyFeature.PHONE_CREDITS;

    public abstract async getMobileCreditProviders(): Promise<MobileCreditProvider[]>;

    public abstract async createOrder(phoneCode:string, phoneNumber:string, providerCode:string);

    public abstract async completeOrder(mountKey:string, walletId:string, phoneCreditOrderId:string);
}