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
        this.expiresAt = data.expiresAt && data.expiresAt instanceof Date ? data.expiresAt : new Date(data.expiresAt);
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
        this.calculationDate =
            data.calculationDate && data.calculationDate instanceof Date
                ? data.calculationDate
                : new Date(data.calculationDate);
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
        this.expiresAt = data.expiresAt && data.expiresAt instanceof Date ? data.expiresAt : new Date(data.expiresAt);
        this.paymentDeadline =
            data.paymentDeadline && data.paymentDeadline instanceof Date
                ? data.paymentDeadline
                : new Date(data.paymentDeadline);
        this.traders = data.traders && data.traders instanceof TradersInfo ? data.traders : new TradersInfo(data.traders);
        this.amountDetails =
            data.amountDetails && data.amountDetails instanceof PaymentAmountDetails
                ? data.amountDetails
                : new PaymentAmountDetails(data.amountDetails);
        this.acceptPartialAmount =
            data.acceptPartialAmount && data.acceptPartialAmount instanceof PaymentAmountDetails
                ? data.acceptPartialAmount
                : new PartialAmountDetails(data.acceptPartialAmount);
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
        this.boletoInfo = data.boletoInfo && new BoletoInfo(data.boletoInfo);
        this.paymentInfo = data.paymentInfo && new PaymentInfo(data.paymentInfo);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm9sZXRvVmFsaWRhdGVSZXNwb25zZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9tb2RlbHMvQm9sZXRvL0JvbGV0b1ZhbGlkYXRlUmVzcG9uc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxxREFBNkM7QUFDN0MscUNBQXdEO0FBVXhELE1BQWEsVUFBVTtJQU9yQixZQUFZLElBQStCO1FBTjdCLGdCQUFXLEdBQVcsU0FBUyxDQUFDO1FBQ2hDLFdBQU0sR0FBVyxTQUFTLENBQUM7UUFDM0IsY0FBUyxHQUFTLFNBQVMsQ0FBQztRQUM1QixzQkFBaUIsR0FBWSxTQUFTLENBQUM7UUFDdkMsa0JBQWEsR0FBVyxTQUFTLENBQUM7UUFHOUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLFlBQVksSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDaEgsQ0FBQztDQUNGO0FBWGU7SUFBYiw0QkFBVSxFQUFFOzsrQ0FBaUM7QUFDaEM7SUFBYiw0QkFBVSxFQUFFOzswQ0FBNEI7QUFDM0I7SUFBYiw0QkFBVSxFQUFFOzhCQUFZLElBQUk7NkNBQWE7QUFDNUI7SUFBYiw0QkFBVSxFQUFFOztxREFBd0M7QUFDdkM7SUFBYiw0QkFBVSxFQUFFOztpREFBbUM7QUFMbEQsZ0NBWUM7QUFTRCxNQUFhLFdBQVc7SUFNdEIsWUFBWSxJQUFnQztRQUw5QixjQUFTLEdBQVcsU0FBUyxDQUFDO1FBQzlCLHNCQUFpQixHQUFXLFNBQVMsQ0FBQztRQUN0QyxjQUFTLEdBQVcsU0FBUyxDQUFDO1FBQzlCLGtCQUFhLEdBQVcsU0FBUyxDQUFDO1FBRzlDLE1BQU0s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RCxNQUFhLHNCQUF1QixTQUFRLGdCQUFTO0lBS25ELFlBQVksSUFBMkM7UUFDckQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBTEEsU0FBSSxHQUFZLFNBQVMsQ0FBQztRQUMxQixlQUFVLEdBQWUsU0FBUyxDQUFDO1FBQ25DLGdCQUFXLEdBQWdCLFNBQVMsQ0FBQztRQUtqRCxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUUxQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDM0UsQ0FBQztDQUNGO0FBWmU7SUFBYiw0QkFBVSxFQUFFOztvREFBMkI7QUFDMUI7SUFBYiw0QkFBVSxFQUFFOzhCQUFhLFVBQVU7MERBQWE7QUFDbkM7SUFBYiw0QkFBVSxFQUFFOzhCQUFjLFdBQVc7MkRBQWE7QUFIckQsd0RBYUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJc05vdEVtcHR5IH0gZnJvbSBcImNsYXNzLXZhbGlkYXRvclwiO1xyXG5pbXBvcnQgeyBCYXNlTW9kZWwsIEJhc2VNb2RlbFNjaGVtYSB9IGZyb20gXCIuLi8uLi9iYXNlXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJvbGV0b0luZm9TY2hlbWEge1xyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgYW1vdW50OiBudW1iZXI7XHJcbiAgZXhwaXJlc0F0OiBEYXRlIHwgc3RyaW5nO1xyXG4gIGhhc0V4cGlyYXRpb25EYXRlOiBib29sZWFuO1xyXG4gIGJhcmNvZGVOdW1iZXI6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJvbGV0b0luZm8gaW1wbGVtZW50cyBCb2xldG9JbmZvU2NoZW1hIHtcclxuICBASXNOb3RFbXB0eSgpIGRlc2NyaXB0aW9uOiBzdHJpbmcgPSB1bmRlZmluZWQ7XHJcbiAgQElzTm90RW1wdHkoKSBhbW91bnQ6IG51bWJlciA9IHVuZGVmaW5lZDtcclxuICBASXNOb3RFbXB0eSgpIGV4cGlyZXNBdDogRGF0ZSA9IHVuZGVmaW5lZDtcclxuICBASXNOb3RFbXB0eSgpIGhhc0V4cGlyYXRpb25EYXRlOiBib29sZWFuID0gdW5kZWZpbmVkO1xyXG4gIEBJc05vdEVtcHR5KCkgYmFyY29kZU51bWJlcjogc3RyaW5nID0gdW5kZWZpbmVkO1xyXG5cclxuICBjb25zdHJ1Y3RvcihkYXRhOiBQYXJ0aWFsPEJvbGV0b0luZm9TY2hlbWE+KSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xyXG5cclxuICAgIHRoaXMuZXhwaXJlc0F0ID0gZGF0YS5leHBpcmVzQXQgJiYgZGF0YS5leHBpcmVzQXQgaW5zdGFuY2VvZiBEYXRlID8gZGF0YS5leHBpcmVzQXQgOiBuZXcgRGF0ZShkYXRhLmV4cGlyZXNBdCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRyYWRlcnNJbmZvU2NoZW1hIHtcclxuICByZWNpcGllbnQ6IHN0cmluZztcclxuICByZWNpcGllbnREb2N1bWVudDogc3RyaW5nO1xyXG4gIHBheWVyTmFtZTogc3RyaW5nO1xyXG4gIHBheWVyRG9jdW1lbnQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRyYWRlcnNJbmZvIGltcGxlbWVudHMgVHJhZGVyc0luZm9TY2hlbWEge1xyXG4gIEBJc05vdEVtcHR5KCkgcmVjaXBpZW50OiBzdHJpbmcgPSB1bmRlZmluZWQ7XHJcbiAgQElzTm90RW1wdHkoKSByZWNpcGllbnREb2N1bWVudDogc3RyaW5nID0gdW5kZWZpbmVkO1xyXG4gIEBJc05vdEVtcHR5KCkgcGF5ZXJOYW1lOiBzdHJpbmcgPSB1bmRlZmluZWQ7XHJcbiAgQElzTm90RW1wdHkoKSBwYXllckRvY3VtZW50OiBzdHJpbmcgPSB1bmRlZmluZWQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRhdGE6IFBhcnRpYWw8VHJhZGVyc0luZm9TY2hlbWE+KSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQYXJ0aWFsQW1vdW50RGV0YWlsc1NjaGVtYSB7XHJcbiAgY29kZTogbnVtYmVyO1xyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQYXJ0aWFsQW1vdW50RGV0YWlscyBpbXBsZW1lbnRzIFBhcnRpYWxBbW91bnREZXRhaWxzU2NoZW1hIHtcclxuICBASXNOb3RFbXB0eSgpIGNvZGU6IG51bWJlciA9IHVuZGVmaW5lZDtcclxuICBASXNOb3RFbXB0eSgpIGRlc2NyaXB0aW9uOiBzdHJpbmcgPSB1bmRlZmluZWQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRhdGE6IFBhcnRpYWw8UGFydGlhbEFtb3VudERldGFpbHNTY2hlbWE+KSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQYXltZW50QW1vdW50RGV0YWlsc1NjaGVtYSB7XHJcbiAgaW50ZXJlc3RBbW91bnQ6IG51bWJlcjtcclxuICBkaXNjb3VudDogbnVtYmVyO1xyXG4gIGZpbmVBbW91bnQ6IG51bWJlcjtcclxuICB0b3RhbEFtb3VudDogbnVtYmVyO1xyXG4gIHBheW1lbnRBbW91bnRVcGRhdGVkOiBudW1iZXI7XHJcbiAgY2FsY3VsYXRpb25EYXRlOiBEYXRlIHwgc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUGF5bWVudEFtb3VudERldGFpbHMgaW1wbGVtZW50cyBQYXltZW50QW1vdW50RGV0YWlsc1NjaGVtYSB7XHJcbiAgQElzTm90RW1wdHkoKSBpbnRlcmVzdEFtb3VudDogbnVtYmVyID0gdW5kZWZpbmVkO1xyXG4gIEBJc05vdEVtcHR5KCkgZGlzY291bnQ6IG51bWJlciA9IHVuZGVmaW5lZDtcclxuICBASXNOb3RFbXB0eSgpIGZpbmVBbW91bnQ6IG51bWJlciA9IHVuZGVmaW5lZDtcclxuICBASXNOb3RFbXB0eSgpIHRvdGFsQW1vdW50OiBudW1iZXIgPSB1bmRlZmluZWQ7XHJcbiAgQElzTm90RW1wdHkoKSBwYXltZW50QW1vdW50VXBkYXRlZDogbnVtYmVyID0gdW5kZWZpbmVkO1xyXG4gIEBJc05vdEVtcHR5KCkgY2FsY3VsYXRpb25EYXRlOiBEYXRlID0gdW5kZWZpbmVkO1xyXG5cclxuICBjb25zdHJ1Y3RvcihkYXRhOiBQYXJ0aWFsPFBheW1lbnRBbW91bnREZXRhaWxzU2NoZW1hPikge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcclxuXHJcbiAgICB0aGlzLmNhbGN1bGF0aW9uRGF0ZSA9XHJcbiAgICAgIGRhdGEuY2FsY3VsYXRpb25EYXRlICYmIGRhdGEuY2FsY3VsYXRpb25EYXRlIGluc3RhbmNlb2YgRGF0ZVxyXG4gICAgICAgID8gZGF0YS5jYWxjdWxhdGlvbkRhdGVcclxuICAgICAgICA6IG5ldyBEYXRlKGRhdGEuY2FsY3VsYXRpb25EYXRlKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGF5bWVudEluZm9TY2hlbWEge1xyXG4gIGNvbnRyYWN0SWQ6IHN0cmluZztcclxuICBpZE51bWJlcjogc3RyaW5nO1xyXG4gIHRyYWRlcnM6IFRyYWRlcnNJbmZvO1xyXG4gIGV4cGlyZXNBdDogRGF0ZSB8IHN0cmluZztcclxuICB0b3RhbEFtb3VudDogbnVtYmVyO1xyXG4gIGFtb3VudERldGFpbHM6IFBheW1lbnRBbW91bnREZXRhaWxzU2NoZW1hO1xyXG4gIGFjY2VwdFBhcnRpYWxBbW91bnQ6IFBhcnRpYWxBbW91bnREZXRhaWxzU2NoZW1hO1xyXG4gIGJhcmNvZGU6IHN0cmluZztcclxuICBkaWdpdGFibGVMaW5lOiBzdHJpbmc7XHJcbiAgcGF5bWVudERlYWRsaW5lOiBEYXRlIHwgc3RyaW5nO1xyXG4gIHZhbGlkRGF0ZTogYm9vbGVhbjtcclxuICBuZXh0QnVzaW5lc3NEYXk6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBheW1lbnRJbmZvIGltcGxlbWVudHMgUGF5bWVudEluZm9TY2hlbWEge1xyXG4gIEBJc05vdEVtcHR5KCkgY29udHJhY3RJZDogc3RyaW5nID0gdW5kZWZpbmVkO1xyXG4gIEBJc05vdEVtcHR5KCkgaWROdW1iZXI6IHN0cmluZyA9IHVuZGVmaW5lZDtcclxuICBASXNOb3RFbXB0eSgpIHRyYWRlcnM6IFRyYWRlcnNJbmZvID0gdW5kZWZpbmVkO1xyXG4gIEBJc05vdEVtcHR5KCkgZXhwaXJlc0F0OiBEYXRlID0gdW5kZWZpbmVkO1xyXG4gIEBJc05vdEVtcHR5KCkgdG90YWxBbW91bnQ6IG51bWJlciA9IHVuZGVmaW5lZDtcclxuICBASXNOb3RFbXB0eSgpIGFtb3VudERldGFpbHM6IFBheW1lbnRBbW91bnREZXRhaWxzID0gdW5kZWZpbmVkO1xyXG4gIEBJc05vdEVtcHR5KCkgYWNjZXB0UGFydGlhbEFtb3VudDogUGFydGlhbEFtb3VudERldGFpbHMgPSB1bmRlZmluZWQ7XHJcbiAgQElzTm90RW1wdHkoKSBiYXJjb2RlOiBzdHJpbmcgPSB1bmRlZmluZWQ7XHJcbiAgQElzTm90RW1wdHkoKSBkaWdpdGFibGVMaW5lOiBzdHJpbmcgPSB1bmRlZmluZWQ7XHJcbiAgQElzTm90RW1wdHkoKSBwYXltZW50RGVhZGxpbmU6IERhdGUgPSB1bmRlZmluZWQ7XHJcbiAgQElzTm90RW1wdHkoKSB2YWxpZERhdGU6IGJvb2xlYW4gPSB1bmRlZmluZWQ7XHJcbiAgQElzTm90RW1wdHkoKSBuZXh0QnVzaW5lc3NEYXk6IHN0cmluZyA9IHVuZGVmaW5lZDtcclxuXHJcbiAgY29uc3RydWN0b3IoZGF0YTogUGFydGlhbDxQYXltZW50SW5mb1NjaGVtYT4pIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XHJcblxyXG4gICAgdGhpcy5leHBpcmVzQXQgPSBkYXRhLmV4cGlyZXNBdCAmJiBkYXRhLmV4cGlyZXNBdCBpbnN0YW5jZW9mIERhdGUgPyBkYXRhLmV4cGlyZXNBdCA6IG5ldyBEYXRlKGRhdGEuZXhwaXJlc0F0KTtcclxuICAgIHRoaXMucGF5bWVudERlYWRsaW5lID1cclxuICAgICAgZGF0YS5wYXltZW50RGVhZGxpbmUgJiYgZGF0YS5wYXltZW50RGVhZGxpbmUgaW5zdGFuY2VvZiBEYXRlXHJcbiAgICAgICAgPyBkYXRhLnBheW1lbnREZWFkbGluZVxyXG4gICAgICAgIDogbmV3IERhdGUoZGF0YS5wYXltZW50RGVhZGxpbmUpO1xyXG4gICAgdGhpcy50cmFkZXJzID0gZGF0YS50cmFkZXJzICYmIGRhdGEudHJhZGVycyBpbnN0YW5jZW9mIFRyYWRlcnNJbmZvID8gZGF0YS50cmFkZXJzIDogbmV3IFRyYWRlcnNJbmZvKGRhdGEudHJhZGVycyk7XHJcbiAgICB0aGlzLmFtb3VudERldGFpbHMgPVxyXG4gICAgICBkYXRhLmFtb3VudERldGFpbHMgJiYgZGF0YS5hbW91bnREZXRhaWxzIGluc3RhbmNlb2YgUGF5bWVudEFtb3VudERldGFpbHNcclxuICAgICAgICA/IGRhdGEuYW1vdW50RGV0YWlsc1xyXG4gICAgICAgIDogbmV3IFBheW1lbnRBbW91bnREZXRhaWxzKGRhdGEuYW1vdW50RGV0YWlscyk7XHJcbiAgICB0aGlzLmFjY2VwdFBhcnRpYWxBbW91bnQgPVxyXG4gICAgICBkYXRhLmFjY2VwdFBhcnRpYWxBbW91bnQgJiYgZGF0YS5hY2NlcHRQYXJ0aWFsQW1vdW50IGluc3RhbmNlb2YgUGF5bWVudEFtb3VudERldGFpbHNcclxuICAgICAgICA/IGRhdGEuYWNjZXB0UGFydGlhbEFtb3VudFxyXG4gICAgICAgIDogbmV3IFBhcnRpYWxBbW91bnREZXRhaWxzKGRhdGEuYWNjZXB0UGFydGlhbEFtb3VudCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJvbGV0b1ZhbGlkYXRlUmVzcG9uc2VTY2hlbWEgZXh0ZW5kcyBCYXNlTW9kZWxTY2hlbWEge1xyXG4gIHBhaWQ6IGJvb2xlYW47XHJcbiAgYm9sZXRvSW5mbzogQm9sZXRvSW5mb1NjaGVtYTtcclxuICBwYXltZW50SW5mbzogUGF5bWVudEluZm9TY2hlbWE7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCb2xldG9WYWxpZGF0ZVJlc3BvbnNlIGV4dGVuZHMgQmFzZU1vZGVsIGltcGxlbWVudHMgQm9sZXRvVmFsaWRhdGVSZXNwb25zZVNjaGVtYSB7XHJcbiAgQElzTm90RW1wdHkoKSBwYWlkOiBib29sZWFuID0gdW5kZWZpbmVkO1xyXG4gIEBJc05vdEVtcHR5KCkgYm9sZXRvSW5mbzogQm9sZXRvSW5mbyA9IHVuZGVmaW5lZDtcclxuICBASXNOb3RFbXB0eSgpIHBheW1lbnRJbmZvOiBQYXltZW50SW5mbyA9IHVuZGVmaW5lZDtcclxuXHJcbiAgY29uc3RydWN0b3IoZGF0YTogUGFydGlhbDxCb2xldG9WYWxpZGF0ZVJlc3BvbnNlU2NoZW1hPikge1xyXG4gICAgc3VwZXIoZGF0YSk7XHJcblxyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcclxuXHJcbiAgICB0aGlzLmJvbGV0b0luZm8gPSBkYXRhLmJvbGV0b0luZm8gJiYgbmV3IEJvbGV0b0luZm8oZGF0YS5ib2xldG9JbmZvKTtcclxuICAgIHRoaXMucGF5bWVudEluZm8gPSBkYXRhLnBheW1lbnRJbmZvICYmIG5ldyBQYXltZW50SW5mbyhkYXRhLnBheW1lbnRJbmZvKTtcclxuICB9XHJcbn1cclxuIl19