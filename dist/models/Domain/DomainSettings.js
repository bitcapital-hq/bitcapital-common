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
const DomainSettingsLocks_1 = require("./DomainSettingsLocks");
class DomainSettings {
    constructor(data = {}) {
        this.locks = undefined;
        Object.assign(this, data);
        this.locks = data.locks && new DomainSettingsLocks_1.DomainSettingsLocks(data.locks);
    }
}
__decorate([
    class_validator_1.ValidateNested(),
    __metadata("design:type", DomainSettingsLocks_1.DomainSettingsLocks)
], DomainSettings.prototype, "locks", void 0);
exports.DomainSettings = DomainSettings;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9tYWluU2V0dGluZ3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvbW9kZWxzL0RvbWFpbi9Eb21haW5TZXR0aW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHFEQUFpRDtBQUNqRCwrREFBNEQ7QUFTNUQsTUFBYSxjQUFjO0lBT3pCLFlBQVksT0FBZ0MsRUFBRTtRQUY1QixVQUFLLEdBQXdCLFNBQVMsQ0FBQztRQUd2RCxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSx5Q0FBbUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakUsQ0FBQztDQUNGO0FBTm1CO0lBQWpCLGdDQUFjLEVBQUU7OEJBQVEseUNBQW1COzZDQUFhO0FBTDNELHdDQVdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFsaWRhdGVOZXN0ZWQgfSBmcm9tIFwiY2xhc3MtdmFsaWRhdG9yXCI7XG5pbXBvcnQgeyBEb21haW5TZXR0aW5nc0xvY2tzIH0gZnJvbSBcIi4vRG9tYWluU2V0dGluZ3NMb2Nrc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIERvbWFpblNldHRpbmdzU2NoZW1hIHtcbiAgbG9nbz86IHN0cmluZztcbiAgcHJpbWFyeUNvbG9yPzogc3RyaW5nO1xuICB0aW50Q29sb3I/OiBzdHJpbmc7XG4gIGxvY2tzOiBEb21haW5TZXR0aW5nc0xvY2tzO1xufVxuXG5leHBvcnQgY2xhc3MgRG9tYWluU2V0dGluZ3MgaW1wbGVtZW50cyBEb21haW5TZXR0aW5nc1NjaGVtYSB7XG4gIGxvZ28/OiBzdHJpbmc7XG4gIHByaW1hcnlDb2xvcj86IHN0cmluZztcbiAgdGludENvbG9yPzogc3RyaW5nO1xuXG4gIEBWYWxpZGF0ZU5lc3RlZCgpIGxvY2tzOiBEb21haW5TZXR0aW5nc0xvY2tzID0gdW5kZWZpbmVkO1xuXG4gIGNvbnN0cnVjdG9yKGRhdGE6IFBhcnRpYWw8RG9tYWluU2V0dGluZ3M+ID0ge30pIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xuICAgIHRoaXMubG9ja3MgPSBkYXRhLmxvY2tzICYmIG5ldyBEb21haW5TZXR0aW5nc0xvY2tzKGRhdGEubG9ja3MpO1xuICB9XG59XG4iXX0=