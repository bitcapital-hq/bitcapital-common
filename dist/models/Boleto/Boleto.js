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
        this.expiresAt = data.expiresAt && new Date(data.expiresAt);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm9sZXRvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL21vZGVscy9Cb2xldG8vQm9sZXRvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscUNBQXdEO0FBQ3hELHFEQUF5RDtBQXFCekQsTUFBYSxNQUFPLFNBQVEsZ0JBQVM7SUFrQm5DLFlBQVksSUFBMkI7UUFDckMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBbEJBLGdCQUFXLEdBQVksU0FBUyxDQUFDO1FBQ2pDLG1CQUFjLEdBQVksU0FBUyxDQUFDO1FBQ3BDLGNBQVMsR0FBUyxTQUFTLENBQUM7UUFDNUIsV0FBTSxHQUFXLFNBQVMsQ0FBQztRQUMzQixvQkFBZSxHQUFZLFNBQVMsQ0FBQztRQUNyQyxvQkFBZSxHQUFZLFNBQVMsQ0FBQztRQUNyQyx3QkFBbUIsR0FBWSxTQUFTLENBQUM7UUFDekMsU0FBSSxHQUFZLFNBQVMsQ0FBQztRQUMxQixXQUFNLEdBQVksU0FBUyxDQUFDO1FBQzVCLG9CQUFlLEdBQVksU0FBUyxDQUFDO1FBQ3JDLHlCQUFvQixHQUFZLFNBQVMsQ0FBQztRQUMxQyxvQkFBZSxHQUFZLFNBQVMsQ0FBQztRQUNyQyx5QkFBb0IsR0FBWSxTQUFTLENBQUM7UUFDMUMsWUFBTyxHQUFZLFNBQVMsQ0FBQztRQUM3QixrQkFBYSxHQUFZLFNBQVMsQ0FBQztRQUNuQyxpQkFBWSxHQUFhLEtBQUssQ0FBQztRQUszQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUUxQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzlELENBQUM7Q0FDRjtBQXhCZTtJQUFiLDRCQUFVLEVBQUU7OzJDQUFrQztBQUNqQztJQUFiLDRCQUFVLEVBQUU7OzhDQUFxQztBQUNwQztJQUFiLDRCQUFVLEVBQUU7OEJBQVksSUFBSTt5Q0FBYTtBQUM1QjtJQUFiLDRCQUFVLEVBQUU7O3NDQUE0QjtBQUMzQjtJQUFiLDRCQUFVLEVBQUU7OytDQUFzQztBQUNyQztJQUFiLDRCQUFVLEVBQUU7OytDQUFzQztBQUNyQztJQUFiLDRCQUFVLEVBQUU7O21EQUEwQztBQUN6QztJQUFiLDRCQUFVLEVBQUU7O29DQUEyQjtBQUMxQjtJQUFiLDRCQUFVLEVBQUU7O3NDQUE2QjtBQUM1QjtJQUFiLDRCQUFVLEVBQUU7OytDQUFzQztBQUNyQztJQUFiLDRCQUFVLEVBQUU7O29EQUEyQztBQUMxQztJQUFiLDRCQUFVLEVBQUU7OytDQUFzQztBQUNyQztJQUFiLDRCQUFVLEVBQUU7O29EQUEyQztBQUMxQztJQUFiLDRCQUFVLEVBQUU7O3VDQUE4QjtBQUM3QjtJQUFiLDRCQUFVLEVBQUU7OzZDQUFvQztBQUNuQztJQUFiLDRCQUFVLEVBQUU7OzRDQUFnQztBQWhCL0Msd0JBeUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZU1vZGVsLCBCYXNlTW9kZWxTY2hlbWEgfSBmcm9tIFwiLi4vLi4vYmFzZVwiO1xuaW1wb3J0IHsgSXNPcHRpb25hbCwgSXNOb3RFbXB0eSB9IGZyb20gXCJjbGFzcy12YWxpZGF0b3JcIjtcblxuZXhwb3J0IGludGVyZmFjZSBCb2xldG9TY2hlbWEgZXh0ZW5kcyBCYXNlTW9kZWxTY2hlbWEge1xuICBjb25kdWN0b3JJZD86IG51bWJlcjtcbiAgZG9jdW1lbnROdW1iZXI/OiBzdHJpbmc7XG4gIGV4cGlyZXNBdDogRGF0ZSB8IHN0cmluZztcbiAgYW1vdW50OiBzdHJpbmc7XG4gIGJlbmVmaWNpYXJ5TmFtZT86IHN0cmluZztcbiAgYmVuZWZpY2lhcnlDb2RlPzogc3RyaW5nO1xuICBiZW5lZmljaWFyeURvY3VtZW50Pzogc3RyaW5nO1xuICBiYW5rPzogc3RyaW5nO1xuICBhZ2VuY3k/OiBzdHJpbmc7XG4gIGFncmVlbWVudE51bWJlcj86IHN0cmluZztcbiAgYWdyZWVtZW50TnVtYmVyRGlnaXQ/OiBzdHJpbmc7XG4gIGNvbmR1Y3Rvck51bWJlcj86IHN0cmluZztcbiAgY29uZHVjdG9yTnVtYmVyRGlnaXQ/OiBzdHJpbmc7XG4gIGJhckNvZGU/OiBzdHJpbmc7XG4gIGRpZ2l0YWJsZUxpbmU/OiBzdHJpbmc7XG4gIGlzUmVnaXN0ZXJlZD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjbGFzcyBCb2xldG8gZXh0ZW5kcyBCYXNlTW9kZWwgaW1wbGVtZW50cyBCb2xldG9TY2hlbWEge1xuICBASXNPcHRpb25hbCgpIGNvbmR1Y3RvcklkPzogbnVtYmVyID0gdW5kZWZpbmVkO1xuICBASXNPcHRpb25hbCgpIGRvY3VtZW50TnVtYmVyPzogc3RyaW5nID0gdW5kZWZpbmVkO1xuICBASXNOb3RFbXB0eSgpIGV4cGlyZXNBdDogRGF0ZSA9IHVuZGVmaW5lZDtcbiAgQElzTm90RW1wdHkoKSBhbW91bnQ6IHN0cmluZyA9IHVuZGVmaW5lZDtcbiAgQElzT3B0aW9uYWwoKSBiZW5lZmljaWFyeU5hbWU/OiBzdHJpbmcgPSB1bmRlZmluZWQ7XG4gIEBJc09wdGlvbmFsKCkgYmVuZWZpY2lhcnlDb2RlPzogc3RyaW5nID0gdW5kZWZpbmVkO1xuICBASXNPcHRpb25hbCgpIGJlbmVmaWNpYXJ5RG9jdW1lbnQ/OiBzdHJpbmcgPSB1bmRlZmluZWQ7XG4gIEBJc09wdGlvbmFsKCkgYmFuaz86IHN0cmluZyA9IHVuZGVmaW5lZDtcbiAgQElzT3B0aW9uYWwoKSBhZ2VuY3k/OiBzdHJpbmcgPSB1bmRlZmluZWQ7XG4gIEBJc09wdGlvbmFsKCkgYWdyZWVtZW50TnVtYmVyPzogc3RyaW5nID0gdW5kZWZpbmVkO1xuICBASXNPcHRpb25hbCgpIGFncmVlbWVudE51bWJlckRpZ2l0Pzogc3RyaW5nID0gdW5kZWZpbmVkO1xuICBASXNPcHRpb25hbCgpIGNvbmR1Y3Rvck51bWJlcj86IHN0cmluZyA9IHVuZGVmaW5lZDtcbiAgQElzT3B0aW9uYWwoKSBjb25kdWN0b3JOdW1iZXJEaWdpdD86IHN0cmluZyA9IHVuZGVmaW5lZDtcbiAgQElzT3B0aW9uYWwoKSBiYXJDb2RlPzogc3RyaW5nID0gdW5kZWZpbmVkO1xuICBASXNPcHRpb25hbCgpIGRpZ2l0YWJsZUxpbmU/OiBzdHJpbmcgPSB1bmRlZmluZWQ7XG4gIEBJc09wdGlvbmFsKCkgaXNSZWdpc3RlcmVkPzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKGRhdGE6IFBhcnRpYWw8Qm9sZXRvU2NoZW1hPikge1xuICAgIHN1cGVyKGRhdGEpO1xuXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcblxuICAgIHRoaXMuZXhwaXJlc0F0ID0gZGF0YS5leHBpcmVzQXQgJiYgbmV3IERhdGUoZGF0YS5leHBpcmVzQXQpO1xuICB9XG59XG4iXX0=