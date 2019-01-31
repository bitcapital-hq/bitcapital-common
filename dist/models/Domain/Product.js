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
const Domain_1 = require("../Domain");
class Product extends base_1.BaseModel {
    constructor(data) {
        super(data);
        this.name = undefined;
        this.domain = undefined;
        this.users = undefined;
    }
}
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], Product.prototype, "name", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Domain_1.Domain)
], Product.prototype, "domain", void 0);
exports.Product = Product;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZHVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9tb2RlbHMvRG9tYWluL1Byb2R1Y3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxxREFBeUQ7QUFDekQscUNBQXdEO0FBQ3hELHNDQUFpRDtBQVNqRCxNQUFhLE9BQVEsU0FBUSxnQkFBUztJQU9wQyxZQUFZLElBQTRCO1FBQ3RDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQU5aLFNBQUksR0FBVyxTQUFTLENBQUM7UUFFekIsV0FBTSxHQUFZLFNBQVMsQ0FBQztRQUM1QixVQUFLLEdBQVksU0FBUyxDQUFDO0lBSTdCLENBQUM7Q0FDRjtBQVJHO0lBREMsNEJBQVUsRUFBRTs7cUNBQ1k7QUFFekI7SUFEQyw0QkFBVSxFQUFFOzhCQUNKLGVBQU07dUNBQWE7QUFKaEMsMEJBVUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJc05vdEVtcHR5LCBJc09wdGlvbmFsIH0gZnJvbSBcImNsYXNzLXZhbGlkYXRvclwiO1xyXG5pbXBvcnQgeyBCYXNlTW9kZWwsIEJhc2VNb2RlbFNjaGVtYSB9IGZyb20gXCIuLi8uLi9iYXNlXCI7XHJcbmltcG9ydCB7IERvbWFpbiwgRG9tYWluU2NoZW1hIH0gZnJvbSBcIi4uL0RvbWFpblwiO1xyXG5pbXBvcnQgeyBVc2VyLCBVc2VyU2NoZW1hIH0gZnJvbSBcIi4uL1VzZXJcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvZHVjdFNjaGVtYSBleHRlbmRzIEJhc2VNb2RlbFNjaGVtYSB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGRvbWFpbj86IERvbWFpblNjaGVtYTtcclxuICB1c2Vycz86IFVzZXJTY2hlbWFbXTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFByb2R1Y3QgZXh0ZW5kcyBCYXNlTW9kZWwgaW1wbGVtZW50cyBQcm9kdWN0U2NoZW1hIHtcclxuICAgIEBJc05vdEVtcHR5KClcclxuICAgIG5hbWU6IHN0cmluZyA9IHVuZGVmaW5lZDtcclxuICAgIEBJc09wdGlvbmFsKClcclxuICAgIGRvbWFpbj86IERvbWFpbiA9IHVuZGVmaW5lZDtcclxuICAgIHVzZXJzPzogVXNlcltdID0gdW5kZWZpbmVkO1xyXG5cclxuICBjb25zdHJ1Y3RvcihkYXRhOiBQYXJ0aWFsPFByb2R1Y3RTY2hlbWE+KSB7XHJcbiAgICBzdXBlcihkYXRhKTtcclxuICB9XHJcbn1cclxuIl19