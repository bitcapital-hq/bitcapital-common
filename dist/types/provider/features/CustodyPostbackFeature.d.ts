import BaseCustodyFeature, { CustodyFeature } from "../BaseCustodyFeature";
export default abstract class CustodyPostbackFeature extends BaseCustodyFeature {
    type: CustodyFeature;
    abstract onPostback(data?: any): Promise<void>;
}
