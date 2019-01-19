import User from "../User/User";
import { WalletBalance } from "./WalletBalance";
import { BankingWalletData, StellarWalletData } from "./WalletData";
import { WalletStatus } from "./WalletStatus";
import { BaseModelSchema, BaseModel } from "../../base";

export { StellarWalletData, BankingWalletData, WalletBalance };

export interface WalletSchema extends BaseModelSchema {
  status?: WalletStatus;
  stellar?: StellarWalletData
  data?: BankingWalletData;
  user?: User | string;
}

export default class Wallet extends BaseModel implements WalletSchema {
  status?: WalletStatus = undefined;
  stellar?: StellarWalletData = undefined;
  data?: BankingWalletData = undefined;
  user?: User | string = undefined;
  balances?: WalletBalance[] = undefined;

  constructor(data: Partial<WalletSchema>) {
    super(data);
  }
}
