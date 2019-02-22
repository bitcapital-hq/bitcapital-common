import { BoletoSchema, PaymentSchema, WalletSchema } from "../../models";
import BaseCustodyFeature, { CustodyFeature } from "../BaseCustodyFeature";

export type BoletoPaymentExtra =
  | {
      amount?: string;
      discount?: number;
      taxAmount?: number;
      description: string;
    }
  | any;

export abstract class CustodyBoletoFeature extends BaseCustodyFeature {
  type = CustodyFeature.BOLETO;

  /**
   * Gets information about depositing assets in the specified wallet using
   * boletos. This is a utility method and is different for each provider.
   *
   * @param wallet The wallet where the asset will be deposited.
   */
  public abstract async info(wallet: WalletSchema, extra?: any): Promise<any>;

  /**
   * Emit a new deposit Boleto in the custody wallet,
   * done from outside of the Bitcapital platform, such as a banking deposit.
   *
   * @param amount The amount that was deposited
   * @param wallet The wallet in which the amount was deposited into
   */
  public abstract async emit(amount: string, wallet: WalletSchema, extra?: any): Promise<BoletoSchema>;

  /**
   * Gets Boleto information based on its external id.
   *
   * @param externalId The boleto external identification
   */
  public abstract async getById(externalId: string, extra?: any): Promise<BoletoSchema | undefined>;

  /**
   * Validates and gets boleto information based on its bar code
   *
   * @param barcode The boleto barcode to be validated
   * @param extra The extra information for the boleto validation
   */
  public abstract async validate(barcode: string, extra?: BoletoPaymentExtra): Promise<any>;

  /**
   * Pays a boleto based on a barCode string and a source wallet.
   *
   * @param barcode The boleto barcode to be payed
   * @param wallet The wallet to be the source of the payment
   * @param extra The extra information for the boleto payment
   */
  public abstract async pay(barcode: string, wallet: WalletSchema, extra?: BoletoPaymentExtra): Promise<PaymentSchema>;
}
