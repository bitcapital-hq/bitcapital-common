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
        this.code = undefined;
        this.number = undefined;
        this.verifiedAt = undefined;
        Object.assign(this, data);
        this.verifiedAt = data.verifiedAt instanceof Date ? data.verifiedAt : new Date(data.verifiedAt);
        this.consumer = data.consumer && new Consumer_1.Consumer(data.consumer);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGhvbmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvbW9kZWxzL0NvbnN1bWVyL1Bob25lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscURBQTBGO0FBQzFGLHFDQUF3RDtBQUN4RCx5Q0FBc0Q7QUFFdEQsSUFBWSxTQUlYO0FBSkQsV0FBWSxTQUFTO0lBQ25CLDBCQUFhLENBQUE7SUFDYiwwQkFBYSxDQUFBO0lBQ2IsOEJBQWlCLENBQUE7QUFDbkIsQ0FBQyxFQUpXLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBSXBCO0FBV0QsTUFBYSxLQUFNLFNBQVEsZ0JBQVM7SUFvQmxDLFlBQVksSUFBMEI7UUFDcEMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBcEJBLFNBQUksR0FBZSxTQUFTLENBQUMsTUFBTSxDQUFDO1FBRXBDLGFBQVEsR0FBYyxTQUFTLENBQUM7UUFJOUMsU0FBSSxHQUFXLFNBQVMsQ0FBQztRQUl6QixXQUFNLEdBQVcsU0FBUyxDQUFDO1FBTzNCLGVBQVUsR0FBVSxTQUFTLENBQUM7UUFLNUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFMUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxZQUFZLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2hHLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLG1CQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQy9ELENBQUM7Q0FDRjtBQTNCZTtJQUFiLDRCQUFVLEVBQUU7O21DQUFxQztBQUVwQztJQUFiLDRCQUFVLEVBQUU7OEJBQVksbUJBQVE7dUNBQWE7QUFJOUM7SUFGQyw0QkFBVSxFQUFFO0lBQ1osZ0NBQWMsRUFBRTs7bUNBQ1E7QUFJekI7SUFGQyw0QkFBVSxFQUFFO0lBQ1osZ0NBQWMsRUFBRTs7cUNBQ1U7QUFFYjtJQUFiLDRCQUFVLEVBQUU7O3dDQUFvQjtBQUtqQztJQUhDLDRCQUFVLEVBQUU7SUFDWix3QkFBTSxFQUFFO0lBQ1IseUJBQU8sQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLHlDQUF5Qzs7OEJBQ2pGLElBQUk7eUNBQWE7QUFsQmhDLHNCQTRCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElzRGF0ZSwgSXNOb3RFbXB0eSwgSXNOdW1iZXJTdHJpbmcsIElzT3B0aW9uYWwsIE1heERhdGUgfSBmcm9tIFwiY2xhc3MtdmFsaWRhdG9yXCI7XG5pbXBvcnQgeyBCYXNlTW9kZWwsIEJhc2VNb2RlbFNjaGVtYSB9IGZyb20gXCIuLi8uLi9iYXNlXCI7XG5pbXBvcnQgeyBDb25zdW1lciwgQ29uc3VtZXJTY2hlbWEgfSBmcm9tIFwiLi9Db25zdW1lclwiO1xuXG5leHBvcnQgZW51bSBQaG9uZVR5cGUge1xuICBIT01FID0gXCJob21lXCIsXG4gIFdPUksgPSBcIndvcmtcIixcbiAgTU9CSUxFID0gXCJtb2JpbGVcIlxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBob25lU2NoZW1hIGV4dGVuZHMgQmFzZU1vZGVsU2NoZW1hIHtcbiAgdHlwZT86IFBob25lVHlwZTtcbiAgY29uc3VtZXI/OiBDb25zdW1lclNjaGVtYTtcbiAgY29kZTogc3RyaW5nO1xuICBudW1iZXI6IHN0cmluZztcbiAgZXh0ZW5zaW9uPzogc3RyaW5nO1xuICB2ZXJpZmllZEF0PzogRGF0ZSB8IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIFBob25lIGV4dGVuZHMgQmFzZU1vZGVsIGltcGxlbWVudHMgUGhvbmVTY2hlbWEge1xuICBASXNPcHRpb25hbCgpIHR5cGU/OiBQaG9uZVR5cGUgPSBQaG9uZVR5cGUuTU9CSUxFO1xuXG4gIEBJc09wdGlvbmFsKCkgY29uc3VtZXI/OiBDb25zdW1lciA9IHVuZGVmaW5lZDtcblxuICBASXNOb3RFbXB0eSgpXG4gIEBJc051bWJlclN0cmluZygpXG4gIGNvZGU6IHN0cmluZyA9IHVuZGVmaW5lZDtcblxuICBASXNOb3RFbXB0eSgpXG4gIEBJc051bWJlclN0cmluZygpXG4gIG51bWJlcjogc3RyaW5nID0gdW5kZWZpbmVkO1xuXG4gIEBJc09wdGlvbmFsKCkgZXh0ZW5zaW9uPzogc3RyaW5nO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgQElzRGF0ZSgpXG4gIEBNYXhEYXRlKG5ldyBEYXRlKG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgNSAqIDYwMDAwKSkgLy8gTm93ICsgNW1pbiBmb3Igc2VydmVyIHRpbWUgZGlmZmVyZW5jZXNcbiAgdmVyaWZpZWRBdD86IERhdGUgPSB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IoZGF0YTogUGFydGlhbDxQaG9uZVNjaGVtYT4pIHtcbiAgICBzdXBlcihkYXRhKTtcblxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XG5cbiAgICB0aGlzLnZlcmlmaWVkQXQgPSBkYXRhLnZlcmlmaWVkQXQgaW5zdGFuY2VvZiBEYXRlID8gZGF0YS52ZXJpZmllZEF0IDogbmV3IERhdGUoZGF0YS52ZXJpZmllZEF0KTtcbiAgICB0aGlzLmNvbnN1bWVyID0gZGF0YS5jb25zdW1lciAmJiBuZXcgQ29uc3VtZXIoZGF0YS5jb25zdW1lcik7XG4gIH1cbn1cbiJdfQ==