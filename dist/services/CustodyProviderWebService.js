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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9keVByb3ZpZGVyV2ViU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9zZXJ2aWNlcy9DdXN0b2R5UHJvdmlkZXJXZWJTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxrQ0FBNEM7QUFFNUMsMENBQWdHO0FBQ2hHLG9HQUFpRztBQUlqRyxNQUE4Qix5QkFBMEIsU0FBUSxzQkFBVztJQUd6RSxZQUE0QixPQUF5QztRQUNuRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFEVyxZQUFPLEdBQVAsT0FBTyxDQUFrQztRQUVuRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksV0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksaUVBQStCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRU0sT0FBTyxDQUFPLElBQW9CO1FBQ3ZDLE1BQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFcEMsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFO1lBQzNFLGdEQUFnRDtZQUNoRCxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztTQUM3QjtRQUVELE9BQU8sT0FBZSxDQUFDO0lBQ3pCLENBQUM7SUFFWSxRQUFRLENBQUMsSUFBZ0IsRUFBRSxNQUFvQixFQUFFLFVBQWdCOztZQUM1RSxNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO1lBRTFGLElBQUksUUFBUSxDQUFDLElBQUksSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFO2dCQUNsQyxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7YUFDdEI7WUFFRCxNQUFNLFFBQVEsQ0FBQztRQUNqQixDQUFDO0tBQUE7SUFFWSxNQUFNLENBQUMsSUFBZ0IsRUFBRSxNQUFvQjs7WUFDeEQsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1lBRTVFLElBQUksUUFBUSxDQUFDLElBQUksRUFBRTtnQkFDakIsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO2FBQ3RCO1lBRUQsTUFBTSxRQUFRLENBQUM7UUFDakIsQ0FBQztLQUFBO0lBRVksVUFBVSxDQUNyQixJQUFnQixFQUNoQixNQUFvQixFQUNwQixNQUF3Qjs7WUFFeEIsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztZQUV4RixJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUU7Z0JBQ2pCLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQzthQUN0QjtZQUVELE1BQU0sUUFBUSxDQUFDO1FBQ2pCLENBQUM7S0FBQTtDQUNGO0FBckRELDRDQXFEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHAsIEh0dHBPcHRpb25zIH0gZnJvbSBcIi4uL2Jhc2VcIjtcbmltcG9ydCB7IFVzZXJTY2hlbWEsIFdhbGxldFNjaGVtYSB9IGZyb20gXCIuLi9tb2RlbHNcIjtcbmltcG9ydCB7IEJhc2VDdXN0b2R5LCBCYXNlQ3VzdG9keU9wdGlvbnMsIFVucmVnaXN0ZXJSZWFzb24sIEN1c3RvZHlGZWF0dXJlIH0gZnJvbSBcIi4uL3Byb3ZpZGVyXCI7XG5pbXBvcnQgeyBDdXN0b2R5UHJvdmlkZXJFcnJvckludGVyY2VwdG9yIH0gZnJvbSBcIi4vaW50ZXJjZXB0b3JzL0N1c3RvZHlQcm92aWRlckVycm9ySW50ZXJjZXB0b3JcIjtcblxuZXhwb3J0IGludGVyZmFjZSBDdXN0b2R5UHJvdmlkZXJXZWJTZXJ2aWNlT3B0aW9ucyBleHRlbmRzIEh0dHBPcHRpb25zLCBCYXNlQ3VzdG9keU9wdGlvbnMge31cblxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQ3VzdG9keVByb3ZpZGVyV2ViU2VydmljZSBleHRlbmRzIEJhc2VDdXN0b2R5IHtcbiAgcHJvdGVjdGVkIGh0dHA6IEh0dHA7XG5cbiAgY29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5IG9wdGlvbnM6IEN1c3RvZHlQcm92aWRlcldlYlNlcnZpY2VPcHRpb25zKSB7XG4gICAgc3VwZXIob3B0aW9ucyk7XG4gICAgdGhpcy5odHRwID0gbmV3IEh0dHAob3B0aW9ucyk7XG4gICAgdGhpcy5odHRwLmludGVyY2VwdG9yKG5ldyBDdXN0b2R5UHJvdmlkZXJFcnJvckludGVyY2VwdG9yKHRoaXMpKTtcbiAgfVxuXG4gIHB1YmxpYyBmZWF0dXJlPFR5cGU+KHR5cGU6IEN1c3RvZHlGZWF0dXJlKTogVHlwZSB7XG4gICAgY29uc3QgZmVhdHVyZSA9IHN1cGVyLmZlYXR1cmUodHlwZSk7XG5cbiAgICBpZiAoZmVhdHVyZVtcImh0dHBcIl0gJiYgKCFmZWF0dXJlW1wib3B0aW9uc1wiXSB8fCAhZmVhdHVyZVtcIm9wdGlvbnNcIl1bXCJodHRwXCJdKSkge1xuICAgICAgLy8gT3ZlcnJpZGUgaHR0cCBjbGllbnQgaWYgbm90IGFscmVhZHkgb3ZlcnJpZGVuXG4gICAgICBmZWF0dXJlW1wiaHR0cFwiXSA9IHRoaXMuaHR0cDtcbiAgICB9XG5cbiAgICByZXR1cm4gZmVhdHVyZSBhcyBUeXBlO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIHJlZ2lzdGVyKHVzZXI6IFVzZXJTY2hlbWEsIHdhbGxldDogV2FsbGV0U2NoZW1hLCBleHRlcm5hbElkPzogYW55KTogUHJvbWlzZTx7IGV4dGVybmFsSWQ6IHN0cmluZyB9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmh0dHAucG9zdChcIi9wcm92aWRlci9yZWdpc3RlclwiLCB7IHVzZXIsIHdhbGxldCwgZXh0ZXJuYWxJZCB9KTtcblxuICAgIGlmIChyZXNwb25zZS5kYXRhICYmIHJlc3BvbnNlLmRhdGEpIHtcbiAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgIH1cblxuICAgIHRocm93IHJlc3BvbnNlO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIHVwZGF0ZSh1c2VyOiBVc2VyU2NoZW1hLCB3YWxsZXQ6IFdhbGxldFNjaGVtYSk6IFByb21pc2U8eyBleHRlcm5hbElkOiBzdHJpbmcgfT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5odHRwLnBvc3QoXCIvcHJvdmlkZXIvdXBkYXRlXCIsIHsgdXNlciwgd2FsbGV0IH0pO1xuXG4gICAgaWYgKHJlc3BvbnNlLmRhdGEpIHtcbiAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgIH1cblxuICAgIHRocm93IHJlc3BvbnNlO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIHVucmVnaXN0ZXIoXG4gICAgdXNlcjogVXNlclNjaGVtYSxcbiAgICB3YWxsZXQ6IFdhbGxldFNjaGVtYSxcbiAgICByZWFzb246IFVucmVnaXN0ZXJSZWFzb25cbiAgKTogUHJvbWlzZTx7IGV4dGVybmFsSWQ6IHN0cmluZyB9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmh0dHAucG9zdChcIi9wcm92aWRlci91bnJlZ2lzdGVyXCIsIHsgdXNlciwgd2FsbGV0LCByZWFzb24gfSk7XG5cbiAgICBpZiAocmVzcG9uc2UuZGF0YSkge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgfVxuXG4gICAgdGhyb3cgcmVzcG9uc2U7XG4gIH1cbn1cbiJdfQ==