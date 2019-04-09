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
const provider_1 = require("../../provider");
class CustodyPhoneCreditWebService extends provider_1.CustodyPhoneCreditFeature {
    constructor(options = {}) {
        super();
        this.options = options;
        this.http = new base_1.Http(options);
    }
    getMobileCreditProviders() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.http.get("/provider/mobile/providers/info");
            if (response.data) {
                return response.data;
            }
            throw response;
        });
    }
    createOrder(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.http.post("/provider/mobile/order/create", requestBody);
            if (response.data) {
                return response.data;
            }
            throw response;
        });
    }
    completeOrder(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.http.post("/provider/mobile/order/complete", requestBody);
            if (response.data) {
                return response.data;
            }
            throw response;
        });
    }
    getOrderHistory(walletId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.http.get(`/provider/mobile/order/history/${walletId}`);
            if (response.data) {
                return response.data;
            }
            throw response;
        });
    }
    getOrderAmountForWalletToday(walletId) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.http.get(`/provider/mobile/order/${walletId}/amount/today`);
            if (response.data) {
                return response.data;
            }
            throw response;
        });
    }
}
exports.default = CustodyPhoneCreditWebService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9keVBob25lQ3JlZGl0V2ViU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9zZXJ2aWNlcy9mZWF0dXJlcy9DdXN0b2R5UGhvbmVDcmVkaXRXZWJTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQ0FBK0M7QUFDL0MsNkNBQStFO0FBTS9FLE1BQXFCLDRCQUE2QixTQUFRLG9DQUF5QjtJQUdqRixZQUE0QixVQUErQyxFQUFFO1FBQzNFLEtBQUssRUFBRSxDQUFDO1FBRGtCLFlBQU8sR0FBUCxPQUFPLENBQTBDO1FBRTNFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVZLHdCQUF3Qjs7WUFDbkMsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1lBRXhFLElBQUksUUFBUSxDQUFDLElBQUksRUFBRTtnQkFDakIsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO2FBQ3RCO1lBRUQsTUFBTSxRQUFRLENBQUM7UUFDakIsQ0FBQztLQUFBO0lBRVksV0FBVyxDQUFDLFdBQVc7O1lBQ2xDLE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsK0JBQStCLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFFcEYsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFO2dCQUNqQixPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7YUFDdEI7WUFFRCxNQUFNLFFBQVEsQ0FBQztRQUNqQixDQUFDO0tBQUE7SUFFWSxhQUFhLENBQUMsV0FBVzs7WUFDcEMsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQ0FBaUMsRUFBRSxXQUFXLENBQUMsQ0FBQztZQUV0RixJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUU7Z0JBQ2pCLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQzthQUN0QjtZQUVELE1BQU0sUUFBUSxDQUFDO1FBQ2pCLENBQUM7S0FBQTtJQUVZLGVBQWUsQ0FBQyxRQUFnQjs7WUFDM0MsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsUUFBUSxFQUFFLENBQUMsQ0FBQztZQUVuRixJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUU7Z0JBQ2pCLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQzthQUN0QjtZQUVELE1BQU0sUUFBUSxDQUFDO1FBQ2pCLENBQUM7S0FBQTtJQUVZLDRCQUE0QixDQUFDLFFBQWdCOztZQUN4RCxNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLDBCQUEwQixRQUFRLGVBQWUsQ0FBQyxDQUFDO1lBRXhGLElBQUksUUFBUSxDQUFDLElBQUksRUFBRTtnQkFDakIsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO2FBQ3RCO1lBRUQsTUFBTSxRQUFRLENBQUM7UUFDakIsQ0FBQztLQUFBO0NBQ0Y7QUF6REQsK0NBeURDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cCwgSHR0cE9wdGlvbnMgfSBmcm9tIFwiLi4vLi4vYmFzZVwiO1xuaW1wb3J0IHsgQmFzZUN1c3RvZHlPcHRpb25zLCBDdXN0b2R5UGhvbmVDcmVkaXRGZWF0dXJlIH0gZnJvbSBcIi4uLy4uL3Byb3ZpZGVyXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3VzdG9keVBob25lQ3JlZGl0V2ViU2VydmljZU9wdGlvbnMgZXh0ZW5kcyBIdHRwT3B0aW9ucywgQmFzZUN1c3RvZHlPcHRpb25zIHtcbiAgaHR0cD86IEh0dHA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvZHlQaG9uZUNyZWRpdFdlYlNlcnZpY2UgZXh0ZW5kcyBDdXN0b2R5UGhvbmVDcmVkaXRGZWF0dXJlIHtcbiAgcHVibGljIGh0dHA6IEh0dHA7XG5cbiAgY29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5IG9wdGlvbnM6IEN1c3RvZHlQaG9uZUNyZWRpdFdlYlNlcnZpY2VPcHRpb25zID0ge30pIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuaHR0cCA9IG5ldyBIdHRwKG9wdGlvbnMpO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGdldE1vYmlsZUNyZWRpdFByb3ZpZGVycygpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuaHR0cC5nZXQoXCIvcHJvdmlkZXIvbW9iaWxlL3Byb3ZpZGVycy9pbmZvXCIpO1xuXG4gICAgaWYgKHJlc3BvbnNlLmRhdGEpIHtcbiAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgIH1cblxuICAgIHRocm93IHJlc3BvbnNlO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGNyZWF0ZU9yZGVyKHJlcXVlc3RCb2R5KSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmh0dHAucG9zdChcIi9wcm92aWRlci9tb2JpbGUvb3JkZXIvY3JlYXRlXCIsIHJlcXVlc3RCb2R5KTtcblxuICAgIGlmIChyZXNwb25zZS5kYXRhKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICB9XG5cbiAgICB0aHJvdyByZXNwb25zZTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBjb21wbGV0ZU9yZGVyKHJlcXVlc3RCb2R5KSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmh0dHAucG9zdChcIi9wcm92aWRlci9tb2JpbGUvb3JkZXIvY29tcGxldGVcIiwgcmVxdWVzdEJvZHkpO1xuXG4gICAgaWYgKHJlc3BvbnNlLmRhdGEpIHtcbiAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgIH1cblxuICAgIHRocm93IHJlc3BvbnNlO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGdldE9yZGVySGlzdG9yeSh3YWxsZXRJZDogc3RyaW5nKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmh0dHAuZ2V0KGAvcHJvdmlkZXIvbW9iaWxlL29yZGVyL2hpc3RvcnkvJHt3YWxsZXRJZH1gKTtcblxuICAgIGlmIChyZXNwb25zZS5kYXRhKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICB9XG5cbiAgICB0aHJvdyByZXNwb25zZTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBnZXRPcmRlckFtb3VudEZvcldhbGxldFRvZGF5KHdhbGxldElkOiBzdHJpbmcpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuaHR0cC5nZXQoYC9wcm92aWRlci9tb2JpbGUvb3JkZXIvJHt3YWxsZXRJZH0vYW1vdW50L3RvZGF5YCk7XG5cbiAgICBpZiAocmVzcG9uc2UuZGF0YSkge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgfVxuXG4gICAgdGhyb3cgcmVzcG9uc2U7XG4gIH1cbn1cbiJdfQ==