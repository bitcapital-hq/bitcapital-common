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
const Domain_1 = require("../Domain");
const OAuth_1 = require("../OAuth");
const UserRole_1 = require("./UserRole");
const UserStatus_1 = require("./UserStatus");
class User extends base_1.BaseModel {
    constructor(data) {
        super(data);
        this.name = undefined;
        this.firstName = undefined;
        this.lastName = undefined;
        this.email = undefined;
        this.role = undefined;
        this.status = undefined;
        this.domain = undefined;
        this.password = undefined;
        this.consumer = undefined;
        this.wallets = undefined;
        this.product = undefined;
        this.credentials = undefined;
        this.virtual = undefined;
        this.name = data.name || `${data.firstName} ${data.lastName}`;
        this.virtual =
            data.credentials && data.credentials.virtual ? data.credentials.virtual : data.virtual || this.virtual;
        // Relationship attributes enforcing
        this.credentials = data.credentials
            ? data.credentials instanceof OAuth_1.OAuthCredentials
                ? data.credentials
                : new OAuth_1.OAuthCredentials(data.credentials)
            : undefined;
    }
}
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], User.prototype, "firstName", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsEmail(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsEnum(UserRole_1.UserRole),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsEnum(UserStatus_1.UserStatus),
    __metadata("design:type", String)
], User.prototype, "status", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Domain_1.Domain)
], User.prototype, "domain", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
exports.User = User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9tb2RlbHMvVXNlci9Vc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscURBQTBFO0FBQzFFLHFDQUF3RDtBQUV4RCxzQ0FBaUQ7QUFDakQsb0NBQTRDO0FBRTVDLHlDQUFzQztBQUN0Qyw2Q0FBMEM7QUFtQjFDLE1BQWEsSUFBSyxTQUFRLGdCQUFTO0lBa0NqQyxZQUFZLElBQXlCO1FBQ25DLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQWpDZCxTQUFJLEdBQVcsU0FBUyxDQUFDO1FBR3pCLGNBQVMsR0FBVyxTQUFTLENBQUM7UUFHOUIsYUFBUSxHQUFXLFNBQVMsQ0FBQztRQUk3QixVQUFLLEdBQVcsU0FBUyxDQUFDO1FBSTFCLFNBQUksR0FBYyxTQUFTLENBQUM7UUFJNUIsV0FBTSxHQUFnQixTQUFTLENBQUM7UUFHaEMsV0FBTSxHQUFZLFNBQVMsQ0FBQztRQUc1QixhQUFRLEdBQVksU0FBUyxDQUFDO1FBRTlCLGFBQVEsR0FBYyxTQUFTLENBQUM7UUFDaEMsWUFBTyxHQUFjLFNBQVMsQ0FBQztRQUMvQixZQUFPLEdBQWEsU0FBUyxDQUFDO1FBQzlCLGdCQUFXLEdBQXNCLFNBQVMsQ0FBQztRQUMzQyxZQUFPLEdBQVksU0FBUyxDQUFDO1FBSzNCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzlELElBQUksQ0FBQyxPQUFPO1lBQ1YsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUV6RyxvQ0FBb0M7UUFDcEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVztZQUNqQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsWUFBWSx3QkFBZ0I7Z0JBQzVDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVztnQkFDbEIsQ0FBQyxDQUFDLElBQUksd0JBQWdCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUMxQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ2hCLENBQUM7Q0FDRjtBQTlDQztJQURDLDRCQUFVLEVBQUU7O2tDQUNZO0FBR3pCO0lBREMsNEJBQVUsRUFBRTs7dUNBQ2lCO0FBRzlCO0lBREMsNEJBQVUsRUFBRTs7c0NBQ2dCO0FBSTdCO0lBRkMsNEJBQVUsRUFBRTtJQUNaLHlCQUFPLEVBQUU7O21DQUNnQjtBQUkxQjtJQUZDLDRCQUFVLEVBQUU7SUFDWix3QkFBTSxDQUFDLG1CQUFRLENBQUM7O2tDQUNXO0FBSTVCO0lBRkMsNEJBQVUsRUFBRTtJQUNaLHdCQUFNLENBQUMsdUJBQVUsQ0FBQzs7b0NBQ2E7QUFHaEM7SUFEQyw0QkFBVSxFQUFFOzhCQUNKLGVBQU07b0NBQWE7QUFHNUI7SUFEQyw0QkFBVSxFQUFFOztzQ0FDaUI7QUExQmhDLG9CQWdEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElzRW1haWwsIElzRW51bSwgSXNOb3RFbXB0eSwgSXNPcHRpb25hbCB9IGZyb20gXCJjbGFzcy12YWxpZGF0b3JcIjtcclxuaW1wb3J0IHsgQmFzZU1vZGVsLCBCYXNlTW9kZWxTY2hlbWEgfSBmcm9tIFwiLi4vLi4vYmFzZVwiO1xyXG5pbXBvcnQgeyBDb25zdW1lciwgQ29uc3VtZXJTY2hlbWEgfSBmcm9tIFwiLi4vQ29uc3VtZXJcIjtcclxuaW1wb3J0IHsgRG9tYWluLCBEb21haW5TY2hlbWEgfSBmcm9tIFwiLi4vRG9tYWluXCI7XHJcbmltcG9ydCB7IE9BdXRoQ3JlZGVudGlhbHMgfSBmcm9tIFwiLi4vT0F1dGhcIjtcclxuaW1wb3J0IHsgV2FsbGV0LCBXYWxsZXRTY2hlbWEgfSBmcm9tIFwiLi4vV2FsbGV0XCI7XHJcbmltcG9ydCB7IFVzZXJSb2xlIH0gZnJvbSBcIi4vVXNlclJvbGVcIjtcclxuaW1wb3J0IHsgVXNlclN0YXR1cyB9IGZyb20gXCIuL1VzZXJTdGF0dXNcIjtcclxuaW1wb3J0IHsgUHJvZHVjdCwgUHJvZHVjdFNjaGVtYSB9IGZyb20gXCIuLi9Eb21haW4vUHJvZHVjdFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBVc2VyU2NoZW1hIGV4dGVuZHMgQmFzZU1vZGVsU2NoZW1hIHtcclxuICBuYW1lPzogc3RyaW5nO1xyXG4gIGZpcnN0TmFtZTogc3RyaW5nO1xyXG4gIGxhc3ROYW1lOiBzdHJpbmc7XHJcbiAgZW1haWw/OiBzdHJpbmc7XHJcbiAgcm9sZT86IFVzZXJSb2xlO1xyXG4gIHN0YXR1cz86IFVzZXJTdGF0dXM7XHJcbiAgcGFzc3dvcmQ/OiBzdHJpbmc7XHJcbiAgY3JlZGVudGlhbHM/OiBPQXV0aENyZWRlbnRpYWxzO1xyXG4gIGRvbWFpbj86IERvbWFpblNjaGVtYTtcclxuICBjb25zdW1lcj86IENvbnN1bWVyU2NoZW1hO1xyXG4gIHZpcnR1YWw/OiBib29sZWFuO1xyXG4gIHByb2R1Y3Q/OiBQcm9kdWN0U2NoZW1hO1xyXG4gIHdhbGxldHM/OiBXYWxsZXRTY2hlbWFbXTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXIgZXh0ZW5kcyBCYXNlTW9kZWwgaW1wbGVtZW50cyBVc2VyU2NoZW1hIHtcclxuICBASXNPcHRpb25hbCgpXHJcbiAgbmFtZTogc3RyaW5nID0gdW5kZWZpbmVkO1xyXG5cclxuICBASXNOb3RFbXB0eSgpXHJcbiAgZmlyc3ROYW1lOiBzdHJpbmcgPSB1bmRlZmluZWQ7XHJcblxyXG4gIEBJc05vdEVtcHR5KClcclxuICBsYXN0TmFtZTogc3RyaW5nID0gdW5kZWZpbmVkO1xyXG5cclxuICBASXNOb3RFbXB0eSgpXHJcbiAgQElzRW1haWwoKVxyXG4gIGVtYWlsOiBzdHJpbmcgPSB1bmRlZmluZWQ7XHJcblxyXG4gIEBJc09wdGlvbmFsKClcclxuICBASXNFbnVtKFVzZXJSb2xlKVxyXG4gIHJvbGU/OiBVc2VyUm9sZSA9IHVuZGVmaW5lZDtcclxuXHJcbiAgQElzT3B0aW9uYWwoKVxyXG4gIEBJc0VudW0oVXNlclN0YXR1cylcclxuICBzdGF0dXM/OiBVc2VyU3RhdHVzID0gdW5kZWZpbmVkO1xyXG5cclxuICBASXNPcHRpb25hbCgpXHJcbiAgZG9tYWluPzogRG9tYWluID0gdW5kZWZpbmVkO1xyXG5cclxuICBASXNPcHRpb25hbCgpXHJcbiAgcGFzc3dvcmQ/OiBzdHJpbmcgPSB1bmRlZmluZWQ7XHJcblxyXG4gIGNvbnN1bWVyPzogQ29uc3VtZXIgPSB1bmRlZmluZWQ7XHJcbiAgd2FsbGV0cz86IFdhbGxldFtdID0gdW5kZWZpbmVkO1xyXG4gIHByb2R1Y3Q/OiBQcm9kdWN0ID0gdW5kZWZpbmVkO1xyXG4gIGNyZWRlbnRpYWxzPzogT0F1dGhDcmVkZW50aWFscyA9IHVuZGVmaW5lZDtcclxuICB2aXJ0dWFsOiBib29sZWFuID0gdW5kZWZpbmVkO1xyXG5cclxuICBjb25zdHJ1Y3RvcihkYXRhOiBQYXJ0aWFsPFVzZXJTY2hlbWE+KSB7XHJcbiAgICBzdXBlcihkYXRhKTtcclxuXHJcbiAgICB0aGlzLm5hbWUgPSBkYXRhLm5hbWUgfHwgYCR7ZGF0YS5maXJzdE5hbWV9ICR7ZGF0YS5sYXN0TmFtZX1gO1xyXG4gICAgdGhpcy52aXJ0dWFsID1cclxuICAgICAgZGF0YS5jcmVkZW50aWFscyAmJiBkYXRhLmNyZWRlbnRpYWxzLnZpcnR1YWwgPyBkYXRhLmNyZWRlbnRpYWxzLnZpcnR1YWwgOiBkYXRhLnZpcnR1YWwgfHwgdGhpcy52aXJ0dWFsO1xyXG5cclxuICAgIC8vIFJlbGF0aW9uc2hpcCBhdHRyaWJ1dGVzIGVuZm9yY2luZ1xyXG4gICAgdGhpcy5jcmVkZW50aWFscyA9IGRhdGEuY3JlZGVudGlhbHNcclxuICAgICAgPyBkYXRhLmNyZWRlbnRpYWxzIGluc3RhbmNlb2YgT0F1dGhDcmVkZW50aWFsc1xyXG4gICAgICAgID8gZGF0YS5jcmVkZW50aWFsc1xyXG4gICAgICAgIDogbmV3IE9BdXRoQ3JlZGVudGlhbHMoZGF0YS5jcmVkZW50aWFscylcclxuICAgICAgOiB1bmRlZmluZWQ7XHJcbiAgfVxyXG59XHJcbiJdfQ==