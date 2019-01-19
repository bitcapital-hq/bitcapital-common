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
class Recipient extends base_1.BaseModel {
    constructor(data) {
        super(data);
        this.amount = undefined;
        this.destination = undefined;
    }
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsNumberString(),
    __metadata("design:type", String)
], Recipient.prototype, "amount", void 0);
__decorate([
    class_validator_1.IsUUID(),
    __metadata("design:type", Object)
], Recipient.prototype, "destination", void 0);
exports.default = Recipient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVjaXBpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL21vZGVscy9QYXltZW50L1JlY2lwaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBLHFEQUFxRTtBQUNyRSxxQ0FBd0Q7QUFPeEQsZUFBK0IsU0FBUSxnQkFBUztJQU85QyxZQUFZLElBQThCO1FBQ3hDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUxkLFdBQU0sR0FBVyxTQUFTLENBQUM7UUFFakIsZ0JBQVcsR0FBb0IsU0FBUyxDQUFDO0lBSW5ELENBQUM7Q0FDRjtBQVBDO0lBRkMsNEJBQVUsRUFBRTtJQUNaLGdDQUFjLEVBQUU7O3lDQUNVO0FBRWpCO0lBQVQsd0JBQU0sRUFBRTs7OENBQTBDO0FBTHJELDRCQVVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFdhbGxldCBmcm9tIFwiLi4vV2FsbGV0L1dhbGxldFwiO1xuaW1wb3J0IHsgSXNOb3RFbXB0eSwgSXNOdW1iZXJTdHJpbmcsIElzVVVJRCB9IGZyb20gXCJjbGFzcy12YWxpZGF0b3JcIjtcbmltcG9ydCB7IEJhc2VNb2RlbFNjaGVtYSwgQmFzZU1vZGVsIH0gZnJvbSBcIi4uLy4uL2Jhc2VcIjtcblxuZXhwb3J0IGludGVyZmFjZSBSZWNpcGllbnRTY2hlbWEgZXh0ZW5kcyBCYXNlTW9kZWxTY2hlbWEge1xuICBhbW91bnQ6IHN0cmluZztcbiAgZGVzdGluYXRpb246IFdhbGxldCB8IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjaXBpZW50IGV4dGVuZHMgQmFzZU1vZGVsIGltcGxlbWVudHMgUmVjaXBpZW50U2NoZW1hIHtcbiAgQElzTm90RW1wdHkoKVxuICBASXNOdW1iZXJTdHJpbmcoKVxuICBhbW91bnQ6IHN0cmluZyA9IHVuZGVmaW5lZDtcblxuICBASXNVVUlEKCkgZGVzdGluYXRpb246IFdhbGxldCB8IHN0cmluZyA9IHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3RvcihkYXRhOiBQYXJ0aWFsPFJlY2lwaWVudFNjaGVtYT4pIHtcbiAgICBzdXBlcihkYXRhKTtcbiAgfVxufVxuIl19