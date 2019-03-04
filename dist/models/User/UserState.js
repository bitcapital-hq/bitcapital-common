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
const UserStatus_1 = require("./UserStatus");
const User_1 = require("./User");
class UserState extends base_1.BaseModel {
    constructor(data) {
        super(data);
        this.status = undefined;
        this.user = undefined;
        this.consumerId = undefined;
        Object.assign(this, data);
        this.user = data.user && new User_1.User(data.user);
    }
}
__decorate([
    class_validator_1.IsEnum(UserStatus_1.UserStatus),
    __metadata("design:type", String)
], UserState.prototype, "status", void 0);
exports.UserState = UserState;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlclN0YXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL21vZGVscy9Vc2VyL1VzZXJTdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHFDQUF3RDtBQUN4RCxxREFBeUM7QUFDekMsNkNBQTBDO0FBQzFDLGlDQUEwQztBQU8xQyxNQUFhLFNBQVUsU0FBUSxnQkFBUztJQU10QyxZQUFZLElBQThCO1FBQ3hDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQU5NLFdBQU0sR0FBZSxTQUFTLENBQUM7UUFFbkQsU0FBSSxHQUFVLFNBQVMsQ0FBQztRQUN4QixlQUFVLEdBQVksU0FBUyxDQUFDO1FBSTlCLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLFdBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0MsQ0FBQztDQUNGO0FBVnFCO0lBQW5CLHdCQUFNLENBQUMsdUJBQVUsQ0FBQzs7eUNBQWdDO0FBRHJELDhCQVdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZU1vZGVsLCBCYXNlTW9kZWxTY2hlbWEgfSBmcm9tIFwiLi4vLi4vYmFzZVwiO1xyXG5pbXBvcnQgeyBJc0VudW0gfSBmcm9tIFwiY2xhc3MtdmFsaWRhdG9yXCI7XHJcbmltcG9ydCB7IFVzZXJTdGF0dXMgfSBmcm9tIFwiLi9Vc2VyU3RhdHVzXCI7XHJcbmltcG9ydCB7IFVzZXIsIFVzZXJTY2hlbWEgfSBmcm9tIFwiLi9Vc2VyXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJTdGF0ZVNjaGVtYSBleHRlbmRzIEJhc2VNb2RlbFNjaGVtYSB7XHJcbiAgc3RhdHVzOiBVc2VyU3RhdHVzO1xyXG4gIHVzZXI/OiBVc2VyU2NoZW1hO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVXNlclN0YXRlIGV4dGVuZHMgQmFzZU1vZGVsIGltcGxlbWVudHMgVXNlclN0YXRlU2NoZW1hIHtcclxuICBASXNFbnVtKFVzZXJTdGF0dXMpIHN0YXR1czogVXNlclN0YXR1cyA9IHVuZGVmaW5lZDtcclxuXHJcbiAgdXNlcj86IFVzZXIgPSB1bmRlZmluZWQ7XHJcbiAgY29uc3VtZXJJZD86IHN0cmluZyA9IHVuZGVmaW5lZDtcclxuXHJcbiAgY29uc3RydWN0b3IoZGF0YTogUGFydGlhbDxVc2VyU3RhdGVTY2hlbWE+KSB7XHJcbiAgICBzdXBlcihkYXRhKTtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XHJcbiAgICB0aGlzLnVzZXIgPSBkYXRhLnVzZXIgJiYgbmV3IFVzZXIoZGF0YS51c2VyKTtcclxuICB9XHJcbn1cclxuIl19