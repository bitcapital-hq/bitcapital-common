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
const base_1 = require("../base");
const provider_1 = require("../provider");
const CustodyProviderErrorInterceptor_1 = require("./interceptors/CustodyProviderErrorInterceptor");
class CustodyProviderWebService extends provider_1.BaseCustody {
    constructor(options) {
        super(options);
        this.options = options;
        this.http = new base_1.Http(options);
        this.http.interceptor(new CustodyProviderErrorInterceptor_1.CustodyProviderErrorInterceptor(this));
    }
    feature(type) {
        const feature = super.feature(type);
        if (feature["http"] && (!feature["options"] || !feature["options"]["http"])) {
            // Override http client if not already overriden
            feature["http"] = this.http;
        }
        return feature;
    }
    register(user, wallet, externalId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.http.post("/provider/register", { user, wallet, externalId });
            if (response.data && response.data) {
                return response.data;
            }
            throw response;
        });
    }
    update(user, wallet) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.http.post("/provider/update", { user, wallet });
            if (response.data) {
                return response.data;
            }
            throw response;
        });
    }
    unregister(user, wallet, reason) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.http.post("/provider/unregister", { user, wallet, reason });
            if (response.data) {
                return response.data;
            }
            throw response;
        });
    }
}
exports.default = CustodyProviderWebService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9keVByb3ZpZGVyV2ViU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9zZXJ2aWNlcy9DdXN0b2R5UHJvdmlkZXJXZWJTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxrQ0FBNEM7QUFFNUMsMENBQXNTO0FBQ3RTLG9HQUFpRztBQUlqRyxNQUE4Qix5QkFBMEIsU0FBUSxzQkFBVztJQUd6RSxZQUE0QixPQUF5QztRQUNuRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFEVyxZQUFPLEdBQVAsT0FBTyxDQUFrQztRQUVuRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksV0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksaUVBQStCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBV00sT0FBTyxDQUFDLElBQW9CO1FBQ2pDLE1BQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFcEMsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFO1lBQzNFLGdEQUFnRDtZQUNoRCxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztTQUM3QjtRQUVELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFWSxRQUFRLENBQUMsSUFBZ0IsRUFBRSxNQUFvQixFQUFFLFVBQWdCOztZQUM1RSxNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO1lBRTFGLElBQUksUUFBUSxDQUFDLElBQUksSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFO2dCQUNsQyxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7YUFDdEI7WUFFRCxNQUFNLFFBQVEsQ0FBQztRQUNqQixDQUFDO0tBQUE7SUFFWSxNQUFNLENBQUMsSUFBZ0IsRUFBRSxNQUFvQjs7WUFDeEQsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1lBRTVFLElBQUksUUFBUSxDQUFDLElBQUksRUFBRTtnQkFDakIsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO2FBQ3RCO1lBRUQsTUFBTSxRQUFRLENBQUM7UUFDakIsQ0FBQztLQUFBO0lBRVksVUFBVSxDQUNyQixJQUFnQixFQUNoQixNQUFvQixFQUNwQixNQUF3Qjs7WUFFeEIsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztZQUV4RixJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUU7Z0JBQ2pCLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQzthQUN0QjtZQUVELE1BQU0sUUFBUSxDQUFDO1FBQ2pCLENBQUM7S0FBQTtDQUNGO0FBOURELDRDQThEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHAsIEh0dHBPcHRpb25zIH0gZnJvbSBcIi4uL2Jhc2VcIjtcbmltcG9ydCB7IFVzZXJTY2hlbWEsIFdhbGxldFNjaGVtYSB9IGZyb20gXCIuLi9tb2RlbHNcIjtcbmltcG9ydCB7IEJhc2VDdXN0b2R5LCBCYXNlQ3VzdG9keU9wdGlvbnMsIFVucmVnaXN0ZXJSZWFzb24sIEN1c3RvZHlGZWF0dXJlLCBCYXNlQ3VzdG9keUZlYXR1cmUsIEN1c3RvZHlBdWRpdEZlYXR1cmUsIEN1c3RvZHlCbG9ja0ZlYXR1cmUsIEN1c3RvZHlCb2xldG9GZWF0dXJlLCBDdXN0b2R5Q2FyZEZlYXR1cmUsIEN1c3RvZHlEZXBvc2l0RmVhdHVyZSwgQ3VzdG9keVBheW1lbnRGZWF0dXJlLCBDdXN0b2R5UG9zdGJhY2tGZWF0dXJlLCBDdXN0b2R5V2l0aGRyYXdGZWF0dXJlIH0gZnJvbSBcIi4uL3Byb3ZpZGVyXCI7XG5pbXBvcnQgeyBDdXN0b2R5UHJvdmlkZXJFcnJvckludGVyY2VwdG9yIH0gZnJvbSBcIi4vaW50ZXJjZXB0b3JzL0N1c3RvZHlQcm92aWRlckVycm9ySW50ZXJjZXB0b3JcIjtcblxuZXhwb3J0IGludGVyZmFjZSBDdXN0b2R5UHJvdmlkZXJXZWJTZXJ2aWNlT3B0aW9ucyBleHRlbmRzIEh0dHBPcHRpb25zLCBCYXNlQ3VzdG9keU9wdGlvbnMge31cblxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQ3VzdG9keVByb3ZpZGVyV2ViU2VydmljZSBleHRlbmRzIEJhc2VDdXN0b2R5IHtcbiAgcHJvdGVjdGVkIGh0dHA6IEh0dHA7XG5cbiAgY29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5IG9wdGlvbnM6IEN1c3RvZHlQcm92aWRlcldlYlNlcnZpY2VPcHRpb25zKSB7XG4gICAgc3VwZXIob3B0aW9ucyk7XG4gICAgdGhpcy5odHRwID0gbmV3IEh0dHAob3B0aW9ucyk7XG4gICAgdGhpcy5odHRwLmludGVyY2VwdG9yKG5ldyBDdXN0b2R5UHJvdmlkZXJFcnJvckludGVyY2VwdG9yKHRoaXMpKTtcbiAgfVxuXG4gIHB1YmxpYyBmZWF0dXJlKHR5cGU6IEN1c3RvZHlGZWF0dXJlLkFVRElUKTogQ3VzdG9keUF1ZGl0RmVhdHVyZTtcbiAgcHVibGljIGZlYXR1cmUodHlwZTogQ3VzdG9keUZlYXR1cmUuQkxPQ0spOiBDdXN0b2R5QmxvY2tGZWF0dXJlO1xuICBwdWJsaWMgZmVhdHVyZSh0eXBlOiBDdXN0b2R5RmVhdHVyZS5CT0xFVE8pOiBDdXN0b2R5Qm9sZXRvRmVhdHVyZTtcbiAgcHVibGljIGZlYXR1cmUodHlwZTogQ3VzdG9keUZlYXR1cmUuQ0FSRCk6IEN1c3RvZHlDYXJkRmVhdHVyZTtcbiAgcHVibGljIGZlYXR1cmUodHlwZTogQ3VzdG9keUZlYXR1cmUuREVQT1NJVCk6IEN1c3RvZHlEZXBvc2l0RmVhdHVyZTtcbiAgcHVibGljIGZlYXR1cmUodHlwZTogQ3VzdG9keUZlYXR1cmUuUEFZTUVOVCk6IEN1c3RvZHlQYXltZW50RmVhdHVyZTtcbiAgcHVibGljIGZlYXR1cmUodHlwZTogQ3VzdG9keUZlYXR1cmUuUE9TVEJBQ0spOiBDdXN0b2R5UG9zdGJhY2tGZWF0dXJlO1xuICBwdWJsaWMgZmVhdHVyZSh0eXBlOiBDdXN0b2R5RmVhdHVyZS5XSVRIRFJBVyk6IEN1c3RvZHlXaXRoZHJhd0ZlYXR1cmU7XG4gIHB1YmxpYyBmZWF0dXJlKHR5cGU6IEN1c3RvZHlGZWF0dXJlKTogQmFzZUN1c3RvZHlGZWF0dXJlO1xuICBwdWJsaWMgZmVhdHVyZSh0eXBlOiBDdXN0b2R5RmVhdHVyZSk6IEJhc2VDdXN0b2R5RmVhdHVyZSB7XG4gICAgY29uc3QgZmVhdHVyZSA9IHN1cGVyLmZlYXR1cmUodHlwZSk7XG5cbiAgICBpZiAoZmVhdHVyZVtcImh0dHBcIl0gJiYgKCFmZWF0dXJlW1wib3B0aW9uc1wiXSB8fCAhZmVhdHVyZVtcIm9wdGlvbnNcIl1bXCJodHRwXCJdKSkge1xuICAgICAgLy8gT3ZlcnJpZGUgaHR0cCBjbGllbnQgaWYgbm90IGFscmVhZHkgb3ZlcnJpZGVuXG4gICAgICBmZWF0dXJlW1wiaHR0cFwiXSA9IHRoaXMuaHR0cDtcbiAgICB9XG5cbiAgICByZXR1cm4gZmVhdHVyZTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyByZWdpc3Rlcih1c2VyOiBVc2VyU2NoZW1hLCB3YWxsZXQ6IFdhbGxldFNjaGVtYSwgZXh0ZXJuYWxJZD86IGFueSk6IFByb21pc2U8eyBleHRlcm5hbElkOiBzdHJpbmcgfT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5odHRwLnBvc3QoXCIvcHJvdmlkZXIvcmVnaXN0ZXJcIiwgeyB1c2VyLCB3YWxsZXQsIGV4dGVybmFsSWQgfSk7XG5cbiAgICBpZiAocmVzcG9uc2UuZGF0YSAmJiByZXNwb25zZS5kYXRhKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICB9XG5cbiAgICB0aHJvdyByZXNwb25zZTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyB1cGRhdGUodXNlcjogVXNlclNjaGVtYSwgd2FsbGV0OiBXYWxsZXRTY2hlbWEpOiBQcm9taXNlPHsgZXh0ZXJuYWxJZDogc3RyaW5nIH0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuaHR0cC5wb3N0KFwiL3Byb3ZpZGVyL3VwZGF0ZVwiLCB7IHVzZXIsIHdhbGxldCB9KTtcblxuICAgIGlmIChyZXNwb25zZS5kYXRhKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICB9XG5cbiAgICB0aHJvdyByZXNwb25zZTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyB1bnJlZ2lzdGVyKFxuICAgIHVzZXI6IFVzZXJTY2hlbWEsXG4gICAgd2FsbGV0OiBXYWxsZXRTY2hlbWEsXG4gICAgcmVhc29uOiBVbnJlZ2lzdGVyUmVhc29uXG4gICk6IFByb21pc2U8eyBleHRlcm5hbElkOiBzdHJpbmcgfT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5odHRwLnBvc3QoXCIvcHJvdmlkZXIvdW5yZWdpc3RlclwiLCB7IHVzZXIsIHdhbGxldCwgcmVhc29uIH0pO1xuXG4gICAgaWYgKHJlc3BvbnNlLmRhdGEpIHtcbiAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgIH1cblxuICAgIHRocm93IHJlc3BvbnNlO1xuICB9XG59XG4iXX0=