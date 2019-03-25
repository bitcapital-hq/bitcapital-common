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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9keVByb3ZpZGVyV2ViU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9zZXJ2aWNlcy9DdXN0b2R5UHJvdmlkZXJXZWJTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxrQ0FBNEM7QUFFNUMsMENBZXFCO0FBQ3JCLG9HQUFpRztBQUlqRyxNQUE4Qix5QkFBMEIsU0FBUSxzQkFBVztJQUd6RSxZQUE0QixPQUF5QztRQUNuRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFEVyxZQUFPLEdBQVAsT0FBTyxDQUFrQztRQUVuRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksV0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksaUVBQStCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBWU0sT0FBTyxDQUFDLElBQW9CO1FBQ2pDLE1BQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFcEMsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFO1lBQzNFLGdEQUFnRDtZQUNoRCxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztTQUM3QjtRQUVELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFWSxRQUFRLENBQUMsSUFBZ0IsRUFBRSxNQUFvQixFQUFFLFVBQWdCOztZQUM1RSxNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO1lBRTFGLElBQUksUUFBUSxDQUFDLElBQUksSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFO2dCQUNsQyxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7YUFDdEI7WUFFRCxNQUFNLFFBQVEsQ0FBQztRQUNqQixDQUFDO0tBQUE7SUFFWSxNQUFNLENBQUMsSUFBZ0IsRUFBRSxNQUFvQjs7WUFDeEQsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1lBRTVFLElBQUksUUFBUSxDQUFDLElBQUksRUFBRTtnQkFDakIsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO2FBQ3RCO1lBRUQsTUFBTSxRQUFRLENBQUM7UUFDakIsQ0FBQztLQUFBO0lBRVksVUFBVSxDQUNyQixJQUFnQixFQUNoQixNQUFvQixFQUNwQixNQUF3Qjs7WUFFeEIsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztZQUV4RixJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUU7Z0JBQ2pCLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQzthQUN0QjtZQUVELE1BQU0sUUFBUSxDQUFDO1FBQ2pCLENBQUM7S0FBQTtDQUNGO0FBL0RELDRDQStEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHAsIEh0dHBPcHRpb25zIH0gZnJvbSBcIi4uL2Jhc2VcIjtcbmltcG9ydCB7IFVzZXJTY2hlbWEsIFdhbGxldFNjaGVtYSB9IGZyb20gXCIuLi9tb2RlbHNcIjtcbmltcG9ydCB7XG4gIEJhc2VDdXN0b2R5LFxuICBCYXNlQ3VzdG9keU9wdGlvbnMsXG4gIFVucmVnaXN0ZXJSZWFzb24sXG4gIEN1c3RvZHlGZWF0dXJlLFxuICBCYXNlQ3VzdG9keUZlYXR1cmUsXG4gIEN1c3RvZHlBdWRpdEZlYXR1cmUsXG4gIEN1c3RvZHlCbG9ja0ZlYXR1cmUsXG4gIEN1c3RvZHlCb2xldG9GZWF0dXJlLFxuICBDdXN0b2R5Q2FyZEZlYXR1cmUsXG4gIEN1c3RvZHlEZXBvc2l0RmVhdHVyZSxcbiAgQ3VzdG9keVBheW1lbnRGZWF0dXJlLFxuICBDdXN0b2R5UG9zdGJhY2tGZWF0dXJlLFxuICBDdXN0b2R5V2l0aGRyYXdGZWF0dXJlLFxuICBDdXN0b2R5UGhvbmVDcmVkaXRGZWF0dXJlXG59IGZyb20gXCIuLi9wcm92aWRlclwiO1xuaW1wb3J0IHsgQ3VzdG9keVByb3ZpZGVyRXJyb3JJbnRlcmNlcHRvciB9IGZyb20gXCIuL2ludGVyY2VwdG9ycy9DdXN0b2R5UHJvdmlkZXJFcnJvckludGVyY2VwdG9yXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3VzdG9keVByb3ZpZGVyV2ViU2VydmljZU9wdGlvbnMgZXh0ZW5kcyBIdHRwT3B0aW9ucywgQmFzZUN1c3RvZHlPcHRpb25zIHt9XG5cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEN1c3RvZHlQcm92aWRlcldlYlNlcnZpY2UgZXh0ZW5kcyBCYXNlQ3VzdG9keSB7XG4gIHByb3RlY3RlZCBodHRwOiBIdHRwO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSBvcHRpb25zOiBDdXN0b2R5UHJvdmlkZXJXZWJTZXJ2aWNlT3B0aW9ucykge1xuICAgIHN1cGVyKG9wdGlvbnMpO1xuICAgIHRoaXMuaHR0cCA9IG5ldyBIdHRwKG9wdGlvbnMpO1xuICAgIHRoaXMuaHR0cC5pbnRlcmNlcHRvcihuZXcgQ3VzdG9keVByb3ZpZGVyRXJyb3JJbnRlcmNlcHRvcih0aGlzKSk7XG4gIH1cblxuICBwdWJsaWMgZmVhdHVyZSh0eXBlOiBDdXN0b2R5RmVhdHVyZS5BVURJVCk6IEN1c3RvZHlBdWRpdEZlYXR1cmU7XG4gIHB1YmxpYyBmZWF0dXJlKHR5cGU6IEN1c3RvZHlGZWF0dXJlLkJMT0NLKTogQ3VzdG9keUJsb2NrRmVhdHVyZTtcbiAgcHVibGljIGZlYXR1cmUodHlwZTogQ3VzdG9keUZlYXR1cmUuQk9MRVRPKTogQ3VzdG9keUJvbGV0b0ZlYXR1cmU7XG4gIHB1YmxpYyBmZWF0dXJlKHR5cGU6IEN1c3RvZHlGZWF0dXJlLkNBUkQpOiBDdXN0b2R5Q2FyZEZlYXR1cmU7XG4gIHB1YmxpYyBmZWF0dXJlKHR5cGU6IEN1c3RvZHlGZWF0dXJlLkRFUE9TSVQpOiBDdXN0b2R5RGVwb3NpdEZlYXR1cmU7XG4gIHB1YmxpYyBmZWF0dXJlKHR5cGU6IEN1c3RvZHlGZWF0dXJlLlBBWU1FTlQpOiBDdXN0b2R5UGF5bWVudEZlYXR1cmU7XG4gIHB1YmxpYyBmZWF0dXJlKHR5cGU6IEN1c3RvZHlGZWF0dXJlLlBPU1RCQUNLKTogQ3VzdG9keVBvc3RiYWNrRmVhdHVyZTtcbiAgcHVibGljIGZlYXR1cmUodHlwZTogQ3VzdG9keUZlYXR1cmUuV0lUSERSQVcpOiBDdXN0b2R5V2l0aGRyYXdGZWF0dXJlO1xuICBwdWJsaWMgZmVhdHVyZSh0eXBlOiBDdXN0b2R5RmVhdHVyZS5QSE9ORV9DUkVESVRTKTogQ3VzdG9keVBob25lQ3JlZGl0RmVhdHVyZTtcbiAgcHVibGljIGZlYXR1cmUodHlwZTogQ3VzdG9keUZlYXR1cmUpOiBCYXNlQ3VzdG9keUZlYXR1cmU7XG4gIHB1YmxpYyBmZWF0dXJlKHR5cGU6IEN1c3RvZHlGZWF0dXJlKTogQmFzZUN1c3RvZHlGZWF0dXJlIHtcbiAgICBjb25zdCBmZWF0dXJlID0gc3VwZXIuZmVhdHVyZSh0eXBlKTtcblxuICAgIGlmIChmZWF0dXJlW1wiaHR0cFwiXSAmJiAoIWZlYXR1cmVbXCJvcHRpb25zXCJdIHx8ICFmZWF0dXJlW1wib3B0aW9uc1wiXVtcImh0dHBcIl0pKSB7XG4gICAgICAvLyBPdmVycmlkZSBodHRwIGNsaWVudCBpZiBub3QgYWxyZWFkeSBvdmVycmlkZW5cbiAgICAgIGZlYXR1cmVbXCJodHRwXCJdID0gdGhpcy5odHRwO1xuICAgIH1cblxuICAgIHJldHVybiBmZWF0dXJlO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIHJlZ2lzdGVyKHVzZXI6IFVzZXJTY2hlbWEsIHdhbGxldDogV2FsbGV0U2NoZW1hLCBleHRlcm5hbElkPzogYW55KTogUHJvbWlzZTx7IGV4dGVybmFsSWQ6IHN0cmluZyB9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmh0dHAucG9zdChcIi9wcm92aWRlci9yZWdpc3RlclwiLCB7IHVzZXIsIHdhbGxldCwgZXh0ZXJuYWxJZCB9KTtcblxuICAgIGlmIChyZXNwb25zZS5kYXRhICYmIHJlc3BvbnNlLmRhdGEpIHtcbiAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgIH1cblxuICAgIHRocm93IHJlc3BvbnNlO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIHVwZGF0ZSh1c2VyOiBVc2VyU2NoZW1hLCB3YWxsZXQ6IFdhbGxldFNjaGVtYSk6IFByb21pc2U8eyBleHRlcm5hbElkOiBzdHJpbmcgfT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5odHRwLnBvc3QoXCIvcHJvdmlkZXIvdXBkYXRlXCIsIHsgdXNlciwgd2FsbGV0IH0pO1xuXG4gICAgaWYgKHJlc3BvbnNlLmRhdGEpIHtcbiAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgIH1cblxuICAgIHRocm93IHJlc3BvbnNlO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIHVucmVnaXN0ZXIoXG4gICAgdXNlcjogVXNlclNjaGVtYSxcbiAgICB3YWxsZXQ6IFdhbGxldFNjaGVtYSxcbiAgICByZWFzb246IFVucmVnaXN0ZXJSZWFzb25cbiAgKTogUHJvbWlzZTx7IGV4dGVybmFsSWQ6IHN0cmluZyB9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmh0dHAucG9zdChcIi9wcm92aWRlci91bnJlZ2lzdGVyXCIsIHsgdXNlciwgd2FsbGV0LCByZWFzb24gfSk7XG5cbiAgICBpZiAocmVzcG9uc2UuZGF0YSkge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgfVxuXG4gICAgdGhyb3cgcmVzcG9uc2U7XG4gIH1cbn1cbiJdfQ==