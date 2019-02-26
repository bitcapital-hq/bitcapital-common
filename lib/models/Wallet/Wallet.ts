import { User, UserSchema } from "../User/User";
import { WalletBalance } from "./WalletBalance";
import { BankingWalletData, StellarWalletData } from "./WalletData";
import { WalletStatus } from "./WalletStatus";
import { BaseModelSchema, BaseModel } from "../../base";
import { AssetSchema, Asset } from "../Asset";
import { TransactionSchema, Transaction } from "../Transaction";
import { PaymentSchema, Payment } from "../Payment";

export { StellarWalletData, BankingWalletData, WalletBalance };

export interface WalletSchema extends BaseModelSchema {
  status?: WalletStatus;
  stellar?: StellarWalletData;
  user?: UserSchema;
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
  additionalData?: any = undefined;
  balances?: WalletBalance[] = undefined;
  issuedAssets?: Asset[] = undefined;
  assets?: Asset[] = undefined;
  transactions?: Transaction[] = undefined;
  received?: Payment[] = undefined;

  constructor(data: Partial<WalletSchema>) {
    super(data);

    Object.assign(this, data);

    this.user = data.user && new User(data.user);
    this.issuedAssets = data.issuedAssets && data.issuedAssets.map(issuedAsset => new Asset(issuedAsset));
    this.assets = data.assets && data.assets.map(asset => new Asset(asset));
    this.transactions = data.transactions && data.transactions.map(transaction => new Transaction(transaction));
    this.received = data.received && data.received.map(received => new Payment(received));
  }
}
