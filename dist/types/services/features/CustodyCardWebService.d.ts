import { Http, HttpOptions } from "../../base";
import { BaseCustodyOptions, CustodyCardFeature } from "../../provider";
import { EmitPhysicalCardRequestSchema, EmitVirtualCardRequestSchema, CardBlockRequestSchema, CardUnblockRequestSchema, CardBaseRequestSchema, CardCancellationRequestSchema, Payment, Card } from "../../models";
export interface CustodyCardWebServiceOptions extends HttpOptions, BaseCustodyOptions {
}
export default class CustodyCardWebService extends CustodyCardFeature {
    readonly options: CustodyCardWebServiceOptions;
    protected http: Http;
    constructor(options: CustodyCardWebServiceOptions);
    info(cardId: string, extra?: any): Promise<Payment>;
    getById(cardId: string, extra?: any): Promise<Card | undefined>;
    emitPhysical(payload: EmitPhysicalCardRequestSchema): Promise<Card>;
    emitVirtual(payload: EmitVirtualCardRequestSchema): Promise<Card>;
    activate(cardId: string, payload: CardBaseRequestSchema): Promise<boolean>;
    block(cardId: string, payload: CardBlockRequestSchema): Promise<boolean>;
    unblock(cardId: string, payload: CardUnblockRequestSchema): Promise<boolean>;
    cancel(cardId: string, payload: CardCancellationRequestSchema): Promise<boolean>;
}
