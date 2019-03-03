import { BaseModel, BaseModelSchema } from "../../base";
import { IsEnum } from "class-validator";
import { UserStatus } from "./UserStatus";
import { User, UserSchema } from "./User";

export interface UserStateSchema extends BaseModelSchema {
  status: UserStatus;
  user?: UserSchema;
}

export class UserState extends BaseModel implements UserStateSchema {
  @IsEnum(UserStatus) status: UserStatus = undefined;

  user?: User = undefined;
  consumerId?: string = undefined;

  constructor(data: Partial<UserStateSchema>) {
    super(data);
    Object.assign(this, data);
    this.user = data.user && new User(data.user);
  }
}
