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
        this.source = data.source ? new Wallet_1.Wallet(data.source) : undefined;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJhbnNhY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvbW9kZWxzL1RyYW5zYWN0aW9uL1RyYW5zYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscURBQXFEO0FBQ3JELHFDQUF3RDtBQUN4RCx3Q0FBb0Q7QUFDcEQsa0NBQTJDO0FBQzNDLHNDQUFpRDtBQUNqRCx5REFBOEU7QUFDOUUsdURBQW9EO0FBRzNDLDBCQUhBLGlDQUFlLENBR0E7QUF3QnhCLE1BQWEsV0FBWSxTQUFRLGdCQUFTO0lBYXhDLFlBQVksSUFBZ0M7UUFDMUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBWGQsU0FBSSxHQUFvQixTQUFTLENBQUM7UUFFcEIsV0FBTSxHQUFXLFNBQVMsQ0FBQztRQUV6QyxjQUFTLEdBQVUsU0FBUyxDQUFDO1FBQzdCLGFBQVEsR0FBZSxTQUFTLENBQUM7UUFDakMsV0FBTSxHQUF1QixTQUFTLENBQUM7UUFDdkMsV0FBTSxHQUF3QixTQUFTLENBQUM7UUFDeEMsbUJBQWMsR0FBK0IsU0FBUyxDQUFDO1FBS3JELE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRTFCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxlQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDaEUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksV0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLGlCQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLG1DQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDckYsQ0FBQztDQUNGO0FBcEJDO0lBRkMsNEJBQVUsRUFBRTtJQUNaLHdCQUFNLENBQUMsaUNBQWUsQ0FBQzs7eUNBQ1U7QUFFcEI7SUFBYiw0QkFBVSxFQUFFOzhCQUFTLGVBQU07MkNBQWE7QUFMM0Msa0NBdUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSXNFbnVtLCBJc05vdEVtcHR5IH0gZnJvbSBcImNsYXNzLXZhbGlkYXRvclwiO1xyXG5pbXBvcnQgeyBCYXNlTW9kZWwsIEJhc2VNb2RlbFNjaGVtYSB9IGZyb20gXCIuLi8uLi9iYXNlXCI7XHJcbmltcG9ydCB7IFBheW1lbnQsIFBheW1lbnRTY2hlbWEgfSBmcm9tIFwiLi4vUGF5bWVudFwiO1xyXG5pbXBvcnQgeyBVc2VyLCBVc2VyU2NoZW1hIH0gZnJvbSBcIi4uL1VzZXJcIjtcclxuaW1wb3J0IHsgV2FsbGV0LCBXYWxsZXRTY2hlbWEgfSBmcm9tIFwiLi4vV2FsbGV0XCI7XHJcbmltcG9ydCB7IFRyYW5zYWN0aW9uU3RhdGUsIFRyYW5zYWN0aW9uU3RhdGVTY2hlbWEgfSBmcm9tIFwiLi9UcmFuc2FjdGlvblN0YXRlXCI7XHJcbmltcG9ydCB7IFRyYW5zYWN0aW9uVHlwZSB9IGZyb20gXCIuL1RyYW5zYWN0aW9uVHlwZVwiO1xyXG5pbXBvcnQgeyBUcmFuc2FjdGlvblN0YXR1cyB9IGZyb20gXCIuL1RyYW5zYWN0aW9uU3RhdHVzXCI7XHJcblxyXG5leHBvcnQgeyBUcmFuc2FjdGlvblR5cGUgfTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVHJhbnNhY3Rpb25BZGRpdGlvbmFsRGF0YSB7XHJcbiAgaGFzaD86IHN0cmluZztcclxuICBhc3NldElkPzogc3RyaW5nO1xyXG4gIGFzc2V0Q29kZT86IHN0cmluZztcclxuICBhc3NldF9pZD86IHN0cmluZztcclxuICBhc3NldF9jb2RlPzogc3RyaW5nO1xyXG4gIHdhbGxldF9pZD86IHN0cmluZztcclxuICBjYXJkX2lkPzogc3RyaW5nO1xyXG4gIGV4dGVybmFsVHJhbnNhY3Rpb25DcmVhdGVkQXQ/OiBEYXRlO1xyXG4gIGNvbmR1Y3RvclR5cGU/OiBcImJvbGV0b1wiIHwgXCJ0ZWRkb2NcIiB8IFwiY2FyZFwiIHwgXCJ0cmFuc2FjdGlvbl9yZXZlcnNhbFwiO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRyYW5zYWN0aW9uU2NoZW1hIGV4dGVuZHMgQmFzZU1vZGVsU2NoZW1hIHtcclxuICB0eXBlOiBUcmFuc2FjdGlvblR5cGU7XHJcbiAgc291cmNlOiBXYWxsZXRTY2hlbWE7XHJcbiAgcGF5bWVudHM/OiBQYXltZW50U2NoZW1hW107XHJcbiAgc3RhdHVzPzogVHJhbnNhY3Rpb25TdGF0dXM7XHJcbiAgc3RhdGVzPzogVHJhbnNhY3Rpb25TdGF0ZVNjaGVtYVtdO1xyXG4gIGNyZWF0ZWRCeT86IFVzZXJTY2hlbWE7XHJcbiAgYWRkaXRpb25hbERhdGE/OiBUcmFuc2FjdGlvbkFkZGl0aW9uYWxEYXRhO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVHJhbnNhY3Rpb24gZXh0ZW5kcyBCYXNlTW9kZWwgaW1wbGVtZW50cyBUcmFuc2FjdGlvblNjaGVtYSB7XHJcbiAgQElzTm90RW1wdHkoKVxyXG4gIEBJc0VudW0oVHJhbnNhY3Rpb25UeXBlKVxyXG4gIHR5cGU6IFRyYW5zYWN0aW9uVHlwZSA9IHVuZGVmaW5lZDtcclxuXHJcbiAgQElzTm90RW1wdHkoKSBzb3VyY2U6IFdhbGxldCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgY3JlYXRlZEJ5PzogVXNlciA9IHVuZGVmaW5lZDtcclxuICBwYXltZW50cz86IFBheW1lbnRbXSA9IHVuZGVmaW5lZDtcclxuICBzdGF0dXM/OiBUcmFuc2FjdGlvblN0YXR1cyA9IHVuZGVmaW5lZDtcclxuICBzdGF0ZXM/OiBUcmFuc2FjdGlvblN0YXRlW10gPSB1bmRlZmluZWQ7XHJcbiAgYWRkaXRpb25hbERhdGE/OiBUcmFuc2FjdGlvbkFkZGl0aW9uYWxEYXRhID0gdW5kZWZpbmVkO1xyXG5cclxuICBjb25zdHJ1Y3RvcihkYXRhOiBQYXJ0aWFsPFRyYW5zYWN0aW9uU2NoZW1hPikge1xyXG4gICAgc3VwZXIoZGF0YSk7XHJcblxyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcclxuXHJcbiAgICB0aGlzLnNvdXJjZSA9IGRhdGEuc291cmNlID8gbmV3IFdhbGxldChkYXRhLnNvdXJjZSkgOiB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLmNyZWF0ZWRCeSA9IGRhdGEuY3JlYXRlZEJ5ICYmIG5ldyBVc2VyKGRhdGEuY3JlYXRlZEJ5KTtcclxuICAgIHRoaXMucGF5bWVudHMgPSBkYXRhLnBheW1lbnRzICYmIGRhdGEucGF5bWVudHMubWFwKHBheW1lbnQgPT4gbmV3IFBheW1lbnQocGF5bWVudCkpO1xyXG4gICAgdGhpcy5zdGF0ZXMgPSBkYXRhLnN0YXRlcyAmJiBkYXRhLnN0YXRlcy5tYXAoc3RhdGUgPT4gbmV3IFRyYW5zYWN0aW9uU3RhdGUoc3RhdGUpKTtcclxuICB9XHJcbn1cclxuIl19