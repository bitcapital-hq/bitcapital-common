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
const Wallet_1 = require("../Wallet");
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
        if (data.source) {
            this.source = typeof data.source === "string" ? data.source : new Wallet_1.Wallet(data.source);
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFua1RyYW5zZmVyUGF5bWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9tb2RlbHMvUGF5bWVudC9CYW5rVHJhbnNmZXJQYXltZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscURBQXlEO0FBQ3pELHFDQUF3RDtBQUN4RCxzQ0FBaUQ7QUFDakQsaURBQWtFO0FBV2xFLE1BQWEsbUJBQW9CLFNBQVEsZ0JBQVM7SUFRaEQsWUFBWSxJQUF3QztRQUNsRCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFSQSxXQUFNLEdBQW9CLFNBQVMsQ0FBQztRQUNwQyxTQUFJLEdBQVcsU0FBUyxDQUFDO1FBQ3pCLHFCQUFnQixHQUFXLFNBQVMsQ0FBQztRQUNyQyxvQkFBZSxHQUFZLFNBQVMsQ0FBQztRQUNyQyxXQUFNLEdBQVcsU0FBUyxDQUFDO1FBQzNCLGlCQUFZLEdBQWlCLFNBQVMsQ0FBQztRQUtuRCxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUUxQixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksZUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN2RjtJQUNILENBQUM7Q0FDRjtBQWhCZTtJQUFiLDRCQUFVLEVBQUU7O21EQUFxQztBQUNwQztJQUFiLDRCQUFVLEVBQUU7O2lEQUEwQjtBQUN6QjtJQUFiLDRCQUFVLEVBQUU7OzZEQUFzQztBQUNyQztJQUFiLDRCQUFVLEVBQUU7OzREQUFzQztBQUNyQztJQUFiLDRCQUFVLEVBQUU7O21EQUE0QjtBQUMzQjtJQUFiLDRCQUFVLEVBQUU7OEJBQWUsMkJBQVk7eURBQWE7QUFOdkQsa0RBaUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSXNOb3RFbXB0eSwgSXNPcHRpb25hbCB9IGZyb20gXCJjbGFzcy12YWxpZGF0b3JcIjtcbmltcG9ydCB7IEJhc2VNb2RlbCwgQmFzZU1vZGVsU2NoZW1hIH0gZnJvbSBcIi4uLy4uL2Jhc2VcIjtcbmltcG9ydCB7IFdhbGxldCwgV2FsbGV0U2NoZW1hIH0gZnJvbSBcIi4uL1dhbGxldFwiO1xuaW1wb3J0IHsgQmFua1RyYW5zZmVyLCBCYW5rVHJhbnNmZXJTY2hlbWEgfSBmcm9tIFwiLi9CYW5rVHJhbnNmZXJcIjtcblxuZXhwb3J0IGludGVyZmFjZSBCYW5rVHJhbnNmZXJQYXltZW50U2NoZW1hIGV4dGVuZHMgQmFzZU1vZGVsU2NoZW1hIHtcbiAgdHlwZTogc3RyaW5nO1xuICBiaXRjYXBpdGFsQ29yZUlkOiBzdHJpbmc7XG4gIHRyYW5zYWN0aW9uQ29kZT86IHN0cmluZztcbiAgc291cmNlOiBXYWxsZXRTY2hlbWEgfCBzdHJpbmc7XG4gIGFtb3VudDogc3RyaW5nO1xuICBiYW5rVHJhbnNmZXI6IEJhbmtUcmFuc2ZlclNjaGVtYTtcbn1cblxuZXhwb3J0IGNsYXNzIEJhbmtUcmFuc2ZlclBheW1lbnQgZXh0ZW5kcyBCYXNlTW9kZWwgaW1wbGVtZW50cyBCYW5rVHJhbnNmZXJQYXltZW50U2NoZW1hIHtcbiAgQElzTm90RW1wdHkoKSBzb3VyY2U6IFdhbGxldCB8IHN0cmluZyA9IHVuZGVmaW5lZDtcbiAgQElzTm90RW1wdHkoKSB0eXBlOiBzdHJpbmcgPSB1bmRlZmluZWQ7XG4gIEBJc05vdEVtcHR5KCkgYml0Y2FwaXRhbENvcmVJZDogc3RyaW5nID0gdW5kZWZpbmVkO1xuICBASXNPcHRpb25hbCgpIHRyYW5zYWN0aW9uQ29kZT86IHN0cmluZyA9IHVuZGVmaW5lZDtcbiAgQElzTm90RW1wdHkoKSBhbW91bnQ6IHN0cmluZyA9IHVuZGVmaW5lZDtcbiAgQElzTm90RW1wdHkoKSBiYW5rVHJhbnNmZXI6IEJhbmtUcmFuc2ZlciA9IHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3RvcihkYXRhOiBQYXJ0aWFsPEJhbmtUcmFuc2ZlclBheW1lbnRTY2hlbWE+KSB7XG4gICAgc3VwZXIoZGF0YSk7XG5cbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xuXG4gICAgaWYgKGRhdGEuc291cmNlKSB7XG4gICAgICB0aGlzLnNvdXJjZSA9IHR5cGVvZiBkYXRhLnNvdXJjZSA9PT0gXCJzdHJpbmdcIiA/IGRhdGEuc291cmNlIDogbmV3IFdhbGxldChkYXRhLnNvdXJjZSk7XG4gICAgfVxuICB9XG59XG4iXX0=