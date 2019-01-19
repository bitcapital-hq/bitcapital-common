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
        this.geo = undefined;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkcmVzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9tb2RlbHMvQ29uc3VtZXIvQWRkcmVzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHFEQUFpRTtBQUNqRSxxQ0FBd0Q7QUFHeEQsSUFBWSxXQUdYO0FBSEQsV0FBWSxXQUFXO0lBQ3JCLDRCQUFhLENBQUE7SUFDYiw0QkFBYSxDQUFBO0FBQ2YsQ0FBQyxFQUhXLFdBQVcsR0FBWCxtQkFBVyxLQUFYLG1CQUFXLFFBR3RCO0FBaUJELGFBQTZCLFNBQVEsZ0JBQVM7SUFnQjVDLFlBQVksSUFBNEI7UUFDdEMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBaEJkLGFBQVEsR0FBYyxTQUFTLENBQUM7UUFDdEIsZUFBVSxHQUFXLFNBQVMsQ0FBQztRQUV6QyxTQUFJLEdBQWlCLFdBQVcsQ0FBQyxJQUFJLENBQUM7UUFFeEIsWUFBTyxHQUFXLFNBQVMsQ0FBQztRQUM1QixVQUFLLEdBQVcsU0FBUyxDQUFDO1FBQzFCLFNBQUksR0FBVyxTQUFTLENBQUM7UUFDekIsU0FBSSxHQUFXLFNBQVMsQ0FBQztRQUN6QixXQUFNLEdBQVcsU0FBUyxDQUFDO1FBQzNCLGVBQVUsR0FBVyxTQUFTLENBQUM7UUFDL0IsV0FBTSxHQUFXLFNBQVMsQ0FBQztRQUV6QyxRQUFHLEdBQTZCLFNBQVMsQ0FBQztJQUkxQyxDQUFDO0NBQ0Y7QUFqQlc7SUFBVCx3QkFBTSxFQUFFOzsyQ0FBZ0M7QUFHM0I7SUFBYiw0QkFBVSxFQUFFOzswQ0FBb0I7QUFDbkI7SUFBYiw0QkFBVSxFQUFFOzt3Q0FBNkI7QUFDNUI7SUFBYiw0QkFBVSxFQUFFOztzQ0FBMkI7QUFDMUI7SUFBYiw0QkFBVSxFQUFFOztxQ0FBMEI7QUFDekI7SUFBYiw0QkFBVSxFQUFFOztxQ0FBMEI7QUFDekI7SUFBYiw0QkFBVSxFQUFFOzt1Q0FBNEI7QUFDM0I7SUFBYiw0QkFBVSxFQUFFOzsyQ0FBZ0M7QUFDL0I7SUFBYiw0QkFBVSxFQUFFOzt1Q0FBNEI7QUFaM0MsMEJBbUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSXNOb3RFbXB0eSwgSXNVVUlELCBJc09wdGlvbmFsIH0gZnJvbSBcImNsYXNzLXZhbGlkYXRvclwiO1xuaW1wb3J0IHsgQmFzZU1vZGVsU2NoZW1hLCBCYXNlTW9kZWwgfSBmcm9tIFwiLi4vLi4vYmFzZVwiO1xuaW1wb3J0IENvbnN1bWVyIGZyb20gXCIuL0NvbnN1bWVyXCI7XG5cbmV4cG9ydCBlbnVtIEFkZHJlc3NUeXBlIHtcbiAgSE9NRSA9IFwiaG9tZVwiLFxuICBXT1JLID0gXCJ3b3JrXCJcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBZGRyZXNzU2NoZW1hIGV4dGVuZHMgQmFzZU1vZGVsU2NoZW1hIHtcbiAgdHlwZT86IEFkZHJlc3NUeXBlO1xuICBjb25zdW1lcj86IENvbnN1bWVyO1xuICBjb25zdW1lcklkOiBzdHJpbmc7XG4gIGNvdW50cnk6IHN0cmluZztcbiAgZ2VvOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH07XG4gIGNpdHk6IHN0cmluZztcbiAgY29kZTogc3RyaW5nO1xuICBzdGF0ZTogc3RyaW5nO1xuICBzdHJlZXQ6IHN0cmluZztcbiAgY29tcGxlbWVudDogc3RyaW5nO1xuICBudW1iZXI6IHN0cmluZztcbiAgcmVmZXJlbmNlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZGRyZXNzIGV4dGVuZHMgQmFzZU1vZGVsIGltcGxlbWVudHMgQWRkcmVzc1NjaGVtYSB7XG4gIGNvbnN1bWVyPzogQ29uc3VtZXIgPSB1bmRlZmluZWQ7XG4gIEBJc1VVSUQoKSBjb25zdW1lcklkOiBzdHJpbmcgPSB1bmRlZmluZWQ7XG5cbiAgdHlwZT86IEFkZHJlc3NUeXBlID0gQWRkcmVzc1R5cGUuSE9NRTtcbiAgQElzT3B0aW9uYWwoKSByZWZlcmVuY2U/OiBzdHJpbmc7XG4gIEBJc05vdEVtcHR5KCkgY291bnRyeTogc3RyaW5nID0gdW5kZWZpbmVkO1xuICBASXNOb3RFbXB0eSgpIHN0YXRlOiBzdHJpbmcgPSB1bmRlZmluZWQ7XG4gIEBJc05vdEVtcHR5KCkgY2l0eTogc3RyaW5nID0gdW5kZWZpbmVkO1xuICBASXNOb3RFbXB0eSgpIGNvZGU6IHN0cmluZyA9IHVuZGVmaW5lZDtcbiAgQElzTm90RW1wdHkoKSBzdHJlZXQ6IHN0cmluZyA9IHVuZGVmaW5lZDtcbiAgQElzTm90RW1wdHkoKSBjb21wbGVtZW50OiBzdHJpbmcgPSB1bmRlZmluZWQ7XG4gIEBJc05vdEVtcHR5KCkgbnVtYmVyOiBzdHJpbmcgPSB1bmRlZmluZWQ7XG5cbiAgZ2VvOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gPSB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IoZGF0YTogUGFydGlhbDxBZGRyZXNzU2NoZW1hPikge1xuICAgIHN1cGVyKGRhdGEpO1xuICB9XG59XG4iXX0=