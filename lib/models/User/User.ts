import { IsEmail, IsEnum, IsNotEmpty, IsOptional } from "class-validator";
import { BaseModel, BaseModelSchema } from "../../base";
import { Consumer, ConsumerSchema } from "../Consumer";
import { Domain, DomainSchema } from "../Domain";
import { OAuthCredentials } from "../OAuth";
import { Wallet, WalletSchema } from "../Wallet";
import { UserRole } from "./UserRole";
import { UserStatus } from "./UserStatus";
import { Product, ProductSchema } from "../Domain/Product";
import { CardSchema, Card } from "../Card";
import { UserState, UserStateSchema } from "./UserState";

export interface UserSchema extends BaseModelSchema {
  name?: string;
  firstName: string;
  lastName: string;
  email: string;
  role?: UserRole;
  status?: UserStatus;
  states?: UserStateSchema[];
  password?: string;
  credentials?: OAuthCredentials;
  domain?: DomainSchema;
  consumer?: ConsumerSchema;
  product?: ProductSchema;
  wallets?: WalletSchema[];
  cards?: CardSchema[];
  virtual?: boolean;
}

export class User extends BaseModel implements UserSchema {
  @IsOptional() name?: string = undefined;

  @IsNotEmpty() firstName: string = undefined;

  @IsNotEmpty() lastName: string = undefined;

  @IsNotEmpty()
  @IsEmail()
  email: string = undefined;

  @IsOptional()
  @IsEnum(UserRole)
  role?: UserRole = undefined;

  @IsOptional()
  @IsEnum(UserStatus)
  status?: UserStatus = undefined;

  @IsOptional() domain?: Domain = undefined;

  @IsOptional() password?: string = undefined;

  states?: UserState[];
  consumer?: Consumer = undefined;
  wallets?: Wallet[] = undefined;
  product?: Product = undefined;
  credentials?: OAuthCredentials = undefined;
  cards?: Card[] = undefined;
  virtual: boolean = undefined;

  constructor(data: Partial<UserSchema>) {
    super(data);

    Object.assign(this, data);

    if (!this.name && data.firstName) {
      this.name = `${data.firstName} ${data.lastName ? data.lastName : ""}`;
    } else if (!this.name) {
      this.name = "";
    }

    this.virtual =
      data.credentials && data.credentials.virtual ? data.credentials.virtual : data.virtual || this.virtual;

    // Relationship attributes enforcing
    this.credentials = data.credentials
      ? data.credentials instanceof OAuthCredentials
        ? data.credentials
        : new OAuthCredentials(data.credentials)
      : undefined;

    this.states = data.states && data.states.map(state => new UserState(state));
    this.domain = data.domain && new Domain(data.domain);
    this.consumer = data.consumer && new Consumer(data.consumer);
    this.product = data.product && new Product(data.product);
    this.wallets = data.wallets && data.wallets.map(wallet => new Wallet(wallet));
    this.cards = data.cards && data.cards.map(card => new Card(card));
  }
}
