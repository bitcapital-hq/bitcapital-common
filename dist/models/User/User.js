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
const Consumer_1 = require("../Consumer");
const Domain_1 = require("../Domain");
const OAuth_1 = require("../OAuth");
const Wallet_1 = require("../Wallet");
const UserRole_1 = require("./UserRole");
const UserStatus_1 = require("./UserStatus");
const Card_1 = require("../Card");
const UserState_1 = require("./UserState");
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
        this.states = data.states && data.states.map(state => new UserState_1.UserState(state));
        this.domain = data.domain && new Domain_1.Domain(data.domain);
        this.consumer = data.consumer && new Consumer_1.Consumer(data.consumer);
        this.wallets = data.wallets && data.wallets.map(wallet => new Wallet_1.Wallet(wallet));
        this.cards = data.cards && data.cards.map(card => new Card_1.Card(card));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9tb2RlbHMvVXNlci9Vc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscURBQTBFO0FBQzFFLHFDQUF3RDtBQUN4RCwwQ0FBdUQ7QUFDdkQsc0NBQWlEO0FBQ2pELG9DQUE0QztBQUM1QyxzQ0FBaUQ7QUFDakQseUNBQXNDO0FBQ3RDLDZDQUEwQztBQUMxQyxrQ0FBMkM7QUFDM0MsMkNBQXlEO0FBbUJ6RCxNQUFhLElBQUssU0FBUSxnQkFBUztJQThCakMsWUFBWSxJQUF5QjtRQUNuQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUE5QkEsU0FBSSxHQUFZLFNBQVMsQ0FBQztRQUUxQixjQUFTLEdBQVcsU0FBUyxDQUFDO1FBRTlCLGFBQVEsR0FBVyxTQUFTLENBQUM7UUFJM0MsVUFBSyxHQUFXLFNBQVMsQ0FBQztRQUkxQixTQUFJLEdBQWMsU0FBUyxDQUFDO1FBSTVCLFdBQU0sR0FBZ0IsU0FBUyxDQUFDO1FBRWxCLFdBQU0sR0FBWSxTQUFTLENBQUM7UUFFNUIsYUFBUSxHQUFZLFNBQVMsQ0FBQztRQUc1QyxhQUFRLEdBQWMsU0FBUyxDQUFDO1FBQ2hDLFlBQU8sR0FBYyxTQUFTLENBQUM7UUFDL0IsZ0JBQVcsR0FBc0IsU0FBUyxDQUFDO1FBQzNDLFVBQUssR0FBWSxTQUFTLENBQUM7UUFDM0IsWUFBTyxHQUFZLFNBQVMsQ0FBQztRQUszQixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUUxQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO1NBQ3ZFO2FBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7U0FDaEI7UUFFRCxJQUFJLENBQUMsT0FBTztZQUNWLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUM7UUFFekcsb0NBQW9DO1FBQ3BDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVc7WUFDakMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLFlBQVksd0JBQWdCO2dCQUM1QyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVc7Z0JBQ2xCLENBQUMsQ0FBQyxJQUFJLHdCQUFnQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7WUFDMUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUVkLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUkscUJBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzVFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLGVBQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksbUJBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxlQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUM5RSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLFdBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7Q0FDRjtBQXhEZTtJQUFiLDRCQUFVLEVBQUU7O2tDQUEyQjtBQUUxQjtJQUFiLDRCQUFVLEVBQUU7O3VDQUErQjtBQUU5QjtJQUFiLDRCQUFVLEVBQUU7O3NDQUE4QjtBQUkzQztJQUZDLDRCQUFVLEVBQUU7SUFDWix5QkFBTyxFQUFFOzttQ0FDZ0I7QUFJMUI7SUFGQyw0QkFBVSxFQUFFO0lBQ1osd0JBQU0sQ0FBQyxtQkFBUSxDQUFDOztrQ0FDVztBQUk1QjtJQUZDLDRCQUFVLEVBQUU7SUFDWix3QkFBTSxDQUFDLHVCQUFVLENBQUM7O29DQUNhO0FBRWxCO0lBQWIsNEJBQVUsRUFBRTs4QkFBVSxlQUFNO29DQUFhO0FBRTVCO0lBQWIsNEJBQVUsRUFBRTs7c0NBQStCO0FBckI5QyxvQkF5REMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJc0VtYWlsLCBJc0VudW0sIElzTm90RW1wdHksIElzT3B0aW9uYWwgfSBmcm9tIFwiY2xhc3MtdmFsaWRhdG9yXCI7XG5pbXBvcnQgeyBCYXNlTW9kZWwsIEJhc2VNb2RlbFNjaGVtYSB9IGZyb20gXCIuLi8uLi9iYXNlXCI7XG5pbXBvcnQgeyBDb25zdW1lciwgQ29uc3VtZXJTY2hlbWEgfSBmcm9tIFwiLi4vQ29uc3VtZXJcIjtcbmltcG9ydCB7IERvbWFpbiwgRG9tYWluU2NoZW1hIH0gZnJvbSBcIi4uL0RvbWFpblwiO1xuaW1wb3J0IHsgT0F1dGhDcmVkZW50aWFscyB9IGZyb20gXCIuLi9PQXV0aFwiO1xuaW1wb3J0IHsgV2FsbGV0LCBXYWxsZXRTY2hlbWEgfSBmcm9tIFwiLi4vV2FsbGV0XCI7XG5pbXBvcnQgeyBVc2VyUm9sZSB9IGZyb20gXCIuL1VzZXJSb2xlXCI7XG5pbXBvcnQgeyBVc2VyU3RhdHVzIH0gZnJvbSBcIi4vVXNlclN0YXR1c1wiO1xuaW1wb3J0IHsgQ2FyZFNjaGVtYSwgQ2FyZCB9IGZyb20gXCIuLi9DYXJkXCI7XG5pbXBvcnQgeyBVc2VyU3RhdGUsIFVzZXJTdGF0ZVNjaGVtYSB9IGZyb20gXCIuL1VzZXJTdGF0ZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJTY2hlbWEgZXh0ZW5kcyBCYXNlTW9kZWxTY2hlbWEge1xuICBuYW1lPzogc3RyaW5nO1xuICBmaXJzdE5hbWU6IHN0cmluZztcbiAgbGFzdE5hbWU6IHN0cmluZztcbiAgZW1haWw6IHN0cmluZztcbiAgcm9sZT86IFVzZXJSb2xlO1xuICBzdGF0dXM/OiBVc2VyU3RhdHVzO1xuICBzdGF0ZXM/OiBVc2VyU3RhdGVTY2hlbWFbXTtcbiAgcGFzc3dvcmQ/OiBzdHJpbmc7XG4gIGNyZWRlbnRpYWxzPzogT0F1dGhDcmVkZW50aWFscztcbiAgZG9tYWluPzogRG9tYWluU2NoZW1hO1xuICBjb25zdW1lcj86IENvbnN1bWVyU2NoZW1hO1xuICB3YWxsZXRzPzogV2FsbGV0U2NoZW1hW107XG4gIGNhcmRzPzogQ2FyZFNjaGVtYVtdO1xuICB2aXJ0dWFsPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNsYXNzIFVzZXIgZXh0ZW5kcyBCYXNlTW9kZWwgaW1wbGVtZW50cyBVc2VyU2NoZW1hIHtcbiAgQElzT3B0aW9uYWwoKSBuYW1lPzogc3RyaW5nID0gdW5kZWZpbmVkO1xuXG4gIEBJc05vdEVtcHR5KCkgZmlyc3ROYW1lOiBzdHJpbmcgPSB1bmRlZmluZWQ7XG5cbiAgQElzTm90RW1wdHkoKSBsYXN0TmFtZTogc3RyaW5nID0gdW5kZWZpbmVkO1xuXG4gIEBJc05vdEVtcHR5KClcbiAgQElzRW1haWwoKVxuICBlbWFpbDogc3RyaW5nID0gdW5kZWZpbmVkO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgQElzRW51bShVc2VyUm9sZSlcbiAgcm9sZT86IFVzZXJSb2xlID0gdW5kZWZpbmVkO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgQElzRW51bShVc2VyU3RhdHVzKVxuICBzdGF0dXM/OiBVc2VyU3RhdHVzID0gdW5kZWZpbmVkO1xuXG4gIEBJc09wdGlvbmFsKCkgZG9tYWluPzogRG9tYWluID0gdW5kZWZpbmVkO1xuXG4gIEBJc09wdGlvbmFsKCkgcGFzc3dvcmQ/OiBzdHJpbmcgPSB1bmRlZmluZWQ7XG5cbiAgc3RhdGVzPzogVXNlclN0YXRlW107XG4gIGNvbnN1bWVyPzogQ29uc3VtZXIgPSB1bmRlZmluZWQ7XG4gIHdhbGxldHM/OiBXYWxsZXRbXSA9IHVuZGVmaW5lZDtcbiAgY3JlZGVudGlhbHM/OiBPQXV0aENyZWRlbnRpYWxzID0gdW5kZWZpbmVkO1xuICBjYXJkcz86IENhcmRbXSA9IHVuZGVmaW5lZDtcbiAgdmlydHVhbDogYm9vbGVhbiA9IHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3RvcihkYXRhOiBQYXJ0aWFsPFVzZXJTY2hlbWE+KSB7XG4gICAgc3VwZXIoZGF0YSk7XG5cbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xuXG4gICAgaWYgKCF0aGlzLm5hbWUgJiYgZGF0YS5maXJzdE5hbWUpIHtcbiAgICAgIHRoaXMubmFtZSA9IGAke2RhdGEuZmlyc3ROYW1lfSAke2RhdGEubGFzdE5hbWUgPyBkYXRhLmxhc3ROYW1lIDogXCJcIn1gO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMubmFtZSkge1xuICAgICAgdGhpcy5uYW1lID0gXCJcIjtcbiAgICB9XG5cbiAgICB0aGlzLnZpcnR1YWwgPVxuICAgICAgZGF0YS5jcmVkZW50aWFscyAmJiBkYXRhLmNyZWRlbnRpYWxzLnZpcnR1YWwgPyBkYXRhLmNyZWRlbnRpYWxzLnZpcnR1YWwgOiBkYXRhLnZpcnR1YWwgfHwgdGhpcy52aXJ0dWFsO1xuXG4gICAgLy8gUmVsYXRpb25zaGlwIGF0dHJpYnV0ZXMgZW5mb3JjaW5nXG4gICAgdGhpcy5jcmVkZW50aWFscyA9IGRhdGEuY3JlZGVudGlhbHNcbiAgICAgID8gZGF0YS5jcmVkZW50aWFscyBpbnN0YW5jZW9mIE9BdXRoQ3JlZGVudGlhbHNcbiAgICAgICAgPyBkYXRhLmNyZWRlbnRpYWxzXG4gICAgICAgIDogbmV3IE9BdXRoQ3JlZGVudGlhbHMoZGF0YS5jcmVkZW50aWFscylcbiAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgdGhpcy5zdGF0ZXMgPSBkYXRhLnN0YXRlcyAmJiBkYXRhLnN0YXRlcy5tYXAoc3RhdGUgPT4gbmV3IFVzZXJTdGF0ZShzdGF0ZSkpO1xuICAgIHRoaXMuZG9tYWluID0gZGF0YS5kb21haW4gJiYgbmV3IERvbWFpbihkYXRhLmRvbWFpbik7XG4gICAgdGhpcy5jb25zdW1lciA9IGRhdGEuY29uc3VtZXIgJiYgbmV3IENvbnN1bWVyKGRhdGEuY29uc3VtZXIpO1xuICAgIHRoaXMud2FsbGV0cyA9IGRhdGEud2FsbGV0cyAmJiBkYXRhLndhbGxldHMubWFwKHdhbGxldCA9PiBuZXcgV2FsbGV0KHdhbGxldCkpO1xuICAgIHRoaXMuY2FyZHMgPSBkYXRhLmNhcmRzICYmIGRhdGEuY2FyZHMubWFwKGNhcmQgPT4gbmV3IENhcmQoY2FyZCkpO1xuICB9XG59XG4iXX0=