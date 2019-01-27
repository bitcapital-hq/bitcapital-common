import { BaseModel, BaseModelSchema } from "../../../base";
import { Consumer, ConsumerSchema } from "../Consumer";
import { DocumentState } from "./DocumentState";
import { DocumentStatus } from "./DocumentStatus";
import { DocumentType } from "./DocumentType";
export interface DocumentSchema extends BaseModelSchema {
    consumer?: ConsumerSchema;
    consumerId?: string;
    status?: DocumentStatus;
    type: DocumentType;
    number?: string;
    front?: string;
    back?: string;
    selfie?: string;
    verifiedAt?: Date | string;
    states?: DocumentState[];
}
export declare class Document extends BaseModel implements DocumentSchema {
    consumer?: Consumer;
    consumerId?: string;
    type: DocumentType;
    status: DocumentStatus;
    number?: string;
    front?: string;
    back?: string;
    selfie?: string;
    expiresAt?: Date;
    states?: DocumentState[];
    constructor(data?: Partial<DocumentSchema>);
}
