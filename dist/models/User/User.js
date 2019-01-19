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
const Domain_1 = require("../Domain/Domain");
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
        this.virtual = undefined;
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
    __metadata("design:type", Domain_1.default)
], User.prototype, "domain", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
exports.default = User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9tb2RlbHMvVXNlci9Vc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscURBQTBFO0FBQzFFLHFDQUF3RDtBQUV4RCw2Q0FBc0M7QUFDdEMsb0NBQTRDO0FBRTVDLHlDQUFzQztBQUN0Qyw2Q0FBMEM7QUFpQjFDLFVBQTBCLFNBQVEsZ0JBQVM7SUFpQ3pDLFlBQVksSUFBeUI7UUFDbkMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBaENkLFNBQUksR0FBVyxTQUFTLENBQUM7UUFHekIsY0FBUyxHQUFXLFNBQVMsQ0FBQztRQUc5QixhQUFRLEdBQVcsU0FBUyxDQUFDO1FBSTdCLFVBQUssR0FBVyxTQUFTLENBQUM7UUFJMUIsU0FBSSxHQUFjLFNBQVMsQ0FBQztRQUk1QixXQUFNLEdBQWdCLFNBQVMsQ0FBQztRQUdoQyxXQUFNLEdBQVksU0FBUyxDQUFDO1FBRzVCLGFBQVEsR0FBWSxTQUFTLENBQUM7UUFFOUIsYUFBUSxHQUFjLFNBQVMsQ0FBQztRQUNoQyxZQUFPLEdBQWMsU0FBUyxDQUFDO1FBQy9CLGdCQUFXLEdBQXNCLFNBQVMsQ0FBQztRQUMzQyxZQUFPLEdBQVksU0FBUyxDQUFDO1FBSzNCLElBQUksQ0FBQyxPQUFPO1lBQ1YsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUV6RyxvQ0FBb0M7UUFDcEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVztZQUNqQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsWUFBWSx3QkFBZ0I7Z0JBQzVDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVztnQkFDbEIsQ0FBQyxDQUFDLElBQUksd0JBQWdCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUMxQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ2hCLENBQUM7Q0FDRjtBQTVDQztJQURDLDRCQUFVLEVBQUU7O2tDQUNZO0FBR3pCO0lBREMsNEJBQVUsRUFBRTs7dUNBQ2lCO0FBRzlCO0lBREMsNEJBQVUsRUFBRTs7c0NBQ2dCO0FBSTdCO0lBRkMsNEJBQVUsRUFBRTtJQUNaLHlCQUFPLEVBQUU7O21DQUNnQjtBQUkxQjtJQUZDLDRCQUFVLEVBQUU7SUFDWix3QkFBTSxDQUFDLG1CQUFRLENBQUM7O2tDQUNXO0FBSTVCO0lBRkMsNEJBQVUsRUFBRTtJQUNaLHdCQUFNLENBQUMsdUJBQVUsQ0FBQzs7b0NBQ2E7QUFHaEM7SUFEQyw0QkFBVSxFQUFFOzhCQUNKLGdCQUFNO29DQUFhO0FBRzVCO0lBREMsNEJBQVUsRUFBRTs7c0NBQ2lCO0FBMUJoQyx1QkE4Q0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJc0VtYWlsLCBJc0VudW0sIElzTm90RW1wdHksIElzT3B0aW9uYWwgfSBmcm9tIFwiY2xhc3MtdmFsaWRhdG9yXCI7XG5pbXBvcnQgeyBCYXNlTW9kZWwsIEJhc2VNb2RlbFNjaGVtYSB9IGZyb20gXCIuLi8uLi9iYXNlXCI7XG5pbXBvcnQgQ29uc3VtZXIgZnJvbSBcIi4uL0NvbnN1bWVyL0NvbnN1bWVyXCI7XG5pbXBvcnQgRG9tYWluIGZyb20gXCIuLi9Eb21haW4vRG9tYWluXCI7XG5pbXBvcnQgeyBPQXV0aENyZWRlbnRpYWxzIH0gZnJvbSBcIi4uL09BdXRoXCI7XG5pbXBvcnQgV2FsbGV0IGZyb20gXCIuLi9XYWxsZXQvV2FsbGV0XCI7XG5pbXBvcnQgeyBVc2VyUm9sZSB9IGZyb20gXCIuL1VzZXJSb2xlXCI7XG5pbXBvcnQgeyBVc2VyU3RhdHVzIH0gZnJvbSBcIi4vVXNlclN0YXR1c1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJTY2hlbWEgZXh0ZW5kcyBCYXNlTW9kZWxTY2hlbWEge1xuICBuYW1lOiBzdHJpbmc7XG4gIGZpcnN0TmFtZTogc3RyaW5nO1xuICBsYXN0TmFtZTogc3RyaW5nO1xuICBlbWFpbDogc3RyaW5nO1xuICByb2xlPzogVXNlclJvbGU7XG4gIHN0YXR1cz86IFVzZXJTdGF0dXM7XG4gIHBhc3N3b3JkPzogc3RyaW5nO1xuICBjcmVkZW50aWFscz86IE9BdXRoQ3JlZGVudGlhbHM7XG4gIGRvbWFpbj86IERvbWFpbjtcbiAgY29uc3VtZXI/OiBDb25zdW1lcjtcbiAgdmlydHVhbD86IGJvb2xlYW47XG4gIHdhbGxldHM/OiBXYWxsZXRbXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlciBleHRlbmRzIEJhc2VNb2RlbCBpbXBsZW1lbnRzIFVzZXJTY2hlbWEge1xuICBASXNPcHRpb25hbCgpXG4gIG5hbWU6IHN0cmluZyA9IHVuZGVmaW5lZDtcblxuICBASXNOb3RFbXB0eSgpXG4gIGZpcnN0TmFtZTogc3RyaW5nID0gdW5kZWZpbmVkO1xuXG4gIEBJc05vdEVtcHR5KClcbiAgbGFzdE5hbWU6IHN0cmluZyA9IHVuZGVmaW5lZDtcblxuICBASXNOb3RFbXB0eSgpXG4gIEBJc0VtYWlsKClcbiAgZW1haWw6IHN0cmluZyA9IHVuZGVmaW5lZDtcblxuICBASXNPcHRpb25hbCgpXG4gIEBJc0VudW0oVXNlclJvbGUpXG4gIHJvbGU/OiBVc2VyUm9sZSA9IHVuZGVmaW5lZDtcblxuICBASXNPcHRpb25hbCgpXG4gIEBJc0VudW0oVXNlclN0YXR1cylcbiAgc3RhdHVzPzogVXNlclN0YXR1cyA9IHVuZGVmaW5lZDtcblxuICBASXNPcHRpb25hbCgpIFxuICBkb21haW4/OiBEb21haW4gPSB1bmRlZmluZWQ7XG5cbiAgQElzT3B0aW9uYWwoKSBcbiAgcGFzc3dvcmQ/OiBzdHJpbmcgPSB1bmRlZmluZWQ7XG5cbiAgY29uc3VtZXI/OiBDb25zdW1lciA9IHVuZGVmaW5lZDtcbiAgd2FsbGV0cz86IFdhbGxldFtdID0gdW5kZWZpbmVkO1xuICBjcmVkZW50aWFscz86IE9BdXRoQ3JlZGVudGlhbHMgPSB1bmRlZmluZWQ7XG4gIHZpcnR1YWw6IGJvb2xlYW4gPSB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IoZGF0YTogUGFydGlhbDxVc2VyU2NoZW1hPikge1xuICAgIHN1cGVyKGRhdGEpO1xuXG4gICAgdGhpcy52aXJ0dWFsID1cbiAgICAgIGRhdGEuY3JlZGVudGlhbHMgJiYgZGF0YS5jcmVkZW50aWFscy52aXJ0dWFsID8gZGF0YS5jcmVkZW50aWFscy52aXJ0dWFsIDogZGF0YS52aXJ0dWFsIHx8IHRoaXMudmlydHVhbDtcblxuICAgIC8vIFJlbGF0aW9uc2hpcCBhdHRyaWJ1dGVzIGVuZm9yY2luZ1xuICAgIHRoaXMuY3JlZGVudGlhbHMgPSBkYXRhLmNyZWRlbnRpYWxzXG4gICAgICA/IGRhdGEuY3JlZGVudGlhbHMgaW5zdGFuY2VvZiBPQXV0aENyZWRlbnRpYWxzXG4gICAgICAgID8gZGF0YS5jcmVkZW50aWFsc1xuICAgICAgICA6IG5ldyBPQXV0aENyZWRlbnRpYWxzKGRhdGEuY3JlZGVudGlhbHMpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgfVxufVxuIl19