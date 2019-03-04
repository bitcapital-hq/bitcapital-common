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
    CustodyFeature["BOLETO"] = "boleto";
    CustodyFeature["CARD"] = "card";
})(CustodyFeature = exports.CustodyFeature || (exports.CustodyFeature = {}));
class BaseCustodyFeature {
}
exports.default = BaseCustodyFeature;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUN1c3RvZHlGZWF0dXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbGliL3Byb3ZpZGVyL0Jhc2VDdXN0b2R5RmVhdHVyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQVksY0FTWDtBQVRELFdBQVksY0FBYztJQUN4QixxQ0FBbUIsQ0FBQTtJQUNuQix1Q0FBcUIsQ0FBQTtJQUNyQixxQ0FBbUIsQ0FBQTtJQUNuQixpQ0FBZSxDQUFBO0lBQ2YsaUNBQWUsQ0FBQTtJQUNmLHVDQUFxQixDQUFBO0lBQ3JCLG1DQUFpQixDQUFBO0lBQ2pCLCtCQUFhLENBQUE7QUFDZixDQUFDLEVBVFcsY0FBYyxHQUFkLHNCQUFjLEtBQWQsc0JBQWMsUUFTekI7QUFFRCxNQUE4QixrQkFBa0I7Q0FFL0M7QUFGRCxxQ0FFQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBlbnVtIEN1c3RvZHlGZWF0dXJlIHtcbiAgREVQT1NJVCA9IFwiZGVwb3NpdFwiLFxuICBXSVRIRFJBVyA9IFwid2l0aGRyYXdcIixcbiAgUEFZTUVOVCA9IFwicGF5bWVudFwiLFxuICBCTE9DSyA9IFwiYmxvY2tcIixcbiAgQVVESVQgPSBcImF1ZGl0XCIsXG4gIFBPU1RCQUNLID0gXCJwb3N0YmFja1wiLFxuICBCT0xFVE8gPSBcImJvbGV0b1wiLFxuICBDQVJEID0gXCJjYXJkXCJcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQmFzZUN1c3RvZHlGZWF0dXJlIHtcbiAgcHVibGljIGFic3RyYWN0IHJlYWRvbmx5IHR5cGU6IEN1c3RvZHlGZWF0dXJlO1xufVxuIl19