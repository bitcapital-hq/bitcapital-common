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
const BankTransfer_1 = require("./BankTransfer");
class BankTransferPayment extends base_1.BaseModel {
    constructor(data) {
        super(data);
        this.source = undefined;
        this.type = undefined;
        this.bitcapitalCoreId = undefined;
        this.transactionCode = undefined;
        this.amount = undefined;
        this.bankTransfer = undefined;
        Object.assign(this, data);
    }
}
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Object)
], BankTransferPayment.prototype, "source", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], BankTransferPayment.prototype, "type", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], BankTransferPayment.prototype, "bitcapitalCoreId", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], BankTransferPayment.prototype, "transactionCode", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], BankTransferPayment.prototype, "amount", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", BankTransfer_1.BankTransfer)
], BankTransferPayment.prototype, "bankTransfer", void 0);
exports.BankTransferPayment = BankTransferPayment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFua1RyYW5zZmVyUGF5bWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9tb2RlbHMvUGF5bWVudC9CYW5rVHJhbnNmZXJQYXltZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscURBQXlEO0FBQ3pELHFDQUF3RDtBQUV4RCxpREFBOEM7QUFXOUMsTUFBYSxtQkFBb0IsU0FBUSxnQkFBUztJQVFoRCxZQUFZLElBQXdDO1FBQ2xELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQVJBLFdBQU0sR0FBb0IsU0FBUyxDQUFDO1FBQ3BDLFNBQUksR0FBVyxTQUFTLENBQUM7UUFDekIscUJBQWdCLEdBQVcsU0FBUyxDQUFDO1FBQ3JDLG9CQUFlLEdBQVksU0FBUyxDQUFDO1FBQ3JDLFdBQU0sR0FBVyxTQUFTLENBQUM7UUFDM0IsaUJBQVksR0FBaUIsU0FBUyxDQUFDO1FBSW5ELE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7Q0FDRjtBQVhlO0lBQWIsNEJBQVUsRUFBRTs7bURBQXFDO0FBQ3BDO0lBQWIsNEJBQVUsRUFBRTs7aURBQTBCO0FBQ3pCO0lBQWIsNEJBQVUsRUFBRTs7NkRBQXNDO0FBQ3JDO0lBQWIsNEJBQVUsRUFBRTs7NERBQXNDO0FBQ3JDO0lBQWIsNEJBQVUsRUFBRTs7bURBQTRCO0FBQzNCO0lBQWIsNEJBQVUsRUFBRTs4QkFBZSwyQkFBWTt5REFBYTtBQU52RCxrREFZQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElzTm90RW1wdHksIElzT3B0aW9uYWwgfSBmcm9tIFwiY2xhc3MtdmFsaWRhdG9yXCI7XG5pbXBvcnQgeyBCYXNlTW9kZWwsIEJhc2VNb2RlbFNjaGVtYSB9IGZyb20gXCIuLi8uLi9iYXNlXCI7XG5pbXBvcnQgeyBXYWxsZXQsIFdhbGxldFNjaGVtYSB9IGZyb20gXCIuLi9XYWxsZXRcIjtcbmltcG9ydCB7IEJhbmtUcmFuc2ZlciB9IGZyb20gXCIuL0JhbmtUcmFuc2ZlclwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJhbmtUcmFuc2ZlclBheW1lbnRTY2hlbWEgZXh0ZW5kcyBCYXNlTW9kZWxTY2hlbWEge1xuICB0eXBlOiBzdHJpbmc7XG4gIGJpdGNhcGl0YWxDb3JlSWQ6IHN0cmluZztcbiAgdHJhbnNhY3Rpb25Db2RlPzogc3RyaW5nO1xuICBzb3VyY2U6IFdhbGxldFNjaGVtYSB8IHN0cmluZztcbiAgYW1vdW50OiBzdHJpbmc7XG4gIGJhbmtUcmFuc2ZlcjogQmFua1RyYW5zZmVyO1xufVxuXG5leHBvcnQgY2xhc3MgQmFua1RyYW5zZmVyUGF5bWVudCBleHRlbmRzIEJhc2VNb2RlbCBpbXBsZW1lbnRzIEJhbmtUcmFuc2ZlclBheW1lbnRTY2hlbWEge1xuICBASXNOb3RFbXB0eSgpIHNvdXJjZTogV2FsbGV0IHwgc3RyaW5nID0gdW5kZWZpbmVkO1xuICBASXNOb3RFbXB0eSgpIHR5cGU6IHN0cmluZyA9IHVuZGVmaW5lZDtcbiAgQElzTm90RW1wdHkoKSBiaXRjYXBpdGFsQ29yZUlkOiBzdHJpbmcgPSB1bmRlZmluZWQ7XG4gIEBJc09wdGlvbmFsKCkgdHJhbnNhY3Rpb25Db2RlPzogc3RyaW5nID0gdW5kZWZpbmVkO1xuICBASXNOb3RFbXB0eSgpIGFtb3VudDogc3RyaW5nID0gdW5kZWZpbmVkO1xuICBASXNOb3RFbXB0eSgpIGJhbmtUcmFuc2ZlcjogQmFua1RyYW5zZmVyID0gdW5kZWZpbmVkO1xuXG4gIGNvbnN0cnVjdG9yKGRhdGE6IFBhcnRpYWw8QmFua1RyYW5zZmVyUGF5bWVudFNjaGVtYT4pIHtcbiAgICBzdXBlcihkYXRhKTtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xuICB9XG59XG4iXX0=