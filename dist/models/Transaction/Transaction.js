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
const TransactionType_1 = require("./TransactionType");
exports.TransactionType = TransactionType_1.TransactionType;
const Wallet_1 = require("../Wallet/Wallet");
const class_validator_1 = require("class-validator");
const base_1 = require("../../base");
class Transaction extends base_1.BaseModel {
    constructor(data) {
        super(data);
        this.data = undefined;
        this.type = undefined;
        this.source = undefined;
        this.payments = undefined;
    }
}
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Object)
], Transaction.prototype, "data", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsEnum(TransactionType_1.TransactionType),
    __metadata("design:type", String)
], Transaction.prototype, "type", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Wallet_1.default)
], Transaction.prototype, "source", void 0);
exports.default = Transaction;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJhbnNhY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvbW9kZWxzL1RyYW5zYWN0aW9uL1RyYW5zYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsdURBQW9EO0FBTTNDLDBCQU5BLGlDQUFlLENBTUE7QUFMeEIsNkNBQXNDO0FBRXRDLHFEQUFxRDtBQUNyRCxxQ0FBd0Q7QUFpQnhELGlCQUFpQyxTQUFRLGdCQUFTO0lBV2hELFlBQVksSUFBZ0M7UUFDMUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBWEEsU0FBSSxHQUE4QixTQUFTLENBQUM7UUFJMUQsU0FBSSxHQUFvQixTQUFTLENBQUM7UUFFcEIsV0FBTSxHQUFXLFNBQVMsQ0FBQztRQUV6QyxhQUFRLEdBQWUsU0FBUyxDQUFDO0lBSWpDLENBQUM7Q0FDRjtBQWJlO0lBQWIsNEJBQVUsRUFBRTs7eUNBQTZDO0FBSTFEO0lBRkMsNEJBQVUsRUFBRTtJQUNaLHdCQUFNLENBQUMsaUNBQWUsQ0FBQzs7eUNBQ1U7QUFFcEI7SUFBYiw0QkFBVSxFQUFFOzhCQUFTLGdCQUFNOzJDQUFhO0FBUDNDLDhCQWNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHJhbnNhY3Rpb25UeXBlIH0gZnJvbSBcIi4vVHJhbnNhY3Rpb25UeXBlXCI7XG5pbXBvcnQgV2FsbGV0IGZyb20gXCIuLi9XYWxsZXQvV2FsbGV0XCI7XG5pbXBvcnQgUGF5bWVudCBmcm9tIFwiLi4vUGF5bWVudC9QYXltZW50XCI7XG5pbXBvcnQgeyBJc05vdEVtcHR5LCBJc0VudW0gfSBmcm9tIFwiY2xhc3MtdmFsaWRhdG9yXCI7XG5pbXBvcnQgeyBCYXNlTW9kZWxTY2hlbWEsIEJhc2VNb2RlbCB9IGZyb20gXCIuLi8uLi9iYXNlXCI7XG5cbmV4cG9ydCB7IFRyYW5zYWN0aW9uVHlwZSB9O1xuXG5leHBvcnQgaW50ZXJmYWNlIFRyYW5zYWN0aW9uQWRkaXRpb25hbERhdGEge1xuICBoYXNoPzogc3RyaW5nO1xuICBhc3NldElkPzogc3RyaW5nO1xuICBhc3NldENvZGU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhbnNhY3Rpb25TY2hlbWEgZXh0ZW5kcyBCYXNlTW9kZWxTY2hlbWEge1xuICBkYXRhOiBUcmFuc2FjdGlvbkFkZGl0aW9uYWxEYXRhO1xuICB0eXBlOiBUcmFuc2FjdGlvblR5cGU7XG4gIHNvdXJjZTogV2FsbGV0O1xuICBwYXltZW50cz86IFBheW1lbnRbXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhbnNhY3Rpb24gZXh0ZW5kcyBCYXNlTW9kZWwgaW1wbGVtZW50cyBUcmFuc2FjdGlvblNjaGVtYSB7XG4gIEBJc05vdEVtcHR5KCkgZGF0YTogVHJhbnNhY3Rpb25BZGRpdGlvbmFsRGF0YSA9IHVuZGVmaW5lZDtcblxuICBASXNOb3RFbXB0eSgpXG4gIEBJc0VudW0oVHJhbnNhY3Rpb25UeXBlKVxuICB0eXBlOiBUcmFuc2FjdGlvblR5cGUgPSB1bmRlZmluZWQ7XG5cbiAgQElzTm90RW1wdHkoKSBzb3VyY2U6IFdhbGxldCA9IHVuZGVmaW5lZDtcblxuICBwYXltZW50cz86IFBheW1lbnRbXSA9IHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3RvcihkYXRhOiBQYXJ0aWFsPFRyYW5zYWN0aW9uU2NoZW1hPikge1xuICAgIHN1cGVyKGRhdGEpO1xuICB9XG59XG4iXX0=