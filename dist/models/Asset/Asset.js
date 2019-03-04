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
const provider_1 = require("../../provider");
const Wallet_1 = require("../Wallet");
const Payment_1 = require("../Payment");
class Asset extends base_1.BaseModel {
    constructor(data) {
        super(data);
        this.name = undefined;
        this.code = undefined;
        this.issuer = undefined;
        this.wallets = undefined;
        this.payments = undefined;
        this.provider = undefined;
        Object.assign(this, data);
        this.issuer = data.issuer && new Wallet_1.Wallet(data.issuer);
        this.wallets = data.wallets && data.wallets.map(wallet => new Wallet_1.Wallet(wallet));
        this.payments = data.payments && data.payments.map(payment => new Payment_1.Payment(payment));
    }
}
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], Asset.prototype, "name", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], Asset.prototype, "code", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Wallet_1.Wallet)
], Asset.prototype, "issuer", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Array)
], Asset.prototype, "wallets", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Array)
], Asset.prototype, "payments", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsEnum(provider_1.CustodyProvider),
    __metadata("design:type", String)
], Asset.prototype, "provider", void 0);
exports.Asset = Asset;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXNzZXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvbW9kZWxzL0Fzc2V0L0Fzc2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscURBQWlFO0FBQ2pFLHFDQUF3RDtBQUN4RCw2Q0FBaUQ7QUFDakQsc0NBQWlEO0FBQ2pELHdDQUFvRDtBQVdwRCxNQUFhLEtBQU0sU0FBUSxnQkFBUztJQWVsQyxZQUFZLElBQTBCO1FBQ3BDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQWZBLFNBQUksR0FBWSxTQUFTLENBQUM7UUFFMUIsU0FBSSxHQUFXLFNBQVMsQ0FBQztRQUV6QixXQUFNLEdBQVksU0FBUyxDQUFDO1FBRTVCLFlBQU8sR0FBYyxTQUFTLENBQUM7UUFFL0IsYUFBUSxHQUFlLFNBQVMsQ0FBQztRQUkvQyxhQUFRLEdBQXFCLFNBQVMsQ0FBQztRQUtyQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUUxQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxlQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksZUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDOUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxpQkFBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDdEYsQ0FBQztDQUNGO0FBdkJlO0lBQWIsNEJBQVUsRUFBRTs7bUNBQTJCO0FBRTFCO0lBQWIsNEJBQVUsRUFBRTs7bUNBQTBCO0FBRXpCO0lBQWIsNEJBQVUsRUFBRTs4QkFBVSxlQUFNO3FDQUFhO0FBRTVCO0lBQWIsNEJBQVUsRUFBRTs7c0NBQWdDO0FBRS9CO0lBQWIsNEJBQVUsRUFBRTs7dUNBQWtDO0FBSS9DO0lBRkMsNEJBQVUsRUFBRTtJQUNaLHdCQUFNLENBQUMsMEJBQWUsQ0FBQzs7dUNBQ2U7QUFiekMsc0JBd0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSXNOb3RFbXB0eSwgSXNPcHRpb25hbCwgSXNFbnVtIH0gZnJvbSBcImNsYXNzLXZhbGlkYXRvclwiO1xuaW1wb3J0IHsgQmFzZU1vZGVsLCBCYXNlTW9kZWxTY2hlbWEgfSBmcm9tIFwiLi4vLi4vYmFzZVwiO1xuaW1wb3J0IHsgQ3VzdG9keVByb3ZpZGVyIH0gZnJvbSBcIi4uLy4uL3Byb3ZpZGVyXCI7XG5pbXBvcnQgeyBXYWxsZXQsIFdhbGxldFNjaGVtYSB9IGZyb20gXCIuLi9XYWxsZXRcIjtcbmltcG9ydCB7IFBheW1lbnRTY2hlbWEsIFBheW1lbnQgfSBmcm9tIFwiLi4vUGF5bWVudFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFzc2V0U2NoZW1hIGV4dGVuZHMgQmFzZU1vZGVsU2NoZW1hIHtcbiAgbmFtZT86IHN0cmluZztcbiAgY29kZTogc3RyaW5nO1xuICBpc3N1ZXI/OiBXYWxsZXRTY2hlbWE7XG4gIHdhbGxldHM/OiBXYWxsZXRTY2hlbWFbXTtcbiAgcGF5bWVudHM/OiBQYXltZW50U2NoZW1hW107XG4gIHByb3ZpZGVyPzogQ3VzdG9keVByb3ZpZGVyO1xufVxuXG5leHBvcnQgY2xhc3MgQXNzZXQgZXh0ZW5kcyBCYXNlTW9kZWwgaW1wbGVtZW50cyBBc3NldFNjaGVtYSB7XG4gIEBJc09wdGlvbmFsKCkgbmFtZT86IHN0cmluZyA9IHVuZGVmaW5lZDtcblxuICBASXNOb3RFbXB0eSgpIGNvZGU6IHN0cmluZyA9IHVuZGVmaW5lZDtcblxuICBASXNPcHRpb25hbCgpIGlzc3Vlcj86IFdhbGxldCA9IHVuZGVmaW5lZDtcblxuICBASXNPcHRpb25hbCgpIHdhbGxldHM/OiBXYWxsZXRbXSA9IHVuZGVmaW5lZDtcblxuICBASXNPcHRpb25hbCgpIHBheW1lbnRzPzogUGF5bWVudFtdID0gdW5kZWZpbmVkO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgQElzRW51bShDdXN0b2R5UHJvdmlkZXIpXG4gIHByb3ZpZGVyPzogQ3VzdG9keVByb3ZpZGVyID0gdW5kZWZpbmVkO1xuXG4gIGNvbnN0cnVjdG9yKGRhdGE6IFBhcnRpYWw8QXNzZXRTY2hlbWE+KSB7XG4gICAgc3VwZXIoZGF0YSk7XG5cbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xuXG4gICAgdGhpcy5pc3N1ZXIgPSBkYXRhLmlzc3VlciAmJiBuZXcgV2FsbGV0KGRhdGEuaXNzdWVyKTtcbiAgICB0aGlzLndhbGxldHMgPSBkYXRhLndhbGxldHMgJiYgZGF0YS53YWxsZXRzLm1hcCh3YWxsZXQgPT4gbmV3IFdhbGxldCh3YWxsZXQpKTtcbiAgICB0aGlzLnBheW1lbnRzID0gZGF0YS5wYXltZW50cyAmJiBkYXRhLnBheW1lbnRzLm1hcChwYXltZW50ID0+IG5ldyBQYXltZW50KHBheW1lbnQpKTtcbiAgfVxufVxuIl19