import { IsEmail, IsEnum, IsNotEmpty, IsOptional } from "class-validator";
import { BaseModel, BaseModelSchema } from "../../base";
import Consumer from "../Consumer/Consumer";
import Domain from "../Domain/Domain";
import { OAuthCredentials } from "../OAuth";
import Wallet from "../Wallet/Wallet";
import { UserRole } from "./UserRole";
import { UserStatus } from "./UserStatus";

export interface UserSchema extends BaseModelSchema {
  name: string;
  firstName: string;
  lastName: string;
  email: string;
  role?: UserRole;
  status?: UserStatus;
  password?: string;
  credentials?: OAuthCredentials;
  domain?: Domain;
  consumer?: Consumer;
  virtual?: boolean;
  wallets?: Wallet[];
}

export default class User extends BaseModel implements UserSchema {
  @IsOptional()
  name: string = undefined;

  @IsNotEmpty()
  firstName: string = undefined;

  @IsNotEmpty()
  lastName: string = undefined;

  @IsNotEmpty()
  @IsEmail()
  email: string = undefined;

  @IsOptional()
  @IsEnum(UserRole)
  role?: UserRole = undefined;

  @IsOptional()
  @IsEnum(UserStatus)
  status?: UserStatus = undefined;

  @IsOptional() 
  domain?: Domain = undefined;

  @IsOptional() 
  password?: string = undefined;

  consumer?: Consumer = undefined;
  wallets?: Wallet[] = undefined;
  credentials?: OAuthCredentials = undefined;
  virtual: boolean = undefined;

  constructor(data: Partial<UserSchema>) {
    super(data);

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
