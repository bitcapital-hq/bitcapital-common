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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uc3VtZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvbW9kZWxzL0NvbnN1bWVyL0NvbnN1bWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscURBQTZEO0FBQzdELHFDQUF3RDtBQUt4RCxxREFBa0Q7QUFnQmxELE1BQWEsUUFBUyxTQUFRLGdCQUFTO0lBZXJDLFlBQVksSUFBNkI7UUFDdkMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBZmQsU0FBSSxHQUFVLFNBQVMsQ0FBQztRQUN4QixVQUFLLEdBQVksU0FBUyxDQUFDO1FBQ2pCLFdBQU0sR0FBWSxTQUFTLENBQUM7UUFJdEMsV0FBTSxHQUFtQixTQUFTLENBQUM7UUFFbkMsV0FBTSxHQUFxQixTQUFTLENBQUM7UUFDckMsY0FBUyxHQUFnQixTQUFTLENBQUM7UUFDbkMsV0FBTSxHQUFhLFNBQVMsQ0FBQztRQUM3QixjQUFTLEdBQWUsU0FBUyxDQUFDO1FBQ2xDLGFBQVEsR0FBZSxTQUFTLENBQUM7UUFJL0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztDQUNGO0FBaEJXO0lBQVQsd0JBQU0sRUFBRTs7d0NBQTZCO0FBSXRDO0lBRkMsNEJBQVUsRUFBRTtJQUNaLHdCQUFNLENBQUMsK0JBQWMsQ0FBQzs7d0NBQ1k7QUFQckMsNEJBbUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSXNFbnVtLCBJc05vdEVtcHR5LCBJc1VVSUQgfSBmcm9tIFwiY2xhc3MtdmFsaWRhdG9yXCI7XHJcbmltcG9ydCB7IEJhc2VNb2RlbCwgQmFzZU1vZGVsU2NoZW1hIH0gZnJvbSBcIi4uLy4uL2Jhc2VcIjtcclxuaW1wb3J0IHsgVXNlciwgVXNlclNjaGVtYSB9IGZyb20gXCIuLi9Vc2VyXCI7XHJcbmltcG9ydCB7IEFkZHJlc3MsIEFkZHJlc3NTY2hlbWEgfSBmcm9tIFwiLi9BZGRyZXNzXCI7XHJcbmltcG9ydCB7IEJhbmtpbmcsIEJhbmtpbmdTY2hlbWEgfSBmcm9tIFwiLi9CYW5raW5nXCI7XHJcbmltcG9ydCB7IENvbnN1bWVyU3RhdGUsIENvbnN1bWVyU3RhdGVTY2hlbWEgfSBmcm9tIFwiLi9Db25zdW1lclN0YXRlXCI7XHJcbmltcG9ydCB7IENvbnN1bWVyU3RhdHVzIH0gZnJvbSBcIi4vQ29uc3VtZXJTdGF0dXNcIjtcclxuaW1wb3J0IHsgRG9jdW1lbnQsIERvY3VtZW50U2NoZW1hIH0gZnJvbSBcIi4vRG9jdW1lbnRcIjtcclxuaW1wb3J0IHsgUGhvbmUsIFBob25lU2NoZW1hIH0gZnJvbSBcIi4vUGhvbmVcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29uc3VtZXJTY2hlbWEgZXh0ZW5kcyBCYXNlTW9kZWxTY2hlbWEge1xyXG4gIHN0YXR1cz86IENvbnN1bWVyU3RhdHVzO1xyXG4gIHVzZXI/OiBVc2VyU2NoZW1hO1xyXG4gIHVzZXJJZD86IHN0cmluZztcclxuICB0YXhJZD86IHN0cmluZztcclxuICBkb2N1bWVudHM/OiBEb2N1bWVudFNjaGVtYVtdO1xyXG4gIHBob25lcz86IFBob25lU2NoZW1hW107XHJcbiAgYWRkcmVzc2VzPzogQWRkcmVzc1NjaGVtYVtdO1xyXG4gIHN0YXRlcz86IENvbnN1bWVyU3RhdGVTY2hlbWFbXTtcclxuICBiYW5raW5ncz86IEJhbmtpbmdTY2hlbWFbXTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbnN1bWVyIGV4dGVuZHMgQmFzZU1vZGVsIGltcGxlbWVudHMgQ29uc3VtZXJTY2hlbWEge1xyXG4gIHVzZXI/OiBVc2VyID0gdW5kZWZpbmVkO1xyXG4gIHRheElkPzogc3RyaW5nID0gdW5kZWZpbmVkO1xyXG4gIEBJc1VVSUQoKSB1c2VySWQ/OiBzdHJpbmcgPSB1bmRlZmluZWQ7XHJcblxyXG4gIEBJc05vdEVtcHR5KClcclxuICBASXNFbnVtKENvbnN1bWVyU3RhdHVzKVxyXG4gIHN0YXR1czogQ29uc3VtZXJTdGF0dXMgPSB1bmRlZmluZWQ7XHJcblxyXG4gIHN0YXRlcz86IENvbnN1bWVyU3RhdGVbXSA9IHVuZGVmaW5lZDtcclxuICBkb2N1bWVudHM/OiBEb2N1bWVudFtdID0gdW5kZWZpbmVkO1xyXG4gIHBob25lcz86IFBob25lW10gPSB1bmRlZmluZWQ7XHJcbiAgYWRkcmVzc2VzPzogQWRkcmVzc1tdID0gdW5kZWZpbmVkO1xyXG4gIGJhbmtpbmdzPzogQmFua2luZ1tdID0gdW5kZWZpbmVkO1xyXG5cclxuICBjb25zdHJ1Y3RvcihkYXRhOiBQYXJ0aWFsPENvbnN1bWVyU2NoZW1hPikge1xyXG4gICAgc3VwZXIoZGF0YSk7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xyXG4gIH1cclxufVxyXG4iXX0=