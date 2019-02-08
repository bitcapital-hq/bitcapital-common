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
        this.consumerId = undefined;
        this.type = AddressType.HOME;
        this.country = undefined;
        this.state = undefined;
        this.city = undefined;
        this.code = undefined;
        this.street = undefined;
        this.complement = undefined;
        this.number = undefined;
        Object.assign(this, data);
    }
}
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Consumer_1.Consumer)
], Address.prototype, "consumer", void 0);
__decorate([
    class_validator_1.IsUUID(), class_validator_1.IsOptional(),
    __metadata("design:type", String)
], Address.prototype, "consumerId", void 0);
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
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], Address.prototype, "complement", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], Address.prototype, "number", void 0);
exports.Address = Address;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkcmVzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9tb2RlbHMvQ29uc3VtZXIvQWRkcmVzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHFEQUFpRTtBQUNqRSxxQ0FBd0Q7QUFDeEQseUNBQXNEO0FBRXRELElBQVksV0FHWDtBQUhELFdBQVksV0FBVztJQUNyQiw0QkFBYSxDQUFBO0lBQ2IsNEJBQWEsQ0FBQTtBQUNmLENBQUMsRUFIVyxXQUFXLEdBQVgsbUJBQVcsS0FBWCxtQkFBVyxRQUd0QjtBQWdCRCxNQUFhLE9BQVEsU0FBUSxnQkFBUztJQWNwQyxZQUFZLElBQTRCO1FBQ3RDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQWRBLGFBQVEsR0FBYyxTQUFTLENBQUM7UUFDdEIsZUFBVSxHQUFZLFNBQVMsQ0FBQztRQUV4RCxTQUFJLEdBQWlCLFdBQVcsQ0FBQyxJQUFJLENBQUM7UUFFeEIsWUFBTyxHQUFXLFNBQVMsQ0FBQztRQUM1QixVQUFLLEdBQVcsU0FBUyxDQUFDO1FBQzFCLFNBQUksR0FBVyxTQUFTLENBQUM7UUFDekIsU0FBSSxHQUFXLFNBQVMsQ0FBQztRQUN6QixXQUFNLEdBQVcsU0FBUyxDQUFDO1FBQzNCLGVBQVUsR0FBWSxTQUFTLENBQUM7UUFDaEMsV0FBTSxHQUFXLFNBQVMsQ0FBQztRQUl2QyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0NBQ0Y7QUFqQmU7SUFBYiw0QkFBVSxFQUFFOzhCQUFZLG1CQUFRO3lDQUFhO0FBQ3RCO0lBQXZCLHdCQUFNLEVBQUUsRUFBRSw0QkFBVSxFQUFFOzsyQ0FBaUM7QUFHMUM7SUFBYiw0QkFBVSxFQUFFOzswQ0FBb0I7QUFDbkI7SUFBYiw0QkFBVSxFQUFFOzt3Q0FBNkI7QUFDNUI7SUFBYiw0QkFBVSxFQUFFOztzQ0FBMkI7QUFDMUI7SUFBYiw0QkFBVSxFQUFFOztxQ0FBMEI7QUFDekI7SUFBYiw0QkFBVSxFQUFFOztxQ0FBMEI7QUFDekI7SUFBYiw0QkFBVSxFQUFFOzt1Q0FBNEI7QUFDM0I7SUFBYiw0QkFBVSxFQUFFOzsyQ0FBaUM7QUFDaEM7SUFBYiw0QkFBVSxFQUFFOzt1Q0FBNEI7QUFaM0MsMEJBa0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSXNOb3RFbXB0eSwgSXNVVUlELCBJc09wdGlvbmFsIH0gZnJvbSBcImNsYXNzLXZhbGlkYXRvclwiO1xyXG5pbXBvcnQgeyBCYXNlTW9kZWxTY2hlbWEsIEJhc2VNb2RlbCB9IGZyb20gXCIuLi8uLi9iYXNlXCI7XHJcbmltcG9ydCB7IENvbnN1bWVyLCBDb25zdW1lclNjaGVtYSB9IGZyb20gXCIuL0NvbnN1bWVyXCI7XHJcblxyXG5leHBvcnQgZW51bSBBZGRyZXNzVHlwZSB7XHJcbiAgSE9NRSA9IFwiaG9tZVwiLFxyXG4gIFdPUksgPSBcIndvcmtcIlxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFkZHJlc3NTY2hlbWEgZXh0ZW5kcyBCYXNlTW9kZWxTY2hlbWEge1xyXG4gIHR5cGU/OiBBZGRyZXNzVHlwZTtcclxuICBjb25zdW1lcj86IENvbnN1bWVyU2NoZW1hO1xyXG4gIGNvbnN1bWVySWQ/OiBzdHJpbmc7XHJcbiAgY291bnRyeTogc3RyaW5nO1xyXG4gIGNpdHk6IHN0cmluZztcclxuICBjb2RlOiBzdHJpbmc7XHJcbiAgc3RhdGU6IHN0cmluZztcclxuICBzdHJlZXQ6IHN0cmluZztcclxuICBjb21wbGVtZW50Pzogc3RyaW5nO1xyXG4gIG51bWJlcjogc3RyaW5nO1xyXG4gIHJlZmVyZW5jZT86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFkZHJlc3MgZXh0ZW5kcyBCYXNlTW9kZWwgaW1wbGVtZW50cyBBZGRyZXNzU2NoZW1hIHtcclxuICBASXNPcHRpb25hbCgpIGNvbnN1bWVyPzogQ29uc3VtZXIgPSB1bmRlZmluZWQ7XHJcbiAgQElzVVVJRCgpIEBJc09wdGlvbmFsKCkgY29uc3VtZXJJZD86IHN0cmluZyA9IHVuZGVmaW5lZDtcclxuXHJcbiAgdHlwZT86IEFkZHJlc3NUeXBlID0gQWRkcmVzc1R5cGUuSE9NRTtcclxuICBASXNPcHRpb25hbCgpIHJlZmVyZW5jZT86IHN0cmluZztcclxuICBASXNOb3RFbXB0eSgpIGNvdW50cnk6IHN0cmluZyA9IHVuZGVmaW5lZDtcclxuICBASXNOb3RFbXB0eSgpIHN0YXRlOiBzdHJpbmcgPSB1bmRlZmluZWQ7XHJcbiAgQElzTm90RW1wdHkoKSBjaXR5OiBzdHJpbmcgPSB1bmRlZmluZWQ7XHJcbiAgQElzTm90RW1wdHkoKSBjb2RlOiBzdHJpbmcgPSB1bmRlZmluZWQ7XHJcbiAgQElzTm90RW1wdHkoKSBzdHJlZXQ6IHN0cmluZyA9IHVuZGVmaW5lZDtcclxuICBASXNOb3RFbXB0eSgpIGNvbXBsZW1lbnQ/OiBzdHJpbmcgPSB1bmRlZmluZWQ7XHJcbiAgQElzTm90RW1wdHkoKSBudW1iZXI6IHN0cmluZyA9IHVuZGVmaW5lZDtcclxuXHJcbiAgY29uc3RydWN0b3IoZGF0YTogUGFydGlhbDxBZGRyZXNzU2NoZW1hPikge1xyXG4gICAgc3VwZXIoZGF0YSk7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xyXG4gIH1cclxufVxyXG4iXX0=