import { AssetsScopes } from "./assets";
import { DomainsScopes } from "./domains";
import { UsersScopes } from "./users";
import { PaymentsScopes } from "./payments";
import { TransactionsScopes } from "./transactions";
import { WalletsScopes } from "./wallets";
import { PhoneCreditScopes } from "./phonecredits";
declare const scopes: {
    assets: typeof AssetsScopes;
    domains: typeof DomainsScopes;
    users: typeof UsersScopes;
    payments: typeof PaymentsScopes;
    transactions: typeof TransactionsScopes;
    wallets: typeof WalletsScopes;
    phoneCredits: typeof PhoneCreditScopes;
};
export default scopes;
