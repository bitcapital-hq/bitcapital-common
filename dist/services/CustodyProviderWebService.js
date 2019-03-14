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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9keVByb3ZpZGVyV2ViU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9zZXJ2aWNlcy9DdXN0b2R5UHJvdmlkZXJXZWJTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxrQ0FBNEM7QUFFNUMsMENBY3FCO0FBQ3JCLG9HQUFpRztBQUlqRyxNQUE4Qix5QkFBMEIsU0FBUSxzQkFBVztJQUd6RSxZQUE0QixPQUF5QztRQUNuRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFEVyxZQUFPLEdBQVAsT0FBTyxDQUFrQztRQUVuRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksV0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksaUVBQStCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBV00sT0FBTyxDQUFDLElBQW9CO1FBQ2pDLE1BQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFcEMsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFO1lBQzNFLGdEQUFnRDtZQUNoRCxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztTQUM3QjtRQUVELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFWSxRQUFRLENBQUMsSUFBZ0IsRUFBRSxNQUFvQixFQUFFLFVBQWdCOztZQUM1RSxNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO1lBRTFGLElBQUksUUFBUSxDQUFDLElBQUksSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFO2dCQUNsQyxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7YUFDdEI7WUFFRCxNQUFNLFFBQVEsQ0FBQztRQUNqQixDQUFDO0tBQUE7SUFFWSxNQUFNLENBQUMsSUFBZ0IsRUFBRSxNQUFvQjs7WUFDeEQsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1lBRTVFLElBQUksUUFBUSxDQUFDLElBQUksRUFBRTtnQkFDakIsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO2FBQ3RCO1lBRUQsTUFBTSxRQUFRLENBQUM7UUFDakIsQ0FBQztLQUFBO0lBRVksVUFBVSxDQUNyQixJQUFnQixFQUNoQixNQUFvQixFQUNwQixNQUF3Qjs7WUFFeEIsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztZQUV4RixJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUU7Z0JBQ2pCLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQzthQUN0QjtZQUVELE1BQU0sUUFBUSxDQUFDO1FBQ2pCLENBQUM7S0FBQTtDQUNGO0FBOURELDRDQThEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHAsIEh0dHBPcHRpb25zIH0gZnJvbSBcIi4uL2Jhc2VcIjtcclxuaW1wb3J0IHsgVXNlclNjaGVtYSwgV2FsbGV0U2NoZW1hIH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQge1xyXG4gIEJhc2VDdXN0b2R5LFxyXG4gIEJhc2VDdXN0b2R5T3B0aW9ucyxcclxuICBVbnJlZ2lzdGVyUmVhc29uLFxyXG4gIEN1c3RvZHlGZWF0dXJlLFxyXG4gIEJhc2VDdXN0b2R5RmVhdHVyZSxcclxuICBDdXN0b2R5QXVkaXRGZWF0dXJlLFxyXG4gIEN1c3RvZHlCbG9ja0ZlYXR1cmUsXHJcbiAgQ3VzdG9keUJvbGV0b0ZlYXR1cmUsXHJcbiAgQ3VzdG9keUNhcmRGZWF0dXJlLFxyXG4gIEN1c3RvZHlEZXBvc2l0RmVhdHVyZSxcclxuICBDdXN0b2R5UGF5bWVudEZlYXR1cmUsXHJcbiAgQ3VzdG9keVBvc3RiYWNrRmVhdHVyZSxcclxuICBDdXN0b2R5V2l0aGRyYXdGZWF0dXJlXHJcbn0gZnJvbSBcIi4uL3Byb3ZpZGVyXCI7XHJcbmltcG9ydCB7IEN1c3RvZHlQcm92aWRlckVycm9ySW50ZXJjZXB0b3IgfSBmcm9tIFwiLi9pbnRlcmNlcHRvcnMvQ3VzdG9keVByb3ZpZGVyRXJyb3JJbnRlcmNlcHRvclwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDdXN0b2R5UHJvdmlkZXJXZWJTZXJ2aWNlT3B0aW9ucyBleHRlbmRzIEh0dHBPcHRpb25zLCBCYXNlQ3VzdG9keU9wdGlvbnMge31cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEN1c3RvZHlQcm92aWRlcldlYlNlcnZpY2UgZXh0ZW5kcyBCYXNlQ3VzdG9keSB7XHJcbiAgcHJvdGVjdGVkIGh0dHA6IEh0dHA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSBvcHRpb25zOiBDdXN0b2R5UHJvdmlkZXJXZWJTZXJ2aWNlT3B0aW9ucykge1xyXG4gICAgc3VwZXIob3B0aW9ucyk7XHJcbiAgICB0aGlzLmh0dHAgPSBuZXcgSHR0cChvcHRpb25zKTtcclxuICAgIHRoaXMuaHR0cC5pbnRlcmNlcHRvcihuZXcgQ3VzdG9keVByb3ZpZGVyRXJyb3JJbnRlcmNlcHRvcih0aGlzKSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZmVhdHVyZSh0eXBlOiBDdXN0b2R5RmVhdHVyZS5BVURJVCk6IEN1c3RvZHlBdWRpdEZlYXR1cmU7XHJcbiAgcHVibGljIGZlYXR1cmUodHlwZTogQ3VzdG9keUZlYXR1cmUuQkxPQ0spOiBDdXN0b2R5QmxvY2tGZWF0dXJlO1xyXG4gIHB1YmxpYyBmZWF0dXJlKHR5cGU6IEN1c3RvZHlGZWF0dXJlLkJPTEVUTyk6IEN1c3RvZHlCb2xldG9GZWF0dXJlO1xyXG4gIHB1YmxpYyBmZWF0dXJlKHR5cGU6IEN1c3RvZHlGZWF0dXJlLkNBUkQpOiBDdXN0b2R5Q2FyZEZlYXR1cmU7XHJcbiAgcHVibGljIGZlYXR1cmUodHlwZTogQ3VzdG9keUZlYXR1cmUuREVQT1NJVCk6IEN1c3RvZHlEZXBvc2l0RmVhdHVyZTtcclxuICBwdWJsaWMgZmVhdHVyZSh0eXBlOiBDdXN0b2R5RmVhdHVyZS5QQVlNRU5UKTogQ3VzdG9keVBheW1lbnRGZWF0dXJlO1xyXG4gIHB1YmxpYyBmZWF0dXJlKHR5cGU6IEN1c3RvZHlGZWF0dXJlLlBPU1RCQUNLKTogQ3VzdG9keVBvc3RiYWNrRmVhdHVyZTtcclxuICBwdWJsaWMgZmVhdHVyZSh0eXBlOiBDdXN0b2R5RmVhdHVyZS5XSVRIRFJBVyk6IEN1c3RvZHlXaXRoZHJhd0ZlYXR1cmU7XHJcbiAgcHVibGljIGZlYXR1cmUodHlwZTogQ3VzdG9keUZlYXR1cmUpOiBCYXNlQ3VzdG9keUZlYXR1cmU7XHJcbiAgcHVibGljIGZlYXR1cmUodHlwZTogQ3VzdG9keUZlYXR1cmUpOiBCYXNlQ3VzdG9keUZlYXR1cmUge1xyXG4gICAgY29uc3QgZmVhdHVyZSA9IHN1cGVyLmZlYXR1cmUodHlwZSk7XHJcblxyXG4gICAgaWYgKGZlYXR1cmVbXCJodHRwXCJdICYmICghZmVhdHVyZVtcIm9wdGlvbnNcIl0gfHwgIWZlYXR1cmVbXCJvcHRpb25zXCJdW1wiaHR0cFwiXSkpIHtcclxuICAgICAgLy8gT3ZlcnJpZGUgaHR0cCBjbGllbnQgaWYgbm90IGFscmVhZHkgb3ZlcnJpZGVuXHJcbiAgICAgIGZlYXR1cmVbXCJodHRwXCJdID0gdGhpcy5odHRwO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmZWF0dXJlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIHJlZ2lzdGVyKHVzZXI6IFVzZXJTY2hlbWEsIHdhbGxldDogV2FsbGV0U2NoZW1hLCBleHRlcm5hbElkPzogYW55KTogUHJvbWlzZTx7IGV4dGVybmFsSWQ6IHN0cmluZyB9PiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuaHR0cC5wb3N0KFwiL3Byb3ZpZGVyL3JlZ2lzdGVyXCIsIHsgdXNlciwgd2FsbGV0LCBleHRlcm5hbElkIH0pO1xyXG5cclxuICAgIGlmIChyZXNwb25zZS5kYXRhICYmIHJlc3BvbnNlLmRhdGEpIHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgdGhyb3cgcmVzcG9uc2U7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgdXBkYXRlKHVzZXI6IFVzZXJTY2hlbWEsIHdhbGxldDogV2FsbGV0U2NoZW1hKTogUHJvbWlzZTx7IGV4dGVybmFsSWQ6IHN0cmluZyB9PiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuaHR0cC5wb3N0KFwiL3Byb3ZpZGVyL3VwZGF0ZVwiLCB7IHVzZXIsIHdhbGxldCB9KTtcclxuXHJcbiAgICBpZiAocmVzcG9uc2UuZGF0YSkge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICB0aHJvdyByZXNwb25zZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyB1bnJlZ2lzdGVyKFxyXG4gICAgdXNlcjogVXNlclNjaGVtYSxcclxuICAgIHdhbGxldDogV2FsbGV0U2NoZW1hLFxyXG4gICAgcmVhc29uOiBVbnJlZ2lzdGVyUmVhc29uXHJcbiAgKTogUHJvbWlzZTx7IGV4dGVybmFsSWQ6IHN0cmluZyB9PiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuaHR0cC5wb3N0KFwiL3Byb3ZpZGVyL3VucmVnaXN0ZXJcIiwgeyB1c2VyLCB3YWxsZXQsIHJlYXNvbiB9KTtcclxuXHJcbiAgICBpZiAocmVzcG9uc2UuZGF0YSkge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICB0aHJvdyByZXNwb25zZTtcclxuICB9XHJcbn1cclxuIl19