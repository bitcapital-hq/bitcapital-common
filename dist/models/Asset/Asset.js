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
        this.wallet = undefined;
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
], Asset.prototype, "wallet", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsEnum(provider_1.CustodyProvider),
    __metadata("design:type", String)
], Asset.prototype, "provider", void 0);
exports.default = Asset;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXNzZXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvbW9kZWxzL0Fzc2V0L0Fzc2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscURBQWlFO0FBQ2pFLHFDQUF3RDtBQUN4RCw2Q0FBaUQ7QUFDakQsc0NBQWlEO0FBU2pELFdBQTJCLFNBQVEsZ0JBQVM7SUFXMUMsWUFBWSxJQUEwQjtRQUNwQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFYQSxTQUFJLEdBQVcsU0FBUyxDQUFDO1FBRXpCLFNBQUksR0FBWSxTQUFTLENBQUM7UUFFMUIsV0FBTSxHQUFZLFNBQVMsQ0FBQztRQUkxQyxhQUFRLEdBQXFCLFNBQVMsQ0FBQztJQUl2QyxDQUFDO0NBQ0Y7QUFiZTtJQUFiLDRCQUFVLEVBQUU7O21DQUEwQjtBQUV6QjtJQUFiLDRCQUFVLEVBQUU7O21DQUEyQjtBQUUxQjtJQUFiLDRCQUFVLEVBQUU7OEJBQVUsZUFBTTtxQ0FBYTtBQUkxQztJQUZDLDRCQUFVLEVBQUU7SUFDWix3QkFBTSxDQUFDLDBCQUFlLENBQUM7O3VDQUNlO0FBVHpDLHdCQWNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSXNOb3RFbXB0eSwgSXNPcHRpb25hbCwgSXNFbnVtIH0gZnJvbSBcImNsYXNzLXZhbGlkYXRvclwiO1xuaW1wb3J0IHsgQmFzZU1vZGVsLCBCYXNlTW9kZWxTY2hlbWEgfSBmcm9tIFwiLi4vLi4vYmFzZVwiO1xuaW1wb3J0IHsgQ3VzdG9keVByb3ZpZGVyIH0gZnJvbSBcIi4uLy4uL3Byb3ZpZGVyXCI7XG5pbXBvcnQgeyBXYWxsZXQsIFdhbGxldFNjaGVtYSB9IGZyb20gXCIuLi9XYWxsZXRcIjtcblxuZXhwb3J0IGludGVyZmFjZSBBc3NldFNjaGVtYSBleHRlbmRzIEJhc2VNb2RlbFNjaGVtYSB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIGNvZGU6IHN0cmluZztcbiAgd2FsbGV0PzogV2FsbGV0U2NoZW1hO1xuICBwcm92aWRlcj86IEN1c3RvZHlQcm92aWRlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXNzZXQgZXh0ZW5kcyBCYXNlTW9kZWwgaW1wbGVtZW50cyBBc3NldFNjaGVtYSB7XG4gIEBJc05vdEVtcHR5KCkgY29kZTogc3RyaW5nID0gdW5kZWZpbmVkO1xuXG4gIEBJc09wdGlvbmFsKCkgbmFtZT86IHN0cmluZyA9IHVuZGVmaW5lZDtcblxuICBASXNPcHRpb25hbCgpIHdhbGxldD86IFdhbGxldCA9IHVuZGVmaW5lZDtcblxuICBASXNPcHRpb25hbCgpIFxuICBASXNFbnVtKEN1c3RvZHlQcm92aWRlcilcbiAgcHJvdmlkZXI/OiBDdXN0b2R5UHJvdmlkZXIgPSB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IoZGF0YTogUGFydGlhbDxBc3NldFNjaGVtYT4pIHtcbiAgICBzdXBlcihkYXRhKTtcbiAgfVxufVxuIl19