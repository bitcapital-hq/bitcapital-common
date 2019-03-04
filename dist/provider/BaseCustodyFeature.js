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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUN1c3RvZHlGZWF0dXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbGliL3Byb3ZpZGVyL0Jhc2VDdXN0b2R5RmVhdHVyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQVksY0FTWDtBQVRELFdBQVksY0FBYztJQUN4QixxQ0FBbUIsQ0FBQTtJQUNuQix1Q0FBcUIsQ0FBQTtJQUNyQixxQ0FBbUIsQ0FBQTtJQUNuQixpQ0FBZSxDQUFBO0lBQ2YsaUNBQWUsQ0FBQTtJQUNmLHVDQUFxQixDQUFBO0lBQ3JCLG1DQUFpQixDQUFBO0lBQ2pCLCtCQUFhLENBQUE7QUFDZixDQUFDLEVBVFcsY0FBYyxHQUFkLHNCQUFjLEtBQWQsc0JBQWMsUUFTekI7QUFFRCxNQUE4QixrQkFBa0I7Q0FFL0M7QUFGRCxxQ0FFQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBlbnVtIEN1c3RvZHlGZWF0dXJlIHtcclxuICBERVBPU0lUID0gXCJkZXBvc2l0XCIsXHJcbiAgV0lUSERSQVcgPSBcIndpdGhkcmF3XCIsXHJcbiAgUEFZTUVOVCA9IFwicGF5bWVudFwiLFxyXG4gIEJMT0NLID0gXCJibG9ja1wiLFxyXG4gIEFVRElUID0gXCJhdWRpdFwiLFxyXG4gIFBPU1RCQUNLID0gXCJwb3N0YmFja1wiLFxyXG4gIEJPTEVUTyA9IFwiYm9sZXRvXCIsXHJcbiAgQ0FSRCA9IFwiY2FyZFwiXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEJhc2VDdXN0b2R5RmVhdHVyZSB7XHJcbiAgcHVibGljIGFic3RyYWN0IHJlYWRvbmx5IHR5cGU6IEN1c3RvZHlGZWF0dXJlO1xyXG59XHJcbiJdfQ==