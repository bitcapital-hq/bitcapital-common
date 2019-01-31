"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../base");
const Asset_1 = require("../Asset");
const Transaction_1 = require("../Transaction");
const Wallet_1 = require("../Wallet");
var PaymentType;
(function (PaymentType) {
    PaymentType["DEPOSIT"] = "deposit";
    PaymentType["WITHDRAWAL"] = "withdrawal";
    PaymentType["TRANSFER"] = "transfer";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGF5bWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9tb2RlbHMvUGF5bWVudC9QYXltZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQXdEO0FBQ3hELG9DQUE4QztBQUM5QyxnREFBZ0U7QUFDaEUsc0NBQWlEO0FBRWpELElBQVksV0FJWDtBQUpELFdBQVksV0FBVztJQUNyQixrQ0FBbUIsQ0FBQTtJQUNuQix3Q0FBeUIsQ0FBQTtJQUN6QixvQ0FBcUIsQ0FBQTtBQUN2QixDQUFDLEVBSlcsV0FBVyxHQUFYLG1CQUFXLEtBQVgsbUJBQVcsUUFJdEI7QUFVRCxNQUFhLE9BQVEsU0FBUSxnQkFBUztJQU9wQyxZQUFZLE9BQStCLEVBQUU7UUFDM0MsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBUGQsU0FBSSxHQUFnQixTQUFTLENBQUM7UUFDOUIsV0FBTSxHQUFXLFNBQVMsQ0FBQztRQVF6QixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUUxQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSx5QkFBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxlQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3BFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLGFBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkQsQ0FBQztDQUNGO0FBaEJELDBCQWdCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VNb2RlbCwgQmFzZU1vZGVsU2NoZW1hIH0gZnJvbSBcIi4uLy4uL2Jhc2VcIjtcclxuaW1wb3J0IHsgQXNzZXQsIEFzc2V0U2NoZW1hIH0gZnJvbSBcIi4uL0Fzc2V0XCI7XHJcbmltcG9ydCB7IFRyYW5zYWN0aW9uLCBUcmFuc2FjdGlvblNjaGVtYSB9IGZyb20gXCIuLi9UcmFuc2FjdGlvblwiO1xyXG5pbXBvcnQgeyBXYWxsZXQsIFdhbGxldFNjaGVtYSB9IGZyb20gXCIuLi9XYWxsZXRcIjtcclxuXHJcbmV4cG9ydCBlbnVtIFBheW1lbnRUeXBlIHtcclxuICBERVBPU0lUID0gXCJkZXBvc2l0XCIsXHJcbiAgV0lUSERSQVdBTCA9IFwid2l0aGRyYXdhbFwiLFxyXG4gIFRSQU5TRkVSID0gXCJ0cmFuc2ZlclwiXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGF5bWVudFNjaGVtYSBleHRlbmRzIEJhc2VNb2RlbFNjaGVtYSB7XHJcbiAgdHlwZTogUGF5bWVudFR5cGU7XHJcbiAgYW1vdW50OiBzdHJpbmc7XHJcbiAgZGVzdGluYXRpb24/OiBXYWxsZXRTY2hlbWE7XHJcbiAgdHJhbnNhY3Rpb24/OiBUcmFuc2FjdGlvblNjaGVtYTtcclxuICBhc3NldD86IEFzc2V0U2NoZW1hO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUGF5bWVudCBleHRlbmRzIEJhc2VNb2RlbCBpbXBsZW1lbnRzIFBheW1lbnRTY2hlbWEge1xyXG4gIHR5cGU6IFBheW1lbnRUeXBlID0gdW5kZWZpbmVkO1xyXG4gIGFtb3VudDogc3RyaW5nID0gdW5kZWZpbmVkO1xyXG4gIHRyYW5zYWN0aW9uPzogVHJhbnNhY3Rpb247XHJcbiAgZGVzdGluYXRpb24/OiBXYWxsZXQ7XHJcbiAgYXNzZXQ/OiBBc3NldDtcclxuXHJcbiAgY29uc3RydWN0b3IoZGF0YTogUGFydGlhbDxQYXltZW50U2NoZW1hPiA9IHt9KSB7XHJcbiAgICBzdXBlcihkYXRhKTtcclxuXHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xyXG5cclxuICAgIHRoaXMudHJhbnNhY3Rpb24gPSBkYXRhLnRyYW5zYWN0aW9uICYmIG5ldyBUcmFuc2FjdGlvbihkYXRhLnRyYW5zYWN0aW9uKTtcclxuICAgIHRoaXMuZGVzdGluYXRpb24gPSBkYXRhLmRlc3RpbmF0aW9uICYmIG5ldyBXYWxsZXQoZGF0YS5kZXN0aW5hdGlvbik7XHJcbiAgICB0aGlzLmFzc2V0ID0gZGF0YS5hc3NldCAmJiBuZXcgQXNzZXQoZGF0YS5hc3NldCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==