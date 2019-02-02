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
const ConsumerStatus_1 = require("./ConsumerStatus");
class Consumer extends base_1.BaseModel {
    constructor(data) {
        super(data);
        this.user = undefined;
        this.taxId = undefined;
        this.userId = undefined;
        this.status = undefined;
        this.states = undefined;
        this.documents = undefined;
        this.phones = undefined;
        this.addresses = undefined;
        this.bankings = undefined;
    }
}
__decorate([
    class_validator_1.IsUUID(),
    __metadata("design:type", String)
], Consumer.prototype, "userId", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsEnum(ConsumerStatus_1.ConsumerStatus),
    __metadata("design:type", String)
], Consumer.prototype, "status", void 0);
exports.Consumer = Consumer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uc3VtZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvbW9kZWxzL0NvbnN1bWVyL0NvbnN1bWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscURBQTZEO0FBQzdELHFDQUF3RDtBQUt4RCxxREFBa0Q7QUFnQmxELE1BQWEsUUFBUyxTQUFRLGdCQUFTO0lBZXJDLFlBQVksSUFBNkI7UUFDdkMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBZmQsU0FBSSxHQUFVLFNBQVMsQ0FBQztRQUN4QixVQUFLLEdBQVksU0FBUyxDQUFDO1FBQ2pCLFdBQU0sR0FBWSxTQUFTLENBQUM7UUFJdEMsV0FBTSxHQUFtQixTQUFTLENBQUM7UUFFbkMsV0FBTSxHQUFxQixTQUFTLENBQUM7UUFDckMsY0FBUyxHQUFnQixTQUFTLENBQUM7UUFDbkMsV0FBTSxHQUFhLFNBQVMsQ0FBQztRQUM3QixjQUFTLEdBQWUsU0FBUyxDQUFDO1FBQ2xDLGFBQVEsR0FBZSxTQUFTLENBQUM7SUFJakMsQ0FBQztDQUNGO0FBZlc7SUFBVCx3QkFBTSxFQUFFOzt3Q0FBNkI7QUFJdEM7SUFGQyw0QkFBVSxFQUFFO0lBQ1osd0JBQU0sQ0FBQywrQkFBYyxDQUFDOzt3Q0FDWTtBQVByQyw0QkFrQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJc0VudW0sIElzTm90RW1wdHksIElzVVVJRCB9IGZyb20gXCJjbGFzcy12YWxpZGF0b3JcIjtcbmltcG9ydCB7IEJhc2VNb2RlbCwgQmFzZU1vZGVsU2NoZW1hIH0gZnJvbSBcIi4uLy4uL2Jhc2VcIjtcbmltcG9ydCB7IFVzZXIsIFVzZXJTY2hlbWEgfSBmcm9tIFwiLi4vVXNlclwiO1xuaW1wb3J0IHsgQWRkcmVzcywgQWRkcmVzc1NjaGVtYSB9IGZyb20gXCIuL0FkZHJlc3NcIjtcbmltcG9ydCB7IEJhbmtpbmcsIEJhbmtpbmdTY2hlbWEgfSBmcm9tIFwiLi9CYW5raW5nXCI7XG5pbXBvcnQgeyBDb25zdW1lclN0YXRlLCBDb25zdW1lclN0YXRlU2NoZW1hIH0gZnJvbSBcIi4vQ29uc3VtZXJTdGF0ZVwiO1xuaW1wb3J0IHsgQ29uc3VtZXJTdGF0dXMgfSBmcm9tIFwiLi9Db25zdW1lclN0YXR1c1wiO1xuaW1wb3J0IHsgRG9jdW1lbnQsIERvY3VtZW50U2NoZW1hIH0gZnJvbSBcIi4vRG9jdW1lbnRcIjtcbmltcG9ydCB7IFBob25lLCBQaG9uZVNjaGVtYSB9IGZyb20gXCIuL1Bob25lXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uc3VtZXJTY2hlbWEgZXh0ZW5kcyBCYXNlTW9kZWxTY2hlbWEge1xuICBzdGF0dXM6IENvbnN1bWVyU3RhdHVzO1xuICB1c2VyPzogVXNlclNjaGVtYTtcbiAgdXNlcklkPzogc3RyaW5nO1xuICB0YXhJZD86IHN0cmluZztcbiAgZG9jdW1lbnRzPzogRG9jdW1lbnRTY2hlbWFbXTtcbiAgcGhvbmVzPzogUGhvbmVTY2hlbWFbXTtcbiAgYWRkcmVzc2VzPzogQWRkcmVzc1NjaGVtYVtdO1xuICBzdGF0ZXM/OiBDb25zdW1lclN0YXRlU2NoZW1hW107XG4gIGJhbmtpbmdzPzogQmFua2luZ1NjaGVtYVtdO1xufVxuXG5leHBvcnQgY2xhc3MgQ29uc3VtZXIgZXh0ZW5kcyBCYXNlTW9kZWwgaW1wbGVtZW50cyBDb25zdW1lclNjaGVtYSB7XG4gIHVzZXI/OiBVc2VyID0gdW5kZWZpbmVkO1xuICB0YXhJZD86IHN0cmluZyA9IHVuZGVmaW5lZDtcbiAgQElzVVVJRCgpIHVzZXJJZD86IHN0cmluZyA9IHVuZGVmaW5lZDtcblxuICBASXNOb3RFbXB0eSgpXG4gIEBJc0VudW0oQ29uc3VtZXJTdGF0dXMpXG4gIHN0YXR1czogQ29uc3VtZXJTdGF0dXMgPSB1bmRlZmluZWQ7XG5cbiAgc3RhdGVzPzogQ29uc3VtZXJTdGF0ZVtdID0gdW5kZWZpbmVkO1xuICBkb2N1bWVudHM/OiBEb2N1bWVudFtdID0gdW5kZWZpbmVkO1xuICBwaG9uZXM/OiBQaG9uZVtdID0gdW5kZWZpbmVkO1xuICBhZGRyZXNzZXM/OiBBZGRyZXNzW10gPSB1bmRlZmluZWQ7XG4gIGJhbmtpbmdzPzogQmFua2luZ1tdID0gdW5kZWZpbmVkO1xuXG4gIGNvbnN0cnVjdG9yKGRhdGE6IFBhcnRpYWw8Q29uc3VtZXJTY2hlbWE+KSB7XG4gICAgc3VwZXIoZGF0YSk7XG4gIH1cbn1cbiJdfQ==