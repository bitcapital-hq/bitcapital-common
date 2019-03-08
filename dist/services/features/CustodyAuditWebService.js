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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9keUF1ZGl0V2ViU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9zZXJ2aWNlcy9mZWF0dXJlcy9DdXN0b2R5QXVkaXRXZWJTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQ0FBK0M7QUFDL0MseUNBQW9FO0FBQ3BFLDZDQUF5RTtBQU16RSxNQUFxQixzQkFBdUIsU0FBUSw4QkFBbUI7SUFHckUsWUFBNEIsT0FBc0M7UUFDaEUsS0FBSyxFQUFFLENBQUM7UUFEa0IsWUFBTyxHQUFQLE9BQU8sQ0FBK0I7UUFFaEUsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxJQUFJLElBQUksV0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFWSxPQUFPLENBQUMsTUFBb0I7O1lBQ3ZDLE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMseUJBQXlCLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1lBRTdFLElBQUksUUFBUSxDQUFDLElBQUksSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDekMsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO2FBQ3RCO1lBRUQsTUFBTSxRQUFRLENBQUM7UUFDakIsQ0FBQztLQUFBO0lBRVksT0FBTyxDQUFDLE1BQW9COztZQUN2QyxNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHlCQUF5QixFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztZQUU3RSxJQUFJLFFBQVEsQ0FBQyxJQUFJLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ3pDLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFzQixFQUFFLEVBQUUsQ0FBQyxJQUFJLGdCQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzthQUM1RTtZQUVELE1BQU0sUUFBUSxDQUFDO1FBQ2pCLENBQUM7S0FBQTtDQUNGO0FBM0JELHlDQTJCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHAsIEh0dHBPcHRpb25zIH0gZnJvbSBcIi4uLy4uL2Jhc2VcIjtcclxuaW1wb3J0IHsgV2FsbGV0U2NoZW1hLCBQYXltZW50LCBQYXltZW50U2NoZW1hIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBCYXNlQ3VzdG9keU9wdGlvbnMsIEN1c3RvZHlBdWRpdEZlYXR1cmUgfSBmcm9tIFwiLi4vLi4vcHJvdmlkZXJcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ3VzdG9keUF1ZGl0V2ViU2VydmljZU9wdGlvbnMgZXh0ZW5kcyBIdHRwT3B0aW9ucywgQmFzZUN1c3RvZHlPcHRpb25zIHtcclxuICBodHRwPzogSHR0cDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9keUF1ZGl0V2ViU2VydmljZSBleHRlbmRzIEN1c3RvZHlBdWRpdEZlYXR1cmUge1xyXG4gIHB1YmxpYyBodHRwOiBIdHRwO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVhZG9ubHkgb3B0aW9uczogQ3VzdG9keUF1ZGl0V2ViU2VydmljZU9wdGlvbnMpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLmh0dHAgPSBvcHRpb25zLmh0dHAgfHwgbmV3IEh0dHAob3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgYmFsYW5jZSh3YWxsZXQ6IFdhbGxldFNjaGVtYSk6IFByb21pc2U8W3sgYmFsYW5jZTogc3RyaW5nIH1dPiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuaHR0cC5wb3N0KFwiL3Byb3ZpZGVyL2F1ZGl0L2JhbGFuY2VcIiwgeyB3YWxsZXQgfSk7XHJcblxyXG4gICAgaWYgKHJlc3BvbnNlLmRhdGEgJiYgcmVzcG9uc2UuZGF0YS5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgdGhyb3cgcmVzcG9uc2U7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgaGlzdG9yeSh3YWxsZXQ6IFdhbGxldFNjaGVtYSk6IFByb21pc2U8UGF5bWVudFtdPiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuaHR0cC5wb3N0KFwiL3Byb3ZpZGVyL2F1ZGl0L2hpc3RvcnlcIiwgeyB3YWxsZXQgfSk7XHJcblxyXG4gICAgaWYgKHJlc3BvbnNlLmRhdGEgJiYgcmVzcG9uc2UuZGF0YS5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGEubWFwKChwYXltZW50OiBQYXltZW50U2NoZW1hKSA9PiBuZXcgUGF5bWVudChwYXltZW50KSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhyb3cgcmVzcG9uc2U7XHJcbiAgfVxyXG59XHJcbiJdfQ==