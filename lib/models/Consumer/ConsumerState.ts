import { BaseModel, BaseModelSchema } from "../../base";
import { Consumer, ConsumerSchema } from "./Consumer";
import { ConsumerStatus } from "./ConsumerStatus";
import { IsEnum } from "class-validator";

export interface ConsumerStateSchema extends BaseModelSchema {
  status: ConsumerStatus;
  consumer?: ConsumerSchema;
  consumerId?: string;
}

export class ConsumerState extends BaseModel implements ConsumerStateSchema {
  @IsEnum(ConsumerStatus)
  status: ConsumerStatus = undefined;
  
  consumer?: Consumer = undefined;
  consumerId?: string = undefined;

  constructor(data: Partial<ConsumerStateSchema>) {
    super(data);
    Object.assign(this, data);
  }
}
