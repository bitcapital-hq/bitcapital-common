"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = require("class-validator");
const base_1 = require("../../../base");
const Consumer_1 = require("../Consumer");
const DocumentState_1 = require("./DocumentState");
const DocumentStatus_1 = require("./DocumentStatus");
const DocumentType_1 = require("./DocumentType");
exports.OperatorOnlyDocuments = [DocumentType_1.DocumentType.BRL_ADDRESS_STATEMENT, DocumentType_1.DocumentType.OTHER];
class Document extends base_1.BaseModel {
    constructor(data = {}) {
        super(data);
        this.consumer = undefined;
        this.type = undefined;
        this.status = undefined;
        this.number = undefined;
        this.front = undefined;
        this.back = undefined;
        this.selfie = undefined;
        this.expiresAt = undefined;
        this.states = undefined;
        Object.assign(this, data);
        this.expiresAt = data.verifiedAt && new Date(data.verifiedAt);
        this.consumer = data.consumer && new Consumer_1.Consumer(data.consumer);
        this.states = data.states && data.states.map(state => new DocumentState_1.DocumentState(state));
    }
}
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Consumer_1.Consumer)
], Document.prototype, "consumer", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsEnum(DocumentType_1.DocumentType),
    __metadata("design:type", String)
], Document.prototype, "type", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsEnum(DocumentStatus_1.DocumentStatus),
    __metadata("design:type", String)
], Document.prototype, "status", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], Document.prototype, "number", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsBase64(),
    __metadata("design:type", String)
], Document.prototype, "front", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsBase64(),
    __metadata("design:type", String)
], Document.prototype, "back", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsBase64(),
    __metadata("design:type", String)
], Document.prototype, "selfie", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsDate(),
    class_validator_1.MinDate(new Date()) // Don't allow expired documents
    ,
    __metadata("design:type", Date)
], Document.prototype, "expiresAt", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Array)
], Document.prototype, "states", void 0);
exports.Document = Document;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jdW1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9saWIvbW9kZWxzL0NvbnN1bWVyL0RvY3VtZW50L0RvY3VtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscURBQTRGO0FBQzVGLHdDQUEyRDtBQUMzRCwwQ0FBdUQ7QUFDdkQsbURBQXFFO0FBQ3JFLHFEQUFrRDtBQUNsRCxpREFBOEM7QUFjakMsUUFBQSxxQkFBcUIsR0FBRyxDQUFDLDJCQUFZLENBQUMscUJBQXFCLEVBQUUsMkJBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUU5RixNQUFhLFFBQVMsU0FBUSxnQkFBUztJQWdDckMsWUFBWSxPQUFnQyxFQUFFO1FBQzVDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQWhDQSxhQUFRLEdBQWMsU0FBUyxDQUFDO1FBSTlDLFNBQUksR0FBaUIsU0FBUyxDQUFDO1FBSS9CLFdBQU0sR0FBbUIsU0FBUyxDQUFDO1FBRXJCLFdBQU0sR0FBWSxTQUFTLENBQUM7UUFJMUMsVUFBSyxHQUFZLFNBQVMsQ0FBQztRQUkzQixTQUFJLEdBQVksU0FBUyxDQUFDO1FBSTFCLFdBQU0sR0FBWSxTQUFTLENBQUM7UUFLNUIsY0FBUyxHQUFVLFNBQVMsQ0FBQztRQUVmLFdBQU0sR0FBcUIsU0FBUyxDQUFDO1FBSWpELE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRTFCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksbUJBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSw2QkFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDbEYsQ0FBQztDQUNGO0FBdkNlO0lBQWIsNEJBQVUsRUFBRTs4QkFBWSxtQkFBUTswQ0FBYTtBQUk5QztJQUZDLDRCQUFVLEVBQUU7SUFDWix3QkFBTSxDQUFDLDJCQUFZLENBQUM7O3NDQUNVO0FBSS9CO0lBRkMsNEJBQVUsRUFBRTtJQUNaLHdCQUFNLENBQUMsK0JBQWMsQ0FBQzs7d0NBQ1k7QUFFckI7SUFBYiw0QkFBVSxFQUFFOzt3Q0FBNkI7QUFJMUM7SUFGQyw0QkFBVSxFQUFFO0lBQ1osMEJBQVEsRUFBRTs7dUNBQ2dCO0FBSTNCO0lBRkMsNEJBQVUsRUFBRTtJQUNaLDBCQUFRLEVBQUU7O3NDQUNlO0FBSTFCO0lBRkMsNEJBQVUsRUFBRTtJQUNaLDBCQUFRLEVBQUU7O3dDQUNpQjtBQUs1QjtJQUhDLDRCQUFVLEVBQUU7SUFDWix3QkFBTSxFQUFFO0lBQ1IseUJBQU8sQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsZ0NBQWdDOzs4QkFDekMsSUFBSTsyQ0FBYTtBQUVmO0lBQWIsNEJBQVUsRUFBRTs7d0NBQXNDO0FBOUJyRCw0QkF3Q0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJc0Jhc2U2NCwgSXNEYXRlLCBJc0VudW0sIElzTm90RW1wdHksIElzT3B0aW9uYWwsIE1pbkRhdGUgfSBmcm9tIFwiY2xhc3MtdmFsaWRhdG9yXCI7XG5pbXBvcnQgeyBCYXNlTW9kZWwsIEJhc2VNb2RlbFNjaGVtYSB9IGZyb20gXCIuLi8uLi8uLi9iYXNlXCI7XG5pbXBvcnQgeyBDb25zdW1lciwgQ29uc3VtZXJTY2hlbWEgfSBmcm9tIFwiLi4vQ29uc3VtZXJcIjtcbmltcG9ydCB7IERvY3VtZW50U3RhdGUsIERvY3VtZW50U3RhdGVTY2hlbWEgfSBmcm9tIFwiLi9Eb2N1bWVudFN0YXRlXCI7XG5pbXBvcnQgeyBEb2N1bWVudFN0YXR1cyB9IGZyb20gXCIuL0RvY3VtZW50U3RhdHVzXCI7XG5pbXBvcnQgeyBEb2N1bWVudFR5cGUgfSBmcm9tIFwiLi9Eb2N1bWVudFR5cGVcIjtcblxuZXhwb3J0IGludGVyZmFjZSBEb2N1bWVudFNjaGVtYSBleHRlbmRzIEJhc2VNb2RlbFNjaGVtYSB7XG4gIGNvbnN1bWVyPzogQ29uc3VtZXJTY2hlbWE7XG4gIHN0YXR1cz86IERvY3VtZW50U3RhdHVzO1xuICB0eXBlOiBEb2N1bWVudFR5cGU7XG4gIG51bWJlcj86IHN0cmluZztcbiAgZnJvbnQ/OiBzdHJpbmc7XG4gIGJhY2s/OiBzdHJpbmc7XG4gIHNlbGZpZT86IHN0cmluZztcbiAgdmVyaWZpZWRBdD86IERhdGUgfCBzdHJpbmc7XG4gIHN0YXRlcz86IERvY3VtZW50U3RhdGVTY2hlbWFbXTtcbn1cblxuZXhwb3J0IGNvbnN0IE9wZXJhdG9yT25seURvY3VtZW50cyA9IFtEb2N1bWVudFR5cGUuQlJMX0FERFJFU1NfU1RBVEVNRU5ULCBEb2N1bWVudFR5cGUuT1RIRVJdO1xuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnQgZXh0ZW5kcyBCYXNlTW9kZWwgaW1wbGVtZW50cyBEb2N1bWVudFNjaGVtYSB7XG4gIEBJc09wdGlvbmFsKCkgY29uc3VtZXI/OiBDb25zdW1lciA9IHVuZGVmaW5lZDtcblxuICBASXNOb3RFbXB0eSgpXG4gIEBJc0VudW0oRG9jdW1lbnRUeXBlKVxuICB0eXBlOiBEb2N1bWVudFR5cGUgPSB1bmRlZmluZWQ7XG5cbiAgQElzTm90RW1wdHkoKVxuICBASXNFbnVtKERvY3VtZW50U3RhdHVzKVxuICBzdGF0dXM6IERvY3VtZW50U3RhdHVzID0gdW5kZWZpbmVkO1xuXG4gIEBJc09wdGlvbmFsKCkgbnVtYmVyPzogc3RyaW5nID0gdW5kZWZpbmVkO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgQElzQmFzZTY0KClcbiAgZnJvbnQ/OiBzdHJpbmcgPSB1bmRlZmluZWQ7XG5cbiAgQElzT3B0aW9uYWwoKVxuICBASXNCYXNlNjQoKVxuICBiYWNrPzogc3RyaW5nID0gdW5kZWZpbmVkO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgQElzQmFzZTY0KClcbiAgc2VsZmllPzogc3RyaW5nID0gdW5kZWZpbmVkO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgQElzRGF0ZSgpXG4gIEBNaW5EYXRlKG5ldyBEYXRlKCkpIC8vIERvbid0IGFsbG93IGV4cGlyZWQgZG9jdW1lbnRzXG4gIGV4cGlyZXNBdD86IERhdGUgPSB1bmRlZmluZWQ7XG5cbiAgQElzT3B0aW9uYWwoKSBzdGF0ZXM/OiBEb2N1bWVudFN0YXRlW10gPSB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IoZGF0YTogUGFydGlhbDxEb2N1bWVudFNjaGVtYT4gPSB7fSkge1xuICAgIHN1cGVyKGRhdGEpO1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XG5cbiAgICB0aGlzLmV4cGlyZXNBdCA9IGRhdGEudmVyaWZpZWRBdCAmJiBuZXcgRGF0ZShkYXRhLnZlcmlmaWVkQXQpO1xuICAgIHRoaXMuY29uc3VtZXIgPSBkYXRhLmNvbnN1bWVyICYmIG5ldyBDb25zdW1lcihkYXRhLmNvbnN1bWVyKTtcbiAgICB0aGlzLnN0YXRlcyA9IGRhdGEuc3RhdGVzICYmIGRhdGEuc3RhdGVzLm1hcChzdGF0ZSA9PiBuZXcgRG9jdW1lbnRTdGF0ZShzdGF0ZSkpO1xuICB9XG59XG4iXX0=