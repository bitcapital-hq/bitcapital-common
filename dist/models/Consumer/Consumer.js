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
        Object.assign(this, data);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uc3VtZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvbW9kZWxzL0NvbnN1bWVyL0NvbnN1bWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscURBQTZEO0FBQzdELHFDQUF3RDtBQUt4RCxxREFBa0Q7QUFnQmxELE1BQWEsUUFBUyxTQUFRLGdCQUFTO0lBZXJDLFlBQVksSUFBNkI7UUFDdkMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBZmQsU0FBSSxHQUFVLFNBQVMsQ0FBQztRQUN4QixVQUFLLEdBQVksU0FBUyxDQUFDO1FBQ2pCLFdBQU0sR0FBWSxTQUFTLENBQUM7UUFJdEMsV0FBTSxHQUFtQixTQUFTLENBQUM7UUFFbkMsV0FBTSxHQUFxQixTQUFTLENBQUM7UUFDckMsY0FBUyxHQUFnQixTQUFTLENBQUM7UUFDbkMsV0FBTSxHQUFhLFNBQVMsQ0FBQztRQUM3QixjQUFTLEdBQWUsU0FBUyxDQUFDO1FBQ2xDLGFBQVEsR0FBZSxTQUFTLENBQUM7UUFJL0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztDQUNGO0FBaEJXO0lBQVQsd0JBQU0sRUFBRTs7d0NBQTZCO0FBSXRDO0lBRkMsNEJBQVUsRUFBRTtJQUNaLHdCQUFNLENBQUMsK0JBQWMsQ0FBQzs7d0NBQ1k7QUFQckMsNEJBbUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSXNFbnVtLCBJc05vdEVtcHR5LCBJc1VVSUQgfSBmcm9tIFwiY2xhc3MtdmFsaWRhdG9yXCI7XHJcbmltcG9ydCB7IEJhc2VNb2RlbCwgQmFzZU1vZGVsU2NoZW1hIH0gZnJvbSBcIi4uLy4uL2Jhc2VcIjtcclxuaW1wb3J0IHsgVXNlciwgVXNlclNjaGVtYSB9IGZyb20gXCIuLi9Vc2VyXCI7XHJcbmltcG9ydCB7IEFkZHJlc3MsIEFkZHJlc3NTY2hlbWEgfSBmcm9tIFwiLi9BZGRyZXNzXCI7XHJcbmltcG9ydCB7IEJhbmtpbmcsIEJhbmtpbmdTY2hlbWEgfSBmcm9tIFwiLi9CYW5raW5nXCI7XHJcbmltcG9ydCB7IENvbnN1bWVyU3RhdGUsIENvbnN1bWVyU3RhdGVTY2hlbWEgfSBmcm9tIFwiLi9Db25zdW1lclN0YXRlXCI7XHJcbmltcG9ydCB7IENvbnN1bWVyU3RhdHVzIH0gZnJvbSBcIi4vQ29uc3VtZXJTdGF0dXNcIjtcclxuaW1wb3J0IHsgRG9jdW1lbnQsIERvY3VtZW50U2NoZW1hIH0gZnJvbSBcIi4vRG9jdW1lbnRcIjtcclxuaW1wb3J0IHsgUGhvbmUsIFBob25lU2NoZW1hIH0gZnJvbSBcIi4vUGhvbmVcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29uc3VtZXJTY2hlbWEgZXh0ZW5kcyBCYXNlTW9kZWxTY2hlbWEge1xyXG4gIHN0YXR1czogQ29uc3VtZXJTdGF0dXM7XHJcbiAgdXNlcj86IFVzZXJTY2hlbWE7XHJcbiAgdXNlcklkPzogc3RyaW5nO1xyXG4gIHRheElkPzogc3RyaW5nO1xyXG4gIGRvY3VtZW50cz86IERvY3VtZW50U2NoZW1hW107XHJcbiAgcGhvbmVzPzogUGhvbmVTY2hlbWFbXTtcclxuICBhZGRyZXNzZXM/OiBBZGRyZXNzU2NoZW1hW107XHJcbiAgc3RhdGVzPzogQ29uc3VtZXJTdGF0ZVNjaGVtYVtdO1xyXG4gIGJhbmtpbmdzPzogQmFua2luZ1NjaGVtYVtdO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29uc3VtZXIgZXh0ZW5kcyBCYXNlTW9kZWwgaW1wbGVtZW50cyBDb25zdW1lclNjaGVtYSB7XHJcbiAgdXNlcj86IFVzZXIgPSB1bmRlZmluZWQ7XHJcbiAgdGF4SWQ/OiBzdHJpbmcgPSB1bmRlZmluZWQ7XHJcbiAgQElzVVVJRCgpIHVzZXJJZD86IHN0cmluZyA9IHVuZGVmaW5lZDtcclxuXHJcbiAgQElzTm90RW1wdHkoKVxyXG4gIEBJc0VudW0oQ29uc3VtZXJTdGF0dXMpXHJcbiAgc3RhdHVzOiBDb25zdW1lclN0YXR1cyA9IHVuZGVmaW5lZDtcclxuXHJcbiAgc3RhdGVzPzogQ29uc3VtZXJTdGF0ZVtdID0gdW5kZWZpbmVkO1xyXG4gIGRvY3VtZW50cz86IERvY3VtZW50W10gPSB1bmRlZmluZWQ7XHJcbiAgcGhvbmVzPzogUGhvbmVbXSA9IHVuZGVmaW5lZDtcclxuICBhZGRyZXNzZXM/OiBBZGRyZXNzW10gPSB1bmRlZmluZWQ7XHJcbiAgYmFua2luZ3M/OiBCYW5raW5nW10gPSB1bmRlZmluZWQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRhdGE6IFBhcnRpYWw8Q29uc3VtZXJTY2hlbWE+KSB7XHJcbiAgICBzdXBlcihkYXRhKTtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==