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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZHVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9tb2RlbHMvRG9tYWluL1Byb2R1Y3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxxREFBeUQ7QUFDekQscUNBQXdEO0FBQ3hELHNDQUFpRDtBQVNqRCxNQUFhLE9BQVEsU0FBUSxnQkFBUztJQUtwQyxZQUFZLElBQTRCO1FBQ3RDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUxBLFNBQUksR0FBVyxTQUFTLENBQUM7UUFDekIsV0FBTSxHQUFZLFNBQVMsQ0FBQztRQUMxQyxVQUFLLEdBQVksU0FBUyxDQUFDO0lBSTNCLENBQUM7Q0FDRjtBQVBlO0lBQWIsNEJBQVUsRUFBRTs7cUNBQTBCO0FBQ3pCO0lBQWIsNEJBQVUsRUFBRTs4QkFBVSxlQUFNO3VDQUFhO0FBRjVDLDBCQVFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSXNOb3RFbXB0eSwgSXNPcHRpb25hbCB9IGZyb20gXCJjbGFzcy12YWxpZGF0b3JcIjtcclxuaW1wb3J0IHsgQmFzZU1vZGVsLCBCYXNlTW9kZWxTY2hlbWEgfSBmcm9tIFwiLi4vLi4vYmFzZVwiO1xyXG5pbXBvcnQgeyBEb21haW4sIERvbWFpblNjaGVtYSB9IGZyb20gXCIuLi9Eb21haW5cIjtcclxuaW1wb3J0IHsgVXNlciwgVXNlclNjaGVtYSB9IGZyb20gXCIuLi9Vc2VyXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFByb2R1Y3RTY2hlbWEgZXh0ZW5kcyBCYXNlTW9kZWxTY2hlbWEge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBkb21haW4/OiBEb21haW5TY2hlbWE7XHJcbiAgdXNlcnM/OiBVc2VyU2NoZW1hW107XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9kdWN0IGV4dGVuZHMgQmFzZU1vZGVsIGltcGxlbWVudHMgUHJvZHVjdFNjaGVtYSB7XHJcbiAgQElzTm90RW1wdHkoKSBuYW1lOiBzdHJpbmcgPSB1bmRlZmluZWQ7XHJcbiAgQElzT3B0aW9uYWwoKSBkb21haW4/OiBEb21haW4gPSB1bmRlZmluZWQ7XHJcbiAgdXNlcnM/OiBVc2VyW10gPSB1bmRlZmluZWQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRhdGE6IFBhcnRpYWw8UHJvZHVjdFNjaGVtYT4pIHtcclxuICAgIHN1cGVyKGRhdGEpO1xyXG4gIH1cclxufVxyXG4iXX0=