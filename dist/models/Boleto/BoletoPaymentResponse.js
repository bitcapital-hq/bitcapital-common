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
        this.expiresAt = data.expiresAt && new Date(data.expiresAt);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm9sZXRvUGF5bWVudFJlc3BvbnNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL21vZGVscy9Cb2xldG8vQm9sZXRvUGF5bWVudFJlc3BvbnNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscURBQTZDO0FBQzdDLHFDQUF3RDtBQWV4RCxNQUFhLHFCQUFzQixTQUFRLGdCQUFTO0lBWWxELFlBQVksSUFBMEM7UUFDcEQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBWkEsY0FBUyxHQUFXLFNBQVMsQ0FBQztRQUM5QixjQUFTLEdBQVcsU0FBUyxDQUFDO1FBQzlCLFdBQU0sR0FBVyxTQUFTLENBQUM7UUFDM0IsZ0JBQVcsR0FBVyxTQUFTLENBQUM7UUFDaEMsWUFBTyxHQUFXLFNBQVMsQ0FBQztRQUM1QixjQUFTLEdBQVMsU0FBUyxDQUFDO1FBQzVCLGtCQUFhLEdBQVcsU0FBUyxDQUFDO1FBQ2xDLGFBQVEsR0FBVyxTQUFTLENBQUM7UUFDN0IsY0FBUyxHQUFXLFNBQVMsQ0FBQztRQUM5QixXQUFNLEdBQVcsU0FBUyxDQUFDO1FBS3ZDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRTFCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDOUQsQ0FBQztDQUNGO0FBbEJlO0lBQWIsNEJBQVUsRUFBRTs7d0RBQStCO0FBQzlCO0lBQWIsNEJBQVUsRUFBRTs7d0RBQStCO0FBQzlCO0lBQWIsNEJBQVUsRUFBRTs7cURBQTRCO0FBQzNCO0lBQWIsNEJBQVUsRUFBRTs7MERBQWlDO0FBQ2hDO0lBQWIsNEJBQVUsRUFBRTs7c0RBQTZCO0FBQzVCO0lBQWIsNEJBQVUsRUFBRTs4QkFBWSxJQUFJO3dEQUFhO0FBQzVCO0lBQWIsNEJBQVUsRUFBRTs7NERBQW1DO0FBQ2xDO0lBQWIsNEJBQVUsRUFBRTs7dURBQThCO0FBQzdCO0lBQWIsNEJBQVUsRUFBRTs7d0RBQStCO0FBQzlCO0lBQWIsNEJBQVUsRUFBRTs7cURBQTRCO0FBVjNDLHNEQW1CQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElzTm90RW1wdHkgfSBmcm9tIFwiY2xhc3MtdmFsaWRhdG9yXCI7XHJcbmltcG9ydCB7IEJhc2VNb2RlbCwgQmFzZU1vZGVsU2NoZW1hIH0gZnJvbSBcIi4uLy4uL2Jhc2VcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQm9sZXRvUGF5bWVudFJlc3BvbnNlU2NoZW1hIGV4dGVuZHMgQmFzZU1vZGVsU2NoZW1hIHtcclxuICBwYXltZW50SWQ6IG51bWJlcjtcclxuICBhY2NvdW50SWQ6IG51bWJlcjtcclxuICBzdGF0dXM6IHN0cmluZztcclxuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gIGJhcmNvZGU6IHN0cmluZztcclxuICBleHBpcmVzQXQ6IERhdGUgfCBzdHJpbmc7XHJcbiAgcmVjaXBpZW50TmFtZTogc3RyaW5nO1xyXG4gIGRpc2NvdW50OiBudW1iZXI7XHJcbiAgdGF4QW1vdW50OiBudW1iZXI7XHJcbiAgYW1vdW50OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCb2xldG9QYXltZW50UmVzcG9uc2UgZXh0ZW5kcyBCYXNlTW9kZWwgaW1wbGVtZW50cyBCb2xldG9QYXltZW50UmVzcG9uc2VTY2hlbWEge1xyXG4gIEBJc05vdEVtcHR5KCkgcGF5bWVudElkOiBudW1iZXIgPSB1bmRlZmluZWQ7XHJcbiAgQElzTm90RW1wdHkoKSBhY2NvdW50SWQ6IG51bWJlciA9IHVuZGVmaW5lZDtcclxuICBASXNOb3RFbXB0eSgpIHN0YXR1czogc3RyaW5nID0gdW5kZWZpbmVkO1xyXG4gIEBJc05vdEVtcHR5KCkgZGVzY3JpcHRpb246IHN0cmluZyA9IHVuZGVmaW5lZDtcclxuICBASXNOb3RFbXB0eSgpIGJhcmNvZGU6IHN0cmluZyA9IHVuZGVmaW5lZDtcclxuICBASXNOb3RFbXB0eSgpIGV4cGlyZXNBdDogRGF0ZSA9IHVuZGVmaW5lZDtcclxuICBASXNOb3RFbXB0eSgpIHJlY2lwaWVudE5hbWU6IHN0cmluZyA9IHVuZGVmaW5lZDtcclxuICBASXNOb3RFbXB0eSgpIGRpc2NvdW50OiBudW1iZXIgPSB1bmRlZmluZWQ7XHJcbiAgQElzTm90RW1wdHkoKSB0YXhBbW91bnQ6IG51bWJlciA9IHVuZGVmaW5lZDtcclxuICBASXNOb3RFbXB0eSgpIGFtb3VudDogbnVtYmVyID0gdW5kZWZpbmVkO1xyXG5cclxuICBjb25zdHJ1Y3RvcihkYXRhOiBQYXJ0aWFsPEJvbGV0b1BheW1lbnRSZXNwb25zZVNjaGVtYT4pIHtcclxuICAgIHN1cGVyKGRhdGEpO1xyXG5cclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XHJcblxyXG4gICAgdGhpcy5leHBpcmVzQXQgPSBkYXRhLmV4cGlyZXNBdCAmJiBuZXcgRGF0ZShkYXRhLmV4cGlyZXNBdCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==