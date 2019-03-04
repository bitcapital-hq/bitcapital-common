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
const Payment_1 = require("../Payment");
const User_1 = require("../User");
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
        this.source = data.source && new Wallet_1.Wallet(data.source);
        this.createdBy = data.createdBy && new User_1.User(data.createdBy);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJhbnNhY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvbW9kZWxzL1RyYW5zYWN0aW9uL1RyYW5zYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscURBQXFEO0FBQ3JELHFDQUF3RDtBQUN4RCx3Q0FBb0Q7QUFDcEQsa0NBQTJDO0FBQzNDLHNDQUFpRDtBQUNqRCx5REFBOEU7QUFDOUUsdURBQW9EO0FBRzNDLDBCQUhBLGlDQUFlLENBR0E7QUF3QnhCLE1BQWEsV0FBWSxTQUFRLGdCQUFTO0lBYXhDLFlBQVksSUFBZ0M7UUFDMUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBWGQsU0FBSSxHQUFvQixTQUFTLENBQUM7UUFFcEIsV0FBTSxHQUFXLFNBQVMsQ0FBQztRQUV6QyxjQUFTLEdBQVUsU0FBUyxDQUFDO1FBQzdCLGFBQVEsR0FBZSxTQUFTLENBQUM7UUFDakMsV0FBTSxHQUF1QixTQUFTLENBQUM7UUFDdkMsV0FBTSxHQUF3QixTQUFTLENBQUM7UUFDeEMsbUJBQWMsR0FBK0IsU0FBUyxDQUFDO1FBS3JELE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRTFCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLGVBQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksV0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLGlCQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLG1DQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDckYsQ0FBQztDQUNGO0FBcEJDO0lBRkMsNEJBQVUsRUFBRTtJQUNaLHdCQUFNLENBQUMsaUNBQWUsQ0FBQzs7eUNBQ1U7QUFFcEI7SUFBYiw0QkFBVSxFQUFFOzhCQUFTLGVBQU07MkNBQWE7QUFMM0Msa0NBdUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSXNFbnVtLCBJc05vdEVtcHR5IH0gZnJvbSBcImNsYXNzLXZhbGlkYXRvclwiO1xuaW1wb3J0IHsgQmFzZU1vZGVsLCBCYXNlTW9kZWxTY2hlbWEgfSBmcm9tIFwiLi4vLi4vYmFzZVwiO1xuaW1wb3J0IHsgUGF5bWVudCwgUGF5bWVudFNjaGVtYSB9IGZyb20gXCIuLi9QYXltZW50XCI7XG5pbXBvcnQgeyBVc2VyLCBVc2VyU2NoZW1hIH0gZnJvbSBcIi4uL1VzZXJcIjtcbmltcG9ydCB7IFdhbGxldCwgV2FsbGV0U2NoZW1hIH0gZnJvbSBcIi4uL1dhbGxldFwiO1xuaW1wb3J0IHsgVHJhbnNhY3Rpb25TdGF0ZSwgVHJhbnNhY3Rpb25TdGF0ZVNjaGVtYSB9IGZyb20gXCIuL1RyYW5zYWN0aW9uU3RhdGVcIjtcbmltcG9ydCB7IFRyYW5zYWN0aW9uVHlwZSB9IGZyb20gXCIuL1RyYW5zYWN0aW9uVHlwZVwiO1xuaW1wb3J0IHsgVHJhbnNhY3Rpb25TdGF0dXMgfSBmcm9tIFwiLi9UcmFuc2FjdGlvblN0YXR1c1wiO1xuXG5leHBvcnQgeyBUcmFuc2FjdGlvblR5cGUgfTtcblxuZXhwb3J0IGludGVyZmFjZSBUcmFuc2FjdGlvbkFkZGl0aW9uYWxEYXRhIHtcbiAgaGFzaD86IHN0cmluZztcbiAgYXNzZXRJZD86IHN0cmluZztcbiAgYXNzZXRDb2RlPzogc3RyaW5nO1xuICBhc3NldF9pZD86IHN0cmluZztcbiAgYXNzZXRfY29kZT86IHN0cmluZztcbiAgd2FsbGV0X2lkPzogc3RyaW5nO1xuICBjYXJkX2lkPzogc3RyaW5nO1xuICBleHRlcm5hbFRyYW5zYWN0aW9uQ3JlYXRlZEF0PzogRGF0ZTtcbiAgY29uZHVjdG9yVHlwZT86IFwiYm9sZXRvXCIgfCBcInRlZGRvY1wiIHwgXCJjYXJkXCIgfCBcInRyYW5zYWN0aW9uX3JldmVyc2FsXCI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhbnNhY3Rpb25TY2hlbWEgZXh0ZW5kcyBCYXNlTW9kZWxTY2hlbWEge1xuICB0eXBlOiBUcmFuc2FjdGlvblR5cGU7XG4gIHNvdXJjZTogV2FsbGV0U2NoZW1hO1xuICBwYXltZW50cz86IFBheW1lbnRTY2hlbWFbXTtcbiAgc3RhdHVzPzogVHJhbnNhY3Rpb25TdGF0dXM7XG4gIHN0YXRlcz86IFRyYW5zYWN0aW9uU3RhdGVTY2hlbWFbXTtcbiAgY3JlYXRlZEJ5PzogVXNlclNjaGVtYTtcbiAgYWRkaXRpb25hbERhdGE/OiBUcmFuc2FjdGlvbkFkZGl0aW9uYWxEYXRhO1xufVxuXG5leHBvcnQgY2xhc3MgVHJhbnNhY3Rpb24gZXh0ZW5kcyBCYXNlTW9kZWwgaW1wbGVtZW50cyBUcmFuc2FjdGlvblNjaGVtYSB7XG4gIEBJc05vdEVtcHR5KClcbiAgQElzRW51bShUcmFuc2FjdGlvblR5cGUpXG4gIHR5cGU6IFRyYW5zYWN0aW9uVHlwZSA9IHVuZGVmaW5lZDtcblxuICBASXNOb3RFbXB0eSgpIHNvdXJjZTogV2FsbGV0ID0gdW5kZWZpbmVkO1xuXG4gIGNyZWF0ZWRCeT86IFVzZXIgPSB1bmRlZmluZWQ7XG4gIHBheW1lbnRzPzogUGF5bWVudFtdID0gdW5kZWZpbmVkO1xuICBzdGF0dXM/OiBUcmFuc2FjdGlvblN0YXR1cyA9IHVuZGVmaW5lZDtcbiAgc3RhdGVzPzogVHJhbnNhY3Rpb25TdGF0ZVtdID0gdW5kZWZpbmVkO1xuICBhZGRpdGlvbmFsRGF0YT86IFRyYW5zYWN0aW9uQWRkaXRpb25hbERhdGEgPSB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IoZGF0YTogUGFydGlhbDxUcmFuc2FjdGlvblNjaGVtYT4pIHtcbiAgICBzdXBlcihkYXRhKTtcblxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XG5cbiAgICB0aGlzLnNvdXJjZSA9IGRhdGEuc291cmNlICYmIG5ldyBXYWxsZXQoZGF0YS5zb3VyY2UpO1xuICAgIHRoaXMuY3JlYXRlZEJ5ID0gZGF0YS5jcmVhdGVkQnkgJiYgbmV3IFVzZXIoZGF0YS5jcmVhdGVkQnkpO1xuICAgIHRoaXMucGF5bWVudHMgPSBkYXRhLnBheW1lbnRzICYmIGRhdGEucGF5bWVudHMubWFwKHBheW1lbnQgPT4gbmV3IFBheW1lbnQocGF5bWVudCkpO1xuICAgIHRoaXMuc3RhdGVzID0gZGF0YS5zdGF0ZXMgJiYgZGF0YS5zdGF0ZXMubWFwKHN0YXRlID0+IG5ldyBUcmFuc2FjdGlvblN0YXRlKHN0YXRlKSk7XG4gIH1cbn1cbiJdfQ==