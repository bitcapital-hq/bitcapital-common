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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm9sZXRvVmFsaWRhdGVSZXNwb25zZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9tb2RlbHMvQm9sZXRvL0JvbGV0b1ZhbGlkYXRlUmVzcG9uc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxxREFBNkM7QUFDN0MscUNBQXdEO0FBVXhELE1BQWEsVUFBVTtJQU9yQixZQUFZLElBQStCO1FBTjdCLGdCQUFXLEdBQVcsU0FBUyxDQUFDO1FBQ2hDLFdBQU0sR0FBVyxTQUFTLENBQUM7UUFDM0IsY0FBUyxHQUFTLFNBQVMsQ0FBQztRQUM1QixzQkFBaUIsR0FBWSxTQUFTLENBQUM7UUFDdkMsa0JBQWEsR0FBVyxTQUFTLENBQUM7UUFHOUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztDQUNGO0FBVGU7SUFBYiw0QkFBVSxFQUFFOzsrQ0FBaUM7QUFDaEM7SUFBYiw0QkFBVSxFQUFFOzswQ0FBNEI7QUFDM0I7SUFBYiw0QkFBVSxFQUFFOzhCQUFZLElBQUk7NkNBQWE7QUFDNUI7SUFBYiw0QkFBVSxFQUFFOztxREFBd0M7QUFDdkM7SUFBYiw0QkFBVSxFQUFFOztpREFBbUM7QUFMbEQsZ0NBVUM7QUFTRCxNQUFhLFdBQVc7SUFNdEIsWUFBWSxJQUFnQztRQUw5QixjQUFTLEdBQVcsU0FBUyxDQUFDO1FBQzlCLHNCQUFpQixHQUFXLFNBQVMsQ0FBQztRQUN0QyxjQUFTLEdBQVcsU0FBUyxDQUFDO1FBQzlCLGtCQUFhLEdBQVcsU0FBUyxDQUFDO1FBRzlDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7Q0FDRjtBQVJlO0lBQWIsNEJBQVUsRUFBRTs7OENBQStCO0FBQzlCO0lBQWIsNEJBQVUsRUFBRTs7c0RBQXVDO0FBQ3RDO0lBQWIsNEJBQVUsRUFBRTs7OENBQStCO0FBQzlCO0lBQWIs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QUFVLEVBQUU7O29EQUEyQjtBQUMxQjtJQUFiLDRCQUFVLEVBQUU7OEJBQWEsVUFBVTswREFBYTtBQUNuQztJQUFiLDRCQUFVLEVBQUU7OEJBQWMsV0FBVzsyREFBYTtBQUhyRCx3REFTQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElzTm90RW1wdHkgfSBmcm9tIFwiY2xhc3MtdmFsaWRhdG9yXCI7XG5pbXBvcnQgeyBCYXNlTW9kZWwsIEJhc2VNb2RlbFNjaGVtYSB9IGZyb20gXCIuLi8uLi9iYXNlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQm9sZXRvSW5mb1NjaGVtYSB7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGFtb3VudDogbnVtYmVyO1xuICBleHBpcmVzQXQ6IERhdGU7XG4gIGhhc0V4cGlyYXRpb25EYXRlOiBib29sZWFuO1xuICBiYXJjb2RlTnVtYmVyOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBCb2xldG9JbmZvIGltcGxlbWVudHMgQm9sZXRvSW5mb1NjaGVtYSB7XG4gIEBJc05vdEVtcHR5KCkgZGVzY3JpcHRpb246IHN0cmluZyA9IHVuZGVmaW5lZDtcbiAgQElzTm90RW1wdHkoKSBhbW91bnQ6IG51bWJlciA9IHVuZGVmaW5lZDtcbiAgQElzTm90RW1wdHkoKSBleHBpcmVzQXQ6IERhdGUgPSB1bmRlZmluZWQ7XG4gIEBJc05vdEVtcHR5KCkgaGFzRXhwaXJhdGlvbkRhdGU6IGJvb2xlYW4gPSB1bmRlZmluZWQ7XG4gIEBJc05vdEVtcHR5KCkgYmFyY29kZU51bWJlcjogc3RyaW5nID0gdW5kZWZpbmVkO1xuXG4gIGNvbnN0cnVjdG9yKGRhdGE6IFBhcnRpYWw8Qm9sZXRvSW5mb1NjaGVtYT4pIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhZGVyc0luZm9TY2hlbWEge1xuICByZWNpcGllbnQ6IHN0cmluZztcbiAgcmVjaXBpZW50RG9jdW1lbnQ6IHN0cmluZztcbiAgcGF5ZXJOYW1lOiBzdHJpbmc7XG4gIHBheWVyRG9jdW1lbnQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIFRyYWRlcnNJbmZvIGltcGxlbWVudHMgVHJhZGVyc0luZm9TY2hlbWEge1xuICBASXNOb3RFbXB0eSgpIHJlY2lwaWVudDogc3RyaW5nID0gdW5kZWZpbmVkO1xuICBASXNOb3RFbXB0eSgpIHJlY2lwaWVudERvY3VtZW50OiBzdHJpbmcgPSB1bmRlZmluZWQ7XG4gIEBJc05vdEVtcHR5KCkgcGF5ZXJOYW1lOiBzdHJpbmcgPSB1bmRlZmluZWQ7XG4gIEBJc05vdEVtcHR5KCkgcGF5ZXJEb2N1bWVudDogc3RyaW5nID0gdW5kZWZpbmVkO1xuXG4gIGNvbnN0cnVjdG9yKGRhdGE6IFBhcnRpYWw8VHJhZGVyc0luZm9TY2hlbWE+KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBhcnRpYWxBbW91bnREZXRhaWxzU2NoZW1hIHtcbiAgY29kZTogbnVtYmVyO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgUGFydGlhbEFtb3VudERldGFpbHMgaW1wbGVtZW50cyBQYXJ0aWFsQW1vdW50RGV0YWlsc1NjaGVtYSB7XG4gIEBJc05vdEVtcHR5KCkgY29kZTogbnVtYmVyID0gdW5kZWZpbmVkO1xuICBASXNOb3RFbXB0eSgpIGRlc2NyaXB0aW9uOiBzdHJpbmcgPSB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IoZGF0YTogUGFydGlhbDxQYXJ0aWFsQW1vdW50RGV0YWlsc1NjaGVtYT4pIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGF5bWVudEFtb3VudERldGFpbHNTY2hlbWEge1xuICBpbnRlcmVzdEFtb3VudDogbnVtYmVyO1xuICBkaXNjb3VudDogbnVtYmVyO1xuICBmaW5lQW1vdW50OiBudW1iZXI7XG4gIHRvdGFsQW1vdW50OiBudW1iZXI7XG4gIHBheW1lbnRBbW91bnRVcGRhdGVkOiBudW1iZXI7XG4gIGNhbGN1bGF0aW9uRGF0ZTogRGF0ZTtcbn1cblxuZXhwb3J0IGNsYXNzIFBheW1lbnRBbW91bnREZXRhaWxzIGltcGxlbWVudHMgUGF5bWVudEFtb3VudERldGFpbHNTY2hlbWEge1xuICBASXNOb3RFbXB0eSgpIGludGVyZXN0QW1vdW50OiBudW1iZXIgPSB1bmRlZmluZWQ7XG4gIEBJc05vdEVtcHR5KCkgZGlzY291bnQ6IG51bWJlciA9IHVuZGVmaW5lZDtcbiAgQElzTm90RW1wdHkoKSBmaW5lQW1vdW50OiBudW1iZXIgPSB1bmRlZmluZWQ7XG4gIEBJc05vdEVtcHR5KCkgdG90YWxBbW91bnQ6IG51bWJlciA9IHVuZGVmaW5lZDtcbiAgQElzTm90RW1wdHkoKSBwYXltZW50QW1vdW50VXBkYXRlZDogbnVtYmVyID0gdW5kZWZpbmVkO1xuICBASXNOb3RFbXB0eSgpIGNhbGN1bGF0aW9uRGF0ZTogRGF0ZSA9IHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3RvcihkYXRhOiBQYXJ0aWFsPFBheW1lbnRBbW91bnREZXRhaWxzU2NoZW1hPikge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBQYXltZW50SW5mb1NjaGVtYSB7XG4gIGNvbnRyYWN0SWQ6IHN0cmluZztcbiAgaWROdW1iZXI6IHN0cmluZztcbiAgdHJhZGVyczogVHJhZGVyc0luZm87XG4gIGV4cGlyZXNBdDogRGF0ZTtcbiAgdG90YWxBbW91bnQ6IG51bWJlcjtcbiAgYW1vdW50RGV0YWlsczogUGF5bWVudEFtb3VudERldGFpbHM7XG4gIGFjY2VwdFBhcnRpYWxBbW91bnQ6IFBhcnRpYWxBbW91bnREZXRhaWxzO1xuICBiYXJjb2RlOiBzdHJpbmc7XG4gIGRpZ2l0YWJsZUxpbmU6IHN0cmluZztcbiAgcGF5bWVudERlYWRsaW5lOiBEYXRlO1xuICB2YWxpZERhdGU6IGJvb2xlYW47XG4gIG5leHRCdXNpbmVzc0RheTogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgUGF5bWVudEluZm8gaW1wbGVtZW50cyBQYXltZW50SW5mb1NjaGVtYSB7XG4gIEBJc05vdEVtcHR5KCkgY29udHJhY3RJZDogc3RyaW5nID0gdW5kZWZpbmVkO1xuICBASXNOb3RFbXB0eSgpIGlkTnVtYmVyOiBzdHJpbmcgPSB1bmRlZmluZWQ7XG4gIEBJc05vdEVtcHR5KCkgdHJhZGVyczogVHJhZGVyc0luZm8gPSB1bmRlZmluZWQ7XG4gIEBJc05vdEVtcHR5KCkgZXhwaXJlc0F0OiBEYXRlID0gdW5kZWZpbmVkO1xuICBASXNOb3RFbXB0eSgpIHRvdGFsQW1vdW50OiBudW1iZXIgPSB1bmRlZmluZWQ7XG4gIEBJc05vdEVtcHR5KCkgYW1vdW50RGV0YWlsczogUGF5bWVudEFtb3VudERldGFpbHMgPSB1bmRlZmluZWQ7XG4gIEBJc05vdEVtcHR5KCkgYWNjZXB0UGFydGlhbEFtb3VudDogUGFydGlhbEFtb3VudERldGFpbHMgPSB1bmRlZmluZWQ7XG4gIEBJc05vdEVtcHR5KCkgYmFyY29kZTogc3RyaW5nID0gdW5kZWZpbmVkO1xuICBASXNOb3RFbXB0eSgpIGRpZ2l0YWJsZUxpbmU6IHN0cmluZyA9IHVuZGVmaW5lZDtcbiAgQElzTm90RW1wdHkoKSBwYXltZW50RGVhZGxpbmU6IERhdGUgPSB1bmRlZmluZWQ7XG4gIEBJc05vdEVtcHR5KCkgdmFsaWREYXRlOiBib29sZWFuID0gdW5kZWZpbmVkO1xuICBASXNOb3RFbXB0eSgpIG5leHRCdXNpbmVzc0RheTogc3RyaW5nID0gdW5kZWZpbmVkO1xuXG4gIGNvbnN0cnVjdG9yKGRhdGE6IFBhcnRpYWw8UGF5bWVudEluZm9TY2hlbWE+KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJvbGV0b1ZhbGlkYXRlUmVzcG9uc2VTY2hlbWEgZXh0ZW5kcyBCYXNlTW9kZWxTY2hlbWEge1xuICBwYWlkOiBib29sZWFuO1xuICBib2xldG9JbmZvOiBCb2xldG9JbmZvO1xuICBwYXltZW50SW5mbzogUGF5bWVudEluZm87XG59XG5cbmV4cG9ydCBjbGFzcyBCb2xldG9WYWxpZGF0ZVJlc3BvbnNlIGV4dGVuZHMgQmFzZU1vZGVsIGltcGxlbWVudHMgQm9sZXRvVmFsaWRhdGVSZXNwb25zZVNjaGVtYSB7XG4gIEBJc05vdEVtcHR5KCkgcGFpZDogYm9vbGVhbiA9IHVuZGVmaW5lZDtcbiAgQElzTm90RW1wdHkoKSBib2xldG9JbmZvOiBCb2xldG9JbmZvID0gdW5kZWZpbmVkO1xuICBASXNOb3RFbXB0eSgpIHBheW1lbnRJbmZvOiBQYXltZW50SW5mbyA9IHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3RvcihkYXRhOiBQYXJ0aWFsPEJvbGV0b1ZhbGlkYXRlUmVzcG9uc2VTY2hlbWE+KSB7XG4gICAgc3VwZXIoZGF0YSk7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcbiAgfVxufVxuIl19