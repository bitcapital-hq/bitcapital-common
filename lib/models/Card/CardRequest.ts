export interface CardBaseRequestSchema {
  cardId?: string;
  password: string;
}
export interface CardUnblockRequestSchema extends CardBaseRequestSchema {}
export interface CardBlockRequestSchema extends CardBaseRequestSchema {
  comment: string;
}
