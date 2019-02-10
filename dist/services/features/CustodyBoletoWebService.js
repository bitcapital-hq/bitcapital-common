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
    validate(barCode, extra) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.http.get(`/provider/boleto/validate`, Object.assign({ barCode }, extra));
            if (response.data && response.data.id) {
                return response.data;
            }
            throw response;
        });
    }
    pay(barCode, wallet, extra) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.http.post(`/provider/boleto/pay`, Object.assign({ barCode, wallet }, extra));
            if (response.data && response.data.id) {
                return response.data;
            }
            throw response;
        });
    }
}
exports.default = CustodyBoletoWebService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9keUJvbGV0b1dlYlNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvc2VydmljZXMvZmVhdHVyZXMvQ3VzdG9keUJvbGV0b1dlYlNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFDQUErQztBQUUvQyw2Q0FBOEY7QUFLOUYsTUFBcUIsdUJBQXdCLFNBQVEsK0JBQW9CO0lBR3ZFLFlBQTRCLE9BQXVDO1FBQ2pFLEtBQUssRUFBRSxDQUFDO1FBRGtCLFlBQU8sR0FBUCxPQUFPLENBQWdDO1FBRWpFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVZLElBQUksQ0FBQyxNQUFjLEVBQUUsS0FBVzs7WUFDM0MsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsa0JBQUksTUFBTSxJQUFLLEtBQUssRUFBRyxDQUFDO1lBRXBGLElBQUksUUFBUSxDQUFDLElBQUksRUFBRTtnQkFDakIsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO2FBQ3RCO1lBRUQsTUFBTSxRQUFRLENBQUM7UUFDakIsQ0FBQztLQUFBO0lBRVksSUFBSSxDQUFDLE1BQWMsRUFBRSxNQUFjLEVBQUUsS0FBVzs7WUFDM0QsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUUxRixJQUFJLFFBQVEsQ0FBQyxJQUFJLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUU7Z0JBQ3JDLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQzthQUN0QjtZQUVELE1BQU0sUUFBUSxDQUFDO1FBQ2pCLENBQUM7S0FBQTtJQUVZLE9BQU8sQ0FBQyxVQUFrQixFQUFFLEtBQVc7O1lBQ2xELE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsb0JBQW9CLFVBQVUsRUFBRSxvQkFBTyxLQUFLLEVBQUcsQ0FBQztZQUVyRixJQUFJLFFBQVEsQ0FBQyxJQUFJLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUU7Z0JBQ3JDLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQzthQUN0QjtZQUVELE1BQU0sUUFBUSxDQUFDO1FBQ2pCLENBQUM7S0FBQTtJQUVZLFFBQVEsQ0FBQyxPQUFlLEVBQUUsS0FBMEI7O1lBQy9ELE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsMkJBQTJCLGtCQUFJLE9BQU8sSUFBTSxLQUFLLEVBQUcsQ0FBQztZQUUxRixJQUFJLFFBQVEsQ0FBQyxJQUFJLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUU7Z0JBQ3JDLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQzthQUN0QjtZQUVELE1BQU0sUUFBUSxDQUFDO1FBQ2pCLENBQUM7S0FBQTtJQUVZLEdBQUcsQ0FBQyxPQUFlLEVBQUUsTUFBYyxFQUFFLEtBQTBCOztZQUMxRSxNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHNCQUFzQixrQkFBSSxPQUFPLEVBQUUsTUFBTSxJQUFLLEtBQUssRUFBRyxDQUFDO1lBRTdGLElBQUksUUFBUSxDQUFDLElBQUksSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRTtnQkFDckMsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO2FBQ3RCO1lBRUQsTUFBTSxRQUFRLENBQUM7UUFDakIsQ0FBQztLQUFBO0NBRUY7QUExREQsMENBMERDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cCwgSHR0cE9wdGlvbnMgfSBmcm9tIFwiLi4vLi4vYmFzZVwiO1xuaW1wb3J0IHsgQm9sZXRvU2NoZW1hLCBQYXltZW50U2NoZW1hLCBXYWxsZXQgfSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XG5pbXBvcnQgeyBCYXNlQ3VzdG9keU9wdGlvbnMsIEN1c3RvZHlCb2xldG9GZWF0dXJlLCBCb2xldG9QYXltZW50RXh0cmEgfSBmcm9tIFwiLi4vLi4vcHJvdmlkZXJcIjtcblxuZXhwb3J0IGludGVyZmFjZSBDdXN0b2R5Qm9sZXRvV2ViU2VydmljZU9wdGlvbnMgZXh0ZW5kcyBIdHRwT3B0aW9ucywgQmFzZUN1c3RvZHlPcHRpb25zIHtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9keUJvbGV0b1dlYlNlcnZpY2UgZXh0ZW5kcyBDdXN0b2R5Qm9sZXRvRmVhdHVyZSB7XG4gIHByb3RlY3RlZCBodHRwOiBIdHRwO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSBvcHRpb25zOiBDdXN0b2R5Qm9sZXRvV2ViU2VydmljZU9wdGlvbnMpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuaHR0cCA9IG5ldyBIdHRwKG9wdGlvbnMpO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGluZm8od2FsbGV0OiBXYWxsZXQsIGV4dHJhPzogYW55KTogUHJvbWlzZTxQYXltZW50U2NoZW1hPiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmh0dHAuZ2V0KCcvcHJvdmlkZXIvYm9sZXRvL2luZm8nLCB7IHdhbGxldCwgLi4uZXh0cmEgfSk7XG5cbiAgICBpZiAocmVzcG9uc2UuZGF0YSkge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgfVxuXG4gICAgdGhyb3cgcmVzcG9uc2U7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgZW1pdChhbW91bnQ6IHN0cmluZywgd2FsbGV0OiBXYWxsZXQsIGV4dHJhPzogYW55KTogUHJvbWlzZTxCb2xldG9TY2hlbWE+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuaHR0cC5wb3N0KCcvcHJvdmlkZXIvYm9sZXRvL2VtaXQnLCB7IGFtb3VudCwgd2FsbGV0LCBleHRyYSB9KTtcblxuICAgIGlmIChyZXNwb25zZS5kYXRhICYmIHJlc3BvbnNlLmRhdGEuaWQpIHtcbiAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgIH1cblxuICAgIHRocm93IHJlc3BvbnNlO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGdldEJ5SWQoZXh0ZXJuYWxJZDogc3RyaW5nLCBleHRyYT86IGFueSk6IFByb21pc2U8Qm9sZXRvU2NoZW1hIHwgdW5kZWZpbmVkPiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmh0dHAuZ2V0KGAvcHJvdmlkZXIvYm9sZXRvLyR7ZXh0ZXJuYWxJZH1gLCB7IC4uLmV4dHJhIH0pO1xuXG4gICAgaWYgKHJlc3BvbnNlLmRhdGEgJiYgcmVzcG9uc2UuZGF0YS5pZCkge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgfVxuXG4gICAgdGhyb3cgcmVzcG9uc2U7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgdmFsaWRhdGUoYmFyQ29kZTogc3RyaW5nLCBleHRyYT86IEJvbGV0b1BheW1lbnRFeHRyYSk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmh0dHAuZ2V0KGAvcHJvdmlkZXIvYm9sZXRvL3ZhbGlkYXRlYCwgeyBiYXJDb2RlLCAgLi4uZXh0cmEgfSk7XG5cbiAgICBpZiAocmVzcG9uc2UuZGF0YSAmJiByZXNwb25zZS5kYXRhLmlkKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICB9XG5cbiAgICB0aHJvdyByZXNwb25zZTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBwYXkoYmFyQ29kZTogc3RyaW5nLCB3YWxsZXQ6IFdhbGxldCwgZXh0cmE/OiBCb2xldG9QYXltZW50RXh0cmEpOiBQcm9taXNlPFBheW1lbnRTY2hlbWE+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuaHR0cC5wb3N0KGAvcHJvdmlkZXIvYm9sZXRvL3BheWAsIHsgYmFyQ29kZSwgd2FsbGV0LCAuLi5leHRyYSB9KTtcblxuICAgIGlmIChyZXNwb25zZS5kYXRhICYmIHJlc3BvbnNlLmRhdGEuaWQpIHtcbiAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgIH1cblxuICAgIHRocm93IHJlc3BvbnNlO1xuICB9XG5cbn1cbiJdfQ==