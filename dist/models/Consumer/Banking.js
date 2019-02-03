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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFua2luZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9tb2RlbHMvQ29uc3VtZXIvQmFua2luZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHFEQUE2QztBQUM3QyxxQ0FBd0Q7QUFHeEQsSUFBWSxXQUdYO0FBSEQsV0FBWSxXQUFXO0lBQ3JCLG9DQUFxQixDQUFBO0lBQ3JCLGtDQUFtQixDQUFBO0FBQ3JCLENBQUMsRUFIVyxXQUFXLEdBQVgsbUJBQVcsS0FBWCxtQkFBVyxRQUd0QjtBQWFELE1BQWEsT0FBUSxTQUFRLGdCQUFTO0lBV3BDLFlBQVksSUFBNEI7UUFDdEMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBWEEsU0FBSSxHQUFnQixXQUFXLENBQUMsUUFBUSxDQUFDO1FBQ3pDLFNBQUksR0FBVyxTQUFTLENBQUM7UUFDekIsV0FBTSxHQUFXLFNBQVMsQ0FBQztRQUMzQixnQkFBVyxHQUFXLFNBQVMsQ0FBQztRQUNoQyxZQUFPLEdBQVcsU0FBUyxDQUFDO1FBQzVCLGlCQUFZLEdBQVcsU0FBUyxDQUFDO1FBRS9DLGFBQVEsR0FBYSxTQUFTLENBQUM7UUFDL0IsZUFBVSxHQUFXLFNBQVMsQ0FBQztJQUkvQixDQUFDO0NBQ0Y7QUFiZTtJQUFiLDRCQUFVLEVBQUU7O3FDQUEwQztBQUN6QztJQUFiLDRCQUFVLEVBQUU7O3FDQUEwQjtBQUN6QjtJQUFiLDRCQUFVLEVBQUU7O3VDQUE0QjtBQUMzQjtJQUFiLDRCQUFVLEVBQUU7OzRDQUFpQztBQUNoQztJQUFiLDRCQUFVLEVBQUU7O3dDQUE2QjtBQUM1QjtJQUFiLDRCQUFVLEVBQUU7OzZDQUFrQztBQU5qRCwwQkFjQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElzTm90RW1wdHkgfSBmcm9tIFwiY2xhc3MtdmFsaWRhdG9yXCI7XG5pbXBvcnQgeyBCYXNlTW9kZWwsIEJhc2VNb2RlbFNjaGVtYSB9IGZyb20gXCIuLi8uLi9iYXNlXCI7XG5pbXBvcnQgeyBDb25zdW1lciwgQ29uc3VtZXJTY2hlbWEgfSBmcm9tIFwiLi9Db25zdW1lclwiO1xuXG5leHBvcnQgZW51bSBCYW5raW5nVHlwZSB7XG4gIENIRUNLSU5HID0gXCJjaGVja2luZ1wiLFxuICBTQVZJTkdTID0gXCJzYXZpbmdzXCJcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCYW5raW5nU2NoZW1hIGV4dGVuZHMgQmFzZU1vZGVsU2NoZW1hIHtcbiAgY29uc3VtZXI/OiBDb25zdW1lclNjaGVtYTtcbiAgY29uc3VtZXJJZD86IHN0cmluZztcbiAgdHlwZTogQmFua2luZ1R5cGU7XG4gIGJhbms6IG51bWJlcjtcbiAgYWdlbmN5OiBudW1iZXI7XG4gIGFnZW5jeURpZ2l0OiBzdHJpbmc7XG4gIGFjY291bnQ6IG51bWJlcjtcbiAgYWNjb3VudERpZ2l0OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBCYW5raW5nIGV4dGVuZHMgQmFzZU1vZGVsIGltcGxlbWVudHMgQmFua2luZ1NjaGVtYSB7XG4gIEBJc05vdEVtcHR5KCkgdHlwZTogQmFua2luZ1R5cGUgPSBCYW5raW5nVHlwZS5DSEVDS0lORztcbiAgQElzTm90RW1wdHkoKSBiYW5rOiBudW1iZXIgPSB1bmRlZmluZWQ7XG4gIEBJc05vdEVtcHR5KCkgYWdlbmN5OiBudW1iZXIgPSB1bmRlZmluZWQ7XG4gIEBJc05vdEVtcHR5KCkgYWdlbmN5RGlnaXQ6IHN0cmluZyA9IHVuZGVmaW5lZDtcbiAgQElzTm90RW1wdHkoKSBhY2NvdW50OiBudW1iZXIgPSB1bmRlZmluZWQ7XG4gIEBJc05vdEVtcHR5KCkgYWNjb3VudERpZ2l0OiBzdHJpbmcgPSB1bmRlZmluZWQ7XG5cbiAgY29uc3VtZXI6IENvbnN1bWVyID0gdW5kZWZpbmVkO1xuICBjb25zdW1lcklkOiBzdHJpbmcgPSB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IoZGF0YTogUGFydGlhbDxCYW5raW5nU2NoZW1hPikge1xuICAgIHN1cGVyKGRhdGEpO1xuICB9XG59XG4iXX0=