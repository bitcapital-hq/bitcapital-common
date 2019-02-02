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
const class_validator_1 = require("../../../node_modules/class-validator");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFua1RyYW5zZmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL21vZGVscy9QYXltZW50L0JhbmtUcmFuc2Zlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHVFQUFtRztBQUNuRywyRUFBbUU7QUFRbkUsTUFBYSxZQUFZO0lBS3ZCLFlBQVksSUFBaUM7UUFKL0IsZ0JBQVcsR0FBNEIsU0FBUyxDQUFDO1FBQ2pELGtCQUFhLEdBQVcsU0FBUyxDQUFDO1FBQ2xDLGtCQUFhLEdBQVcsU0FBUyxDQUFDO1FBRzlDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7Q0FDRjtBQVBlO0lBQWIsNEJBQVUsRUFBRTs4QkFBYyxpREFBdUI7aURBQWE7QUFDakQ7SUFBYiw0QkFBVSxFQUFFOzttREFBbUM7QUFDbEM7SUFBYiw0QkFBVSxFQUFFOzttREFBbUM7QUFIbEQsb0NBUUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYW5rVHJhbnNmZXJEZXN0aW5hdGlvbiwgQmFua1RyYW5zZmVyRGVzdGluYXRpb25TY2hlbWEgfSBmcm9tIFwiLi9CYW5rVHJhbnNmZXJEZXN0aW5hdGlvblwiO1xuaW1wb3J0IHsgSXNOb3RFbXB0eSB9IGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2xhc3MtdmFsaWRhdG9yXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFua1RyYW5zZmVyU2NoZW1hIHtcbiAgZGVzdGluYXRpb246IEJhbmtUcmFuc2ZlckRlc3RpbmF0aW9uU2NoZW1hO1xuICBpZGVudGlmaWNhdG9yOiBudW1iZXI7XG4gIHN1Yklzc3VlckNvZGU6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIEJhbmtUcmFuc2ZlciBpbXBsZW1lbnRzIEJhbmtUcmFuc2ZlclNjaGVtYSB7XG4gIEBJc05vdEVtcHR5KCkgZGVzdGluYXRpb246IEJhbmtUcmFuc2ZlckRlc3RpbmF0aW9uID0gdW5kZWZpbmVkO1xuICBASXNOb3RFbXB0eSgpIGlkZW50aWZpY2F0b3I6IG51bWJlciA9IHVuZGVmaW5lZDtcbiAgQElzTm90RW1wdHkoKSBzdWJJc3N1ZXJDb2RlOiBudW1iZXIgPSB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IoZGF0YTogUGFydGlhbDxCYW5rVHJhbnNmZXJTY2hlbWE+KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcbiAgfVxufVxuIl19