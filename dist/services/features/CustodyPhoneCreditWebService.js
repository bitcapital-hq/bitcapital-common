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
    completeOrder(amountKey, walletId, phoneCreditOrderId) {
        return __awaiter(this, void 0, void 0, function* () {
            const requestBody = {
                amountKey,
                walletId,
                phoneCreditOrderId
            };
            const response = yield this.http.post("/provider/mobile/order/complete", requestBody);
            if (response.data) {
                return response.data;
            }
            throw response;
        });
    }
}
exports.default = CustodyPhoneCreditWebService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9keVBob25lQ3JlZGl0V2ViU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9zZXJ2aWNlcy9mZWF0dXJlcy9DdXN0b2R5UGhvbmVDcmVkaXRXZWJTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQ0FBK0M7QUFDL0MsNkNBQStFO0FBTS9FLE1BQXFCLDRCQUE2QixTQUFRLG9DQUF5QjtJQUcvRSxZQUE0QixVQUErQyxFQUFFO1FBQ3pFLEtBQUssRUFBRSxDQUFDO1FBRGdCLFlBQU8sR0FBUCxPQUFPLENBQTBDO1FBRXpFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVVLHdCQUF3Qjs7WUFDakMsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1lBRXhFLElBQUksUUFBUSxDQUFDLElBQUksRUFBRTtnQkFDZixPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7YUFDeEI7WUFFRCxNQUFNLFFBQVEsQ0FBQztRQUNuQixDQUFDO0tBQUE7SUFFWSxXQUFXLENBQUMsV0FBVzs7WUFDaEMsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQywrQkFBK0IsRUFBRSxXQUFXLENBQUMsQ0FBQztZQUVwRixJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUU7Z0JBQ2YsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO2FBQ3hCO1lBRUQsTUFBTSxRQUFRLENBQUM7UUFDbkIsQ0FBQztLQUFBO0lBRVksYUFBYSxDQUFDLFNBQWdCLEVBQUUsUUFBZSxFQUFFLGtCQUF5Qjs7WUFDbkYsTUFBTSxXQUFXLEdBQUc7Z0JBQ2hCLFNBQVM7Z0JBQ1QsUUFBUTtnQkFDUixrQkFBa0I7YUFDckIsQ0FBQztZQUNGLE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUNBQWlDLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFFdEYsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFO2dCQUNmLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQzthQUN4QjtZQUVELE1BQU0sUUFBUSxDQUFDO1FBQ25CLENBQUM7S0FBQTtDQUNKO0FBMUNELCtDQTBDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHAsIEh0dHBPcHRpb25zIH0gZnJvbSBcIi4uLy4uL2Jhc2VcIjtcbmltcG9ydCB7IEJhc2VDdXN0b2R5T3B0aW9ucywgQ3VzdG9keVBob25lQ3JlZGl0RmVhdHVyZSB9IGZyb20gXCIuLi8uLi9wcm92aWRlclwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEN1c3RvZHlQaG9uZUNyZWRpdFdlYlNlcnZpY2VPcHRpb25zIGV4dGVuZHMgSHR0cE9wdGlvbnMsIEJhc2VDdXN0b2R5T3B0aW9ucyB7XG4gICAgaHR0cD86IEh0dHA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvZHlQaG9uZUNyZWRpdFdlYlNlcnZpY2UgZXh0ZW5kcyBDdXN0b2R5UGhvbmVDcmVkaXRGZWF0dXJlIHtcbiAgICBwdWJsaWMgaHR0cDogSHR0cDtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSBvcHRpb25zOiBDdXN0b2R5UGhvbmVDcmVkaXRXZWJTZXJ2aWNlT3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuaHR0cCA9IG5ldyBIdHRwKG9wdGlvbnMpO1xuICAgICAgfVxuICAgIFxuICAgIHB1YmxpYyBhc3luYyBnZXRNb2JpbGVDcmVkaXRQcm92aWRlcnMoKXtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmh0dHAuZ2V0KFwiL3Byb3ZpZGVyL21vYmlsZS9wcm92aWRlcnMvaW5mb1wiKTtcblxuICAgICAgICBpZiAocmVzcG9uc2UuZGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgICAgIH1cblxuICAgICAgICB0aHJvdyByZXNwb25zZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgY3JlYXRlT3JkZXIocmVxdWVzdEJvZHkpe1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuaHR0cC5wb3N0KFwiL3Byb3ZpZGVyL21vYmlsZS9vcmRlci9jcmVhdGVcIiwgcmVxdWVzdEJvZHkpO1xuXG4gICAgICAgIGlmIChyZXNwb25zZS5kYXRhKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRocm93IHJlc3BvbnNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBjb21wbGV0ZU9yZGVyKGFtb3VudEtleTpzdHJpbmcsIHdhbGxldElkOnN0cmluZywgcGhvbmVDcmVkaXRPcmRlcklkOnN0cmluZyl7XG4gICAgICAgIGNvbnN0IHJlcXVlc3RCb2R5ID0ge1xuICAgICAgICAgICAgYW1vdW50S2V5LFxuICAgICAgICAgICAgd2FsbGV0SWQsXG4gICAgICAgICAgICBwaG9uZUNyZWRpdE9yZGVySWRcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmh0dHAucG9zdChcIi9wcm92aWRlci9tb2JpbGUvb3JkZXIvY29tcGxldGVcIiwgcmVxdWVzdEJvZHkpO1xuXG4gICAgICAgIGlmIChyZXNwb25zZS5kYXRhKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRocm93IHJlc3BvbnNlO1xuICAgIH1cbn0iXX0=