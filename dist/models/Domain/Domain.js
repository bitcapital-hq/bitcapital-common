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
var DomainRole;
(function (DomainRole) {
    DomainRole["ROOT"] = "root";
    DomainRole["COMMON"] = "common";
})(DomainRole = exports.DomainRole || (exports.DomainRole = {}));
class Domain extends base_1.BaseModel {
    constructor(data) {
        super(data);
        this.name = undefined;
        this.role = undefined;
        this.slug = undefined;
        this.urls = undefined;
        this.users = undefined;
        this.settings = undefined;
        this.test = undefined;
    }
}
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], Domain.prototype, "name", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsEnum(DomainRole),
    __metadata("design:type", String)
], Domain.prototype, "role", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsAlphanumeric(),
    __metadata("design:type", String)
], Domain.prototype, "slug", void 0);
__decorate([
    class_validator_1.IsFQDN({}, { each: true }),
    __metadata("design:type", Array)
], Domain.prototype, "urls", void 0);
exports.default = Domain;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9tYWluLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL21vZGVscy9Eb21haW4vRG9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscURBQTZFO0FBQzdFLHFDQUF3RDtBQUl4RCxJQUFZLFVBR1g7QUFIRCxXQUFZLFVBQVU7SUFDcEIsMkJBQWEsQ0FBQTtJQUNiLCtCQUFpQixDQUFBO0FBQ25CLENBQUMsRUFIVyxVQUFVLEdBQVYsa0JBQVUsS0FBVixrQkFBVSxRQUdyQjtBQVlELE1BQXFCLE1BQU8sU0FBUSxnQkFBUztJQWtCM0MsWUFBWSxJQUEyQjtRQUNyQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFsQkEsU0FBSSxHQUFXLFNBQVMsQ0FBQztRQUl2QyxTQUFJLEdBQWUsU0FBUyxDQUFDO1FBSTdCLFNBQUksR0FBWSxTQUFTLENBQUM7UUFHMUIsU0FBSSxHQUFjLFNBQVMsQ0FBQztRQUU1QixVQUFLLEdBQWtCLFNBQVMsQ0FBQztRQUNqQyxhQUFRLEdBQW1CLFNBQVMsQ0FBQztRQUNyQyxTQUFJLEdBQWEsU0FBUyxDQUFDO0lBSTNCLENBQUM7Q0FDRjtBQXBCZTtJQUFiLDRCQUFVLEVBQUU7O29DQUEwQjtBQUl2QztJQUZDLDRCQUFVLEVBQUU7SUFDWix3QkFBTSxDQUFDLFVBQVUsQ0FBQzs7b0NBQ1U7QUFJN0I7SUFGQyw0QkFBVSxFQUFFO0lBQ1osZ0NBQWMsRUFBRTs7b0NBQ1M7QUFHMUI7SUFEQyx3QkFBTSxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQzs7b0NBQ0M7QUFaOUIseUJBcUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSXNBbHBoYW51bWVyaWMsIElzRW51bSwgSXNGUUROLCBJc05vdEVtcHR5IH0gZnJvbSBcImNsYXNzLXZhbGlkYXRvclwiO1xuaW1wb3J0IHsgQmFzZU1vZGVsLCBCYXNlTW9kZWxTY2hlbWEgfSBmcm9tIFwiLi4vLi4vYmFzZVwiO1xuaW1wb3J0IHsgVXNlciwgVXNlclNjaGVtYSB9IGZyb20gXCIuLi9Vc2VyXCI7XG5pbXBvcnQgeyBEb21haW5TZXR0aW5nc1NjaGVtYSwgRG9tYWluU2V0dGluZ3MgfSBmcm9tIFwiLi9Eb21haW5TZXR0aW5nc1wiO1xuXG5leHBvcnQgZW51bSBEb21haW5Sb2xlIHtcbiAgUk9PVCA9IFwicm9vdFwiLFxuICBDT01NT04gPSBcImNvbW1vblwiXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRG9tYWluU2NoZW1hIGV4dGVuZHMgQmFzZU1vZGVsU2NoZW1hIHtcbiAgbmFtZTogc3RyaW5nO1xuICByb2xlOiBEb21haW5Sb2xlO1xuICB0ZXN0PzogYm9vbGVhbjtcbiAgdXJscz86IHN0cmluZ1tdO1xuICBwb3N0YmFja1VybD86IHN0cmluZztcbiAgdXNlcnM/OiBVc2VyU2NoZW1hW107XG4gIHNldHRpbmdzOiBEb21haW5TZXR0aW5nc1NjaGVtYTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRG9tYWluIGV4dGVuZHMgQmFzZU1vZGVsIGltcGxlbWVudHMgRG9tYWluU2NoZW1hIHtcbiAgQElzTm90RW1wdHkoKSBuYW1lOiBzdHJpbmcgPSB1bmRlZmluZWQ7XG5cbiAgQElzTm90RW1wdHkoKVxuICBASXNFbnVtKERvbWFpblJvbGUpXG4gIHJvbGU6IERvbWFpblJvbGUgPSB1bmRlZmluZWQ7XG5cbiAgQElzTm90RW1wdHkoKVxuICBASXNBbHBoYW51bWVyaWMoKVxuICBzbHVnPzogc3RyaW5nID0gdW5kZWZpbmVkO1xuXG4gIEBJc0ZRRE4oe30sIHsgZWFjaDogdHJ1ZSB9KVxuICB1cmxzPzogc3RyaW5nW10gPSB1bmRlZmluZWQ7XG5cbiAgdXNlcnM6IFVzZXJbXSB8IG51bGwgPSB1bmRlZmluZWQ7XG4gIHNldHRpbmdzOiBEb21haW5TZXR0aW5ncyA9IHVuZGVmaW5lZDtcbiAgdGVzdD86IGJvb2xlYW4gPSB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IoZGF0YTogUGFydGlhbDxEb21haW5TY2hlbWE+KSB7XG4gICAgc3VwZXIoZGF0YSk7XG4gIH1cbn1cbiJdfQ==