import { BaseModel, BaseModelSchema } from "../../base";
import { Consumer, ConsumerSchema } from "./Consumer";
import { ConsumerStatus } from "./ConsumerStatus";
export interface ConsumerStateSchema extends BaseModelSchema {
    status: ConsumerStatus;
    consumer?: ConsumerSchema;
}
export declare class ConsumerState extends BaseModel implements ConsumerStateSchema {
    status: ConsumerStatus;
    consumer?: Consumer;
    consumerId?: string;
    constructor(data: Partial<ConsumerStateSchema>);
}
