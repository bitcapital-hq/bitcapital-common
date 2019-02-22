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
class BoletoInfo {
    constructor(data) {
        this.description = undefined;
        this.amount = undefined;
        this.expiresAt = undefined;
        this.hasExpirationDate = undefined;
        this.barcodeNumber = undefined;
        Object.assign(this, data);
    }
}
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], BoletoInfo.prototype, "description", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], BoletoInfo.prototype, "amount", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Date)
], BoletoInfo.prototype, "expiresAt", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Boolean)
], BoletoInfo.prototype, "hasExpirationDate", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], BoletoInfo.prototype, "barcodeNumber", void 0);
exports.BoletoInfo = BoletoInfo;
class TradersInfo {
    constructor(data) {
        this.recipient = undefined;
        this.recipientDocument = undefined;
        this.payerName = undefined;
        this.payerDocument = undefined;
        Object.assign(this, data);
    }
}
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], TradersInfo.prototype, "recipient", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], TradersInfo.prototype, "recipientDocument", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], TradersInfo.prototype, "payerName", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], TradersInfo.prototype, "payerDocument", void 0);
exports.TradersInfo = TradersInfo;
class PartialAmountDetails {
    constructor(data) {
        this.code = undefined;
        this.description = undefined;
        Object.assign(this, data);
    }
}
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], PartialAmountDetails.prototype, "code", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], PartialAmountDetails.prototype, "description", void 0);
exports.PartialAmountDetails = PartialAmountDetails;
class PaymentAmountDetails {
    constructor(data) {
        this.interestAmount = undefined;
        this.discount = undefined;
        this.fineAmount = undefined;
        this.totalAmount = undefined;
        this.paymentAmountUpdated = undefined;
        this.calculationDate = undefined;
        Object.assign(this, data);
    }
}
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], PaymentAmountDetails.prototype, "interestAmount", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], PaymentAmountDetails.prototype, "discount", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], PaymentAmountDetails.prototype, "fineAmount", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], PaymentAmountDetails.prototype, "totalAmount", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], PaymentAmountDetails.prototype, "paymentAmountUpdated", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Date)
], PaymentAmountDetails.prototype, "calculationDate", void 0);
exports.PaymentAmountDetails = PaymentAmountDetails;
class PaymentInfo {
    constructor(data) {
        this.contractId = undefined;
        this.idNumber = undefined;
        this.traders = undefined;
        this.expiresAt = undefined;
        this.totalAmount = undefined;
        this.amountDetails = undefined;
        this.acceptPartialAmount = undefined;
        this.barcode = undefined;
        this.digitableLine = undefined;
        this.paymentDeadline = undefined;
        this.validDate = undefined;
        this.nextBusinessDay = undefined;
        Object.assign(this, data);
    }
}
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], PaymentInfo.prototype, "contractId", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], PaymentInfo.prototype, "idNumber", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", TradersInfo)
], PaymentInfo.prototype, "traders", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Date)
], PaymentInfo.prototype, "expiresAt", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], PaymentInfo.prototype, "totalAmount", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", PaymentAmountDetails)
], PaymentInfo.prototype, "amountDetails", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", PartialAmountDetails)
], PaymentInfo.prototype, "acceptPartialAmount", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], PaymentInfo.prototype, "barcode", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], PaymentInfo.prototype, "digitableLine", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Date)
], PaymentInfo.prototype, "paymentDeadline", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Boolean)
], PaymentInfo.prototype, "validDate", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], PaymentInfo.prototype, "nextBusinessDay", void 0);
exports.PaymentInfo = PaymentInfo;
class BoletoValidateResponse extends base_1.BaseModel {
    constructor(data) {
        super(data);
        this.paid = undefined;
        this.boletoInfo = undefined;
        this.paymentInfo = undefined;
        Object.assign(this, data);
    }
}
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Boolean)
], BoletoValidateResponse.prototype, "paid", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", BoletoInfo)
], BoletoValidateResponse.prototype, "boletoInfo", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", PaymentInfo)
], BoletoValidateResponse.prototype, "paymentInfo", void 0);
exports.BoletoValidateResponse = BoletoValidateResponse;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm9sZXRvVmFsaWRhdGVSZXNwb25zZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9tb2RlbHMvQm9sZXRvL0JvbGV0b1ZhbGlkYXRlUmVzcG9uc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxxREFBNkM7QUFDN0MscUNBQXdEO0FBVXhELE1BQWEsVUFBVTtJQU9yQixZQUFZLElBQStCO1FBTjdCLGdCQUFXLEdBQVcsU0FBUyxDQUFDO1FBQ2hDLFdBQU0sR0FBVyxTQUFTLENBQUM7UUFDM0IsY0FBUyxHQUFTLFNBQVMsQ0FBQztRQUM1QixzQkFBaUIsR0FBWSxTQUFTLENBQUM7UUFDdkMsa0JBQWEsR0FBVyxTQUFTLENBQUM7UUFHOUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztDQUNGO0FBVGU7SUFBYiw0QkFBVSxFQUFFOzsrQ0FBaUM7QUFDaEM7SUFBYiw0QkFBVSxFQUFFOzswQ0FBNEI7QUFDM0I7SUFBYiw0QkFBVSxFQUFFOzhCQUFZLElBQUk7NkNBQWE7QUFDNUI7SUFBYiw0QkFBVSxFQUFFOztxREFBd0M7QUFDdkM7SUFBYiw0QkFBVSxFQUFFOztpREFBbUM7QUFMbEQsZ0NBVUM7QUFTRCxNQUFhLFdBQVc7SUFNdEIsWUFBWSxJQUFnQztRQUw5QixjQUFTLEdBQVcsU0FBUyxDQUFDO1FBQzlCLHNCQUFpQixHQUFXLFNBQVMsQ0FBQztRQUN0QyxjQUFTLEdBQVcsU0FBUyxDQUFDO1FBQzlCLGtCQUFhLEdBQVcsU0FBUyxDQUFDO1FBRzlDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7Q0FDRjtBQVJlO0lBQWIsNEJBQVUsRUFBRTs7OENBQStCO0FBQzlCO0lBQWIsNEJBQVUsRUFBRTs7c0RBQXVDO0FBQ3RDO0lBQWIsNEJBQVUsRUFBRTs7OENBQStCO0FBQzlCO0lBQWIs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QUFVLEVBQUU7O29EQUEyQjtBQUMxQjtJQUFiLDRCQUFVLEVBQUU7OEJBQWEsVUFBVTswREFBYTtBQUNuQztJQUFiLDRCQUFVLEVBQUU7OEJBQWMsV0FBVzsyREFBYTtBQUhyRCx3REFTQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElzTm90RW1wdHkgfSBmcm9tIFwiY2xhc3MtdmFsaWRhdG9yXCI7XHJcbmltcG9ydCB7IEJhc2VNb2RlbCwgQmFzZU1vZGVsU2NoZW1hIH0gZnJvbSBcIi4uLy4uL2Jhc2VcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQm9sZXRvSW5mb1NjaGVtYSB7XHJcbiAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICBhbW91bnQ6IG51bWJlcjtcclxuICBleHBpcmVzQXQ6IERhdGU7XHJcbiAgaGFzRXhwaXJhdGlvbkRhdGU6IGJvb2xlYW47XHJcbiAgYmFyY29kZU51bWJlcjogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQm9sZXRvSW5mbyBpbXBsZW1lbnRzIEJvbGV0b0luZm9TY2hlbWEge1xyXG4gIEBJc05vdEVtcHR5KCkgZGVzY3JpcHRpb246IHN0cmluZyA9IHVuZGVmaW5lZDtcclxuICBASXNOb3RFbXB0eSgpIGFtb3VudDogbnVtYmVyID0gdW5kZWZpbmVkO1xyXG4gIEBJc05vdEVtcHR5KCkgZXhwaXJlc0F0OiBEYXRlID0gdW5kZWZpbmVkO1xyXG4gIEBJc05vdEVtcHR5KCkgaGFzRXhwaXJhdGlvbkRhdGU6IGJvb2xlYW4gPSB1bmRlZmluZWQ7XHJcbiAgQElzTm90RW1wdHkoKSBiYXJjb2RlTnVtYmVyOiBzdHJpbmcgPSB1bmRlZmluZWQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRhdGE6IFBhcnRpYWw8Qm9sZXRvSW5mb1NjaGVtYT4pIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRyYWRlcnNJbmZvU2NoZW1hIHtcclxuICByZWNpcGllbnQ6IHN0cmluZztcclxuICByZWNpcGllbnREb2N1bWVudDogc3RyaW5nO1xyXG4gIHBheWVyTmFtZTogc3RyaW5nO1xyXG4gIHBheWVyRG9jdW1lbnQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRyYWRlcnNJbmZvIGltcGxlbWVudHMgVHJhZGVyc0luZm9TY2hlbWEge1xyXG4gIEBJc05vdEVtcHR5KCkgcmVjaXBpZW50OiBzdHJpbmcgPSB1bmRlZmluZWQ7XHJcbiAgQElzTm90RW1wdHkoKSByZWNpcGllbnREb2N1bWVudDogc3RyaW5nID0gdW5kZWZpbmVkO1xyXG4gIEBJc05vdEVtcHR5KCkgcGF5ZXJOYW1lOiBzdHJpbmcgPSB1bmRlZmluZWQ7XHJcbiAgQElzTm90RW1wdHkoKSBwYXllckRvY3VtZW50OiBzdHJpbmcgPSB1bmRlZmluZWQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRhdGE6IFBhcnRpYWw8VHJhZGVyc0luZm9TY2hlbWE+KSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQYXJ0aWFsQW1vdW50RGV0YWlsc1NjaGVtYSB7XHJcbiAgY29kZTogbnVtYmVyO1xyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQYXJ0aWFsQW1vdW50RGV0YWlscyBpbXBsZW1lbnRzIFBhcnRpYWxBbW91bnREZXRhaWxzU2NoZW1hIHtcclxuICBASXNOb3RFbXB0eSgpIGNvZGU6IG51bWJlciA9IHVuZGVmaW5lZDtcclxuICBASXNOb3RFbXB0eSgpIGRlc2NyaXB0aW9uOiBzdHJpbmcgPSB1bmRlZmluZWQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRhdGE6IFBhcnRpYWw8UGFydGlhbEFtb3VudERldGFpbHNTY2hlbWE+KSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQYXltZW50QW1vdW50RGV0YWlsc1NjaGVtYSB7XHJcbiAgaW50ZXJlc3RBbW91bnQ6IG51bWJlcjtcclxuICBkaXNjb3VudDogbnVtYmVyO1xyXG4gIGZpbmVBbW91bnQ6IG51bWJlcjtcclxuICB0b3RhbEFtb3VudDogbnVtYmVyO1xyXG4gIHBheW1lbnRBbW91bnRVcGRhdGVkOiBudW1iZXI7XHJcbiAgY2FsY3VsYXRpb25EYXRlOiBEYXRlO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUGF5bWVudEFtb3VudERldGFpbHMgaW1wbGVtZW50cyBQYXltZW50QW1vdW50RGV0YWlsc1NjaGVtYSB7XHJcbiAgQElzTm90RW1wdHkoKSBpbnRlcmVzdEFtb3VudDogbnVtYmVyID0gdW5kZWZpbmVkO1xyXG4gIEBJc05vdEVtcHR5KCkgZGlzY291bnQ6IG51bWJlciA9IHVuZGVmaW5lZDtcclxuICBASXNOb3RFbXB0eSgpIGZpbmVBbW91bnQ6IG51bWJlciA9IHVuZGVmaW5lZDtcclxuICBASXNOb3RFbXB0eSgpIHRvdGFsQW1vdW50OiBudW1iZXIgPSB1bmRlZmluZWQ7XHJcbiAgQElzTm90RW1wdHkoKSBwYXltZW50QW1vdW50VXBkYXRlZDogbnVtYmVyID0gdW5kZWZpbmVkO1xyXG4gIEBJc05vdEVtcHR5KCkgY2FsY3VsYXRpb25EYXRlOiBEYXRlID0gdW5kZWZpbmVkO1xyXG5cclxuICBjb25zdHJ1Y3RvcihkYXRhOiBQYXJ0aWFsPFBheW1lbnRBbW91bnREZXRhaWxzU2NoZW1hPikge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGF5bWVudEluZm9TY2hlbWEge1xyXG4gIGNvbnRyYWN0SWQ6IHN0cmluZztcclxuICBpZE51bWJlcjogc3RyaW5nO1xyXG4gIHRyYWRlcnM6IFRyYWRlcnNJbmZvO1xyXG4gIGV4cGlyZXNBdDogRGF0ZTtcclxuICB0b3RhbEFtb3VudDogbnVtYmVyO1xyXG4gIGFtb3VudERldGFpbHM6IFBheW1lbnRBbW91bnREZXRhaWxzO1xyXG4gIGFjY2VwdFBhcnRpYWxBbW91bnQ6IFBhcnRpYWxBbW91bnREZXRhaWxzO1xyXG4gIGJhcmNvZGU6IHN0cmluZztcclxuICBkaWdpdGFibGVMaW5lOiBzdHJpbmc7XHJcbiAgcGF5bWVudERlYWRsaW5lOiBEYXRlO1xyXG4gIHZhbGlkRGF0ZTogYm9vbGVhbjtcclxuICBuZXh0QnVzaW5lc3NEYXk6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBheW1lbnRJbmZvIGltcGxlbWVudHMgUGF5bWVudEluZm9TY2hlbWEge1xyXG4gIEBJc05vdEVtcHR5KCkgY29udHJhY3RJZDogc3RyaW5nID0gdW5kZWZpbmVkO1xyXG4gIEBJc05vdEVtcHR5KCkgaWROdW1iZXI6IHN0cmluZyA9IHVuZGVmaW5lZDtcclxuICBASXNOb3RFbXB0eSgpIHRyYWRlcnM6IFRyYWRlcnNJbmZvID0gdW5kZWZpbmVkO1xyXG4gIEBJc05vdEVtcHR5KCkgZXhwaXJlc0F0OiBEYXRlID0gdW5kZWZpbmVkO1xyXG4gIEBJc05vdEVtcHR5KCkgdG90YWxBbW91bnQ6IG51bWJlciA9IHVuZGVmaW5lZDtcclxuICBASXNOb3RFbXB0eSgpIGFtb3VudERldGFpbHM6IFBheW1lbnRBbW91bnREZXRhaWxzID0gdW5kZWZpbmVkO1xyXG4gIEBJc05vdEVtcHR5KCkgYWNjZXB0UGFydGlhbEFtb3VudDogUGFydGlhbEFtb3VudERldGFpbHMgPSB1bmRlZmluZWQ7XHJcbiAgQElzTm90RW1wdHkoKSBiYXJjb2RlOiBzdHJpbmcgPSB1bmRlZmluZWQ7XHJcbiAgQElzTm90RW1wdHkoKSBkaWdpdGFibGVMaW5lOiBzdHJpbmcgPSB1bmRlZmluZWQ7XHJcbiAgQElzTm90RW1wdHkoKSBwYXltZW50RGVhZGxpbmU6IERhdGUgPSB1bmRlZmluZWQ7XHJcbiAgQElzTm90RW1wdHkoKSB2YWxpZERhdGU6IGJvb2xlYW4gPSB1bmRlZmluZWQ7XHJcbiAgQElzTm90RW1wdHkoKSBuZXh0QnVzaW5lc3NEYXk6IHN0cmluZyA9IHVuZGVmaW5lZDtcclxuXHJcbiAgY29uc3RydWN0b3IoZGF0YTogUGFydGlhbDxQYXltZW50SW5mb1NjaGVtYT4pIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJvbGV0b1ZhbGlkYXRlUmVzcG9uc2VTY2hlbWEgZXh0ZW5kcyBCYXNlTW9kZWxTY2hlbWEge1xyXG4gIHBhaWQ6IGJvb2xlYW47XHJcbiAgYm9sZXRvSW5mbzogQm9sZXRvSW5mbztcclxuICBwYXltZW50SW5mbzogUGF5bWVudEluZm87XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCb2xldG9WYWxpZGF0ZVJlc3BvbnNlIGV4dGVuZHMgQmFzZU1vZGVsIGltcGxlbWVudHMgQm9sZXRvVmFsaWRhdGVSZXNwb25zZVNjaGVtYSB7XHJcbiAgQElzTm90RW1wdHkoKSBwYWlkOiBib29sZWFuID0gdW5kZWZpbmVkO1xyXG4gIEBJc05vdEVtcHR5KCkgYm9sZXRvSW5mbzogQm9sZXRvSW5mbyA9IHVuZGVmaW5lZDtcclxuICBASXNOb3RFbXB0eSgpIHBheW1lbnRJbmZvOiBQYXltZW50SW5mbyA9IHVuZGVmaW5lZDtcclxuXHJcbiAgY29uc3RydWN0b3IoZGF0YTogUGFydGlhbDxCb2xldG9WYWxpZGF0ZVJlc3BvbnNlU2NoZW1hPikge1xyXG4gICAgc3VwZXIoZGF0YSk7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xyXG4gIH1cclxufVxyXG4iXX0=