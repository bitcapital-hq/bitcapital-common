"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CustodyFeature;
(function (CustodyFeature) {
    CustodyFeature["AUDIT"] = "audit";
    CustodyFeature["BLOCK"] = "block";
    CustodyFeature["BOLETO"] = "boleto";
    CustodyFeature["CARD"] = "card";
    CustodyFeature["DEPOSIT"] = "deposit";
    CustodyFeature["PAYMENT"] = "payment";
    CustodyFeature["POSTBACK"] = "postback";
    CustodyFeature["WITHDRAW"] = "withdraw";
})(CustodyFeature = exports.CustodyFeature || (exports.CustodyFeature = {}));
class BaseCustodyFeature {
}
exports.default = BaseCustodyFeature;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUN1c3RvZHlGZWF0dXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbGliL3Byb3ZpZGVyL0Jhc2VDdXN0b2R5RmVhdHVyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQVksY0FTWDtBQVRELFdBQVksY0FBYztJQUN4QixpQ0FBZSxDQUFBO0lBQ2YsaUNBQWUsQ0FBQTtJQUNmLG1DQUFpQixDQUFBO0lBQ2pCLCtCQUFhLENBQUE7SUFDYixxQ0FBbUIsQ0FBQTtJQUNuQixxQ0FBbUIsQ0FBQTtJQUNuQix1Q0FBcUIsQ0FBQTtJQUNyQix1Q0FBcUIsQ0FBQTtBQUN2QixDQUFDLEVBVFcsY0FBYyxHQUFkLHNCQUFjLEtBQWQsc0JBQWMsUUFTekI7QUFFRCxNQUE4QixrQkFBa0I7Q0FFL0M7QUFGRCxxQ0FFQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBlbnVtIEN1c3RvZHlGZWF0dXJlIHtcclxuICBBVURJVCA9IFwiYXVkaXRcIixcclxuICBCTE9DSyA9IFwiYmxvY2tcIixcclxuICBCT0xFVE8gPSBcImJvbGV0b1wiLFxyXG4gIENBUkQgPSBcImNhcmRcIixcclxuICBERVBPU0lUID0gXCJkZXBvc2l0XCIsXHJcbiAgUEFZTUVOVCA9IFwicGF5bWVudFwiLFxyXG4gIFBPU1RCQUNLID0gXCJwb3N0YmFja1wiLFxyXG4gIFdJVEhEUkFXID0gXCJ3aXRoZHJhd1wiXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEJhc2VDdXN0b2R5RmVhdHVyZSB7XHJcbiAgcHVibGljIGFic3RyYWN0IHJlYWRvbmx5IHR5cGU6IEN1c3RvZHlGZWF0dXJlO1xyXG59XHJcbiJdfQ==