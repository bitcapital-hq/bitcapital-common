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
const ConsumerStatus_1 = require("./ConsumerStatus");
const class_validator_1 = require("class-validator");
class ConsumerState extends base_1.BaseModel {
    constructor(data) {
        super(data);
        this.status = undefined;
        this.consumer = undefined;
        this.consumerId = undefined;
    }
}
__decorate([
    class_validator_1.IsEnum(ConsumerStatus_1.ConsumerStatus),
    __metadata("design:type", String)
], ConsumerState.prototype, "status", void 0);
exports.ConsumerState = ConsumerState;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uc3VtZXJTdGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9tb2RlbHMvQ29uc3VtZXIvQ29uc3VtZXJTdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHFDQUF3RDtBQUV4RCxxREFBa0Q7QUFDbEQscURBQXlDO0FBUXpDLE1BQWEsYUFBYyxTQUFRLGdCQUFTO0lBTzFDLFlBQVksSUFBa0M7UUFDNUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBTmQsV0FBTSxHQUFtQixTQUFTLENBQUM7UUFFbkMsYUFBUSxHQUFjLFNBQVMsQ0FBQztRQUNoQyxlQUFVLEdBQVksU0FBUyxDQUFDO0lBSWhDLENBQUM7Q0FDRjtBQVJDO0lBREMsd0JBQU0sQ0FBQywrQkFBYyxDQUFDOzs2Q0FDWTtBQUZyQyxzQ0FVQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VNb2RlbCwgQmFzZU1vZGVsU2NoZW1hIH0gZnJvbSBcIi4uLy4uL2Jhc2VcIjtcclxuaW1wb3J0IHsgQ29uc3VtZXIsIENvbnN1bWVyU2NoZW1hIH0gZnJvbSBcIi4vQ29uc3VtZXJcIjtcclxuaW1wb3J0IHsgQ29uc3VtZXJTdGF0dXMgfSBmcm9tIFwiLi9Db25zdW1lclN0YXR1c1wiO1xyXG5pbXBvcnQgeyBJc0VudW0gfSBmcm9tIFwiY2xhc3MtdmFsaWRhdG9yXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbnN1bWVyU3RhdGVTY2hlbWEgZXh0ZW5kcyBCYXNlTW9kZWxTY2hlbWEge1xyXG4gIHN0YXR1czogQ29uc3VtZXJTdGF0dXM7XHJcbiAgY29uc3VtZXI/OiBDb25zdW1lclNjaGVtYTtcclxuICBjb25zdW1lcklkPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29uc3VtZXJTdGF0ZSBleHRlbmRzIEJhc2VNb2RlbCBpbXBsZW1lbnRzIENvbnN1bWVyU3RhdGVTY2hlbWEge1xyXG4gIEBJc0VudW0oQ29uc3VtZXJTdGF0dXMpXHJcbiAgc3RhdHVzOiBDb25zdW1lclN0YXR1cyA9IHVuZGVmaW5lZDtcclxuICBcclxuICBjb25zdW1lcj86IENvbnN1bWVyID0gdW5kZWZpbmVkO1xyXG4gIGNvbnN1bWVySWQ/OiBzdHJpbmcgPSB1bmRlZmluZWQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRhdGE6IFBhcnRpYWw8Q29uc3VtZXJTdGF0ZVNjaGVtYT4pIHtcclxuICAgIHN1cGVyKGRhdGEpO1xyXG4gIH1cclxufVxyXG4iXX0=