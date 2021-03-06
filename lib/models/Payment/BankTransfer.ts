import { BankTransferDestination, BankTransferDestinationSchema } from "./BankTransferDestination";
import { IsNotEmpty } from "class-validator";

export interface BankTransferSchema {
  destination: BankTransferDestinationSchema;
  identificator: number;
  subIssuerCode: number;
}

export class BankTransfer implements BankTransferSchema {
  @IsNotEmpty() destination: BankTransferDestination = undefined;
  @IsNotEmpty() identificator: number = undefined;
  @IsNotEmpty() subIssuerCode: number = undefined;

  constructor(data: Partial<BankTransferSchema>) {
    Object.assign(this, data);

    this.destination = data.destination && new BankTransferDestination(data.destination);
  }
}
