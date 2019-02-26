export interface CardBaseRequestSchema {
    cardId?: string;
    /** The card holder password used to block and unblock operations  */
    password: string;
}
