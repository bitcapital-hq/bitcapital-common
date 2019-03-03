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
const Consumer_1 = require("./Consumer");
var PhoneType;
(function (PhoneType) {
    PhoneType["HOME"] = "home";
    PhoneType["WORK"] = "work";
    PhoneType["MOBILE"] = "mobile";
})(PhoneType = exports.PhoneType || (exports.PhoneType = {}));
class Phone extends base_1.BaseModel {
    constructor(data) {
        super(data);
        this.type = PhoneType.MOBILE;
        this.consumer = undefined;
        this.consumerId = undefined;
        this.code = undefined;
        this.number = undefined;
        this.verifiedAt = undefined;
        Object.assign(this, data);
        this.verifiedAt = data.verifiedAt instanceof Date ? data.verifiedAt : new Date(data.verifiedAt);
    }
}
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], Phone.prototype, "type", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Consumer_1.Consumer)
], Phone.prototype, "consumer", void 0);
__decorate([
    class_validator_1.IsUUID(),
    __metadata("design:type", String)
], Phone.prototype, "consumerId", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsNumberString(),
    __metadata("design:type", String)
], Phone.prototype, "code", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsNumberString(),
    __metadata("design:type", String)
], Phone.prototype, "number", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], Phone.prototype, "extension", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsDate(),
    class_validator_1.MaxDate(new Date(new Date().getTime() + 5 * 60000)) // Now + 5min for server time differences
    ,
    __metadata("design:type", Date)
], Phone.prototype, "verifiedAt", void 0);
exports.Phone = Phone;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGhvbmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvbW9kZWxzL0NvbnN1bWVyL1Bob25lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscURBQWtHO0FBQ2xHLHFDQUF3RDtBQUN4RCx5Q0FBc0Q7QUFFdEQsSUFBWSxTQUlYO0FBSkQsV0FBWSxTQUFTO0lBQ25CLDBCQUFhLENBQUE7SUFDYiwwQkFBYSxDQUFBO0lBQ2IsOEJBQWlCLENBQUE7QUFDbkIsQ0FBQyxFQUpXLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBSXBCO0FBWUQsTUFBYSxLQUFNLFNBQVEsZ0JBQVM7SUFzQmxDLFlBQVksSUFBMEI7UUFDcEMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBdEJBLFNBQUksR0FBZSxTQUFTLENBQUMsTUFBTSxDQUFDO1FBRXBDLGFBQVEsR0FBYyxTQUFTLENBQUM7UUFFcEMsZUFBVSxHQUFZLFNBQVMsQ0FBQztRQUkxQyxTQUFJLEdBQVcsU0FBUyxDQUFDO1FBSXpCLFdBQU0sR0FBVyxTQUFTLENBQUM7UUFPM0IsZUFBVSxHQUFVLFNBQVMsQ0FBQztRQUk1QixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLFlBQVksSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDbEcsQ0FBQztDQUNGO0FBMUJlO0lBQWIsNEJBQVUsRUFBRTs7bUNBQXFDO0FBRXBDO0lBQWIsNEJBQVUsRUFBRTs4QkFBWSxtQkFBUTt1Q0FBYTtBQUVwQztJQUFULHdCQUFNLEVBQUU7O3lDQUFpQztBQUkxQztJQUZDLDRCQUFVLEVBQUU7SUFDWixnQ0FBYyxFQUFFOzttQ0FDUTtBQUl6QjtJQUZDLDRCQUFVLEVBQUU7SUFDWixnQ0FBYyxFQUFFOztxQ0FDVTtBQUViO0lBQWIsNEJBQVUsRUFBRTs7d0NBQW9CO0FBS2pDO0lBSEMsNEJBQVUsRUFBRTtJQUNaLHdCQUFNLEVBQUU7SUFDUix5QkFBTyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMseUNBQXlDOzs4QkFDakYsSUFBSTt5Q0FBYTtBQXBCaEMsc0JBMkJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSXNEYXRlLCBJc05vdEVtcHR5LCBJc051bWJlclN0cmluZywgSXNPcHRpb25hbCwgSXNVVUlELCBNYXhEYXRlIH0gZnJvbSBcImNsYXNzLXZhbGlkYXRvclwiO1xyXG5pbXBvcnQgeyBCYXNlTW9kZWwsIEJhc2VNb2RlbFNjaGVtYSB9IGZyb20gXCIuLi8uLi9iYXNlXCI7XHJcbmltcG9ydCB7IENvbnN1bWVyLCBDb25zdW1lclNjaGVtYSB9IGZyb20gXCIuL0NvbnN1bWVyXCI7XHJcblxyXG5leHBvcnQgZW51bSBQaG9uZVR5cGUge1xyXG4gIEhPTUUgPSBcImhvbWVcIixcclxuICBXT1JLID0gXCJ3b3JrXCIsXHJcbiAgTU9CSUxFID0gXCJtb2JpbGVcIlxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBob25lU2NoZW1hIGV4dGVuZHMgQmFzZU1vZGVsU2NoZW1hIHtcclxuICB0eXBlPzogUGhvbmVUeXBlO1xyXG4gIGNvbnN1bWVyPzogQ29uc3VtZXJTY2hlbWE7XHJcbiAgY29uc3VtZXJJZD86IHN0cmluZztcclxuICBjb2RlOiBzdHJpbmc7XHJcbiAgbnVtYmVyOiBzdHJpbmc7XHJcbiAgZXh0ZW5zaW9uPzogc3RyaW5nO1xyXG4gIHZlcmlmaWVkQXQ/OiBEYXRlIHwgc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUGhvbmUgZXh0ZW5kcyBCYXNlTW9kZWwgaW1wbGVtZW50cyBQaG9uZVNjaGVtYSB7XHJcbiAgQElzT3B0aW9uYWwoKSB0eXBlPzogUGhvbmVUeXBlID0gUGhvbmVUeXBlLk1PQklMRTtcclxuXHJcbiAgQElzT3B0aW9uYWwoKSBjb25zdW1lcj86IENvbnN1bWVyID0gdW5kZWZpbmVkO1xyXG5cclxuICBASXNVVUlEKCkgY29uc3VtZXJJZD86IHN0cmluZyA9IHVuZGVmaW5lZDtcclxuXHJcbiAgQElzTm90RW1wdHkoKVxyXG4gIEBJc051bWJlclN0cmluZygpXHJcbiAgY29kZTogc3RyaW5nID0gdW5kZWZpbmVkO1xyXG5cclxuICBASXNOb3RFbXB0eSgpXHJcbiAgQElzTnVtYmVyU3RyaW5nKClcclxuICBudW1iZXI6IHN0cmluZyA9IHVuZGVmaW5lZDtcclxuXHJcbiAgQElzT3B0aW9uYWwoKSBleHRlbnNpb24/OiBzdHJpbmc7XHJcblxyXG4gIEBJc09wdGlvbmFsKClcclxuICBASXNEYXRlKClcclxuICBATWF4RGF0ZShuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldFRpbWUoKSArIDUgKiA2MDAwMCkpIC8vIE5vdyArIDVtaW4gZm9yIHNlcnZlciB0aW1lIGRpZmZlcmVuY2VzXHJcbiAgdmVyaWZpZWRBdD86IERhdGUgPSB1bmRlZmluZWQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRhdGE6IFBhcnRpYWw8UGhvbmVTY2hlbWE+KSB7XHJcbiAgICBzdXBlcihkYXRhKTtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XHJcbiAgICB0aGlzLnZlcmlmaWVkQXQgPSBkYXRhLnZlcmlmaWVkQXQgaW5zdGFuY2VvZiBEYXRlID8gZGF0YS52ZXJpZmllZEF0IDogbmV3IERhdGUoZGF0YS52ZXJpZmllZEF0KTtcclxuICB9XHJcbn1cclxuIl19