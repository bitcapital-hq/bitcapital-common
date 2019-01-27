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
exports.Domain = Domain;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9tYWluLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL21vZGVscy9Eb21haW4vRG9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscURBQTZFO0FBQzdFLHFDQUF3RDtBQUl4RCxJQUFZLFVBR1g7QUFIRCxXQUFZLFVBQVU7SUFDcEIsMkJBQWEsQ0FBQTtJQUNiLCtCQUFpQixDQUFBO0FBQ25CLENBQUMsRUFIVyxVQUFVLEdBQVYsa0JBQVUsS0FBVixrQkFBVSxRQUdyQjtBQVlELE1BQWEsTUFBTyxTQUFRLGdCQUFTO0lBa0JuQyxZQUFZLElBQTJCO1FBQ3JDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQWxCQSxTQUFJLEdBQVcsU0FBUyxDQUFDO1FBSXZDLFNBQUksR0FBZSxTQUFTLENBQUM7UUFJN0IsU0FBSSxHQUFZLFNBQVMsQ0FBQztRQUcxQixTQUFJLEdBQWMsU0FBUyxDQUFDO1FBRTVCLFVBQUssR0FBa0IsU0FBUyxDQUFDO1FBQ2pDLGFBQVEsR0FBbUIsU0FBUyxDQUFDO1FBQ3JDLFNBQUksR0FBYSxTQUFTLENBQUM7SUFJM0IsQ0FBQztDQUNGO0FBcEJlO0lBQWIsNEJBQVUsRUFBRTs7b0NBQTBCO0FBSXZDO0lBRkMsNEJBQVUsRUFBRTtJQUNaLHdCQUFNLENBQUMsVUFBVSxDQUFDOztvQ0FDVTtBQUk3QjtJQUZDLDRCQUFVLEVBQUU7SUFDWixnQ0FBYyxFQUFFOztvQ0FDUztBQUcxQjtJQURDLHdCQUFNLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDOztvQ0FDQztBQVo5Qix3QkFxQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJc0FscGhhbnVtZXJpYywgSXNFbnVtLCBJc0ZRRE4sIElzTm90RW1wdHkgfSBmcm9tIFwiY2xhc3MtdmFsaWRhdG9yXCI7XG5pbXBvcnQgeyBCYXNlTW9kZWwsIEJhc2VNb2RlbFNjaGVtYSB9IGZyb20gXCIuLi8uLi9iYXNlXCI7XG5pbXBvcnQgeyBVc2VyLCBVc2VyU2NoZW1hIH0gZnJvbSBcIi4uL1VzZXJcIjtcbmltcG9ydCB7IERvbWFpblNldHRpbmdzU2NoZW1hLCBEb21haW5TZXR0aW5ncyB9IGZyb20gXCIuL0RvbWFpblNldHRpbmdzXCI7XG5cbmV4cG9ydCBlbnVtIERvbWFpblJvbGUge1xuICBST09UID0gXCJyb290XCIsXG4gIENPTU1PTiA9IFwiY29tbW9uXCJcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEb21haW5TY2hlbWEgZXh0ZW5kcyBCYXNlTW9kZWxTY2hlbWEge1xuICBuYW1lOiBzdHJpbmc7XG4gIHJvbGU6IERvbWFpblJvbGU7XG4gIHRlc3Q/OiBib29sZWFuO1xuICB1cmxzPzogc3RyaW5nW107XG4gIHBvc3RiYWNrVXJsPzogc3RyaW5nO1xuICB1c2Vycz86IFVzZXJTY2hlbWFbXTtcbiAgc2V0dGluZ3M6IERvbWFpblNldHRpbmdzU2NoZW1hO1xufVxuXG5leHBvcnQgY2xhc3MgRG9tYWluIGV4dGVuZHMgQmFzZU1vZGVsIGltcGxlbWVudHMgRG9tYWluU2NoZW1hIHtcbiAgQElzTm90RW1wdHkoKSBuYW1lOiBzdHJpbmcgPSB1bmRlZmluZWQ7XG5cbiAgQElzTm90RW1wdHkoKVxuICBASXNFbnVtKERvbWFpblJvbGUpXG4gIHJvbGU6IERvbWFpblJvbGUgPSB1bmRlZmluZWQ7XG5cbiAgQElzTm90RW1wdHkoKVxuICBASXNBbHBoYW51bWVyaWMoKVxuICBzbHVnPzogc3RyaW5nID0gdW5kZWZpbmVkO1xuXG4gIEBJc0ZRRE4oe30sIHsgZWFjaDogdHJ1ZSB9KVxuICB1cmxzPzogc3RyaW5nW10gPSB1bmRlZmluZWQ7XG5cbiAgdXNlcnM6IFVzZXJbXSB8IG51bGwgPSB1bmRlZmluZWQ7XG4gIHNldHRpbmdzOiBEb21haW5TZXR0aW5ncyA9IHVuZGVmaW5lZDtcbiAgdGVzdD86IGJvb2xlYW4gPSB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IoZGF0YTogUGFydGlhbDxEb21haW5TY2hlbWE+KSB7XG4gICAgc3VwZXIoZGF0YSk7XG4gIH1cbn1cbiJdfQ==