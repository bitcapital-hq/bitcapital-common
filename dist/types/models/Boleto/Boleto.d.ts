import { BaseModel, BaseModelSchema } from "../../base";
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
export declare class Boleto extends BaseModel implements BoletoSchema {
    documentNumber?: string;
    expiresAt: Date;
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
    constructor(data: Partial<BoletoSchema>);
}
