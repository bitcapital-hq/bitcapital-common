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
const base_1 = require("../../base");
var DocumentType;
(function (DocumentType) {
    DocumentType["BRL_IDENTITY"] = "brl_identity";
    DocumentType["BRL_INDIVIDUAL_REG"] = "brl_individual_reg";
    DocumentType["BRL_ADDRESS_STATEMENT"] = "brl_address_statement";
})(DocumentType = exports.DocumentType || (exports.DocumentType = {}));
class Document extends base_1.BaseModel {
    constructor(data) {
        super(data);
        this.consumer = undefined;
        this.consumerId = undefined;
        this.type = undefined;
        this.number = undefined;
        this.front = undefined;
        this.back = undefined;
        this.selfie = undefined;
        this.verifiedAt = undefined;
        this.verifiedAt = data.verifiedAt instanceof Date ? data.verifiedAt : new Date(data.verifiedAt);
    }
}
__decorate([
    class_validator_1.IsUUID(),
    __metadata("design:type", String)
], Document.prototype, "consumerId", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsEnum(DocumentType),
    __metadata("design:type", String)
], Document.prototype, "type", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsNotEmpty(),
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
    class_validator_1.MaxDate(new Date(new Date().getTime() + 5 * 60000)) // Now + 5min for server time differences
    ,
    __metadata("design:type", Date)
], Document.prototype, "verifiedAt", void 0);
exports.default = Document;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jdW1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvbW9kZWxzL0NvbnN1bWVyL0RvY3VtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscURBQW9HO0FBQ3BHLHFDQUF3RDtBQUd4RCxJQUFZLFlBSVg7QUFKRCxXQUFZLFlBQVk7SUFDdEIsNkNBQTZCLENBQUE7SUFDN0IseURBQXlDLENBQUE7SUFDekMsK0RBQStDLENBQUE7QUFDakQsQ0FBQyxFQUpXLFlBQVksR0FBWixvQkFBWSxLQUFaLG9CQUFZLFFBSXZCO0FBYUQsY0FBOEIsU0FBUSxnQkFBUztJQTJCN0MsWUFBWSxJQUE2QjtRQUN2QyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUEzQmQsYUFBUSxHQUFjLFNBQVMsQ0FBQztRQUN0QixlQUFVLEdBQVcsU0FBUyxDQUFDO1FBSXpDLFNBQUksR0FBaUIsU0FBUyxDQUFDO1FBSS9CLFdBQU0sR0FBWSxTQUFTLENBQUM7UUFJNUIsVUFBSyxHQUFZLFNBQVMsQ0FBQztRQUczQixTQUFJLEdBQVksU0FBUyxDQUFDO1FBRzFCLFdBQU0sR0FBWSxTQUFTLENBQUM7UUFLNUIsZUFBVSxHQUFVLFNBQVMsQ0FBQztRQUk1QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLFlBQVksSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDbEcsQ0FBQztDQUNGO0FBN0JXO0lBQVQsd0JBQU0sRUFBRTs7NENBQWdDO0FBSXpDO0lBRkMsNEJBQVUsRUFBRTtJQUNaLHdCQUFNLENBQUMsWUFBWSxDQUFDOztzQ0FDVTtBQUkvQjtJQUZDLDRCQUFVLEVBQUU7SUFDWiw0QkFBVSxFQUFFOzt3Q0FDZTtBQUk1QjtJQUZDLDRCQUFVLEVBQUU7SUFDWiwwQkFBUSxFQUFFOzt1Q0FDZ0I7QUFHM0I7SUFGQyw0QkFBVSxFQUFFO0lBQ1osMEJBQVEsRUFBRTs7c0NBQ2U7QUFHMUI7SUFGQyw0QkFBVSxFQUFFO0lBQ1osMEJBQVEsRUFBRTs7d0NBQ2lCO0FBSzVCO0lBSEMsNEJBQVUsRUFBRTtJQUNaLHdCQUFNLEVBQUU7SUFDUix5QkFBTyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMseUNBQXlDOzs4QkFDakYsSUFBSTs0Q0FBYTtBQXpCaEMsMkJBK0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSXNCYXNlNjQsIElzRGF0ZSwgSXNFbnVtLCBJc05vdEVtcHR5LCBJc09wdGlvbmFsLCBJc1VVSUQsIE1heERhdGUgfSBmcm9tIFwiY2xhc3MtdmFsaWRhdG9yXCI7XG5pbXBvcnQgeyBCYXNlTW9kZWxTY2hlbWEsIEJhc2VNb2RlbCB9IGZyb20gXCIuLi8uLi9iYXNlXCI7XG5pbXBvcnQgQ29uc3VtZXIgZnJvbSBcIi4vQ29uc3VtZXJcIjtcblxuZXhwb3J0IGVudW0gRG9jdW1lbnRUeXBlIHtcbiAgQlJMX0lERU5USVRZID0gXCJicmxfaWRlbnRpdHlcIixcbiAgQlJMX0lORElWSURVQUxfUkVHID0gXCJicmxfaW5kaXZpZHVhbF9yZWdcIixcbiAgQlJMX0FERFJFU1NfU1RBVEVNRU5UID0gXCJicmxfYWRkcmVzc19zdGF0ZW1lbnRcIlxufVxuXG5leHBvcnQgaW50ZXJmYWNlIERvY3VtZW50U2NoZW1hIGV4dGVuZHMgQmFzZU1vZGVsU2NoZW1hIHtcbiAgY29uc3VtZXI/OiBDb25zdW1lcjtcbiAgY29uc3VtZXJJZD86IHN0cmluZztcbiAgdHlwZTogRG9jdW1lbnRUeXBlO1xuICBudW1iZXI/OiBzdHJpbmc7XG4gIGZyb250Pzogc3RyaW5nO1xuICBiYWNrPzogc3RyaW5nO1xuICBzZWxmaWU/OiBzdHJpbmc7XG4gIHZlcmlmaWVkQXQ/OiBEYXRlIHwgc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEb2N1bWVudCBleHRlbmRzIEJhc2VNb2RlbCBpbXBsZW1lbnRzIERvY3VtZW50U2NoZW1hIHtcbiAgY29uc3VtZXI/OiBDb25zdW1lciA9IHVuZGVmaW5lZDtcbiAgQElzVVVJRCgpIGNvbnN1bWVySWQ6IHN0cmluZyA9IHVuZGVmaW5lZDtcblxuICBASXNOb3RFbXB0eSgpXG4gIEBJc0VudW0oRG9jdW1lbnRUeXBlKVxuICB0eXBlOiBEb2N1bWVudFR5cGUgPSB1bmRlZmluZWQ7XG5cbiAgQElzT3B0aW9uYWwoKVxuICBASXNOb3RFbXB0eSgpXG4gIG51bWJlcj86IHN0cmluZyA9IHVuZGVmaW5lZDtcblxuICBASXNPcHRpb25hbCgpXG4gIEBJc0Jhc2U2NCgpXG4gIGZyb250Pzogc3RyaW5nID0gdW5kZWZpbmVkO1xuICBASXNPcHRpb25hbCgpXG4gIEBJc0Jhc2U2NCgpXG4gIGJhY2s/OiBzdHJpbmcgPSB1bmRlZmluZWQ7XG4gIEBJc09wdGlvbmFsKClcbiAgQElzQmFzZTY0KClcbiAgc2VsZmllPzogc3RyaW5nID0gdW5kZWZpbmVkO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgQElzRGF0ZSgpXG4gIEBNYXhEYXRlKG5ldyBEYXRlKG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgNSAqIDYwMDAwKSkgLy8gTm93ICsgNW1pbiBmb3Igc2VydmVyIHRpbWUgZGlmZmVyZW5jZXNcbiAgdmVyaWZpZWRBdD86IERhdGUgPSB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IoZGF0YTogUGFydGlhbDxEb2N1bWVudFNjaGVtYT4pIHtcbiAgICBzdXBlcihkYXRhKTtcbiAgICB0aGlzLnZlcmlmaWVkQXQgPSBkYXRhLnZlcmlmaWVkQXQgaW5zdGFuY2VvZiBEYXRlID8gZGF0YS52ZXJpZmllZEF0IDogbmV3IERhdGUoZGF0YS52ZXJpZmllZEF0KTtcbiAgfVxufVxuIl19