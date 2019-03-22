import { BaseModel, BaseModelSchema } from "../../../base";
import { Consumer, ConsumerSchema } from "../Consumer";
import { DocumentState, DocumentStateSchema } from "./DocumentState";
import { DocumentStatus } from "./DocumentStatus";
import { DocumentType } from "./DocumentType";
export interface DocumentSchema extends BaseModelSchema {
    consumer?: ConsumerSchema;
    status?: DocumentStatus;
    type: DocumentType;
    number?: string;
    front?: string;
    back?: string;
    selfie?: string;
    verifiedAt?: Date | string;
    states?: DocumentStateSchema[];
}
export declare const OperatorOnlyDocuments: DocumentType[];
export declare class Document extends BaseModel implements DocumentSchema {
    consumer?: Consumer;
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
