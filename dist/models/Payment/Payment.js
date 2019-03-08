"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../base");
const Asset_1 = require("../Asset");
const Transaction_1 = require("../Transaction");
const Wallet_1 = require("../Wallet");
var PaymentType;
(function (PaymentType) {
    PaymentType["BOLETO"] = "boleto";
    PaymentType["CARD"] = "card";
    PaymentType["DEPOSIT"] = "deposit";
    PaymentType["WITHDRAWAL"] = "withdrawal";
    PaymentType["TRANSFER"] = "transfer";
    PaymentType["TRANSACTION_REVERSAL"] = "transaction_reversal";
    PaymentType["SERVICE_FEE"] = "service_fee";
})(PaymentType = exports.PaymentType || (exports.PaymentType = {}));
class Payment extends base_1.BaseModel {
    constructor(data = {}) {
        super(data);
        this.type = undefined;
        this.amount = undefined;
        Object.assign(this, data);
        this.transaction = data.transaction && new Transaction_1.Transaction(data.transaction);
        this.destination = data.destination && new Wallet_1.Wallet(data.destination);
        this.asset = data.asset && new Asset_1.Asset(data.asset);
    }
}
exports.Payment = Payment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGF5bWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9tb2RlbHMvUGF5bWVudC9QYXltZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQXdEO0FBQ3hELG9DQUE4QztBQUM5QyxnREFBZ0U7QUFDaEUsc0NBQWlEO0FBRWpELElBQVksV0FRWDtBQVJELFdBQVksV0FBVztJQUNyQixnQ0FBaUIsQ0FBQTtJQUNqQiw0QkFBYSxDQUFBO0lBQ2Isa0NBQW1CLENBQUE7SUFDbkIsd0NBQXlCLENBQUE7SUFDekIsb0NBQXFCLENBQUE7SUFDckIsNERBQTZDLENBQUE7SUFDN0MsMENBQTJCLENBQUE7QUFDN0IsQ0FBQyxFQVJXLFdBQVcsR0FBWCxtQkFBVyxLQUFYLG1CQUFXLFFBUXRCO0FBVUQsTUFBYSxPQUFRLFNBQVEsZ0JBQVM7SUFPcEMsWUFBWSxPQUErQixFQUFFO1FBQzNDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQVBkLFNBQUksR0FBZ0IsU0FBUyxDQUFDO1FBQzlCLFdBQU0sR0FBVyxTQUFTLENBQUM7UUFRekIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFMUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUkseUJBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksZUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxhQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25ELENBQUM7Q0FDRjtBQWhCRCwwQkFnQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlTW9kZWwsIEJhc2VNb2RlbFNjaGVtYSB9IGZyb20gXCIuLi8uLi9iYXNlXCI7XHJcbmltcG9ydCB7IEFzc2V0LCBBc3NldFNjaGVtYSB9IGZyb20gXCIuLi9Bc3NldFwiO1xyXG5pbXBvcnQgeyBUcmFuc2FjdGlvbiwgVHJhbnNhY3Rpb25TY2hlbWEgfSBmcm9tIFwiLi4vVHJhbnNhY3Rpb25cIjtcclxuaW1wb3J0IHsgV2FsbGV0LCBXYWxsZXRTY2hlbWEgfSBmcm9tIFwiLi4vV2FsbGV0XCI7XHJcblxyXG5leHBvcnQgZW51bSBQYXltZW50VHlwZSB7XHJcbiAgQk9MRVRPID0gXCJib2xldG9cIixcclxuICBDQVJEID0gXCJjYXJkXCIsXHJcbiAgREVQT1NJVCA9IFwiZGVwb3NpdFwiLFxyXG4gIFdJVEhEUkFXQUwgPSBcIndpdGhkcmF3YWxcIixcclxuICBUUkFOU0ZFUiA9IFwidHJhbnNmZXJcIixcclxuICBUUkFOU0FDVElPTl9SRVZFUlNBTCA9IFwidHJhbnNhY3Rpb25fcmV2ZXJzYWxcIixcclxuICBTRVJWSUNFX0ZFRSA9IFwic2VydmljZV9mZWVcIlxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBheW1lbnRTY2hlbWEgZXh0ZW5kcyBCYXNlTW9kZWxTY2hlbWEge1xyXG4gIHR5cGU6IFBheW1lbnRUeXBlO1xyXG4gIGFtb3VudDogc3RyaW5nO1xyXG4gIGRlc3RpbmF0aW9uPzogV2FsbGV0U2NoZW1hO1xyXG4gIHRyYW5zYWN0aW9uPzogVHJhbnNhY3Rpb25TY2hlbWE7XHJcbiAgYXNzZXQ/OiBBc3NldFNjaGVtYTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBheW1lbnQgZXh0ZW5kcyBCYXNlTW9kZWwgaW1wbGVtZW50cyBQYXltZW50U2NoZW1hIHtcclxuICB0eXBlOiBQYXltZW50VHlwZSA9IHVuZGVmaW5lZDtcclxuICBhbW91bnQ6IHN0cmluZyA9IHVuZGVmaW5lZDtcclxuICB0cmFuc2FjdGlvbj86IFRyYW5zYWN0aW9uO1xyXG4gIGRlc3RpbmF0aW9uPzogV2FsbGV0O1xyXG4gIGFzc2V0PzogQXNzZXQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRhdGE6IFBhcnRpYWw8UGF5bWVudFNjaGVtYT4gPSB7fSkge1xyXG4gICAgc3VwZXIoZGF0YSk7XHJcblxyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcclxuXHJcbiAgICB0aGlzLnRyYW5zYWN0aW9uID0gZGF0YS50cmFuc2FjdGlvbiAmJiBuZXcgVHJhbnNhY3Rpb24oZGF0YS50cmFuc2FjdGlvbik7XHJcbiAgICB0aGlzLmRlc3RpbmF0aW9uID0gZGF0YS5kZXN0aW5hdGlvbiAmJiBuZXcgV2FsbGV0KGRhdGEuZGVzdGluYXRpb24pO1xyXG4gICAgdGhpcy5hc3NldCA9IGRhdGEuYXNzZXQgJiYgbmV3IEFzc2V0KGRhdGEuYXNzZXQpO1xyXG4gIH1cclxufVxyXG4iXX0=