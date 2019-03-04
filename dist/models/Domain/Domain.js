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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9tYWluLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL21vZGVscy9Eb21haW4vRG9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscURBQTZEO0FBQzdELHFDQUF3RDtBQUN4RCxrQ0FBMkM7QUFDM0MscURBQXdFO0FBRXhFLElBQVksVUFHWDtBQUhELFdBQVksVUFBVTtJQUNwQiwyQkFBYSxDQUFBO0lBQ2IsK0JBQWlCLENBQUE7QUFDbkIsQ0FBQyxFQUhXLFVBQVUsR0FBVixrQkFBVSxLQUFWLGtCQUFVLFFBR3JCO0FBWUQsTUFBYSxNQUFPLFNBQVEsZ0JBQVM7SUFlbkMsWUFBWSxJQUEyQjtRQUNyQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFmQSxTQUFJLEdBQVcsU0FBUyxDQUFDO1FBSXZDLFNBQUksR0FBZSxTQUFTLENBQUM7UUFHN0IsU0FBSSxHQUFjLFNBQVMsQ0FBQztRQUc1QixVQUFLLEdBQW1CLFNBQVMsQ0FBQztRQUNsQyxhQUFRLEdBQW9CLFNBQVMsQ0FBQztRQUN0QyxTQUFJLEdBQWEsU0FBUyxDQUFDO1FBS3pCLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRTFCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksV0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksK0JBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckUsQ0FBQztDQUNGO0FBdEJlO0lBQWIsNEJBQVUsRUFBRTs7b0NBQTBCO0FBSXZDO0lBRkMsNEJBQVUsRUFBRTtJQUNaLHdCQUFNLENBQUMsVUFBVSxDQUFDOztvQ0FDVTtBQUc3QjtJQURDLHdCQUFNLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDOztvQ0FDQztBQVI5Qix3QkF1QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJc0VudW0sIElzRlFETiwgSXNOb3RFbXB0eSB9IGZyb20gXCJjbGFzcy12YWxpZGF0b3JcIjtcbmltcG9ydCB7IEJhc2VNb2RlbCwgQmFzZU1vZGVsU2NoZW1hIH0gZnJvbSBcIi4uLy4uL2Jhc2VcIjtcbmltcG9ydCB7IFVzZXIsIFVzZXJTY2hlbWEgfSBmcm9tIFwiLi4vVXNlclwiO1xuaW1wb3J0IHsgRG9tYWluU2V0dGluZ3NTY2hlbWEsIERvbWFpblNldHRpbmdzIH0gZnJvbSBcIi4vRG9tYWluU2V0dGluZ3NcIjtcblxuZXhwb3J0IGVudW0gRG9tYWluUm9sZSB7XG4gIFJPT1QgPSBcInJvb3RcIixcbiAgQ09NTU9OID0gXCJjb21tb25cIlxufVxuXG5leHBvcnQgaW50ZXJmYWNlIERvbWFpblNjaGVtYSBleHRlbmRzIEJhc2VNb2RlbFNjaGVtYSB7XG4gIG5hbWU6IHN0cmluZztcbiAgcm9sZTogRG9tYWluUm9sZTtcbiAgdGVzdD86IGJvb2xlYW47XG4gIHVybHM/OiBzdHJpbmdbXTtcbiAgcG9zdGJhY2tVcmw/OiBzdHJpbmc7XG4gIHVzZXJzPzogVXNlclNjaGVtYVtdO1xuICBzZXR0aW5ncz86IERvbWFpblNldHRpbmdzU2NoZW1hO1xufVxuXG5leHBvcnQgY2xhc3MgRG9tYWluIGV4dGVuZHMgQmFzZU1vZGVsIGltcGxlbWVudHMgRG9tYWluU2NoZW1hIHtcbiAgQElzTm90RW1wdHkoKSBuYW1lOiBzdHJpbmcgPSB1bmRlZmluZWQ7XG5cbiAgQElzTm90RW1wdHkoKVxuICBASXNFbnVtKERvbWFpblJvbGUpXG4gIHJvbGU6IERvbWFpblJvbGUgPSB1bmRlZmluZWQ7XG5cbiAgQElzRlFETih7fSwgeyBlYWNoOiB0cnVlIH0pXG4gIHVybHM/OiBzdHJpbmdbXSA9IHVuZGVmaW5lZDtcblxuICBwb3N0YmFja1VybD86IHN0cmluZztcbiAgdXNlcnM/OiBVc2VyW10gfCBudWxsID0gdW5kZWZpbmVkO1xuICBzZXR0aW5ncz86IERvbWFpblNldHRpbmdzID0gdW5kZWZpbmVkO1xuICB0ZXN0PzogYm9vbGVhbiA9IHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3RvcihkYXRhOiBQYXJ0aWFsPERvbWFpblNjaGVtYT4pIHtcbiAgICBzdXBlcihkYXRhKTtcblxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XG5cbiAgICB0aGlzLnVzZXJzID0gZGF0YS51c2VycyAmJiBkYXRhLnVzZXJzLm1hcCh1c2VyID0+IG5ldyBVc2VyKHVzZXIpKTtcbiAgICB0aGlzLnNldHRpbmdzID0gZGF0YS5zZXR0aW5ncyAmJiBuZXcgRG9tYWluU2V0dGluZ3MoZGF0YS5zZXR0aW5ncyk7XG4gIH1cbn1cbiJdfQ==