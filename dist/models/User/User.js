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
const Product_1 = require("../Domain/Product");
const Card_1 = require("../Card");
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
        this.domain = data.domain && new Domain_1.Domain(data.domain);
        this.consumer = data.consumer && new Consumer_1.Consumer(data.consumer);
        this.product = data.product && new Product_1.Product(data.product);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9tb2RlbHMvVXNlci9Vc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscURBQTBFO0FBQzFFLHFDQUF3RDtBQUN4RCwwQ0FBdUQ7QUFDdkQsc0NBQWlEO0FBQ2pELG9DQUE0QztBQUM1QyxzQ0FBaUQ7QUFDakQseUNBQXNDO0FBQ3RDLDZDQUEwQztBQUMxQywrQ0FBMkQ7QUFDM0Qsa0NBQTJDO0FBbUIzQyxNQUFhLElBQUssU0FBUSxnQkFBUztJQThCakMsWUFBWSxJQUF5QjtRQUNuQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUE5QkEsU0FBSSxHQUFZLFNBQVMsQ0FBQztRQUUxQixjQUFTLEdBQVcsU0FBUyxDQUFDO1FBRTlCLGFBQVEsR0FBVyxTQUFTLENBQUM7UUFJM0MsVUFBSyxHQUFXLFNBQVMsQ0FBQztRQUkxQixTQUFJLEdBQWMsU0FBUyxDQUFDO1FBSTVCLFdBQU0sR0FBZ0IsU0FBUyxDQUFDO1FBRWxCLFdBQU0sR0FBWSxTQUFTLENBQUM7UUFFNUIsYUFBUSxHQUFZLFNBQVMsQ0FBQztRQUU1QyxhQUFRLEdBQWMsU0FBUyxDQUFDO1FBQ2hDLFlBQU8sR0FBYyxTQUFTLENBQUM7UUFDL0IsWUFBTyxHQUFhLFNBQVMsQ0FBQztRQUM5QixnQkFBVyxHQUFzQixTQUFTLENBQUM7UUFDM0MsVUFBSyxHQUFZLFNBQVMsQ0FBQztRQUMzQixZQUFPLEdBQVksU0FBUyxDQUFDO1FBSzNCLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRTFCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEMsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7U0FDdkU7YUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNyQixJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztTQUNoQjtRQUVELElBQUksQ0FBQyxPQUFPO1lBQ1YsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUV6RyxvQ0FBb0M7UUFDcEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVztZQUNqQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsWUFBWSx3QkFBZ0I7Z0JBQzVDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVztnQkFDbEIsQ0FBQyxDQUFDLElBQUksd0JBQWdCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUMxQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBRWQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksZUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxtQkFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxpQkFBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLGVBQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzlFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksV0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDcEUsQ0FBQztDQUNGO0FBeERlO0lBQWIsNEJBQVUsRUFBRTs7a0NBQTJCO0FBRTFCO0lBQWIsNEJBQVUsRUFBRTs7dUNBQStCO0FBRTlCO0lBQWIsNEJBQVUsRUFBRTs7c0NBQThCO0FBSTNDO0lBRkMsNEJBQVUsRUFBRTtJQUNaLHlCQUFPLEVBQUU7O21DQUNnQjtBQUkxQjtJQUZDLDRCQUFVLEVBQUU7SUFDWix3QkFBTSxDQUFDLG1CQUFRLENBQUM7O2tDQUNXO0FBSTVCO0lBRkMsNEJBQVUsRUFBRTtJQUNaLHdCQUFNLENBQUMsdUJBQVUsQ0FBQzs7b0NBQ2E7QUFFbEI7SUFBYiw0QkFBVSxFQUFFOzhCQUFVLGVBQU07b0NBQWE7QUFFNUI7SUFBYiw0QkFBVSxFQUFFOztzQ0FBK0I7QUFyQjlDLG9CQXlEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElzRW1haWwsIElzRW51bSwgSXNOb3RFbXB0eSwgSXNPcHRpb25hbCB9IGZyb20gXCJjbGFzcy12YWxpZGF0b3JcIjtcbmltcG9ydCB7IEJhc2VNb2RlbCwgQmFzZU1vZGVsU2NoZW1hIH0gZnJvbSBcIi4uLy4uL2Jhc2VcIjtcbmltcG9ydCB7IENvbnN1bWVyLCBDb25zdW1lclNjaGVtYSB9IGZyb20gXCIuLi9Db25zdW1lclwiO1xuaW1wb3J0IHsgRG9tYWluLCBEb21haW5TY2hlbWEgfSBmcm9tIFwiLi4vRG9tYWluXCI7XG5pbXBvcnQgeyBPQXV0aENyZWRlbnRpYWxzIH0gZnJvbSBcIi4uL09BdXRoXCI7XG5pbXBvcnQgeyBXYWxsZXQsIFdhbGxldFNjaGVtYSB9IGZyb20gXCIuLi9XYWxsZXRcIjtcbmltcG9ydCB7IFVzZXJSb2xlIH0gZnJvbSBcIi4vVXNlclJvbGVcIjtcbmltcG9ydCB7IFVzZXJTdGF0dXMgfSBmcm9tIFwiLi9Vc2VyU3RhdHVzXCI7XG5pbXBvcnQgeyBQcm9kdWN0LCBQcm9kdWN0U2NoZW1hIH0gZnJvbSBcIi4uL0RvbWFpbi9Qcm9kdWN0XCI7XG5pbXBvcnQgeyBDYXJkU2NoZW1hLCBDYXJkIH0gZnJvbSBcIi4uL0NhcmRcIjtcblxuZXhwb3J0IGludGVyZmFjZSBVc2VyU2NoZW1hIGV4dGVuZHMgQmFzZU1vZGVsU2NoZW1hIHtcbiAgbmFtZT86IHN0cmluZztcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XG4gIGxhc3ROYW1lOiBzdHJpbmc7XG4gIGVtYWlsOiBzdHJpbmc7XG4gIHJvbGU/OiBVc2VyUm9sZTtcbiAgc3RhdHVzPzogVXNlclN0YXR1cztcbiAgcGFzc3dvcmQ/OiBzdHJpbmc7XG4gIGNyZWRlbnRpYWxzPzogT0F1dGhDcmVkZW50aWFscztcbiAgZG9tYWluPzogRG9tYWluU2NoZW1hO1xuICBjb25zdW1lcj86IENvbnN1bWVyU2NoZW1hO1xuICBwcm9kdWN0PzogUHJvZHVjdFNjaGVtYTtcbiAgd2FsbGV0cz86IFdhbGxldFNjaGVtYVtdO1xuICBjYXJkcz86IENhcmRTY2hlbWFbXTtcbiAgdmlydHVhbD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjbGFzcyBVc2VyIGV4dGVuZHMgQmFzZU1vZGVsIGltcGxlbWVudHMgVXNlclNjaGVtYSB7XG4gIEBJc09wdGlvbmFsKCkgbmFtZT86IHN0cmluZyA9IHVuZGVmaW5lZDtcblxuICBASXNOb3RFbXB0eSgpIGZpcnN0TmFtZTogc3RyaW5nID0gdW5kZWZpbmVkO1xuXG4gIEBJc05vdEVtcHR5KCkgbGFzdE5hbWU6IHN0cmluZyA9IHVuZGVmaW5lZDtcblxuICBASXNOb3RFbXB0eSgpXG4gIEBJc0VtYWlsKClcbiAgZW1haWw6IHN0cmluZyA9IHVuZGVmaW5lZDtcblxuICBASXNPcHRpb25hbCgpXG4gIEBJc0VudW0oVXNlclJvbGUpXG4gIHJvbGU/OiBVc2VyUm9sZSA9IHVuZGVmaW5lZDtcblxuICBASXNPcHRpb25hbCgpXG4gIEBJc0VudW0oVXNlclN0YXR1cylcbiAgc3RhdHVzPzogVXNlclN0YXR1cyA9IHVuZGVmaW5lZDtcblxuICBASXNPcHRpb25hbCgpIGRvbWFpbj86IERvbWFpbiA9IHVuZGVmaW5lZDtcblxuICBASXNPcHRpb25hbCgpIHBhc3N3b3JkPzogc3RyaW5nID0gdW5kZWZpbmVkO1xuXG4gIGNvbnN1bWVyPzogQ29uc3VtZXIgPSB1bmRlZmluZWQ7XG4gIHdhbGxldHM/OiBXYWxsZXRbXSA9IHVuZGVmaW5lZDtcbiAgcHJvZHVjdD86IFByb2R1Y3QgPSB1bmRlZmluZWQ7XG4gIGNyZWRlbnRpYWxzPzogT0F1dGhDcmVkZW50aWFscyA9IHVuZGVmaW5lZDtcbiAgY2FyZHM/OiBDYXJkW10gPSB1bmRlZmluZWQ7XG4gIHZpcnR1YWw6IGJvb2xlYW4gPSB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IoZGF0YTogUGFydGlhbDxVc2VyU2NoZW1hPikge1xuICAgIHN1cGVyKGRhdGEpO1xuXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcblxuICAgIGlmICghdGhpcy5uYW1lICYmIGRhdGEuZmlyc3ROYW1lKSB7XG4gICAgICB0aGlzLm5hbWUgPSBgJHtkYXRhLmZpcnN0TmFtZX0gJHtkYXRhLmxhc3ROYW1lID8gZGF0YS5sYXN0TmFtZSA6IFwiXCJ9YDtcbiAgICB9IGVsc2UgaWYgKCF0aGlzLm5hbWUpIHtcbiAgICAgIHRoaXMubmFtZSA9IFwiXCI7XG4gICAgfVxuXG4gICAgdGhpcy52aXJ0dWFsID1cbiAgICAgIGRhdGEuY3JlZGVudGlhbHMgJiYgZGF0YS5jcmVkZW50aWFscy52aXJ0dWFsID8gZGF0YS5jcmVkZW50aWFscy52aXJ0dWFsIDogZGF0YS52aXJ0dWFsIHx8IHRoaXMudmlydHVhbDtcblxuICAgIC8vIFJlbGF0aW9uc2hpcCBhdHRyaWJ1dGVzIGVuZm9yY2luZ1xuICAgIHRoaXMuY3JlZGVudGlhbHMgPSBkYXRhLmNyZWRlbnRpYWxzXG4gICAgICA/IGRhdGEuY3JlZGVudGlhbHMgaW5zdGFuY2VvZiBPQXV0aENyZWRlbnRpYWxzXG4gICAgICAgID8gZGF0YS5jcmVkZW50aWFsc1xuICAgICAgICA6IG5ldyBPQXV0aENyZWRlbnRpYWxzKGRhdGEuY3JlZGVudGlhbHMpXG4gICAgICA6IHVuZGVmaW5lZDtcblxuICAgIHRoaXMuZG9tYWluID0gZGF0YS5kb21haW4gJiYgbmV3IERvbWFpbihkYXRhLmRvbWFpbik7XG4gICAgdGhpcy5jb25zdW1lciA9IGRhdGEuY29uc3VtZXIgJiYgbmV3IENvbnN1bWVyKGRhdGEuY29uc3VtZXIpO1xuICAgIHRoaXMucHJvZHVjdCA9IGRhdGEucHJvZHVjdCAmJiBuZXcgUHJvZHVjdChkYXRhLnByb2R1Y3QpO1xuICAgIHRoaXMud2FsbGV0cyA9IGRhdGEud2FsbGV0cyAmJiBkYXRhLndhbGxldHMubWFwKHdhbGxldCA9PiBuZXcgV2FsbGV0KHdhbGxldCkpO1xuICAgIHRoaXMuY2FyZHMgPSBkYXRhLmNhcmRzICYmIGRhdGEuY2FyZHMubWFwKGNhcmQgPT4gbmV3IENhcmQoY2FyZCkpO1xuICB9XG59XG4iXX0=