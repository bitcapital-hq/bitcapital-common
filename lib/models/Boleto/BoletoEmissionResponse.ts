import { BaseModel } from "../../base";
import { Boleto, BoletoSchema } from "./Boleto";

export interface BoletoEmissionResponseSchema {
  id: string;
  boleto: BoletoSchema;
  source: {
    bitcapitalWalletId: string;
  };
}

export class BoletoEmissionResponse extends BaseModel implements BoletoEmissionResponseSchema {
  id: string;
  boleto: BoletoSchema;
  source: { bitcapitalWalletId: string };

  constructor(data: Partial<BoletoEmissionResponseSchema>) {
    super(data);
    Object.assign(this, data);
    this.boleto = data.boleto ? (data.boleto instanceof Boleto ? data.boleto : new Boleto(data.boleto)) : undefined;
  }
}
