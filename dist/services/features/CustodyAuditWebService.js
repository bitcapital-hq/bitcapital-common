"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../base");
const models_1 = require("../../models");
const provider_1 = require("../../provider");
class CustodyAuditWebService extends provider_1.CustodyAuditFeature {
    constructor(options) {
        super();
        this.options = options;
        this.http = options.http || new base_1.Http(options);
    }
    balance(wallet) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.http.post("/provider/audit/balance", { wallet });
            if (response.data && response.data.length) {
                return response.data;
            }
            throw response;
        });
    }
    history(wallet) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.http.post("/provider/audit/history", { wallet });
            if (response.data && response.data.length) {
                return response.data.map((payment) => new models_1.Payment(payment));
            }
            throw response;
        });
    }
}
exports.default = CustodyAuditWebService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9keUF1ZGl0V2ViU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9zZXJ2aWNlcy9mZWF0dXJlcy9DdXN0b2R5QXVkaXRXZWJTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQ0FBK0M7QUFDL0MseUNBQW9FO0FBQ3BFLDZDQUF5RTtBQU16RSxNQUFxQixzQkFBdUIsU0FBUSw4QkFBbUI7SUFHckUsWUFBNEIsT0FBc0M7UUFDaEUsS0FBSyxFQUFFLENBQUM7UUFEa0IsWUFBTyxHQUFQLE9BQU8sQ0FBK0I7UUFFaEUsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxJQUFJLElBQUksV0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFWSxPQUFPLENBQUMsTUFBb0I7O1lBQ3ZDLE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMseUJBQXlCLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1lBRTdFLElBQUksUUFBUSxDQUFDLElBQUksSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDekMsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO2FBQ3RCO1lBRUQsTUFBTSxRQUFRLENBQUM7UUFDakIsQ0FBQztLQUFBO0lBRVksT0FBTyxDQUFDLE1BQW9COztZQUN2QyxNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHlCQUF5QixFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztZQUU3RSxJQUFJLFFBQVEsQ0FBQyxJQUFJLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ3pDLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFzQixFQUFFLEVBQUUsQ0FBQyxJQUFJLGdCQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzthQUM1RTtZQUVELE1BQU0sUUFBUSxDQUFDO1FBQ2pCLENBQUM7S0FBQTtDQUNGO0FBM0JELHlDQTJCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHAsIEh0dHBPcHRpb25zIH0gZnJvbSBcIi4uLy4uL2Jhc2VcIjtcbmltcG9ydCB7IFdhbGxldFNjaGVtYSwgUGF5bWVudCwgUGF5bWVudFNjaGVtYSB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcbmltcG9ydCB7IEJhc2VDdXN0b2R5T3B0aW9ucywgQ3VzdG9keUF1ZGl0RmVhdHVyZSB9IGZyb20gXCIuLi8uLi9wcm92aWRlclwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEN1c3RvZHlBdWRpdFdlYlNlcnZpY2VPcHRpb25zIGV4dGVuZHMgSHR0cE9wdGlvbnMsIEJhc2VDdXN0b2R5T3B0aW9ucyB7XG4gIGh0dHA/OiBIdHRwO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b2R5QXVkaXRXZWJTZXJ2aWNlIGV4dGVuZHMgQ3VzdG9keUF1ZGl0RmVhdHVyZSB7XG4gIHB1YmxpYyBodHRwOiBIdHRwO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSBvcHRpb25zOiBDdXN0b2R5QXVkaXRXZWJTZXJ2aWNlT3B0aW9ucykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5odHRwID0gb3B0aW9ucy5odHRwIHx8IG5ldyBIdHRwKG9wdGlvbnMpO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGJhbGFuY2Uod2FsbGV0OiBXYWxsZXRTY2hlbWEpOiBQcm9taXNlPFt7IGJhbGFuY2U6IHN0cmluZyB9XT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5odHRwLnBvc3QoXCIvcHJvdmlkZXIvYXVkaXQvYmFsYW5jZVwiLCB7IHdhbGxldCB9KTtcblxuICAgIGlmIChyZXNwb25zZS5kYXRhICYmIHJlc3BvbnNlLmRhdGEubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICB9XG5cbiAgICB0aHJvdyByZXNwb25zZTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBoaXN0b3J5KHdhbGxldDogV2FsbGV0U2NoZW1hKTogUHJvbWlzZTxQYXltZW50W10+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuaHR0cC5wb3N0KFwiL3Byb3ZpZGVyL2F1ZGl0L2hpc3RvcnlcIiwgeyB3YWxsZXQgfSk7XG5cbiAgICBpZiAocmVzcG9uc2UuZGF0YSAmJiByZXNwb25zZS5kYXRhLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGEubWFwKChwYXltZW50OiBQYXltZW50U2NoZW1hKSA9PiBuZXcgUGF5bWVudChwYXltZW50KSk7XG4gICAgfVxuXG4gICAgdGhyb3cgcmVzcG9uc2U7XG4gIH1cbn1cbiJdfQ==