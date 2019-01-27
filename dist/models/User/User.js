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
    __metadata("design:type", Domain_1.default)
], User.prototype, "domain", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
exports.User = User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9tb2RlbHMvVXNlci9Vc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscURBQTBFO0FBQzFFLHFDQUF3RDtBQUV4RCw2Q0FBd0Q7QUFDeEQsb0NBQTRDO0FBRTVDLHlDQUFzQztBQUN0Qyw2Q0FBMEM7QUFpQjFDLE1BQWEsSUFBSyxTQUFRLGdCQUFTO0lBaUNqQyxZQUFZLElBQXlCO1FBQ25DLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQWhDZCxTQUFJLEdBQVcsU0FBUyxDQUFDO1FBR3pCLGNBQVMsR0FBVyxTQUFTLENBQUM7UUFHOUIsYUFBUSxHQUFXLFNBQVMsQ0FBQztRQUk3QixVQUFLLEdBQVcsU0FBUyxDQUFDO1FBSTFCLFNBQUksR0FBYyxTQUFTLENBQUM7UUFJNUIsV0FBTSxHQUFnQixTQUFTLENBQUM7UUFHaEMsV0FBTSxHQUFZLFNBQVMsQ0FBQztRQUc1QixhQUFRLEdBQVksU0FBUyxDQUFDO1FBRTlCLGFBQVEsR0FBYyxTQUFTLENBQUM7UUFDaEMsWUFBTyxHQUFjLFNBQVMsQ0FBQztRQUMvQixnQkFBVyxHQUFzQixTQUFTLENBQUM7UUFDM0MsWUFBTyxHQUFZLFNBQVMsQ0FBQztRQUszQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM5RCxJQUFJLENBQUMsT0FBTztZQUNWLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUM7UUFFekcsb0NBQW9DO1FBQ3BDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVc7WUFDakMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLFlBQVksd0JBQWdCO2dCQUM1QyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVc7Z0JBQ2xCLENBQUMsQ0FBQyxJQUFJLHdCQUFnQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7WUFDMUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUNoQixDQUFDO0NBQ0Y7QUE3Q0M7SUFEQyw0QkFBVSxFQUFFOztrQ0FDWTtBQUd6QjtJQURDLDRCQUFVLEVBQUU7O3VDQUNpQjtBQUc5QjtJQURDLDRCQUFVLEVBQUU7O3NDQUNnQjtBQUk3QjtJQUZDLDRCQUFVLEVBQUU7SUFDWix5QkFBTyxFQUFFOzttQ0FDZ0I7QUFJMUI7SUFGQyw0QkFBVSxFQUFFO0lBQ1osd0JBQU0sQ0FBQyxtQkFBUSxDQUFDOztrQ0FDVztBQUk1QjtJQUZDLDRCQUFVLEVBQUU7SUFDWix3QkFBTSxDQUFDLHVCQUFVLENBQUM7O29DQUNhO0FBR2hDO0lBREMsNEJBQVUsRUFBRTs4QkFDSixnQkFBTTtvQ0FBYTtBQUc1QjtJQURDLDRCQUFVLEVBQUU7O3NDQUNpQjtBQTFCaEMsb0JBK0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSXNFbWFpbCwgSXNFbnVtLCBJc05vdEVtcHR5LCBJc09wdGlvbmFsIH0gZnJvbSBcImNsYXNzLXZhbGlkYXRvclwiO1xuaW1wb3J0IHsgQmFzZU1vZGVsLCBCYXNlTW9kZWxTY2hlbWEgfSBmcm9tIFwiLi4vLi4vYmFzZVwiO1xuaW1wb3J0IHsgQ29uc3VtZXIsIENvbnN1bWVyU2NoZW1hIH0gZnJvbSBcIi4uL0NvbnN1bWVyXCI7XG5pbXBvcnQgRG9tYWluLCB7IERvbWFpblNjaGVtYSB9IGZyb20gXCIuLi9Eb21haW4vRG9tYWluXCI7XG5pbXBvcnQgeyBPQXV0aENyZWRlbnRpYWxzIH0gZnJvbSBcIi4uL09BdXRoXCI7XG5pbXBvcnQgeyBXYWxsZXQsIFdhbGxldFNjaGVtYSB9IGZyb20gXCIuLi9XYWxsZXQvV2FsbGV0XCI7XG5pbXBvcnQgeyBVc2VyUm9sZSB9IGZyb20gXCIuL1VzZXJSb2xlXCI7XG5pbXBvcnQgeyBVc2VyU3RhdHVzIH0gZnJvbSBcIi4vVXNlclN0YXR1c1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJTY2hlbWEgZXh0ZW5kcyBCYXNlTW9kZWxTY2hlbWEge1xuICBuYW1lPzogc3RyaW5nO1xuICBmaXJzdE5hbWU6IHN0cmluZztcbiAgbGFzdE5hbWU6IHN0cmluZztcbiAgZW1haWw/OiBzdHJpbmc7XG4gIHJvbGU/OiBVc2VyUm9sZTtcbiAgc3RhdHVzPzogVXNlclN0YXR1cztcbiAgcGFzc3dvcmQ/OiBzdHJpbmc7XG4gIGNyZWRlbnRpYWxzPzogT0F1dGhDcmVkZW50aWFscztcbiAgZG9tYWluPzogRG9tYWluU2NoZW1hO1xuICBjb25zdW1lcj86IENvbnN1bWVyU2NoZW1hO1xuICB2aXJ0dWFsPzogYm9vbGVhbjtcbiAgd2FsbGV0cz86IFdhbGxldFNjaGVtYVtdO1xufVxuXG5leHBvcnQgY2xhc3MgVXNlciBleHRlbmRzIEJhc2VNb2RlbCBpbXBsZW1lbnRzIFVzZXJTY2hlbWEge1xuICBASXNPcHRpb25hbCgpXG4gIG5hbWU6IHN0cmluZyA9IHVuZGVmaW5lZDtcblxuICBASXNOb3RFbXB0eSgpXG4gIGZpcnN0TmFtZTogc3RyaW5nID0gdW5kZWZpbmVkO1xuXG4gIEBJc05vdEVtcHR5KClcbiAgbGFzdE5hbWU6IHN0cmluZyA9IHVuZGVmaW5lZDtcblxuICBASXNOb3RFbXB0eSgpXG4gIEBJc0VtYWlsKClcbiAgZW1haWw6IHN0cmluZyA9IHVuZGVmaW5lZDtcblxuICBASXNPcHRpb25hbCgpXG4gIEBJc0VudW0oVXNlclJvbGUpXG4gIHJvbGU/OiBVc2VyUm9sZSA9IHVuZGVmaW5lZDtcblxuICBASXNPcHRpb25hbCgpXG4gIEBJc0VudW0oVXNlclN0YXR1cylcbiAgc3RhdHVzPzogVXNlclN0YXR1cyA9IHVuZGVmaW5lZDtcblxuICBASXNPcHRpb25hbCgpXG4gIGRvbWFpbj86IERvbWFpbiA9IHVuZGVmaW5lZDtcblxuICBASXNPcHRpb25hbCgpXG4gIHBhc3N3b3JkPzogc3RyaW5nID0gdW5kZWZpbmVkO1xuXG4gIGNvbnN1bWVyPzogQ29uc3VtZXIgPSB1bmRlZmluZWQ7XG4gIHdhbGxldHM/OiBXYWxsZXRbXSA9IHVuZGVmaW5lZDtcbiAgY3JlZGVudGlhbHM/OiBPQXV0aENyZWRlbnRpYWxzID0gdW5kZWZpbmVkO1xuICB2aXJ0dWFsOiBib29sZWFuID0gdW5kZWZpbmVkO1xuXG4gIGNvbnN0cnVjdG9yKGRhdGE6IFBhcnRpYWw8VXNlclNjaGVtYT4pIHtcbiAgICBzdXBlcihkYXRhKTtcblxuICAgIHRoaXMubmFtZSA9IGRhdGEubmFtZSB8fCBgJHtkYXRhLmZpcnN0TmFtZX0gJHtkYXRhLmxhc3ROYW1lfWA7XG4gICAgdGhpcy52aXJ0dWFsID1cbiAgICAgIGRhdGEuY3JlZGVudGlhbHMgJiYgZGF0YS5jcmVkZW50aWFscy52aXJ0dWFsID8gZGF0YS5jcmVkZW50aWFscy52aXJ0dWFsIDogZGF0YS52aXJ0dWFsIHx8IHRoaXMudmlydHVhbDtcblxuICAgIC8vIFJlbGF0aW9uc2hpcCBhdHRyaWJ1dGVzIGVuZm9yY2luZ1xuICAgIHRoaXMuY3JlZGVudGlhbHMgPSBkYXRhLmNyZWRlbnRpYWxzXG4gICAgICA/IGRhdGEuY3JlZGVudGlhbHMgaW5zdGFuY2VvZiBPQXV0aENyZWRlbnRpYWxzXG4gICAgICAgID8gZGF0YS5jcmVkZW50aWFsc1xuICAgICAgICA6IG5ldyBPQXV0aENyZWRlbnRpYWxzKGRhdGEuY3JlZGVudGlhbHMpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgfVxufVxuIl19