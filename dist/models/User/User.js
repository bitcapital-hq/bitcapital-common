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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9tb2RlbHMvVXNlci9Vc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscURBQTBFO0FBQzFFLHFDQUF3RDtBQUN4RCwwQ0FBdUQ7QUFDdkQsc0NBQWlEO0FBQ2pELG9DQUE0QztBQUM1QyxzQ0FBaUQ7QUFDakQseUNBQXNDO0FBQ3RDLDZDQUEwQztBQUMxQyxrQ0FBMkM7QUFDM0MsMkNBQXlEO0FBbUJ6RCxNQUFhLElBQUssU0FBUSxnQkFBUztJQThCakMsWUFBWSxJQUF5QjtRQUNuQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUE5QkEsU0FBSSxHQUFZLFNBQVMsQ0FBQztRQUUxQixjQUFTLEdBQVcsU0FBUyxDQUFDO1FBRTlCLGFBQVEsR0FBVyxTQUFTLENBQUM7UUFJM0MsVUFBSyxHQUFXLFNBQVMsQ0FBQztRQUkxQixTQUFJLEdBQWMsU0FBUyxDQUFDO1FBSTVCLFdBQU0sR0FBZ0IsU0FBUyxDQUFDO1FBRWxCLFdBQU0sR0FBWSxTQUFTLENBQUM7UUFFNUIsYUFBUSxHQUFZLFNBQVMsQ0FBQztRQUc1QyxhQUFRLEdBQWMsU0FBUyxDQUFDO1FBQ2hDLFlBQU8sR0FBYyxTQUFTLENBQUM7UUFDL0IsZ0JBQVcsR0FBc0IsU0FBUyxDQUFDO1FBQzNDLFVBQUssR0FBWSxTQUFTLENBQUM7UUFDM0IsWUFBTyxHQUFZLFNBQVMsQ0FBQztRQUszQixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUUxQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO1NBQ3ZFO2FBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7U0FDaEI7UUFFRCxJQUFJLENBQUMsT0FBTztZQUNWLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUM7UUFFekcsb0NBQW9DO1FBQ3BDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVc7WUFDakMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLFlBQVksd0JBQWdCO2dCQUM1QyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVc7Z0JBQ2xCLENBQUMsQ0FBQyxJQUFJLHdCQUFnQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7WUFDMUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUVkLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUkscUJBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzVFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLGVBQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksbUJBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxlQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUM5RSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLFdBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7Q0FDRjtBQXhEZTtJQUFiLDRCQUFVLEVBQUU7O2tDQUEyQjtBQUUxQjtJQUFiLDRCQUFVLEVBQUU7O3VDQUErQjtBQUU5QjtJQUFiLDRCQUFVLEVBQUU7O3NDQUE4QjtBQUkzQztJQUZDLDRCQUFVLEVBQUU7SUFDWix5QkFBTyxFQUFFOzttQ0FDZ0I7QUFJMUI7SUFGQyw0QkFBVSxFQUFFO0lBQ1osd0JBQU0sQ0FBQyxtQkFBUSxDQUFDOztrQ0FDVztBQUk1QjtJQUZDLDRCQUFVLEVBQUU7SUFDWix3QkFBTSxDQUFDLHVCQUFVLENBQUM7O29DQUNhO0FBRWxCO0lBQWIsNEJBQVUsRUFBRTs4QkFBVSxlQUFNO29DQUFhO0FBRTVCO0lBQWIsNEJBQVUsRUFBRTs7c0NBQStCO0FBckI5QyxvQkF5REMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJc0VtYWlsLCBJc0VudW0sIElzTm90RW1wdHksIElzT3B0aW9uYWwgfSBmcm9tIFwiY2xhc3MtdmFsaWRhdG9yXCI7XHJcbmltcG9ydCB7IEJhc2VNb2RlbCwgQmFzZU1vZGVsU2NoZW1hIH0gZnJvbSBcIi4uLy4uL2Jhc2VcIjtcclxuaW1wb3J0IHsgQ29uc3VtZXIsIENvbnN1bWVyU2NoZW1hIH0gZnJvbSBcIi4uL0NvbnN1bWVyXCI7XHJcbmltcG9ydCB7IERvbWFpbiwgRG9tYWluU2NoZW1hIH0gZnJvbSBcIi4uL0RvbWFpblwiO1xyXG5pbXBvcnQgeyBPQXV0aENyZWRlbnRpYWxzIH0gZnJvbSBcIi4uL09BdXRoXCI7XHJcbmltcG9ydCB7IFdhbGxldCwgV2FsbGV0U2NoZW1hIH0gZnJvbSBcIi4uL1dhbGxldFwiO1xyXG5pbXBvcnQgeyBVc2VyUm9sZSB9IGZyb20gXCIuL1VzZXJSb2xlXCI7XHJcbmltcG9ydCB7IFVzZXJTdGF0dXMgfSBmcm9tIFwiLi9Vc2VyU3RhdHVzXCI7XHJcbmltcG9ydCB7IENhcmRTY2hlbWEsIENhcmQgfSBmcm9tIFwiLi4vQ2FyZFwiO1xyXG5pbXBvcnQgeyBVc2VyU3RhdGUsIFVzZXJTdGF0ZVNjaGVtYSB9IGZyb20gXCIuL1VzZXJTdGF0ZVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBVc2VyU2NoZW1hIGV4dGVuZHMgQmFzZU1vZGVsU2NoZW1hIHtcclxuICBuYW1lPzogc3RyaW5nO1xyXG4gIGZpcnN0TmFtZTogc3RyaW5nO1xyXG4gIGxhc3ROYW1lOiBzdHJpbmc7XHJcbiAgZW1haWw6IHN0cmluZztcclxuICByb2xlPzogVXNlclJvbGU7XHJcbiAgc3RhdHVzPzogVXNlclN0YXR1cztcclxuICBzdGF0ZXM/OiBVc2VyU3RhdGVTY2hlbWFbXTtcclxuICBwYXNzd29yZD86IHN0cmluZztcclxuICBjcmVkZW50aWFscz86IE9BdXRoQ3JlZGVudGlhbHM7XHJcbiAgZG9tYWluPzogRG9tYWluU2NoZW1hO1xyXG4gIGNvbnN1bWVyPzogQ29uc3VtZXJTY2hlbWE7XHJcbiAgd2FsbGV0cz86IFdhbGxldFNjaGVtYVtdO1xyXG4gIGNhcmRzPzogQ2FyZFNjaGVtYVtdO1xyXG4gIHZpcnR1YWw/OiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVXNlciBleHRlbmRzIEJhc2VNb2RlbCBpbXBsZW1lbnRzIFVzZXJTY2hlbWEge1xyXG4gIEBJc09wdGlvbmFsKCkgbmFtZT86IHN0cmluZyA9IHVuZGVmaW5lZDtcclxuXHJcbiAgQElzTm90RW1wdHkoKSBmaXJzdE5hbWU6IHN0cmluZyA9IHVuZGVmaW5lZDtcclxuXHJcbiAgQElzTm90RW1wdHkoKSBsYXN0TmFtZTogc3RyaW5nID0gdW5kZWZpbmVkO1xyXG5cclxuICBASXNOb3RFbXB0eSgpXHJcbiAgQElzRW1haWwoKVxyXG4gIGVtYWlsOiBzdHJpbmcgPSB1bmRlZmluZWQ7XHJcblxyXG4gIEBJc09wdGlvbmFsKClcclxuICBASXNFbnVtKFVzZXJSb2xlKVxyXG4gIHJvbGU/OiBVc2VyUm9sZSA9IHVuZGVmaW5lZDtcclxuXHJcbiAgQElzT3B0aW9uYWwoKVxyXG4gIEBJc0VudW0oVXNlclN0YXR1cylcclxuICBzdGF0dXM/OiBVc2VyU3RhdHVzID0gdW5kZWZpbmVkO1xyXG5cclxuICBASXNPcHRpb25hbCgpIGRvbWFpbj86IERvbWFpbiA9IHVuZGVmaW5lZDtcclxuXHJcbiAgQElzT3B0aW9uYWwoKSBwYXNzd29yZD86IHN0cmluZyA9IHVuZGVmaW5lZDtcclxuXHJcbiAgc3RhdGVzPzogVXNlclN0YXRlW107XHJcbiAgY29uc3VtZXI/OiBDb25zdW1lciA9IHVuZGVmaW5lZDtcclxuICB3YWxsZXRzPzogV2FsbGV0W10gPSB1bmRlZmluZWQ7XHJcbiAgY3JlZGVudGlhbHM/OiBPQXV0aENyZWRlbnRpYWxzID0gdW5kZWZpbmVkO1xyXG4gIGNhcmRzPzogQ2FyZFtdID0gdW5kZWZpbmVkO1xyXG4gIHZpcnR1YWw6IGJvb2xlYW4gPSB1bmRlZmluZWQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRhdGE6IFBhcnRpYWw8VXNlclNjaGVtYT4pIHtcclxuICAgIHN1cGVyKGRhdGEpO1xyXG5cclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XHJcblxyXG4gICAgaWYgKCF0aGlzLm5hbWUgJiYgZGF0YS5maXJzdE5hbWUpIHtcclxuICAgICAgdGhpcy5uYW1lID0gYCR7ZGF0YS5maXJzdE5hbWV9ICR7ZGF0YS5sYXN0TmFtZSA/IGRhdGEubGFzdE5hbWUgOiBcIlwifWA7XHJcbiAgICB9IGVsc2UgaWYgKCF0aGlzLm5hbWUpIHtcclxuICAgICAgdGhpcy5uYW1lID0gXCJcIjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnZpcnR1YWwgPVxyXG4gICAgICBkYXRhLmNyZWRlbnRpYWxzICYmIGRhdGEuY3JlZGVudGlhbHMudmlydHVhbCA/IGRhdGEuY3JlZGVudGlhbHMudmlydHVhbCA6IGRhdGEudmlydHVhbCB8fCB0aGlzLnZpcnR1YWw7XHJcblxyXG4gICAgLy8gUmVsYXRpb25zaGlwIGF0dHJpYnV0ZXMgZW5mb3JjaW5nXHJcbiAgICB0aGlzLmNyZWRlbnRpYWxzID0gZGF0YS5jcmVkZW50aWFsc1xyXG4gICAgICA/IGRhdGEuY3JlZGVudGlhbHMgaW5zdGFuY2VvZiBPQXV0aENyZWRlbnRpYWxzXHJcbiAgICAgICAgPyBkYXRhLmNyZWRlbnRpYWxzXHJcbiAgICAgICAgOiBuZXcgT0F1dGhDcmVkZW50aWFscyhkYXRhLmNyZWRlbnRpYWxzKVxyXG4gICAgICA6IHVuZGVmaW5lZDtcclxuXHJcbiAgICB0aGlzLnN0YXRlcyA9IGRhdGEuc3RhdGVzICYmIGRhdGEuc3RhdGVzLm1hcChzdGF0ZSA9PiBuZXcgVXNlclN0YXRlKHN0YXRlKSk7XHJcbiAgICB0aGlzLmRvbWFpbiA9IGRhdGEuZG9tYWluICYmIG5ldyBEb21haW4oZGF0YS5kb21haW4pO1xyXG4gICAgdGhpcy5jb25zdW1lciA9IGRhdGEuY29uc3VtZXIgJiYgbmV3IENvbnN1bWVyKGRhdGEuY29uc3VtZXIpO1xyXG4gICAgdGhpcy53YWxsZXRzID0gZGF0YS53YWxsZXRzICYmIGRhdGEud2FsbGV0cy5tYXAod2FsbGV0ID0+IG5ldyBXYWxsZXQod2FsbGV0KSk7XHJcbiAgICB0aGlzLmNhcmRzID0gZGF0YS5jYXJkcyAmJiBkYXRhLmNhcmRzLm1hcChjYXJkID0+IG5ldyBDYXJkKGNhcmQpKTtcclxuICB9XHJcbn1cclxuIl19