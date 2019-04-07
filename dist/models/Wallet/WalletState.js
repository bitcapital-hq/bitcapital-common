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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2FsbGV0U3RhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvbW9kZWxzL1dhbGxldC9XYWxsZXRTdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHFDQUF3RDtBQUN4RCxxREFBeUM7QUFDekMsaURBQThDO0FBQzlDLHFDQUFnRDtBQU9oRCxNQUFhLFdBQVksU0FBUSxnQkFBUztJQU14QyxZQUFZLElBQWdDO1FBQzFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQU5RLFdBQU0sR0FBaUIsU0FBUyxDQUFDO1FBRXZELFdBQU0sR0FBWSxTQUFTLENBQUM7UUFDNUIsZUFBVSxHQUFZLFNBQVMsQ0FBQztRQUk5QixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxlQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Q0FDRjtBQVZ1QjtJQUFyQix3QkFBTSxDQUFDLDJCQUFZLENBQUM7OzJDQUFrQztBQUR6RCxrQ0FXQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VNb2RlbCwgQmFzZU1vZGVsU2NoZW1hIH0gZnJvbSBcIi4uLy4uL2Jhc2VcIjtcbmltcG9ydCB7IElzRW51bSB9IGZyb20gXCJjbGFzcy12YWxpZGF0b3JcIjtcbmltcG9ydCB7IFdhbGxldFN0YXR1cyB9IGZyb20gXCIuL1dhbGxldFN0YXR1c1wiO1xuaW1wb3J0IHsgV2FsbGV0U2NoZW1hLCBXYWxsZXQgfSBmcm9tIFwiLi9XYWxsZXRcIjtcblxuZXhwb3J0IGludGVyZmFjZSBXYWxsZXRTdGF0ZVNjaGVtYSBleHRlbmRzIEJhc2VNb2RlbFNjaGVtYSB7XG4gIHN0YXR1czogV2FsbGV0U3RhdHVzO1xuICB3YWxsZXQ/OiBXYWxsZXRTY2hlbWE7XG59XG5cbmV4cG9ydCBjbGFzcyBXYWxsZXRTdGF0ZSBleHRlbmRzIEJhc2VNb2RlbCBpbXBsZW1lbnRzIFdhbGxldFN0YXRlU2NoZW1hIHtcbiAgQElzRW51bShXYWxsZXRTdGF0dXMpIHN0YXR1czogV2FsbGV0U3RhdHVzID0gdW5kZWZpbmVkO1xuXG4gIHdhbGxldD86IFdhbGxldCA9IHVuZGVmaW5lZDtcbiAgY29uc3VtZXJJZD86IHN0cmluZyA9IHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3RvcihkYXRhOiBQYXJ0aWFsPFdhbGxldFN0YXRlU2NoZW1hPikge1xuICAgIHN1cGVyKGRhdGEpO1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XG4gICAgdGhpcy53YWxsZXQgPSBkYXRhLndhbGxldCAmJiBuZXcgV2FsbGV0KGRhdGEud2FsbGV0KTtcbiAgfVxufVxuIl19