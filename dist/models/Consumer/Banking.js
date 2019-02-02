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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFua2luZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9tb2RlbHMvQ29uc3VtZXIvQmFua2luZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJFQUFtRTtBQUNuRSxxQ0FBd0Q7QUFHeEQsSUFBWSxXQUdYO0FBSEQsV0FBWSxXQUFXO0lBQ3JCLG9DQUFxQixDQUFBO0lBQ3JCLGtDQUFtQixDQUFBO0FBQ3JCLENBQUMsRUFIVyxXQUFXLEdBQVgsbUJBQVcsS0FBWCxtQkFBVyxRQUd0QjtBQWFELE1BQWEsT0FBUSxTQUFRLGdCQUFTO0lBV3BDLFlBQVksSUFBNEI7UUFDdEMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBWEEsU0FBSSxHQUFnQixXQUFXLENBQUMsUUFBUSxDQUFDO1FBQ3pDLFNBQUksR0FBVyxTQUFTLENBQUM7UUFDekIsV0FBTSxHQUFXLFNBQVMsQ0FBQztRQUMzQixnQkFBVyxHQUFXLFNBQVMsQ0FBQztRQUNoQyxZQUFPLEdBQVcsU0FBUyxDQUFDO1FBQzVCLGlCQUFZLEdBQVcsU0FBUyxDQUFDO1FBRS9DLGFBQVEsR0FBYSxTQUFTLENBQUM7UUFDL0IsZUFBVSxHQUFXLFNBQVMsQ0FBQztJQUkvQixDQUFDO0NBQ0Y7QUFiZTtJQUFiLDRCQUFVLEVBQUU7O3FDQUEwQztBQUN6QztJQUFiLDRCQUFVLEVBQUU7O3FDQUEwQjtBQUN6QjtJQUFiLDRCQUFVLEVBQUU7O3VDQUE0QjtBQUMzQjtJQUFiLDRCQUFVLEVBQUU7OzRDQUFpQztBQUNoQztJQUFiLDRCQUFVLEVBQUU7O3dDQUE2QjtBQUM1QjtJQUFiLDRCQUFVLEVBQUU7OzZDQUFrQztBQU5qRCwwQkFjQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElzTm90RW1wdHkgfSBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NsYXNzLXZhbGlkYXRvclwiO1xuaW1wb3J0IHsgQmFzZU1vZGVsLCBCYXNlTW9kZWxTY2hlbWEgfSBmcm9tIFwiLi4vLi4vYmFzZVwiO1xuaW1wb3J0IHsgQ29uc3VtZXIsIENvbnN1bWVyU2NoZW1hIH0gZnJvbSBcIi4vQ29uc3VtZXJcIjtcblxuZXhwb3J0IGVudW0gQmFua2luZ1R5cGUge1xuICBDSEVDS0lORyA9IFwiY2hlY2tpbmdcIixcbiAgU0FWSU5HUyA9IFwic2F2aW5nc1wiXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFua2luZ1NjaGVtYSBleHRlbmRzIEJhc2VNb2RlbFNjaGVtYSB7XG4gIGNvbnN1bWVyPzogQ29uc3VtZXJTY2hlbWE7XG4gIGNvbnN1bWVySWQ/OiBzdHJpbmc7XG4gIHR5cGU6IEJhbmtpbmdUeXBlO1xuICBiYW5rOiBudW1iZXI7XG4gIGFnZW5jeTogbnVtYmVyO1xuICBhZ2VuY3lEaWdpdDogc3RyaW5nO1xuICBhY2NvdW50OiBudW1iZXI7XG4gIGFjY291bnREaWdpdDogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgQmFua2luZyBleHRlbmRzIEJhc2VNb2RlbCBpbXBsZW1lbnRzIEJhbmtpbmdTY2hlbWEge1xuICBASXNOb3RFbXB0eSgpIHR5cGU6IEJhbmtpbmdUeXBlID0gQmFua2luZ1R5cGUuQ0hFQ0tJTkc7XG4gIEBJc05vdEVtcHR5KCkgYmFuazogbnVtYmVyID0gdW5kZWZpbmVkO1xuICBASXNOb3RFbXB0eSgpIGFnZW5jeTogbnVtYmVyID0gdW5kZWZpbmVkO1xuICBASXNOb3RFbXB0eSgpIGFnZW5jeURpZ2l0OiBzdHJpbmcgPSB1bmRlZmluZWQ7XG4gIEBJc05vdEVtcHR5KCkgYWNjb3VudDogbnVtYmVyID0gdW5kZWZpbmVkO1xuICBASXNOb3RFbXB0eSgpIGFjY291bnREaWdpdDogc3RyaW5nID0gdW5kZWZpbmVkO1xuXG4gIGNvbnN1bWVyOiBDb25zdW1lciA9IHVuZGVmaW5lZDtcbiAgY29uc3VtZXJJZDogc3RyaW5nID0gdW5kZWZpbmVkO1xuXG4gIGNvbnN0cnVjdG9yKGRhdGE6IFBhcnRpYWw8QmFua2luZ1NjaGVtYT4pIHtcbiAgICBzdXBlcihkYXRhKTtcbiAgfVxufVxuIl19