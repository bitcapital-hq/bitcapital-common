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
class BankTransferDestination {
    constructor(data) {
        this.account = undefined;
        this.accountDigit = undefined;
        this.agency = undefined;
        this.agencyDigit = undefined;
        this.bank = undefined;
        this.name = undefined;
        this.taxIdNumber = undefined;
        this.type = undefined;
        Object.assign(this, data);
    }
}
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], BankTransferDestination.prototype, "account", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], BankTransferDestination.prototype, "accountDigit", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], BankTransferDestination.prototype, "agency", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], BankTransferDestination.prototype, "agencyDigit", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], BankTransferDestination.prototype, "bank", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], BankTransferDestination.prototype, "name", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], BankTransferDestination.prototype, "taxIdNumber", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", String)
], BankTransferDestination.prototype, "type", void 0);
exports.BankTransferDestination = BankTransferDestination;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFua1RyYW5zZmVyRGVzdGluYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvbW9kZWxzL1BheW1lbnQvQmFua1RyYW5zZmVyRGVzdGluYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxxREFBNkM7QUFhN0MsTUFBYSx1QkFBdUI7SUFVbEMsWUFBWSxJQUE0QztRQVQxQyxZQUFPLEdBQVcsU0FBUyxDQUFDO1FBQzVCLGlCQUFZLEdBQVcsU0FBUyxDQUFDO1FBQ2pDLFdBQU0sR0FBVyxTQUFTLENBQUM7UUFDM0IsZ0JBQVcsR0FBVyxTQUFTLENBQUM7UUFDaEMsU0FBSSxHQUFXLFNBQVMsQ0FBQztRQUN6QixTQUFJLEdBQVcsU0FBUyxDQUFDO1FBQ3pCLGdCQUFXLEdBQVcsU0FBUyxDQUFDO1FBQ2hDLFNBQUksR0FBVyxTQUFTLENBQUM7UUFHckMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztDQUNGO0FBWmU7SUFBYiw0QkFBVSxFQUFFOzt3REFBNkI7QUFDNUI7SUFBYiw0QkFBVSxFQUFFOzs2REFBa0M7QUFDakM7SUFBYiw0QkFBVSxFQUFFOzt1REFBNEI7QUFDM0I7SUFBYiw0QkFBVSxFQUFFOzs0REFBaUM7QUFDaEM7SUFBYiw0QkFBVSxFQUFFOztxREFBMEI7QUFDekI7SUFBYiw0QkFBVSxFQUFFOztxREFBMEI7QUFDekI7SUFBYiw0QkFBVSxFQUFFOzs0REFBaUM7QUFDaEM7SUFBYiw0QkFBVSxFQUFFOztxREFBMEI7QUFSekMsMERBYUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJc05vdEVtcHR5IH0gZnJvbSBcImNsYXNzLXZhbGlkYXRvclwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJhbmtUcmFuc2ZlckRlc3RpbmF0aW9uU2NoZW1hIHtcbiAgYWNjb3VudDogbnVtYmVyO1xuICBhY2NvdW50RGlnaXQ6IHN0cmluZztcbiAgYWdlbmN5OiBudW1iZXI7XG4gIGFnZW5jeURpZ2l0OiBzdHJpbmc7XG4gIGJhbms6IG51bWJlcjtcbiAgbmFtZTogc3RyaW5nO1xuICB0YXhJZE51bWJlcjogc3RyaW5nO1xuICB0eXBlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBCYW5rVHJhbnNmZXJEZXN0aW5hdGlvbiBpbXBsZW1lbnRzIEJhbmtUcmFuc2ZlckRlc3RpbmF0aW9uU2NoZW1hIHtcbiAgQElzTm90RW1wdHkoKSBhY2NvdW50OiBudW1iZXIgPSB1bmRlZmluZWQ7XG4gIEBJc05vdEVtcHR5KCkgYWNjb3VudERpZ2l0OiBzdHJpbmcgPSB1bmRlZmluZWQ7XG4gIEBJc05vdEVtcHR5KCkgYWdlbmN5OiBudW1iZXIgPSB1bmRlZmluZWQ7XG4gIEBJc05vdEVtcHR5KCkgYWdlbmN5RGlnaXQ6IHN0cmluZyA9IHVuZGVmaW5lZDtcbiAgQElzTm90RW1wdHkoKSBiYW5rOiBudW1iZXIgPSB1bmRlZmluZWQ7XG4gIEBJc05vdEVtcHR5KCkgbmFtZTogc3RyaW5nID0gdW5kZWZpbmVkO1xuICBASXNOb3RFbXB0eSgpIHRheElkTnVtYmVyOiBzdHJpbmcgPSB1bmRlZmluZWQ7XG4gIEBJc05vdEVtcHR5KCkgdHlwZTogc3RyaW5nID0gdW5kZWZpbmVkO1xuXG4gIGNvbnN0cnVjdG9yKGRhdGE6IFBhcnRpYWw8QmFua1RyYW5zZmVyRGVzdGluYXRpb25TY2hlbWE+KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcbiAgfVxufVxuIl19