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
exports.default = Transaction;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJhbnNhY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvbW9kZWxzL1RyYW5zYWN0aW9uL1RyYW5zYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscURBQXFEO0FBQ3JELHFDQUF3RDtBQUN4RCx3Q0FBb0Q7QUFDcEQsa0NBQTJDO0FBQzNDLHNDQUFpRDtBQUNqRCx5REFBOEU7QUFDOUUsdURBQW9EO0FBRTNDLDBCQUZBLGlDQUFlLENBRUE7QUFxQnhCLE1BQXFCLFdBQVksU0FBUSxnQkFBUztJQVloRCxZQUFZLElBQWdDO1FBQzFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQVZkLFNBQUksR0FBb0IsU0FBUyxDQUFDO1FBRXBCLFdBQU0sR0FBVyxTQUFTLENBQUM7UUFFekMsY0FBUyxHQUFVLFNBQVMsQ0FBQztRQUM3QixhQUFRLEdBQWUsU0FBUyxDQUFDO1FBQ2pDLFdBQU0sR0FBd0IsU0FBUyxDQUFDO1FBQ3hDLG1CQUFjLEdBQStCLFNBQVMsQ0FBQztRQUlyRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxlQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLFdBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxpQkFBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxtQ0FBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3JGLENBQUM7Q0FDRjtBQWhCQztJQUZDLDRCQUFVLEVBQUU7SUFDWix3QkFBTSxDQUFDLGlDQUFlLENBQUM7O3lDQUNVO0FBRXBCO0lBQWIsNEJBQVUsRUFBRTs4QkFBUyxlQUFNOzJDQUFhO0FBTDNDLDhCQW1CQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElzRW51bSwgSXNOb3RFbXB0eSB9IGZyb20gXCJjbGFzcy12YWxpZGF0b3JcIjtcbmltcG9ydCB7IEJhc2VNb2RlbCwgQmFzZU1vZGVsU2NoZW1hIH0gZnJvbSBcIi4uLy4uL2Jhc2VcIjtcbmltcG9ydCB7IFBheW1lbnQsIFBheW1lbnRTY2hlbWEgfSBmcm9tIFwiLi4vUGF5bWVudFwiO1xuaW1wb3J0IHsgVXNlciwgVXNlclNjaGVtYSB9IGZyb20gXCIuLi9Vc2VyXCI7XG5pbXBvcnQgeyBXYWxsZXQsIFdhbGxldFNjaGVtYSB9IGZyb20gXCIuLi9XYWxsZXRcIjtcbmltcG9ydCB7IFRyYW5zYWN0aW9uU3RhdGUsIFRyYW5zYWN0aW9uU3RhdGVTY2hlbWEgfSBmcm9tIFwiLi9UcmFuc2FjdGlvblN0YXRlXCI7XG5pbXBvcnQgeyBUcmFuc2FjdGlvblR5cGUgfSBmcm9tIFwiLi9UcmFuc2FjdGlvblR5cGVcIjtcblxuZXhwb3J0IHsgVHJhbnNhY3Rpb25UeXBlIH07XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhbnNhY3Rpb25BZGRpdGlvbmFsRGF0YSB7XG4gIGhhc2g/OiBzdHJpbmc7XG4gIGFzc2V0SWQ/OiBzdHJpbmc7XG4gIGFzc2V0Q29kZT86IHN0cmluZztcbiAgYXNzZXRfaWQ/OiBzdHJpbmc7XG4gIHdhbGxldF9pZD86IHN0cmluZztcbiAgYXNzZXRfY29kZT86IHN0cmluZztcbiAgY29uZHVjdG9yVHlwZT86IFwiYm9sZXRvXCIgfCBcInRlZGRvY1wiO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRyYW5zYWN0aW9uU2NoZW1hIGV4dGVuZHMgQmFzZU1vZGVsU2NoZW1hIHtcbiAgdHlwZTogVHJhbnNhY3Rpb25UeXBlO1xuICBzb3VyY2U6IFdhbGxldFNjaGVtYTtcbiAgcGF5bWVudHM/OiBQYXltZW50U2NoZW1hW107XG4gIHN0YXRlcz86IFRyYW5zYWN0aW9uU3RhdGVTY2hlbWFbXTtcbiAgY3JlYXRlZEJ5PzogVXNlclNjaGVtYTtcbiAgYWRkaXRpb25hbERhdGE/OiBUcmFuc2FjdGlvbkFkZGl0aW9uYWxEYXRhO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmFuc2FjdGlvbiBleHRlbmRzIEJhc2VNb2RlbCBpbXBsZW1lbnRzIFRyYW5zYWN0aW9uU2NoZW1hIHtcbiAgQElzTm90RW1wdHkoKVxuICBASXNFbnVtKFRyYW5zYWN0aW9uVHlwZSlcbiAgdHlwZTogVHJhbnNhY3Rpb25UeXBlID0gdW5kZWZpbmVkO1xuXG4gIEBJc05vdEVtcHR5KCkgc291cmNlOiBXYWxsZXQgPSB1bmRlZmluZWQ7XG5cbiAgY3JlYXRlZEJ5PzogVXNlciA9IHVuZGVmaW5lZDtcbiAgcGF5bWVudHM/OiBQYXltZW50W10gPSB1bmRlZmluZWQ7XG4gIHN0YXRlcz86IFRyYW5zYWN0aW9uU3RhdGVbXSA9IHVuZGVmaW5lZDtcbiAgYWRkaXRpb25hbERhdGE/OiBUcmFuc2FjdGlvbkFkZGl0aW9uYWxEYXRhID0gdW5kZWZpbmVkO1xuXG4gIGNvbnN0cnVjdG9yKGRhdGE6IFBhcnRpYWw8VHJhbnNhY3Rpb25TY2hlbWE+KSB7XG4gICAgc3VwZXIoZGF0YSk7XG4gICAgdGhpcy5zb3VyY2UgPSBkYXRhLnNvdXJjZSAmJiBuZXcgV2FsbGV0KGRhdGEuc291cmNlKTtcbiAgICB0aGlzLmNyZWF0ZWRCeSA9IGRhdGEuY3JlYXRlZEJ5ICYmIG5ldyBVc2VyKGRhdGEuY3JlYXRlZEJ5KTtcbiAgICB0aGlzLnBheW1lbnRzID0gZGF0YS5wYXltZW50cyAmJiBkYXRhLnBheW1lbnRzLm1hcChwYXltZW50ID0+IG5ldyBQYXltZW50KHBheW1lbnQpKTtcbiAgICB0aGlzLnN0YXRlcyA9IGRhdGEuc3RhdGVzICYmIGRhdGEuc3RhdGVzLm1hcChzdGF0ZSA9PiBuZXcgVHJhbnNhY3Rpb25TdGF0ZShzdGF0ZSkpO1xuICB9XG59XG4iXX0=