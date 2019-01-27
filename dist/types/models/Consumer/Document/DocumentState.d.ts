import { BaseModel } from "../../../base";
import { Document } from "../Document";
import { DocumentStatus } from "./DocumentStatus";
import { DocumentSchema } from "./Document";
export interface DocumentStateSchema {
    document: DocumentSchema;
    status: DocumentStatus;
    additionalData?: any;
}
export declare class DocumentState extends BaseModel implements DocumentStateSchema {
    document: Document;
    status: DocumentStatus;
    additionalData?: any;
    constructor(data?: Partial<DocumentStateSchema>);
}
