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
const User_1 = require("../User");
const DomainSettings_1 = require("./DomainSettings");
const Product_1 = require("./Product");
var DomainRole;
(function (DomainRole) {
    DomainRole["ROOT"] = "root";
    DomainRole["COMMON"] = "common";
})(DomainRole = exports.DomainRole || (exports.DomainRole = {}));
class Domain extends base_1.BaseModel {
    constructor(data) {
        super(data);
        this.name = undefined;
        this.role = undefined;
        this.urls = undefined;
        this.users = undefined;
        this.products = undefined;
        this.settings = undefined;
        this.test = undefined;
        Object.assign(this, data);
        this.users = data.users && data.users.map(user => new User_1.User(user));
        this.products = data.products && data.products.map(product => new Product_1.Product(product));
        this.settings = data.settings && new DomainSettings_1.DomainSettings(data.settings);
    }
}
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], Domain.prototype, "name", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsEnum(DomainRole),
    __metadata("design:type", String)
], Domain.prototype, "role", void 0);
__decorate([
    class_validator_1.IsFQDN({}, { each: true }),
    __metadata("design:type", Array)
], Domain.prototype, "urls", void 0);
exports.Domain = Domain;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9tYWluLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL21vZGVscy9Eb21haW4vRG9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscURBQTZEO0FBQzdELHFDQUF3RDtBQUN4RCxrQ0FBMkM7QUFDM0MscURBQXdFO0FBQ3hFLHVDQUFtRDtBQUVuRCxJQUFZLFVBR1g7QUFIRCxXQUFZLFVBQVU7SUFDcEIsMkJBQWEsQ0FBQTtJQUNiLCtCQUFpQixDQUFBO0FBQ25CLENBQUMsRUFIVyxVQUFVLEdBQVYsa0JBQVUsS0FBVixrQkFBVSxRQUdyQjtBQWFELE1BQWEsTUFBTyxTQUFRLGdCQUFTO0lBZ0JuQyxZQUFZLElBQTJCO1FBQ3JDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQWhCQSxTQUFJLEdBQVcsU0FBUyxDQUFDO1FBSXZDLFNBQUksR0FBZSxTQUFTLENBQUM7UUFHN0IsU0FBSSxHQUFjLFNBQVMsQ0FBQztRQUc1QixVQUFLLEdBQW1CLFNBQVMsQ0FBQztRQUNsQyxhQUFRLEdBQWUsU0FBUyxDQUFDO1FBQ2pDLGFBQVEsR0FBb0IsU0FBUyxDQUFDO1FBQ3RDLFNBQUksR0FBYSxTQUFTLENBQUM7UUFLekIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxXQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLGlCQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSwrQkFBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyRSxDQUFDO0NBQ0Y7QUF4QmU7SUFBYiw0QkFBVSxFQUFFOztvQ0FBMEI7QUFJdkM7SUFGQyw0QkFBVSxFQUFFO0lBQ1osd0JBQU0sQ0FBQyxVQUFVLENBQUM7O29DQUNVO0FBRzdCO0lBREMsd0JBQU0sQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7O29DQUNDO0FBUjlCLHdCQXlCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElzRW51bSwgSXNGUUROLCBJc05vdEVtcHR5IH0gZnJvbSBcImNsYXNzLXZhbGlkYXRvclwiO1xyXG5pbXBvcnQgeyBCYXNlTW9kZWwsIEJhc2VNb2RlbFNjaGVtYSB9IGZyb20gXCIuLi8uLi9iYXNlXCI7XHJcbmltcG9ydCB7IFVzZXIsIFVzZXJTY2hlbWEgfSBmcm9tIFwiLi4vVXNlclwiO1xyXG5pbXBvcnQgeyBEb21haW5TZXR0aW5nc1NjaGVtYSwgRG9tYWluU2V0dGluZ3MgfSBmcm9tIFwiLi9Eb21haW5TZXR0aW5nc1wiO1xyXG5pbXBvcnQgeyBQcm9kdWN0LCBQcm9kdWN0U2NoZW1hIH0gZnJvbSBcIi4vUHJvZHVjdFwiO1xyXG5cclxuZXhwb3J0IGVudW0gRG9tYWluUm9sZSB7XHJcbiAgUk9PVCA9IFwicm9vdFwiLFxyXG4gIENPTU1PTiA9IFwiY29tbW9uXCJcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEb21haW5TY2hlbWEgZXh0ZW5kcyBCYXNlTW9kZWxTY2hlbWEge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICByb2xlOiBEb21haW5Sb2xlO1xyXG4gIHRlc3Q/OiBib29sZWFuO1xyXG4gIHVybHM/OiBzdHJpbmdbXTtcclxuICBwb3N0YmFja1VybD86IHN0cmluZztcclxuICB1c2Vycz86IFVzZXJTY2hlbWFbXTtcclxuICBwcm9kdWN0cz86IFByb2R1Y3RTY2hlbWFbXTtcclxuICBzZXR0aW5ncz86IERvbWFpblNldHRpbmdzU2NoZW1hO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRG9tYWluIGV4dGVuZHMgQmFzZU1vZGVsIGltcGxlbWVudHMgRG9tYWluU2NoZW1hIHtcclxuICBASXNOb3RFbXB0eSgpIG5hbWU6IHN0cmluZyA9IHVuZGVmaW5lZDtcclxuXHJcbiAgQElzTm90RW1wdHkoKVxyXG4gIEBJc0VudW0oRG9tYWluUm9sZSlcclxuICByb2xlOiBEb21haW5Sb2xlID0gdW5kZWZpbmVkO1xyXG5cclxuICBASXNGUUROKHt9LCB7IGVhY2g6IHRydWUgfSlcclxuICB1cmxzPzogc3RyaW5nW10gPSB1bmRlZmluZWQ7XHJcblxyXG4gIHBvc3RiYWNrVXJsPzogc3RyaW5nO1xyXG4gIHVzZXJzPzogVXNlcltdIHwgbnVsbCA9IHVuZGVmaW5lZDtcclxuICBwcm9kdWN0cz86IFByb2R1Y3RbXSA9IHVuZGVmaW5lZDtcclxuICBzZXR0aW5ncz86IERvbWFpblNldHRpbmdzID0gdW5kZWZpbmVkO1xyXG4gIHRlc3Q/OiBib29sZWFuID0gdW5kZWZpbmVkO1xyXG5cclxuICBjb25zdHJ1Y3RvcihkYXRhOiBQYXJ0aWFsPERvbWFpblNjaGVtYT4pIHtcclxuICAgIHN1cGVyKGRhdGEpO1xyXG5cclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XHJcblxyXG4gICAgdGhpcy51c2VycyA9IGRhdGEudXNlcnMgJiYgZGF0YS51c2Vycy5tYXAodXNlciA9PiBuZXcgVXNlcih1c2VyKSk7XHJcbiAgICB0aGlzLnByb2R1Y3RzID0gZGF0YS5wcm9kdWN0cyAmJiBkYXRhLnByb2R1Y3RzLm1hcChwcm9kdWN0ID0+IG5ldyBQcm9kdWN0KHByb2R1Y3QpKTtcclxuICAgIHRoaXMuc2V0dGluZ3MgPSBkYXRhLnNldHRpbmdzICYmIG5ldyBEb21haW5TZXR0aW5ncyhkYXRhLnNldHRpbmdzKTtcclxuICB9XHJcbn1cclxuIl19