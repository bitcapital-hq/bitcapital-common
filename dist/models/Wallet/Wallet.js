"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../base");
class Wallet extends base_1.BaseModel {
    constructor(data) {
        super(data);
        this.status = undefined;
        this.stellar = undefined;
        this.user = undefined;
        this.userId = undefined;
        this.additionalData = undefined;
        this.balances = undefined;
        this.issuedAssets = undefined;
        this.assets = undefined;
        this.transactions = undefined;
        this.received = undefined;
        Object.assign(this, data);
    }
}
exports.Wallet = Wallet;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2FsbGV0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL21vZGVscy9XYWxsZXQvV2FsbGV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUEscUNBQXdEO0FBb0J4RCxNQUFhLE1BQU8sU0FBUSxnQkFBUztJQVluQyxZQUFZLElBQTJCO1FBQ3JDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQVpkLFdBQU0sR0FBa0IsU0FBUyxDQUFDO1FBQ2xDLFlBQU8sR0FBdUIsU0FBUyxDQUFDO1FBQ3hDLFNBQUksR0FBVSxTQUFTLENBQUM7UUFDeEIsV0FBTSxHQUFZLFNBQVMsQ0FBQztRQUM1QixtQkFBYyxHQUFTLFNBQVMsQ0FBQztRQUNqQyxhQUFRLEdBQXFCLFNBQVMsQ0FBQztRQUN2QyxpQkFBWSxHQUFtQixTQUFTLENBQUM7UUFDekMsV0FBTSxHQUFtQixTQUFTLENBQUM7UUFDbkMsaUJBQVksR0FBeUIsU0FBUyxDQUFDO1FBQy9DLGFBQVEsR0FBcUIsU0FBUyxDQUFDO1FBSXJDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7Q0FDRjtBQWhCRCx3QkFnQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVc2VyLCBVc2VyU2NoZW1hIH0gZnJvbSBcIi4uL1VzZXIvVXNlclwiO1xuaW1wb3J0IHsgV2FsbGV0QmFsYW5jZSB9IGZyb20gXCIuL1dhbGxldEJhbGFuY2VcIjtcbmltcG9ydCB7IEJhbmtpbmdXYWxsZXREYXRhLCBTdGVsbGFyV2FsbGV0RGF0YSB9IGZyb20gXCIuL1dhbGxldERhdGFcIjtcbmltcG9ydCB7IFdhbGxldFN0YXR1cyB9IGZyb20gXCIuL1dhbGxldFN0YXR1c1wiO1xuaW1wb3J0IHsgQmFzZU1vZGVsU2NoZW1hLCBCYXNlTW9kZWwgfSBmcm9tIFwiLi4vLi4vYmFzZVwiO1xuaW1wb3J0IHsgQXNzZXRTY2hlbWEgfSBmcm9tIFwiLi4vQXNzZXRcIjtcbmltcG9ydCB7IFRyYW5zYWN0aW9uU2NoZW1hIH0gZnJvbSBcIi4uL1RyYW5zYWN0aW9uXCI7XG5pbXBvcnQgeyBQYXltZW50U2NoZW1hIH0gZnJvbSBcIi4uL1BheW1lbnRcIjtcblxuZXhwb3J0IHsgU3RlbGxhcldhbGxldERhdGEsIEJhbmtpbmdXYWxsZXREYXRhLCBXYWxsZXRCYWxhbmNlIH07XG5cbmV4cG9ydCBpbnRlcmZhY2UgV2FsbGV0U2NoZW1hIGV4dGVuZHMgQmFzZU1vZGVsU2NoZW1hIHtcbiAgc3RhdHVzPzogV2FsbGV0U3RhdHVzO1xuICBzdGVsbGFyPzogU3RlbGxhcldhbGxldERhdGFcbiAgdXNlcj86IFVzZXJTY2hlbWE7XG4gIHVzZXJJZD86IHN0cmluZztcbiAgYWRkaXRpb25hbERhdGE/OiBhbnk7XG4gIGJhbGFuY2VzPzogV2FsbGV0QmFsYW5jZVtdO1xuICBpc3N1ZWRBc3NldHM/OiBBc3NldFNjaGVtYVtdO1xuICBhc3NldHM/OiBBc3NldFNjaGVtYVtdO1xuICB0cmFuc2FjdGlvbnM/OiBUcmFuc2FjdGlvblNjaGVtYVtdO1xuICByZWNlaXZlZD86IFBheW1lbnRTY2hlbWFbXTtcbn1cblxuZXhwb3J0IGNsYXNzIFdhbGxldCBleHRlbmRzIEJhc2VNb2RlbCBpbXBsZW1lbnRzIFdhbGxldFNjaGVtYSB7XG4gIHN0YXR1cz86IFdhbGxldFN0YXR1cyA9IHVuZGVmaW5lZDtcbiAgc3RlbGxhcj86IFN0ZWxsYXJXYWxsZXREYXRhID0gdW5kZWZpbmVkO1xuICB1c2VyPzogVXNlciA9IHVuZGVmaW5lZDtcbiAgdXNlcklkPzogc3RyaW5nID0gdW5kZWZpbmVkO1xuICBhZGRpdGlvbmFsRGF0YT86IGFueSA9IHVuZGVmaW5lZDtcbiAgYmFsYW5jZXM/OiBXYWxsZXRCYWxhbmNlW10gPSB1bmRlZmluZWQ7XG4gIGlzc3VlZEFzc2V0cz86IEFzc2V0U2NoZW1hW10gPSB1bmRlZmluZWQ7XG4gIGFzc2V0cz86IEFzc2V0U2NoZW1hW10gPSB1bmRlZmluZWQ7XG4gIHRyYW5zYWN0aW9ucz86IFRyYW5zYWN0aW9uU2NoZW1hW10gPSB1bmRlZmluZWQ7XG4gIHJlY2VpdmVkPzogUGF5bWVudFNjaGVtYVtdID0gdW5kZWZpbmVkO1xuXG4gIGNvbnN0cnVjdG9yKGRhdGE6IFBhcnRpYWw8V2FsbGV0U2NoZW1hPikge1xuICAgIHN1cGVyKGRhdGEpO1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XG4gIH1cbn1cbiJdfQ==