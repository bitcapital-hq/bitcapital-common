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
const OAuth_1 = require("../OAuth");
const Payment_1 = require("../Payment");
const Wallet_1 = require("../Wallet");
const TransactionState_1 = require("./TransactionState");
const TransactionType_1 = require("./TransactionType");
exports.TransactionType = TransactionType_1.TransactionType;
class Transaction extends base_1.BaseModel {
    constructor(data) {
        super(data);
        this.type = undefined;
        this.source = undefined;
        this.createdBy = undefined;
        this.payments = undefined;
        this.status = undefined;
        this.states = undefined;
        this.additionalData = undefined;
        Object.assign(this, data);
        this.source = data.source ? new Wallet_1.Wallet(data.source) : undefined;
        this.createdBy = data.createdBy && new OAuth_1.OAuthAccessToken(data.createdBy);
        this.payments = data.payments && data.payments.map(payment => new Payment_1.Payment(payment));
        this.states = data.states && data.states.map(state => new TransactionState_1.TransactionState(state));
    }
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsEnum(TransactionType_1.TransactionType),
    __metadata("design:type", String)
], Transaction.prototype, "type", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Wallet_1.Wallet)
], Transaction.prototype, "source", void 0);
exports.Transaction = Transaction;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJhbnNhY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvbW9kZWxzL1RyYW5zYWN0aW9uL1RyYW5zYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscURBQXFEO0FBQ3JELHFDQUF3RDtBQUN4RCxvQ0FBb0U7QUFDcEUsd0NBQW9EO0FBQ3BELHNDQUFpRDtBQUNqRCx5REFBOEU7QUFFOUUsdURBQW9EO0FBRTNDLDBCQUZBLGlDQUFlLENBRUE7QUF3QnhCLE1BQWEsV0FBWSxTQUFRLGdCQUFTO0lBYXhDLFlBQVksSUFBZ0M7UUFDMUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBWGQsU0FBSSxHQUFvQixTQUFTLENBQUM7UUFFcEIsV0FBTSxHQUFXLFNBQVMsQ0FBQztRQUV6QyxjQUFTLEdBQXNCLFNBQVMsQ0FBQztRQUN6QyxhQUFRLEdBQWUsU0FBUyxDQUFDO1FBQ2pDLFdBQU0sR0FBdUIsU0FBUyxDQUFDO1FBQ3ZDLFdBQU0sR0FBd0IsU0FBUyxDQUFDO1FBQ3hDLG1CQUFjLEdBQStCLFNBQVMsQ0FBQztRQUtyRCxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUUxQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksZUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLHdCQUFnQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLGlCQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLG1DQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDckYsQ0FBQztDQUNGO0FBcEJDO0lBRkMsNEJBQVUsRUFBRTtJQUNaLHdCQUFNLENBQUMsaUNBQWUsQ0FBQzs7eUNBQ1U7QUFFcEI7SUFBYiw0QkFBVSxFQUFFOzhCQUFTLGVBQU07MkNBQWE7QUFMM0Msa0NBdUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSXNFbnVtLCBJc05vdEVtcHR5IH0gZnJvbSBcImNsYXNzLXZhbGlkYXRvclwiO1xuaW1wb3J0IHsgQmFzZU1vZGVsLCBCYXNlTW9kZWxTY2hlbWEgfSBmcm9tIFwiLi4vLi4vYmFzZVwiO1xuaW1wb3J0IHsgT0F1dGhBY2Nlc3NUb2tlbiwgT0F1dGhBY2Nlc3NUb2tlblNjaGVtYSB9IGZyb20gXCIuLi9PQXV0aFwiO1xuaW1wb3J0IHsgUGF5bWVudCwgUGF5bWVudFNjaGVtYSB9IGZyb20gXCIuLi9QYXltZW50XCI7XG5pbXBvcnQgeyBXYWxsZXQsIFdhbGxldFNjaGVtYSB9IGZyb20gXCIuLi9XYWxsZXRcIjtcbmltcG9ydCB7IFRyYW5zYWN0aW9uU3RhdGUsIFRyYW5zYWN0aW9uU3RhdGVTY2hlbWEgfSBmcm9tIFwiLi9UcmFuc2FjdGlvblN0YXRlXCI7XG5pbXBvcnQgeyBUcmFuc2FjdGlvblN0YXR1cyB9IGZyb20gXCIuL1RyYW5zYWN0aW9uU3RhdHVzXCI7XG5pbXBvcnQgeyBUcmFuc2FjdGlvblR5cGUgfSBmcm9tIFwiLi9UcmFuc2FjdGlvblR5cGVcIjtcblxuZXhwb3J0IHsgVHJhbnNhY3Rpb25UeXBlIH07XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhbnNhY3Rpb25BZGRpdGlvbmFsRGF0YSB7XG4gIGhhc2g/OiBzdHJpbmc7XG4gIGFzc2V0SWQ/OiBzdHJpbmc7XG4gIGFzc2V0Q29kZT86IHN0cmluZztcbiAgYXNzZXRfaWQ/OiBzdHJpbmc7XG4gIGFzc2V0X2NvZGU/OiBzdHJpbmc7XG4gIHdhbGxldF9pZD86IHN0cmluZztcbiAgY2FyZF9pZD86IHN0cmluZztcbiAgZXh0ZXJuYWxUcmFuc2FjdGlvbkNyZWF0ZWRBdD86IERhdGU7XG4gIGNvbmR1Y3RvclR5cGU/OiBcImJvbGV0b1wiIHwgXCJ0ZWRkb2NcIiB8IFwiY2FyZFwiIHwgXCJ0cmFuc2FjdGlvbl9yZXZlcnNhbFwiO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRyYW5zYWN0aW9uU2NoZW1hIGV4dGVuZHMgQmFzZU1vZGVsU2NoZW1hIHtcbiAgdHlwZTogVHJhbnNhY3Rpb25UeXBlO1xuICBzb3VyY2U6IFdhbGxldFNjaGVtYTtcbiAgcGF5bWVudHM/OiBQYXltZW50U2NoZW1hW107XG4gIHN0YXR1cz86IFRyYW5zYWN0aW9uU3RhdHVzO1xuICBzdGF0ZXM/OiBUcmFuc2FjdGlvblN0YXRlU2NoZW1hW107XG4gIGNyZWF0ZWRCeT86IE9BdXRoQWNjZXNzVG9rZW5TY2hlbWE7XG4gIGFkZGl0aW9uYWxEYXRhPzogVHJhbnNhY3Rpb25BZGRpdGlvbmFsRGF0YTtcbn1cblxuZXhwb3J0IGNsYXNzIFRyYW5zYWN0aW9uIGV4dGVuZHMgQmFzZU1vZGVsIGltcGxlbWVudHMgVHJhbnNhY3Rpb25TY2hlbWEge1xuICBASXNOb3RFbXB0eSgpXG4gIEBJc0VudW0oVHJhbnNhY3Rpb25UeXBlKVxuICB0eXBlOiBUcmFuc2FjdGlvblR5cGUgPSB1bmRlZmluZWQ7XG5cbiAgQElzTm90RW1wdHkoKSBzb3VyY2U6IFdhbGxldCA9IHVuZGVmaW5lZDtcblxuICBjcmVhdGVkQnk/OiBPQXV0aEFjY2Vzc1Rva2VuID0gdW5kZWZpbmVkO1xuICBwYXltZW50cz86IFBheW1lbnRbXSA9IHVuZGVmaW5lZDtcbiAgc3RhdHVzPzogVHJhbnNhY3Rpb25TdGF0dXMgPSB1bmRlZmluZWQ7XG4gIHN0YXRlcz86IFRyYW5zYWN0aW9uU3RhdGVbXSA9IHVuZGVmaW5lZDtcbiAgYWRkaXRpb25hbERhdGE/OiBUcmFuc2FjdGlvbkFkZGl0aW9uYWxEYXRhID0gdW5kZWZpbmVkO1xuXG4gIGNvbnN0cnVjdG9yKGRhdGE6IFBhcnRpYWw8VHJhbnNhY3Rpb25TY2hlbWE+KSB7XG4gICAgc3VwZXIoZGF0YSk7XG5cbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xuXG4gICAgdGhpcy5zb3VyY2UgPSBkYXRhLnNvdXJjZSA/IG5ldyBXYWxsZXQoZGF0YS5zb3VyY2UpIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuY3JlYXRlZEJ5ID0gZGF0YS5jcmVhdGVkQnkgJiYgbmV3IE9BdXRoQWNjZXNzVG9rZW4oZGF0YS5jcmVhdGVkQnkpO1xuICAgIHRoaXMucGF5bWVudHMgPSBkYXRhLnBheW1lbnRzICYmIGRhdGEucGF5bWVudHMubWFwKHBheW1lbnQgPT4gbmV3IFBheW1lbnQocGF5bWVudCkpO1xuICAgIHRoaXMuc3RhdGVzID0gZGF0YS5zdGF0ZXMgJiYgZGF0YS5zdGF0ZXMubWFwKHN0YXRlID0+IG5ldyBUcmFuc2FjdGlvblN0YXRlKHN0YXRlKSk7XG4gIH1cbn1cbiJdfQ==