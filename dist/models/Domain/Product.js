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
const Wallet_1 = require("../Wallet");
class Product extends base_1.BaseModel {
    constructor(data) {
        super(data);
        this.name = undefined;
        this.domain = undefined;
        this.wallets = undefined;
        Object.assign(this, data);
        this.domain = data.domain && new Domain_1.Domain(data.domain);
        this.wallets = data.wallets && data.wallets.map(wallet => new Wallet_1.Wallet(wallet));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZHVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9tb2RlbHMvRG9tYWluL1Byb2R1Y3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxxREFBeUQ7QUFDekQscUNBQXdEO0FBQ3hELHNDQUFpRDtBQUNqRCxzQ0FBaUQ7QUFRakQsTUFBYSxPQUFRLFNBQVEsZ0JBQVM7SUFLcEMsWUFBWSxJQUE0QjtRQUN0QyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFMQSxTQUFJLEdBQVcsU0FBUyxDQUFDO1FBQ3pCLFdBQU0sR0FBWSxTQUFTLENBQUM7UUFDMUMsWUFBTyxHQUFjLFNBQVMsQ0FBQztRQUs3QixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUUxQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxlQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksZUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDaEYsQ0FBQztDQUNGO0FBWmU7SUFBYiw0QkFBVSxFQUFFOztxQ0FBMEI7QUFDekI7SUFBYiw0QkFBVSxFQUFFOzhCQUFVLGVBQU07dUNBQWE7QUFGNUMsMEJBYUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJc05vdEVtcHR5LCBJc09wdGlvbmFsIH0gZnJvbSBcImNsYXNzLXZhbGlkYXRvclwiO1xyXG5pbXBvcnQgeyBCYXNlTW9kZWwsIEJhc2VNb2RlbFNjaGVtYSB9IGZyb20gXCIuLi8uLi9iYXNlXCI7XHJcbmltcG9ydCB7IERvbWFpbiwgRG9tYWluU2NoZW1hIH0gZnJvbSBcIi4uL0RvbWFpblwiO1xyXG5pbXBvcnQgeyBXYWxsZXQsIFdhbGxldFNjaGVtYSB9IGZyb20gXCIuLi9XYWxsZXRcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvZHVjdFNjaGVtYSBleHRlbmRzIEJhc2VNb2RlbFNjaGVtYSB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGRvbWFpbj86IERvbWFpblNjaGVtYTtcclxuICB3YWxsZXRzPzogV2FsbGV0U2NoZW1hW107XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9kdWN0IGV4dGVuZHMgQmFzZU1vZGVsIGltcGxlbWVudHMgUHJvZHVjdFNjaGVtYSB7XHJcbiAgQElzTm90RW1wdHkoKSBuYW1lOiBzdHJpbmcgPSB1bmRlZmluZWQ7XHJcbiAgQElzT3B0aW9uYWwoKSBkb21haW4/OiBEb21haW4gPSB1bmRlZmluZWQ7XHJcbiAgd2FsbGV0cz86IFdhbGxldFtdID0gdW5kZWZpbmVkO1xyXG5cclxuICBjb25zdHJ1Y3RvcihkYXRhOiBQYXJ0aWFsPFByb2R1Y3RTY2hlbWE+KSB7XHJcbiAgICBzdXBlcihkYXRhKTtcclxuXHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xyXG5cclxuICAgIHRoaXMuZG9tYWluID0gZGF0YS5kb21haW4gJiYgbmV3IERvbWFpbihkYXRhLmRvbWFpbik7XHJcbiAgICB0aGlzLndhbGxldHMgPSBkYXRhLndhbGxldHMgJiYgZGF0YS53YWxsZXRzLm1hcCh3YWxsZXQgPT4gbmV3IFdhbGxldCh3YWxsZXQpKTtcclxuICB9XHJcbn1cclxuIl19