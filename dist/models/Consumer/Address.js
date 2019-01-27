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
    }
}
__decorate([
    class_validator_1.IsUUID(),
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
exports.default = Address;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkcmVzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9tb2RlbHMvQ29uc3VtZXIvQWRkcmVzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHFEQUFpRTtBQUNqRSxxQ0FBd0Q7QUFHeEQsSUFBWSxXQUdYO0FBSEQsV0FBWSxXQUFXO0lBQ3JCLDRCQUFhLENBQUE7SUFDYiw0QkFBYSxDQUFBO0FBQ2YsQ0FBQyxFQUhXLFdBQVcsR0FBWCxtQkFBVyxLQUFYLG1CQUFXLFFBR3RCO0FBZ0JELGFBQTZCLFNBQVEsZ0JBQVM7SUFjNUMsWUFBWSxJQUE0QjtRQUN0QyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFkZCxhQUFRLEdBQWMsU0FBUyxDQUFDO1FBQ3RCLGVBQVUsR0FBWSxTQUFTLENBQUM7UUFFMUMsU0FBSSxHQUFpQixXQUFXLENBQUMsSUFBSSxDQUFDO1FBRXhCLFlBQU8sR0FBVyxTQUFTLENBQUM7UUFDNUIsVUFBSyxHQUFXLFNBQVMsQ0FBQztRQUMxQixTQUFJLEdBQVcsU0FBUyxDQUFDO1FBQ3pCLFNBQUksR0FBVyxTQUFTLENBQUM7UUFDekIsV0FBTSxHQUFXLFNBQVMsQ0FBQztRQUMzQixlQUFVLEdBQVksU0FBUyxDQUFDO1FBQ2hDLFdBQU0sR0FBVyxTQUFTLENBQUM7SUFJekMsQ0FBQztDQUNGO0FBZlc7SUFBVCx3QkFBTSxFQUFFOzsyQ0FBaUM7QUFHNUI7SUFBYiw0QkFBVSxFQUFFOzswQ0FBb0I7QUFDbkI7SUFBYiw0QkFBVSxFQUFFOzt3Q0FBNkI7QUFDNUI7SUFBYiw0QkFBVSxFQUFFOztzQ0FBMkI7QUFDMUI7SUFBYiw0QkFBVSxFQUFFOztxQ0FBMEI7QUFDekI7SUFBYiw0QkFBVSxFQUFFOztxQ0FBMEI7QUFDekI7SUFBYiw0QkFBVSxFQUFFOzt1Q0FBNEI7QUFDM0I7SUFBYiw0QkFBVSxFQUFFOzsyQ0FBaUM7QUFDaEM7SUFBYiw0QkFBVSxFQUFFOzt1Q0FBNEI7QUFaM0MsMEJBaUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSXNOb3RFbXB0eSwgSXNVVUlELCBJc09wdGlvbmFsIH0gZnJvbSBcImNsYXNzLXZhbGlkYXRvclwiO1xuaW1wb3J0IHsgQmFzZU1vZGVsU2NoZW1hLCBCYXNlTW9kZWwgfSBmcm9tIFwiLi4vLi4vYmFzZVwiO1xuaW1wb3J0IENvbnN1bWVyLCB7IENvbnN1bWVyU2NoZW1hIH0gZnJvbSBcIi4vQ29uc3VtZXJcIjtcblxuZXhwb3J0IGVudW0gQWRkcmVzc1R5cGUge1xuICBIT01FID0gXCJob21lXCIsXG4gIFdPUksgPSBcIndvcmtcIlxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFkZHJlc3NTY2hlbWEgZXh0ZW5kcyBCYXNlTW9kZWxTY2hlbWEge1xuICB0eXBlPzogQWRkcmVzc1R5cGU7XG4gIGNvbnN1bWVyPzogQ29uc3VtZXJTY2hlbWE7XG4gIGNvbnN1bWVySWQ/OiBzdHJpbmc7XG4gIGNvdW50cnk6IHN0cmluZztcbiAgY2l0eTogc3RyaW5nO1xuICBjb2RlOiBzdHJpbmc7XG4gIHN0YXRlOiBzdHJpbmc7XG4gIHN0cmVldDogc3RyaW5nO1xuICBjb21wbGVtZW50Pzogc3RyaW5nO1xuICBudW1iZXI6IHN0cmluZztcbiAgcmVmZXJlbmNlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZGRyZXNzIGV4dGVuZHMgQmFzZU1vZGVsIGltcGxlbWVudHMgQWRkcmVzc1NjaGVtYSB7XG4gIGNvbnN1bWVyPzogQ29uc3VtZXIgPSB1bmRlZmluZWQ7XG4gIEBJc1VVSUQoKSBjb25zdW1lcklkPzogc3RyaW5nID0gdW5kZWZpbmVkO1xuXG4gIHR5cGU/OiBBZGRyZXNzVHlwZSA9IEFkZHJlc3NUeXBlLkhPTUU7XG4gIEBJc09wdGlvbmFsKCkgcmVmZXJlbmNlPzogc3RyaW5nO1xuICBASXNOb3RFbXB0eSgpIGNvdW50cnk6IHN0cmluZyA9IHVuZGVmaW5lZDtcbiAgQElzTm90RW1wdHkoKSBzdGF0ZTogc3RyaW5nID0gdW5kZWZpbmVkO1xuICBASXNOb3RFbXB0eSgpIGNpdHk6IHN0cmluZyA9IHVuZGVmaW5lZDtcbiAgQElzTm90RW1wdHkoKSBjb2RlOiBzdHJpbmcgPSB1bmRlZmluZWQ7XG4gIEBJc05vdEVtcHR5KCkgc3RyZWV0OiBzdHJpbmcgPSB1bmRlZmluZWQ7XG4gIEBJc05vdEVtcHR5KCkgY29tcGxlbWVudD86IHN0cmluZyA9IHVuZGVmaW5lZDtcbiAgQElzTm90RW1wdHkoKSBudW1iZXI6IHN0cmluZyA9IHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3RvcihkYXRhOiBQYXJ0aWFsPEFkZHJlc3NTY2hlbWE+KSB7XG4gICAgc3VwZXIoZGF0YSk7XG4gIH1cbn1cbiJdfQ==