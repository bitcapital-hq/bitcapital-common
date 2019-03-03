import { BaseModel, BaseModelSchema } from "../../base";
import { WalletStatus } from "./WalletStatus";
import { WalletSchema, Wallet } from "./Wallet";
export interface WalletStateSchema extends BaseModelSchema {
    status: WalletStatus;
    wallet?: WalletSchema;
}
export declare class WalletState extends BaseModel implements WalletStateSchema {
    status: WalletStatus;
    wallet?: Wallet;
    consumerId?: string;
    constructor(data: Partial<WalletStateSchema>);
}
