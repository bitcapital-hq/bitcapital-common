import BaseCustodyFeature, { CustodyFeature } from "../BaseCustodyFeature";
import { CardSchema, EmitVirtualCardRequestSchema, CardBaseRequestSchema, EmitPhysicalCardRequestSchema, CardBlockRequestSchema, CardUnblockRequestSchema, CardCancellationRequestSchema } from "../../models";
export declare abstract class CustodyCardFeature extends BaseCustodyFeature {
    type: CustodyFeature;
    /**
     * Gets information about the avaiable operations in the specified card.
     * This is a utility method and is different for each provider.
     *
     * @param cardId  The card identification
     */
    abstract info(cardId: string, extra?: any): Promise<any>;
    /**
     * Gets Card information based on its external id.
     *
     * @param cardId  The card identification
     */
    abstract getById(cardId: string, extra?: any): Promise<CardSchema | undefined>;
    /**
     * Emit a new virtual card associtated with the custody wallet,
     * done from outside of the Bitcapital platform.
     *
     * @param payload The data required to the card issuing
     */
    abstract emitVirtual(payload: EmitVirtualCardRequestSchema): Promise<CardSchema>;
    /**
     * Emit a new physical card associtated with the custody wallet,
     * done from outside of the Bitcapital platform.
     *
     * @param payload The data required to the card issuing
     */
    abstract emitPhysical(payload: EmitPhysicalCardRequestSchema): Promise<CardSchema>;
    /**
     * Validates and gets boleto information based on its bar code
     *
     * @param cardId     The card identification
     * @param payload    The data required to perform the operation
     */
    abstract activate(cardId: string, payload: CardBaseRequestSchema): Promise<boolean>;
    /**
     * Blocks a card temporarily in the external provider.
     *
     * @param cardId     The card identification
     * @param payload    The data required to perform the operation
     */
    abstract block(cardId: string, payload: CardBlockRequestSchema): Promise<boolean>;
    /**
     * Unblocks a previously blocked card in the external provider.
     *
     * @param cardId     The card identification
     * @param payload    The data required to perform the operation
     */
    abstract unblock(cardId: string, payload: CardUnblockRequestSchema): Promise<boolean>;
    /**
     * Cancel the card in the external provider.
     *
     * @param cardId     The card identification
     * @param payload    The data required to perform the operation
     */
    abstract cancel(cardId: string, payload: CardCancellationRequestSchema): Promise<boolean>;
}
