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
    createOrder(phoneCode, phoneNumber, providerCode) {
        return __awaiter(this, void 0, void 0, function* () {
            const requestBody = {
                phoneCode,
                phoneNumber,
                providerCode
            };
            const response = yield this.http.post("/provider/mobile/order/create", JSON.stringify(requestBody));
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
            const response = yield this.http.post("/provider/mobile/order/complete", JSON.stringify(requestBody));
            if (response.data) {
                return response.data;
            }
            throw response;
        });
    }
}
exports.default = CustodyPhoneCreditWebService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9keVBob25lQ3JlZGl0V2ViU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9zZXJ2aWNlcy9mZWF0dXJlcy9DdXN0b2R5UGhvbmVDcmVkaXRXZWJTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQ0FBK0M7QUFDL0MsNkNBQStFO0FBTS9FLE1BQXFCLDRCQUE2QixTQUFRLG9DQUF5QjtJQUcvRSxZQUE0QixVQUErQyxFQUFFO1FBQ3pFLEtBQUssRUFBRSxDQUFDO1FBRGdCLFlBQU8sR0FBUCxPQUFPLENBQTBDO1FBRXpFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVVLHdCQUF3Qjs7WUFDakMsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1lBRXhFLElBQUksUUFBUSxDQUFDLElBQUksRUFBRTtnQkFDZixPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7YUFDeEI7WUFFRCxNQUFNLFFBQVEsQ0FBQztRQUNuQixDQUFDO0tBQUE7SUFFWSxXQUFXLENBQUMsU0FBZ0IsRUFBRSxXQUFrQixFQUFFLFlBQW1COztZQUM5RSxNQUFNLFdBQVcsR0FBRztnQkFDaEIsU0FBUztnQkFDVCxXQUFXO2dCQUNYLFlBQVk7YUFDZixDQUFDO1lBQ0YsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQywrQkFBK0IsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFFcEcsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFO2dCQUNmLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQzthQUN4QjtZQUVELE1BQU0sUUFBUSxDQUFDO1FBQ25CLENBQUM7S0FBQTtJQUVZLGFBQWEsQ0FBQyxTQUFnQixFQUFFLFFBQWUsRUFBRSxrQkFBeUI7O1lBQ25GLE1BQU0sV0FBVyxHQUFHO2dCQUNoQixTQUFTO2dCQUNULFFBQVE7Z0JBQ1Isa0JBQWtCO2FBQ3JCLENBQUM7WUFDRixNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlDQUFpQyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUV0RyxJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUU7Z0JBQ2YsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO2FBQ3hCO1lBRUQsTUFBTSxRQUFRLENBQUM7UUFDbkIsQ0FBQztLQUFBO0NBQ0o7QUEvQ0QsK0NBK0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cCwgSHR0cE9wdGlvbnMgfSBmcm9tIFwiLi4vLi4vYmFzZVwiO1xuaW1wb3J0IHsgQmFzZUN1c3RvZHlPcHRpb25zLCBDdXN0b2R5UGhvbmVDcmVkaXRGZWF0dXJlIH0gZnJvbSBcIi4uLy4uL3Byb3ZpZGVyXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3VzdG9keVBob25lQ3JlZGl0V2ViU2VydmljZU9wdGlvbnMgZXh0ZW5kcyBIdHRwT3B0aW9ucywgQmFzZUN1c3RvZHlPcHRpb25zIHtcbiAgICBodHRwPzogSHR0cDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9keVBob25lQ3JlZGl0V2ViU2VydmljZSBleHRlbmRzIEN1c3RvZHlQaG9uZUNyZWRpdEZlYXR1cmUge1xuICAgIHB1YmxpYyBodHRwOiBIdHRwO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5IG9wdGlvbnM6IEN1c3RvZHlQaG9uZUNyZWRpdFdlYlNlcnZpY2VPcHRpb25zID0ge30pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5odHRwID0gbmV3IEh0dHAob3B0aW9ucyk7XG4gICAgICB9XG4gICAgXG4gICAgcHVibGljIGFzeW5jIGdldE1vYmlsZUNyZWRpdFByb3ZpZGVycygpe1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuaHR0cC5nZXQoXCIvcHJvdmlkZXIvbW9iaWxlL3Byb3ZpZGVycy9pbmZvXCIpO1xuXG4gICAgICAgIGlmIChyZXNwb25zZS5kYXRhKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRocm93IHJlc3BvbnNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBjcmVhdGVPcmRlcihwaG9uZUNvZGU6c3RyaW5nLCBwaG9uZU51bWJlcjpzdHJpbmcsIHByb3ZpZGVyQ29kZTpzdHJpbmcpe1xuICAgICAgICBjb25zdCByZXF1ZXN0Qm9keSA9IHtcbiAgICAgICAgICAgIHBob25lQ29kZSxcbiAgICAgICAgICAgIHBob25lTnVtYmVyLFxuICAgICAgICAgICAgcHJvdmlkZXJDb2RlXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5odHRwLnBvc3QoXCIvcHJvdmlkZXIvbW9iaWxlL29yZGVyL2NyZWF0ZVwiLCBKU09OLnN0cmluZ2lmeShyZXF1ZXN0Qm9keSkpO1xuXG4gICAgICAgIGlmIChyZXNwb25zZS5kYXRhKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRocm93IHJlc3BvbnNlO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBjb21wbGV0ZU9yZGVyKGFtb3VudEtleTpzdHJpbmcsIHdhbGxldElkOnN0cmluZywgcGhvbmVDcmVkaXRPcmRlcklkOnN0cmluZyl7XG4gICAgICAgIGNvbnN0IHJlcXVlc3RCb2R5ID0ge1xuICAgICAgICAgICAgYW1vdW50S2V5LFxuICAgICAgICAgICAgd2FsbGV0SWQsXG4gICAgICAgICAgICBwaG9uZUNyZWRpdE9yZGVySWRcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmh0dHAucG9zdChcIi9wcm92aWRlci9tb2JpbGUvb3JkZXIvY29tcGxldGVcIiwgSlNPTi5zdHJpbmdpZnkocmVxdWVzdEJvZHkpKTtcblxuICAgICAgICBpZiAocmVzcG9uc2UuZGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgICAgIH1cblxuICAgICAgICB0aHJvdyByZXNwb25zZTtcbiAgICB9XG59Il19