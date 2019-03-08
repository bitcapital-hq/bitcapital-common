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
const User_1 = require("../User");
const Address_1 = require("./Address");
const Banking_1 = require("./Banking");
const ConsumerState_1 = require("./ConsumerState");
const ConsumerStatus_1 = require("./ConsumerStatus");
const Document_1 = require("./Document");
const Phone_1 = require("./Phone");
const AccountType_1 = require("./AccountType");
class Consumer extends base_1.BaseModel {
    constructor(data) {
        super(data);
        this.user = undefined;
        this.taxId = undefined;
        this.type = undefined;
        this.companyData = undefined;
        this.status = undefined;
        this.states = undefined;
        this.addresses = undefined;
        this.bankings = undefined;
        this.documents = undefined;
        this.phones = undefined;
        Object.assign(this, data);
        this.user = data.user && new User_1.User(data.user);
        this.states = data.states && data.states.map(state => new ConsumerState_1.ConsumerState(state));
        this.addresses = data.addresses && data.addresses.map(address => new Address_1.Address(address));
        this.bankings = data.bankings && data.bankings.map(banking => new Banking_1.Banking(banking));
        this.documents = data.documents && data.documents.map(document => new Document_1.Document(document));
        this.phones = data.phones && data.phones.map(phone => new Phone_1.Phone(phone));
    }
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsEnum(AccountType_1.AccountType),
    __metadata("design:type", String)
], Consumer.prototype, "type", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Object)
], Consumer.prototype, "companyData", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsEnum(ConsumerStatus_1.ConsumerStatus),
    __metadata("design:type", String)
], Consumer.prototype, "status", void 0);
exports.Consumer = Consumer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uc3VtZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvbW9kZWxzL0NvbnN1bWVyL0NvbnN1bWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscURBQWlFO0FBQ2pFLHFDQUF3RDtBQUN4RCxrQ0FBMkM7QUFDM0MsdUNBQW1EO0FBQ25ELHVDQUFtRDtBQUNuRCxtREFBcUU7QUFDckUscURBQWtEO0FBQ2xELHlDQUFzRDtBQUN0RCxtQ0FBNkM7QUFDN0MsK0NBQTRDO0FBYzVDLE1BQWEsUUFBUyxTQUFRLGdCQUFTO0lBb0JyQyxZQUFZLElBQTZCO1FBQ3ZDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQXBCZCxTQUFJLEdBQVUsU0FBUyxDQUFDO1FBQ3hCLFVBQUssR0FBWSxTQUFTLENBQUM7UUFJM0IsU0FBSSxHQUFnQixTQUFTLENBQUM7UUFFaEIsZ0JBQVcsR0FBaUIsU0FBUyxDQUFDO1FBSXBELFdBQU0sR0FBbUIsU0FBUyxDQUFDO1FBRW5DLFdBQU0sR0FBcUIsU0FBUyxDQUFDO1FBQ3JDLGNBQVMsR0FBZSxTQUFTLENBQUM7UUFDbEMsYUFBUSxHQUFlLFNBQVMsQ0FBQztRQUNqQyxjQUFTLEdBQWdCLFNBQVMsQ0FBQztRQUNuQyxXQUFNLEdBQWEsU0FBUyxDQUFDO1FBSzNCLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRTFCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLFdBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSw2QkFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDaEYsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxpQkFBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDdkYsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxpQkFBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxtQkFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDMUYsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxhQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUMxRSxDQUFDO0NBQ0Y7QUExQkM7SUFGQyw0QkFBVSxFQUFFO0lBQ1osd0JBQU0sQ0FBQyx5QkFBVyxDQUFDOztzQ0FDVTtBQUVoQjtJQUFiLDRCQUFVLEVBQUU7OzZDQUF1QztBQUlwRDtJQUZDLDRCQUFVLEVBQUU7SUFDWix3QkFBTSxDQUFDLCtCQUFjLENBQUM7O3dDQUNZO0FBWnJDLDRCQWdDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElzRW51bSwgSXNOb3RFbXB0eSwgSXNPcHRpb25hbCB9IGZyb20gXCJjbGFzcy12YWxpZGF0b3JcIjtcclxuaW1wb3J0IHsgQmFzZU1vZGVsLCBCYXNlTW9kZWxTY2hlbWEgfSBmcm9tIFwiLi4vLi4vYmFzZVwiO1xyXG5pbXBvcnQgeyBVc2VyLCBVc2VyU2NoZW1hIH0gZnJvbSBcIi4uL1VzZXJcIjtcclxuaW1wb3J0IHsgQWRkcmVzcywgQWRkcmVzc1NjaGVtYSB9IGZyb20gXCIuL0FkZHJlc3NcIjtcclxuaW1wb3J0IHsgQmFua2luZywgQmFua2luZ1NjaGVtYSB9IGZyb20gXCIuL0JhbmtpbmdcIjtcclxuaW1wb3J0IHsgQ29uc3VtZXJTdGF0ZSwgQ29uc3VtZXJTdGF0ZVNjaGVtYSB9IGZyb20gXCIuL0NvbnN1bWVyU3RhdGVcIjtcclxuaW1wb3J0IHsgQ29uc3VtZXJTdGF0dXMgfSBmcm9tIFwiLi9Db25zdW1lclN0YXR1c1wiO1xyXG5pbXBvcnQgeyBEb2N1bWVudCwgRG9jdW1lbnRTY2hlbWEgfSBmcm9tIFwiLi9Eb2N1bWVudFwiO1xyXG5pbXBvcnQgeyBQaG9uZSwgUGhvbmVTY2hlbWEgfSBmcm9tIFwiLi9QaG9uZVwiO1xyXG5pbXBvcnQgeyBBY2NvdW50VHlwZSB9IGZyb20gXCIuL0FjY291bnRUeXBlXCI7XHJcbmltcG9ydCB7IENvbXBhbnlEYXRhIH0gZnJvbSBcIi4vQ29tcGFueURhdGFcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29uc3VtZXJTY2hlbWEgZXh0ZW5kcyBCYXNlTW9kZWxTY2hlbWEge1xyXG4gIHN0YXR1cz86IENvbnN1bWVyU3RhdHVzO1xyXG4gIHVzZXI/OiBVc2VyU2NoZW1hO1xyXG4gIHRheElkPzogc3RyaW5nO1xyXG4gIGFkZHJlc3Nlcz86IEFkZHJlc3NTY2hlbWFbXTtcclxuICBiYW5raW5ncz86IEJhbmtpbmdTY2hlbWFbXTtcclxuICBkb2N1bWVudHM/OiBEb2N1bWVudFNjaGVtYVtdO1xyXG4gIHBob25lcz86IFBob25lU2NoZW1hW107XHJcbiAgc3RhdGVzPzogQ29uc3VtZXJTdGF0ZVNjaGVtYVtdO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29uc3VtZXIgZXh0ZW5kcyBCYXNlTW9kZWwgaW1wbGVtZW50cyBDb25zdW1lclNjaGVtYSB7XHJcbiAgdXNlcj86IFVzZXIgPSB1bmRlZmluZWQ7XHJcbiAgdGF4SWQ/OiBzdHJpbmcgPSB1bmRlZmluZWQ7XHJcblxyXG4gIEBJc05vdEVtcHR5KClcclxuICBASXNFbnVtKEFjY291bnRUeXBlKVxyXG4gIHR5cGU6IEFjY291bnRUeXBlID0gdW5kZWZpbmVkO1xyXG5cclxuICBASXNPcHRpb25hbCgpIGNvbXBhbnlEYXRhPzogQ29tcGFueURhdGEgPSB1bmRlZmluZWQ7XHJcblxyXG4gIEBJc05vdEVtcHR5KClcclxuICBASXNFbnVtKENvbnN1bWVyU3RhdHVzKVxyXG4gIHN0YXR1czogQ29uc3VtZXJTdGF0dXMgPSB1bmRlZmluZWQ7XHJcblxyXG4gIHN0YXRlcz86IENvbnN1bWVyU3RhdGVbXSA9IHVuZGVmaW5lZDtcclxuICBhZGRyZXNzZXM/OiBBZGRyZXNzW10gPSB1bmRlZmluZWQ7XHJcbiAgYmFua2luZ3M/OiBCYW5raW5nW10gPSB1bmRlZmluZWQ7XHJcbiAgZG9jdW1lbnRzPzogRG9jdW1lbnRbXSA9IHVuZGVmaW5lZDtcclxuICBwaG9uZXM/OiBQaG9uZVtdID0gdW5kZWZpbmVkO1xyXG5cclxuICBjb25zdHJ1Y3RvcihkYXRhOiBQYXJ0aWFsPENvbnN1bWVyU2NoZW1hPikge1xyXG4gICAgc3VwZXIoZGF0YSk7XHJcblxyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcclxuXHJcbiAgICB0aGlzLnVzZXIgPSBkYXRhLnVzZXIgJiYgbmV3IFVzZXIoZGF0YS51c2VyKTtcclxuICAgIHRoaXMuc3RhdGVzID0gZGF0YS5zdGF0ZXMgJiYgZGF0YS5zdGF0ZXMubWFwKHN0YXRlID0+IG5ldyBDb25zdW1lclN0YXRlKHN0YXRlKSk7XHJcbiAgICB0aGlzLmFkZHJlc3NlcyA9IGRhdGEuYWRkcmVzc2VzICYmIGRhdGEuYWRkcmVzc2VzLm1hcChhZGRyZXNzID0+IG5ldyBBZGRyZXNzKGFkZHJlc3MpKTtcclxuICAgIHRoaXMuYmFua2luZ3MgPSBkYXRhLmJhbmtpbmdzICYmIGRhdGEuYmFua2luZ3MubWFwKGJhbmtpbmcgPT4gbmV3IEJhbmtpbmcoYmFua2luZykpO1xyXG4gICAgdGhpcy5kb2N1bWVudHMgPSBkYXRhLmRvY3VtZW50cyAmJiBkYXRhLmRvY3VtZW50cy5tYXAoZG9jdW1lbnQgPT4gbmV3IERvY3VtZW50KGRvY3VtZW50KSk7XHJcbiAgICB0aGlzLnBob25lcyA9IGRhdGEucGhvbmVzICYmIGRhdGEucGhvbmVzLm1hcChwaG9uZSA9PiBuZXcgUGhvbmUocGhvbmUpKTtcclxuICB9XHJcbn1cclxuIl19