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
const base_1 = require("../../base");
const class_validator_1 = require("class-validator");
class Card extends base_1.BaseModel {
    constructor(data) {
        super(data);
        this.userId = undefined;
        this.walletId = undefined;
        this.virtual = undefined;
        this.status = undefined;
        Object.assign(this, data);
    }
}
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], Card.prototype, "userId", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], Card.prototype, "walletId", void 0);
exports.Card = Card;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9tb2RlbHMvQ2FyZC9DYXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscUNBQXdEO0FBRXhELHFEQUE2QztBQVM3QyxNQUFhLElBQUssU0FBUSxnQkFBUztJQU1qQyxZQUFZLElBQXlCO1FBQ25DLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQU5BLFdBQU0sR0FBWSxTQUFTLENBQUM7UUFDNUIsYUFBUSxHQUFZLFNBQVMsQ0FBQztRQUM1QyxZQUFPLEdBQVksU0FBUyxDQUFDO1FBQzdCLFdBQU0sR0FBZSxTQUFTLENBQUM7UUFLN0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztDQUNGO0FBVmU7SUFBYiw0QkFBVSxFQUFFOztvQ0FBNkI7QUFDNUI7SUFBYiw0QkFBVSxFQUFFOztzQ0FBK0I7QUFGOUMsb0JBV0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlTW9kZWwsIEJhc2VNb2RlbFNjaGVtYSB9IGZyb20gXCIuLi8uLi9iYXNlXCI7XG5pbXBvcnQgeyBDYXJkU3RhdHVzIH0gZnJvbSBcIi4vQ2FyZFN0YXR1c1wiO1xuaW1wb3J0IHsgSXNPcHRpb25hbCB9IGZyb20gXCJjbGFzcy12YWxpZGF0b3JcIjtcblxuZXhwb3J0IGludGVyZmFjZSBDYXJkU2NoZW1hIGV4dGVuZHMgQmFzZU1vZGVsU2NoZW1hIHtcbiAgdXNlcklkPzogc3RyaW5nO1xuICB3YWxsZXRJZD86IHN0cmluZztcbiAgdmlydHVhbDogYm9vbGVhbjtcbiAgc3RhdHVzOiBDYXJkU3RhdHVzO1xufVxuXG5leHBvcnQgY2xhc3MgQ2FyZCBleHRlbmRzIEJhc2VNb2RlbCBpbXBsZW1lbnRzIENhcmRTY2hlbWEge1xuICBASXNPcHRpb25hbCgpIHVzZXJJZD86IHN0cmluZyA9IHVuZGVmaW5lZDtcbiAgQElzT3B0aW9uYWwoKSB3YWxsZXRJZD86IHN0cmluZyA9IHVuZGVmaW5lZDtcbiAgdmlydHVhbDogYm9vbGVhbiA9IHVuZGVmaW5lZDtcbiAgc3RhdHVzOiBDYXJkU3RhdHVzID0gdW5kZWZpbmVkO1xuXG4gIGNvbnN0cnVjdG9yKGRhdGE6IFBhcnRpYWw8Q2FyZFNjaGVtYT4pIHtcbiAgICBzdXBlcihkYXRhKTtcblxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XG4gIH1cbn1cbiJdfQ==