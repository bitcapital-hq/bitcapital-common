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
class CustodyBoletoWebService extends provider_1.CustodyBoletoFeature {
    constructor(options) {
        super();
        this.options = options;
        this.http = new base_1.Http(options);
    }
    info(wallet, extra) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.http.get('/provider/boleto/info', Object.assign({ wallet }, extra));
            if (response.data) {
                return response.data;
            }
            throw response;
        });
    }
    emit(amount, wallet, extra) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.http.post('/provider/boleto/emit', { amount, wallet, extra });
            if (response.data && response.data.id) {
                return response.data;
            }
            throw response;
        });
    }
    getById(externalId, extra) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.http.get(`/provider/boleto/${externalId}`, Object.assign({}, extra));
            if (response.data && response.data.id) {
                return response.data;
            }
            throw response;
        });
    }
}
exports.default = CustodyBoletoWebService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9keUJvbGV0b1dlYlNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvc2VydmljZXMvZmVhdHVyZXMvQ3VzdG9keUJvbGV0b1dlYlNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFDQUErQztBQUUvQyw2Q0FBMEU7QUFLMUUsTUFBcUIsdUJBQXdCLFNBQVEsK0JBQW9CO0lBR3ZFLFlBQTRCLE9BQXVDO1FBQ2pFLEtBQUssRUFBRSxDQUFDO1FBRGtCLFlBQU8sR0FBUCxPQUFPLENBQWdDO1FBRWpFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVZLElBQUksQ0FBQyxNQUFjLEVBQUUsS0FBVzs7WUFDM0MsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsa0JBQUksTUFBTSxJQUFLLEtBQUssRUFBRyxDQUFDO1lBRXBGLElBQUksUUFBUSxDQUFDLElBQUksRUFBRTtnQkFDakIsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO2FBQ3RCO1lBRUQsTUFBTSxRQUFRLENBQUM7UUFDakIsQ0FBQztLQUFBO0lBRVksSUFBSSxDQUFDLE1BQWMsRUFBRSxNQUFjLEVBQUUsS0FBVzs7WUFDM0QsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUUxRixJQUFJLFFBQVEsQ0FBQyxJQUFJLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUU7Z0JBQ3JDLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQzthQUN0QjtZQUVELE1BQU0sUUFBUSxDQUFDO1FBQ2pCLENBQUM7S0FBQTtJQUVZLE9BQU8sQ0FBQyxVQUFrQixFQUFFLEtBQVc7O1lBQ2xELE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsb0JBQW9CLFVBQVUsRUFBRSxvQkFBTyxLQUFLLEVBQUcsQ0FBQztZQUVyRixJQUFJLFFBQVEsQ0FBQyxJQUFJLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUU7Z0JBQ3JDLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQzthQUN0QjtZQUVELE1BQU0sUUFBUSxDQUFDO1FBQ2pCLENBQUM7S0FBQTtDQUNGO0FBckNELDBDQXFDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHAsIEh0dHBPcHRpb25zIH0gZnJvbSBcIi4uLy4uL2Jhc2VcIjtcbmltcG9ydCB7IEJvbGV0b1NjaGVtYSwgUGF5bWVudFNjaGVtYSwgV2FsbGV0IH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xuaW1wb3J0IHsgQmFzZUN1c3RvZHlPcHRpb25zLCBDdXN0b2R5Qm9sZXRvRmVhdHVyZSB9IGZyb20gXCIuLi8uLi9wcm92aWRlclwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEN1c3RvZHlCb2xldG9XZWJTZXJ2aWNlT3B0aW9ucyBleHRlbmRzIEh0dHBPcHRpb25zLCBCYXNlQ3VzdG9keU9wdGlvbnMge1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b2R5Qm9sZXRvV2ViU2VydmljZSBleHRlbmRzIEN1c3RvZHlCb2xldG9GZWF0dXJlIHtcbiAgcHJvdGVjdGVkIGh0dHA6IEh0dHA7XG5cbiAgY29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5IG9wdGlvbnM6IEN1c3RvZHlCb2xldG9XZWJTZXJ2aWNlT3B0aW9ucykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5odHRwID0gbmV3IEh0dHAob3B0aW9ucyk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgaW5mbyh3YWxsZXQ6IFdhbGxldCwgZXh0cmE/OiBhbnkpOiBQcm9taXNlPFBheW1lbnRTY2hlbWE+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuaHR0cC5nZXQoJy9wcm92aWRlci9ib2xldG8vaW5mbycsIHsgd2FsbGV0LCAuLi5leHRyYSB9KTtcblxuICAgIGlmIChyZXNwb25zZS5kYXRhKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICB9XG5cbiAgICB0aHJvdyByZXNwb25zZTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBlbWl0KGFtb3VudDogc3RyaW5nLCB3YWxsZXQ6IFdhbGxldCwgZXh0cmE/OiBhbnkpOiBQcm9taXNlPEJvbGV0b1NjaGVtYT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5odHRwLnBvc3QoJy9wcm92aWRlci9ib2xldG8vZW1pdCcsIHsgYW1vdW50LCB3YWxsZXQsIGV4dHJhIH0pO1xuXG4gICAgaWYgKHJlc3BvbnNlLmRhdGEgJiYgcmVzcG9uc2UuZGF0YS5pZCkge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgfVxuXG4gICAgdGhyb3cgcmVzcG9uc2U7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgZ2V0QnlJZChleHRlcm5hbElkOiBzdHJpbmcsIGV4dHJhPzogYW55KTogUHJvbWlzZTxCb2xldG9TY2hlbWEgfCB1bmRlZmluZWQ+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuaHR0cC5nZXQoYC9wcm92aWRlci9ib2xldG8vJHtleHRlcm5hbElkfWAsIHsgLi4uZXh0cmEgfSk7XG5cbiAgICBpZiAocmVzcG9uc2UuZGF0YSAmJiByZXNwb25zZS5kYXRhLmlkKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICB9XG5cbiAgICB0aHJvdyByZXNwb25zZTtcbiAgfVxufVxuIl19