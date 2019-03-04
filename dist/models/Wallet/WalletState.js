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
const base_1 = require("../../base");
const class_validator_1 = require("class-validator");
const WalletStatus_1 = require("./WalletStatus");
const Wallet_1 = require("./Wallet");
class WalletState extends base_1.BaseModel {
    constructor(data) {
        super(data);
        this.status = undefined;
        this.wallet = undefined;
        this.consumerId = undefined;
        Object.assign(this, data);
        this.wallet = data.wallet && new Wallet_1.Wallet(data.wallet);
    }
}
__decorate([
    class_validator_1.IsEnum(WalletStatus_1.WalletStatus),
    __metadata("design:type", String)
], WalletState.prototype, "status", void 0);
exports.WalletState = WalletState;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2FsbGV0U3RhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvbW9kZWxzL1dhbGxldC9XYWxsZXRTdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHFDQUF3RDtBQUN4RCxxREFBeUM7QUFDekMsaURBQThDO0FBQzlDLHFDQUFnRDtBQU9oRCxNQUFhLFdBQVksU0FBUSxnQkFBUztJQU14QyxZQUFZLElBQWdDO1FBQzFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQU5RLFdBQU0sR0FBaUIsU0FBUyxDQUFDO1FBRXZELFdBQU0sR0FBWSxTQUFTLENBQUM7UUFDNUIsZUFBVSxHQUFZLFNBQVMsQ0FBQztRQUk5QixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxlQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Q0FDRjtBQVZ1QjtJQUFyQix3QkFBTSxDQUFDLDJCQUFZLENBQUM7OzJDQUFrQztBQUR6RCxrQ0FXQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VNb2RlbCwgQmFzZU1vZGVsU2NoZW1hIH0gZnJvbSBcIi4uLy4uL2Jhc2VcIjtcclxuaW1wb3J0IHsgSXNFbnVtIH0gZnJvbSBcImNsYXNzLXZhbGlkYXRvclwiO1xyXG5pbXBvcnQgeyBXYWxsZXRTdGF0dXMgfSBmcm9tIFwiLi9XYWxsZXRTdGF0dXNcIjtcclxuaW1wb3J0IHsgV2FsbGV0U2NoZW1hLCBXYWxsZXQgfSBmcm9tIFwiLi9XYWxsZXRcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgV2FsbGV0U3RhdGVTY2hlbWEgZXh0ZW5kcyBCYXNlTW9kZWxTY2hlbWEge1xyXG4gIHN0YXR1czogV2FsbGV0U3RhdHVzO1xyXG4gIHdhbGxldD86IFdhbGxldFNjaGVtYTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFdhbGxldFN0YXRlIGV4dGVuZHMgQmFzZU1vZGVsIGltcGxlbWVudHMgV2FsbGV0U3RhdGVTY2hlbWEge1xyXG4gIEBJc0VudW0oV2FsbGV0U3RhdHVzKSBzdGF0dXM6IFdhbGxldFN0YXR1cyA9IHVuZGVmaW5lZDtcclxuXHJcbiAgd2FsbGV0PzogV2FsbGV0ID0gdW5kZWZpbmVkO1xyXG4gIGNvbnN1bWVySWQ/OiBzdHJpbmcgPSB1bmRlZmluZWQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRhdGE6IFBhcnRpYWw8V2FsbGV0U3RhdGVTY2hlbWE+KSB7XHJcbiAgICBzdXBlcihkYXRhKTtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XHJcbiAgICB0aGlzLndhbGxldCA9IGRhdGEud2FsbGV0ICYmIG5ldyBXYWxsZXQoZGF0YS53YWxsZXQpO1xyXG4gIH1cclxufVxyXG4iXX0=