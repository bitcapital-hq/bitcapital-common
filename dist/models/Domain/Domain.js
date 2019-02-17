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
        Object.assign(this, data);
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
exports.Domain = Domain;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9tYWluLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL21vZGVscy9Eb21haW4vRG9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscURBQTZFO0FBQzdFLHFDQUF3RDtBQUl4RCxJQUFZLFVBR1g7QUFIRCxXQUFZLFVBQVU7SUFDcEIsMkJBQWEsQ0FBQTtJQUNiLCtCQUFpQixDQUFBO0FBQ25CLENBQUMsRUFIVyxVQUFVLEdBQVYsa0JBQVUsS0FBVixrQkFBVSxRQUdyQjtBQVlELE1BQWEsTUFBTyxTQUFRLGdCQUFTO0lBa0JuQyxZQUFZLElBQTJCO1FBQ3JDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQWxCQSxTQUFJLEdBQVcsU0FBUyxDQUFDO1FBSXZDLFNBQUksR0FBZSxTQUFTLENBQUM7UUFJN0IsU0FBSSxHQUFZLFNBQVMsQ0FBQztRQUcxQixTQUFJLEdBQWMsU0FBUyxDQUFDO1FBRTVCLFVBQUssR0FBa0IsU0FBUyxDQUFDO1FBQ2pDLGFBQVEsR0FBbUIsU0FBUyxDQUFDO1FBQ3JDLFNBQUksR0FBYSxTQUFTLENBQUM7UUFJekIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztDQUNGO0FBckJlO0lBQWIsNEJBQVUsRUFBRTs7b0NBQTBCO0FBSXZDO0lBRkMsNEJBQVUsRUFBRTtJQUNaLHdCQUFNLENBQUMsVUFBVSxDQUFDOztvQ0FDVTtBQUk3QjtJQUZDLDRCQUFVLEVBQUU7SUFDWixnQ0FBYyxFQUFFOztvQ0FDUztBQUcxQjtJQURDLHdCQUFNLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDOztvQ0FDQztBQVo5Qix3QkFzQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJc0FscGhhbnVtZXJpYywgSXNFbnVtLCBJc0ZRRE4sIElzTm90RW1wdHkgfSBmcm9tIFwiY2xhc3MtdmFsaWRhdG9yXCI7XHJcbmltcG9ydCB7IEJhc2VNb2RlbCwgQmFzZU1vZGVsU2NoZW1hIH0gZnJvbSBcIi4uLy4uL2Jhc2VcIjtcclxuaW1wb3J0IHsgVXNlciwgVXNlclNjaGVtYSB9IGZyb20gXCIuLi9Vc2VyXCI7XHJcbmltcG9ydCB7IERvbWFpblNldHRpbmdzU2NoZW1hLCBEb21haW5TZXR0aW5ncyB9IGZyb20gXCIuL0RvbWFpblNldHRpbmdzXCI7XHJcblxyXG5leHBvcnQgZW51bSBEb21haW5Sb2xlIHtcclxuICBST09UID0gXCJyb290XCIsXHJcbiAgQ09NTU9OID0gXCJjb21tb25cIlxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERvbWFpblNjaGVtYSBleHRlbmRzIEJhc2VNb2RlbFNjaGVtYSB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHJvbGU/OiBEb21haW5Sb2xlO1xyXG4gIHRlc3Q/OiBib29sZWFuO1xyXG4gIHVybHM/OiBzdHJpbmdbXTtcclxuICBwb3N0YmFja1VybD86IHN0cmluZztcclxuICB1c2Vycz86IFVzZXJTY2hlbWFbXTtcclxuICBzZXR0aW5ncz86IERvbWFpblNldHRpbmdzU2NoZW1hO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRG9tYWluIGV4dGVuZHMgQmFzZU1vZGVsIGltcGxlbWVudHMgRG9tYWluU2NoZW1hIHtcclxuICBASXNOb3RFbXB0eSgpIG5hbWU6IHN0cmluZyA9IHVuZGVmaW5lZDtcclxuXHJcbiAgQElzTm90RW1wdHkoKVxyXG4gIEBJc0VudW0oRG9tYWluUm9sZSlcclxuICByb2xlOiBEb21haW5Sb2xlID0gdW5kZWZpbmVkO1xyXG5cclxuICBASXNOb3RFbXB0eSgpXHJcbiAgQElzQWxwaGFudW1lcmljKClcclxuICBzbHVnPzogc3RyaW5nID0gdW5kZWZpbmVkO1xyXG5cclxuICBASXNGUUROKHt9LCB7IGVhY2g6IHRydWUgfSlcclxuICB1cmxzPzogc3RyaW5nW10gPSB1bmRlZmluZWQ7XHJcblxyXG4gIHVzZXJzOiBVc2VyW10gfCBudWxsID0gdW5kZWZpbmVkO1xyXG4gIHNldHRpbmdzOiBEb21haW5TZXR0aW5ncyA9IHVuZGVmaW5lZDtcclxuICB0ZXN0PzogYm9vbGVhbiA9IHVuZGVmaW5lZDtcclxuXHJcbiAgY29uc3RydWN0b3IoZGF0YTogUGFydGlhbDxEb21haW5TY2hlbWE+KSB7XHJcbiAgICBzdXBlcihkYXRhKTtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==