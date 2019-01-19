import { Payment, Wallet } from "../../models";
export default abstract class CustodyPaymentFeature {
    abstract info(wallet: Wallet): any;
    abstract payment(payment: Payment): any;
}
