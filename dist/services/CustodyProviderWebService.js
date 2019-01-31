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
class CustodyProviderWebService extends provider_1.BaseCustody {
    constructor(options) {
        super(options);
        this.options = options;
        this.http = new base_1.Http(options);
    }
    register(user, wallet) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.http.post('/provider/register', { user, wallet });
            if (response.data && response.data.id) {
                return response.data;
            }
            throw response;
        });
    }
    update(user, wallet) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.http.post('/provider/update', { user, wallet });
            if (response.data && response.data.id) {
                return response.data;
            }
            throw response;
        });
    }
    unregister(user, wallet, reason) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.http.post('/provider/unregister', { user, wallet, reason });
            if (response.data && response.data.id) {
                return response.data;
            }
            throw response;
        });
    }
}
exports.default = CustodyProviderWebService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9keVByb3ZpZGVyV2ViU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9zZXJ2aWNlcy9DdXN0b2R5UHJvdmlkZXJXZWJTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxrQ0FBNEM7QUFFNUMsMENBQWdGO0FBS2hGLE1BQThCLHlCQUEwQixTQUFRLHNCQUFXO0lBR3pFLFlBQTRCLE9BQXlDO1FBQ25FLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQURXLFlBQU8sR0FBUCxPQUFPLENBQWtDO1FBRW5FLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVZLFFBQVEsQ0FBQyxJQUFVLEVBQUUsTUFBYzs7WUFDOUMsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1lBRTlFLElBQUksUUFBUSxDQUFDLElBQUksSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRTtnQkFDckMsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO2FBQ3RCO1lBRUQsTUFBTSxRQUFRLENBQUM7UUFDakIsQ0FBQztLQUFBO0lBRVksTUFBTSxDQUFDLElBQVUsRUFBRSxNQUFjOztZQUM1QyxNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7WUFFNUUsSUFBSSxRQUFRLENBQUMsSUFBSSxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFO2dCQUNyQyxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7YUFDdEI7WUFFRCxNQUFNLFFBQVEsQ0FBQztRQUNqQixDQUFDO0tBQUE7SUFFWSxVQUFVLENBQUMsSUFBVSxFQUFFLE1BQWMsRUFBRSxNQUF3Qjs7WUFDMUUsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztZQUV4RixJQUFJLFFBQVEsQ0FBQyxJQUFJLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUU7Z0JBQ3JDLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQzthQUN0QjtZQUVELE1BQU0sUUFBUSxDQUFDO1FBQ2pCLENBQUM7S0FBQTtDQUNGO0FBckNELDRDQXFDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHAsIEh0dHBPcHRpb25zIH0gZnJvbSBcIi4uL2Jhc2VcIjtcclxuaW1wb3J0IHsgVXNlciwgV2FsbGV0IH0gZnJvbSBcIi4uL21vZGVsc1wiO1xyXG5pbXBvcnQgeyBCYXNlQ3VzdG9keSwgQmFzZUN1c3RvZHlPcHRpb25zLCBVbnJlZ2lzdGVyUmVhc29uIH0gZnJvbSBcIi4uL3Byb3ZpZGVyXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEN1c3RvZHlQcm92aWRlcldlYlNlcnZpY2VPcHRpb25zIGV4dGVuZHMgSHR0cE9wdGlvbnMsIEJhc2VDdXN0b2R5T3B0aW9ucyB7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEN1c3RvZHlQcm92aWRlcldlYlNlcnZpY2UgZXh0ZW5kcyBCYXNlQ3VzdG9keSB7XHJcbiAgcHJvdGVjdGVkIGh0dHA6IEh0dHA7IFxyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVhZG9ubHkgb3B0aW9uczogQ3VzdG9keVByb3ZpZGVyV2ViU2VydmljZU9wdGlvbnMpIHtcclxuICAgIHN1cGVyKG9wdGlvbnMpO1xyXG4gICAgdGhpcy5odHRwID0gbmV3IEh0dHAob3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgcmVnaXN0ZXIodXNlcjogVXNlciwgd2FsbGV0OiBXYWxsZXQpOiBQcm9taXNlPHsgaWQ6IHN0cmluZyB9PiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuaHR0cC5wb3N0KCcvcHJvdmlkZXIvcmVnaXN0ZXInLCB7IHVzZXIsIHdhbGxldCB9KTtcclxuXHJcbiAgICBpZiAocmVzcG9uc2UuZGF0YSAmJiByZXNwb25zZS5kYXRhLmlkKSB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIHRocm93IHJlc3BvbnNlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIHVwZGF0ZSh1c2VyOiBVc2VyLCB3YWxsZXQ6IFdhbGxldCk6IFByb21pc2U8eyBpZDogc3RyaW5nIH0+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5odHRwLnBvc3QoJy9wcm92aWRlci91cGRhdGUnLCB7IHVzZXIsIHdhbGxldCB9KTtcclxuXHJcbiAgICBpZiAocmVzcG9uc2UuZGF0YSAmJiByZXNwb25zZS5kYXRhLmlkKSB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIHRocm93IHJlc3BvbnNlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIHVucmVnaXN0ZXIodXNlcjogVXNlciwgd2FsbGV0OiBXYWxsZXQsIHJlYXNvbjogVW5yZWdpc3RlclJlYXNvbik6IFByb21pc2U8eyBpZDogc3RyaW5nIH0+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5odHRwLnBvc3QoJy9wcm92aWRlci91bnJlZ2lzdGVyJywgeyB1c2VyLCB3YWxsZXQsIHJlYXNvbiB9KTtcclxuXHJcbiAgICBpZiAocmVzcG9uc2UuZGF0YSAmJiByZXNwb25zZS5kYXRhLmlkKSB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIHRocm93IHJlc3BvbnNlO1xyXG4gIH1cclxufVxyXG4iXX0=