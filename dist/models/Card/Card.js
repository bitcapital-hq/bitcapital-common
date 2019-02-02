"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../base");
var CardStatus;
(function (CardStatus) {
    CardStatus["AVAIABLE"] = "available";
    CardStatus["BLOCKED"] = "blocked";
    CardStatus["CANCELLED"] = "cancelled";
})(CardStatus = exports.CardStatus || (exports.CardStatus = {}));
class Card extends base_1.BaseModel {
    constructor(data) {
        super(data);
        this.user = undefined;
        this.status = undefined;
    }
}
exports.Card = Card;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9tb2RlbHMvQ2FyZC9DYXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQXdEO0FBR3hELElBQVksVUFJWDtBQUpELFdBQVksVUFBVTtJQUNwQixvQ0FBc0IsQ0FBQTtJQUN0QixpQ0FBbUIsQ0FBQTtJQUNuQixxQ0FBdUIsQ0FBQTtBQUN6QixDQUFDLEVBSlcsVUFBVSxHQUFWLGtCQUFVLEtBQVYsa0JBQVUsUUFJckI7QUFPRCxNQUFhLElBQUssU0FBUSxnQkFBUztJQUlqQyxZQUFZLElBQXlCO1FBQ25DLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUpkLFNBQUksR0FBVSxTQUFTLENBQUM7UUFDeEIsV0FBTSxHQUFXLFNBQVMsQ0FBQztJQUkzQixDQUFDO0NBQ0Y7QUFQRCxvQkFPQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VNb2RlbCwgQmFzZU1vZGVsU2NoZW1hIH0gZnJvbSBcIi4uLy4uL2Jhc2VcIjtcbmltcG9ydCB7IFVzZXIsIFVzZXJTY2hlbWEgfSBmcm9tIFwiLi4vVXNlclwiO1xuXG5leHBvcnQgZW51bSBDYXJkU3RhdHVzIHtcbiAgQVZBSUFCTEUgPSBcImF2YWlsYWJsZVwiLFxuICBCTE9DS0VEID0gXCJibG9ja2VkXCIsXG4gIENBTkNFTExFRCA9IFwiY2FuY2VsbGVkXCJcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDYXJkU2NoZW1hIGV4dGVuZHMgQmFzZU1vZGVsU2NoZW1hIHtcbiAgdXNlcj86IFVzZXJTY2hlbWE7XG4gIHN0YXR1czogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgQ2FyZCBleHRlbmRzIEJhc2VNb2RlbCBpbXBsZW1lbnRzIENhcmRTY2hlbWEge1xuICB1c2VyPzogVXNlciA9IHVuZGVmaW5lZDtcbiAgc3RhdHVzOiBzdHJpbmcgPSB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IoZGF0YTogUGFydGlhbDxDYXJkU2NoZW1hPikge1xuICAgIHN1cGVyKGRhdGEpO1xuICB9XG59XG4iXX0=