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
        this.credentials = undefined;
        this.cards = undefined;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9tb2RlbHMvVXNlci9Vc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscURBQTBFO0FBQzFFLHFDQUF3RDtBQUV4RCxzQ0FBaUQ7QUFDakQsb0NBQTRDO0FBRTVDLHlDQUFzQztBQUN0Qyw2Q0FBMEM7QUFtQjFDLE1BQWEsSUFBSyxTQUFRLGdCQUFTO0lBa0NqQyxZQUFZLElBQXlCO1FBQ25DLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQWpDZCxTQUFJLEdBQVcsU0FBUyxDQUFDO1FBR3pCLGNBQVMsR0FBVyxTQUFTLENBQUM7UUFHOUIsYUFBUSxHQUFXLFNBQVMsQ0FBQztRQUk3QixVQUFLLEdBQVcsU0FBUyxDQUFDO1FBSTFCLFNBQUksR0FBYyxTQUFTLENBQUM7UUFJNUIsV0FBTSxHQUFnQixTQUFTLENBQUM7UUFHaEMsV0FBTSxHQUFZLFNBQVMsQ0FBQztRQUc1QixhQUFRLEdBQVksU0FBUyxDQUFDO1FBRTlCLGFBQVEsR0FBYyxTQUFTLENBQUM7UUFDaEMsWUFBTyxHQUFjLFNBQVMsQ0FBQztRQUMvQixnQkFBVyxHQUFzQixTQUFTLENBQUM7UUFDM0MsVUFBSyxHQUFZLFNBQVMsQ0FBQztRQUMzQixZQUFPLEdBQVksU0FBUyxDQUFDO1FBSzNCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzlELElBQUksQ0FBQyxPQUFPO1lBQ1YsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUV6RyxvQ0FBb0M7UUFDcEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVztZQUNqQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsWUFBWSx3QkFBZ0I7Z0JBQzVDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVztnQkFDbEIsQ0FBQyxDQUFDLElBQUksd0JBQWdCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUMxQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ2hCLENBQUM7Q0FDRjtBQTlDQztJQURDLDRCQUFVLEVBQUU7O2tDQUNZO0FBR3pCO0lBREMsNEJBQVUsRUFBRTs7dUNBQ2lCO0FBRzlCO0lBREMsNEJBQVUsRUFBRTs7c0NBQ2dCO0FBSTdCO0lBRkMsNEJBQVUsRUFBRTtJQUNaLHlCQUFPLEVBQUU7O21DQUNnQjtBQUkxQjtJQUZDLDRCQUFVLEVBQUU7SUFDWix3QkFBTSxDQUFDLG1CQUFRLENBQUM7O2tDQUNXO0FBSTVCO0lBRkMsNEJBQVUsRUFBRTtJQUNaLHdCQUFNLENBQUMsdUJBQVUsQ0FBQzs7b0NBQ2E7QUFHaEM7SUFEQyw0QkFBVSxFQUFFOzhCQUNKLGVBQU07b0NBQWE7QUFHNUI7SUFEQyw0QkFBVSxFQUFFOztzQ0FDaUI7QUExQmhDLG9CQWdEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElzRW1haWwsIElzRW51bSwgSXNOb3RFbXB0eSwgSXNPcHRpb25hbCB9IGZyb20gXCJjbGFzcy12YWxpZGF0b3JcIjtcbmltcG9ydCB7IEJhc2VNb2RlbCwgQmFzZU1vZGVsU2NoZW1hIH0gZnJvbSBcIi4uLy4uL2Jhc2VcIjtcbmltcG9ydCB7IENvbnN1bWVyLCBDb25zdW1lclNjaGVtYSB9IGZyb20gXCIuLi9Db25zdW1lclwiO1xuaW1wb3J0IHsgRG9tYWluLCBEb21haW5TY2hlbWEgfSBmcm9tIFwiLi4vRG9tYWluXCI7XG5pbXBvcnQgeyBPQXV0aENyZWRlbnRpYWxzIH0gZnJvbSBcIi4uL09BdXRoXCI7XG5pbXBvcnQgeyBXYWxsZXQsIFdhbGxldFNjaGVtYSB9IGZyb20gXCIuLi9XYWxsZXRcIjtcbmltcG9ydCB7IFVzZXJSb2xlIH0gZnJvbSBcIi4vVXNlclJvbGVcIjtcbmltcG9ydCB7IFVzZXJTdGF0dXMgfSBmcm9tIFwiLi9Vc2VyU3RhdHVzXCI7XG5pbXBvcnQgeyBDYXJkU2NoZW1hLCBDYXJkIH0gZnJvbSBcIi4uL0NhcmRcIjtcblxuZXhwb3J0IGludGVyZmFjZSBVc2VyU2NoZW1hIGV4dGVuZHMgQmFzZU1vZGVsU2NoZW1hIHtcbiAgbmFtZT86IHN0cmluZztcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XG4gIGxhc3ROYW1lOiBzdHJpbmc7XG4gIGVtYWlsPzogc3RyaW5nO1xuICByb2xlPzogVXNlclJvbGU7XG4gIHN0YXR1cz86IFVzZXJTdGF0dXM7XG4gIHBhc3N3b3JkPzogc3RyaW5nO1xuICBjcmVkZW50aWFscz86IE9BdXRoQ3JlZGVudGlhbHM7XG4gIGRvbWFpbj86IERvbWFpblNjaGVtYTtcbiAgY29uc3VtZXI/OiBDb25zdW1lclNjaGVtYTtcbiAgdmlydHVhbD86IGJvb2xlYW47XG4gIHdhbGxldHM/OiBXYWxsZXRTY2hlbWFbXTtcbiAgY2FyZHM/OiBDYXJkU2NoZW1hW107XG59XG5cbmV4cG9ydCBjbGFzcyBVc2VyIGV4dGVuZHMgQmFzZU1vZGVsIGltcGxlbWVudHMgVXNlclNjaGVtYSB7XG4gIEBJc09wdGlvbmFsKClcbiAgbmFtZTogc3RyaW5nID0gdW5kZWZpbmVkO1xuXG4gIEBJc05vdEVtcHR5KClcbiAgZmlyc3ROYW1lOiBzdHJpbmcgPSB1bmRlZmluZWQ7XG5cbiAgQElzTm90RW1wdHkoKVxuICBsYXN0TmFtZTogc3RyaW5nID0gdW5kZWZpbmVkO1xuXG4gIEBJc05vdEVtcHR5KClcbiAgQElzRW1haWwoKVxuICBlbWFpbDogc3RyaW5nID0gdW5kZWZpbmVkO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgQElzRW51bShVc2VyUm9sZSlcbiAgcm9sZT86IFVzZXJSb2xlID0gdW5kZWZpbmVkO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgQElzRW51bShVc2VyU3RhdHVzKVxuICBzdGF0dXM/OiBVc2VyU3RhdHVzID0gdW5kZWZpbmVkO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgZG9tYWluPzogRG9tYWluID0gdW5kZWZpbmVkO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgcGFzc3dvcmQ/OiBzdHJpbmcgPSB1bmRlZmluZWQ7XG5cbiAgY29uc3VtZXI/OiBDb25zdW1lciA9IHVuZGVmaW5lZDtcbiAgd2FsbGV0cz86IFdhbGxldFtdID0gdW5kZWZpbmVkO1xuICBjcmVkZW50aWFscz86IE9BdXRoQ3JlZGVudGlhbHMgPSB1bmRlZmluZWQ7XG4gIGNhcmRzPzogQ2FyZFtdID0gdW5kZWZpbmVkO1xuICB2aXJ0dWFsOiBib29sZWFuID0gdW5kZWZpbmVkO1xuXG4gIGNvbnN0cnVjdG9yKGRhdGE6IFBhcnRpYWw8VXNlclNjaGVtYT4pIHtcbiAgICBzdXBlcihkYXRhKTtcblxuICAgIHRoaXMubmFtZSA9IGRhdGEubmFtZSB8fCBgJHtkYXRhLmZpcnN0TmFtZX0gJHtkYXRhLmxhc3ROYW1lfWA7XG4gICAgdGhpcy52aXJ0dWFsID1cbiAgICAgIGRhdGEuY3JlZGVudGlhbHMgJiYgZGF0YS5jcmVkZW50aWFscy52aXJ0dWFsID8gZGF0YS5jcmVkZW50aWFscy52aXJ0dWFsIDogZGF0YS52aXJ0dWFsIHx8IHRoaXMudmlydHVhbDtcblxuICAgIC8vIFJlbGF0aW9uc2hpcCBhdHRyaWJ1dGVzIGVuZm9yY2luZ1xuICAgIHRoaXMuY3JlZGVudGlhbHMgPSBkYXRhLmNyZWRlbnRpYWxzXG4gICAgICA/IGRhdGEuY3JlZGVudGlhbHMgaW5zdGFuY2VvZiBPQXV0aENyZWRlbnRpYWxzXG4gICAgICAgID8gZGF0YS5jcmVkZW50aWFsc1xuICAgICAgICA6IG5ldyBPQXV0aENyZWRlbnRpYWxzKGRhdGEuY3JlZGVudGlhbHMpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgfVxufVxuIl19