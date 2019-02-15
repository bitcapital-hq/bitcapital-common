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
var BankingType;
(function (BankingType) {
    BankingType["CHECKING"] = "checking";
    BankingType["SAVINGS"] = "savings";
})(BankingType = exports.BankingType || (exports.BankingType = {}));
class Banking extends base_1.BaseModel {
    constructor(data) {
        super(data);
        this.type = BankingType.CHECKING;
        this.bank = undefined;
        this.agency = undefined;
        this.agencyDigit = undefined;
        this.account = undefined;
        this.accountDigit = undefined;
        this.consumer = undefined;
        this.consumerId = undefined;
        Object.assign(this, data);
    }
}
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], Banking.prototype, "type", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], Banking.prototype, "bank", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], Banking.prototype, "agency", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], Banking.prototype, "agencyDigit", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], Banking.prototype, "account", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], Banking.prototype, "accountDigit", void 0);
exports.Banking = Banking;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFua2luZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9tb2RlbHMvQ29uc3VtZXIvQmFua2luZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHFEQUE2QztBQUM3QyxxQ0FBd0Q7QUFHeEQsSUFBWSxXQUdYO0FBSEQsV0FBWSxXQUFXO0lBQ3JCLG9DQUFxQixDQUFBO0lBQ3JCLGtDQUFtQixDQUFBO0FBQ3JCLENBQUMsRUFIVyxXQUFXLEdBQVgsbUJBQVcsS0FBWCxtQkFBVyxRQUd0QjtBQWFELE1BQWEsT0FBUSxTQUFRLGdCQUFTO0lBV3BDLFlBQVksSUFBNEI7UUFDdEMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBWEEsU0FBSSxHQUFnQixXQUFXLENBQUMsUUFBUSxDQUFDO1FBQ3pDLFNBQUksR0FBVyxTQUFTLENBQUM7UUFDekIsV0FBTSxHQUFXLFNBQVMsQ0FBQztRQUMzQixnQkFBVyxHQUFXLFNBQVMsQ0FBQztRQUNoQyxZQUFPLEdBQVcsU0FBUyxDQUFDO1FBQzVCLGlCQUFZLEdBQVcsU0FBUyxDQUFDO1FBRS9DLGFBQVEsR0FBYSxTQUFTLENBQUM7UUFDL0IsZUFBVSxHQUFXLFNBQVMsQ0FBQztRQUk3QixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0NBQ0Y7QUFkZTtJQUFiLDRCQUFVLEVBQUU7O3FDQUEwQztBQUN6QztJQUFiLDRCQUFVLEVBQUU7O3FDQUEwQjtBQUN6QjtJQUFiLDRCQUFVLEVBQUU7O3VDQUE0QjtBQUMzQjtJQUFiLDRCQUFVLEVBQUU7OzRDQUFpQztBQUNoQztJQUFiLDRCQUFVLEVBQUU7O3dDQUE2QjtBQUM1QjtJQUFiLDRCQUFVLEVBQUU7OzZDQUFrQztBQU5qRCwwQkFlQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElzTm90RW1wdHkgfSBmcm9tIFwiY2xhc3MtdmFsaWRhdG9yXCI7XHJcbmltcG9ydCB7IEJhc2VNb2RlbCwgQmFzZU1vZGVsU2NoZW1hIH0gZnJvbSBcIi4uLy4uL2Jhc2VcIjtcclxuaW1wb3J0IHsgQ29uc3VtZXIsIENvbnN1bWVyU2NoZW1hIH0gZnJvbSBcIi4vQ29uc3VtZXJcIjtcclxuXHJcbmV4cG9ydCBlbnVtIEJhbmtpbmdUeXBlIHtcclxuICBDSEVDS0lORyA9IFwiY2hlY2tpbmdcIixcclxuICBTQVZJTkdTID0gXCJzYXZpbmdzXCJcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCYW5raW5nU2NoZW1hIGV4dGVuZHMgQmFzZU1vZGVsU2NoZW1hIHtcclxuICBjb25zdW1lcj86IENvbnN1bWVyU2NoZW1hO1xyXG4gIGNvbnN1bWVySWQ/OiBzdHJpbmc7XHJcbiAgdHlwZTogQmFua2luZ1R5cGU7XHJcbiAgYmFuazogbnVtYmVyO1xyXG4gIGFnZW5jeTogbnVtYmVyO1xyXG4gIGFnZW5jeURpZ2l0OiBzdHJpbmc7XHJcbiAgYWNjb3VudDogbnVtYmVyO1xyXG4gIGFjY291bnREaWdpdDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQmFua2luZyBleHRlbmRzIEJhc2VNb2RlbCBpbXBsZW1lbnRzIEJhbmtpbmdTY2hlbWEge1xyXG4gIEBJc05vdEVtcHR5KCkgdHlwZTogQmFua2luZ1R5cGUgPSBCYW5raW5nVHlwZS5DSEVDS0lORztcclxuICBASXNOb3RFbXB0eSgpIGJhbms6IG51bWJlciA9IHVuZGVmaW5lZDtcclxuICBASXNOb3RFbXB0eSgpIGFnZW5jeTogbnVtYmVyID0gdW5kZWZpbmVkO1xyXG4gIEBJc05vdEVtcHR5KCkgYWdlbmN5RGlnaXQ6IHN0cmluZyA9IHVuZGVmaW5lZDtcclxuICBASXNOb3RFbXB0eSgpIGFjY291bnQ6IG51bWJlciA9IHVuZGVmaW5lZDtcclxuICBASXNOb3RFbXB0eSgpIGFjY291bnREaWdpdDogc3RyaW5nID0gdW5kZWZpbmVkO1xyXG5cclxuICBjb25zdW1lcjogQ29uc3VtZXIgPSB1bmRlZmluZWQ7XHJcbiAgY29uc3VtZXJJZDogc3RyaW5nID0gdW5kZWZpbmVkO1xyXG5cclxuICBjb25zdHJ1Y3RvcihkYXRhOiBQYXJ0aWFsPEJhbmtpbmdTY2hlbWE+KSB7XHJcbiAgICBzdXBlcihkYXRhKTtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==