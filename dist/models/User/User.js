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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9tb2RlbHMvVXNlci9Vc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscURBQTBFO0FBQzFFLHFDQUF3RDtBQUV4RCxzQ0FBaUQ7QUFDakQsb0NBQTRDO0FBRTVDLHlDQUFzQztBQUN0Qyw2Q0FBMEM7QUFxQjFDLE1BQWEsSUFBSyxTQUFRLGdCQUFTO0lBOEJqQyxZQUFZLElBQXlCO1FBQ25DLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQTlCQSxTQUFJLEdBQVksU0FBUyxDQUFDO1FBRTFCLGNBQVMsR0FBVyxTQUFTLENBQUM7UUFFOUIsYUFBUSxHQUFXLFNBQVMsQ0FBQztRQUkzQyxVQUFLLEdBQVcsU0FBUyxDQUFDO1FBSTFCLFNBQUksR0FBYyxTQUFTLENBQUM7UUFJNUIsV0FBTSxHQUFnQixTQUFTLENBQUM7UUFFbEIsV0FBTSxHQUFZLFNBQVMsQ0FBQztRQUU1QixhQUFRLEdBQVksU0FBUyxDQUFDO1FBRTVDLGFBQVEsR0FBYyxTQUFTLENBQUM7UUFDaEMsWUFBTyxHQUFjLFNBQVMsQ0FBQztRQUMvQixZQUFPLEdBQWEsU0FBUyxDQUFDO1FBQzlCLGdCQUFXLEdBQXNCLFNBQVMsQ0FBQztRQUMzQyxVQUFLLEdBQVksU0FBUyxDQUFDO1FBQzNCLFlBQU8sR0FBWSxTQUFTLENBQUM7UUFJM0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQyxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztTQUN2RTthQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1NBQ2hCO1FBRUQsSUFBSSxDQUFDLE9BQU87WUFDVixJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDO1FBRXpHLG9DQUFvQztRQUNwQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXO1lBQ2pDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxZQUFZLHdCQUFnQjtnQkFDNUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXO2dCQUNsQixDQUFDLENBQUMsSUFBSSx3QkFBZ0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQzFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDaEIsQ0FBQztDQUNGO0FBakRlO0lBQWIsNEJBQVUsRUFBRTs7a0NBQTJCO0FBRTFCO0lBQWIsNEJBQVUsRUFBRTs7dUNBQStCO0FBRTlCO0lBQWIsNEJBQVUsRUFBRTs7c0NBQThCO0FBSTNDO0lBRkMsNEJBQVUsRUFBRTtJQUNaLHlCQUFPLEVBQUU7O21DQUNnQjtBQUkxQjtJQUZDLDRCQUFVLEVBQUU7SUFDWix3QkFBTSxDQUFDLG1CQUFRLENBQUM7O2tDQUNXO0FBSTVCO0lBRkMsNEJBQVUsRUFBRTtJQUNaLHdCQUFNLENBQUMsdUJBQVUsQ0FBQzs7b0NBQ2E7QUFFbEI7SUFBYiw0QkFBVSxFQUFFOzhCQUFVLGVBQU07b0NBQWE7QUFFNUI7SUFBYiw0QkFBVSxFQUFFOztzQ0FBK0I7QUFyQjlDLG9CQWtEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElzRW1haWwsIElzRW51bSwgSXNOb3RFbXB0eSwgSXNPcHRpb25hbCB9IGZyb20gXCJjbGFzcy12YWxpZGF0b3JcIjtcbmltcG9ydCB7IEJhc2VNb2RlbCwgQmFzZU1vZGVsU2NoZW1hIH0gZnJvbSBcIi4uLy4uL2Jhc2VcIjtcbmltcG9ydCB7IENvbnN1bWVyLCBDb25zdW1lclNjaGVtYSB9IGZyb20gXCIuLi9Db25zdW1lclwiO1xuaW1wb3J0IHsgRG9tYWluLCBEb21haW5TY2hlbWEgfSBmcm9tIFwiLi4vRG9tYWluXCI7XG5pbXBvcnQgeyBPQXV0aENyZWRlbnRpYWxzIH0gZnJvbSBcIi4uL09BdXRoXCI7XG5pbXBvcnQgeyBXYWxsZXQsIFdhbGxldFNjaGVtYSB9IGZyb20gXCIuLi9XYWxsZXRcIjtcbmltcG9ydCB7IFVzZXJSb2xlIH0gZnJvbSBcIi4vVXNlclJvbGVcIjtcbmltcG9ydCB7IFVzZXJTdGF0dXMgfSBmcm9tIFwiLi9Vc2VyU3RhdHVzXCI7XG5pbXBvcnQgeyBQcm9kdWN0LCBQcm9kdWN0U2NoZW1hIH0gZnJvbSBcIi4uL0RvbWFpbi9Qcm9kdWN0XCI7XG5pbXBvcnQgeyBDYXJkU2NoZW1hLCBDYXJkIH0gZnJvbSBcIi4uL0NhcmRcIjtcblxuZXhwb3J0IGludGVyZmFjZSBVc2VyU2NoZW1hIGV4dGVuZHMgQmFzZU1vZGVsU2NoZW1hIHtcbiAgbmFtZT86IHN0cmluZztcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XG4gIGxhc3ROYW1lOiBzdHJpbmc7XG4gIGVtYWlsPzogc3RyaW5nO1xuICByb2xlPzogVXNlclJvbGU7XG4gIHN0YXR1cz86IFVzZXJTdGF0dXM7XG4gIHBhc3N3b3JkPzogc3RyaW5nO1xuICBjcmVkZW50aWFscz86IE9BdXRoQ3JlZGVudGlhbHM7XG4gIGRvbWFpbj86IERvbWFpblNjaGVtYTtcbiAgY29uc3VtZXI/OiBDb25zdW1lclNjaGVtYTtcbiAgdmlydHVhbD86IGJvb2xlYW47XG4gIHByb2R1Y3Q/OiBQcm9kdWN0U2NoZW1hO1xuICB3YWxsZXRzPzogV2FsbGV0U2NoZW1hW107XG4gIGNhcmRzPzogQ2FyZFNjaGVtYVtdO1xufVxuXG5leHBvcnQgY2xhc3MgVXNlciBleHRlbmRzIEJhc2VNb2RlbCBpbXBsZW1lbnRzIFVzZXJTY2hlbWEge1xuICBASXNPcHRpb25hbCgpIG5hbWU/OiBzdHJpbmcgPSB1bmRlZmluZWQ7XG5cbiAgQElzTm90RW1wdHkoKSBmaXJzdE5hbWU6IHN0cmluZyA9IHVuZGVmaW5lZDtcblxuICBASXNOb3RFbXB0eSgpIGxhc3ROYW1lOiBzdHJpbmcgPSB1bmRlZmluZWQ7XG5cbiAgQElzTm90RW1wdHkoKVxuICBASXNFbWFpbCgpXG4gIGVtYWlsOiBzdHJpbmcgPSB1bmRlZmluZWQ7XG5cbiAgQElzT3B0aW9uYWwoKVxuICBASXNFbnVtKFVzZXJSb2xlKVxuICByb2xlPzogVXNlclJvbGUgPSB1bmRlZmluZWQ7XG5cbiAgQElzT3B0aW9uYWwoKVxuICBASXNFbnVtKFVzZXJTdGF0dXMpXG4gIHN0YXR1cz86IFVzZXJTdGF0dXMgPSB1bmRlZmluZWQ7XG5cbiAgQElzT3B0aW9uYWwoKSBkb21haW4/OiBEb21haW4gPSB1bmRlZmluZWQ7XG5cbiAgQElzT3B0aW9uYWwoKSBwYXNzd29yZD86IHN0cmluZyA9IHVuZGVmaW5lZDtcblxuICBjb25zdW1lcj86IENvbnN1bWVyID0gdW5kZWZpbmVkO1xuICB3YWxsZXRzPzogV2FsbGV0W10gPSB1bmRlZmluZWQ7XG4gIHByb2R1Y3Q/OiBQcm9kdWN0ID0gdW5kZWZpbmVkO1xuICBjcmVkZW50aWFscz86IE9BdXRoQ3JlZGVudGlhbHMgPSB1bmRlZmluZWQ7XG4gIGNhcmRzPzogQ2FyZFtdID0gdW5kZWZpbmVkO1xuICB2aXJ0dWFsOiBib29sZWFuID0gdW5kZWZpbmVkO1xuXG4gIGNvbnN0cnVjdG9yKGRhdGE6IFBhcnRpYWw8VXNlclNjaGVtYT4pIHtcbiAgICBzdXBlcihkYXRhKTtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xuXG4gICAgaWYgKCF0aGlzLm5hbWUgJiYgZGF0YS5maXJzdE5hbWUpIHtcbiAgICAgIHRoaXMubmFtZSA9IGAke2RhdGEuZmlyc3ROYW1lfSAke2RhdGEubGFzdE5hbWUgPyBkYXRhLmxhc3ROYW1lIDogXCJcIn1gO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMubmFtZSkge1xuICAgICAgdGhpcy5uYW1lID0gXCJcIjtcbiAgICB9XG5cbiAgICB0aGlzLnZpcnR1YWwgPVxuICAgICAgZGF0YS5jcmVkZW50aWFscyAmJiBkYXRhLmNyZWRlbnRpYWxzLnZpcnR1YWwgPyBkYXRhLmNyZWRlbnRpYWxzLnZpcnR1YWwgOiBkYXRhLnZpcnR1YWwgfHwgdGhpcy52aXJ0dWFsO1xuXG4gICAgLy8gUmVsYXRpb25zaGlwIGF0dHJpYnV0ZXMgZW5mb3JjaW5nXG4gICAgdGhpcy5jcmVkZW50aWFscyA9IGRhdGEuY3JlZGVudGlhbHNcbiAgICAgID8gZGF0YS5jcmVkZW50aWFscyBpbnN0YW5jZW9mIE9BdXRoQ3JlZGVudGlhbHNcbiAgICAgICAgPyBkYXRhLmNyZWRlbnRpYWxzXG4gICAgICAgIDogbmV3IE9BdXRoQ3JlZGVudGlhbHMoZGF0YS5jcmVkZW50aWFscylcbiAgICAgIDogdW5kZWZpbmVkO1xuICB9XG59XG4iXX0=