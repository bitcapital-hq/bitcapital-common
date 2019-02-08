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
        Object.assign(this, data);
    }
}
exports.Card = Card;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9tb2RlbHMvQ2FyZC9DYXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQXdEO0FBR3hELElBQVksVUFJWDtBQUpELFdBQVksVUFBVTtJQUNwQixvQ0FBc0IsQ0FBQTtJQUN0QixpQ0FBbUIsQ0FBQTtJQUNuQixxQ0FBdUIsQ0FBQTtBQUN6QixDQUFDLEVBSlcsVUFBVSxHQUFWLGtCQUFVLEtBQVYsa0JBQVUsUUFJckI7QUFPRCxNQUFhLElBQUssU0FBUSxnQkFBUztJQUlqQyxZQUFZLElBQXlCO1FBQ25DLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUpkLFNBQUksR0FBVSxTQUFTLENBQUM7UUFDeEIsV0FBTSxHQUFXLFNBQVMsQ0FBQztRQUl6QixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0NBQ0Y7QUFSRCxvQkFRQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VNb2RlbCwgQmFzZU1vZGVsU2NoZW1hIH0gZnJvbSBcIi4uLy4uL2Jhc2VcIjtcclxuaW1wb3J0IHsgVXNlciwgVXNlclNjaGVtYSB9IGZyb20gXCIuLi9Vc2VyXCI7XHJcblxyXG5leHBvcnQgZW51bSBDYXJkU3RhdHVzIHtcclxuICBBVkFJQUJMRSA9IFwiYXZhaWxhYmxlXCIsXHJcbiAgQkxPQ0tFRCA9IFwiYmxvY2tlZFwiLFxyXG4gIENBTkNFTExFRCA9IFwiY2FuY2VsbGVkXCJcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDYXJkU2NoZW1hIGV4dGVuZHMgQmFzZU1vZGVsU2NoZW1hIHtcclxuICB1c2VyPzogVXNlclNjaGVtYTtcclxuICBzdGF0dXM6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENhcmQgZXh0ZW5kcyBCYXNlTW9kZWwgaW1wbGVtZW50cyBDYXJkU2NoZW1hIHtcclxuICB1c2VyPzogVXNlciA9IHVuZGVmaW5lZDtcclxuICBzdGF0dXM6IHN0cmluZyA9IHVuZGVmaW5lZDtcclxuXHJcbiAgY29uc3RydWN0b3IoZGF0YTogUGFydGlhbDxDYXJkU2NoZW1hPikge1xyXG4gICAgc3VwZXIoZGF0YSk7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xyXG4gIH1cclxufVxyXG4iXX0=