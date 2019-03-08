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
var AddressType;
(function (AddressType) {
    AddressType["HOME"] = "home";
    AddressType["WORK"] = "work";
})(AddressType = exports.AddressType || (exports.AddressType = {}));
class Address extends base_1.BaseModel {
    constructor(data) {
        super(data);
        this.consumer = undefined;
        this.type = AddressType.HOME;
        this.country = undefined;
        this.state = undefined;
        this.city = undefined;
        this.code = undefined;
        this.street = undefined;
        this.complement = undefined;
        this.number = undefined;
        Object.assign(this, data);
        this.consumer = data.consumer && new Consumer_1.Consumer(data.consumer);
    }
}
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Consumer_1.Consumer)
], Address.prototype, "consumer", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], Address.prototype, "reference", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], Address.prototype, "country", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], Address.prototype, "state", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], Address.prototype, "city", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], Address.prototype, "code", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], Address.prototype, "street", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], Address.prototype, "complement", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], Address.prototype, "number", void 0);
exports.Address = Address;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkcmVzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9tb2RlbHMvQ29uc3VtZXIvQWRkcmVzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHFEQUF5RDtBQUN6RCxxQ0FBd0Q7QUFDeEQseUNBQXNEO0FBRXRELElBQVksV0FHWDtBQUhELFdBQVksV0FBVztJQUNyQiw0QkFBYSxDQUFBO0lBQ2IsNEJBQWEsQ0FBQTtBQUNmLENBQUMsRUFIVyxXQUFXLEdBQVgsbUJBQVcsS0FBWCxtQkFBVyxRQUd0QjtBQWVELE1BQWEsT0FBUSxTQUFRLGdCQUFTO0lBYXBDLFlBQVksSUFBNEI7UUFDdEMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBYkEsYUFBUSxHQUFjLFNBQVMsQ0FBQztRQUU5QyxTQUFJLEdBQWlCLFdBQVcsQ0FBQyxJQUFJLENBQUM7UUFFeEIsWUFBTyxHQUFXLFNBQVMsQ0FBQztRQUM1QixVQUFLLEdBQVcsU0FBUyxDQUFDO1FBQzFCLFNBQUksR0FBVyxTQUFTLENBQUM7UUFDekIsU0FBSSxHQUFXLFNBQVMsQ0FBQztRQUN6QixXQUFNLEdBQVcsU0FBUyxDQUFDO1FBQzNCLGVBQVUsR0FBWSxTQUFTLENBQUM7UUFDaEMsV0FBTSxHQUFXLFNBQVMsQ0FBQztRQUt2QyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUUxQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxtQkFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMvRCxDQUFDO0NBQ0Y7QUFuQmU7SUFBYiw0QkFBVSxFQUFFOzhCQUFZLG1CQUFRO3lDQUFhO0FBR2hDO0lBQWIsNEJBQVUsRUFBRTs7MENBQW9CO0FBQ25CO0lBQWIsNEJBQVUsRUFBRTs7d0NBQTZCO0FBQzVCO0lBQWIsNEJBQVUsRUFBRTs7c0NBQTJCO0FBQzFCO0lBQWIsNEJBQVUsRUFBRTs7cUNBQTBCO0FBQ3pCO0lBQWIsNEJBQVUsRUFBRTs7cUNBQTBCO0FBQ3pCO0lBQWIsNEJBQVUsRUFBRTs7dUNBQTRCO0FBQzNCO0lBQWIsNEJBQVUsRUFBRTs7MkNBQWlDO0FBQ2hDO0lBQWIsNEJBQVUsRUFBRTs7dUNBQTRCO0FBWDNDLDBCQW9CQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElzTm90RW1wdHksIElzT3B0aW9uYWwgfSBmcm9tIFwiY2xhc3MtdmFsaWRhdG9yXCI7XHJcbmltcG9ydCB7IEJhc2VNb2RlbFNjaGVtYSwgQmFzZU1vZGVsIH0gZnJvbSBcIi4uLy4uL2Jhc2VcIjtcclxuaW1wb3J0IHsgQ29uc3VtZXIsIENvbnN1bWVyU2NoZW1hIH0gZnJvbSBcIi4vQ29uc3VtZXJcIjtcclxuXHJcbmV4cG9ydCBlbnVtIEFkZHJlc3NUeXBlIHtcclxuICBIT01FID0gXCJob21lXCIsXHJcbiAgV09SSyA9IFwid29ya1wiXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWRkcmVzc1NjaGVtYSBleHRlbmRzIEJhc2VNb2RlbFNjaGVtYSB7XHJcbiAgdHlwZT86IEFkZHJlc3NUeXBlO1xyXG4gIGNvbnN1bWVyPzogQ29uc3VtZXJTY2hlbWE7XHJcbiAgY291bnRyeTogc3RyaW5nO1xyXG4gIGNpdHk6IHN0cmluZztcclxuICBjb2RlOiBzdHJpbmc7XHJcbiAgc3RhdGU6IHN0cmluZztcclxuICBzdHJlZXQ6IHN0cmluZztcclxuICBjb21wbGVtZW50Pzogc3RyaW5nO1xyXG4gIG51bWJlcjogc3RyaW5nO1xyXG4gIHJlZmVyZW5jZT86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFkZHJlc3MgZXh0ZW5kcyBCYXNlTW9kZWwgaW1wbGVtZW50cyBBZGRyZXNzU2NoZW1hIHtcclxuICBASXNPcHRpb25hbCgpIGNvbnN1bWVyPzogQ29uc3VtZXIgPSB1bmRlZmluZWQ7XHJcblxyXG4gIHR5cGU/OiBBZGRyZXNzVHlwZSA9IEFkZHJlc3NUeXBlLkhPTUU7XHJcbiAgQElzT3B0aW9uYWwoKSByZWZlcmVuY2U/OiBzdHJpbmc7XHJcbiAgQElzTm90RW1wdHkoKSBjb3VudHJ5OiBzdHJpbmcgPSB1bmRlZmluZWQ7XHJcbiAgQElzTm90RW1wdHkoKSBzdGF0ZTogc3RyaW5nID0gdW5kZWZpbmVkO1xyXG4gIEBJc05vdEVtcHR5KCkgY2l0eTogc3RyaW5nID0gdW5kZWZpbmVkO1xyXG4gIEBJc05vdEVtcHR5KCkgY29kZTogc3RyaW5nID0gdW5kZWZpbmVkO1xyXG4gIEBJc05vdEVtcHR5KCkgc3RyZWV0OiBzdHJpbmcgPSB1bmRlZmluZWQ7XHJcbiAgQElzT3B0aW9uYWwoKSBjb21wbGVtZW50Pzogc3RyaW5nID0gdW5kZWZpbmVkO1xyXG4gIEBJc05vdEVtcHR5KCkgbnVtYmVyOiBzdHJpbmcgPSB1bmRlZmluZWQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRhdGE6IFBhcnRpYWw8QWRkcmVzc1NjaGVtYT4pIHtcclxuICAgIHN1cGVyKGRhdGEpO1xyXG5cclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XHJcblxyXG4gICAgdGhpcy5jb25zdW1lciA9IGRhdGEuY29uc3VtZXIgJiYgbmV3IENvbnN1bWVyKGRhdGEuY29uc3VtZXIpO1xyXG4gIH1cclxufVxyXG4iXX0=