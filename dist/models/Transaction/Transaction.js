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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJhbnNhY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvbW9kZWxzL1RyYW5zYWN0aW9uL1RyYW5zYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscURBQXFEO0FBQ3JELHFDQUF3RDtBQUN4RCx3Q0FBb0Q7QUFDcEQsa0NBQTJDO0FBQzNDLHNDQUFpRDtBQUNqRCx5REFBOEU7QUFDOUUsdURBQW9EO0FBRTNDLDBCQUZBLGlDQUFlLENBRUE7QUF1QnhCLE1BQWEsV0FBWSxTQUFRLGdCQUFTO0lBWXhDLFlBQVksSUFBZ0M7UUFDMUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBVmQsU0FBSSxHQUFvQixTQUFTLENBQUM7UUFFcEIsV0FBTSxHQUFXLFNBQVMsQ0FBQztRQUV6QyxjQUFTLEdBQVUsU0FBUyxDQUFDO1FBQzdCLGFBQVEsR0FBZSxTQUFTLENBQUM7UUFDakMsV0FBTSxHQUF3QixTQUFTLENBQUM7UUFDeEMsbUJBQWMsR0FBK0IsU0FBUyxDQUFDO1FBS3JELE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRTFCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLGVBQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksV0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLGlCQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLG1DQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDckYsQ0FBQztDQUNGO0FBbkJDO0lBRkMsNEJBQVUsRUFBRTtJQUNaLHdCQUFNLENBQUMsaUNBQWUsQ0FBQzs7eUNBQ1U7QUFFcEI7SUFBYiw0QkFBVSxFQUFFOzhCQUFTLGVBQU07MkNBQWE7QUFMM0Msa0NBc0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSXNFbnVtLCBJc05vdEVtcHR5IH0gZnJvbSBcImNsYXNzLXZhbGlkYXRvclwiO1xuaW1wb3J0IHsgQmFzZU1vZGVsLCBCYXNlTW9kZWxTY2hlbWEgfSBmcm9tIFwiLi4vLi4vYmFzZVwiO1xuaW1wb3J0IHsgUGF5bWVudCwgUGF5bWVudFNjaGVtYSB9IGZyb20gXCIuLi9QYXltZW50XCI7XG5pbXBvcnQgeyBVc2VyLCBVc2VyU2NoZW1hIH0gZnJvbSBcIi4uL1VzZXJcIjtcbmltcG9ydCB7IFdhbGxldCwgV2FsbGV0U2NoZW1hIH0gZnJvbSBcIi4uL1dhbGxldFwiO1xuaW1wb3J0IHsgVHJhbnNhY3Rpb25TdGF0ZSwgVHJhbnNhY3Rpb25TdGF0ZVNjaGVtYSB9IGZyb20gXCIuL1RyYW5zYWN0aW9uU3RhdGVcIjtcbmltcG9ydCB7IFRyYW5zYWN0aW9uVHlwZSB9IGZyb20gXCIuL1RyYW5zYWN0aW9uVHlwZVwiO1xuXG5leHBvcnQgeyBUcmFuc2FjdGlvblR5cGUgfTtcblxuZXhwb3J0IGludGVyZmFjZSBUcmFuc2FjdGlvbkFkZGl0aW9uYWxEYXRhIHtcbiAgaGFzaD86IHN0cmluZztcbiAgYXNzZXRJZD86IHN0cmluZztcbiAgYXNzZXRDb2RlPzogc3RyaW5nO1xuICBhc3NldF9pZD86IHN0cmluZztcbiAgYXNzZXRfY29kZT86IHN0cmluZztcbiAgd2FsbGV0X2lkPzogc3RyaW5nO1xuICBjYXJkX2lkPzogc3RyaW5nO1xuICBleHRlcm5hbFRyYW5zYWN0aW9uQ3JlYXRlZEF0PzogRGF0ZTtcbiAgY29uZHVjdG9yVHlwZT86IFwiYm9sZXRvXCIgfCBcInRlZGRvY1wiIHwgXCJjYXJkXCIgfCBcInRyYW5zYWN0aW9uX3JldmVyc2FsXCI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhbnNhY3Rpb25TY2hlbWEgZXh0ZW5kcyBCYXNlTW9kZWxTY2hlbWEge1xuICB0eXBlOiBUcmFuc2FjdGlvblR5cGU7XG4gIHNvdXJjZTogV2FsbGV0U2NoZW1hO1xuICBwYXltZW50cz86IFBheW1lbnRTY2hlbWFbXTtcbiAgc3RhdGVzPzogVHJhbnNhY3Rpb25TdGF0ZVNjaGVtYVtdO1xuICBjcmVhdGVkQnk/OiBVc2VyU2NoZW1hO1xuICBhZGRpdGlvbmFsRGF0YT86IFRyYW5zYWN0aW9uQWRkaXRpb25hbERhdGE7XG59XG5cbmV4cG9ydCBjbGFzcyBUcmFuc2FjdGlvbiBleHRlbmRzIEJhc2VNb2RlbCBpbXBsZW1lbnRzIFRyYW5zYWN0aW9uU2NoZW1hIHtcbiAgQElzTm90RW1wdHkoKVxuICBASXNFbnVtKFRyYW5zYWN0aW9uVHlwZSlcbiAgdHlwZTogVHJhbnNhY3Rpb25UeXBlID0gdW5kZWZpbmVkO1xuXG4gIEBJc05vdEVtcHR5KCkgc291cmNlOiBXYWxsZXQgPSB1bmRlZmluZWQ7XG5cbiAgY3JlYXRlZEJ5PzogVXNlciA9IHVuZGVmaW5lZDtcbiAgcGF5bWVudHM/OiBQYXltZW50W10gPSB1bmRlZmluZWQ7XG4gIHN0YXRlcz86IFRyYW5zYWN0aW9uU3RhdGVbXSA9IHVuZGVmaW5lZDtcbiAgYWRkaXRpb25hbERhdGE/OiBUcmFuc2FjdGlvbkFkZGl0aW9uYWxEYXRhID0gdW5kZWZpbmVkO1xuXG4gIGNvbnN0cnVjdG9yKGRhdGE6IFBhcnRpYWw8VHJhbnNhY3Rpb25TY2hlbWE+KSB7XG4gICAgc3VwZXIoZGF0YSk7XG5cbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xuXG4gICAgdGhpcy5zb3VyY2UgPSBkYXRhLnNvdXJjZSAmJiBuZXcgV2FsbGV0KGRhdGEuc291cmNlKTtcbiAgICB0aGlzLmNyZWF0ZWRCeSA9IGRhdGEuY3JlYXRlZEJ5ICYmIG5ldyBVc2VyKGRhdGEuY3JlYXRlZEJ5KTtcbiAgICB0aGlzLnBheW1lbnRzID0gZGF0YS5wYXltZW50cyAmJiBkYXRhLnBheW1lbnRzLm1hcChwYXltZW50ID0+IG5ldyBQYXltZW50KHBheW1lbnQpKTtcbiAgICB0aGlzLnN0YXRlcyA9IGRhdGEuc3RhdGVzICYmIGRhdGEuc3RhdGVzLm1hcChzdGF0ZSA9PiBuZXcgVHJhbnNhY3Rpb25TdGF0ZShzdGF0ZSkpO1xuICB9XG59XG4iXX0=