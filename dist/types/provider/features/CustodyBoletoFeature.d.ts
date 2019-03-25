import { BoletoSchema, WalletSchema, PaymentSchema } from "../../models";
import BaseCustodyFeature, { CustodyFeature } from "../BaseCustodyFeature";
export declare type BoletoPaymentExtra = {
    amount?: string;
    discount?: number;
    taxAmount?: number;
    description: string;
} | any;
export declare abstract class CustodyBoletoFeature extends BaseCustodyFeature {
    type: CustodyFeature;
    /**
     * Gets information about depositing assets in the specified wallet using
     * boletos. This is a utility method and is different for each provider.
     *
     * @param wallet The wallet where the asset will be deposited.
     */
    abstract info(wallet: WalletSchema, extra?: any): Promise<any>;
    /**
     * Emit a new deposit Boleto in the custody wallet,
     * done from outside of the Bitcapital platform, such as a banking deposit.
     *
     * @param amount The amount that was deposited
     * @param wallet The wallet in which the amount was deposited into
     */
    abstract emit(amount: string, wallet: WalletSchema, extra?: any): Promise<BoletoSchema>;
    /**
     * Gets Boleto information based on its external id.
     *
     * @param externalId The boleto external identification
     */
    abstract getById(externalId: string, extra?: any): Promise<BoletoSchema | undefined>;
    /**
     * Validates and gets boleto information based on its bar code
     *
     * @param barcode The boleto barcode to be validated
     * @param extra The extra information for the boleto validation
     */
    abstract validate(barcode: string, extra?: BoletoPaymentExtra): Promise<any>;
    /**
     * Gets boletos between a specific date range
     *
     * @param start The start of the period
     * @param end The end of the period
     * @param walletId The wallet ID that owns the boletos
     */
    abstract getByDateRange(start: Date, end: Date, walletId: string, extra?: any): Promise<any>;
    /**
     * Pays a boleto based on a barCode string and a source wallet.
     *
     * @param barcode The boleto barcode to be payed
     * @param wallet The wallet to be the source of the payment
     * @param extra The extra information for the boleto payment
     */
    abstract pay(barcode: string, payment: PaymentSchema, extra?: BoletoPaymentExtra): Promise<PaymentSchema>;
}
