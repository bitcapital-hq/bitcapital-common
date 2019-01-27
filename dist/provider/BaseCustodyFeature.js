"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CustodyFeature;
(function (CustodyFeature) {
    CustodyFeature["DEPOSIT"] = "deposit";
    CustodyFeature["WITHDRAW"] = "withdraw";
    CustodyFeature["PAYMENT"] = "payment";
    CustodyFeature["BLOCK"] = "block";
    CustodyFeature["AUDIT"] = "audit";
    CustodyFeature["POSTBACK"] = "postback";
})(CustodyFeature = exports.CustodyFeature || (exports.CustodyFeature = {}));
class BaseCustodyFeature {
}
exports.default = BaseCustodyFeature;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUN1c3RvZHlGZWF0dXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbGliL3Byb3ZpZGVyL0Jhc2VDdXN0b2R5RmVhdHVyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQVksY0FPWDtBQVBELFdBQVksY0FBYztJQUN4QixxQ0FBbUIsQ0FBQTtJQUNuQix1Q0FBcUIsQ0FBQTtJQUNyQixxQ0FBbUIsQ0FBQTtJQUNuQixpQ0FBZSxDQUFBO0lBQ2YsaUNBQWUsQ0FBQTtJQUNmLHVDQUFxQixDQUFBO0FBQ3ZCLENBQUMsRUFQVyxjQUFjLEdBQWQsc0JBQWMsS0FBZCxzQkFBYyxRQU96QjtBQUVEO0NBRUM7QUFGRCxxQ0FFQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBlbnVtIEN1c3RvZHlGZWF0dXJlIHtcbiAgREVQT1NJVCA9ICdkZXBvc2l0JyxcbiAgV0lUSERSQVcgPSAnd2l0aGRyYXcnLFxuICBQQVlNRU5UID0gJ3BheW1lbnQnLFxuICBCTE9DSyA9ICdibG9jaycsXG4gIEFVRElUID0gJ2F1ZGl0JyxcbiAgUE9TVEJBQ0sgPSAncG9zdGJhY2snLFxufVxuXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBCYXNlQ3VzdG9keUZlYXR1cmUge1xuICBwdWJsaWMgYWJzdHJhY3QgcmVhZG9ubHkgdHlwZTogQ3VzdG9keUZlYXR1cmU7XG59Il19