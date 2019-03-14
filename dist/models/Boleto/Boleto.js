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
const base_1 = require("../../base");
const class_validator_1 = require("class-validator");
class Boleto extends base_1.BaseModel {
    constructor(data) {
        super(data);
        this.documentNumber = undefined;
        this.expiresAt = undefined;
        this.amount = undefined;
        this.beneficiaryName = undefined;
        this.beneficiaryCode = undefined;
        this.beneficiaryDocument = undefined;
        this.bank = undefined;
        this.agency = undefined;
        this.agreementNumber = undefined;
        this.agreementNumberDigit = undefined;
        this.barCode = undefined;
        this.digitableLine = undefined;
        this.isRegistered = false;
        Object.assign(this, data);
        this.expiresAt = data.expiresAt && new Date(data.expiresAt);
    }
}
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], Boleto.prototype, "documentNumber", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Date)
], Boleto.prototype, "expiresAt", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], Boleto.prototype, "amount", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], Boleto.prototype, "beneficiaryName", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], Boleto.prototype, "beneficiaryCode", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], Boleto.prototype, "beneficiaryDocument", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], Boleto.prototype, "bank", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], Boleto.prototype, "agency", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], Boleto.prototype, "agreementNumber", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], Boleto.prototype, "agreementNumberDigit", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], Boleto.prototype, "barCode", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], Boleto.prototype, "digitableLine", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Boolean)
], Boleto.prototype, "isRegistered", void 0);
exports.Boleto = Boleto;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm9sZXRvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL21vZGVscy9Cb2xldG8vQm9sZXRvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscUNBQXdEO0FBQ3hELHFEQUF5RDtBQWtCekQsTUFBYSxNQUFPLFNBQVEsZ0JBQVM7SUFlbkMsWUFBWSxJQUEyQjtRQUNyQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFmQSxtQkFBYyxHQUFZLFNBQVMsQ0FBQztRQUNwQyxjQUFTLEdBQVMsU0FBUyxDQUFDO1FBQzVCLFdBQU0sR0FBVyxTQUFTLENBQUM7UUFDM0Isb0JBQWUsR0FBWSxTQUFTLENBQUM7UUFDckMsb0JBQWUsR0FBWSxTQUFTLENBQUM7UUFDckMsd0JBQW1CLEdBQVksU0FBUyxDQUFDO1FBQ3pDLFNBQUksR0FBWSxTQUFTLENBQUM7UUFDMUIsV0FBTSxHQUFZLFNBQVMsQ0FBQztRQUM1QixvQkFBZSxHQUFZLFNBQVMsQ0FBQztRQUNyQyx5QkFBb0IsR0FBWSxTQUFTLENBQUM7UUFDMUMsWUFBTyxHQUFZLFNBQVMsQ0FBQztRQUM3QixrQkFBYSxHQUFZLFNBQVMsQ0FBQztRQUNuQyxpQkFBWSxHQUFhLEtBQUssQ0FBQztRQUszQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUUxQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzlELENBQUM7Q0FDRjtBQXJCZTtJQUFiLDRCQUFVLEVBQUU7OzhDQUFxQztBQUNwQztJQUFiLDRCQUFVLEVBQUU7OEJBQVksSUFBSTt5Q0FBYTtBQUM1QjtJQUFiLDRCQUFVLEVBQUU7O3NDQUE0QjtBQUMzQjtJQUFiLDRCQUFVLEVBQUU7OytDQUFzQztBQUNyQztJQUFiLDRCQUFVLEVBQUU7OytDQUFzQztBQUNyQztJQUFiLDRCQUFVLEVBQUU7O21EQUEwQztBQUN6QztJQUFiLDRCQUFVLEVBQUU7O29DQUEyQjtBQUMxQjtJQUFiLDRCQUFVLEVBQUU7O3NDQUE2QjtBQUM1QjtJQUFiLDRCQUFVLEVBQUU7OytDQUFzQztBQUNyQztJQUFiLDRCQUFVLEVBQUU7O29EQUEyQztBQUMxQztJQUFiLDRCQUFVLEVBQUU7O3VDQUE4QjtBQUM3QjtJQUFiLDRCQUFVLEVBQUU7OzZDQUFvQztBQUNuQztJQUFiLDRCQUFVLEVBQUU7OzRDQUFnQztBQWIvQyx3QkFzQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlTW9kZWwsIEJhc2VNb2RlbFNjaGVtYSB9IGZyb20gXCIuLi8uLi9iYXNlXCI7XHJcbmltcG9ydCB7IElzT3B0aW9uYWwsIElzTm90RW1wdHkgfSBmcm9tIFwiY2xhc3MtdmFsaWRhdG9yXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJvbGV0b1NjaGVtYSBleHRlbmRzIEJhc2VNb2RlbFNjaGVtYSB7XHJcbiAgZG9jdW1lbnROdW1iZXI/OiBzdHJpbmc7XHJcbiAgZXhwaXJlc0F0OiBEYXRlIHwgc3RyaW5nO1xyXG4gIGFtb3VudDogc3RyaW5nO1xyXG4gIGJlbmVmaWNpYXJ5TmFtZT86IHN0cmluZztcclxuICBiZW5lZmljaWFyeUNvZGU/OiBzdHJpbmc7XHJcbiAgYmVuZWZpY2lhcnlEb2N1bWVudD86IHN0cmluZztcclxuICBiYW5rPzogc3RyaW5nO1xyXG4gIGFnZW5jeT86IHN0cmluZztcclxuICBhZ3JlZW1lbnROdW1iZXI/OiBzdHJpbmc7XHJcbiAgYWdyZWVtZW50TnVtYmVyRGlnaXQ/OiBzdHJpbmc7XHJcbiAgYmFyQ29kZT86IHN0cmluZztcclxuICBkaWdpdGFibGVMaW5lPzogc3RyaW5nO1xyXG4gIGlzUmVnaXN0ZXJlZD86IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCb2xldG8gZXh0ZW5kcyBCYXNlTW9kZWwgaW1wbGVtZW50cyBCb2xldG9TY2hlbWEge1xyXG4gIEBJc09wdGlvbmFsKCkgZG9jdW1lbnROdW1iZXI/OiBzdHJpbmcgPSB1bmRlZmluZWQ7XHJcbiAgQElzTm90RW1wdHkoKSBleHBpcmVzQXQ6IERhdGUgPSB1bmRlZmluZWQ7XHJcbiAgQElzTm90RW1wdHkoKSBhbW91bnQ6IHN0cmluZyA9IHVuZGVmaW5lZDtcclxuICBASXNPcHRpb25hbCgpIGJlbmVmaWNpYXJ5TmFtZT86IHN0cmluZyA9IHVuZGVmaW5lZDtcclxuICBASXNPcHRpb25hbCgpIGJlbmVmaWNpYXJ5Q29kZT86IHN0cmluZyA9IHVuZGVmaW5lZDtcclxuICBASXNPcHRpb25hbCgpIGJlbmVmaWNpYXJ5RG9jdW1lbnQ/OiBzdHJpbmcgPSB1bmRlZmluZWQ7XHJcbiAgQElzT3B0aW9uYWwoKSBiYW5rPzogc3RyaW5nID0gdW5kZWZpbmVkO1xyXG4gIEBJc09wdGlvbmFsKCkgYWdlbmN5Pzogc3RyaW5nID0gdW5kZWZpbmVkO1xyXG4gIEBJc09wdGlvbmFsKCkgYWdyZWVtZW50TnVtYmVyPzogc3RyaW5nID0gdW5kZWZpbmVkO1xyXG4gIEBJc09wdGlvbmFsKCkgYWdyZWVtZW50TnVtYmVyRGlnaXQ/OiBzdHJpbmcgPSB1bmRlZmluZWQ7XHJcbiAgQElzT3B0aW9uYWwoKSBiYXJDb2RlPzogc3RyaW5nID0gdW5kZWZpbmVkO1xyXG4gIEBJc09wdGlvbmFsKCkgZGlnaXRhYmxlTGluZT86IHN0cmluZyA9IHVuZGVmaW5lZDtcclxuICBASXNPcHRpb25hbCgpIGlzUmVnaXN0ZXJlZD86IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoZGF0YTogUGFydGlhbDxCb2xldG9TY2hlbWE+KSB7XHJcbiAgICBzdXBlcihkYXRhKTtcclxuXHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xyXG5cclxuICAgIHRoaXMuZXhwaXJlc0F0ID0gZGF0YS5leHBpcmVzQXQgJiYgbmV3IERhdGUoZGF0YS5leHBpcmVzQXQpO1xyXG4gIH1cclxufVxyXG4iXX0=