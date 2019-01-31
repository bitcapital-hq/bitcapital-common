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
        this.states = undefined;
        this.additionalData = undefined;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJhbnNhY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvbW9kZWxzL1RyYW5zYWN0aW9uL1RyYW5zYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscURBQXFEO0FBQ3JELHFDQUF3RDtBQUN4RCx3Q0FBb0Q7QUFDcEQsa0NBQTJDO0FBQzNDLHNDQUFpRDtBQUNqRCx5REFBOEU7QUFDOUUsdURBQW9EO0FBRTNDLDBCQUZBLGlDQUFlLENBRUE7QUFxQnhCLE1BQWEsV0FBWSxTQUFRLGdCQUFTO0lBWXhDLFlBQVksSUFBZ0M7UUFDMUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBVmQsU0FBSSxHQUFvQixTQUFTLENBQUM7UUFFcEIsV0FBTSxHQUFXLFNBQVMsQ0FBQztRQUV6QyxjQUFTLEdBQVUsU0FBUyxDQUFDO1FBQzdCLGFBQVEsR0FBZSxTQUFTLENBQUM7UUFDakMsV0FBTSxHQUF3QixTQUFTLENBQUM7UUFDeEMsbUJBQWMsR0FBK0IsU0FBUyxDQUFDO1FBSXJELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLGVBQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksV0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLGlCQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLG1DQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDckYsQ0FBQztDQUNGO0FBaEJDO0lBRkMsNEJBQVUsRUFBRTtJQUNaLHdCQUFNLENBQUMsaUNBQWUsQ0FBQzs7eUNBQ1U7QUFFcEI7SUFBYiw0QkFBVSxFQUFFOzhCQUFTLGVBQU07MkNBQWE7QUFMM0Msa0NBbUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSXNFbnVtLCBJc05vdEVtcHR5IH0gZnJvbSBcImNsYXNzLXZhbGlkYXRvclwiO1xyXG5pbXBvcnQgeyBCYXNlTW9kZWwsIEJhc2VNb2RlbFNjaGVtYSB9IGZyb20gXCIuLi8uLi9iYXNlXCI7XHJcbmltcG9ydCB7IFBheW1lbnQsIFBheW1lbnRTY2hlbWEgfSBmcm9tIFwiLi4vUGF5bWVudFwiO1xyXG5pbXBvcnQgeyBVc2VyLCBVc2VyU2NoZW1hIH0gZnJvbSBcIi4uL1VzZXJcIjtcclxuaW1wb3J0IHsgV2FsbGV0LCBXYWxsZXRTY2hlbWEgfSBmcm9tIFwiLi4vV2FsbGV0XCI7XHJcbmltcG9ydCB7IFRyYW5zYWN0aW9uU3RhdGUsIFRyYW5zYWN0aW9uU3RhdGVTY2hlbWEgfSBmcm9tIFwiLi9UcmFuc2FjdGlvblN0YXRlXCI7XHJcbmltcG9ydCB7IFRyYW5zYWN0aW9uVHlwZSB9IGZyb20gXCIuL1RyYW5zYWN0aW9uVHlwZVwiO1xyXG5cclxuZXhwb3J0IHsgVHJhbnNhY3Rpb25UeXBlIH07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRyYW5zYWN0aW9uQWRkaXRpb25hbERhdGEge1xyXG4gIGhhc2g/OiBzdHJpbmc7XHJcbiAgYXNzZXRJZD86IHN0cmluZztcclxuICBhc3NldENvZGU/OiBzdHJpbmc7XHJcbiAgYXNzZXRfaWQ/OiBzdHJpbmc7XHJcbiAgd2FsbGV0X2lkPzogc3RyaW5nO1xyXG4gIGFzc2V0X2NvZGU/OiBzdHJpbmc7XHJcbiAgY29uZHVjdG9yVHlwZT86IFwiYm9sZXRvXCIgfCBcInRlZGRvY1wiO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRyYW5zYWN0aW9uU2NoZW1hIGV4dGVuZHMgQmFzZU1vZGVsU2NoZW1hIHtcclxuICB0eXBlOiBUcmFuc2FjdGlvblR5cGU7XHJcbiAgc291cmNlOiBXYWxsZXRTY2hlbWE7XHJcbiAgcGF5bWVudHM/OiBQYXltZW50U2NoZW1hW107XHJcbiAgc3RhdGVzPzogVHJhbnNhY3Rpb25TdGF0ZVNjaGVtYVtdO1xyXG4gIGNyZWF0ZWRCeT86IFVzZXJTY2hlbWE7XHJcbiAgYWRkaXRpb25hbERhdGE/OiBUcmFuc2FjdGlvbkFkZGl0aW9uYWxEYXRhO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVHJhbnNhY3Rpb24gZXh0ZW5kcyBCYXNlTW9kZWwgaW1wbGVtZW50cyBUcmFuc2FjdGlvblNjaGVtYSB7XHJcbiAgQElzTm90RW1wdHkoKVxyXG4gIEBJc0VudW0oVHJhbnNhY3Rpb25UeXBlKVxyXG4gIHR5cGU6IFRyYW5zYWN0aW9uVHlwZSA9IHVuZGVmaW5lZDtcclxuXHJcbiAgQElzTm90RW1wdHkoKSBzb3VyY2U6IFdhbGxldCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgY3JlYXRlZEJ5PzogVXNlciA9IHVuZGVmaW5lZDtcclxuICBwYXltZW50cz86IFBheW1lbnRbXSA9IHVuZGVmaW5lZDtcclxuICBzdGF0ZXM/OiBUcmFuc2FjdGlvblN0YXRlW10gPSB1bmRlZmluZWQ7XHJcbiAgYWRkaXRpb25hbERhdGE/OiBUcmFuc2FjdGlvbkFkZGl0aW9uYWxEYXRhID0gdW5kZWZpbmVkO1xyXG5cclxuICBjb25zdHJ1Y3RvcihkYXRhOiBQYXJ0aWFsPFRyYW5zYWN0aW9uU2NoZW1hPikge1xyXG4gICAgc3VwZXIoZGF0YSk7XHJcbiAgICB0aGlzLnNvdXJjZSA9IGRhdGEuc291cmNlICYmIG5ldyBXYWxsZXQoZGF0YS5zb3VyY2UpO1xyXG4gICAgdGhpcy5jcmVhdGVkQnkgPSBkYXRhLmNyZWF0ZWRCeSAmJiBuZXcgVXNlcihkYXRhLmNyZWF0ZWRCeSk7XHJcbiAgICB0aGlzLnBheW1lbnRzID0gZGF0YS5wYXltZW50cyAmJiBkYXRhLnBheW1lbnRzLm1hcChwYXltZW50ID0+IG5ldyBQYXltZW50KHBheW1lbnQpKTtcclxuICAgIHRoaXMuc3RhdGVzID0gZGF0YS5zdGF0ZXMgJiYgZGF0YS5zdGF0ZXMubWFwKHN0YXRlID0+IG5ldyBUcmFuc2FjdGlvblN0YXRlKHN0YXRlKSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==