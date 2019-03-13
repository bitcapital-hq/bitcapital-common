import { BaseCustodyFeature } from "..";
import { CustodyFeature } from "../BaseCustodyFeature";

export interface MobileCreditProvider {
    name: string,
    code: string
} 

export abstract class CustodyPhoneChargeFeature extends BaseCustodyFeature{
    type = CustodyFeature.PHONE_CHARGE;

    public abstract async getMobileCreditProviders(): Promise<MobileCreditProvider[]>;
}