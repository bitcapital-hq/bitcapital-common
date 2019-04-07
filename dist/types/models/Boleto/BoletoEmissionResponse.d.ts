import { BaseModel } from "../../base";
import { BoletoSchema } from "./Boleto";
export interface BoletoEmissionResponseSchema {
    id: string;
    boleto: BoletoSchema;
    source: {
        bitcapitalWalletId: string;
    };
}
export declare class BoletoEmissionResponse extends BaseModel implements BoletoEmissionResponseSchema {
    id: string;
    boleto: BoletoSchema;
    source: {
        bitcapitalWalletId: string;
    };
    constructor(data: Partial<BoletoEmissionResponseSchema>);
}
