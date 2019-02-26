import { CardBaseRequestSchema } from "./CardBaseRequest";

export interface CardUnblockRequestSchema extends CardBaseRequestSchema {}

export interface CardBlockRequestSchema extends CardBaseRequestSchema {
  /** The reason for the card blocking  */
  comment: string;
}
