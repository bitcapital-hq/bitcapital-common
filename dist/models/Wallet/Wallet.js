"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../User/User");
const base_1 = require("../../base");
const Asset_1 = require("../Asset");
const Transaction_1 = require("../Transaction");
const Payment_1 = require("../Payment");
class Wallet extends base_1.BaseModel {
    constructor(data) {
        super(data);
        this.status = undefined;
        this.stellar = undefined;
        this.user = undefined;
        this.additionalData = undefined;
        this.balances = undefined;
        this.issuedAssets = undefined;
        this.assets = undefined;
        this.transactions = undefined;
        this.received = undefined;
        Object.assign(this, data);
        this.user = data.user && new User_1.User(data.user);
        this.issuedAssets = data.issuedAssets && data.issuedAssets.map(issuedAsset => new Asset_1.Asset(issuedAsset));
        this.assets = data.assets && data.assets.map(asset => new Asset_1.Asset(asset));
        this.transactions = data.transactions && data.transactions.map(transaction => new Transaction_1.Transaction(transaction));
        this.received = data.received && data.received.map(received => new Payment_1.Payment(received));
    }
}
exports.Wallet = Wallet;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2FsbGV0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL21vZGVscy9XYWxsZXQvV2FsbGV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsdUNBQWdEO0FBSWhELHFDQUF3RDtBQUN4RCxvQ0FBOEM7QUFDOUMsZ0RBQWdFO0FBQ2hFLHdDQUFvRDtBQWdCcEQsTUFBYSxNQUFPLFNBQVEsZ0JBQVM7SUFXbkMsWUFBWSxJQUEyQjtRQUNyQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFYZCxXQUFNLEdBQWtCLFNBQVMsQ0FBQztRQUNsQyxZQUFPLEdBQXVCLFNBQVMsQ0FBQztRQUN4QyxTQUFJLEdBQVUsU0FBUyxDQUFDO1FBQ3hCLG1CQUFjLEdBQVMsU0FBUyxDQUFDO1FBQ2pDLGFBQVEsR0FBcUIsU0FBUyxDQUFDO1FBQ3ZDLGlCQUFZLEdBQWEsU0FBUyxDQUFDO1FBQ25DLFdBQU0sR0FBYSxTQUFTLENBQUM7UUFDN0IsaUJBQVksR0FBbUIsU0FBUyxDQUFDO1FBQ3pDLGFBQVEsR0FBZSxTQUFTLENBQUM7UUFLL0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFMUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksV0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxJQUFJLGFBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ3RHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksYUFBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsSUFBSSx5QkFBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDNUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxpQkFBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDeEYsQ0FBQztDQUNGO0FBdEJELHdCQXNCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVzZXIsIFVzZXJTY2hlbWEgfSBmcm9tIFwiLi4vVXNlci9Vc2VyXCI7XG5pbXBvcnQgeyBXYWxsZXRCYWxhbmNlIH0gZnJvbSBcIi4vV2FsbGV0QmFsYW5jZVwiO1xuaW1wb3J0IHsgQmFua2luZ1dhbGxldERhdGEsIFN0ZWxsYXJXYWxsZXREYXRhIH0gZnJvbSBcIi4vV2FsbGV0RGF0YVwiO1xuaW1wb3J0IHsgV2FsbGV0U3RhdHVzIH0gZnJvbSBcIi4vV2FsbGV0U3RhdHVzXCI7XG5pbXBvcnQgeyBCYXNlTW9kZWxTY2hlbWEsIEJhc2VNb2RlbCB9IGZyb20gXCIuLi8uLi9iYXNlXCI7XG5pbXBvcnQgeyBBc3NldFNjaGVtYSwgQXNzZXQgfSBmcm9tIFwiLi4vQXNzZXRcIjtcbmltcG9ydCB7IFRyYW5zYWN0aW9uU2NoZW1hLCBUcmFuc2FjdGlvbiB9IGZyb20gXCIuLi9UcmFuc2FjdGlvblwiO1xuaW1wb3J0IHsgUGF5bWVudFNjaGVtYSwgUGF5bWVudCB9IGZyb20gXCIuLi9QYXltZW50XCI7XG5cbmV4cG9ydCB7IFN0ZWxsYXJXYWxsZXREYXRhLCBCYW5raW5nV2FsbGV0RGF0YSwgV2FsbGV0QmFsYW5jZSB9O1xuXG5leHBvcnQgaW50ZXJmYWNlIFdhbGxldFNjaGVtYSBleHRlbmRzIEJhc2VNb2RlbFNjaGVtYSB7XG4gIHN0YXR1cz86IFdhbGxldFN0YXR1cztcbiAgc3RlbGxhcj86IFN0ZWxsYXJXYWxsZXREYXRhO1xuICB1c2VyPzogVXNlclNjaGVtYTtcbiAgYWRkaXRpb25hbERhdGE/OiBhbnk7XG4gIGJhbGFuY2VzPzogV2FsbGV0QmFsYW5jZVtdO1xuICBpc3N1ZWRBc3NldHM/OiBBc3NldFNjaGVtYVtdO1xuICBhc3NldHM/OiBBc3NldFNjaGVtYVtdO1xuICB0cmFuc2FjdGlvbnM/OiBUcmFuc2FjdGlvblNjaGVtYVtdO1xuICByZWNlaXZlZD86IFBheW1lbnRTY2hlbWFbXTtcbn1cblxuZXhwb3J0IGNsYXNzIFdhbGxldCBleHRlbmRzIEJhc2VNb2RlbCBpbXBsZW1lbnRzIFdhbGxldFNjaGVtYSB7XG4gIHN0YXR1cz86IFdhbGxldFN0YXR1cyA9IHVuZGVmaW5lZDtcbiAgc3RlbGxhcj86IFN0ZWxsYXJXYWxsZXREYXRhID0gdW5kZWZpbmVkO1xuICB1c2VyPzogVXNlciA9IHVuZGVmaW5lZDtcbiAgYWRkaXRpb25hbERhdGE/OiBhbnkgPSB1bmRlZmluZWQ7XG4gIGJhbGFuY2VzPzogV2FsbGV0QmFsYW5jZVtdID0gdW5kZWZpbmVkO1xuICBpc3N1ZWRBc3NldHM/OiBBc3NldFtdID0gdW5kZWZpbmVkO1xuICBhc3NldHM/OiBBc3NldFtdID0gdW5kZWZpbmVkO1xuICB0cmFuc2FjdGlvbnM/OiBUcmFuc2FjdGlvbltdID0gdW5kZWZpbmVkO1xuICByZWNlaXZlZD86IFBheW1lbnRbXSA9IHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3RvcihkYXRhOiBQYXJ0aWFsPFdhbGxldFNjaGVtYT4pIHtcbiAgICBzdXBlcihkYXRhKTtcblxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XG5cbiAgICB0aGlzLnVzZXIgPSBkYXRhLnVzZXIgJiYgbmV3IFVzZXIoZGF0YS51c2VyKTtcbiAgICB0aGlzLmlzc3VlZEFzc2V0cyA9IGRhdGEuaXNzdWVkQXNzZXRzICYmIGRhdGEuaXNzdWVkQXNzZXRzLm1hcChpc3N1ZWRBc3NldCA9PiBuZXcgQXNzZXQoaXNzdWVkQXNzZXQpKTtcbiAgICB0aGlzLmFzc2V0cyA9IGRhdGEuYXNzZXRzICYmIGRhdGEuYXNzZXRzLm1hcChhc3NldCA9PiBuZXcgQXNzZXQoYXNzZXQpKTtcbiAgICB0aGlzLnRyYW5zYWN0aW9ucyA9IGRhdGEudHJhbnNhY3Rpb25zICYmIGRhdGEudHJhbnNhY3Rpb25zLm1hcCh0cmFuc2FjdGlvbiA9PiBuZXcgVHJhbnNhY3Rpb24odHJhbnNhY3Rpb24pKTtcbiAgICB0aGlzLnJlY2VpdmVkID0gZGF0YS5yZWNlaXZlZCAmJiBkYXRhLnJlY2VpdmVkLm1hcChyZWNlaXZlZCA9PiBuZXcgUGF5bWVudChyZWNlaXZlZCkpO1xuICB9XG59XG4iXX0=