import { BaseModel, BaseModelSchema } from "../../base";
import { IsOptional, IsNotEmpty } from "class-validator";

export interface BoletoSchema extends BaseModelSchema {
  documentNumber?: string;
  expiresAt: Date | string;
  amount: string;
  beneficiaryName?: string;
  beneficiaryCode?: string;
  beneficiaryDocument?: string;
  bank?: string;
  agency?: string;
  agreementNumber?: string;
  agreementNumberDigit?: string;
  barCode?: string;
  digitableLine?: string;
  isRegistered?: boolean;
}

export class Boleto extends BaseModel implements BoletoSchema {
  @IsOptional() documentNumber?: string = undefined;
  @IsNotEmpty() expiresAt: Date = undefined;
  @IsNotEmpty() amount: string = undefined;
  @IsOptional() beneficiaryName?: string = undefined;
  @IsOptional() beneficiaryCode?: string = undefined;
  @IsOptional() beneficiaryDocument?: string = undefined;
  @IsOptional() bank?: string = undefined;
  @IsOptional() agency?: string = undefined;
  @IsOptional() agreementNumber?: string = undefined;
  @IsOptional() agreementNumberDigit?: string = undefined;
  @IsOptional() barCode?: string = undefined;
  @IsOptional() digitableLine?: string = undefined;
  @IsOptional() isRegistered?: boolean = false;

  constructor(data: Partial<BoletoSchema>) {
    super(data);

    Object.assign(this, data);

    this.expiresAt = data.expiresAt && new Date(data.expiresAt);
  }
}
