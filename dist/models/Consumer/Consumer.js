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
class Consumer extends base_1.BaseModel {
    constructor(data) {
        super(data);
        this.user = undefined;
        this.taxId = undefined;
        this.status = undefined;
        this.states = undefined;
        this.addresses = undefined;
        this.bankings = undefined;
        this.documents = undefined;
        this.phones = undefined;
        Object.assign(this, data);
        this.birthday = data.birthday && new Date(data.birthday);
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
    class_validator_1.IsEnum(ConsumerStatus_1.ConsumerStatus),
    __metadata("design:type", String)
], Consumer.prototype, "status", void 0);
exports.Consumer = Consumer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uc3VtZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvbW9kZWxzL0NvbnN1bWVyL0NvbnN1bWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscURBQXFEO0FBQ3JELHFDQUF3RDtBQUN4RCxrQ0FBMkM7QUFDM0MsdUNBQW1EO0FBQ25ELHVDQUFtRDtBQUNuRCxtREFBcUU7QUFDckUscURBQWtEO0FBQ2xELHlDQUFzRDtBQUN0RCxtQ0FBNkM7QUFlN0MsTUFBYSxRQUFTLFNBQVEsZ0JBQVM7SUFnQnJDLFlBQVksSUFBNkI7UUFDdkMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBaEJkLFNBQUksR0FBVSxTQUFTLENBQUM7UUFDeEIsVUFBSyxHQUFZLFNBQVMsQ0FBQztRQUkzQixXQUFNLEdBQW1CLFNBQVMsQ0FBQztRQUluQyxXQUFNLEdBQXFCLFNBQVMsQ0FBQztRQUNyQyxjQUFTLEdBQWUsU0FBUyxDQUFDO1FBQ2xDLGFBQVEsR0FBZSxTQUFTLENBQUM7UUFDakMsY0FBUyxHQUFnQixTQUFTLENBQUM7UUFDbkMsV0FBTSxHQUFhLFNBQVMsQ0FBQztRQUszQixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUUxQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLFdBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSw2QkFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDaEYsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxpQkFBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDdkYsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxpQkFBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxtQkFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDMUYsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxhQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUMxRSxDQUFDO0NBQ0Y7QUF2QkM7SUFGQyw0QkFBVSxFQUFFO0lBQ1osd0JBQU0sQ0FBQywrQkFBYyxDQUFDOzt3Q0FDWTtBQU5yQyw0QkE2QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJc0VudW0sIElzTm90RW1wdHkgfSBmcm9tIFwiY2xhc3MtdmFsaWRhdG9yXCI7XG5pbXBvcnQgeyBCYXNlTW9kZWwsIEJhc2VNb2RlbFNjaGVtYSB9IGZyb20gXCIuLi8uLi9iYXNlXCI7XG5pbXBvcnQgeyBVc2VyLCBVc2VyU2NoZW1hIH0gZnJvbSBcIi4uL1VzZXJcIjtcbmltcG9ydCB7IEFkZHJlc3MsIEFkZHJlc3NTY2hlbWEgfSBmcm9tIFwiLi9BZGRyZXNzXCI7XG5pbXBvcnQgeyBCYW5raW5nLCBCYW5raW5nU2NoZW1hIH0gZnJvbSBcIi4vQmFua2luZ1wiO1xuaW1wb3J0IHsgQ29uc3VtZXJTdGF0ZSwgQ29uc3VtZXJTdGF0ZVNjaGVtYSB9IGZyb20gXCIuL0NvbnN1bWVyU3RhdGVcIjtcbmltcG9ydCB7IENvbnN1bWVyU3RhdHVzIH0gZnJvbSBcIi4vQ29uc3VtZXJTdGF0dXNcIjtcbmltcG9ydCB7IERvY3VtZW50LCBEb2N1bWVudFNjaGVtYSB9IGZyb20gXCIuL0RvY3VtZW50XCI7XG5pbXBvcnQgeyBQaG9uZSwgUGhvbmVTY2hlbWEgfSBmcm9tIFwiLi9QaG9uZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbnN1bWVyU2NoZW1hIGV4dGVuZHMgQmFzZU1vZGVsU2NoZW1hIHtcbiAgdXNlcj86IFVzZXJTY2hlbWE7XG4gIHRheElkPzogc3RyaW5nO1xuICBzdGF0dXM6IENvbnN1bWVyU3RhdHVzO1xuICBtb3RoZXJOYW1lOiBzdHJpbmc7XG4gIGJpcnRoZGF5OiBEYXRlO1xuICBhZGRyZXNzZXM/OiBBZGRyZXNzU2NoZW1hW107XG4gIGJhbmtpbmdzPzogQmFua2luZ1NjaGVtYVtdO1xuICBkb2N1bWVudHM/OiBEb2N1bWVudFNjaGVtYVtdO1xuICBwaG9uZXM/OiBQaG9uZVNjaGVtYVtdO1xuICBzdGF0ZXM/OiBDb25zdW1lclN0YXRlU2NoZW1hW107XG59XG5cbmV4cG9ydCBjbGFzcyBDb25zdW1lciBleHRlbmRzIEJhc2VNb2RlbCBpbXBsZW1lbnRzIENvbnN1bWVyU2NoZW1hIHtcbiAgdXNlcj86IFVzZXIgPSB1bmRlZmluZWQ7XG4gIHRheElkPzogc3RyaW5nID0gdW5kZWZpbmVkO1xuXG4gIEBJc05vdEVtcHR5KClcbiAgQElzRW51bShDb25zdW1lclN0YXR1cylcbiAgc3RhdHVzOiBDb25zdW1lclN0YXR1cyA9IHVuZGVmaW5lZDtcblxuICBtb3RoZXJOYW1lOiBzdHJpbmc7XG4gIGJpcnRoZGF5OiBEYXRlO1xuICBzdGF0ZXM/OiBDb25zdW1lclN0YXRlW10gPSB1bmRlZmluZWQ7XG4gIGFkZHJlc3Nlcz86IEFkZHJlc3NbXSA9IHVuZGVmaW5lZDtcbiAgYmFua2luZ3M/OiBCYW5raW5nW10gPSB1bmRlZmluZWQ7XG4gIGRvY3VtZW50cz86IERvY3VtZW50W10gPSB1bmRlZmluZWQ7XG4gIHBob25lcz86IFBob25lW10gPSB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IoZGF0YTogUGFydGlhbDxDb25zdW1lclNjaGVtYT4pIHtcbiAgICBzdXBlcihkYXRhKTtcblxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XG5cbiAgICB0aGlzLmJpcnRoZGF5ID0gZGF0YS5iaXJ0aGRheSAmJiBuZXcgRGF0ZShkYXRhLmJpcnRoZGF5KTtcbiAgICB0aGlzLnVzZXIgPSBkYXRhLnVzZXIgJiYgbmV3IFVzZXIoZGF0YS51c2VyKTtcbiAgICB0aGlzLnN0YXRlcyA9IGRhdGEuc3RhdGVzICYmIGRhdGEuc3RhdGVzLm1hcChzdGF0ZSA9PiBuZXcgQ29uc3VtZXJTdGF0ZShzdGF0ZSkpO1xuICAgIHRoaXMuYWRkcmVzc2VzID0gZGF0YS5hZGRyZXNzZXMgJiYgZGF0YS5hZGRyZXNzZXMubWFwKGFkZHJlc3MgPT4gbmV3IEFkZHJlc3MoYWRkcmVzcykpO1xuICAgIHRoaXMuYmFua2luZ3MgPSBkYXRhLmJhbmtpbmdzICYmIGRhdGEuYmFua2luZ3MubWFwKGJhbmtpbmcgPT4gbmV3IEJhbmtpbmcoYmFua2luZykpO1xuICAgIHRoaXMuZG9jdW1lbnRzID0gZGF0YS5kb2N1bWVudHMgJiYgZGF0YS5kb2N1bWVudHMubWFwKGRvY3VtZW50ID0+IG5ldyBEb2N1bWVudChkb2N1bWVudCkpO1xuICAgIHRoaXMucGhvbmVzID0gZGF0YS5waG9uZXMgJiYgZGF0YS5waG9uZXMubWFwKHBob25lID0+IG5ldyBQaG9uZShwaG9uZSkpO1xuICB9XG59XG4iXX0=