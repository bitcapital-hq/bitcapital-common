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
        Object.assign(this, data);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXNzZXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvbW9kZWxzL0Fzc2V0L0Fzc2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscURBQWlFO0FBQ2pFLHFDQUF3RDtBQUN4RCw2Q0FBaUQ7QUFDakQsc0NBQWlEO0FBWWpELE1BQWEsS0FBTSxTQUFRLGdCQUFTO0lBZ0JsQyxZQUFZLElBQTBCO1FBQ3BDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQWhCQSxTQUFJLEdBQVcsU0FBUyxDQUFDO1FBRXpCLFNBQUksR0FBWSxTQUFTLENBQUM7UUFFMUIsV0FBTSxHQUFZLFNBQVMsQ0FBQztRQUU1QixZQUFPLEdBQWMsU0FBUyxDQUFDO1FBRzdDLGFBQVEsR0FBZSxTQUFTLENBQUM7UUFJakMsYUFBUSxHQUFxQixTQUFTLENBQUM7UUFJckMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztDQUNGO0FBbkJlO0lBQWIsNEJBQVUsRUFBRTs7bUNBQTBCO0FBRXpCO0lBQWIsNEJBQVUsRUFBRTs7bUNBQTJCO0FBRTFCO0lBQWIsNEJBQVUsRUFBRTs4QkFBVSxlQUFNO3FDQUFhO0FBRTVCO0lBQWIsNEJBQVUsRUFBRTs7c0NBQWdDO0FBRzdDO0lBREMsNEJBQVUsRUFBRTs7dUNBQ29CO0FBSWpDO0lBRkMsNEJBQVUsRUFBRTtJQUNaLHdCQUFNLENBQUMsMEJBQWUsQ0FBQzs7dUNBQ2U7QUFkekMsc0JBb0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSXNOb3RFbXB0eSwgSXNPcHRpb25hbCwgSXNFbnVtIH0gZnJvbSBcImNsYXNzLXZhbGlkYXRvclwiO1xyXG5pbXBvcnQgeyBCYXNlTW9kZWwsIEJhc2VNb2RlbFNjaGVtYSB9IGZyb20gXCIuLi8uLi9iYXNlXCI7XHJcbmltcG9ydCB7IEN1c3RvZHlQcm92aWRlciB9IGZyb20gXCIuLi8uLi9wcm92aWRlclwiO1xyXG5pbXBvcnQgeyBXYWxsZXQsIFdhbGxldFNjaGVtYSB9IGZyb20gXCIuLi9XYWxsZXRcIjtcclxuaW1wb3J0IHsgUGF5bWVudFNjaGVtYSwgUGF5bWVudCB9IGZyb20gXCIuLi9QYXltZW50XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFzc2V0U2NoZW1hIGV4dGVuZHMgQmFzZU1vZGVsU2NoZW1hIHtcclxuICBuYW1lPzogc3RyaW5nO1xyXG4gIGNvZGU6IHN0cmluZztcclxuICBpc3N1ZXI/OiBXYWxsZXRTY2hlbWE7XHJcbiAgd2FsbGV0cz86IFdhbGxldFNjaGVtYVtdO1xyXG4gIHBheW1lbnRzPzogUGF5bWVudFNjaGVtYVtdO1xyXG4gIHByb3ZpZGVyPzogQ3VzdG9keVByb3ZpZGVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQXNzZXQgZXh0ZW5kcyBCYXNlTW9kZWwgaW1wbGVtZW50cyBBc3NldFNjaGVtYSB7XHJcbiAgQElzTm90RW1wdHkoKSBjb2RlOiBzdHJpbmcgPSB1bmRlZmluZWQ7XHJcblxyXG4gIEBJc09wdGlvbmFsKCkgbmFtZT86IHN0cmluZyA9IHVuZGVmaW5lZDtcclxuXHJcbiAgQElzT3B0aW9uYWwoKSBpc3N1ZXI/OiBXYWxsZXQgPSB1bmRlZmluZWQ7XHJcblxyXG4gIEBJc09wdGlvbmFsKCkgd2FsbGV0cz86IFdhbGxldFtdID0gdW5kZWZpbmVkO1xyXG5cclxuICBASXNPcHRpb25hbCgpIFxyXG4gIHBheW1lbnRzPzogUGF5bWVudFtdID0gdW5kZWZpbmVkO1xyXG5cclxuICBASXNPcHRpb25hbCgpIFxyXG4gIEBJc0VudW0oQ3VzdG9keVByb3ZpZGVyKVxyXG4gIHByb3ZpZGVyPzogQ3VzdG9keVByb3ZpZGVyID0gdW5kZWZpbmVkO1xyXG5cclxuICBjb25zdHJ1Y3RvcihkYXRhOiBQYXJ0aWFsPEFzc2V0U2NoZW1hPikge1xyXG4gICAgc3VwZXIoZGF0YSk7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xyXG4gIH1cclxufVxyXG4iXX0=