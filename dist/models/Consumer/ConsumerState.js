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
const Consumer_1 = require("./Consumer");
const ConsumerStatus_1 = require("./ConsumerStatus");
const class_validator_1 = require("class-validator");
class ConsumerState extends base_1.BaseModel {
    constructor(data) {
        super(data);
        this.status = undefined;
        this.consumer = undefined;
        this.consumerId = undefined;
        Object.assign(this, data);
        this.consumer = data.consumer && new Consumer_1.Consumer(data.consumer);
    }
}
__decorate([
    class_validator_1.IsEnum(ConsumerStatus_1.ConsumerStatus),
    __metadata("design:type", String)
], ConsumerState.prototype, "status", void 0);
exports.ConsumerState = ConsumerState;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uc3VtZXJTdGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9tb2RlbHMvQ29uc3VtZXIvQ29uc3VtZXJTdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHFDQUF3RDtBQUN4RCx5Q0FBc0Q7QUFDdEQscURBQWtEO0FBQ2xELHFEQUF5QztBQU96QyxNQUFhLGFBQWMsU0FBUSxnQkFBUztJQU0xQyxZQUFZLElBQWtDO1FBQzVDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQU5VLFdBQU0sR0FBbUIsU0FBUyxDQUFDO1FBRTNELGFBQVEsR0FBYyxTQUFTLENBQUM7UUFDaEMsZUFBVSxHQUFZLFNBQVMsQ0FBQztRQUs5QixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUUxQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxtQkFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMvRCxDQUFDO0NBQ0Y7QUFaeUI7SUFBdkIsd0JBQU0sQ0FBQywrQkFBYyxDQUFDOzs2Q0FBb0M7QUFEN0Qsc0NBYUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlTW9kZWwsIEJhc2VNb2RlbFNjaGVtYSB9IGZyb20gXCIuLi8uLi9iYXNlXCI7XHJcbmltcG9ydCB7IENvbnN1bWVyLCBDb25zdW1lclNjaGVtYSB9IGZyb20gXCIuL0NvbnN1bWVyXCI7XHJcbmltcG9ydCB7IENvbnN1bWVyU3RhdHVzIH0gZnJvbSBcIi4vQ29uc3VtZXJTdGF0dXNcIjtcclxuaW1wb3J0IHsgSXNFbnVtIH0gZnJvbSBcImNsYXNzLXZhbGlkYXRvclwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb25zdW1lclN0YXRlU2NoZW1hIGV4dGVuZHMgQmFzZU1vZGVsU2NoZW1hIHtcclxuICBzdGF0dXM6IENvbnN1bWVyU3RhdHVzO1xyXG4gIGNvbnN1bWVyPzogQ29uc3VtZXJTY2hlbWE7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb25zdW1lclN0YXRlIGV4dGVuZHMgQmFzZU1vZGVsIGltcGxlbWVudHMgQ29uc3VtZXJTdGF0ZVNjaGVtYSB7XHJcbiAgQElzRW51bShDb25zdW1lclN0YXR1cykgc3RhdHVzOiBDb25zdW1lclN0YXR1cyA9IHVuZGVmaW5lZDtcclxuXHJcbiAgY29uc3VtZXI/OiBDb25zdW1lciA9IHVuZGVmaW5lZDtcclxuICBjb25zdW1lcklkPzogc3RyaW5nID0gdW5kZWZpbmVkO1xyXG5cclxuICBjb25zdHJ1Y3RvcihkYXRhOiBQYXJ0aWFsPENvbnN1bWVyU3RhdGVTY2hlbWE+KSB7XHJcbiAgICBzdXBlcihkYXRhKTtcclxuXHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xyXG5cclxuICAgIHRoaXMuY29uc3VtZXIgPSBkYXRhLmNvbnN1bWVyICYmIG5ldyBDb25zdW1lcihkYXRhLmNvbnN1bWVyKTtcclxuICB9XHJcbn1cclxuIl19