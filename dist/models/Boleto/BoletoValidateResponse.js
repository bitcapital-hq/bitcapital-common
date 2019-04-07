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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm9sZXRvVmFsaWRhdGVSZXNwb25zZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9tb2RlbHMvQm9sZXRvL0JvbGV0b1ZhbGlkYXRlUmVzcG9uc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxxREFBNkM7QUFDN0MscUNBQXdEO0FBVXhELE1BQWEsVUFBVTtJQU9yQixZQUFZLElBQStCO1FBTjdCLGdCQUFXLEdBQVcsU0FBUyxDQUFDO1FBQ2hDLFdBQU0sR0FBVyxTQUFTLENBQUM7UUFDM0IsY0FBUyxHQUFTLFNBQVMsQ0FBQztRQUM1QixzQkFBaUIsR0FBWSxTQUFTLENBQUM7UUFDdkMsa0JBQWEsR0FBVyxTQUFTLENBQUM7UUFHOUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLFlBQVksSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDaEgsQ0FBQztDQUNGO0FBWGU7SUFBYiw0QkFBVSxFQUFFOzsrQ0FBaUM7QUFDaEM7SUFBYiw0QkFBVSxFQUFFOzswQ0FBNEI7QUFDM0I7SUFBYiw0QkFBVSxFQUFFOzhCQUFZLElBQUk7NkNBQWE7QUFDNUI7SUFBYiw0QkFBVSxFQUFFOztxREFBd0M7QUFDdkM7SUFBYiw0QkFBVSxFQUFFOztpREFBbUM7QUFMbEQsZ0NBWUM7QUFTRCxNQUFhLFdBQVc7SUFNdEIsWUFBWSxJQUFnQztRQUw5QixjQUFTLEdBQVcsU0FBUyxDQUFDO1FBQzlCLHNCQUFpQixHQUFXLFNBQVMsQ0FBQztRQUN0QyxjQUFTLEdBQVcsU0FBUyxDQUFDO1FBQzlCLGtCQUFhLEdBQVcsU0FBUyxDQUFDO1FBRzlDLE1BQU0s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RCxNQUFhLHNCQUF1QixTQUFRLGdCQUFTO0lBS25ELFlBQVksSUFBMkM7UUFDckQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBTEEsU0FBSSxHQUFZLFNBQVMsQ0FBQztRQUMxQixlQUFVLEdBQWUsU0FBUyxDQUFDO1FBQ25DLGdCQUFXLEdBQWdCLFNBQVMsQ0FBQztRQUtqRCxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUUxQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDM0UsQ0FBQztDQUNGO0FBWmU7SUFBYiw0QkFBVSxFQUFFOztvREFBMkI7QUFDMUI7SUFBYiw0QkFBVSxFQUFFOzhCQUFhLFVBQVU7MERBQWE7QUFDbkM7SUFBYiw0QkFBVSxFQUFFOzhCQUFjLFdBQVc7MkRBQWE7QUFIckQsd0RBYUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJc05vdEVtcHR5IH0gZnJvbSBcImNsYXNzLXZhbGlkYXRvclwiO1xuaW1wb3J0IHsgQmFzZU1vZGVsLCBCYXNlTW9kZWxTY2hlbWEgfSBmcm9tIFwiLi4vLi4vYmFzZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJvbGV0b0luZm9TY2hlbWEge1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBhbW91bnQ6IG51bWJlcjtcbiAgZXhwaXJlc0F0OiBEYXRlIHwgc3RyaW5nO1xuICBoYXNFeHBpcmF0aW9uRGF0ZTogYm9vbGVhbjtcbiAgYmFyY29kZU51bWJlcjogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgQm9sZXRvSW5mbyBpbXBsZW1lbnRzIEJvbGV0b0luZm9TY2hlbWEge1xuICBASXNOb3RFbXB0eSgpIGRlc2NyaXB0aW9uOiBzdHJpbmcgPSB1bmRlZmluZWQ7XG4gIEBJc05vdEVtcHR5KCkgYW1vdW50OiBudW1iZXIgPSB1bmRlZmluZWQ7XG4gIEBJc05vdEVtcHR5KCkgZXhwaXJlc0F0OiBEYXRlID0gdW5kZWZpbmVkO1xuICBASXNOb3RFbXB0eSgpIGhhc0V4cGlyYXRpb25EYXRlOiBib29sZWFuID0gdW5kZWZpbmVkO1xuICBASXNOb3RFbXB0eSgpIGJhcmNvZGVOdW1iZXI6IHN0cmluZyA9IHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3RvcihkYXRhOiBQYXJ0aWFsPEJvbGV0b0luZm9TY2hlbWE+KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcblxuICAgIHRoaXMuZXhwaXJlc0F0ID0gZGF0YS5leHBpcmVzQXQgJiYgZGF0YS5leHBpcmVzQXQgaW5zdGFuY2VvZiBEYXRlID8gZGF0YS5leHBpcmVzQXQgOiBuZXcgRGF0ZShkYXRhLmV4cGlyZXNBdCk7XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFkZXJzSW5mb1NjaGVtYSB7XG4gIHJlY2lwaWVudDogc3RyaW5nO1xuICByZWNpcGllbnREb2N1bWVudDogc3RyaW5nO1xuICBwYXllck5hbWU6IHN0cmluZztcbiAgcGF5ZXJEb2N1bWVudDogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgVHJhZGVyc0luZm8gaW1wbGVtZW50cyBUcmFkZXJzSW5mb1NjaGVtYSB7XG4gIEBJc05vdEVtcHR5KCkgcmVjaXBpZW50OiBzdHJpbmcgPSB1bmRlZmluZWQ7XG4gIEBJc05vdEVtcHR5KCkgcmVjaXBpZW50RG9jdW1lbnQ6IHN0cmluZyA9IHVuZGVmaW5lZDtcbiAgQElzTm90RW1wdHkoKSBwYXllck5hbWU6IHN0cmluZyA9IHVuZGVmaW5lZDtcbiAgQElzTm90RW1wdHkoKSBwYXllckRvY3VtZW50OiBzdHJpbmcgPSB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IoZGF0YTogUGFydGlhbDxUcmFkZXJzSW5mb1NjaGVtYT4pIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFydGlhbEFtb3VudERldGFpbHNTY2hlbWEge1xuICBjb2RlOiBudW1iZXI7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBQYXJ0aWFsQW1vdW50RGV0YWlscyBpbXBsZW1lbnRzIFBhcnRpYWxBbW91bnREZXRhaWxzU2NoZW1hIHtcbiAgQElzTm90RW1wdHkoKSBjb2RlOiBudW1iZXIgPSB1bmRlZmluZWQ7XG4gIEBJc05vdEVtcHR5KCkgZGVzY3JpcHRpb246IHN0cmluZyA9IHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3RvcihkYXRhOiBQYXJ0aWFsPFBhcnRpYWxBbW91bnREZXRhaWxzU2NoZW1hPikge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBQYXltZW50QW1vdW50RGV0YWlsc1NjaGVtYSB7XG4gIGludGVyZXN0QW1vdW50OiBudW1iZXI7XG4gIGRpc2NvdW50OiBudW1iZXI7XG4gIGZpbmVBbW91bnQ6IG51bWJlcjtcbiAgdG90YWxBbW91bnQ6IG51bWJlcjtcbiAgcGF5bWVudEFtb3VudFVwZGF0ZWQ6IG51bWJlcjtcbiAgY2FsY3VsYXRpb25EYXRlOiBEYXRlIHwgc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgUGF5bWVudEFtb3VudERldGFpbHMgaW1wbGVtZW50cyBQYXltZW50QW1vdW50RGV0YWlsc1NjaGVtYSB7XG4gIEBJc05vdEVtcHR5KCkgaW50ZXJlc3RBbW91bnQ6IG51bWJlciA9IHVuZGVmaW5lZDtcbiAgQElzTm90RW1wdHkoKSBkaXNjb3VudDogbnVtYmVyID0gdW5kZWZpbmVkO1xuICBASXNOb3RFbXB0eSgpIGZpbmVBbW91bnQ6IG51bWJlciA9IHVuZGVmaW5lZDtcbiAgQElzTm90RW1wdHkoKSB0b3RhbEFtb3VudDogbnVtYmVyID0gdW5kZWZpbmVkO1xuICBASXNOb3RFbXB0eSgpIHBheW1lbnRBbW91bnRVcGRhdGVkOiBudW1iZXIgPSB1bmRlZmluZWQ7XG4gIEBJc05vdEVtcHR5KCkgY2FsY3VsYXRpb25EYXRlOiBEYXRlID0gdW5kZWZpbmVkO1xuXG4gIGNvbnN0cnVjdG9yKGRhdGE6IFBhcnRpYWw8UGF5bWVudEFtb3VudERldGFpbHNTY2hlbWE+KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcblxuICAgIHRoaXMuY2FsY3VsYXRpb25EYXRlID1cbiAgICAgIGRhdGEuY2FsY3VsYXRpb25EYXRlICYmIGRhdGEuY2FsY3VsYXRpb25EYXRlIGluc3RhbmNlb2YgRGF0ZVxuICAgICAgICA/IGRhdGEuY2FsY3VsYXRpb25EYXRlXG4gICAgICAgIDogbmV3IERhdGUoZGF0YS5jYWxjdWxhdGlvbkRhdGUpO1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGF5bWVudEluZm9TY2hlbWEge1xuICBjb250cmFjdElkOiBzdHJpbmc7XG4gIGlkTnVtYmVyOiBzdHJpbmc7XG4gIHRyYWRlcnM6IFRyYWRlcnNJbmZvO1xuICBleHBpcmVzQXQ6IERhdGUgfCBzdHJpbmc7XG4gIHRvdGFsQW1vdW50OiBudW1iZXI7XG4gIGFtb3VudERldGFpbHM6IFBheW1lbnRBbW91bnREZXRhaWxzU2NoZW1hO1xuICBhY2NlcHRQYXJ0aWFsQW1vdW50OiBQYXJ0aWFsQW1vdW50RGV0YWlsc1NjaGVtYTtcbiAgYmFyY29kZTogc3RyaW5nO1xuICBkaWdpdGFibGVMaW5lOiBzdHJpbmc7XG4gIHBheW1lbnREZWFkbGluZTogRGF0ZSB8IHN0cmluZztcbiAgdmFsaWREYXRlOiBib29sZWFuO1xuICBuZXh0QnVzaW5lc3NEYXk6IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIFBheW1lbnRJbmZvIGltcGxlbWVudHMgUGF5bWVudEluZm9TY2hlbWEge1xuICBASXNOb3RFbXB0eSgpIGNvbnRyYWN0SWQ6IHN0cmluZyA9IHVuZGVmaW5lZDtcbiAgQElzTm90RW1wdHkoKSBpZE51bWJlcjogc3RyaW5nID0gdW5kZWZpbmVkO1xuICBASXNOb3RFbXB0eSgpIHRyYWRlcnM6IFRyYWRlcnNJbmZvID0gdW5kZWZpbmVkO1xuICBASXNOb3RFbXB0eSgpIGV4cGlyZXNBdDogRGF0ZSA9IHVuZGVmaW5lZDtcbiAgQElzTm90RW1wdHkoKSB0b3RhbEFtb3VudDogbnVtYmVyID0gdW5kZWZpbmVkO1xuICBASXNOb3RFbXB0eSgpIGFtb3VudERldGFpbHM6IFBheW1lbnRBbW91bnREZXRhaWxzID0gdW5kZWZpbmVkO1xuICBASXNOb3RFbXB0eSgpIGFjY2VwdFBhcnRpYWxBbW91bnQ6IFBhcnRpYWxBbW91bnREZXRhaWxzID0gdW5kZWZpbmVkO1xuICBASXNOb3RFbXB0eSgpIGJhcmNvZGU6IHN0cmluZyA9IHVuZGVmaW5lZDtcbiAgQElzTm90RW1wdHkoKSBkaWdpdGFibGVMaW5lOiBzdHJpbmcgPSB1bmRlZmluZWQ7XG4gIEBJc05vdEVtcHR5KCkgcGF5bWVudERlYWRsaW5lOiBEYXRlID0gdW5kZWZpbmVkO1xuICBASXNOb3RFbXB0eSgpIHZhbGlkRGF0ZTogYm9vbGVhbiA9IHVuZGVmaW5lZDtcbiAgQElzTm90RW1wdHkoKSBuZXh0QnVzaW5lc3NEYXk6IHN0cmluZyA9IHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3RvcihkYXRhOiBQYXJ0aWFsPFBheW1lbnRJbmZvU2NoZW1hPikge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XG5cbiAgICB0aGlzLmV4cGlyZXNBdCA9IGRhdGEuZXhwaXJlc0F0ICYmIGRhdGEuZXhwaXJlc0F0IGluc3RhbmNlb2YgRGF0ZSA/IGRhdGEuZXhwaXJlc0F0IDogbmV3IERhdGUoZGF0YS5leHBpcmVzQXQpO1xuICAgIHRoaXMucGF5bWVudERlYWRsaW5lID1cbiAgICAgIGRhdGEucGF5bWVudERlYWRsaW5lICYmIGRhdGEucGF5bWVudERlYWRsaW5lIGluc3RhbmNlb2YgRGF0ZVxuICAgICAgICA/IGRhdGEucGF5bWVudERlYWRsaW5lXG4gICAgICAgIDogbmV3IERhdGUoZGF0YS5wYXltZW50RGVhZGxpbmUpO1xuICAgIHRoaXMudHJhZGVycyA9IGRhdGEudHJhZGVycyAmJiBkYXRhLnRyYWRlcnMgaW5zdGFuY2VvZiBUcmFkZXJzSW5mbyA/IGRhdGEudHJhZGVycyA6IG5ldyBUcmFkZXJzSW5mbyhkYXRhLnRyYWRlcnMpO1xuICAgIHRoaXMuYW1vdW50RGV0YWlscyA9XG4gICAgICBkYXRhLmFtb3VudERldGFpbHMgJiYgZGF0YS5hbW91bnREZXRhaWxzIGluc3RhbmNlb2YgUGF5bWVudEFtb3VudERldGFpbHNcbiAgICAgICAgPyBkYXRhLmFtb3VudERldGFpbHNcbiAgICAgICAgOiBuZXcgUGF5bWVudEFtb3VudERldGFpbHMoZGF0YS5hbW91bnREZXRhaWxzKTtcbiAgICB0aGlzLmFjY2VwdFBhcnRpYWxBbW91bnQgPVxuICAgICAgZGF0YS5hY2NlcHRQYXJ0aWFsQW1vdW50ICYmIGRhdGEuYWNjZXB0UGFydGlhbEFtb3VudCBpbnN0YW5jZW9mIFBheW1lbnRBbW91bnREZXRhaWxzXG4gICAgICAgID8gZGF0YS5hY2NlcHRQYXJ0aWFsQW1vdW50XG4gICAgICAgIDogbmV3IFBhcnRpYWxBbW91bnREZXRhaWxzKGRhdGEuYWNjZXB0UGFydGlhbEFtb3VudCk7XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBCb2xldG9WYWxpZGF0ZVJlc3BvbnNlU2NoZW1hIGV4dGVuZHMgQmFzZU1vZGVsU2NoZW1hIHtcbiAgcGFpZDogYm9vbGVhbjtcbiAgYm9sZXRvSW5mbzogQm9sZXRvSW5mb1NjaGVtYTtcbiAgcGF5bWVudEluZm86IFBheW1lbnRJbmZvU2NoZW1hO1xufVxuXG5leHBvcnQgY2xhc3MgQm9sZXRvVmFsaWRhdGVSZXNwb25zZSBleHRlbmRzIEJhc2VNb2RlbCBpbXBsZW1lbnRzIEJvbGV0b1ZhbGlkYXRlUmVzcG9uc2VTY2hlbWEge1xuICBASXNOb3RFbXB0eSgpIHBhaWQ6IGJvb2xlYW4gPSB1bmRlZmluZWQ7XG4gIEBJc05vdEVtcHR5KCkgYm9sZXRvSW5mbzogQm9sZXRvSW5mbyA9IHVuZGVmaW5lZDtcbiAgQElzTm90RW1wdHkoKSBwYXltZW50SW5mbzogUGF5bWVudEluZm8gPSB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IoZGF0YTogUGFydGlhbDxCb2xldG9WYWxpZGF0ZVJlc3BvbnNlU2NoZW1hPikge1xuICAgIHN1cGVyKGRhdGEpO1xuXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcblxuICAgIHRoaXMuYm9sZXRvSW5mbyA9IGRhdGEuYm9sZXRvSW5mbyAmJiBuZXcgQm9sZXRvSW5mbyhkYXRhLmJvbGV0b0luZm8pO1xuICAgIHRoaXMucGF5bWVudEluZm8gPSBkYXRhLnBheW1lbnRJbmZvICYmIG5ldyBQYXltZW50SW5mbyhkYXRhLnBheW1lbnRJbmZvKTtcbiAgfVxufVxuIl19