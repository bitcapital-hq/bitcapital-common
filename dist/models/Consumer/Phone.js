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
        this.verifiedAt = data.verifiedAt instanceof Date ? data.verifiedAt : new Date(data.verifiedAt);
    }
}
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], Phone.prototype, "type", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Consumer_1.default)
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
exports.default = Phone;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGhvbmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvbW9kZWxzL0NvbnN1bWVyL1Bob25lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscURBQWtHO0FBQ2xHLHFDQUF3RDtBQUN4RCx5Q0FBa0M7QUFFbEMsSUFBWSxTQUlYO0FBSkQsV0FBWSxTQUFTO0lBQ25CLDBCQUFhLENBQUE7SUFDYiwwQkFBYSxDQUFBO0lBQ2IsOEJBQWlCLENBQUE7QUFDbkIsQ0FBQyxFQUpXLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBSXBCO0FBWUQsV0FBMkIsU0FBUSxnQkFBUztJQXNCMUMsWUFBWSxJQUEwQjtRQUNwQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUF0QkEsU0FBSSxHQUFjLFNBQVMsQ0FBQyxNQUFNLENBQUM7UUFFbkMsYUFBUSxHQUFjLFNBQVMsQ0FBQztRQUVwQyxlQUFVLEdBQVcsU0FBUyxDQUFDO1FBSXpDLFNBQUksR0FBVyxTQUFTLENBQUM7UUFJekIsV0FBTSxHQUFXLFNBQVMsQ0FBQztRQU8zQixlQUFVLEdBQVUsU0FBUyxDQUFDO1FBSTVCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsWUFBWSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNsRyxDQUFDO0NBQ0Y7QUF6QmU7SUFBYiw0QkFBVSxFQUFFOzttQ0FBb0M7QUFFbkM7SUFBYiw0QkFBVSxFQUFFOzhCQUFZLGtCQUFRO3VDQUFhO0FBRXBDO0lBQVQsd0JBQU0sRUFBRTs7eUNBQWdDO0FBSXpDO0lBRkMsNEJBQVUsRUFBRTtJQUNaLGdDQUFjLEVBQUU7O21DQUNRO0FBSXpCO0lBRkMsNEJBQVUsRUFBRTtJQUNaLGdDQUFjLEVBQUU7O3FDQUNVO0FBRWI7SUFBYiw0QkFBVSxFQUFFOzt3Q0FBb0I7QUFLakM7SUFIQyw0QkFBVSxFQUFFO0lBQ1osd0JBQU0sRUFBRTtJQUNSLHlCQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyx5Q0FBeUM7OzhCQUNqRixJQUFJO3lDQUFhO0FBcEJoQyx3QkEwQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJc0RhdGUsIElzTm90RW1wdHksIElzTnVtYmVyU3RyaW5nLCBJc09wdGlvbmFsLCBJc1VVSUQsIE1heERhdGUgfSBmcm9tIFwiY2xhc3MtdmFsaWRhdG9yXCI7XG5pbXBvcnQgeyBCYXNlTW9kZWwsIEJhc2VNb2RlbFNjaGVtYSB9IGZyb20gXCIuLi8uLi9iYXNlXCI7XG5pbXBvcnQgQ29uc3VtZXIgZnJvbSBcIi4vQ29uc3VtZXJcIjtcblxuZXhwb3J0IGVudW0gUGhvbmVUeXBlIHtcbiAgSE9NRSA9IFwiaG9tZVwiLFxuICBXT1JLID0gXCJ3b3JrXCIsXG4gIE1PQklMRSA9IFwibW9iaWxlXCJcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQaG9uZVNjaGVtYSBleHRlbmRzIEJhc2VNb2RlbFNjaGVtYSB7XG4gIHR5cGU/OiBQaG9uZVR5cGU7XG4gIGNvbnN1bWVyPzogQ29uc3VtZXI7XG4gIGNvbnN1bWVySWQ6IHN0cmluZztcbiAgY29kZTogc3RyaW5nO1xuICBudW1iZXI6IHN0cmluZztcbiAgZXh0ZW5zaW9uPzogc3RyaW5nO1xuICB2ZXJpZmllZEF0PzogRGF0ZSB8IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGhvbmUgZXh0ZW5kcyBCYXNlTW9kZWwgaW1wbGVtZW50cyBQaG9uZVNjaGVtYSB7XG4gIEBJc09wdGlvbmFsKCkgdHlwZTogUGhvbmVUeXBlID0gUGhvbmVUeXBlLk1PQklMRTtcblxuICBASXNPcHRpb25hbCgpIGNvbnN1bWVyPzogQ29uc3VtZXIgPSB1bmRlZmluZWQ7XG5cbiAgQElzVVVJRCgpIGNvbnN1bWVySWQ6IHN0cmluZyA9IHVuZGVmaW5lZDtcblxuICBASXNOb3RFbXB0eSgpXG4gIEBJc051bWJlclN0cmluZygpXG4gIGNvZGU6IHN0cmluZyA9IHVuZGVmaW5lZDtcblxuICBASXNOb3RFbXB0eSgpXG4gIEBJc051bWJlclN0cmluZygpXG4gIG51bWJlcjogc3RyaW5nID0gdW5kZWZpbmVkO1xuXG4gIEBJc09wdGlvbmFsKCkgZXh0ZW5zaW9uPzogc3RyaW5nO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgQElzRGF0ZSgpXG4gIEBNYXhEYXRlKG5ldyBEYXRlKG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgNSAqIDYwMDAwKSkgLy8gTm93ICsgNW1pbiBmb3Igc2VydmVyIHRpbWUgZGlmZmVyZW5jZXNcbiAgdmVyaWZpZWRBdD86IERhdGUgPSB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IoZGF0YTogUGFydGlhbDxQaG9uZVNjaGVtYT4pIHtcbiAgICBzdXBlcihkYXRhKTtcbiAgICB0aGlzLnZlcmlmaWVkQXQgPSBkYXRhLnZlcmlmaWVkQXQgaW5zdGFuY2VvZiBEYXRlID8gZGF0YS52ZXJpZmllZEF0IDogbmV3IERhdGUoZGF0YS52ZXJpZmllZEF0KTtcbiAgfVxufVxuIl19