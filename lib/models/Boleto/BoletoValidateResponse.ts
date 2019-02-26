import { IsNotEmpty } from "class-validator";
import { BaseModel, BaseModelSchema } from "../../base";

export interface BoletoInfoSchema {
  description: string;
  amount: number;
  expiresAt: Date | string;
  hasExpirationDate: boolean;
  barcodeNumber: string;
}

export class BoletoInfo implements BoletoInfoSchema {
  @IsNotEmpty() description: string = undefined;
  @IsNotEmpty() amount: number = undefined;
  @IsNotEmpty() expiresAt: Date = undefined;
  @IsNotEmpty() hasExpirationDate: boolean = undefined;
  @IsNotEmpty() barcodeNumber: string = undefined;

  constructor(data: Partial<BoletoInfoSchema>) {
    Object.assign(this, data);

    this.expiresAt = data.expiresAt && data.expiresAt instanceof Date ? data.expiresAt : new Date(data.expiresAt);
  }
}

export interface TradersInfoSchema {
  recipient: string;
  recipientDocument: string;
  payerName: string;
  payerDocument: string;
}

export class TradersInfo implements TradersInfoSchema {
  @IsNotEmpty() recipient: string = undefined;
  @IsNotEmpty() recipientDocument: string = undefined;
  @IsNotEmpty() payerName: string = undefined;
  @IsNotEmpty() payerDocument: string = undefined;

  constructor(data: Partial<TradersInfoSchema>) {
    Object.assign(this, data);
  }
}

export interface PartialAmountDetailsSchema {
  code: number;
  description: string;
}

export class PartialAmountDetails implements PartialAmountDetailsSchema {
  @IsNotEmpty() code: number = undefined;
  @IsNotEmpty() description: string = undefined;

  constructor(data: Partial<PartialAmountDetailsSchema>) {
    Object.assign(this, data);
  }
}

export interface PaymentAmountDetailsSchema {
  interestAmount: number;
  discount: number;
  fineAmount: number;
  totalAmount: number;
  paymentAmountUpdated: number;
  calculationDate: Date | string;
}

export class PaymentAmountDetails implements PaymentAmountDetailsSchema {
  @IsNotEmpty() interestAmount: number = undefined;
  @IsNotEmpty() discount: number = undefined;
  @IsNotEmpty() fineAmount: number = undefined;
  @IsNotEmpty() totalAmount: number = undefined;
  @IsNotEmpty() paymentAmountUpdated: number = undefined;
  @IsNotEmpty() calculationDate: Date = undefined;

  constructor(data: Partial<PaymentAmountDetailsSchema>) {
    Object.assign(this, data);

    this.calculationDate =
      data.calculationDate && data.calculationDate instanceof Date
        ? data.calculationDate
        : new Date(data.calculationDate);
  }
}

export interface PaymentInfoSchema {
  contractId: string;
  idNumber: string;
  traders: TradersInfo;
  expiresAt: Date | string;
  totalAmount: number;
  amountDetails: PaymentAmountDetailsSchema;
  acceptPartialAmount: PartialAmountDetailsSchema;
  barcode: string;
  digitableLine: string;
  paymentDeadline: Date | string;
  validDate: boolean;
  nextBusinessDay: string;
}

export class PaymentInfo implements PaymentInfoSchema {
  @IsNotEmpty() contractId: string = undefined;
  @IsNotEmpty() idNumber: string = undefined;
  @IsNotEmpty() traders: TradersInfo = undefined;
  @IsNotEmpty() expiresAt: Date = undefined;
  @IsNotEmpty() totalAmount: number = undefined;
  @IsNotEmpty() amountDetails: PaymentAmountDetails = undefined;
  @IsNotEmpty() acceptPartialAmount: PartialAmountDetails = undefined;
  @IsNotEmpty() barcode: string = undefined;
  @IsNotEmpty() digitableLine: string = undefined;
  @IsNotEmpty() paymentDeadline: Date = undefined;
  @IsNotEmpty() validDate: boolean = undefined;
  @IsNotEmpty() nextBusinessDay: string = undefined;

  constructor(data: Partial<PaymentInfoSchema>) {
    Object.assign(this, data);

    this.expiresAt = data.expiresAt && data.expiresAt instanceof Date ? data.expiresAt : new Date(data.expiresAt);
    this.paymentDeadline =
      data.paymentDeadline && data.paymentDeadline instanceof Date
        ? data.paymentDeadline
        : new Date(data.paymentDeadline);
    this.traders = data.traders && data.traders instanceof TradersInfo ? data.traders : new TradersInfo(data.traders);
    this.amountDetails =
      data.amountDetails && data.amountDetails instanceof PaymentAmountDetails
        ? data.amountDetails
        : new PaymentAmountDetails(data.amountDetails);
    this.acceptPartialAmount =
      data.acceptPartialAmount && data.acceptPartialAmount instanceof PaymentAmountDetails
        ? data.acceptPartialAmount
        : new PartialAmountDetails(data.acceptPartialAmount);
  }
}

export interface BoletoValidateResponseSchema extends BaseModelSchema {
  paid: boolean;
  boletoInfo: BoletoInfoSchema;
  paymentInfo: PaymentInfoSchema;
}

export class BoletoValidateResponse extends BaseModel implements BoletoValidateResponseSchema {
  @IsNotEmpty() paid: boolean = undefined;
  @IsNotEmpty() boletoInfo: BoletoInfo = undefined;
  @IsNotEmpty() paymentInfo: PaymentInfo = undefined;

  constructor(data: Partial<BoletoValidateResponseSchema>) {
    super(data);

    Object.assign(this, data);

    this.boletoInfo = data.boletoInfo && new BoletoInfo(data.boletoInfo);
    this.paymentInfo = data.paymentInfo && new PaymentInfo(data.paymentInfo);
  }
}
