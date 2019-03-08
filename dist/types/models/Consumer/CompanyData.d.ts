export interface CompanyData {
    tradeName: string;
    activities: EconomicActivity[];
}
export interface EconomicActivity {
    isMain: boolean;
    code: string;
    description: string;
}
