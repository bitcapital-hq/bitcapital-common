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
        this.slug = undefined;
        this.urls = undefined;
        this.users = undefined;
        this.settings = undefined;
        this.test = undefined;
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
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsAlphanumeric(),
    __metadata("design:type", String)
], Domain.prototype, "slug", void 0);
__decorate([
    class_validator_1.IsFQDN({}, { each: true }),
    __metadata("design:type", Array)
], Domain.prototype, "urls", void 0);
exports.default = Domain;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9tYWluLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL21vZGVscy9Eb21haW4vRG9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscURBQTZFO0FBQzdFLHFDQUF3RDtBQVN4RCxJQUFZLFVBR1g7QUFIRCxXQUFZLFVBQVU7SUFDcEIsMkJBQWEsQ0FBQTtJQUNiLCtCQUFpQixDQUFBO0FBQ25CLENBQUMsRUFIVyxVQUFVLEdBQVYsa0JBQVUsS0FBVixrQkFBVSxRQUdyQjtBQVdELFlBQTRCLFNBQVEsZ0JBQVM7SUFrQjNDLFlBQVksSUFBMkI7UUFDckMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBbEJBLFNBQUksR0FBVyxTQUFTLENBQUM7UUFJdkMsU0FBSSxHQUFlLFNBQVMsQ0FBQztRQUk3QixTQUFJLEdBQVksU0FBUyxDQUFDO1FBRzFCLFNBQUksR0FBYyxTQUFTLENBQUM7UUFFNUIsVUFBSyxHQUFrQixTQUFTLENBQUM7UUFDakMsYUFBUSxHQUFtQixTQUFTLENBQUM7UUFDckMsU0FBSSxHQUFhLFNBQVMsQ0FBQztJQUkzQixDQUFDO0NBQ0Y7QUFwQmU7SUFBYiw0QkFBVSxFQUFFOztvQ0FBMEI7QUFJdkM7SUFGQyw0QkFBVSxFQUFFO0lBQ1osd0JBQU0sQ0FBQyxVQUFVLENBQUM7O29DQUNVO0FBSTdCO0lBRkMsNEJBQVUsRUFBRTtJQUNaLGdDQUFjLEVBQUU7O29DQUNTO0FBRzFCO0lBREMsd0JBQU0sQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7O29DQUNDO0FBWjlCLHlCQXFCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElzQWxwaGFudW1lcmljLCBJc0VudW0sIElzRlFETiwgSXNOb3RFbXB0eSB9IGZyb20gXCJjbGFzcy12YWxpZGF0b3JcIjtcbmltcG9ydCB7IEJhc2VNb2RlbCwgQmFzZU1vZGVsU2NoZW1hIH0gZnJvbSBcIi4uLy4uL2Jhc2VcIjtcbmltcG9ydCB7IFVzZXIsIFVzZXJTY2hlbWEgfSBmcm9tIFwiLi4vVXNlclwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIERvbWFpblNldHRpbmdzIHtcbiAgbG9nbz86IHN0cmluZztcbiAgcHJpbWFyeUNvbG9yPzogc3RyaW5nO1xuICB0aW50Q29sb3I/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBlbnVtIERvbWFpblJvbGUge1xuICBST09UID0gXCJyb290XCIsXG4gIENPTU1PTiA9IFwiY29tbW9uXCJcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEb21haW5TY2hlbWEgZXh0ZW5kcyBCYXNlTW9kZWxTY2hlbWEge1xuICBuYW1lOiBzdHJpbmc7XG4gIHJvbGU6IERvbWFpblJvbGU7XG4gIHRlc3Q/OiBib29sZWFuO1xuICB1cmxzPzogc3RyaW5nW107XG4gIHVzZXJzOiBVc2VyU2NoZW1hW10gfCBudWxsO1xuICBzZXR0aW5nczogRG9tYWluU2V0dGluZ3M7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERvbWFpbiBleHRlbmRzIEJhc2VNb2RlbCBpbXBsZW1lbnRzIERvbWFpblNjaGVtYSB7XG4gIEBJc05vdEVtcHR5KCkgbmFtZTogc3RyaW5nID0gdW5kZWZpbmVkO1xuXG4gIEBJc05vdEVtcHR5KClcbiAgQElzRW51bShEb21haW5Sb2xlKVxuICByb2xlOiBEb21haW5Sb2xlID0gdW5kZWZpbmVkO1xuXG4gIEBJc05vdEVtcHR5KClcbiAgQElzQWxwaGFudW1lcmljKClcbiAgc2x1Zz86IHN0cmluZyA9IHVuZGVmaW5lZDtcblxuICBASXNGUUROKHt9LCB7IGVhY2g6IHRydWUgfSlcbiAgdXJscz86IHN0cmluZ1tdID0gdW5kZWZpbmVkO1xuXG4gIHVzZXJzOiBVc2VyW10gfCBudWxsID0gdW5kZWZpbmVkO1xuICBzZXR0aW5nczogRG9tYWluU2V0dGluZ3MgPSB1bmRlZmluZWQ7XG4gIHRlc3Q/OiBib29sZWFuID0gdW5kZWZpbmVkO1xuXG4gIGNvbnN0cnVjdG9yKGRhdGE6IFBhcnRpYWw8RG9tYWluU2NoZW1hPikge1xuICAgIHN1cGVyKGRhdGEpO1xuICB9XG59XG4iXX0=