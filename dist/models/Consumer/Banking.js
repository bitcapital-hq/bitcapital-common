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
const Consumer_1 = require("./Consumer");
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
        Object.assign(this, data);
        this.consumer = data.consumer && new Consumer_1.Consumer(data.consumer);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFua2luZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9tb2RlbHMvQ29uc3VtZXIvQmFua2luZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHFEQUE2QztBQUM3QyxxQ0FBd0Q7QUFDeEQseUNBQXNEO0FBRXRELElBQVksV0FHWDtBQUhELFdBQVksV0FBVztJQUNyQixvQ0FBcUIsQ0FBQTtJQUNyQixrQ0FBbUIsQ0FBQTtBQUNyQixDQUFDLEVBSFcsV0FBVyxHQUFYLG1CQUFXLEtBQVgsbUJBQVcsUUFHdEI7QUFZRCxNQUFhLE9BQVEsU0FBUSxnQkFBUztJQVVwQyxZQUFZLElBQTRCO1FBQ3RDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQVZBLFNBQUksR0FBZ0IsV0FBVyxDQUFDLFFBQVEsQ0FBQztRQUN6QyxTQUFJLEdBQVcsU0FBUyxDQUFDO1FBQ3pCLFdBQU0sR0FBVyxTQUFTLENBQUM7UUFDM0IsZ0JBQVcsR0FBVyxTQUFTLENBQUM7UUFDaEMsWUFBTyxHQUFXLFNBQVMsQ0FBQztRQUM1QixpQkFBWSxHQUFXLFNBQVMsQ0FBQztRQUUvQyxhQUFRLEdBQWEsU0FBUyxDQUFDO1FBSzdCLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRTFCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLG1CQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQy9ELENBQUM7Q0FDRjtBQWhCZTtJQUFiLDRCQUFVLEVBQUU7O3FDQUEwQztBQUN6QztJQUFiLDRCQUFVLEVBQUU7O3FDQUEwQjtBQUN6QjtJQUFiLDRCQUFVLEVBQUU7O3VDQUE0QjtBQUMzQjtJQUFiLDRCQUFVLEVBQUU7OzRDQUFpQztBQUNoQztJQUFiLDRCQUFVLEVBQUU7O3dDQUE2QjtBQUM1QjtJQUFiLDRCQUFVLEVBQUU7OzZDQUFrQztBQU5qRCwwQkFpQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJc05vdEVtcHR5IH0gZnJvbSBcImNsYXNzLXZhbGlkYXRvclwiO1xuaW1wb3J0IHsgQmFzZU1vZGVsLCBCYXNlTW9kZWxTY2hlbWEgfSBmcm9tIFwiLi4vLi4vYmFzZVwiO1xuaW1wb3J0IHsgQ29uc3VtZXIsIENvbnN1bWVyU2NoZW1hIH0gZnJvbSBcIi4vQ29uc3VtZXJcIjtcblxuZXhwb3J0IGVudW0gQmFua2luZ1R5cGUge1xuICBDSEVDS0lORyA9IFwiY2hlY2tpbmdcIixcbiAgU0FWSU5HUyA9IFwic2F2aW5nc1wiXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFua2luZ1NjaGVtYSBleHRlbmRzIEJhc2VNb2RlbFNjaGVtYSB7XG4gIGNvbnN1bWVyPzogQ29uc3VtZXJTY2hlbWE7XG4gIHR5cGU6IEJhbmtpbmdUeXBlO1xuICBiYW5rOiBudW1iZXI7XG4gIGFnZW5jeTogbnVtYmVyO1xuICBhZ2VuY3lEaWdpdDogc3RyaW5nO1xuICBhY2NvdW50OiBudW1iZXI7XG4gIGFjY291bnREaWdpdDogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgQmFua2luZyBleHRlbmRzIEJhc2VNb2RlbCBpbXBsZW1lbnRzIEJhbmtpbmdTY2hlbWEge1xuICBASXNOb3RFbXB0eSgpIHR5cGU6IEJhbmtpbmdUeXBlID0gQmFua2luZ1R5cGUuQ0hFQ0tJTkc7XG4gIEBJc05vdEVtcHR5KCkgYmFuazogbnVtYmVyID0gdW5kZWZpbmVkO1xuICBASXNOb3RFbXB0eSgpIGFnZW5jeTogbnVtYmVyID0gdW5kZWZpbmVkO1xuICBASXNOb3RFbXB0eSgpIGFnZW5jeURpZ2l0OiBzdHJpbmcgPSB1bmRlZmluZWQ7XG4gIEBJc05vdEVtcHR5KCkgYWNjb3VudDogbnVtYmVyID0gdW5kZWZpbmVkO1xuICBASXNOb3RFbXB0eSgpIGFjY291bnREaWdpdDogc3RyaW5nID0gdW5kZWZpbmVkO1xuXG4gIGNvbnN1bWVyOiBDb25zdW1lciA9IHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3RvcihkYXRhOiBQYXJ0aWFsPEJhbmtpbmdTY2hlbWE+KSB7XG4gICAgc3VwZXIoZGF0YSk7XG5cbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xuXG4gICAgdGhpcy5jb25zdW1lciA9IGRhdGEuY29uc3VtZXIgJiYgbmV3IENvbnN1bWVyKGRhdGEuY29uc3VtZXIpO1xuICB9XG59XG4iXX0=