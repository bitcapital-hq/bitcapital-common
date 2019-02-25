import BaseCustodyFeature, { CustodyFeature } from "../BaseCustodyFeature";
import {
  CardSchema,
  EmitVirtualCardRequestSchema,
  CardBaseRequestSchema,
  EmitPhysicalCardRequestSchema,
  CardBlockRequestSchema,
  CardUnblockRequestSchema,
  CardCancellationRequestSchema
} from "../../models";

export abstract class CustodyCardFeature extends BaseCustodyFeature {
  type = CustodyFeature.CARD;

  /**
   * Gets information about the avaiable operations in the specified card.
   * This is a utility method and is different for each provider.
   *
   * @param cardId  The card identification
   */
  public abstract async info(cardId: string, extra?: any): Promise<any>;

  /**
   * Gets Card information based on its external id.
   *
   * @param cardId  The card identification
   */
  public abstract async getById(cardId: string, extra?: any): Promise<CardSchema | undefined>;

  /**
   * Emit a new virtual card associtated with the custody wallet,
   * done from outside of the Bitcapital platform.
   *
   * @param payload The data required to the card issuing
   */
  public abstract async emitVirtual(payload: EmitVirtualCardRequestSchema): Promise<CardSchema>;

  /**
   * Emit a new physical card associtated with the custody wallet,
   * done from outside of the Bitcapital platform.
   *
   * @param payload The data required to the card issuing
   */
  public abstract async emitPhysical(payload: EmitPhysicalCardRequestSchema): Promise<CardSchema>;

  /**
   * Validates and gets boleto information based on its bar code
   *
   * @param cardId     The card identification
   * @param payload    The data required to perform the operation
   */
  public abstract async activate(cardId: string, payload: CardBaseRequestSchema): Promise<boolean>;

  /**
   * Blocks a card temporarily in the external provider.
   *
   * @param cardId     The card identification
   * @param payload    The data required to perform the operation
   */
  public abstract async block(cardId: string, payload: CardBlockRequestSchema): Promise<boolean>;

  /**
   * Unblocks a previously blocked card in the external provider.
   *
   * @param cardId     The card identification
   * @param payload    The data required to perform the operation
   */
  public abstract async unblock(cardId: string, payload: CardUnblockRequestSchema): Promise<boolean>;

  /**
   * Cancel the card in the external provider.
   *
   * @param cardId     The card identification
   * @param payload    The data required to perform the operation
   */
  public abstract async cancel(cardId: string, payload: CardCancellationRequestSchema): Promise<boolean>;
}
