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
const DocumentStatus_1 = require("./DocumentStatus");
const DocumentType_1 = require("./DocumentType");
class Document extends base_1.BaseModel {
    constructor(data = {}) {
        super(data);
        this.consumer = undefined;
        this.consumerId = undefined;
        this.type = undefined;
        this.status = undefined;
        this.number = undefined;
        this.front = undefined;
        this.back = undefined;
        this.selfie = undefined;
        this.expiresAt = undefined;
        this.states = undefined;
        this.expiresAt = data.verifiedAt && new Date(data.verifiedAt);
        this.consumer = data.consumer && new Consumer_1.Consumer(data.consumer);
    }
}
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Consumer_1.Consumer)
], Document.prototype, "consumer", void 0);
__decorate([
    class_validator_1.IsUUID(), class_validator_1.IsOptional(),
    __metadata("design:type", String)
], Document.prototype, "consumerId", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jdW1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9saWIvbW9kZWxzL0NvbnN1bWVyL0RvY3VtZW50L0RvY3VtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscURBQW9HO0FBQ3BHLHdDQUEyRDtBQUMzRCwwQ0FBdUQ7QUFFdkQscURBQWtEO0FBQ2xELGlEQUE4QztBQWU5QyxNQUFhLFFBQVMsU0FBUSxnQkFBUztJQWtDckMsWUFBWSxPQUFnQyxFQUFFO1FBQzVDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQWxDQSxhQUFRLEdBQWMsU0FBUyxDQUFDO1FBQ3RCLGVBQVUsR0FBWSxTQUFTLENBQUM7UUFJeEQsU0FBSSxHQUFpQixTQUFTLENBQUM7UUFJL0IsV0FBTSxHQUFtQixTQUFTLENBQUM7UUFFckIsV0FBTSxHQUFZLFNBQVMsQ0FBQztRQUkxQyxVQUFLLEdBQVksU0FBUyxDQUFDO1FBSTNCLFNBQUksR0FBWSxTQUFTLENBQUM7UUFJMUIsV0FBTSxHQUFZLFNBQVMsQ0FBQztRQUs1QixjQUFTLEdBQVUsU0FBUyxDQUFDO1FBRzdCLFdBQU0sR0FBcUIsU0FBUyxDQUFDO1FBSW5DLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksbUJBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDL0QsQ0FBQztDQUNGO0FBdENlO0lBQWIsNEJBQVUsRUFBRTs4QkFBWSxtQkFBUTswQ0FBYTtBQUN0QjtJQUF2Qix3QkFBTSxFQUFFLEVBQUUsNEJBQVUsRUFBRTs7NENBQWlDO0FBSXhEO0lBRkMsNEJBQVUsRUFBRTtJQUNaLHdCQUFNLENBQUMsMkJBQVksQ0FBQzs7c0NBQ1U7QUFJL0I7SUFGQyw0QkFBVSxFQUFFO0lBQ1osd0JBQU0sQ0FBQywrQkFBYyxDQUFDOzt3Q0FDWTtBQUVyQjtJQUFiLDRCQUFVLEVBQUU7O3dDQUE2QjtBQUkxQztJQUZDLDRCQUFVLEVBQUU7SUFDWiwwQkFBUSxFQUFFOzt1Q0FDZ0I7QUFJM0I7SUFGQyw0QkFBVSxFQUFFO0lBQ1osMEJBQVEsRUFBRTs7c0NBQ2U7QUFJMUI7SUFGQyw0QkFBVSxFQUFFO0lBQ1osMEJBQVEsRUFBRTs7d0NBQ2lCO0FBSzVCO0lBSEMsNEJBQVUsRUFBRTtJQUNaLHdCQUFNLEVBQUU7SUFDUix5QkFBTyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxnQ0FBZ0M7OzhCQUN6QyxJQUFJOzJDQUFhO0FBRzdCO0lBREMsNEJBQVUsRUFBRTs7d0NBQ3dCO0FBaEN2Qyw0QkF1Q0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJc0Jhc2U2NCwgSXNEYXRlLCBJc0VudW0sIElzTm90RW1wdHksIElzT3B0aW9uYWwsIElzVVVJRCwgTWluRGF0ZSB9IGZyb20gXCJjbGFzcy12YWxpZGF0b3JcIjtcbmltcG9ydCB7IEJhc2VNb2RlbCwgQmFzZU1vZGVsU2NoZW1hIH0gZnJvbSBcIi4uLy4uLy4uL2Jhc2VcIjtcbmltcG9ydCB7IENvbnN1bWVyLCBDb25zdW1lclNjaGVtYSB9IGZyb20gXCIuLi9Db25zdW1lclwiO1xuaW1wb3J0IHsgRG9jdW1lbnRTdGF0ZSB9IGZyb20gXCIuL0RvY3VtZW50U3RhdGVcIjtcbmltcG9ydCB7IERvY3VtZW50U3RhdHVzIH0gZnJvbSBcIi4vRG9jdW1lbnRTdGF0dXNcIjtcbmltcG9ydCB7IERvY3VtZW50VHlwZSB9IGZyb20gXCIuL0RvY3VtZW50VHlwZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIERvY3VtZW50U2NoZW1hIGV4dGVuZHMgQmFzZU1vZGVsU2NoZW1hIHtcbiAgY29uc3VtZXI/OiBDb25zdW1lclNjaGVtYTtcbiAgY29uc3VtZXJJZD86IHN0cmluZztcbiAgc3RhdHVzPzogRG9jdW1lbnRTdGF0dXM7XG4gIHR5cGU6IERvY3VtZW50VHlwZTtcbiAgbnVtYmVyPzogc3RyaW5nO1xuICBmcm9udD86IHN0cmluZztcbiAgYmFjaz86IHN0cmluZztcbiAgc2VsZmllPzogc3RyaW5nO1xuICB2ZXJpZmllZEF0PzogRGF0ZSB8IHN0cmluZztcbiAgc3RhdGVzPzogRG9jdW1lbnRTdGF0ZVtdO1xufVxuXG5leHBvcnQgY2xhc3MgRG9jdW1lbnQgZXh0ZW5kcyBCYXNlTW9kZWwgaW1wbGVtZW50cyBEb2N1bWVudFNjaGVtYSB7XG4gIEBJc09wdGlvbmFsKCkgY29uc3VtZXI/OiBDb25zdW1lciA9IHVuZGVmaW5lZDtcbiAgQElzVVVJRCgpIEBJc09wdGlvbmFsKCkgY29uc3VtZXJJZD86IHN0cmluZyA9IHVuZGVmaW5lZDtcblxuICBASXNOb3RFbXB0eSgpXG4gIEBJc0VudW0oRG9jdW1lbnRUeXBlKVxuICB0eXBlOiBEb2N1bWVudFR5cGUgPSB1bmRlZmluZWQ7XG5cbiAgQElzTm90RW1wdHkoKVxuICBASXNFbnVtKERvY3VtZW50U3RhdHVzKVxuICBzdGF0dXM6IERvY3VtZW50U3RhdHVzID0gdW5kZWZpbmVkO1xuXG4gIEBJc09wdGlvbmFsKCkgbnVtYmVyPzogc3RyaW5nID0gdW5kZWZpbmVkO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgQElzQmFzZTY0KClcbiAgZnJvbnQ/OiBzdHJpbmcgPSB1bmRlZmluZWQ7XG5cbiAgQElzT3B0aW9uYWwoKVxuICBASXNCYXNlNjQoKVxuICBiYWNrPzogc3RyaW5nID0gdW5kZWZpbmVkO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgQElzQmFzZTY0KClcbiAgc2VsZmllPzogc3RyaW5nID0gdW5kZWZpbmVkO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgQElzRGF0ZSgpXG4gIEBNaW5EYXRlKG5ldyBEYXRlKCkpIC8vIERvbid0IGFsbG93IGV4cGlyZWQgZG9jdW1lbnRzXG4gIGV4cGlyZXNBdD86IERhdGUgPSB1bmRlZmluZWQ7XG5cbiAgQElzT3B0aW9uYWwoKVxuICBzdGF0ZXM/OiBEb2N1bWVudFN0YXRlW10gPSB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IoZGF0YTogUGFydGlhbDxEb2N1bWVudFNjaGVtYT4gPSB7fSkge1xuICAgIHN1cGVyKGRhdGEpO1xuICAgIHRoaXMuZXhwaXJlc0F0ID0gZGF0YS52ZXJpZmllZEF0ICYmIG5ldyBEYXRlKGRhdGEudmVyaWZpZWRBdCk7XG4gICAgdGhpcy5jb25zdW1lciA9IGRhdGEuY29uc3VtZXIgJiYgbmV3IENvbnN1bWVyKGRhdGEuY29uc3VtZXIpO1xuICB9XG59XG4iXX0=