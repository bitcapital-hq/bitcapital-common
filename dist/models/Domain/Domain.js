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
        this.settings = undefined;
        this.test = undefined;
        Object.assign(this, data);
        this.users = data.users && data.users.map(user => new User_1.User(user));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9tYWluLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL21vZGVscy9Eb21haW4vRG9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscURBQTZEO0FBQzdELHFDQUF3RDtBQUN4RCxrQ0FBMkM7QUFDM0MscURBQXdFO0FBRXhFLElBQVksVUFHWDtBQUhELFdBQVksVUFBVTtJQUNwQiwyQkFBYSxDQUFBO0lBQ2IsK0JBQWlCLENBQUE7QUFDbkIsQ0FBQyxFQUhXLFVBQVUsR0FBVixrQkFBVSxLQUFWLGtCQUFVLFFBR3JCO0FBWUQsTUFBYSxNQUFPLFNBQVEsZ0JBQVM7SUFlbkMsWUFBWSxJQUEyQjtRQUNyQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFmQSxTQUFJLEdBQVcsU0FBUyxDQUFDO1FBSXZDLFNBQUksR0FBZSxTQUFTLENBQUM7UUFHN0IsU0FBSSxHQUFjLFNBQVMsQ0FBQztRQUc1QixVQUFLLEdBQW1CLFNBQVMsQ0FBQztRQUNsQyxhQUFRLEdBQW9CLFNBQVMsQ0FBQztRQUN0QyxTQUFJLEdBQWEsU0FBUyxDQUFDO1FBS3pCLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRTFCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksV0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksK0JBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckUsQ0FBQztDQUNGO0FBdEJlO0lBQWIsNEJBQVUsRUFBRTs7b0NBQTBCO0FBSXZDO0lBRkMsNEJBQVUsRUFBRTtJQUNaLHdCQUFNLENBQUMsVUFBVSxDQUFDOztvQ0FDVTtBQUc3QjtJQURDLHdCQUFNLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDOztvQ0FDQztBQVI5Qix3QkF1QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJc0VudW0sIElzRlFETiwgSXNOb3RFbXB0eSB9IGZyb20gXCJjbGFzcy12YWxpZGF0b3JcIjtcclxuaW1wb3J0IHsgQmFzZU1vZGVsLCBCYXNlTW9kZWxTY2hlbWEgfSBmcm9tIFwiLi4vLi4vYmFzZVwiO1xyXG5pbXBvcnQgeyBVc2VyLCBVc2VyU2NoZW1hIH0gZnJvbSBcIi4uL1VzZXJcIjtcclxuaW1wb3J0IHsgRG9tYWluU2V0dGluZ3NTY2hlbWEsIERvbWFpblNldHRpbmdzIH0gZnJvbSBcIi4vRG9tYWluU2V0dGluZ3NcIjtcclxuXHJcbmV4cG9ydCBlbnVtIERvbWFpblJvbGUge1xyXG4gIFJPT1QgPSBcInJvb3RcIixcclxuICBDT01NT04gPSBcImNvbW1vblwiXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRG9tYWluU2NoZW1hIGV4dGVuZHMgQmFzZU1vZGVsU2NoZW1hIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgcm9sZTogRG9tYWluUm9sZTtcclxuICB0ZXN0PzogYm9vbGVhbjtcclxuICB1cmxzPzogc3RyaW5nW107XHJcbiAgcG9zdGJhY2tVcmw/OiBzdHJpbmc7XHJcbiAgdXNlcnM/OiBVc2VyU2NoZW1hW107XHJcbiAgc2V0dGluZ3M/OiBEb21haW5TZXR0aW5nc1NjaGVtYTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERvbWFpbiBleHRlbmRzIEJhc2VNb2RlbCBpbXBsZW1lbnRzIERvbWFpblNjaGVtYSB7XHJcbiAgQElzTm90RW1wdHkoKSBuYW1lOiBzdHJpbmcgPSB1bmRlZmluZWQ7XHJcblxyXG4gIEBJc05vdEVtcHR5KClcclxuICBASXNFbnVtKERvbWFpblJvbGUpXHJcbiAgcm9sZTogRG9tYWluUm9sZSA9IHVuZGVmaW5lZDtcclxuXHJcbiAgQElzRlFETih7fSwgeyBlYWNoOiB0cnVlIH0pXHJcbiAgdXJscz86IHN0cmluZ1tdID0gdW5kZWZpbmVkO1xyXG5cclxuICBwb3N0YmFja1VybD86IHN0cmluZztcclxuICB1c2Vycz86IFVzZXJbXSB8IG51bGwgPSB1bmRlZmluZWQ7XHJcbiAgc2V0dGluZ3M/OiBEb21haW5TZXR0aW5ncyA9IHVuZGVmaW5lZDtcclxuICB0ZXN0PzogYm9vbGVhbiA9IHVuZGVmaW5lZDtcclxuXHJcbiAgY29uc3RydWN0b3IoZGF0YTogUGFydGlhbDxEb21haW5TY2hlbWE+KSB7XHJcbiAgICBzdXBlcihkYXRhKTtcclxuXHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xyXG5cclxuICAgIHRoaXMudXNlcnMgPSBkYXRhLnVzZXJzICYmIGRhdGEudXNlcnMubWFwKHVzZXIgPT4gbmV3IFVzZXIodXNlcikpO1xyXG4gICAgdGhpcy5zZXR0aW5ncyA9IGRhdGEuc2V0dGluZ3MgJiYgbmV3IERvbWFpblNldHRpbmdzKGRhdGEuc2V0dGluZ3MpO1xyXG4gIH1cclxufVxyXG4iXX0=