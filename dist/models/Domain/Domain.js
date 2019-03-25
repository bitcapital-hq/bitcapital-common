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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9tYWluLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL21vZGVscy9Eb21haW4vRG9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscURBQTZEO0FBQzdELHFDQUF3RDtBQUN4RCxrQ0FBMkM7QUFDM0MscURBQXdFO0FBQ3hFLHVDQUFtRDtBQUVuRCxJQUFZLFVBR1g7QUFIRCxXQUFZLFVBQVU7SUFDcEIsMkJBQWEsQ0FBQTtJQUNiLCtCQUFpQixDQUFBO0FBQ25CLENBQUMsRUFIVyxVQUFVLEdBQVYsa0JBQVUsS0FBVixrQkFBVSxRQUdyQjtBQWFELE1BQWEsTUFBTyxTQUFRLGdCQUFTO0lBZ0JuQyxZQUFZLElBQTJCO1FBQ3JDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQWhCQSxTQUFJLEdBQVcsU0FBUyxDQUFDO1FBSXZDLFNBQUksR0FBZSxTQUFTLENBQUM7UUFHN0IsU0FBSSxHQUFjLFNBQVMsQ0FBQztRQUc1QixVQUFLLEdBQW1CLFNBQVMsQ0FBQztRQUNsQyxhQUFRLEdBQWUsU0FBUyxDQUFDO1FBQ2pDLGFBQVEsR0FBb0IsU0FBUyxDQUFDO1FBQ3RDLFNBQUksR0FBYSxTQUFTLENBQUM7UUFLekIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxXQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLGlCQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSwrQkFBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyRSxDQUFDO0NBQ0Y7QUF4QmU7SUFBYiw0QkFBVSxFQUFFOztvQ0FBMEI7QUFJdkM7SUFGQyw0QkFBVSxFQUFFO0lBQ1osd0JBQU0sQ0FBQyxVQUFVLENBQUM7O29DQUNVO0FBRzdCO0lBREMsd0JBQU0sQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7O29DQUNDO0FBUjlCLHdCQXlCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElzRW51bSwgSXNGUUROLCBJc05vdEVtcHR5IH0gZnJvbSBcImNsYXNzLXZhbGlkYXRvclwiO1xuaW1wb3J0IHsgQmFzZU1vZGVsLCBCYXNlTW9kZWxTY2hlbWEgfSBmcm9tIFwiLi4vLi4vYmFzZVwiO1xuaW1wb3J0IHsgVXNlciwgVXNlclNjaGVtYSB9IGZyb20gXCIuLi9Vc2VyXCI7XG5pbXBvcnQgeyBEb21haW5TZXR0aW5nc1NjaGVtYSwgRG9tYWluU2V0dGluZ3MgfSBmcm9tIFwiLi9Eb21haW5TZXR0aW5nc1wiO1xuaW1wb3J0IHsgUHJvZHVjdCwgUHJvZHVjdFNjaGVtYSB9IGZyb20gXCIuL1Byb2R1Y3RcIjtcblxuZXhwb3J0IGVudW0gRG9tYWluUm9sZSB7XG4gIFJPT1QgPSBcInJvb3RcIixcbiAgQ09NTU9OID0gXCJjb21tb25cIlxufVxuXG5leHBvcnQgaW50ZXJmYWNlIERvbWFpblNjaGVtYSBleHRlbmRzIEJhc2VNb2RlbFNjaGVtYSB7XG4gIG5hbWU6IHN0cmluZztcbiAgcm9sZTogRG9tYWluUm9sZTtcbiAgdGVzdD86IGJvb2xlYW47XG4gIHVybHM/OiBzdHJpbmdbXTtcbiAgcG9zdGJhY2tVcmw/OiBzdHJpbmc7XG4gIHVzZXJzPzogVXNlclNjaGVtYVtdO1xuICBwcm9kdWN0cz86IFByb2R1Y3RTY2hlbWFbXTtcbiAgc2V0dGluZ3M/OiBEb21haW5TZXR0aW5nc1NjaGVtYTtcbn1cblxuZXhwb3J0IGNsYXNzIERvbWFpbiBleHRlbmRzIEJhc2VNb2RlbCBpbXBsZW1lbnRzIERvbWFpblNjaGVtYSB7XG4gIEBJc05vdEVtcHR5KCkgbmFtZTogc3RyaW5nID0gdW5kZWZpbmVkO1xuXG4gIEBJc05vdEVtcHR5KClcbiAgQElzRW51bShEb21haW5Sb2xlKVxuICByb2xlOiBEb21haW5Sb2xlID0gdW5kZWZpbmVkO1xuXG4gIEBJc0ZRRE4oe30sIHsgZWFjaDogdHJ1ZSB9KVxuICB1cmxzPzogc3RyaW5nW10gPSB1bmRlZmluZWQ7XG5cbiAgcG9zdGJhY2tVcmw/OiBzdHJpbmc7XG4gIHVzZXJzPzogVXNlcltdIHwgbnVsbCA9IHVuZGVmaW5lZDtcbiAgcHJvZHVjdHM/OiBQcm9kdWN0W10gPSB1bmRlZmluZWQ7XG4gIHNldHRpbmdzPzogRG9tYWluU2V0dGluZ3MgPSB1bmRlZmluZWQ7XG4gIHRlc3Q/OiBib29sZWFuID0gdW5kZWZpbmVkO1xuXG4gIGNvbnN0cnVjdG9yKGRhdGE6IFBhcnRpYWw8RG9tYWluU2NoZW1hPikge1xuICAgIHN1cGVyKGRhdGEpO1xuXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcblxuICAgIHRoaXMudXNlcnMgPSBkYXRhLnVzZXJzICYmIGRhdGEudXNlcnMubWFwKHVzZXIgPT4gbmV3IFVzZXIodXNlcikpO1xuICAgIHRoaXMucHJvZHVjdHMgPSBkYXRhLnByb2R1Y3RzICYmIGRhdGEucHJvZHVjdHMubWFwKHByb2R1Y3QgPT4gbmV3IFByb2R1Y3QocHJvZHVjdCkpO1xuICAgIHRoaXMuc2V0dGluZ3MgPSBkYXRhLnNldHRpbmdzICYmIG5ldyBEb21haW5TZXR0aW5ncyhkYXRhLnNldHRpbmdzKTtcbiAgfVxufVxuIl19