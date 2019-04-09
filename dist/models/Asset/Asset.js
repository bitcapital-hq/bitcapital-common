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
        this.balance = undefined;
        this.root = undefined;
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
    __metadata("design:type", String)
], Asset.prototype, "balance", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Boolean)
], Asset.prototype, "root", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsEnum(provider_1.CustodyProvider),
    __metadata("design:type", String)
], Asset.prototype, "provider", void 0);
exports.Asset = Asset;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXNzZXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvbW9kZWxzL0Fzc2V0L0Fzc2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscURBQWlFO0FBQ2pFLHFDQUF3RDtBQUN4RCw2Q0FBaUQ7QUFDakQsc0NBQWlEO0FBQ2pELHdDQUFvRDtBQWFwRCxNQUFhLEtBQU0sU0FBUSxnQkFBUztJQW1CbEMsWUFBWSxJQUEwQjtRQUNwQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFuQkEsU0FBSSxHQUFZLFNBQVMsQ0FBQztRQUUxQixTQUFJLEdBQVcsU0FBUyxDQUFDO1FBRXpCLFdBQU0sR0FBWSxTQUFTLENBQUM7UUFFNUIsWUFBTyxHQUFjLFNBQVMsQ0FBQztRQUUvQixhQUFRLEdBQWUsU0FBUyxDQUFDO1FBRWpDLFlBQU8sR0FBWSxTQUFTLENBQUM7UUFFN0IsU0FBSSxHQUFhLFNBQVMsQ0FBQztRQUl6QyxhQUFRLEdBQXFCLFNBQVMsQ0FBQztRQUtyQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUUxQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxlQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksZUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDOUUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxpQkFBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDdEYsQ0FBQztDQUNGO0FBM0JlO0lBQWIsNEJBQVUsRUFBRTs7bUNBQTJCO0FBRTFCO0lBQWIsNEJBQVUsRUFBRTs7bUNBQTBCO0FBRXpCO0lBQWIsNEJBQVUsRUFBRTs4QkFBVSxlQUFNO3FDQUFhO0FBRTVCO0lBQWIsNEJBQVUsRUFBRTs7c0NBQWdDO0FBRS9CO0lBQWIsNEJBQVUsRUFBRTs7dUNBQWtDO0FBRWpDO0lBQWIsNEJBQVUsRUFBRTs7c0NBQThCO0FBRTdCO0lBQWIsNEJBQVUsRUFBRTs7bUNBQTRCO0FBSXpDO0lBRkMsNEJBQVUsRUFBRTtJQUNaLHdCQUFNLENBQUMsMEJBQWUsQ0FBQzs7dUNBQ2U7QUFqQnpDLHNCQTRCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElzTm90RW1wdHksIElzT3B0aW9uYWwsIElzRW51bSB9IGZyb20gXCJjbGFzcy12YWxpZGF0b3JcIjtcbmltcG9ydCB7IEJhc2VNb2RlbCwgQmFzZU1vZGVsU2NoZW1hIH0gZnJvbSBcIi4uLy4uL2Jhc2VcIjtcbmltcG9ydCB7IEN1c3RvZHlQcm92aWRlciB9IGZyb20gXCIuLi8uLi9wcm92aWRlclwiO1xuaW1wb3J0IHsgV2FsbGV0LCBXYWxsZXRTY2hlbWEgfSBmcm9tIFwiLi4vV2FsbGV0XCI7XG5pbXBvcnQgeyBQYXltZW50U2NoZW1hLCBQYXltZW50IH0gZnJvbSBcIi4uL1BheW1lbnRcIjtcblxuZXhwb3J0IGludGVyZmFjZSBBc3NldFNjaGVtYSBleHRlbmRzIEJhc2VNb2RlbFNjaGVtYSB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIGNvZGU6IHN0cmluZztcbiAgaXNzdWVyPzogV2FsbGV0U2NoZW1hO1xuICB3YWxsZXRzPzogV2FsbGV0U2NoZW1hW107XG4gIHBheW1lbnRzPzogUGF5bWVudFNjaGVtYVtdO1xuICBwcm92aWRlcj86IEN1c3RvZHlQcm92aWRlcjtcbiAgYmFsYW5jZT86IHN0cmluZztcbiAgcm9vdD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjbGFzcyBBc3NldCBleHRlbmRzIEJhc2VNb2RlbCBpbXBsZW1lbnRzIEFzc2V0U2NoZW1hIHtcbiAgQElzT3B0aW9uYWwoKSBuYW1lPzogc3RyaW5nID0gdW5kZWZpbmVkO1xuXG4gIEBJc05vdEVtcHR5KCkgY29kZTogc3RyaW5nID0gdW5kZWZpbmVkO1xuXG4gIEBJc09wdGlvbmFsKCkgaXNzdWVyPzogV2FsbGV0ID0gdW5kZWZpbmVkO1xuXG4gIEBJc09wdGlvbmFsKCkgd2FsbGV0cz86IFdhbGxldFtdID0gdW5kZWZpbmVkO1xuXG4gIEBJc09wdGlvbmFsKCkgcGF5bWVudHM/OiBQYXltZW50W10gPSB1bmRlZmluZWQ7XG5cbiAgQElzT3B0aW9uYWwoKSBiYWxhbmNlPzogc3RyaW5nID0gdW5kZWZpbmVkO1xuXG4gIEBJc09wdGlvbmFsKCkgcm9vdD86IGJvb2xlYW4gPSB1bmRlZmluZWQ7XG5cbiAgQElzT3B0aW9uYWwoKVxuICBASXNFbnVtKEN1c3RvZHlQcm92aWRlcilcbiAgcHJvdmlkZXI/OiBDdXN0b2R5UHJvdmlkZXIgPSB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IoZGF0YTogUGFydGlhbDxBc3NldFNjaGVtYT4pIHtcbiAgICBzdXBlcihkYXRhKTtcblxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XG5cbiAgICB0aGlzLmlzc3VlciA9IGRhdGEuaXNzdWVyICYmIG5ldyBXYWxsZXQoZGF0YS5pc3N1ZXIpO1xuICAgIHRoaXMud2FsbGV0cyA9IGRhdGEud2FsbGV0cyAmJiBkYXRhLndhbGxldHMubWFwKHdhbGxldCA9PiBuZXcgV2FsbGV0KHdhbGxldCkpO1xuICAgIHRoaXMucGF5bWVudHMgPSBkYXRhLnBheW1lbnRzICYmIGRhdGEucGF5bWVudHMubWFwKHBheW1lbnQgPT4gbmV3IFBheW1lbnQocGF5bWVudCkpO1xuICB9XG59XG4iXX0=