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
        this.cards = undefined;
        this.virtual = undefined;
        Object.assign(this, data);
        if (!this.name && data.firstName) {
            this.name = `${data.firstName} ${data.lastName || ``}`;
        }
        else if (!this.name) {
            this.name = '';
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9tb2RlbHMvVXNlci9Vc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscURBQTBFO0FBQzFFLHFDQUF3RDtBQUV4RCxzQ0FBaUQ7QUFDakQsb0NBQTRDO0FBRTVDLHlDQUFzQztBQUN0Qyw2Q0FBMEM7QUFxQjFDLE1BQWEsSUFBSyxTQUFRLGdCQUFTO0lBOEJqQyxZQUFZLElBQXlCO1FBQ25DLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQTlCQSxTQUFJLEdBQVcsU0FBUyxDQUFDO1FBRXpCLGNBQVMsR0FBVyxTQUFTLENBQUM7UUFFOUIsYUFBUSxHQUFXLFNBQVMsQ0FBQztRQUkzQyxVQUFLLEdBQVcsU0FBUyxDQUFDO1FBSTFCLFNBQUksR0FBYyxTQUFTLENBQUM7UUFJNUIsV0FBTSxHQUFnQixTQUFTLENBQUM7UUFFbEIsV0FBTSxHQUFZLFNBQVMsQ0FBQztRQUU1QixhQUFRLEdBQVksU0FBUyxDQUFDO1FBRTVDLGFBQVEsR0FBYyxTQUFTLENBQUM7UUFDaEMsWUFBTyxHQUFjLFNBQVMsQ0FBQztRQUMvQixZQUFPLEdBQWEsU0FBUyxDQUFDO1FBQzlCLGdCQUFXLEdBQXNCLFNBQVMsQ0FBQztRQUMzQyxVQUFLLEdBQVksU0FBUyxDQUFDO1FBQzNCLFlBQU8sR0FBWSxTQUFTLENBQUM7UUFJM0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFMUIsSUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUMvQixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsRUFBRSxDQUFDO1NBQ3hEO2FBQU0sSUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDcEIsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7U0FDaEI7UUFFRCxJQUFJLENBQUMsT0FBTztZQUNWLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUM7UUFFekcsb0NBQW9DO1FBQ3BDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVc7WUFDakMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLFlBQVksd0JBQWdCO2dCQUM1QyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVc7Z0JBQ2xCLENBQUMsQ0FBQyxJQUFJLHdCQUFnQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7WUFDMUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUNoQixDQUFDO0NBQ0Y7QUFqRGU7SUFBYiw0QkFBVSxFQUFFOztrQ0FBMEI7QUFFekI7SUFBYiw0QkFBVSxFQUFFOzt1Q0FBK0I7QUFFOUI7SUFBYiw0QkFBVSxFQUFFOztzQ0FBOEI7QUFJM0M7SUFGQyw0QkFBVSxFQUFFO0lBQ1oseUJBQU8sRUFBRTs7bUNBQ2dCO0FBSTFCO0lBRkMsNEJBQVUsRUFBRTtJQUNaLHdCQUFNLENBQUMsbUJBQVEsQ0FBQzs7a0NBQ1c7QUFJNUI7SUFGQyw0QkFBVSxFQUFFO0lBQ1osd0JBQU0sQ0FBQyx1QkFBVSxDQUFDOztvQ0FDYTtBQUVsQjtJQUFiLDRCQUFVLEVBQUU7OEJBQVUsZUFBTTtvQ0FBYTtBQUU1QjtJQUFiLDRCQUFVLEVBQUU7O3NDQUErQjtBQXJCOUMsb0JBa0RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSXNFbWFpbCwgSXNFbnVtLCBJc05vdEVtcHR5LCBJc09wdGlvbmFsIH0gZnJvbSBcImNsYXNzLXZhbGlkYXRvclwiO1xuaW1wb3J0IHsgQmFzZU1vZGVsLCBCYXNlTW9kZWxTY2hlbWEgfSBmcm9tIFwiLi4vLi4vYmFzZVwiO1xuaW1wb3J0IHsgQ29uc3VtZXIsIENvbnN1bWVyU2NoZW1hIH0gZnJvbSBcIi4uL0NvbnN1bWVyXCI7XG5pbXBvcnQgeyBEb21haW4sIERvbWFpblNjaGVtYSB9IGZyb20gXCIuLi9Eb21haW5cIjtcbmltcG9ydCB7IE9BdXRoQ3JlZGVudGlhbHMgfSBmcm9tIFwiLi4vT0F1dGhcIjtcbmltcG9ydCB7IFdhbGxldCwgV2FsbGV0U2NoZW1hIH0gZnJvbSBcIi4uL1dhbGxldFwiO1xuaW1wb3J0IHsgVXNlclJvbGUgfSBmcm9tIFwiLi9Vc2VyUm9sZVwiO1xuaW1wb3J0IHsgVXNlclN0YXR1cyB9IGZyb20gXCIuL1VzZXJTdGF0dXNcIjtcbmltcG9ydCB7IFByb2R1Y3QsIFByb2R1Y3RTY2hlbWEgfSBmcm9tIFwiLi4vRG9tYWluL1Byb2R1Y3RcIjtcbmltcG9ydCB7IENhcmRTY2hlbWEsIENhcmQgfSBmcm9tIFwiLi4vQ2FyZFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJTY2hlbWEgZXh0ZW5kcyBCYXNlTW9kZWxTY2hlbWEge1xuICBuYW1lPzogc3RyaW5nO1xuICBmaXJzdE5hbWU6IHN0cmluZztcbiAgbGFzdE5hbWU6IHN0cmluZztcbiAgZW1haWw/OiBzdHJpbmc7XG4gIHJvbGU/OiBVc2VyUm9sZTtcbiAgc3RhdHVzPzogVXNlclN0YXR1cztcbiAgcGFzc3dvcmQ/OiBzdHJpbmc7XG4gIGNyZWRlbnRpYWxzPzogT0F1dGhDcmVkZW50aWFscztcbiAgZG9tYWluPzogRG9tYWluU2NoZW1hO1xuICBjb25zdW1lcj86IENvbnN1bWVyU2NoZW1hO1xuICB2aXJ0dWFsPzogYm9vbGVhbjtcbiAgcHJvZHVjdD86IFByb2R1Y3RTY2hlbWE7XG4gIHdhbGxldHM/OiBXYWxsZXRTY2hlbWFbXTtcbiAgY2FyZHM/OiBDYXJkU2NoZW1hW107XG59XG5cbmV4cG9ydCBjbGFzcyBVc2VyIGV4dGVuZHMgQmFzZU1vZGVsIGltcGxlbWVudHMgVXNlclNjaGVtYSB7XG4gIEBJc09wdGlvbmFsKCkgbmFtZTogc3RyaW5nID0gdW5kZWZpbmVkO1xuXG4gIEBJc05vdEVtcHR5KCkgZmlyc3ROYW1lOiBzdHJpbmcgPSB1bmRlZmluZWQ7XG5cbiAgQElzTm90RW1wdHkoKSBsYXN0TmFtZTogc3RyaW5nID0gdW5kZWZpbmVkO1xuXG4gIEBJc05vdEVtcHR5KClcbiAgQElzRW1haWwoKVxuICBlbWFpbDogc3RyaW5nID0gdW5kZWZpbmVkO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgQElzRW51bShVc2VyUm9sZSlcbiAgcm9sZT86IFVzZXJSb2xlID0gdW5kZWZpbmVkO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgQElzRW51bShVc2VyU3RhdHVzKVxuICBzdGF0dXM/OiBVc2VyU3RhdHVzID0gdW5kZWZpbmVkO1xuXG4gIEBJc09wdGlvbmFsKCkgZG9tYWluPzogRG9tYWluID0gdW5kZWZpbmVkO1xuXG4gIEBJc09wdGlvbmFsKCkgcGFzc3dvcmQ/OiBzdHJpbmcgPSB1bmRlZmluZWQ7XG5cbiAgY29uc3VtZXI/OiBDb25zdW1lciA9IHVuZGVmaW5lZDtcbiAgd2FsbGV0cz86IFdhbGxldFtdID0gdW5kZWZpbmVkO1xuICBwcm9kdWN0PzogUHJvZHVjdCA9IHVuZGVmaW5lZDtcbiAgY3JlZGVudGlhbHM/OiBPQXV0aENyZWRlbnRpYWxzID0gdW5kZWZpbmVkO1xuICBjYXJkcz86IENhcmRbXSA9IHVuZGVmaW5lZDtcbiAgdmlydHVhbDogYm9vbGVhbiA9IHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3RvcihkYXRhOiBQYXJ0aWFsPFVzZXJTY2hlbWE+KSB7XG4gICAgc3VwZXIoZGF0YSk7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcblxuICAgIGlmKCF0aGlzLm5hbWUgJiYgZGF0YS5maXJzdE5hbWUpIHtcbiAgICAgIHRoaXMubmFtZSA9IGAke2RhdGEuZmlyc3ROYW1lfSAke2RhdGEubGFzdE5hbWUgfHwgYGB9YDtcbiAgICB9IGVsc2UgaWYoIXRoaXMubmFtZSkge1xuICAgICAgdGhpcy5uYW1lID0gJyc7XG4gICAgfVxuXG4gICAgdGhpcy52aXJ0dWFsID1cbiAgICAgIGRhdGEuY3JlZGVudGlhbHMgJiYgZGF0YS5jcmVkZW50aWFscy52aXJ0dWFsID8gZGF0YS5jcmVkZW50aWFscy52aXJ0dWFsIDogZGF0YS52aXJ0dWFsIHx8IHRoaXMudmlydHVhbDtcblxuICAgIC8vIFJlbGF0aW9uc2hpcCBhdHRyaWJ1dGVzIGVuZm9yY2luZ1xuICAgIHRoaXMuY3JlZGVudGlhbHMgPSBkYXRhLmNyZWRlbnRpYWxzXG4gICAgICA/IGRhdGEuY3JlZGVudGlhbHMgaW5zdGFuY2VvZiBPQXV0aENyZWRlbnRpYWxzXG4gICAgICAgID8gZGF0YS5jcmVkZW50aWFsc1xuICAgICAgICA6IG5ldyBPQXV0aENyZWRlbnRpYWxzKGRhdGEuY3JlZGVudGlhbHMpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgfVxufVxuIl19