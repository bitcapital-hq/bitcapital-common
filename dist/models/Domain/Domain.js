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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9tYWluLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL21vZGVscy9Eb21haW4vRG9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscURBQTZFO0FBQzdFLHFDQUF3RDtBQVN4RCxJQUFZLFVBR1g7QUFIRCxXQUFZLFVBQVU7SUFDcEIsMkJBQWEsQ0FBQTtJQUNiLCtCQUFpQixDQUFBO0FBQ25CLENBQUMsRUFIVyxVQUFVLEdBQVYsa0JBQVUsS0FBVixrQkFBVSxRQUdyQjtBQVlELFlBQTRCLFNBQVEsZ0JBQVM7SUFrQjNDLFlBQVksSUFBMkI7UUFDckMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBbEJBLFNBQUksR0FBVyxTQUFTLENBQUM7UUFJdkMsU0FBSSxHQUFlLFNBQVMsQ0FBQztRQUk3QixTQUFJLEdBQVcsU0FBUyxDQUFDO1FBR3pCLFNBQUksR0FBYyxTQUFTLENBQUM7UUFFNUIsVUFBSyxHQUFrQixTQUFTLENBQUM7UUFDakMsYUFBUSxHQUFtQixTQUFTLENBQUM7UUFDckMsU0FBSSxHQUFhLFNBQVMsQ0FBQztJQUkzQixDQUFDO0NBQ0Y7QUFwQmU7SUFBYiw0QkFBVSxFQUFFOztvQ0FBMEI7QUFJdkM7SUFGQyw0QkFBVSxFQUFFO0lBQ1osd0JBQU0sQ0FBQyxVQUFVLENBQUM7O29DQUNVO0FBSTdCO0lBRkMsNEJBQVUsRUFBRTtJQUNaLGdDQUFjLEVBQUU7O29DQUNRO0FBR3pCO0lBREMsd0JBQU0sQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7O29DQUNDO0FBWjlCLHlCQXFCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElzTm90RW1wdHksIElzRW51bSwgSXNBbHBoYW51bWVyaWMsIElzRlFETiB9IGZyb20gXCJjbGFzcy12YWxpZGF0b3JcIjtcbmltcG9ydCB7IEJhc2VNb2RlbFNjaGVtYSwgQmFzZU1vZGVsIH0gZnJvbSBcIi4uLy4uL2Jhc2VcIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vVXNlclwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIERvbWFpblNldHRpbmdzIHtcbiAgbG9nbz86IHN0cmluZztcbiAgcHJpbWFyeUNvbG9yPzogc3RyaW5nO1xuICB0aW50Q29sb3I/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBlbnVtIERvbWFpblJvbGUge1xuICBST09UID0gXCJyb290XCIsXG4gIENPTU1PTiA9IFwiY29tbW9uXCJcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEb21haW5TY2hlbWEgZXh0ZW5kcyBCYXNlTW9kZWxTY2hlbWEge1xuICBuYW1lOiBzdHJpbmc7XG4gIHJvbGU6IERvbWFpblJvbGU7XG4gIHNsdWc6IHN0cmluZztcbiAgdGVzdD86IGJvb2xlYW47XG4gIHVybHM/OiBzdHJpbmdbXTtcbiAgdXNlcnM6IFVzZXJbXSB8IG51bGw7XG4gIHNldHRpbmdzOiBEb21haW5TZXR0aW5ncztcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRG9tYWluIGV4dGVuZHMgQmFzZU1vZGVsIGltcGxlbWVudHMgRG9tYWluU2NoZW1hIHtcbiAgQElzTm90RW1wdHkoKSBuYW1lOiBzdHJpbmcgPSB1bmRlZmluZWQ7XG5cbiAgQElzTm90RW1wdHkoKVxuICBASXNFbnVtKERvbWFpblJvbGUpXG4gIHJvbGU6IERvbWFpblJvbGUgPSB1bmRlZmluZWQ7XG5cbiAgQElzTm90RW1wdHkoKVxuICBASXNBbHBoYW51bWVyaWMoKVxuICBzbHVnOiBzdHJpbmcgPSB1bmRlZmluZWQ7XG5cbiAgQElzRlFETih7fSwgeyBlYWNoOiB0cnVlIH0pXG4gIHVybHM/OiBzdHJpbmdbXSA9IHVuZGVmaW5lZDtcblxuICB1c2VyczogVXNlcltdIHwgbnVsbCA9IHVuZGVmaW5lZDtcbiAgc2V0dGluZ3M6IERvbWFpblNldHRpbmdzID0gdW5kZWZpbmVkO1xuICB0ZXN0PzogYm9vbGVhbiA9IHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3RvcihkYXRhOiBQYXJ0aWFsPERvbWFpblNjaGVtYT4pIHtcbiAgICBzdXBlcihkYXRhKTtcbiAgfVxufVxuIl19