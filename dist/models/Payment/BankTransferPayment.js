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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFua1RyYW5zZmVyUGF5bWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9tb2RlbHMvUGF5bWVudC9CYW5rVHJhbnNmZXJQYXltZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscURBQXlEO0FBQ3pELHFDQUF3RDtBQUN4RCxzQ0FBaUQ7QUFDakQsaURBQWtFO0FBV2xFLE1BQWEsbUJBQW9CLFNBQVEsZ0JBQVM7SUFRaEQsWUFBWSxJQUF3QztRQUNsRCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFSQSxXQUFNLEdBQW9CLFNBQVMsQ0FBQztRQUNwQyxTQUFJLEdBQVcsU0FBUyxDQUFDO1FBQ3pCLHFCQUFnQixHQUFXLFNBQVMsQ0FBQztRQUNyQyxvQkFBZSxHQUFZLFNBQVMsQ0FBQztRQUNyQyxXQUFNLEdBQVcsU0FBUyxDQUFDO1FBQzNCLGlCQUFZLEdBQWlCLFNBQVMsQ0FBQztRQUtuRCxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUUxQixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksZUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN2RjtJQUNILENBQUM7Q0FDRjtBQWhCZTtJQUFiLDRCQUFVLEVBQUU7O21EQUFxQztBQUNwQztJQUFiLDRCQUFVLEVBQUU7O2lEQUEwQjtBQUN6QjtJQUFiLDRCQUFVLEVBQUU7OzZEQUFzQztBQUNyQztJQUFiLDRCQUFVLEVBQUU7OzREQUFzQztBQUNyQztJQUFiLDRCQUFVLEVBQUU7O21EQUE0QjtBQUMzQjtJQUFiLDRCQUFVLEVBQUU7OEJBQWUsMkJBQVk7eURBQWE7QUFOdkQsa0RBaUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSXNOb3RFbXB0eSwgSXNPcHRpb25hbCB9IGZyb20gXCJjbGFzcy12YWxpZGF0b3JcIjtcclxuaW1wb3J0IHsgQmFzZU1vZGVsLCBCYXNlTW9kZWxTY2hlbWEgfSBmcm9tIFwiLi4vLi4vYmFzZVwiO1xyXG5pbXBvcnQgeyBXYWxsZXQsIFdhbGxldFNjaGVtYSB9IGZyb20gXCIuLi9XYWxsZXRcIjtcclxuaW1wb3J0IHsgQmFua1RyYW5zZmVyLCBCYW5rVHJhbnNmZXJTY2hlbWEgfSBmcm9tIFwiLi9CYW5rVHJhbnNmZXJcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmFua1RyYW5zZmVyUGF5bWVudFNjaGVtYSBleHRlbmRzIEJhc2VNb2RlbFNjaGVtYSB7XHJcbiAgdHlwZTogc3RyaW5nO1xyXG4gIGJpdGNhcGl0YWxDb3JlSWQ6IHN0cmluZztcclxuICB0cmFuc2FjdGlvbkNvZGU/OiBzdHJpbmc7XHJcbiAgc291cmNlOiBXYWxsZXRTY2hlbWEgfCBzdHJpbmc7XHJcbiAgYW1vdW50OiBzdHJpbmc7XHJcbiAgYmFua1RyYW5zZmVyOiBCYW5rVHJhbnNmZXJTY2hlbWE7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCYW5rVHJhbnNmZXJQYXltZW50IGV4dGVuZHMgQmFzZU1vZGVsIGltcGxlbWVudHMgQmFua1RyYW5zZmVyUGF5bWVudFNjaGVtYSB7XHJcbiAgQElzTm90RW1wdHkoKSBzb3VyY2U6IFdhbGxldCB8IHN0cmluZyA9IHVuZGVmaW5lZDtcclxuICBASXNOb3RFbXB0eSgpIHR5cGU6IHN0cmluZyA9IHVuZGVmaW5lZDtcclxuICBASXNOb3RFbXB0eSgpIGJpdGNhcGl0YWxDb3JlSWQ6IHN0cmluZyA9IHVuZGVmaW5lZDtcclxuICBASXNPcHRpb25hbCgpIHRyYW5zYWN0aW9uQ29kZT86IHN0cmluZyA9IHVuZGVmaW5lZDtcclxuICBASXNOb3RFbXB0eSgpIGFtb3VudDogc3RyaW5nID0gdW5kZWZpbmVkO1xyXG4gIEBJc05vdEVtcHR5KCkgYmFua1RyYW5zZmVyOiBCYW5rVHJhbnNmZXIgPSB1bmRlZmluZWQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRhdGE6IFBhcnRpYWw8QmFua1RyYW5zZmVyUGF5bWVudFNjaGVtYT4pIHtcclxuICAgIHN1cGVyKGRhdGEpO1xyXG5cclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XHJcblxyXG4gICAgaWYgKGRhdGEuc291cmNlKSB7XHJcbiAgICAgIHRoaXMuc291cmNlID0gdHlwZW9mIGRhdGEuc291cmNlID09PSBcInN0cmluZ1wiID8gZGF0YS5zb3VyY2UgOiBuZXcgV2FsbGV0KGRhdGEuc291cmNlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19