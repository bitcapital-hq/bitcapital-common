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
const BankTransferDestination_1 = require("./BankTransferDestination");
const class_validator_1 = require("class-validator");
class BankTransfer {
    constructor(data) {
        this.destination = undefined;
        this.identificator = undefined;
        this.subIssuerCode = undefined;
        Object.assign(this, data);
    }
}
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", BankTransferDestination_1.BankTransferDestination)
], BankTransfer.prototype, "destination", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], BankTransfer.prototype, "identificator", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    __metadata("design:type", Number)
], BankTransfer.prototype, "subIssuerCode", void 0);
exports.BankTransfer = BankTransfer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFua1RyYW5zZmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL21vZGVscy9QYXltZW50L0JhbmtUcmFuc2Zlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHVFQUFtRztBQUNuRyxxREFBNkM7QUFRN0MsTUFBYSxZQUFZO0lBS3ZCLFlBQVksSUFBaUM7UUFKL0IsZ0JBQVcsR0FBNEIsU0FBUyxDQUFDO1FBQ2pELGtCQUFhLEdBQVcsU0FBUyxDQUFDO1FBQ2xDLGtCQUFhLEdBQVcsU0FBUyxDQUFDO1FBRzlDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7Q0FDRjtBQVBlO0lBQWIsNEJBQVUsRUFBRTs4QkFBYyxpREFBdUI7aURBQWE7QUFDakQ7SUFBYiw0QkFBVSxFQUFFOzttREFBbUM7QUFDbEM7SUFBYiw0QkFBVSxFQUFFOzttREFBbUM7QUFIbEQsb0NBUUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYW5rVHJhbnNmZXJEZXN0aW5hdGlvbiwgQmFua1RyYW5zZmVyRGVzdGluYXRpb25TY2hlbWEgfSBmcm9tIFwiLi9CYW5rVHJhbnNmZXJEZXN0aW5hdGlvblwiO1xyXG5pbXBvcnQgeyBJc05vdEVtcHR5IH0gZnJvbSBcImNsYXNzLXZhbGlkYXRvclwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCYW5rVHJhbnNmZXJTY2hlbWEge1xyXG4gIGRlc3RpbmF0aW9uOiBCYW5rVHJhbnNmZXJEZXN0aW5hdGlvblNjaGVtYTtcclxuICBpZGVudGlmaWNhdG9yOiBudW1iZXI7XHJcbiAgc3ViSXNzdWVyQ29kZTogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQmFua1RyYW5zZmVyIGltcGxlbWVudHMgQmFua1RyYW5zZmVyU2NoZW1hIHtcclxuICBASXNOb3RFbXB0eSgpIGRlc3RpbmF0aW9uOiBCYW5rVHJhbnNmZXJEZXN0aW5hdGlvbiA9IHVuZGVmaW5lZDtcclxuICBASXNOb3RFbXB0eSgpIGlkZW50aWZpY2F0b3I6IG51bWJlciA9IHVuZGVmaW5lZDtcclxuICBASXNOb3RFbXB0eSgpIHN1Yklzc3VlckNvZGU6IG51bWJlciA9IHVuZGVmaW5lZDtcclxuXHJcbiAgY29uc3RydWN0b3IoZGF0YTogUGFydGlhbDxCYW5rVHJhbnNmZXJTY2hlbWE+KSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xyXG4gIH1cclxufVxyXG4iXX0=