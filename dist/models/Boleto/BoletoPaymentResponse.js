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
class BoletoPaymentResponse extends base_1.BaseModel {
    constructor(data) {
        super(data);
        this.paymentId = undefined;
        this.accountId = undefined;
        this.status = undefined;
        this.description = undefined;
        this.barcode = undefined;
        this.expiresAt = undefined;
        this.recipientName = undefined;
        this.discount = undefined;
        this.taxAmount = undefined;
        this.amount = undefined;
        Object.assign(this, data);
    }
}
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], BoletoPaymentResponse.prototype, "paymentId", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], BoletoPaymentResponse.prototype, "accountId", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], BoletoPaymentResponse.prototype, "status", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], BoletoPaymentResponse.prototype, "description", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], BoletoPaymentResponse.prototype, "barcode", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Date)
], BoletoPaymentResponse.prototype, "expiresAt", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], BoletoPaymentResponse.prototype, "recipientName", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], BoletoPaymentResponse.prototype, "discount", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], BoletoPaymentResponse.prototype, "taxAmount", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], BoletoPaymentResponse.prototype, "amount", void 0);
exports.BoletoPaymentResponse = BoletoPaymentResponse;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm9sZXRvUGF5bWVudFJlc3BvbnNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL21vZGVscy9Cb2xldG8vQm9sZXRvUGF5bWVudFJlc3BvbnNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscURBQTZDO0FBQzdDLHFDQUF3RDtBQWV4RCxNQUFhLHFCQUFzQixTQUFRLGdCQUFTO0lBWWxELFlBQVksSUFBb0M7UUFDOUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBWkEsY0FBUyxHQUFXLFNBQVMsQ0FBQztRQUM5QixjQUFTLEdBQVcsU0FBUyxDQUFDO1FBQzlCLFdBQU0sR0FBVyxTQUFTLENBQUM7UUFDM0IsZ0JBQVcsR0FBVyxTQUFTLENBQUM7UUFDaEMsWUFBTyxHQUFXLFNBQVMsQ0FBQztRQUM1QixjQUFTLEdBQVMsU0FBUyxDQUFDO1FBQzVCLGtCQUFhLEdBQVcsU0FBUyxDQUFDO1FBQ2xDLGFBQVEsR0FBVyxTQUFTLENBQUM7UUFDN0IsY0FBUyxHQUFXLFNBQVMsQ0FBQztRQUM5QixXQUFNLEdBQVcsU0FBUyxDQUFDO1FBSXZDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7Q0FDRjtBQWZlO0lBQWIsNEJBQVUsRUFBRTs7d0RBQStCO0FBQzlCO0lBQWIsNEJBQVUsRUFBRTs7d0RBQStCO0FBQzlCO0lBQWIsNEJBQVUsRUFBRTs7cURBQTRCO0FBQzNCO0lBQWIsNEJBQVUsRUFBRTs7MERBQWlDO0FBQ2hDO0lBQWIsNEJBQVUsRUFBRTs7c0RBQTZCO0FBQzVCO0lBQWIsNEJBQVUsRUFBRTs4QkFBWSxJQUFJO3dEQUFhO0FBQzVCO0lBQWIsNEJBQVUsRUFBRTs7NERBQW1DO0FBQ2xDO0lBQWIsNEJBQVUsRUFBRTs7dURBQThCO0FBQzdCO0lBQWIsNEJBQVUsRUFBRTs7d0RBQStCO0FBQzlCO0lBQWIsNEJBQVUsRUFBRTs7cURBQTRCO0FBVjNDLHNEQWdCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElzTm90RW1wdHkgfSBmcm9tIFwiY2xhc3MtdmFsaWRhdG9yXCI7XG5pbXBvcnQgeyBCYXNlTW9kZWwsIEJhc2VNb2RlbFNjaGVtYSB9IGZyb20gXCIuLi8uLi9iYXNlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQm9sZXRvUGF5bWVudFJlc3BvbnNlU2NoZW1hIGV4dGVuZHMgQmFzZU1vZGVsU2NoZW1hIHtcbiAgcGF5bWVudElkOiBudW1iZXI7XG4gIGFjY291bnRJZDogbnVtYmVyO1xuICBzdGF0dXM6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgYmFyY29kZTogc3RyaW5nO1xuICBleHBpcmVzQXQ6IERhdGU7XG4gIHJlY2lwaWVudE5hbWU6IHN0cmluZztcbiAgZGlzY291bnQ6IG51bWJlcjtcbiAgdGF4QW1vdW50OiBudW1iZXI7XG4gIGFtb3VudDogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgQm9sZXRvUGF5bWVudFJlc3BvbnNlIGV4dGVuZHMgQmFzZU1vZGVsIGltcGxlbWVudHMgQm9sZXRvUGF5bWVudFJlc3BvbnNlU2NoZW1hIHtcbiAgQElzTm90RW1wdHkoKSBwYXltZW50SWQ6IG51bWJlciA9IHVuZGVmaW5lZDtcbiAgQElzTm90RW1wdHkoKSBhY2NvdW50SWQ6IG51bWJlciA9IHVuZGVmaW5lZDtcbiAgQElzTm90RW1wdHkoKSBzdGF0dXM6IHN0cmluZyA9IHVuZGVmaW5lZDtcbiAgQElzTm90RW1wdHkoKSBkZXNjcmlwdGlvbjogc3RyaW5nID0gdW5kZWZpbmVkO1xuICBASXNOb3RFbXB0eSgpIGJhcmNvZGU6IHN0cmluZyA9IHVuZGVmaW5lZDtcbiAgQElzTm90RW1wdHkoKSBleHBpcmVzQXQ6IERhdGUgPSB1bmRlZmluZWQ7XG4gIEBJc05vdEVtcHR5KCkgcmVjaXBpZW50TmFtZTogc3RyaW5nID0gdW5kZWZpbmVkO1xuICBASXNOb3RFbXB0eSgpIGRpc2NvdW50OiBudW1iZXIgPSB1bmRlZmluZWQ7XG4gIEBJc05vdEVtcHR5KCkgdGF4QW1vdW50OiBudW1iZXIgPSB1bmRlZmluZWQ7XG4gIEBJc05vdEVtcHR5KCkgYW1vdW50OiBudW1iZXIgPSB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IoZGF0YTogUGFydGlhbDxCb2xldG9QYXltZW50UmVzcG9uc2U+KSB7XG4gICAgc3VwZXIoZGF0YSk7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcbiAgfVxufVxuIl19