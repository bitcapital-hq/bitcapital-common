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
        this.states = data.states && data.states.map(state => new UserState_1.UserState(state));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9tb2RlbHMvVXNlci9Vc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscURBQTBFO0FBQzFFLHFDQUF3RDtBQUN4RCwwQ0FBdUQ7QUFDdkQsc0NBQWlEO0FBQ2pELG9DQUE0QztBQUM1QyxzQ0FBaUQ7QUFDakQseUNBQXNDO0FBQ3RDLDZDQUEwQztBQUMxQywrQ0FBMkQ7QUFDM0Qsa0NBQTJDO0FBQzNDLDJDQUF5RDtBQW9CekQsTUFBYSxJQUFLLFNBQVEsZ0JBQVM7SUErQmpDLFlBQVksSUFBeUI7UUFDbkMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBL0JBLFNBQUksR0FBWSxTQUFTLENBQUM7UUFFMUIsY0FBUyxHQUFXLFNBQVMsQ0FBQztRQUU5QixhQUFRLEdBQVcsU0FBUyxDQUFDO1FBSTNDLFVBQUssR0FBVyxTQUFTLENBQUM7UUFJMUIsU0FBSSxHQUFjLFNBQVMsQ0FBQztRQUk1QixXQUFNLEdBQWdCLFNBQVMsQ0FBQztRQUVsQixXQUFNLEdBQVksU0FBUyxDQUFDO1FBRTVCLGFBQVEsR0FBWSxTQUFTLENBQUM7UUFHNUMsYUFBUSxHQUFjLFNBQVMsQ0FBQztRQUNoQyxZQUFPLEdBQWMsU0FBUyxDQUFDO1FBQy9CLFlBQU8sR0FBYSxTQUFTLENBQUM7UUFDOUIsZ0JBQVcsR0FBc0IsU0FBUyxDQUFDO1FBQzNDLFVBQUssR0FBWSxTQUFTLENBQUM7UUFDM0IsWUFBTyxHQUFZLFNBQVMsQ0FBQztRQUszQixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUUxQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO1NBQ3ZFO2FBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7U0FDaEI7UUFFRCxJQUFJLENBQUMsT0FBTztZQUNWLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUM7UUFFekcsb0NBQW9DO1FBQ3BDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVc7WUFDakMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLFlBQVksd0JBQWdCO2dCQUM1QyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVc7Z0JBQ2xCLENBQUMsQ0FBQyxJQUFJLHdCQUFnQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7WUFDMUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUVkLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUkscUJBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzVFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLGVBQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksbUJBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksaUJBQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxlQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUM5RSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLFdBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7Q0FDRjtBQTFEZTtJQUFiLDRCQUFVLEVBQUU7O2tDQUEyQjtBQUUxQjtJQUFiLDRCQUFVLEVBQUU7O3VDQUErQjtBQUU5QjtJQUFiLDRCQUFVLEVBQUU7O3NDQUE4QjtBQUkzQztJQUZDLDRCQUFVLEVBQUU7SUFDWix5QkFBTyxFQUFFOzttQ0FDZ0I7QUFJMUI7SUFGQyw0QkFBVSxFQUFFO0lBQ1osd0JBQU0sQ0FBQyxtQkFBUSxDQUFDOztrQ0FDVztBQUk1QjtJQUZDLDRCQUFVLEVBQUU7SUFDWix3QkFBTSxDQUFDLHVCQUFVLENBQUM7O29DQUNhO0FBRWxCO0lBQWIsNEJBQVUsRUFBRTs4QkFBVSxlQUFNO29DQUFhO0FBRTVCO0lBQWIsNEJBQVUsRUFBRTs7c0NBQStCO0FBckI5QyxvQkEyREMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJc0VtYWlsLCBJc0VudW0sIElzTm90RW1wdHksIElzT3B0aW9uYWwgfSBmcm9tIFwiY2xhc3MtdmFsaWRhdG9yXCI7XHJcbmltcG9ydCB7IEJhc2VNb2RlbCwgQmFzZU1vZGVsU2NoZW1hIH0gZnJvbSBcIi4uLy4uL2Jhc2VcIjtcclxuaW1wb3J0IHsgQ29uc3VtZXIsIENvbnN1bWVyU2NoZW1hIH0gZnJvbSBcIi4uL0NvbnN1bWVyXCI7XHJcbmltcG9ydCB7IERvbWFpbiwgRG9tYWluU2NoZW1hIH0gZnJvbSBcIi4uL0RvbWFpblwiO1xyXG5pbXBvcnQgeyBPQXV0aENyZWRlbnRpYWxzIH0gZnJvbSBcIi4uL09BdXRoXCI7XHJcbmltcG9ydCB7IFdhbGxldCwgV2FsbGV0U2NoZW1hIH0gZnJvbSBcIi4uL1dhbGxldFwiO1xyXG5pbXBvcnQgeyBVc2VyUm9sZSB9IGZyb20gXCIuL1VzZXJSb2xlXCI7XHJcbmltcG9ydCB7IFVzZXJTdGF0dXMgfSBmcm9tIFwiLi9Vc2VyU3RhdHVzXCI7XHJcbmltcG9ydCB7IFByb2R1Y3QsIFByb2R1Y3RTY2hlbWEgfSBmcm9tIFwiLi4vRG9tYWluL1Byb2R1Y3RcIjtcclxuaW1wb3J0IHsgQ2FyZFNjaGVtYSwgQ2FyZCB9IGZyb20gXCIuLi9DYXJkXCI7XHJcbmltcG9ydCB7IFVzZXJTdGF0ZSwgVXNlclN0YXRlU2NoZW1hIH0gZnJvbSBcIi4vVXNlclN0YXRlXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJTY2hlbWEgZXh0ZW5kcyBCYXNlTW9kZWxTY2hlbWEge1xyXG4gIG5hbWU/OiBzdHJpbmc7XHJcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XHJcbiAgbGFzdE5hbWU6IHN0cmluZztcclxuICBlbWFpbDogc3RyaW5nO1xyXG4gIHJvbGU/OiBVc2VyUm9sZTtcclxuICBzdGF0dXM/OiBVc2VyU3RhdHVzO1xyXG4gIHN0YXRlcz86IFVzZXJTdGF0ZVNjaGVtYVtdO1xyXG4gIHBhc3N3b3JkPzogc3RyaW5nO1xyXG4gIGNyZWRlbnRpYWxzPzogT0F1dGhDcmVkZW50aWFscztcclxuICBkb21haW4/OiBEb21haW5TY2hlbWE7XHJcbiAgY29uc3VtZXI/OiBDb25zdW1lclNjaGVtYTtcclxuICBwcm9kdWN0PzogUHJvZHVjdFNjaGVtYTtcclxuICB3YWxsZXRzPzogV2FsbGV0U2NoZW1hW107XHJcbiAgY2FyZHM/OiBDYXJkU2NoZW1hW107XHJcbiAgdmlydHVhbD86IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VyIGV4dGVuZHMgQmFzZU1vZGVsIGltcGxlbWVudHMgVXNlclNjaGVtYSB7XHJcbiAgQElzT3B0aW9uYWwoKSBuYW1lPzogc3RyaW5nID0gdW5kZWZpbmVkO1xyXG5cclxuICBASXNOb3RFbXB0eSgpIGZpcnN0TmFtZTogc3RyaW5nID0gdW5kZWZpbmVkO1xyXG5cclxuICBASXNOb3RFbXB0eSgpIGxhc3ROYW1lOiBzdHJpbmcgPSB1bmRlZmluZWQ7XHJcblxyXG4gIEBJc05vdEVtcHR5KClcclxuICBASXNFbWFpbCgpXHJcbiAgZW1haWw6IHN0cmluZyA9IHVuZGVmaW5lZDtcclxuXHJcbiAgQElzT3B0aW9uYWwoKVxyXG4gIEBJc0VudW0oVXNlclJvbGUpXHJcbiAgcm9sZT86IFVzZXJSb2xlID0gdW5kZWZpbmVkO1xyXG5cclxuICBASXNPcHRpb25hbCgpXHJcbiAgQElzRW51bShVc2VyU3RhdHVzKVxyXG4gIHN0YXR1cz86IFVzZXJTdGF0dXMgPSB1bmRlZmluZWQ7XHJcblxyXG4gIEBJc09wdGlvbmFsKCkgZG9tYWluPzogRG9tYWluID0gdW5kZWZpbmVkO1xyXG5cclxuICBASXNPcHRpb25hbCgpIHBhc3N3b3JkPzogc3RyaW5nID0gdW5kZWZpbmVkO1xyXG5cclxuICBzdGF0ZXM/OiBVc2VyU3RhdGVbXTtcclxuICBjb25zdW1lcj86IENvbnN1bWVyID0gdW5kZWZpbmVkO1xyXG4gIHdhbGxldHM/OiBXYWxsZXRbXSA9IHVuZGVmaW5lZDtcclxuICBwcm9kdWN0PzogUHJvZHVjdCA9IHVuZGVmaW5lZDtcclxuICBjcmVkZW50aWFscz86IE9BdXRoQ3JlZGVudGlhbHMgPSB1bmRlZmluZWQ7XHJcbiAgY2FyZHM/OiBDYXJkW10gPSB1bmRlZmluZWQ7XHJcbiAgdmlydHVhbDogYm9vbGVhbiA9IHVuZGVmaW5lZDtcclxuXHJcbiAgY29uc3RydWN0b3IoZGF0YTogUGFydGlhbDxVc2VyU2NoZW1hPikge1xyXG4gICAgc3VwZXIoZGF0YSk7XHJcblxyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcclxuXHJcbiAgICBpZiAoIXRoaXMubmFtZSAmJiBkYXRhLmZpcnN0TmFtZSkge1xyXG4gICAgICB0aGlzLm5hbWUgPSBgJHtkYXRhLmZpcnN0TmFtZX0gJHtkYXRhLmxhc3ROYW1lID8gZGF0YS5sYXN0TmFtZSA6IFwiXCJ9YDtcclxuICAgIH0gZWxzZSBpZiAoIXRoaXMubmFtZSkge1xyXG4gICAgICB0aGlzLm5hbWUgPSBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudmlydHVhbCA9XHJcbiAgICAgIGRhdGEuY3JlZGVudGlhbHMgJiYgZGF0YS5jcmVkZW50aWFscy52aXJ0dWFsID8gZGF0YS5jcmVkZW50aWFscy52aXJ0dWFsIDogZGF0YS52aXJ0dWFsIHx8IHRoaXMudmlydHVhbDtcclxuXHJcbiAgICAvLyBSZWxhdGlvbnNoaXAgYXR0cmlidXRlcyBlbmZvcmNpbmdcclxuICAgIHRoaXMuY3JlZGVudGlhbHMgPSBkYXRhLmNyZWRlbnRpYWxzXHJcbiAgICAgID8gZGF0YS5jcmVkZW50aWFscyBpbnN0YW5jZW9mIE9BdXRoQ3JlZGVudGlhbHNcclxuICAgICAgICA/IGRhdGEuY3JlZGVudGlhbHNcclxuICAgICAgICA6IG5ldyBPQXV0aENyZWRlbnRpYWxzKGRhdGEuY3JlZGVudGlhbHMpXHJcbiAgICAgIDogdW5kZWZpbmVkO1xyXG5cclxuICAgIHRoaXMuc3RhdGVzID0gZGF0YS5zdGF0ZXMgJiYgZGF0YS5zdGF0ZXMubWFwKHN0YXRlID0+IG5ldyBVc2VyU3RhdGUoc3RhdGUpKTtcclxuICAgIHRoaXMuZG9tYWluID0gZGF0YS5kb21haW4gJiYgbmV3IERvbWFpbihkYXRhLmRvbWFpbik7XHJcbiAgICB0aGlzLmNvbnN1bWVyID0gZGF0YS5jb25zdW1lciAmJiBuZXcgQ29uc3VtZXIoZGF0YS5jb25zdW1lcik7XHJcbiAgICB0aGlzLnByb2R1Y3QgPSBkYXRhLnByb2R1Y3QgJiYgbmV3IFByb2R1Y3QoZGF0YS5wcm9kdWN0KTtcclxuICAgIHRoaXMud2FsbGV0cyA9IGRhdGEud2FsbGV0cyAmJiBkYXRhLndhbGxldHMubWFwKHdhbGxldCA9PiBuZXcgV2FsbGV0KHdhbGxldCkpO1xyXG4gICAgdGhpcy5jYXJkcyA9IGRhdGEuY2FyZHMgJiYgZGF0YS5jYXJkcy5tYXAoY2FyZCA9PiBuZXcgQ2FyZChjYXJkKSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==