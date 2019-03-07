"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CustodyFeature;
(function (CustodyFeature) {
    CustodyFeature["AUDIT"] = "audit";
    CustodyFeature["BLOCK"] = "block";
    CustodyFeature["BOLETO"] = "boleto";
    CustodyFeature["CARD"] = "card";
    CustodyFeature["COMPANY"] = "company";
    CustodyFeature["DEPOSIT"] = "deposit";
    CustodyFeature["PAYMENT"] = "payment";
    CustodyFeature["POSTBACK"] = "postback";
    CustodyFeature["WITHDRAW"] = "withdraw";
})(CustodyFeature = exports.CustodyFeature || (exports.CustodyFeature = {}));
class BaseCustodyFeature {
}
exports.default = BaseCustodyFeature;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUN1c3RvZHlGZWF0dXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbGliL3Byb3ZpZGVyL0Jhc2VDdXN0b2R5RmVhdHVyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQVksY0FVWDtBQVZELFdBQVksY0FBYztJQUN4QixpQ0FBZSxDQUFBO0lBQ2YsaUNBQWUsQ0FBQTtJQUNmLG1DQUFpQixDQUFBO0lBQ2pCLCtCQUFhLENBQUE7SUFDYixxQ0FBbUIsQ0FBQTtJQUNuQixxQ0FBbUIsQ0FBQTtJQUNuQixxQ0FBbUIsQ0FBQTtJQUNuQix1Q0FBcUIsQ0FBQTtJQUNyQix1Q0FBcUIsQ0FBQTtBQUN2QixDQUFDLEVBVlcsY0FBYyxHQUFkLHNCQUFjLEtBQWQsc0JBQWMsUUFVekI7QUFFRCxNQUE4QixrQkFBa0I7Q0FFL0M7QUFGRCxxQ0FFQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBlbnVtIEN1c3RvZHlGZWF0dXJlIHtcbiAgQVVESVQgPSBcImF1ZGl0XCIsXG4gIEJMT0NLID0gXCJibG9ja1wiLFxuICBCT0xFVE8gPSBcImJvbGV0b1wiLFxuICBDQVJEID0gXCJjYXJkXCIsXG4gIENPTVBBTlkgPSBcImNvbXBhbnlcIixcbiAgREVQT1NJVCA9IFwiZGVwb3NpdFwiLFxuICBQQVlNRU5UID0gXCJwYXltZW50XCIsXG4gIFBPU1RCQUNLID0gXCJwb3N0YmFja1wiLFxuICBXSVRIRFJBVyA9IFwid2l0aGRyYXdcIixcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQmFzZUN1c3RvZHlGZWF0dXJlIHtcbiAgcHVibGljIGFic3RyYWN0IHJlYWRvbmx5IHR5cGU6IEN1c3RvZHlGZWF0dXJlO1xufVxuIl19