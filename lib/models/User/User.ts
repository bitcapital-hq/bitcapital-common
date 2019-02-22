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

export interface UserSchema extends BaseModelSchema {
  name?: string;
  firstName: string;
  lastName: string;
  email?: string;
  role?: UserRole;
  status?: UserStatus;
  password?: string;
  credentials?: OAuthCredentials;
  domain?: DomainSchema;
  consumer?: ConsumerSchema;
  virtual?: boolean;
  product?: ProductSchema;
  wallets?: WalletSchema[];
  cards?: CardSchema[];
}

export class User extends BaseModel implements UserSchema {
  @IsOptional() name: string = undefined;

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
  }
}
