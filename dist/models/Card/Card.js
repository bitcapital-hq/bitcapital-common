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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9tb2RlbHMvQ2FyZC9DYXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscUNBQXdEO0FBRXhELHFEQUE2QztBQVM3QyxNQUFhLElBQUssU0FBUSxnQkFBUztJQU1qQyxZQUFZLElBQXlCO1FBQ25DLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQU5BLFdBQU0sR0FBWSxTQUFTLENBQUM7UUFDNUIsYUFBUSxHQUFZLFNBQVMsQ0FBQztRQUM1QyxZQUFPLEdBQVksU0FBUyxDQUFDO1FBQzdCLFdBQU0sR0FBZSxTQUFTLENBQUM7UUFJN0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztDQUNGO0FBVGU7SUFBYiw0QkFBVSxFQUFFOztvQ0FBNkI7QUFDNUI7SUFBYiw0QkFBVSxFQUFFOztzQ0FBK0I7QUFGOUMsb0JBVUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlTW9kZWwsIEJhc2VNb2RlbFNjaGVtYSB9IGZyb20gXCIuLi8uLi9iYXNlXCI7XHJcbmltcG9ydCB7IENhcmRTdGF0dXMgfSBmcm9tIFwiLi9DYXJkU3RhdHVzXCI7XHJcbmltcG9ydCB7IElzT3B0aW9uYWwgfSBmcm9tIFwiY2xhc3MtdmFsaWRhdG9yXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENhcmRTY2hlbWEgZXh0ZW5kcyBCYXNlTW9kZWxTY2hlbWEge1xyXG4gIHVzZXJJZD86IHN0cmluZztcclxuICB3YWxsZXRJZD86IHN0cmluZztcclxuICB2aXJ0dWFsOiBib29sZWFuO1xyXG4gIHN0YXR1czogQ2FyZFN0YXR1cztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENhcmQgZXh0ZW5kcyBCYXNlTW9kZWwgaW1wbGVtZW50cyBDYXJkU2NoZW1hIHtcclxuICBASXNPcHRpb25hbCgpIHVzZXJJZD86IHN0cmluZyA9IHVuZGVmaW5lZDtcclxuICBASXNPcHRpb25hbCgpIHdhbGxldElkPzogc3RyaW5nID0gdW5kZWZpbmVkO1xyXG4gIHZpcnR1YWw6IGJvb2xlYW4gPSB1bmRlZmluZWQ7XHJcbiAgc3RhdHVzOiBDYXJkU3RhdHVzID0gdW5kZWZpbmVkO1xyXG5cclxuICBjb25zdHJ1Y3RvcihkYXRhOiBQYXJ0aWFsPENhcmRTY2hlbWE+KSB7XHJcbiAgICBzdXBlcihkYXRhKTtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==