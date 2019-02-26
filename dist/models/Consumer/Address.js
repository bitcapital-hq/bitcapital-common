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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkcmVzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9tb2RlbHMvQ29uc3VtZXIvQWRkcmVzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHFEQUFpRTtBQUNqRSxxQ0FBd0Q7QUFDeEQseUNBQXNEO0FBRXRELElBQVksV0FHWDtBQUhELFdBQVksV0FBVztJQUNyQiw0QkFBYSxDQUFBO0lBQ2IsNEJBQWEsQ0FBQTtBQUNmLENBQUMsRUFIVyxXQUFXLEdBQVgsbUJBQVcsS0FBWCxtQkFBVyxRQUd0QjtBQWdCRCxNQUFhLE9BQVEsU0FBUSxnQkFBUztJQWNwQyxZQUFZLElBQTRCO1FBQ3RDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQWRBLGFBQVEsR0FBYyxTQUFTLENBQUM7UUFDdEIsZUFBVSxHQUFZLFNBQVMsQ0FBQztRQUV4RCxTQUFJLEdBQWlCLFdBQVcsQ0FBQyxJQUFJLENBQUM7UUFFeEIsWUFBTyxHQUFXLFNBQVMsQ0FBQztRQUM1QixVQUFLLEdBQVcsU0FBUyxDQUFDO1FBQzFCLFNBQUksR0FBVyxTQUFTLENBQUM7UUFDekIsU0FBSSxHQUFXLFNBQVMsQ0FBQztRQUN6QixXQUFNLEdBQVcsU0FBUyxDQUFDO1FBQzNCLGVBQVUsR0FBWSxTQUFTLENBQUM7UUFDaEMsV0FBTSxHQUFXLFNBQVMsQ0FBQztRQUl2QyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0NBQ0Y7QUFqQmU7SUFBYiw0QkFBVSxFQUFFOzhCQUFZLG1CQUFRO3lDQUFhO0FBQ3RCO0lBQXZCLHdCQUFNLEVBQUUsRUFBRSw0QkFBVSxFQUFFOzsyQ0FBaUM7QUFHMUM7SUFBYiw0QkFBVSxFQUFFOzswQ0FBb0I7QUFDbkI7SUFBYiw0QkFBVSxFQUFFOzt3Q0FBNkI7QUFDNUI7SUFBYiw0QkFBVSxFQUFFOztzQ0FBMkI7QUFDMUI7SUFBYiw0QkFBVSxFQUFFOztxQ0FBMEI7QUFDekI7SUFBYiw0QkFBVSxFQUFFOztxQ0FBMEI7QUFDekI7SUFBYiw0QkFBVSxFQUFFOzt1Q0FBNEI7QUFDM0I7SUFBYiw0QkFBVSxFQUFFOzsyQ0FBaUM7QUFDaEM7SUFBYiw0QkFBVSxFQUFFOzt1Q0FBNEI7QUFaM0MsMEJBa0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSXNOb3RFbXB0eSwgSXNVVUlELCBJc09wdGlvbmFsIH0gZnJvbSBcImNsYXNzLXZhbGlkYXRvclwiO1xuaW1wb3J0IHsgQmFzZU1vZGVsU2NoZW1hLCBCYXNlTW9kZWwgfSBmcm9tIFwiLi4vLi4vYmFzZVwiO1xuaW1wb3J0IHsgQ29uc3VtZXIsIENvbnN1bWVyU2NoZW1hIH0gZnJvbSBcIi4vQ29uc3VtZXJcIjtcblxuZXhwb3J0IGVudW0gQWRkcmVzc1R5cGUge1xuICBIT01FID0gXCJob21lXCIsXG4gIFdPUksgPSBcIndvcmtcIlxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFkZHJlc3NTY2hlbWEgZXh0ZW5kcyBCYXNlTW9kZWxTY2hlbWEge1xuICB0eXBlPzogQWRkcmVzc1R5cGU7XG4gIGNvbnN1bWVyPzogQ29uc3VtZXJTY2hlbWE7XG4gIGNvbnN1bWVySWQ/OiBzdHJpbmc7XG4gIGNvdW50cnk6IHN0cmluZztcbiAgY2l0eTogc3RyaW5nO1xuICBjb2RlOiBzdHJpbmc7XG4gIHN0YXRlOiBzdHJpbmc7XG4gIHN0cmVldDogc3RyaW5nO1xuICBjb21wbGVtZW50Pzogc3RyaW5nO1xuICBudW1iZXI6IHN0cmluZztcbiAgcmVmZXJlbmNlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgQWRkcmVzcyBleHRlbmRzIEJhc2VNb2RlbCBpbXBsZW1lbnRzIEFkZHJlc3NTY2hlbWEge1xuICBASXNPcHRpb25hbCgpIGNvbnN1bWVyPzogQ29uc3VtZXIgPSB1bmRlZmluZWQ7XG4gIEBJc1VVSUQoKSBASXNPcHRpb25hbCgpIGNvbnN1bWVySWQ/OiBzdHJpbmcgPSB1bmRlZmluZWQ7XG5cbiAgdHlwZT86IEFkZHJlc3NUeXBlID0gQWRkcmVzc1R5cGUuSE9NRTtcbiAgQElzT3B0aW9uYWwoKSByZWZlcmVuY2U/OiBzdHJpbmc7XG4gIEBJc05vdEVtcHR5KCkgY291bnRyeTogc3RyaW5nID0gdW5kZWZpbmVkO1xuICBASXNOb3RFbXB0eSgpIHN0YXRlOiBzdHJpbmcgPSB1bmRlZmluZWQ7XG4gIEBJc05vdEVtcHR5KCkgY2l0eTogc3RyaW5nID0gdW5kZWZpbmVkO1xuICBASXNOb3RFbXB0eSgpIGNvZGU6IHN0cmluZyA9IHVuZGVmaW5lZDtcbiAgQElzTm90RW1wdHkoKSBzdHJlZXQ6IHN0cmluZyA9IHVuZGVmaW5lZDtcbiAgQElzTm90RW1wdHkoKSBjb21wbGVtZW50Pzogc3RyaW5nID0gdW5kZWZpbmVkO1xuICBASXNOb3RFbXB0eSgpIG51bWJlcjogc3RyaW5nID0gdW5kZWZpbmVkO1xuXG4gIGNvbnN0cnVjdG9yKGRhdGE6IFBhcnRpYWw8QWRkcmVzc1NjaGVtYT4pIHtcbiAgICBzdXBlcihkYXRhKTtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xuICB9XG59XG4iXX0=