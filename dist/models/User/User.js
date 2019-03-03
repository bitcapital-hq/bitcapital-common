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
            this.name = `${data.firstName} ${data.lastName ? data.lastName : ""}`;
        }
        else if (!this.name) {
            this.name = "";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9tb2RlbHMvVXNlci9Vc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscURBQTBFO0FBQzFFLHFDQUF3RDtBQUV4RCxzQ0FBaUQ7QUFDakQsb0NBQTRDO0FBRTVDLHlDQUFzQztBQUN0Qyw2Q0FBMEM7QUFxQjFDLE1BQWEsSUFBSyxTQUFRLGdCQUFTO0lBOEJqQyxZQUFZLElBQXlCO1FBQ25DLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQTlCQSxTQUFJLEdBQVksU0FBUyxDQUFDO1FBRTFCLGNBQVMsR0FBVyxTQUFTLENBQUM7UUFFOUIsYUFBUSxHQUFXLFNBQVMsQ0FBQztRQUkzQyxVQUFLLEdBQVcsU0FBUyxDQUFDO1FBSTFCLFNBQUksR0FBYyxTQUFTLENBQUM7UUFJNUIsV0FBTSxHQUFnQixTQUFTLENBQUM7UUFFbEIsV0FBTSxHQUFZLFNBQVMsQ0FBQztRQUU1QixhQUFRLEdBQVksU0FBUyxDQUFDO1FBRTVDLGFBQVEsR0FBYyxTQUFTLENBQUM7UUFDaEMsWUFBTyxHQUFjLFNBQVMsQ0FBQztRQUMvQixZQUFPLEdBQWEsU0FBUyxDQUFDO1FBQzlCLGdCQUFXLEdBQXNCLFNBQVMsQ0FBQztRQUMzQyxVQUFLLEdBQVksU0FBUyxDQUFDO1FBQzNCLFlBQU8sR0FBWSxTQUFTLENBQUM7UUFJM0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQyxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztTQUN2RTthQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1NBQ2hCO1FBRUQsSUFBSSxDQUFDLE9BQU87WUFDVixJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDO1FBRXpHLG9DQUFvQztRQUNwQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXO1lBQ2pDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxZQUFZLHdCQUFnQjtnQkFDNUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXO2dCQUNsQixDQUFDLENBQUMsSUFBSSx3QkFBZ0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQzFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDaEIsQ0FBQztDQUNGO0FBakRlO0lBQWIsNEJBQVUsRUFBRTs7a0NBQTJCO0FBRTFCO0lBQWIsNEJBQVUsRUFBRTs7dUNBQStCO0FBRTlCO0lBQWIsNEJBQVUsRUFBRTs7c0NBQThCO0FBSTNDO0lBRkMsNEJBQVUsRUFBRTtJQUNaLHlCQUFPLEVBQUU7O21DQUNnQjtBQUkxQjtJQUZDLDRCQUFVLEVBQUU7SUFDWix3QkFBTSxDQUFDLG1CQUFRLENBQUM7O2tDQUNXO0FBSTVCO0lBRkMsNEJBQVUsRUFBRTtJQUNaLHdCQUFNLENBQUMsdUJBQVUsQ0FBQzs7b0NBQ2E7QUFFbEI7SUFBYiw0QkFBVSxFQUFFOzhCQUFVLGVBQU07b0NBQWE7QUFFNUI7SUFBYiw0QkFBVSxFQUFFOztzQ0FBK0I7QUFyQjlDLG9CQWtEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElzRW1haWwsIElzRW51bSwgSXNOb3RFbXB0eSwgSXNPcHRpb25hbCB9IGZyb20gXCJjbGFzcy12YWxpZGF0b3JcIjtcclxuaW1wb3J0IHsgQmFzZU1vZGVsLCBCYXNlTW9kZWxTY2hlbWEgfSBmcm9tIFwiLi4vLi4vYmFzZVwiO1xyXG5pbXBvcnQgeyBDb25zdW1lciwgQ29uc3VtZXJTY2hlbWEgfSBmcm9tIFwiLi4vQ29uc3VtZXJcIjtcclxuaW1wb3J0IHsgRG9tYWluLCBEb21haW5TY2hlbWEgfSBmcm9tIFwiLi4vRG9tYWluXCI7XHJcbmltcG9ydCB7IE9BdXRoQ3JlZGVudGlhbHMgfSBmcm9tIFwiLi4vT0F1dGhcIjtcclxuaW1wb3J0IHsgV2FsbGV0LCBXYWxsZXRTY2hlbWEgfSBmcm9tIFwiLi4vV2FsbGV0XCI7XHJcbmltcG9ydCB7IFVzZXJSb2xlIH0gZnJvbSBcIi4vVXNlclJvbGVcIjtcclxuaW1wb3J0IHsgVXNlclN0YXR1cyB9IGZyb20gXCIuL1VzZXJTdGF0dXNcIjtcclxuaW1wb3J0IHsgUHJvZHVjdCwgUHJvZHVjdFNjaGVtYSB9IGZyb20gXCIuLi9Eb21haW4vUHJvZHVjdFwiO1xyXG5pbXBvcnQgeyBDYXJkU2NoZW1hLCBDYXJkIH0gZnJvbSBcIi4uL0NhcmRcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVXNlclNjaGVtYSBleHRlbmRzIEJhc2VNb2RlbFNjaGVtYSB7XHJcbiAgbmFtZT86IHN0cmluZztcclxuICBmaXJzdE5hbWU6IHN0cmluZztcclxuICBsYXN0TmFtZTogc3RyaW5nO1xyXG4gIGVtYWlsPzogc3RyaW5nO1xyXG4gIHJvbGU/OiBVc2VyUm9sZTtcclxuICBzdGF0dXM/OiBVc2VyU3RhdHVzO1xyXG4gIHBhc3N3b3JkPzogc3RyaW5nO1xyXG4gIGNyZWRlbnRpYWxzPzogT0F1dGhDcmVkZW50aWFscztcclxuICBkb21haW4/OiBEb21haW5TY2hlbWE7XHJcbiAgY29uc3VtZXI/OiBDb25zdW1lclNjaGVtYTtcclxuICB2aXJ0dWFsPzogYm9vbGVhbjtcclxuICBwcm9kdWN0PzogUHJvZHVjdFNjaGVtYTtcclxuICB3YWxsZXRzPzogV2FsbGV0U2NoZW1hW107XHJcbiAgY2FyZHM/OiBDYXJkU2NoZW1hW107XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VyIGV4dGVuZHMgQmFzZU1vZGVsIGltcGxlbWVudHMgVXNlclNjaGVtYSB7XHJcbiAgQElzT3B0aW9uYWwoKSBuYW1lPzogc3RyaW5nID0gdW5kZWZpbmVkO1xyXG5cclxuICBASXNOb3RFbXB0eSgpIGZpcnN0TmFtZTogc3RyaW5nID0gdW5kZWZpbmVkO1xyXG5cclxuICBASXNOb3RFbXB0eSgpIGxhc3ROYW1lOiBzdHJpbmcgPSB1bmRlZmluZWQ7XHJcblxyXG4gIEBJc05vdEVtcHR5KClcclxuICBASXNFbWFpbCgpXHJcbiAgZW1haWw6IHN0cmluZyA9IHVuZGVmaW5lZDtcclxuXHJcbiAgQElzT3B0aW9uYWwoKVxyXG4gIEBJc0VudW0oVXNlclJvbGUpXHJcbiAgcm9sZT86IFVzZXJSb2xlID0gdW5kZWZpbmVkO1xyXG5cclxuICBASXNPcHRpb25hbCgpXHJcbiAgQElzRW51bShVc2VyU3RhdHVzKVxyXG4gIHN0YXR1cz86IFVzZXJTdGF0dXMgPSB1bmRlZmluZWQ7XHJcblxyXG4gIEBJc09wdGlvbmFsKCkgZG9tYWluPzogRG9tYWluID0gdW5kZWZpbmVkO1xyXG5cclxuICBASXNPcHRpb25hbCgpIHBhc3N3b3JkPzogc3RyaW5nID0gdW5kZWZpbmVkO1xyXG5cclxuICBjb25zdW1lcj86IENvbnN1bWVyID0gdW5kZWZpbmVkO1xyXG4gIHdhbGxldHM/OiBXYWxsZXRbXSA9IHVuZGVmaW5lZDtcclxuICBwcm9kdWN0PzogUHJvZHVjdCA9IHVuZGVmaW5lZDtcclxuICBjcmVkZW50aWFscz86IE9BdXRoQ3JlZGVudGlhbHMgPSB1bmRlZmluZWQ7XHJcbiAgY2FyZHM/OiBDYXJkW10gPSB1bmRlZmluZWQ7XHJcbiAgdmlydHVhbDogYm9vbGVhbiA9IHVuZGVmaW5lZDtcclxuXHJcbiAgY29uc3RydWN0b3IoZGF0YTogUGFydGlhbDxVc2VyU2NoZW1hPikge1xyXG4gICAgc3VwZXIoZGF0YSk7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xyXG5cclxuICAgIGlmICghdGhpcy5uYW1lICYmIGRhdGEuZmlyc3ROYW1lKSB7XHJcbiAgICAgIHRoaXMubmFtZSA9IGAke2RhdGEuZmlyc3ROYW1lfSAke2RhdGEubGFzdE5hbWUgPyBkYXRhLmxhc3ROYW1lIDogXCJcIn1gO1xyXG4gICAgfSBlbHNlIGlmICghdGhpcy5uYW1lKSB7XHJcbiAgICAgIHRoaXMubmFtZSA9IFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy52aXJ0dWFsID1cclxuICAgICAgZGF0YS5jcmVkZW50aWFscyAmJiBkYXRhLmNyZWRlbnRpYWxzLnZpcnR1YWwgPyBkYXRhLmNyZWRlbnRpYWxzLnZpcnR1YWwgOiBkYXRhLnZpcnR1YWwgfHwgdGhpcy52aXJ0dWFsO1xyXG5cclxuICAgIC8vIFJlbGF0aW9uc2hpcCBhdHRyaWJ1dGVzIGVuZm9yY2luZ1xyXG4gICAgdGhpcy5jcmVkZW50aWFscyA9IGRhdGEuY3JlZGVudGlhbHNcclxuICAgICAgPyBkYXRhLmNyZWRlbnRpYWxzIGluc3RhbmNlb2YgT0F1dGhDcmVkZW50aWFsc1xyXG4gICAgICAgID8gZGF0YS5jcmVkZW50aWFsc1xyXG4gICAgICAgIDogbmV3IE9BdXRoQ3JlZGVudGlhbHMoZGF0YS5jcmVkZW50aWFscylcclxuICAgICAgOiB1bmRlZmluZWQ7XHJcbiAgfVxyXG59XHJcbiJdfQ==