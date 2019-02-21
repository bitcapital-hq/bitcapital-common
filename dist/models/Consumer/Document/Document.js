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
        Object.assign(this, data);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jdW1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9saWIvbW9kZWxzL0NvbnN1bWVyL0RvY3VtZW50L0RvY3VtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscURBQW9HO0FBQ3BHLHdDQUEyRDtBQUMzRCwwQ0FBdUQ7QUFFdkQscURBQWtEO0FBQ2xELGlEQUE4QztBQWU5QyxNQUFhLFFBQVMsU0FBUSxnQkFBUztJQWtDckMsWUFBWSxPQUFnQyxFQUFFO1FBQzVDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQWxDQSxhQUFRLEdBQWMsU0FBUyxDQUFDO1FBQ3RCLGVBQVUsR0FBWSxTQUFTLENBQUM7UUFJeEQsU0FBSSxHQUFpQixTQUFTLENBQUM7UUFJL0IsV0FBTSxHQUFtQixTQUFTLENBQUM7UUFFckIsV0FBTSxHQUFZLFNBQVMsQ0FBQztRQUkxQyxVQUFLLEdBQVksU0FBUyxDQUFDO1FBSTNCLFNBQUksR0FBWSxTQUFTLENBQUM7UUFJMUIsV0FBTSxHQUFZLFNBQVMsQ0FBQztRQUs1QixjQUFTLEdBQVUsU0FBUyxDQUFDO1FBRzdCLFdBQU0sR0FBcUIsU0FBUyxDQUFDO1FBSW5DLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksbUJBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDL0QsQ0FBQztDQUNGO0FBdkNlO0lBQWIsNEJBQVUsRUFBRTs4QkFBWSxtQkFBUTswQ0FBYTtBQUN0QjtJQUF2Qix3QkFBTSxFQUFFLEVBQUUsNEJBQVUsRUFBRTs7NENBQWlDO0FBSXhEO0lBRkMsNEJBQVUsRUFBRTtJQUNaLHdCQUFNLENBQUMsMkJBQVksQ0FBQzs7c0NBQ1U7QUFJL0I7SUFGQyw0QkFBVSxFQUFFO0lBQ1osd0JBQU0sQ0FBQywrQkFBYyxDQUFDOzt3Q0FDWTtBQUVyQjtJQUFiLDRCQUFVLEVBQUU7O3dDQUE2QjtBQUkxQztJQUZDLDRCQUFVLEVBQUU7SUFDWiwwQkFBUSxFQUFFOzt1Q0FDZ0I7QUFJM0I7SUFGQyw0QkFBVSxFQUFFO0lBQ1osMEJBQVEsRUFBRTs7c0NBQ2U7QUFJMUI7SUFGQyw0QkFBVSxFQUFFO0lBQ1osMEJBQVEsRUFBRTs7d0NBQ2lCO0FBSzVCO0lBSEMsNEJBQVUsRUFBRTtJQUNaLHdCQUFNLEVBQUU7SUFDUix5QkFBTyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxnQ0FBZ0M7OzhCQUN6QyxJQUFJOzJDQUFhO0FBRzdCO0lBREMsNEJBQVUsRUFBRTs7d0NBQ3dCO0FBaEN2Qyw0QkF3Q0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJc0Jhc2U2NCwgSXNEYXRlLCBJc0VudW0sIElzTm90RW1wdHksIElzT3B0aW9uYWwsIElzVVVJRCwgTWluRGF0ZSB9IGZyb20gXCJjbGFzcy12YWxpZGF0b3JcIjtcclxuaW1wb3J0IHsgQmFzZU1vZGVsLCBCYXNlTW9kZWxTY2hlbWEgfSBmcm9tIFwiLi4vLi4vLi4vYmFzZVwiO1xyXG5pbXBvcnQgeyBDb25zdW1lciwgQ29uc3VtZXJTY2hlbWEgfSBmcm9tIFwiLi4vQ29uc3VtZXJcIjtcclxuaW1wb3J0IHsgRG9jdW1lbnRTdGF0ZSwgRG9jdW1lbnRTdGF0ZVNjaGVtYSB9IGZyb20gXCIuL0RvY3VtZW50U3RhdGVcIjtcclxuaW1wb3J0IHsgRG9jdW1lbnRTdGF0dXMgfSBmcm9tIFwiLi9Eb2N1bWVudFN0YXR1c1wiO1xyXG5pbXBvcnQgeyBEb2N1bWVudFR5cGUgfSBmcm9tIFwiLi9Eb2N1bWVudFR5cGVcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRG9jdW1lbnRTY2hlbWEgZXh0ZW5kcyBCYXNlTW9kZWxTY2hlbWEge1xyXG4gIGNvbnN1bWVyPzogQ29uc3VtZXJTY2hlbWE7XHJcbiAgY29uc3VtZXJJZD86IHN0cmluZztcclxuICBzdGF0dXM/OiBEb2N1bWVudFN0YXR1cztcclxuICB0eXBlOiBEb2N1bWVudFR5cGU7XHJcbiAgbnVtYmVyPzogc3RyaW5nO1xyXG4gIGZyb250Pzogc3RyaW5nO1xyXG4gIGJhY2s/OiBzdHJpbmc7XHJcbiAgc2VsZmllPzogc3RyaW5nO1xyXG4gIHZlcmlmaWVkQXQ/OiBEYXRlIHwgc3RyaW5nO1xyXG4gIHN0YXRlcz86IERvY3VtZW50U3RhdGVTY2hlbWFbXTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERvY3VtZW50IGV4dGVuZHMgQmFzZU1vZGVsIGltcGxlbWVudHMgRG9jdW1lbnRTY2hlbWEge1xyXG4gIEBJc09wdGlvbmFsKCkgY29uc3VtZXI/OiBDb25zdW1lciA9IHVuZGVmaW5lZDtcclxuICBASXNVVUlEKCkgQElzT3B0aW9uYWwoKSBjb25zdW1lcklkPzogc3RyaW5nID0gdW5kZWZpbmVkO1xyXG5cclxuICBASXNOb3RFbXB0eSgpXHJcbiAgQElzRW51bShEb2N1bWVudFR5cGUpXHJcbiAgdHlwZTogRG9jdW1lbnRUeXBlID0gdW5kZWZpbmVkO1xyXG5cclxuICBASXNOb3RFbXB0eSgpXHJcbiAgQElzRW51bShEb2N1bWVudFN0YXR1cylcclxuICBzdGF0dXM6IERvY3VtZW50U3RhdHVzID0gdW5kZWZpbmVkO1xyXG5cclxuICBASXNPcHRpb25hbCgpIG51bWJlcj86IHN0cmluZyA9IHVuZGVmaW5lZDtcclxuXHJcbiAgQElzT3B0aW9uYWwoKVxyXG4gIEBJc0Jhc2U2NCgpXHJcbiAgZnJvbnQ/OiBzdHJpbmcgPSB1bmRlZmluZWQ7XHJcblxyXG4gIEBJc09wdGlvbmFsKClcclxuICBASXNCYXNlNjQoKVxyXG4gIGJhY2s/OiBzdHJpbmcgPSB1bmRlZmluZWQ7XHJcblxyXG4gIEBJc09wdGlvbmFsKClcclxuICBASXNCYXNlNjQoKVxyXG4gIHNlbGZpZT86IHN0cmluZyA9IHVuZGVmaW5lZDtcclxuXHJcbiAgQElzT3B0aW9uYWwoKVxyXG4gIEBJc0RhdGUoKVxyXG4gIEBNaW5EYXRlKG5ldyBEYXRlKCkpIC8vIERvbid0IGFsbG93IGV4cGlyZWQgZG9jdW1lbnRzXHJcbiAgZXhwaXJlc0F0PzogRGF0ZSA9IHVuZGVmaW5lZDtcclxuXHJcbiAgQElzT3B0aW9uYWwoKVxyXG4gIHN0YXRlcz86IERvY3VtZW50U3RhdGVbXSA9IHVuZGVmaW5lZDtcclxuXHJcbiAgY29uc3RydWN0b3IoZGF0YTogUGFydGlhbDxEb2N1bWVudFNjaGVtYT4gPSB7fSkge1xyXG4gICAgc3VwZXIoZGF0YSk7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xyXG4gICAgdGhpcy5leHBpcmVzQXQgPSBkYXRhLnZlcmlmaWVkQXQgJiYgbmV3IERhdGUoZGF0YS52ZXJpZmllZEF0KTtcclxuICAgIHRoaXMuY29uc3VtZXIgPSBkYXRhLmNvbnN1bWVyICYmIG5ldyBDb25zdW1lcihkYXRhLmNvbnN1bWVyKTtcclxuICB9XHJcbn1cclxuIl19