export declare enum CardCancellationReason {
    COMMON = 3,
    LOST = 4,
    THEFT = 5,
    CLIENT = 6,
    BANK = 7,
    STRAYED = 8,
    DAMAGED = 9,
    STRIPE = 10,
    EMBOSSING = 11,
    SUSPECTED_FAKE = 12,
    RETURNED_MAIL = 13,
    DECEASED_TITULAR = 14,
    DEACTIVATED = 15,
    EXPIRED = 16
}
export interface CardCancellationRequestSchema {
    /** The reason for the card cancellation  */
    comment: string;
    reason: CardCancellationReason;
}
