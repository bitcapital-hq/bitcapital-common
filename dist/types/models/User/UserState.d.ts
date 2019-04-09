import { BaseModel, BaseModelSchema } from "../../base";
import { UserStatus } from "./UserStatus";
import { User, UserSchema } from "./User";
export interface UserStateSchema extends BaseModelSchema {
    status: UserStatus;
    user?: UserSchema;
}
export declare class UserState extends BaseModel implements UserStateSchema {
    status: UserStatus;
    user?: User;
    consumerId?: string;
    constructor(data: Partial<UserStateSchema>);
}
