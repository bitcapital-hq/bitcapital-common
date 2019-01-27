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
class Asset extends base_1.BaseModel {
    constructor(data) {
        super(data);
        this.code = undefined;
        this.name = undefined;
        this.issuer = undefined;
        this.wallets = undefined;
        this.payments = undefined;
        this.provider = undefined;
    }
}
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], Asset.prototype, "code", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], Asset.prototype, "name", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXNzZXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvbW9kZWxzL0Fzc2V0L0Fzc2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscURBQWlFO0FBQ2pFLHFDQUF3RDtBQUN4RCw2Q0FBaUQ7QUFDakQsc0NBQWlEO0FBWWpELE1BQWEsS0FBTSxTQUFRLGdCQUFTO0lBZ0JsQyxZQUFZLElBQTBCO1FBQ3BDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQWhCQSxTQUFJLEdBQVcsU0FBUyxDQUFDO1FBRXpCLFNBQUksR0FBWSxTQUFTLENBQUM7UUFFMUIsV0FBTSxHQUFZLFNBQVMsQ0FBQztRQUU1QixZQUFPLEdBQWMsU0FBUyxDQUFDO1FBRzdDLGFBQVEsR0FBZSxTQUFTLENBQUM7UUFJakMsYUFBUSxHQUFxQixTQUFTLENBQUM7SUFJdkMsQ0FBQztDQUNGO0FBbEJlO0lBQWIsNEJBQVUsRUFBRTs7bUNBQTBCO0FBRXpCO0lBQWIsNEJBQVUsRUFBRTs7bUNBQTJCO0FBRTFCO0lBQWIsNEJBQVUsRUFBRTs4QkFBVSxlQUFNO3FDQUFhO0FBRTVCO0lBQWIsNEJBQVUsRUFBRTs7c0NBQWdDO0FBRzdDO0lBREMsNEJBQVUsRUFBRTs7dUNBQ29CO0FBSWpDO0lBRkMsNEJBQVUsRUFBRTtJQUNaLHdCQUFNLENBQUMsMEJBQWUsQ0FBQzs7dUNBQ2U7QUFkekMsc0JBbUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSXNOb3RFbXB0eSwgSXNPcHRpb25hbCwgSXNFbnVtIH0gZnJvbSBcImNsYXNzLXZhbGlkYXRvclwiO1xuaW1wb3J0IHsgQmFzZU1vZGVsLCBCYXNlTW9kZWxTY2hlbWEgfSBmcm9tIFwiLi4vLi4vYmFzZVwiO1xuaW1wb3J0IHsgQ3VzdG9keVByb3ZpZGVyIH0gZnJvbSBcIi4uLy4uL3Byb3ZpZGVyXCI7XG5pbXBvcnQgeyBXYWxsZXQsIFdhbGxldFNjaGVtYSB9IGZyb20gXCIuLi9XYWxsZXRcIjtcbmltcG9ydCB7IFBheW1lbnRTY2hlbWEsIFBheW1lbnQgfSBmcm9tIFwiLi4vUGF5bWVudFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFzc2V0U2NoZW1hIGV4dGVuZHMgQmFzZU1vZGVsU2NoZW1hIHtcbiAgbmFtZT86IHN0cmluZztcbiAgY29kZTogc3RyaW5nO1xuICBpc3N1ZXI/OiBXYWxsZXRTY2hlbWE7XG4gIHdhbGxldHM/OiBXYWxsZXRTY2hlbWFbXTtcbiAgcGF5bWVudHM/OiBQYXltZW50U2NoZW1hW107XG4gIHByb3ZpZGVyPzogQ3VzdG9keVByb3ZpZGVyO1xufVxuXG5leHBvcnQgY2xhc3MgQXNzZXQgZXh0ZW5kcyBCYXNlTW9kZWwgaW1wbGVtZW50cyBBc3NldFNjaGVtYSB7XG4gIEBJc05vdEVtcHR5KCkgY29kZTogc3RyaW5nID0gdW5kZWZpbmVkO1xuXG4gIEBJc09wdGlvbmFsKCkgbmFtZT86IHN0cmluZyA9IHVuZGVmaW5lZDtcblxuICBASXNPcHRpb25hbCgpIGlzc3Vlcj86IFdhbGxldCA9IHVuZGVmaW5lZDtcblxuICBASXNPcHRpb25hbCgpIHdhbGxldHM/OiBXYWxsZXRbXSA9IHVuZGVmaW5lZDtcblxuICBASXNPcHRpb25hbCgpIFxuICBwYXltZW50cz86IFBheW1lbnRbXSA9IHVuZGVmaW5lZDtcblxuICBASXNPcHRpb25hbCgpIFxuICBASXNFbnVtKEN1c3RvZHlQcm92aWRlcilcbiAgcHJvdmlkZXI/OiBDdXN0b2R5UHJvdmlkZXIgPSB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IoZGF0YTogUGFydGlhbDxBc3NldFNjaGVtYT4pIHtcbiAgICBzdXBlcihkYXRhKTtcbiAgfVxufVxuIl19