export interface EmitPhysicalCardRequestSchema {
    walletId: string;
    cardId: string;
    plasticId: number;
    externalId?: string;
}
