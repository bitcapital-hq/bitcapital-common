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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGhvbmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvbW9kZWxzL0NvbnN1bWVyL1Bob25lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscURBQWtHO0FBQ2xHLHFDQUF3RDtBQUN4RCx5Q0FBc0Q7QUFFdEQsSUFBWSxTQUlYO0FBSkQsV0FBWSxTQUFTO0lBQ25CLDBCQUFhLENBQUE7SUFDYiwwQkFBYSxDQUFBO0lBQ2IsOEJBQWlCLENBQUE7QUFDbkIsQ0FBQyxFQUpXLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBSXBCO0FBWUQsTUFBYSxLQUFNLFNBQVEsZ0JBQVM7SUFzQmxDLFlBQVksSUFBMEI7UUFDcEMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBdEJBLFNBQUksR0FBZSxTQUFTLENBQUMsTUFBTSxDQUFDO1FBRXBDLGFBQVEsR0FBYyxTQUFTLENBQUM7UUFFcEMsZUFBVSxHQUFZLFNBQVMsQ0FBQztRQUkxQyxTQUFJLEdBQVcsU0FBUyxDQUFDO1FBSXpCLFdBQU0sR0FBVyxTQUFTLENBQUM7UUFPM0IsZUFBVSxHQUFVLFNBQVMsQ0FBQztRQUk1QixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLFlBQVksSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDbEcsQ0FBQztDQUNGO0FBMUJlO0lBQWIsNEJBQVUsRUFBRTs7bUNBQXFDO0FBRXBDO0lBQWIsNEJBQVUsRUFBRTs4QkFBWSxtQkFBUTt1Q0FBYTtBQUVwQztJQUFULHdCQUFNLEVBQUU7O3lDQUFpQztBQUkxQztJQUZDLDRCQUFVLEVBQUU7SUFDWixnQ0FBYyxFQUFFOzttQ0FDUTtBQUl6QjtJQUZDLDRCQUFVLEVBQUU7SUFDWixnQ0FBYyxFQUFFOztxQ0FDVTtBQUViO0lBQWIsNEJBQVUsRUFBRTs7d0NBQW9CO0FBS2pDO0lBSEMsNEJBQVUsRUFBRTtJQUNaLHdCQUFNLEVBQUU7SUFDUix5QkFBTyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMseUNBQXlDOzs4QkFDakYsSUFBSTt5Q0FBYTtBQXBCaEMsc0JBMkJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSXNEYXRlLCBJc05vdEVtcHR5LCBJc051bWJlclN0cmluZywgSXNPcHRpb25hbCwgSXNVVUlELCBNYXhEYXRlIH0gZnJvbSBcImNsYXNzLXZhbGlkYXRvclwiO1xuaW1wb3J0IHsgQmFzZU1vZGVsLCBCYXNlTW9kZWxTY2hlbWEgfSBmcm9tIFwiLi4vLi4vYmFzZVwiO1xuaW1wb3J0IHsgQ29uc3VtZXIsIENvbnN1bWVyU2NoZW1hIH0gZnJvbSBcIi4vQ29uc3VtZXJcIjtcblxuZXhwb3J0IGVudW0gUGhvbmVUeXBlIHtcbiAgSE9NRSA9IFwiaG9tZVwiLFxuICBXT1JLID0gXCJ3b3JrXCIsXG4gIE1PQklMRSA9IFwibW9iaWxlXCJcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQaG9uZVNjaGVtYSBleHRlbmRzIEJhc2VNb2RlbFNjaGVtYSB7XG4gIHR5cGU/OiBQaG9uZVR5cGU7XG4gIGNvbnN1bWVyPzogQ29uc3VtZXJTY2hlbWE7XG4gIGNvbnN1bWVySWQ/OiBzdHJpbmc7XG4gIGNvZGU6IHN0cmluZztcbiAgbnVtYmVyOiBzdHJpbmc7XG4gIGV4dGVuc2lvbj86IHN0cmluZztcbiAgdmVyaWZpZWRBdD86IERhdGUgfCBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBQaG9uZSBleHRlbmRzIEJhc2VNb2RlbCBpbXBsZW1lbnRzIFBob25lU2NoZW1hIHtcbiAgQElzT3B0aW9uYWwoKSB0eXBlPzogUGhvbmVUeXBlID0gUGhvbmVUeXBlLk1PQklMRTtcblxuICBASXNPcHRpb25hbCgpIGNvbnN1bWVyPzogQ29uc3VtZXIgPSB1bmRlZmluZWQ7XG5cbiAgQElzVVVJRCgpIGNvbnN1bWVySWQ/OiBzdHJpbmcgPSB1bmRlZmluZWQ7XG5cbiAgQElzTm90RW1wdHkoKVxuICBASXNOdW1iZXJTdHJpbmcoKVxuICBjb2RlOiBzdHJpbmcgPSB1bmRlZmluZWQ7XG5cbiAgQElzTm90RW1wdHkoKVxuICBASXNOdW1iZXJTdHJpbmcoKVxuICBudW1iZXI6IHN0cmluZyA9IHVuZGVmaW5lZDtcblxuICBASXNPcHRpb25hbCgpIGV4dGVuc2lvbj86IHN0cmluZztcblxuICBASXNPcHRpb25hbCgpXG4gIEBJc0RhdGUoKVxuICBATWF4RGF0ZShuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldFRpbWUoKSArIDUgKiA2MDAwMCkpIC8vIE5vdyArIDVtaW4gZm9yIHNlcnZlciB0aW1lIGRpZmZlcmVuY2VzXG4gIHZlcmlmaWVkQXQ/OiBEYXRlID0gdW5kZWZpbmVkO1xuXG4gIGNvbnN0cnVjdG9yKGRhdGE6IFBhcnRpYWw8UGhvbmVTY2hlbWE+KSB7XG4gICAgc3VwZXIoZGF0YSk7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcbiAgICB0aGlzLnZlcmlmaWVkQXQgPSBkYXRhLnZlcmlmaWVkQXQgaW5zdGFuY2VvZiBEYXRlID8gZGF0YS52ZXJpZmllZEF0IDogbmV3IERhdGUoZGF0YS52ZXJpZmllZEF0KTtcbiAgfVxufVxuIl19