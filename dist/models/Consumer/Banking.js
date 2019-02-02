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
const class_validator_1 = require("../../../node_modules/class-validator");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFua2luZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9tb2RlbHMvQ29uc3VtZXIvQmFua2luZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJFQUFtRTtBQUNuRSxxQ0FBd0Q7QUFHeEQsSUFBWSxXQUdYO0FBSEQsV0FBWSxXQUFXO0lBQ3JCLG9DQUFxQixDQUFBO0lBQ3JCLGtDQUFtQixDQUFBO0FBQ3JCLENBQUMsRUFIVyxXQUFXLEdBQVgsbUJBQVcsS0FBWCxtQkFBVyxRQUd0QjtBQWFELE1BQWEsT0FBUSxTQUFRLGdCQUFTO0lBV3BDLFlBQVksSUFBNEI7UUFDdEMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBWEEsU0FBSSxHQUFnQixXQUFXLENBQUMsUUFBUSxDQUFDO1FBQ3pDLFNBQUksR0FBVyxTQUFTLENBQUM7UUFDekIsV0FBTSxHQUFXLFNBQVMsQ0FBQztRQUMzQixnQkFBVyxHQUFXLFNBQVMsQ0FBQztRQUNoQyxZQUFPLEdBQVcsU0FBUyxDQUFDO1FBQzVCLGlCQUFZLEdBQVcsU0FBUyxDQUFDO1FBRS9DLGFBQVEsR0FBYSxTQUFTLENBQUM7UUFDL0IsZUFBVSxHQUFXLFNBQVMsQ0FBQztJQUkvQixDQUFDO0NBQ0Y7QUFiZTtJQUFiLDRCQUFVLEVBQUU7O3FDQUEwQztBQUN6QztJQUFiLDRCQUFVLEVBQUU7O3FDQUEwQjtBQUN6QjtJQUFiLDRCQUFVLEVBQUU7O3VDQUE0QjtBQUMzQjtJQUFiLDRCQUFVLEVBQUU7OzRDQUFpQztBQUNoQztJQUFiLDRCQUFVLEVBQUU7O3dDQUE2QjtBQUM1QjtJQUFiLDRCQUFVLEVBQUU7OzZDQUFrQztBQU5qRCwwQkFjQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElzTm90RW1wdHkgfSBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NsYXNzLXZhbGlkYXRvclwiO1xyXG5pbXBvcnQgeyBCYXNlTW9kZWwsIEJhc2VNb2RlbFNjaGVtYSB9IGZyb20gXCIuLi8uLi9iYXNlXCI7XHJcbmltcG9ydCB7IENvbnN1bWVyLCBDb25zdW1lclNjaGVtYSB9IGZyb20gXCIuL0NvbnN1bWVyXCI7XHJcblxyXG5leHBvcnQgZW51bSBCYW5raW5nVHlwZSB7XHJcbiAgQ0hFQ0tJTkcgPSBcImNoZWNraW5nXCIsXHJcbiAgU0FWSU5HUyA9IFwic2F2aW5nc1wiXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmFua2luZ1NjaGVtYSBleHRlbmRzIEJhc2VNb2RlbFNjaGVtYSB7XHJcbiAgY29uc3VtZXI/OiBDb25zdW1lclNjaGVtYTtcclxuICBjb25zdW1lcklkPzogc3RyaW5nO1xyXG4gIHR5cGU6IEJhbmtpbmdUeXBlO1xyXG4gIGJhbms6IG51bWJlcjtcclxuICBhZ2VuY3k6IG51bWJlcjtcclxuICBhZ2VuY3lEaWdpdDogc3RyaW5nO1xyXG4gIGFjY291bnQ6IG51bWJlcjtcclxuICBhY2NvdW50RGlnaXQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJhbmtpbmcgZXh0ZW5kcyBCYXNlTW9kZWwgaW1wbGVtZW50cyBCYW5raW5nU2NoZW1hIHtcclxuICBASXNOb3RFbXB0eSgpIHR5cGU6IEJhbmtpbmdUeXBlID0gQmFua2luZ1R5cGUuQ0hFQ0tJTkc7XHJcbiAgQElzTm90RW1wdHkoKSBiYW5rOiBudW1iZXIgPSB1bmRlZmluZWQ7XHJcbiAgQElzTm90RW1wdHkoKSBhZ2VuY3k6IG51bWJlciA9IHVuZGVmaW5lZDtcclxuICBASXNOb3RFbXB0eSgpIGFnZW5jeURpZ2l0OiBzdHJpbmcgPSB1bmRlZmluZWQ7XHJcbiAgQElzTm90RW1wdHkoKSBhY2NvdW50OiBudW1iZXIgPSB1bmRlZmluZWQ7XHJcbiAgQElzTm90RW1wdHkoKSBhY2NvdW50RGlnaXQ6IHN0cmluZyA9IHVuZGVmaW5lZDtcclxuXHJcbiAgY29uc3VtZXI6IENvbnN1bWVyID0gdW5kZWZpbmVkO1xyXG4gIGNvbnN1bWVySWQ6IHN0cmluZyA9IHVuZGVmaW5lZDtcclxuXHJcbiAgY29uc3RydWN0b3IoZGF0YTogUGFydGlhbDxCYW5raW5nU2NoZW1hPikge1xyXG4gICAgc3VwZXIoZGF0YSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==