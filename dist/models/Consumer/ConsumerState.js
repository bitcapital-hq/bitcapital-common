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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uc3VtZXJTdGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9tb2RlbHMvQ29uc3VtZXIvQ29uc3VtZXJTdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHFDQUF3RDtBQUN4RCx5Q0FBc0Q7QUFDdEQscURBQWtEO0FBQ2xELHFEQUF5QztBQU96QyxNQUFhLGFBQWMsU0FBUSxnQkFBUztJQU0xQyxZQUFZLElBQWtDO1FBQzVDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQU5VLFdBQU0sR0FBbUIsU0FBUyxDQUFDO1FBRTNELGFBQVEsR0FBYyxTQUFTLENBQUM7UUFDaEMsZUFBVSxHQUFZLFNBQVMsQ0FBQztRQUs5QixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUUxQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxtQkFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMvRCxDQUFDO0NBQ0Y7QUFaeUI7SUFBdkIsd0JBQU0sQ0FBQywrQkFBYyxDQUFDOzs2Q0FBb0M7QUFEN0Qsc0NBYUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlTW9kZWwsIEJhc2VNb2RlbFNjaGVtYSB9IGZyb20gXCIuLi8uLi9iYXNlXCI7XG5pbXBvcnQgeyBDb25zdW1lciwgQ29uc3VtZXJTY2hlbWEgfSBmcm9tIFwiLi9Db25zdW1lclwiO1xuaW1wb3J0IHsgQ29uc3VtZXJTdGF0dXMgfSBmcm9tIFwiLi9Db25zdW1lclN0YXR1c1wiO1xuaW1wb3J0IHsgSXNFbnVtIH0gZnJvbSBcImNsYXNzLXZhbGlkYXRvclwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbnN1bWVyU3RhdGVTY2hlbWEgZXh0ZW5kcyBCYXNlTW9kZWxTY2hlbWEge1xuICBzdGF0dXM6IENvbnN1bWVyU3RhdHVzO1xuICBjb25zdW1lcj86IENvbnN1bWVyU2NoZW1hO1xufVxuXG5leHBvcnQgY2xhc3MgQ29uc3VtZXJTdGF0ZSBleHRlbmRzIEJhc2VNb2RlbCBpbXBsZW1lbnRzIENvbnN1bWVyU3RhdGVTY2hlbWEge1xuICBASXNFbnVtKENvbnN1bWVyU3RhdHVzKSBzdGF0dXM6IENvbnN1bWVyU3RhdHVzID0gdW5kZWZpbmVkO1xuXG4gIGNvbnN1bWVyPzogQ29uc3VtZXIgPSB1bmRlZmluZWQ7XG4gIGNvbnN1bWVySWQ/OiBzdHJpbmcgPSB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IoZGF0YTogUGFydGlhbDxDb25zdW1lclN0YXRlU2NoZW1hPikge1xuICAgIHN1cGVyKGRhdGEpO1xuXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcblxuICAgIHRoaXMuY29uc3VtZXIgPSBkYXRhLmNvbnN1bWVyICYmIG5ldyBDb25zdW1lcihkYXRhLmNvbnN1bWVyKTtcbiAgfVxufVxuIl19