export interface CardBaseRequestSchema {
  userId?: string;
  cardId?: string;
  additionalData?: any;
  password: string;
}
export interface CardUnblockRequestSchema extends CardBaseRequestSchema {}
export interface CardBlockRequestSchema extends CardBaseRequestSchema {
  comment: string;
}
