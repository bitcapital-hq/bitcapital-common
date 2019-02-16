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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9tYWluLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL21vZGVscy9Eb21haW4vRG9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscURBQTZFO0FBQzdFLHFDQUF3RDtBQUl4RCxJQUFZLFVBR1g7QUFIRCxXQUFZLFVBQVU7SUFDcEIsMkJBQWEsQ0FBQTtJQUNiLCtCQUFpQixDQUFBO0FBQ25CLENBQUMsRUFIVyxVQUFVLEdBQVYsa0JBQVUsS0FBVixrQkFBVSxRQUdyQjtBQVlELE1BQWEsTUFBTyxTQUFRLGdCQUFTO0lBa0JuQyxZQUFZLElBQTJCO1FBQ3JDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQWxCQSxTQUFJLEdBQVcsU0FBUyxDQUFDO1FBSXZDLFNBQUksR0FBZSxTQUFTLENBQUM7UUFJN0IsU0FBSSxHQUFZLFNBQVMsQ0FBQztRQUcxQixTQUFJLEdBQWMsU0FBUyxDQUFDO1FBRTVCLFVBQUssR0FBa0IsU0FBUyxDQUFDO1FBQ2pDLGFBQVEsR0FBbUIsU0FBUyxDQUFDO1FBQ3JDLFNBQUksR0FBYSxTQUFTLENBQUM7UUFJekIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztDQUNGO0FBckJlO0lBQWIsNEJBQVUsRUFBRTs7b0NBQTBCO0FBSXZDO0lBRkMsNEJBQVUsRUFBRTtJQUNaLHdCQUFNLENBQUMsVUFBVSxDQUFDOztvQ0FDVTtBQUk3QjtJQUZDLDRCQUFVLEVBQUU7SUFDWixnQ0FBYyxFQUFFOztvQ0FDUztBQUcxQjtJQURDLHdCQUFNLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDOztvQ0FDQztBQVo5Qix3QkFzQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJc0FscGhhbnVtZXJpYywgSXNFbnVtLCBJc0ZRRE4sIElzTm90RW1wdHkgfSBmcm9tIFwiY2xhc3MtdmFsaWRhdG9yXCI7XG5pbXBvcnQgeyBCYXNlTW9kZWwsIEJhc2VNb2RlbFNjaGVtYSB9IGZyb20gXCIuLi8uLi9iYXNlXCI7XG5pbXBvcnQgeyBVc2VyLCBVc2VyU2NoZW1hIH0gZnJvbSBcIi4uL1VzZXJcIjtcbmltcG9ydCB7IERvbWFpblNldHRpbmdzU2NoZW1hLCBEb21haW5TZXR0aW5ncyB9IGZyb20gXCIuL0RvbWFpblNldHRpbmdzXCI7XG5cbmV4cG9ydCBlbnVtIERvbWFpblJvbGUge1xuICBST09UID0gXCJyb290XCIsXG4gIENPTU1PTiA9IFwiY29tbW9uXCJcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEb21haW5TY2hlbWEgZXh0ZW5kcyBCYXNlTW9kZWxTY2hlbWEge1xuICBuYW1lOiBzdHJpbmc7XG4gIHJvbGU/OiBEb21haW5Sb2xlO1xuICB0ZXN0PzogYm9vbGVhbjtcbiAgdXJscz86IHN0cmluZ1tdO1xuICBwb3N0YmFja1VybD86IHN0cmluZztcbiAgdXNlcnM/OiBVc2VyU2NoZW1hW107XG4gIHNldHRpbmdzPzogRG9tYWluU2V0dGluZ3NTY2hlbWE7XG59XG5cbmV4cG9ydCBjbGFzcyBEb21haW4gZXh0ZW5kcyBCYXNlTW9kZWwgaW1wbGVtZW50cyBEb21haW5TY2hlbWEge1xuICBASXNOb3RFbXB0eSgpIG5hbWU6IHN0cmluZyA9IHVuZGVmaW5lZDtcblxuICBASXNOb3RFbXB0eSgpXG4gIEBJc0VudW0oRG9tYWluUm9sZSlcbiAgcm9sZTogRG9tYWluUm9sZSA9IHVuZGVmaW5lZDtcblxuICBASXNOb3RFbXB0eSgpXG4gIEBJc0FscGhhbnVtZXJpYygpXG4gIHNsdWc/OiBzdHJpbmcgPSB1bmRlZmluZWQ7XG5cbiAgQElzRlFETih7fSwgeyBlYWNoOiB0cnVlIH0pXG4gIHVybHM/OiBzdHJpbmdbXSA9IHVuZGVmaW5lZDtcblxuICB1c2VyczogVXNlcltdIHwgbnVsbCA9IHVuZGVmaW5lZDtcbiAgc2V0dGluZ3M6IERvbWFpblNldHRpbmdzID0gdW5kZWZpbmVkO1xuICB0ZXN0PzogYm9vbGVhbiA9IHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3RvcihkYXRhOiBQYXJ0aWFsPERvbWFpblNjaGVtYT4pIHtcbiAgICBzdXBlcihkYXRhKTtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xuICB9XG59XG4iXX0=