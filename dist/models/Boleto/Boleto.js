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
const class_validator_1 = require("../../../node_modules/class-validator");
class Boleto extends base_1.BaseModel {
    constructor(data) {
        super(data);
        this.conductorId = undefined;
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
        this.conductorNumber = undefined;
        this.conductorNumberDigit = undefined;
        this.barCode = undefined;
        this.digitableLine = undefined;
        this.isRegistered = false;
        Object.assign(this, data);
    }
}
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Number)
], Boleto.prototype, "conductorId", void 0);
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
    __metadata("design:type", Number)
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
], Boleto.prototype, "conductorNumber", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], Boleto.prototype, "conductorNumberDigit", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm9sZXRvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL21vZGVscy9Cb2xldG8vQm9sZXRvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscUNBQXdEO0FBQ3hELDJFQUErRTtBQXFCL0UsTUFBYSxNQUFPLFNBQVEsZ0JBQVM7SUFrQm5DLFlBQVksSUFBMkI7UUFDckMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBbEJBLGdCQUFXLEdBQVksU0FBUyxDQUFDO1FBQ2pDLG1CQUFjLEdBQVksU0FBUyxDQUFDO1FBQ3BDLGNBQVMsR0FBUyxTQUFTLENBQUM7UUFDNUIsV0FBTSxHQUFXLFNBQVMsQ0FBQztRQUMzQixvQkFBZSxHQUFZLFNBQVMsQ0FBQztRQUNyQyxvQkFBZSxHQUFZLFNBQVMsQ0FBQztRQUNyQyx3QkFBbUIsR0FBWSxTQUFTLENBQUM7UUFDekMsU0FBSSxHQUFZLFNBQVMsQ0FBQztRQUMxQixXQUFNLEdBQVksU0FBUyxDQUFDO1FBQzVCLG9CQUFlLEdBQVksU0FBUyxDQUFDO1FBQ3JDLHlCQUFvQixHQUFZLFNBQVMsQ0FBQztRQUMxQyxvQkFBZSxHQUFZLFNBQVMsQ0FBQztRQUNyQyx5QkFBb0IsR0FBWSxTQUFTLENBQUM7UUFDMUMsWUFBTyxHQUFZLFNBQVMsQ0FBQztRQUM3QixrQkFBYSxHQUFZLFNBQVMsQ0FBQztRQUNuQyxpQkFBWSxHQUFhLEtBQUssQ0FBQztRQUkzQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0NBQ0Y7QUFyQmU7SUFBYiw0QkFBVSxFQUFFOzsyQ0FBa0M7QUFDakM7SUFBYiw0QkFBVSxFQUFFOzs4Q0FBcUM7QUFDcEM7SUFBYiw0QkFBVSxFQUFFOzhCQUFZLElBQUk7eUNBQWE7QUFDNUI7SUFBYiw0QkFBVSxFQUFFOztzQ0FBNEI7QUFDM0I7SUFBYiw0QkFBVSxFQUFFOzsrQ0FBc0M7QUFDckM7SUFBYiw0QkFBVSxFQUFFOzsrQ0FBc0M7QUFDckM7SUFBYiw0QkFBVSxFQUFFOzttREFBMEM7QUFDekM7SUFBYiw0QkFBVSxFQUFFOztvQ0FBMkI7QUFDMUI7SUFBYiw0QkFBVSxFQUFFOztzQ0FBNkI7QUFDNUI7SUFBYiw0QkFBVSxFQUFFOzsrQ0FBc0M7QUFDckM7SUFBYiw0QkFBVSxFQUFFOztvREFBMkM7QUFDMUM7SUFBYiw0QkFBVSxFQUFFOzsrQ0FBc0M7QUFDckM7SUFBYiw0QkFBVSxFQUFFOztvREFBMkM7QUFDMUM7SUFBYiw0QkFBVSxFQUFFOzt1Q0FBOEI7QUFDN0I7SUFBYiw0QkFBVSxFQUFFOzs2Q0FBb0M7QUFDbkM7SUFBYiw0QkFBVSxFQUFFOzs0Q0FBZ0M7QUFoQi9DLHdCQXNCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VNb2RlbCwgQmFzZU1vZGVsU2NoZW1hIH0gZnJvbSBcIi4uLy4uL2Jhc2VcIjtcclxuaW1wb3J0IHsgSXNPcHRpb25hbCwgSXNOb3RFbXB0eSB9IGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2xhc3MtdmFsaWRhdG9yXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJvbGV0b1NjaGVtYSBleHRlbmRzIEJhc2VNb2RlbFNjaGVtYSB7XHJcbiAgY29uZHVjdG9ySWQ/OiBudW1iZXI7XHJcbiAgZG9jdW1lbnROdW1iZXI/OiBzdHJpbmc7XHJcbiAgZXhwaXJlc0F0OiBEYXRlO1xyXG4gIGFtb3VudDogbnVtYmVyO1xyXG4gIGJlbmVmaWNpYXJ5TmFtZT86IHN0cmluZztcclxuICBiZW5lZmljaWFyeUNvZGU/OiBzdHJpbmc7XHJcbiAgYmVuZWZpY2lhcnlEb2N1bWVudD86IHN0cmluZztcclxuICBiYW5rPzogc3RyaW5nO1xyXG4gIGFnZW5jeT86IHN0cmluZztcclxuICBhZ3JlZW1lbnROdW1iZXI/OiBzdHJpbmc7XHJcbiAgYWdyZWVtZW50TnVtYmVyRGlnaXQ/OiBzdHJpbmc7XHJcbiAgY29uZHVjdG9yTnVtYmVyPzogc3RyaW5nO1xyXG4gIGNvbmR1Y3Rvck51bWJlckRpZ2l0Pzogc3RyaW5nO1xyXG4gIGJhckNvZGU/OiBzdHJpbmc7XHJcbiAgZGlnaXRhYmxlTGluZT86IHN0cmluZztcclxuICBpc1JlZ2lzdGVyZWQ/OiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQm9sZXRvIGV4dGVuZHMgQmFzZU1vZGVsIGltcGxlbWVudHMgQm9sZXRvU2NoZW1hIHtcclxuICBASXNPcHRpb25hbCgpIGNvbmR1Y3RvcklkPzogbnVtYmVyID0gdW5kZWZpbmVkO1xyXG4gIEBJc09wdGlvbmFsKCkgZG9jdW1lbnROdW1iZXI/OiBzdHJpbmcgPSB1bmRlZmluZWQ7XHJcbiAgQElzTm90RW1wdHkoKSBleHBpcmVzQXQ6IERhdGUgPSB1bmRlZmluZWQ7XHJcbiAgQElzTm90RW1wdHkoKSBhbW91bnQ6IG51bWJlciA9IHVuZGVmaW5lZDtcclxuICBASXNPcHRpb25hbCgpIGJlbmVmaWNpYXJ5TmFtZT86IHN0cmluZyA9IHVuZGVmaW5lZDtcclxuICBASXNPcHRpb25hbCgpIGJlbmVmaWNpYXJ5Q29kZT86IHN0cmluZyA9IHVuZGVmaW5lZDtcclxuICBASXNPcHRpb25hbCgpIGJlbmVmaWNpYXJ5RG9jdW1lbnQ/OiBzdHJpbmcgPSB1bmRlZmluZWQ7XHJcbiAgQElzT3B0aW9uYWwoKSBiYW5rPzogc3RyaW5nID0gdW5kZWZpbmVkO1xyXG4gIEBJc09wdGlvbmFsKCkgYWdlbmN5Pzogc3RyaW5nID0gdW5kZWZpbmVkO1xyXG4gIEBJc09wdGlvbmFsKCkgYWdyZWVtZW50TnVtYmVyPzogc3RyaW5nID0gdW5kZWZpbmVkO1xyXG4gIEBJc09wdGlvbmFsKCkgYWdyZWVtZW50TnVtYmVyRGlnaXQ/OiBzdHJpbmcgPSB1bmRlZmluZWQ7XHJcbiAgQElzT3B0aW9uYWwoKSBjb25kdWN0b3JOdW1iZXI/OiBzdHJpbmcgPSB1bmRlZmluZWQ7XHJcbiAgQElzT3B0aW9uYWwoKSBjb25kdWN0b3JOdW1iZXJEaWdpdD86IHN0cmluZyA9IHVuZGVmaW5lZDtcclxuICBASXNPcHRpb25hbCgpIGJhckNvZGU/OiBzdHJpbmcgPSB1bmRlZmluZWQ7XHJcbiAgQElzT3B0aW9uYWwoKSBkaWdpdGFibGVMaW5lPzogc3RyaW5nID0gdW5kZWZpbmVkO1xyXG4gIEBJc09wdGlvbmFsKCkgaXNSZWdpc3RlcmVkPzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihkYXRhOiBQYXJ0aWFsPEJvbGV0b1NjaGVtYT4pIHtcclxuICAgIHN1cGVyKGRhdGEpO1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcclxuICB9XHJcbn1cclxuIl19