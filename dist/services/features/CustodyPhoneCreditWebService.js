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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9keVBob25lQ3JlZGl0V2ViU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9zZXJ2aWNlcy9mZWF0dXJlcy9DdXN0b2R5UGhvbmVDcmVkaXRXZWJTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQ0FBK0M7QUFDL0MsNkNBQStFO0FBTS9FLE1BQXFCLDRCQUE2QixTQUFRLG9DQUF5QjtJQUcvRSxZQUE0QixVQUErQyxFQUFFO1FBQ3pFLEtBQUssRUFBRSxDQUFDO1FBRGdCLFlBQU8sR0FBUCxPQUFPLENBQTBDO1FBRXpFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVVLHdCQUF3Qjs7WUFDakMsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1lBRXhFLElBQUksUUFBUSxDQUFDLElBQUksRUFBRTtnQkFDZixPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7YUFDeEI7WUFFRCxNQUFNLFFBQVEsQ0FBQztRQUNuQixDQUFDO0tBQUE7SUFFWSxXQUFXLENBQUMsV0FBVzs7WUFDaEMsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQywrQkFBK0IsRUFBRSxXQUFXLENBQUMsQ0FBQztZQUVwRixJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUU7Z0JBQ2YsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO2FBQ3hCO1lBRUQsTUFBTSxRQUFRLENBQUM7UUFDbkIsQ0FBQztLQUFBO0lBRVksYUFBYSxDQUFDLFdBQVc7O1lBQ2xDLE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUNBQWlDLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFFdEYsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFO2dCQUNmLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQzthQUN4QjtZQUVELE1BQU0sUUFBUSxDQUFDO1FBQ25CLENBQUM7S0FBQTtJQUVZLGVBQWUsQ0FBQyxRQUFlOztZQUN4QyxNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBRW5GLElBQUksUUFBUSxDQUFDLElBQUksRUFBRTtnQkFDZixPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7YUFDeEI7WUFFRCxNQUFNLFFBQVEsQ0FBQztRQUNuQixDQUFDO0tBQUE7SUFFWSw0QkFBNEIsQ0FBQyxRQUFlOztZQUNyRCxNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLDBCQUEwQixRQUFRLGVBQWUsQ0FBQyxDQUFDO1lBRXhGLElBQUksUUFBUSxDQUFDLElBQUksRUFBRTtnQkFDZixPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7YUFDeEI7WUFFRCxNQUFNLFFBQVEsQ0FBQztRQUNuQixDQUFDO0tBQUE7Q0FDSjtBQXpERCwrQ0F5REMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwLCBIdHRwT3B0aW9ucyB9IGZyb20gXCIuLi8uLi9iYXNlXCI7XG5pbXBvcnQgeyBCYXNlQ3VzdG9keU9wdGlvbnMsIEN1c3RvZHlQaG9uZUNyZWRpdEZlYXR1cmUgfSBmcm9tIFwiLi4vLi4vcHJvdmlkZXJcIjtcblxuZXhwb3J0IGludGVyZmFjZSBDdXN0b2R5UGhvbmVDcmVkaXRXZWJTZXJ2aWNlT3B0aW9ucyBleHRlbmRzIEh0dHBPcHRpb25zLCBCYXNlQ3VzdG9keU9wdGlvbnMge1xuICAgIGh0dHA/OiBIdHRwO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b2R5UGhvbmVDcmVkaXRXZWJTZXJ2aWNlIGV4dGVuZHMgQ3VzdG9keVBob25lQ3JlZGl0RmVhdHVyZSB7XG4gICAgcHVibGljIGh0dHA6IEh0dHA7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVhZG9ubHkgb3B0aW9uczogQ3VzdG9keVBob25lQ3JlZGl0V2ViU2VydmljZU9wdGlvbnMgPSB7fSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmh0dHAgPSBuZXcgSHR0cChvcHRpb25zKTtcbiAgICAgIH1cbiAgICBcbiAgICBwdWJsaWMgYXN5bmMgZ2V0TW9iaWxlQ3JlZGl0UHJvdmlkZXJzKCl7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5odHRwLmdldChcIi9wcm92aWRlci9tb2JpbGUvcHJvdmlkZXJzL2luZm9cIik7XG5cbiAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhyb3cgcmVzcG9uc2U7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGNyZWF0ZU9yZGVyKHJlcXVlc3RCb2R5KXtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmh0dHAucG9zdChcIi9wcm92aWRlci9tb2JpbGUvb3JkZXIvY3JlYXRlXCIsIHJlcXVlc3RCb2R5KTtcblxuICAgICAgICBpZiAocmVzcG9uc2UuZGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgICAgIH1cblxuICAgICAgICB0aHJvdyByZXNwb25zZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgY29tcGxldGVPcmRlcihyZXF1ZXN0Qm9keSl7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5odHRwLnBvc3QoXCIvcHJvdmlkZXIvbW9iaWxlL29yZGVyL2NvbXBsZXRlXCIsIHJlcXVlc3RCb2R5KTtcblxuICAgICAgICBpZiAocmVzcG9uc2UuZGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgICAgIH1cblxuICAgICAgICB0aHJvdyByZXNwb25zZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgZ2V0T3JkZXJIaXN0b3J5KHdhbGxldElkOnN0cmluZyl7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5odHRwLmdldChgL3Byb3ZpZGVyL21vYmlsZS9vcmRlci9oaXN0b3J5LyR7d2FsbGV0SWR9YCk7XG5cbiAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhyb3cgcmVzcG9uc2U7XG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIGdldE9yZGVyQW1vdW50Rm9yV2FsbGV0VG9kYXkod2FsbGV0SWQ6c3RyaW5nKXtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmh0dHAuZ2V0KGAvcHJvdmlkZXIvbW9iaWxlL29yZGVyLyR7d2FsbGV0SWR9L2Ftb3VudC90b2RheWApO1xuXG4gICAgICAgIGlmIChyZXNwb25zZS5kYXRhKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRocm93IHJlc3BvbnNlO1xuICAgIH1cbn0iXX0=