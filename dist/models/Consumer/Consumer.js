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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uc3VtZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvbW9kZWxzL0NvbnN1bWVyL0NvbnN1bWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscURBQTZEO0FBQzdELHFDQUF3RDtBQUt4RCxxREFBa0Q7QUFnQmxELE1BQWEsUUFBUyxTQUFRLGdCQUFTO0lBZXJDLFlBQVksSUFBNkI7UUFDdkMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBZmQsU0FBSSxHQUFVLFNBQVMsQ0FBQztRQUN4QixVQUFLLEdBQVksU0FBUyxDQUFDO1FBQ2pCLFdBQU0sR0FBWSxTQUFTLENBQUM7UUFJdEMsV0FBTSxHQUFtQixTQUFTLENBQUM7UUFFbkMsV0FBTSxHQUFxQixTQUFTLENBQUM7UUFDckMsY0FBUyxHQUFnQixTQUFTLENBQUM7UUFDbkMsV0FBTSxHQUFhLFNBQVMsQ0FBQztRQUM3QixjQUFTLEdBQWUsU0FBUyxDQUFDO1FBQ2xDLGFBQVEsR0FBZSxTQUFTLENBQUM7UUFJL0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztDQUNGO0FBaEJXO0lBQVQsd0JBQU0sRUFBRTs7d0NBQTZCO0FBSXRDO0lBRkMsNEJBQVUsRUFBRTtJQUNaLHdCQUFNLENBQUMsK0JBQWMsQ0FBQzs7d0NBQ1k7QUFQckMsNEJBbUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSXNFbnVtLCBJc05vdEVtcHR5LCBJc1VVSUQgfSBmcm9tIFwiY2xhc3MtdmFsaWRhdG9yXCI7XG5pbXBvcnQgeyBCYXNlTW9kZWwsIEJhc2VNb2RlbFNjaGVtYSB9IGZyb20gXCIuLi8uLi9iYXNlXCI7XG5pbXBvcnQgeyBVc2VyLCBVc2VyU2NoZW1hIH0gZnJvbSBcIi4uL1VzZXJcIjtcbmltcG9ydCB7IEFkZHJlc3MsIEFkZHJlc3NTY2hlbWEgfSBmcm9tIFwiLi9BZGRyZXNzXCI7XG5pbXBvcnQgeyBCYW5raW5nLCBCYW5raW5nU2NoZW1hIH0gZnJvbSBcIi4vQmFua2luZ1wiO1xuaW1wb3J0IHsgQ29uc3VtZXJTdGF0ZSwgQ29uc3VtZXJTdGF0ZVNjaGVtYSB9IGZyb20gXCIuL0NvbnN1bWVyU3RhdGVcIjtcbmltcG9ydCB7IENvbnN1bWVyU3RhdHVzIH0gZnJvbSBcIi4vQ29uc3VtZXJTdGF0dXNcIjtcbmltcG9ydCB7IERvY3VtZW50LCBEb2N1bWVudFNjaGVtYSB9IGZyb20gXCIuL0RvY3VtZW50XCI7XG5pbXBvcnQgeyBQaG9uZSwgUGhvbmVTY2hlbWEgfSBmcm9tIFwiLi9QaG9uZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbnN1bWVyU2NoZW1hIGV4dGVuZHMgQmFzZU1vZGVsU2NoZW1hIHtcbiAgc3RhdHVzOiBDb25zdW1lclN0YXR1cztcbiAgdXNlcj86IFVzZXJTY2hlbWE7XG4gIHVzZXJJZD86IHN0cmluZztcbiAgdGF4SWQ/OiBzdHJpbmc7XG4gIGRvY3VtZW50cz86IERvY3VtZW50U2NoZW1hW107XG4gIHBob25lcz86IFBob25lU2NoZW1hW107XG4gIGFkZHJlc3Nlcz86IEFkZHJlc3NTY2hlbWFbXTtcbiAgc3RhdGVzPzogQ29uc3VtZXJTdGF0ZVNjaGVtYVtdO1xuICBiYW5raW5ncz86IEJhbmtpbmdTY2hlbWFbXTtcbn1cblxuZXhwb3J0IGNsYXNzIENvbnN1bWVyIGV4dGVuZHMgQmFzZU1vZGVsIGltcGxlbWVudHMgQ29uc3VtZXJTY2hlbWEge1xuICB1c2VyPzogVXNlciA9IHVuZGVmaW5lZDtcbiAgdGF4SWQ/OiBzdHJpbmcgPSB1bmRlZmluZWQ7XG4gIEBJc1VVSUQoKSB1c2VySWQ/OiBzdHJpbmcgPSB1bmRlZmluZWQ7XG5cbiAgQElzTm90RW1wdHkoKVxuICBASXNFbnVtKENvbnN1bWVyU3RhdHVzKVxuICBzdGF0dXM6IENvbnN1bWVyU3RhdHVzID0gdW5kZWZpbmVkO1xuXG4gIHN0YXRlcz86IENvbnN1bWVyU3RhdGVbXSA9IHVuZGVmaW5lZDtcbiAgZG9jdW1lbnRzPzogRG9jdW1lbnRbXSA9IHVuZGVmaW5lZDtcbiAgcGhvbmVzPzogUGhvbmVbXSA9IHVuZGVmaW5lZDtcbiAgYWRkcmVzc2VzPzogQWRkcmVzc1tdID0gdW5kZWZpbmVkO1xuICBiYW5raW5ncz86IEJhbmtpbmdbXSA9IHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3RvcihkYXRhOiBQYXJ0aWFsPENvbnN1bWVyU2NoZW1hPikge1xuICAgIHN1cGVyKGRhdGEpO1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XG4gIH1cbn1cbiJdfQ==