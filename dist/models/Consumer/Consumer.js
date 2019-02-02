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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uc3VtZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvbW9kZWxzL0NvbnN1bWVyL0NvbnN1bWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscURBQTZEO0FBQzdELHFDQUF3RDtBQUt4RCxxREFBa0Q7QUFnQmxELE1BQWEsUUFBUyxTQUFRLGdCQUFTO0lBZXJDLFlBQVksSUFBNkI7UUFDdkMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBZmQsU0FBSSxHQUFVLFNBQVMsQ0FBQztRQUN4QixVQUFLLEdBQVksU0FBUyxDQUFDO1FBQ2pCLFdBQU0sR0FBWSxTQUFTLENBQUM7UUFJdEMsV0FBTSxHQUFtQixTQUFTLENBQUM7UUFFbkMsV0FBTSxHQUFxQixTQUFTLENBQUM7UUFDckMsY0FBUyxHQUFnQixTQUFTLENBQUM7UUFDbkMsV0FBTSxHQUFhLFNBQVMsQ0FBQztRQUM3QixjQUFTLEdBQWUsU0FBUyxDQUFDO1FBQ2xDLGFBQVEsR0FBZSxTQUFTLENBQUM7SUFJakMsQ0FBQztDQUNGO0FBZlc7SUFBVCx3QkFBTSxFQUFFOzt3Q0FBNkI7QUFJdEM7SUFGQyw0QkFBVSxFQUFFO0lBQ1osd0JBQU0sQ0FBQywrQkFBYyxDQUFDOzt3Q0FDWTtBQVByQyw0QkFrQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJc0VudW0sIElzTm90RW1wdHksIElzVVVJRCB9IGZyb20gXCJjbGFzcy12YWxpZGF0b3JcIjtcclxuaW1wb3J0IHsgQmFzZU1vZGVsLCBCYXNlTW9kZWxTY2hlbWEgfSBmcm9tIFwiLi4vLi4vYmFzZVwiO1xyXG5pbXBvcnQgeyBVc2VyLCBVc2VyU2NoZW1hIH0gZnJvbSBcIi4uL1VzZXJcIjtcclxuaW1wb3J0IHsgQWRkcmVzcywgQWRkcmVzc1NjaGVtYSB9IGZyb20gXCIuL0FkZHJlc3NcIjtcclxuaW1wb3J0IHsgQmFua2luZywgQmFua2luZ1NjaGVtYSB9IGZyb20gXCIuL0JhbmtpbmdcIjtcclxuaW1wb3J0IHsgQ29uc3VtZXJTdGF0ZSwgQ29uc3VtZXJTdGF0ZVNjaGVtYSB9IGZyb20gXCIuL0NvbnN1bWVyU3RhdGVcIjtcclxuaW1wb3J0IHsgQ29uc3VtZXJTdGF0dXMgfSBmcm9tIFwiLi9Db25zdW1lclN0YXR1c1wiO1xyXG5pbXBvcnQgeyBEb2N1bWVudCwgRG9jdW1lbnRTY2hlbWEgfSBmcm9tIFwiLi9Eb2N1bWVudFwiO1xyXG5pbXBvcnQgeyBQaG9uZSwgUGhvbmVTY2hlbWEgfSBmcm9tIFwiLi9QaG9uZVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb25zdW1lclNjaGVtYSBleHRlbmRzIEJhc2VNb2RlbFNjaGVtYSB7XHJcbiAgc3RhdHVzOiBDb25zdW1lclN0YXR1cztcclxuICB1c2VyPzogVXNlclNjaGVtYTtcclxuICB1c2VySWQ/OiBzdHJpbmc7XHJcbiAgdGF4SWQ/OiBzdHJpbmc7XHJcbiAgZG9jdW1lbnRzPzogRG9jdW1lbnRTY2hlbWFbXTtcclxuICBwaG9uZXM/OiBQaG9uZVNjaGVtYVtdO1xyXG4gIGFkZHJlc3Nlcz86IEFkZHJlc3NTY2hlbWFbXTtcclxuICBzdGF0ZXM/OiBDb25zdW1lclN0YXRlU2NoZW1hW107XHJcbiAgYmFua2luZ3M/OiBCYW5raW5nU2NoZW1hW107XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb25zdW1lciBleHRlbmRzIEJhc2VNb2RlbCBpbXBsZW1lbnRzIENvbnN1bWVyU2NoZW1hIHtcclxuICB1c2VyPzogVXNlciA9IHVuZGVmaW5lZDtcclxuICB0YXhJZD86IHN0cmluZyA9IHVuZGVmaW5lZDtcclxuICBASXNVVUlEKCkgdXNlcklkPzogc3RyaW5nID0gdW5kZWZpbmVkO1xyXG5cclxuICBASXNOb3RFbXB0eSgpXHJcbiAgQElzRW51bShDb25zdW1lclN0YXR1cylcclxuICBzdGF0dXM6IENvbnN1bWVyU3RhdHVzID0gdW5kZWZpbmVkO1xyXG5cclxuICBzdGF0ZXM/OiBDb25zdW1lclN0YXRlW10gPSB1bmRlZmluZWQ7XHJcbiAgZG9jdW1lbnRzPzogRG9jdW1lbnRbXSA9IHVuZGVmaW5lZDtcclxuICBwaG9uZXM/OiBQaG9uZVtdID0gdW5kZWZpbmVkO1xyXG4gIGFkZHJlc3Nlcz86IEFkZHJlc3NbXSA9IHVuZGVmaW5lZDtcclxuICBiYW5raW5ncz86IEJhbmtpbmdbXSA9IHVuZGVmaW5lZDtcclxuXHJcbiAgY29uc3RydWN0b3IoZGF0YTogUGFydGlhbDxDb25zdW1lclNjaGVtYT4pIHtcclxuICAgIHN1cGVyKGRhdGEpO1xyXG4gIH1cclxufVxyXG4iXX0=