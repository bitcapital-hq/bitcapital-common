import { Http, HttpOptions } from "../../base";
import { BaseCustodyOptions, CustodyCardFeature } from "../../provider";
import { PaymentSchema, EmitPhysicalCardRequestSchema, CardSchema, EmitVirtualCardRequestSchema, CardBlockRequestSchema, CardUnblockRequestSchema, CardBaseRequestSchema, CardCancellationRequestSchema } from "../../models";
export interface CustodyCardWebServiceOptions extends HttpOptions, BaseCustodyOptions {
}
export default class CustodyCardWebService extends CustodyCardFeature {
    readonly options: CustodyCardWebServiceOptions;
    protected http: Http;
    constructor(options: CustodyCardWebServiceOptions);
    info(cardId: string, extra?: any): Promise<PaymentSchema>;
    getById(cardId: string, extra?: any): Promise<CardSchema | undefined>;
    emitPhysical(payload: EmitPhysicalCardRequestSchema): Promise<CardSchema>;
    emitVirtual(payload: EmitVirtualCardRequestSchema): Promise<CardSchema>;
    activate(cardId: string, payload: CardBaseRequestSchema): Promise<boolean>;
    block(cardId: string, payload: CardBlockRequestSchema): Promise<boolean>;
    unblock(cardId: string, payload: CardUnblockRequestSchema): Promise<boolean>;
    cancel(cardId: string, payload: CardCancellationRequestSchema): Promise<boolean>;
}
