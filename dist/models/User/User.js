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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9tb2RlbHMvVXNlci9Vc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscURBQTBFO0FBQzFFLHFDQUF3RDtBQUV4RCxzQ0FBaUQ7QUFDakQsb0NBQTRDO0FBRTVDLHlDQUFzQztBQUN0Qyw2Q0FBMEM7QUFxQjFDLE1BQWEsSUFBSyxTQUFRLGdCQUFTO0lBOEJqQyxZQUFZLElBQXlCO1FBQ25DLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQTlCQSxTQUFJLEdBQVcsU0FBUyxDQUFDO1FBRXpCLGNBQVMsR0FBVyxTQUFTLENBQUM7UUFFOUIsYUFBUSxHQUFXLFNBQVMsQ0FBQztRQUkzQyxVQUFLLEdBQVcsU0FBUyxDQUFDO1FBSTFCLFNBQUksR0FBYyxTQUFTLENBQUM7UUFJNUIsV0FBTSxHQUFnQixTQUFTLENBQUM7UUFFbEIsV0FBTSxHQUFZLFNBQVMsQ0FBQztRQUU1QixhQUFRLEdBQVksU0FBUyxDQUFDO1FBRTVDLGFBQVEsR0FBYyxTQUFTLENBQUM7UUFDaEMsWUFBTyxHQUFjLFNBQVMsQ0FBQztRQUMvQixZQUFPLEdBQWEsU0FBUyxDQUFDO1FBQzlCLGdCQUFXLEdBQXNCLFNBQVMsQ0FBQztRQUMzQyxVQUFLLEdBQVksU0FBUyxDQUFDO1FBQzNCLFlBQU8sR0FBWSxTQUFTLENBQUM7UUFJM0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFMUIsSUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUMvQixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsRUFBRSxDQUFDO1NBQ3hEO2FBQU0sSUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDcEIsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7U0FDaEI7UUFFRCxJQUFJLENBQUMsT0FBTztZQUNWLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUM7UUFFekcsb0NBQW9DO1FBQ3BDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVc7WUFDakMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLFlBQVksd0JBQWdCO2dCQUM1QyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVc7Z0JBQ2xCLENBQUMsQ0FBQyxJQUFJLHdCQUFnQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7WUFDMUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUNoQixDQUFDO0NBQ0Y7QUFqRGU7SUFBYiw0QkFBVSxFQUFFOztrQ0FBMEI7QUFFekI7SUFBYiw0QkFBVSxFQUFFOzt1Q0FBK0I7QUFFOUI7SUFBYiw0QkFBVSxFQUFFOztzQ0FBOEI7QUFJM0M7SUFGQyw0QkFBVSxFQUFFO0lBQ1oseUJBQU8sRUFBRTs7bUNBQ2dCO0FBSTFCO0lBRkMsNEJBQVUsRUFBRTtJQUNaLHdCQUFNLENBQUMsbUJBQVEsQ0FBQzs7a0NBQ1c7QUFJNUI7SUFGQyw0QkFBVSxFQUFFO0lBQ1osd0JBQU0sQ0FBQyx1QkFBVSxDQUFDOztvQ0FDYTtBQUVsQjtJQUFiLDRCQUFVLEVBQUU7OEJBQVUsZUFBTTtvQ0FBYTtBQUU1QjtJQUFiLDRCQUFVLEVBQUU7O3NDQUErQjtBQXJCOUMsb0JBa0RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSXNFbWFpbCwgSXNFbnVtLCBJc05vdEVtcHR5LCBJc09wdGlvbmFsIH0gZnJvbSBcImNsYXNzLXZhbGlkYXRvclwiO1xyXG5pbXBvcnQgeyBCYXNlTW9kZWwsIEJhc2VNb2RlbFNjaGVtYSB9IGZyb20gXCIuLi8uLi9iYXNlXCI7XHJcbmltcG9ydCB7IENvbnN1bWVyLCBDb25zdW1lclNjaGVtYSB9IGZyb20gXCIuLi9Db25zdW1lclwiO1xyXG5pbXBvcnQgeyBEb21haW4sIERvbWFpblNjaGVtYSB9IGZyb20gXCIuLi9Eb21haW5cIjtcclxuaW1wb3J0IHsgT0F1dGhDcmVkZW50aWFscyB9IGZyb20gXCIuLi9PQXV0aFwiO1xyXG5pbXBvcnQgeyBXYWxsZXQsIFdhbGxldFNjaGVtYSB9IGZyb20gXCIuLi9XYWxsZXRcIjtcclxuaW1wb3J0IHsgVXNlclJvbGUgfSBmcm9tIFwiLi9Vc2VyUm9sZVwiO1xyXG5pbXBvcnQgeyBVc2VyU3RhdHVzIH0gZnJvbSBcIi4vVXNlclN0YXR1c1wiO1xyXG5pbXBvcnQgeyBQcm9kdWN0LCBQcm9kdWN0U2NoZW1hIH0gZnJvbSBcIi4uL0RvbWFpbi9Qcm9kdWN0XCI7XHJcbmltcG9ydCB7IENhcmRTY2hlbWEsIENhcmQgfSBmcm9tIFwiLi4vQ2FyZFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBVc2VyU2NoZW1hIGV4dGVuZHMgQmFzZU1vZGVsU2NoZW1hIHtcclxuICBuYW1lPzogc3RyaW5nO1xyXG4gIGZpcnN0TmFtZTogc3RyaW5nO1xyXG4gIGxhc3ROYW1lOiBzdHJpbmc7XHJcbiAgZW1haWw/OiBzdHJpbmc7XHJcbiAgcm9sZT86IFVzZXJSb2xlO1xyXG4gIHN0YXR1cz86IFVzZXJTdGF0dXM7XHJcbiAgcGFzc3dvcmQ/OiBzdHJpbmc7XHJcbiAgY3JlZGVudGlhbHM/OiBPQXV0aENyZWRlbnRpYWxzO1xyXG4gIGRvbWFpbj86IERvbWFpblNjaGVtYTtcclxuICBjb25zdW1lcj86IENvbnN1bWVyU2NoZW1hO1xyXG4gIHZpcnR1YWw/OiBib29sZWFuO1xyXG4gIHByb2R1Y3Q/OiBQcm9kdWN0U2NoZW1hO1xyXG4gIHdhbGxldHM/OiBXYWxsZXRTY2hlbWFbXTtcclxuICBjYXJkcz86IENhcmRTY2hlbWFbXTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXIgZXh0ZW5kcyBCYXNlTW9kZWwgaW1wbGVtZW50cyBVc2VyU2NoZW1hIHtcclxuICBASXNPcHRpb25hbCgpIG5hbWU6IHN0cmluZyA9IHVuZGVmaW5lZDtcclxuXHJcbiAgQElzTm90RW1wdHkoKSBmaXJzdE5hbWU6IHN0cmluZyA9IHVuZGVmaW5lZDtcclxuXHJcbiAgQElzTm90RW1wdHkoKSBsYXN0TmFtZTogc3RyaW5nID0gdW5kZWZpbmVkO1xyXG5cclxuICBASXNOb3RFbXB0eSgpXHJcbiAgQElzRW1haWwoKVxyXG4gIGVtYWlsOiBzdHJpbmcgPSB1bmRlZmluZWQ7XHJcblxyXG4gIEBJc09wdGlvbmFsKClcclxuICBASXNFbnVtKFVzZXJSb2xlKVxyXG4gIHJvbGU/OiBVc2VyUm9sZSA9IHVuZGVmaW5lZDtcclxuXHJcbiAgQElzT3B0aW9uYWwoKVxyXG4gIEBJc0VudW0oVXNlclN0YXR1cylcclxuICBzdGF0dXM/OiBVc2VyU3RhdHVzID0gdW5kZWZpbmVkO1xyXG5cclxuICBASXNPcHRpb25hbCgpIGRvbWFpbj86IERvbWFpbiA9IHVuZGVmaW5lZDtcclxuXHJcbiAgQElzT3B0aW9uYWwoKSBwYXNzd29yZD86IHN0cmluZyA9IHVuZGVmaW5lZDtcclxuXHJcbiAgY29uc3VtZXI/OiBDb25zdW1lciA9IHVuZGVmaW5lZDtcclxuICB3YWxsZXRzPzogV2FsbGV0W10gPSB1bmRlZmluZWQ7XHJcbiAgcHJvZHVjdD86IFByb2R1Y3QgPSB1bmRlZmluZWQ7XHJcbiAgY3JlZGVudGlhbHM/OiBPQXV0aENyZWRlbnRpYWxzID0gdW5kZWZpbmVkO1xyXG4gIGNhcmRzPzogQ2FyZFtdID0gdW5kZWZpbmVkO1xyXG4gIHZpcnR1YWw6IGJvb2xlYW4gPSB1bmRlZmluZWQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRhdGE6IFBhcnRpYWw8VXNlclNjaGVtYT4pIHtcclxuICAgIHN1cGVyKGRhdGEpO1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcclxuXHJcbiAgICBpZighdGhpcy5uYW1lICYmIGRhdGEuZmlyc3ROYW1lKSB7XHJcbiAgICAgIHRoaXMubmFtZSA9IGAke2RhdGEuZmlyc3ROYW1lfSAke2RhdGEubGFzdE5hbWUgfHwgYGB9YDtcclxuICAgIH0gZWxzZSBpZighdGhpcy5uYW1lKSB7XHJcbiAgICAgIHRoaXMubmFtZSA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudmlydHVhbCA9XHJcbiAgICAgIGRhdGEuY3JlZGVudGlhbHMgJiYgZGF0YS5jcmVkZW50aWFscy52aXJ0dWFsID8gZGF0YS5jcmVkZW50aWFscy52aXJ0dWFsIDogZGF0YS52aXJ0dWFsIHx8IHRoaXMudmlydHVhbDtcclxuXHJcbiAgICAvLyBSZWxhdGlvbnNoaXAgYXR0cmlidXRlcyBlbmZvcmNpbmdcclxuICAgIHRoaXMuY3JlZGVudGlhbHMgPSBkYXRhLmNyZWRlbnRpYWxzXHJcbiAgICAgID8gZGF0YS5jcmVkZW50aWFscyBpbnN0YW5jZW9mIE9BdXRoQ3JlZGVudGlhbHNcclxuICAgICAgICA/IGRhdGEuY3JlZGVudGlhbHNcclxuICAgICAgICA6IG5ldyBPQXV0aENyZWRlbnRpYWxzKGRhdGEuY3JlZGVudGlhbHMpXHJcbiAgICAgIDogdW5kZWZpbmVkO1xyXG4gIH1cclxufVxyXG4iXX0=