import { User, UserSchema } from "../User/User";
import { WalletBalance } from "./WalletBalance";
import { BankingWalletData, StellarWalletData } from "./WalletData";
import { WalletStatus } from "./WalletStatus";
import { BaseModelSchema, BaseModel } from "../../base";
import { AssetSchema } from "../Asset";
import { TransactionSchema } from "../Transaction";
import { PaymentSchema } from "../Payment";

export { StellarWalletData, BankingWalletData, WalletBalance };

export interface WalletSchema extends BaseModelSchema {
  status?: WalletStatus;
  stellar?: StellarWalletData
  user?: UserSchema;
  userId?: string;
  additionalData?: any;
  balances?: WalletBalance[];
  issuedAssets?: AssetSchema[];
  assets?: AssetSchema[];
  transactions?: TransactionSchema[];
  received?: PaymentSchema[];
}

export class Wallet extends BaseModel implements WalletSchema {
  status?: WalletStatus = undefined;
  stellar?: StellarWalletData = undefined;
  user?: User = undefined;
  userId?: string = undefined;
  additionalData?: any = undefined;
  balances?: WalletBalance[] = undefined;
  issuedAssets?: AssetSchema[] = undefined;
  assets?: AssetSchema[] = undefined;
  transactions?: TransactionSchema[] = undefined;
  received?: PaymentSchema[] = undefined;

  constructor(data: Partial<WalletSchema>) {
    super(data);
  }
}
