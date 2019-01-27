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
        this.documents = undefined;
        this.phones = undefined;
        this.addresses = undefined;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uc3VtZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvbW9kZWxzL0NvbnN1bWVyL0NvbnN1bWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscURBQTZEO0FBQzdELHFDQUF3RDtBQUd4RCxxREFBa0Q7QUFjbEQsTUFBYSxRQUFTLFNBQVEsZ0JBQVM7SUFhckMsWUFBWSxJQUE2QjtRQUN2QyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFiZCxTQUFJLEdBQVUsU0FBUyxDQUFDO1FBQ3hCLFVBQUssR0FBWSxTQUFTLENBQUM7UUFDakIsV0FBTSxHQUFZLFNBQVMsQ0FBQztRQUl0QyxXQUFNLEdBQW1CLFNBQVMsQ0FBQztRQUVuQyxjQUFTLEdBQWdCLFNBQVMsQ0FBQztRQUNuQyxXQUFNLEdBQWEsU0FBUyxDQUFDO1FBQzdCLGNBQVMsR0FBZSxTQUFTLENBQUM7SUFJbEMsQ0FBQztDQUNGO0FBYlc7SUFBVCx3QkFBTSxFQUFFOzt3Q0FBNkI7QUFJdEM7SUFGQyw0QkFBVSxFQUFFO0lBQ1osd0JBQU0sQ0FBQywrQkFBYyxDQUFDOzt3Q0FDWTtBQVByQyw0QkFnQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJc0VudW0sIElzTm90RW1wdHksIElzVVVJRCB9IGZyb20gXCJjbGFzcy12YWxpZGF0b3JcIjtcbmltcG9ydCB7IEJhc2VNb2RlbCwgQmFzZU1vZGVsU2NoZW1hIH0gZnJvbSBcIi4uLy4uL2Jhc2VcIjtcbmltcG9ydCB7IFVzZXIsIFVzZXJTY2hlbWEgfSBmcm9tIFwiLi4vVXNlclwiO1xuaW1wb3J0IHsgQWRkcmVzcywgQWRkcmVzc1NjaGVtYSB9IGZyb20gXCIuL0FkZHJlc3NcIjtcbmltcG9ydCB7IENvbnN1bWVyU3RhdHVzIH0gZnJvbSBcIi4vQ29uc3VtZXJTdGF0dXNcIjtcbmltcG9ydCB7IERvY3VtZW50LCBEb2N1bWVudFNjaGVtYSB9IGZyb20gXCIuL0RvY3VtZW50XCI7XG5pbXBvcnQgeyBQaG9uZSwgUGhvbmVTY2hlbWEgfSBmcm9tIFwiLi9QaG9uZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbnN1bWVyU2NoZW1hIGV4dGVuZHMgQmFzZU1vZGVsU2NoZW1hIHtcbiAgc3RhdHVzOiBDb25zdW1lclN0YXR1cztcbiAgdXNlcj86IFVzZXJTY2hlbWE7XG4gIHVzZXJJZD86IHN0cmluZztcbiAgdGF4SWQ/OiBzdHJpbmc7XG4gIGRvY3VtZW50cz86IERvY3VtZW50U2NoZW1hW107XG4gIHBob25lcz86IFBob25lU2NoZW1hW107XG4gIGFkZHJlc3Nlcz86IEFkZHJlc3NTY2hlbWFbXTtcbn1cblxuZXhwb3J0IGNsYXNzIENvbnN1bWVyIGV4dGVuZHMgQmFzZU1vZGVsIGltcGxlbWVudHMgQ29uc3VtZXJTY2hlbWEge1xuICB1c2VyPzogVXNlciA9IHVuZGVmaW5lZDtcbiAgdGF4SWQ/OiBzdHJpbmcgPSB1bmRlZmluZWQ7XG4gIEBJc1VVSUQoKSB1c2VySWQ/OiBzdHJpbmcgPSB1bmRlZmluZWQ7XG5cbiAgQElzTm90RW1wdHkoKVxuICBASXNFbnVtKENvbnN1bWVyU3RhdHVzKVxuICBzdGF0dXM6IENvbnN1bWVyU3RhdHVzID0gdW5kZWZpbmVkO1xuXG4gIGRvY3VtZW50cz86IERvY3VtZW50W10gPSB1bmRlZmluZWQ7XG4gIHBob25lcz86IFBob25lW10gPSB1bmRlZmluZWQ7XG4gIGFkZHJlc3Nlcz86IEFkZHJlc3NbXSA9IHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3RvcihkYXRhOiBQYXJ0aWFsPENvbnN1bWVyU2NoZW1hPikge1xuICAgIHN1cGVyKGRhdGEpO1xuICB9XG59XG4iXX0=