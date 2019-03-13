import { Phone } from "./Phone";
export interface CompanyData {
    tradeName: string;
    openingDate: Date;
    activities: EconomicActivity[];
    partners?: CompanyPartner[];
}
export interface EconomicActivity {
    isMain: boolean;
    code: string;
    description: string;
}
export interface CompanyPartner {
    name: string;
    gender: string;
    birthDate: Date;
    birthCountry: string;
    taxId: string;
    email: string;
    maritalStatus?: string;
    identityDoc?: string;
    identityDocEmissionDate?: string;
    identityDocEmissionEntity?: string;
    identityDocState?: string;
    phones: Phone[];
}
