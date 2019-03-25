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
const models_1 = require("../../models");
const provider_1 = require("../../provider");
class CustodyBoletoWebService extends provider_1.CustodyBoletoFeature {
    constructor(options) {
        super();
        this.options = options;
        this.http = options.http || new base_1.Http(options);
    }
    info(wallet, extra) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.http.get("/provider/boleto/info", Object.assign({ wallet }, extra));
            if (response.data) {
                return new models_1.Payment(response.data);
            }
            throw response;
        });
    }
    emit(amount, wallet, extra) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.http.post("/provider/boleto/emit", { amount, wallet, extra });
            if (response.data && response.data.id) {
                return new models_1.Boleto(response.data);
            }
            throw response;
        });
    }
    getById(externalId, extra) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.http.get(`/provider/boleto/${externalId}`, Object.assign({}, extra));
            if (response.data && response.data.id) {
                return new models_1.Boleto(response.data);
            }
            throw response;
        });
    }
    validate(barCode, extra) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.http.get(`/provider/boleto/validate`, Object.assign({ barCode }, extra));
            if (response.data) {
                return response.data;
            }
            throw response;
        });
    }
    pay(barCode, payment, extra) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.http.post(`/provider/boleto/pay`, Object.assign({ barCode, payment }, extra));
            if (response.data && response.data.id) {
                return new models_1.Payment(response.data);
            }
            throw response;
        });
    }
    getByDateRange(start, end, walletId, extra) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.http.post(`/provider/boleto/getByDateRange`, Object.assign({ start, end, walletId }, extra));
            if (response.data) {
                return response.data;
            }
            throw response;
        });
    }
}
exports.default = CustodyBoletoWebService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9keUJvbGV0b1dlYlNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvc2VydmljZXMvZmVhdHVyZXMvQ3VzdG9keUJvbGV0b1dlYlNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFDQUErQztBQUMvQyx5Q0FBNEU7QUFDNUUsNkNBQThGO0FBTTlGLE1BQXFCLHVCQUF3QixTQUFRLCtCQUFvQjtJQUd2RSxZQUE0QixPQUF1QztRQUNqRSxLQUFLLEVBQUUsQ0FBQztRQURrQixZQUFPLEdBQVAsT0FBTyxDQUFnQztRQUVqRSxJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLElBQUksSUFBSSxXQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVZLElBQUksQ0FBQyxNQUFvQixFQUFFLEtBQVc7O1lBQ2pELE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsdUJBQXVCLGtCQUFJLE1BQU0sSUFBSyxLQUFLLEVBQUcsQ0FBQztZQUVwRixJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUU7Z0JBQ2pCLE9BQU8sSUFBSSxnQkFBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNuQztZQUVELE1BQU0sUUFBUSxDQUFDO1FBQ2pCLENBQUM7S0FBQTtJQUVZLElBQUksQ0FBQyxNQUFjLEVBQUUsTUFBb0IsRUFBRSxLQUFXOztZQUNqRSxNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBRTFGLElBQUksUUFBUSxDQUFDLElBQUksSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRTtnQkFDckMsT0FBTyxJQUFJLGVBQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDbEM7WUFFRCxNQUFNLFFBQVEsQ0FBQztRQUNqQixDQUFDO0tBQUE7SUFFWSxPQUFPLENBQUMsVUFBa0IsRUFBRSxLQUFXOztZQUNsRCxNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLG9CQUFvQixVQUFVLEVBQUUsb0JBQU8sS0FBSyxFQUFHLENBQUM7WUFFckYsSUFBSSxRQUFRLENBQUMsSUFBSSxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFO2dCQUNyQyxPQUFPLElBQUksZUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNsQztZQUVELE1BQU0sUUFBUSxDQUFDO1FBQ2pCLENBQUM7S0FBQTtJQUVZLFFBQVEsQ0FBQyxPQUFlLEVBQUUsS0FBMEI7O1lBQy9ELE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsMkJBQTJCLGtCQUFJLE9BQU8sSUFBSyxLQUFLLEVBQUcsQ0FBQztZQUV6RixJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUU7Z0JBQ2pCLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQzthQUN0QjtZQUVELE1BQU0sUUFBUSxDQUFDO1FBQ2pCLENBQUM7S0FBQTtJQUVZLEdBQUcsQ0FBQyxPQUFlLEVBQUUsT0FBc0IsRUFBRSxLQUEwQjs7WUFDbEYsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxzQkFBc0Isa0JBQUksT0FBTyxFQUFFLE9BQU8sSUFBSyxLQUFLLEVBQUcsQ0FBQztZQUU5RixJQUFJLFFBQVEsQ0FBQyxJQUFJLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUU7Z0JBQ3JDLE9BQU8sSUFBSSxnQkFBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNuQztZQUVELE1BQU0sUUFBUSxDQUFDO1FBQ2pCLENBQUM7S0FBQTtJQUVZLGNBQWMsQ0FBQyxLQUFXLEVBQUUsR0FBUyxFQUFFLFFBQWdCLEVBQUUsS0FBVzs7WUFDL0UsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQ0FBaUMsa0JBQUksS0FBSyxFQUFFLEdBQUcsRUFBRSxRQUFRLElBQUssS0FBSyxFQUFHLENBQUM7WUFFN0csSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFO2dCQUNqQixPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7YUFDdEI7WUFFRCxNQUFNLFFBQVEsQ0FBQztRQUNqQixDQUFDO0tBQUE7Q0FDRjtBQW5FRCwwQ0FtRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwLCBIdHRwT3B0aW9ucyB9IGZyb20gXCIuLi8uLi9iYXNlXCI7XG5pbXBvcnQgeyBXYWxsZXRTY2hlbWEsIFBheW1lbnQsIEJvbGV0bywgUGF5bWVudFNjaGVtYSB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcbmltcG9ydCB7IEJhc2VDdXN0b2R5T3B0aW9ucywgQ3VzdG9keUJvbGV0b0ZlYXR1cmUsIEJvbGV0b1BheW1lbnRFeHRyYSB9IGZyb20gXCIuLi8uLi9wcm92aWRlclwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEN1c3RvZHlCb2xldG9XZWJTZXJ2aWNlT3B0aW9ucyBleHRlbmRzIEh0dHBPcHRpb25zLCBCYXNlQ3VzdG9keU9wdGlvbnMge1xuICBodHRwPzogSHR0cDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9keUJvbGV0b1dlYlNlcnZpY2UgZXh0ZW5kcyBDdXN0b2R5Qm9sZXRvRmVhdHVyZSB7XG4gIHB1YmxpYyBodHRwOiBIdHRwO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSBvcHRpb25zOiBDdXN0b2R5Qm9sZXRvV2ViU2VydmljZU9wdGlvbnMpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuaHR0cCA9IG9wdGlvbnMuaHR0cCB8fCBuZXcgSHR0cChvcHRpb25zKTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBpbmZvKHdhbGxldDogV2FsbGV0U2NoZW1hLCBleHRyYT86IGFueSk6IFByb21pc2U8UGF5bWVudD4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5odHRwLmdldChcIi9wcm92aWRlci9ib2xldG8vaW5mb1wiLCB7IHdhbGxldCwgLi4uZXh0cmEgfSk7XG5cbiAgICBpZiAocmVzcG9uc2UuZGF0YSkge1xuICAgICAgcmV0dXJuIG5ldyBQYXltZW50KHJlc3BvbnNlLmRhdGEpO1xuICAgIH1cblxuICAgIHRocm93IHJlc3BvbnNlO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGVtaXQoYW1vdW50OiBzdHJpbmcsIHdhbGxldDogV2FsbGV0U2NoZW1hLCBleHRyYT86IGFueSk6IFByb21pc2U8Qm9sZXRvPiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmh0dHAucG9zdChcIi9wcm92aWRlci9ib2xldG8vZW1pdFwiLCB7IGFtb3VudCwgd2FsbGV0LCBleHRyYSB9KTtcblxuICAgIGlmIChyZXNwb25zZS5kYXRhICYmIHJlc3BvbnNlLmRhdGEuaWQpIHtcbiAgICAgIHJldHVybiBuZXcgQm9sZXRvKHJlc3BvbnNlLmRhdGEpO1xuICAgIH1cblxuICAgIHRocm93IHJlc3BvbnNlO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGdldEJ5SWQoZXh0ZXJuYWxJZDogc3RyaW5nLCBleHRyYT86IGFueSk6IFByb21pc2U8Qm9sZXRvPiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmh0dHAuZ2V0KGAvcHJvdmlkZXIvYm9sZXRvLyR7ZXh0ZXJuYWxJZH1gLCB7IC4uLmV4dHJhIH0pO1xuXG4gICAgaWYgKHJlc3BvbnNlLmRhdGEgJiYgcmVzcG9uc2UuZGF0YS5pZCkge1xuICAgICAgcmV0dXJuIG5ldyBCb2xldG8ocmVzcG9uc2UuZGF0YSk7XG4gICAgfVxuXG4gICAgdGhyb3cgcmVzcG9uc2U7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgdmFsaWRhdGUoYmFyQ29kZTogc3RyaW5nLCBleHRyYT86IEJvbGV0b1BheW1lbnRFeHRyYSk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmh0dHAuZ2V0KGAvcHJvdmlkZXIvYm9sZXRvL3ZhbGlkYXRlYCwgeyBiYXJDb2RlLCAuLi5leHRyYSB9KTtcblxuICAgIGlmIChyZXNwb25zZS5kYXRhKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICB9XG5cbiAgICB0aHJvdyByZXNwb25zZTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBwYXkoYmFyQ29kZTogc3RyaW5nLCBwYXltZW50OiBQYXltZW50U2NoZW1hLCBleHRyYT86IEJvbGV0b1BheW1lbnRFeHRyYSk6IFByb21pc2U8UGF5bWVudFNjaGVtYT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5odHRwLnBvc3QoYC9wcm92aWRlci9ib2xldG8vcGF5YCwgeyBiYXJDb2RlLCBwYXltZW50LCAuLi5leHRyYSB9KTtcblxuICAgIGlmIChyZXNwb25zZS5kYXRhICYmIHJlc3BvbnNlLmRhdGEuaWQpIHtcbiAgICAgIHJldHVybiBuZXcgUGF5bWVudChyZXNwb25zZS5kYXRhKTtcbiAgICB9XG5cbiAgICB0aHJvdyByZXNwb25zZTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBnZXRCeURhdGVSYW5nZShzdGFydDogRGF0ZSwgZW5kOiBEYXRlLCB3YWxsZXRJZDogc3RyaW5nLCBleHRyYT86IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmh0dHAucG9zdChgL3Byb3ZpZGVyL2JvbGV0by9nZXRCeURhdGVSYW5nZWAsIHsgc3RhcnQsIGVuZCwgd2FsbGV0SWQsIC4uLmV4dHJhIH0pO1xuXG4gICAgaWYgKHJlc3BvbnNlLmRhdGEpIHtcbiAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgIH1cblxuICAgIHRocm93IHJlc3BvbnNlO1xuICB9XG59XG4iXX0=