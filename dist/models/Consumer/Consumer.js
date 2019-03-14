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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uc3VtZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvbW9kZWxzL0NvbnN1bWVyL0NvbnN1bWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscURBQXFEO0FBQ3JELHFDQUF3RDtBQUN4RCxrQ0FBMkM7QUFDM0MsdUNBQW1EO0FBQ25ELHVDQUFtRDtBQUNuRCxtREFBcUU7QUFDckUscURBQWtEO0FBQ2xELHlDQUFzRDtBQUN0RCxtQ0FBNkM7QUFhN0MsTUFBYSxRQUFTLFNBQVEsZ0JBQVM7SUFjckMsWUFBWSxJQUE2QjtRQUN2QyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFkZCxTQUFJLEdBQVUsU0FBUyxDQUFDO1FBQ3hCLFVBQUssR0FBWSxTQUFTLENBQUM7UUFJM0IsV0FBTSxHQUFtQixTQUFTLENBQUM7UUFFbkMsV0FBTSxHQUFxQixTQUFTLENBQUM7UUFDckMsY0FBUyxHQUFlLFNBQVMsQ0FBQztRQUNsQyxhQUFRLEdBQWUsU0FBUyxDQUFDO1FBQ2pDLGNBQVMsR0FBZ0IsU0FBUyxDQUFDO1FBQ25DLFdBQU0sR0FBYSxTQUFTLENBQUM7UUFLM0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFMUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksV0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLDZCQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNoRixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLGlCQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUN2RixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLGlCQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLG1CQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUMxRixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLGFBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzFFLENBQUM7Q0FDRjtBQXBCQztJQUZDLDRCQUFVLEVBQUU7SUFDWix3QkFBTSxDQUFDLCtCQUFjLENBQUM7O3dDQUNZO0FBTnJDLDRCQTBCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElzRW51bSwgSXNOb3RFbXB0eSB9IGZyb20gXCJjbGFzcy12YWxpZGF0b3JcIjtcclxuaW1wb3J0IHsgQmFzZU1vZGVsLCBCYXNlTW9kZWxTY2hlbWEgfSBmcm9tIFwiLi4vLi4vYmFzZVwiO1xyXG5pbXBvcnQgeyBVc2VyLCBVc2VyU2NoZW1hIH0gZnJvbSBcIi4uL1VzZXJcIjtcclxuaW1wb3J0IHsgQWRkcmVzcywgQWRkcmVzc1NjaGVtYSB9IGZyb20gXCIuL0FkZHJlc3NcIjtcclxuaW1wb3J0IHsgQmFua2luZywgQmFua2luZ1NjaGVtYSB9IGZyb20gXCIuL0JhbmtpbmdcIjtcclxuaW1wb3J0IHsgQ29uc3VtZXJTdGF0ZSwgQ29uc3VtZXJTdGF0ZVNjaGVtYSB9IGZyb20gXCIuL0NvbnN1bWVyU3RhdGVcIjtcclxuaW1wb3J0IHsgQ29uc3VtZXJTdGF0dXMgfSBmcm9tIFwiLi9Db25zdW1lclN0YXR1c1wiO1xyXG5pbXBvcnQgeyBEb2N1bWVudCwgRG9jdW1lbnRTY2hlbWEgfSBmcm9tIFwiLi9Eb2N1bWVudFwiO1xyXG5pbXBvcnQgeyBQaG9uZSwgUGhvbmVTY2hlbWEgfSBmcm9tIFwiLi9QaG9uZVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb25zdW1lclNjaGVtYSBleHRlbmRzIEJhc2VNb2RlbFNjaGVtYSB7XHJcbiAgc3RhdHVzPzogQ29uc3VtZXJTdGF0dXM7XHJcbiAgdXNlcj86IFVzZXJTY2hlbWE7XHJcbiAgdGF4SWQ/OiBzdHJpbmc7XHJcbiAgYWRkcmVzc2VzPzogQWRkcmVzc1NjaGVtYVtdO1xyXG4gIGJhbmtpbmdzPzogQmFua2luZ1NjaGVtYVtdO1xyXG4gIGRvY3VtZW50cz86IERvY3VtZW50U2NoZW1hW107XHJcbiAgcGhvbmVzPzogUGhvbmVTY2hlbWFbXTtcclxuICBzdGF0ZXM/OiBDb25zdW1lclN0YXRlU2NoZW1hW107XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb25zdW1lciBleHRlbmRzIEJhc2VNb2RlbCBpbXBsZW1lbnRzIENvbnN1bWVyU2NoZW1hIHtcclxuICB1c2VyPzogVXNlciA9IHVuZGVmaW5lZDtcclxuICB0YXhJZD86IHN0cmluZyA9IHVuZGVmaW5lZDtcclxuXHJcbiAgQElzTm90RW1wdHkoKVxyXG4gIEBJc0VudW0oQ29uc3VtZXJTdGF0dXMpXHJcbiAgc3RhdHVzOiBDb25zdW1lclN0YXR1cyA9IHVuZGVmaW5lZDtcclxuXHJcbiAgc3RhdGVzPzogQ29uc3VtZXJTdGF0ZVtdID0gdW5kZWZpbmVkO1xyXG4gIGFkZHJlc3Nlcz86IEFkZHJlc3NbXSA9IHVuZGVmaW5lZDtcclxuICBiYW5raW5ncz86IEJhbmtpbmdbXSA9IHVuZGVmaW5lZDtcclxuICBkb2N1bWVudHM/OiBEb2N1bWVudFtdID0gdW5kZWZpbmVkO1xyXG4gIHBob25lcz86IFBob25lW10gPSB1bmRlZmluZWQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRhdGE6IFBhcnRpYWw8Q29uc3VtZXJTY2hlbWE+KSB7XHJcbiAgICBzdXBlcihkYXRhKTtcclxuXHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xyXG5cclxuICAgIHRoaXMudXNlciA9IGRhdGEudXNlciAmJiBuZXcgVXNlcihkYXRhLnVzZXIpO1xyXG4gICAgdGhpcy5zdGF0ZXMgPSBkYXRhLnN0YXRlcyAmJiBkYXRhLnN0YXRlcy5tYXAoc3RhdGUgPT4gbmV3IENvbnN1bWVyU3RhdGUoc3RhdGUpKTtcclxuICAgIHRoaXMuYWRkcmVzc2VzID0gZGF0YS5hZGRyZXNzZXMgJiYgZGF0YS5hZGRyZXNzZXMubWFwKGFkZHJlc3MgPT4gbmV3IEFkZHJlc3MoYWRkcmVzcykpO1xyXG4gICAgdGhpcy5iYW5raW5ncyA9IGRhdGEuYmFua2luZ3MgJiYgZGF0YS5iYW5raW5ncy5tYXAoYmFua2luZyA9PiBuZXcgQmFua2luZyhiYW5raW5nKSk7XHJcbiAgICB0aGlzLmRvY3VtZW50cyA9IGRhdGEuZG9jdW1lbnRzICYmIGRhdGEuZG9jdW1lbnRzLm1hcChkb2N1bWVudCA9PiBuZXcgRG9jdW1lbnQoZG9jdW1lbnQpKTtcclxuICAgIHRoaXMucGhvbmVzID0gZGF0YS5waG9uZXMgJiYgZGF0YS5waG9uZXMubWFwKHBob25lID0+IG5ldyBQaG9uZShwaG9uZSkpO1xyXG4gIH1cclxufVxyXG4iXX0=