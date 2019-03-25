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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uc3VtZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvbW9kZWxzL0NvbnN1bWVyL0NvbnN1bWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscURBQWlFO0FBQ2pFLHFDQUF3RDtBQUN4RCxrQ0FBMkM7QUFDM0MsdUNBQW1EO0FBQ25ELHVDQUFtRDtBQUNuRCxtREFBcUU7QUFDckUscURBQWtEO0FBQ2xELHlDQUFzRDtBQUN0RCxtQ0FBNkM7QUFDN0MsK0NBQTRDO0FBa0I1QyxNQUFhLFFBQVMsU0FBUSxnQkFBUztJQXNCckMsWUFBWSxJQUE2QjtRQUN2QyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUF0QmQsU0FBSSxHQUFVLFNBQVMsQ0FBQztRQUN4QixVQUFLLEdBQVksU0FBUyxDQUFDO1FBSTNCLFNBQUksR0FBZ0IsU0FBUyxDQUFDO1FBRWhCLGdCQUFXLEdBQWlCLFNBQVMsQ0FBQztRQUlwRCxXQUFNLEdBQW1CLFNBQVMsQ0FBQztRQUluQyxXQUFNLEdBQXFCLFNBQVMsQ0FBQztRQUNyQyxjQUFTLEdBQWUsU0FBUyxDQUFDO1FBQ2xDLGFBQVEsR0FBZSxTQUFTLENBQUM7UUFDakMsY0FBUyxHQUFnQixTQUFTLENBQUM7UUFDbkMsV0FBTSxHQUFhLFNBQVMsQ0FBQztRQUszQixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUUxQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLFdBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSw2QkFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDaEYsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxpQkFBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDdkYsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxpQkFBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxtQkFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDMUYsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxhQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUMxRSxDQUFDO0NBQ0Y7QUE3QkM7SUFGQyw0QkFBVSxFQUFFO0lBQ1osd0JBQU0sQ0FBQyx5QkFBVyxDQUFDOztzQ0FDVTtBQUVoQjtJQUFiLDRCQUFVLEVBQUU7OzZDQUF1QztBQUlwRDtJQUZDLDRCQUFVLEVBQUU7SUFDWix3QkFBTSxDQUFDLCtCQUFjLENBQUM7O3dDQUNZO0FBWnJDLDRCQW1DQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElzRW51bSwgSXNOb3RFbXB0eSwgSXNPcHRpb25hbCB9IGZyb20gXCJjbGFzcy12YWxpZGF0b3JcIjtcbmltcG9ydCB7IEJhc2VNb2RlbCwgQmFzZU1vZGVsU2NoZW1hIH0gZnJvbSBcIi4uLy4uL2Jhc2VcIjtcbmltcG9ydCB7IFVzZXIsIFVzZXJTY2hlbWEgfSBmcm9tIFwiLi4vVXNlclwiO1xuaW1wb3J0IHsgQWRkcmVzcywgQWRkcmVzc1NjaGVtYSB9IGZyb20gXCIuL0FkZHJlc3NcIjtcbmltcG9ydCB7IEJhbmtpbmcsIEJhbmtpbmdTY2hlbWEgfSBmcm9tIFwiLi9CYW5raW5nXCI7XG5pbXBvcnQgeyBDb25zdW1lclN0YXRlLCBDb25zdW1lclN0YXRlU2NoZW1hIH0gZnJvbSBcIi4vQ29uc3VtZXJTdGF0ZVwiO1xuaW1wb3J0IHsgQ29uc3VtZXJTdGF0dXMgfSBmcm9tIFwiLi9Db25zdW1lclN0YXR1c1wiO1xuaW1wb3J0IHsgRG9jdW1lbnQsIERvY3VtZW50U2NoZW1hIH0gZnJvbSBcIi4vRG9jdW1lbnRcIjtcbmltcG9ydCB7IFBob25lLCBQaG9uZVNjaGVtYSB9IGZyb20gXCIuL1Bob25lXCI7XG5pbXBvcnQgeyBBY2NvdW50VHlwZSB9IGZyb20gXCIuL0FjY291bnRUeXBlXCI7XG5pbXBvcnQgeyBDb21wYW55RGF0YSB9IGZyb20gXCIuL0NvbXBhbnlEYXRhXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uc3VtZXJTY2hlbWEgZXh0ZW5kcyBCYXNlTW9kZWxTY2hlbWEge1xuICB1c2VyPzogVXNlclNjaGVtYTtcbiAgdGF4SWQ/OiBzdHJpbmc7XG4gIHR5cGU6IEFjY291bnRUeXBlO1xuICBjb21wYW55RGF0YT86IENvbXBhbnlEYXRhO1xuICBzdGF0dXM6IENvbnN1bWVyU3RhdHVzO1xuICBtb3RoZXJOYW1lPzogc3RyaW5nO1xuICBiaXJ0aGRheTogRGF0ZTtcbiAgYWRkcmVzc2VzPzogQWRkcmVzc1NjaGVtYVtdO1xuICBiYW5raW5ncz86IEJhbmtpbmdTY2hlbWFbXTtcbiAgZG9jdW1lbnRzPzogRG9jdW1lbnRTY2hlbWFbXTtcbiAgcGhvbmVzPzogUGhvbmVTY2hlbWFbXTtcbiAgc3RhdGVzPzogQ29uc3VtZXJTdGF0ZVNjaGVtYVtdO1xufVxuXG5leHBvcnQgY2xhc3MgQ29uc3VtZXIgZXh0ZW5kcyBCYXNlTW9kZWwgaW1wbGVtZW50cyBDb25zdW1lclNjaGVtYSB7XG4gIHVzZXI/OiBVc2VyID0gdW5kZWZpbmVkO1xuICB0YXhJZD86IHN0cmluZyA9IHVuZGVmaW5lZDtcblxuICBASXNOb3RFbXB0eSgpXG4gIEBJc0VudW0oQWNjb3VudFR5cGUpXG4gIHR5cGU6IEFjY291bnRUeXBlID0gdW5kZWZpbmVkO1xuXG4gIEBJc09wdGlvbmFsKCkgY29tcGFueURhdGE/OiBDb21wYW55RGF0YSA9IHVuZGVmaW5lZDtcblxuICBASXNOb3RFbXB0eSgpXG4gIEBJc0VudW0oQ29uc3VtZXJTdGF0dXMpXG4gIHN0YXR1czogQ29uc3VtZXJTdGF0dXMgPSB1bmRlZmluZWQ7XG5cbiAgbW90aGVyTmFtZT86IHN0cmluZztcbiAgYmlydGhkYXk6IERhdGU7XG4gIHN0YXRlcz86IENvbnN1bWVyU3RhdGVbXSA9IHVuZGVmaW5lZDtcbiAgYWRkcmVzc2VzPzogQWRkcmVzc1tdID0gdW5kZWZpbmVkO1xuICBiYW5raW5ncz86IEJhbmtpbmdbXSA9IHVuZGVmaW5lZDtcbiAgZG9jdW1lbnRzPzogRG9jdW1lbnRbXSA9IHVuZGVmaW5lZDtcbiAgcGhvbmVzPzogUGhvbmVbXSA9IHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3RvcihkYXRhOiBQYXJ0aWFsPENvbnN1bWVyU2NoZW1hPikge1xuICAgIHN1cGVyKGRhdGEpO1xuXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcblxuICAgIHRoaXMuYmlydGhkYXkgPSBkYXRhLmJpcnRoZGF5ICYmIG5ldyBEYXRlKGRhdGEuYmlydGhkYXkpO1xuICAgIHRoaXMudXNlciA9IGRhdGEudXNlciAmJiBuZXcgVXNlcihkYXRhLnVzZXIpO1xuICAgIHRoaXMuc3RhdGVzID0gZGF0YS5zdGF0ZXMgJiYgZGF0YS5zdGF0ZXMubWFwKHN0YXRlID0+IG5ldyBDb25zdW1lclN0YXRlKHN0YXRlKSk7XG4gICAgdGhpcy5hZGRyZXNzZXMgPSBkYXRhLmFkZHJlc3NlcyAmJiBkYXRhLmFkZHJlc3Nlcy5tYXAoYWRkcmVzcyA9PiBuZXcgQWRkcmVzcyhhZGRyZXNzKSk7XG4gICAgdGhpcy5iYW5raW5ncyA9IGRhdGEuYmFua2luZ3MgJiYgZGF0YS5iYW5raW5ncy5tYXAoYmFua2luZyA9PiBuZXcgQmFua2luZyhiYW5raW5nKSk7XG4gICAgdGhpcy5kb2N1bWVudHMgPSBkYXRhLmRvY3VtZW50cyAmJiBkYXRhLmRvY3VtZW50cy5tYXAoZG9jdW1lbnQgPT4gbmV3IERvY3VtZW50KGRvY3VtZW50KSk7XG4gICAgdGhpcy5waG9uZXMgPSBkYXRhLnBob25lcyAmJiBkYXRhLnBob25lcy5tYXAocGhvbmUgPT4gbmV3IFBob25lKHBob25lKSk7XG4gIH1cbn1cbiJdfQ==