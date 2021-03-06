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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGF5bWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9tb2RlbHMvUGF5bWVudC9QYXltZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQXdEO0FBQ3hELG9DQUE4QztBQUM5QyxnREFBZ0U7QUFDaEUsc0NBQWlEO0FBRWpELElBQVksV0FPWDtBQVBELFdBQVksV0FBVztJQUNyQixnQ0FBaUIsQ0FBQTtJQUNqQiw0QkFBYSxDQUFBO0lBQ2Isa0NBQW1CLENBQUE7SUFDbkIsd0NBQXlCLENBQUE7SUFDekIsb0NBQXFCLENBQUE7SUFDckIsNERBQTZDLENBQUE7QUFDL0MsQ0FBQyxFQVBXLFdBQVcsR0FBWCxtQkFBVyxLQUFYLG1CQUFXLFFBT3RCO0FBVUQsTUFBYSxPQUFRLFNBQVEsZ0JBQVM7SUFPcEMsWUFBWSxPQUErQixFQUFFO1FBQzNDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQVBkLFNBQUksR0FBZ0IsU0FBUyxDQUFDO1FBQzlCLFdBQU0sR0FBVyxTQUFTLENBQUM7UUFRekIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFMUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUkseUJBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksZUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxhQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25ELENBQUM7Q0FDRjtBQWhCRCwwQkFnQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlTW9kZWwsIEJhc2VNb2RlbFNjaGVtYSB9IGZyb20gXCIuLi8uLi9iYXNlXCI7XG5pbXBvcnQgeyBBc3NldCwgQXNzZXRTY2hlbWEgfSBmcm9tIFwiLi4vQXNzZXRcIjtcbmltcG9ydCB7IFRyYW5zYWN0aW9uLCBUcmFuc2FjdGlvblNjaGVtYSB9IGZyb20gXCIuLi9UcmFuc2FjdGlvblwiO1xuaW1wb3J0IHsgV2FsbGV0LCBXYWxsZXRTY2hlbWEgfSBmcm9tIFwiLi4vV2FsbGV0XCI7XG5cbmV4cG9ydCBlbnVtIFBheW1lbnRUeXBlIHtcbiAgQk9MRVRPID0gXCJib2xldG9cIixcbiAgQ0FSRCA9IFwiY2FyZFwiLFxuICBERVBPU0lUID0gXCJkZXBvc2l0XCIsXG4gIFdJVEhEUkFXQUwgPSBcIndpdGhkcmF3YWxcIixcbiAgVFJBTlNGRVIgPSBcInRyYW5zZmVyXCIsXG4gIFRSQU5TQUNUSU9OX1JFVkVSU0FMID0gXCJ0cmFuc2FjdGlvbl9yZXZlcnNhbFwiXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGF5bWVudFNjaGVtYSBleHRlbmRzIEJhc2VNb2RlbFNjaGVtYSB7XG4gIHR5cGU6IFBheW1lbnRUeXBlO1xuICBhbW91bnQ6IHN0cmluZztcbiAgZGVzdGluYXRpb24/OiBXYWxsZXRTY2hlbWE7XG4gIHRyYW5zYWN0aW9uPzogVHJhbnNhY3Rpb25TY2hlbWE7XG4gIGFzc2V0PzogQXNzZXRTY2hlbWE7XG59XG5cbmV4cG9ydCBjbGFzcyBQYXltZW50IGV4dGVuZHMgQmFzZU1vZGVsIGltcGxlbWVudHMgUGF5bWVudFNjaGVtYSB7XG4gIHR5cGU6IFBheW1lbnRUeXBlID0gdW5kZWZpbmVkO1xuICBhbW91bnQ6IHN0cmluZyA9IHVuZGVmaW5lZDtcbiAgdHJhbnNhY3Rpb24/OiBUcmFuc2FjdGlvbjtcbiAgZGVzdGluYXRpb24/OiBXYWxsZXQ7XG4gIGFzc2V0PzogQXNzZXQ7XG5cbiAgY29uc3RydWN0b3IoZGF0YTogUGFydGlhbDxQYXltZW50U2NoZW1hPiA9IHt9KSB7XG4gICAgc3VwZXIoZGF0YSk7XG5cbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xuXG4gICAgdGhpcy50cmFuc2FjdGlvbiA9IGRhdGEudHJhbnNhY3Rpb24gJiYgbmV3IFRyYW5zYWN0aW9uKGRhdGEudHJhbnNhY3Rpb24pO1xuICAgIHRoaXMuZGVzdGluYXRpb24gPSBkYXRhLmRlc3RpbmF0aW9uICYmIG5ldyBXYWxsZXQoZGF0YS5kZXN0aW5hdGlvbik7XG4gICAgdGhpcy5hc3NldCA9IGRhdGEuYXNzZXQgJiYgbmV3IEFzc2V0KGRhdGEuYXNzZXQpO1xuICB9XG59XG4iXX0=