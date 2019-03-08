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
}
exports.default = CustodyBoletoWebService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9keUJvbGV0b1dlYlNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvc2VydmljZXMvZmVhdHVyZXMvQ3VzdG9keUJvbGV0b1dlYlNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFDQUErQztBQUMvQyx5Q0FBNEU7QUFDNUUsNkNBQThGO0FBTTlGLE1BQXFCLHVCQUF3QixTQUFRLCtCQUFvQjtJQUd2RSxZQUE0QixPQUF1QztRQUNqRSxLQUFLLEVBQUUsQ0FBQztRQURrQixZQUFPLEdBQVAsT0FBTyxDQUFnQztRQUVqRSxJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLElBQUksSUFBSSxXQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVZLElBQUksQ0FBQyxNQUFvQixFQUFFLEtBQVc7O1lBQ2pELE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsdUJBQXVCLGtCQUFJLE1BQU0sSUFBSyxLQUFLLEVBQUcsQ0FBQztZQUVwRixJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUU7Z0JBQ2pCLE9BQU8sSUFBSSxnQkFBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNuQztZQUVELE1BQU0sUUFBUSxDQUFDO1FBQ2pCLENBQUM7S0FBQTtJQUVZLElBQUksQ0FBQyxNQUFjLEVBQUUsTUFBb0IsRUFBRSxLQUFXOztZQUNqRSxNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBRTFGLElBQUksUUFBUSxDQUFDLElBQUksSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRTtnQkFDckMsT0FBTyxJQUFJLGVBQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDbEM7WUFFRCxNQUFNLFFBQVEsQ0FBQztRQUNqQixDQUFDO0tBQUE7SUFFWSxPQUFPLENBQUMsVUFBa0IsRUFBRSxLQUFXOztZQUNsRCxNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLG9CQUFvQixVQUFVLEVBQUUsb0JBQU8sS0FBSyxFQUFHLENBQUM7WUFFckYsSUFBSSxRQUFRLENBQUMsSUFBSSxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFO2dCQUNyQyxPQUFPLElBQUksZUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNsQztZQUVELE1BQU0sUUFBUSxDQUFDO1FBQ2pCLENBQUM7S0FBQTtJQUVZLFFBQVEsQ0FBQyxPQUFlLEVBQUUsS0FBMEI7O1lBQy9ELE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsMkJBQTJCLGtCQUFJLE9BQU8sSUFBSyxLQUFLLEVBQUcsQ0FBQztZQUV6RixJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUU7Z0JBQ2pCLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQzthQUN0QjtZQUVELE1BQU0sUUFBUSxDQUFDO1FBQ2pCLENBQUM7S0FBQTtJQUVZLEdBQUcsQ0FBQyxPQUFlLEVBQUUsT0FBc0IsRUFBRSxLQUEwQjs7WUFDbEYsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxzQkFBc0Isa0JBQUksT0FBTyxFQUFFLE9BQU8sSUFBSyxLQUFLLEVBQUcsQ0FBQztZQUU5RixJQUFJLFFBQVEsQ0FBQyxJQUFJLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUU7Z0JBQ3JDLE9BQU8sSUFBSSxnQkFBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNuQztZQUVELE1BQU0sUUFBUSxDQUFDO1FBQ2pCLENBQUM7S0FBQTtDQUNGO0FBekRELDBDQXlEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHAsIEh0dHBPcHRpb25zIH0gZnJvbSBcIi4uLy4uL2Jhc2VcIjtcclxuaW1wb3J0IHsgV2FsbGV0U2NoZW1hLCBQYXltZW50LCBCb2xldG8sIFBheW1lbnRTY2hlbWEgfSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IEJhc2VDdXN0b2R5T3B0aW9ucywgQ3VzdG9keUJvbGV0b0ZlYXR1cmUsIEJvbGV0b1BheW1lbnRFeHRyYSB9IGZyb20gXCIuLi8uLi9wcm92aWRlclwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDdXN0b2R5Qm9sZXRvV2ViU2VydmljZU9wdGlvbnMgZXh0ZW5kcyBIdHRwT3B0aW9ucywgQmFzZUN1c3RvZHlPcHRpb25zIHtcclxuICBodHRwPzogSHR0cDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9keUJvbGV0b1dlYlNlcnZpY2UgZXh0ZW5kcyBDdXN0b2R5Qm9sZXRvRmVhdHVyZSB7XHJcbiAgcHVibGljIGh0dHA6IEh0dHA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSBvcHRpb25zOiBDdXN0b2R5Qm9sZXRvV2ViU2VydmljZU9wdGlvbnMpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLmh0dHAgPSBvcHRpb25zLmh0dHAgfHwgbmV3IEh0dHAob3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgaW5mbyh3YWxsZXQ6IFdhbGxldFNjaGVtYSwgZXh0cmE/OiBhbnkpOiBQcm9taXNlPFBheW1lbnQ+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5odHRwLmdldChcIi9wcm92aWRlci9ib2xldG8vaW5mb1wiLCB7IHdhbGxldCwgLi4uZXh0cmEgfSk7XHJcblxyXG4gICAgaWYgKHJlc3BvbnNlLmRhdGEpIHtcclxuICAgICAgcmV0dXJuIG5ldyBQYXltZW50KHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHRocm93IHJlc3BvbnNlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIGVtaXQoYW1vdW50OiBzdHJpbmcsIHdhbGxldDogV2FsbGV0U2NoZW1hLCBleHRyYT86IGFueSk6IFByb21pc2U8Qm9sZXRvPiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuaHR0cC5wb3N0KFwiL3Byb3ZpZGVyL2JvbGV0by9lbWl0XCIsIHsgYW1vdW50LCB3YWxsZXQsIGV4dHJhIH0pO1xyXG5cclxuICAgIGlmIChyZXNwb25zZS5kYXRhICYmIHJlc3BvbnNlLmRhdGEuaWQpIHtcclxuICAgICAgcmV0dXJuIG5ldyBCb2xldG8ocmVzcG9uc2UuZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhyb3cgcmVzcG9uc2U7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgZ2V0QnlJZChleHRlcm5hbElkOiBzdHJpbmcsIGV4dHJhPzogYW55KTogUHJvbWlzZTxCb2xldG8+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5odHRwLmdldChgL3Byb3ZpZGVyL2JvbGV0by8ke2V4dGVybmFsSWR9YCwgeyAuLi5leHRyYSB9KTtcclxuXHJcbiAgICBpZiAocmVzcG9uc2UuZGF0YSAmJiByZXNwb25zZS5kYXRhLmlkKSB7XHJcbiAgICAgIHJldHVybiBuZXcgQm9sZXRvKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHRocm93IHJlc3BvbnNlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIHZhbGlkYXRlKGJhckNvZGU6IHN0cmluZywgZXh0cmE/OiBCb2xldG9QYXltZW50RXh0cmEpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmh0dHAuZ2V0KGAvcHJvdmlkZXIvYm9sZXRvL3ZhbGlkYXRlYCwgeyBiYXJDb2RlLCAuLi5leHRyYSB9KTtcclxuXHJcbiAgICBpZiAocmVzcG9uc2UuZGF0YSkge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICB0aHJvdyByZXNwb25zZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBwYXkoYmFyQ29kZTogc3RyaW5nLCBwYXltZW50OiBQYXltZW50U2NoZW1hLCBleHRyYT86IEJvbGV0b1BheW1lbnRFeHRyYSk6IFByb21pc2U8UGF5bWVudFNjaGVtYT4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmh0dHAucG9zdChgL3Byb3ZpZGVyL2JvbGV0by9wYXlgLCB7IGJhckNvZGUsIHBheW1lbnQsIC4uLmV4dHJhIH0pO1xyXG5cclxuICAgIGlmIChyZXNwb25zZS5kYXRhICYmIHJlc3BvbnNlLmRhdGEuaWQpIHtcclxuICAgICAgcmV0dXJuIG5ldyBQYXltZW50KHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHRocm93IHJlc3BvbnNlO1xyXG4gIH1cclxufVxyXG4iXX0=