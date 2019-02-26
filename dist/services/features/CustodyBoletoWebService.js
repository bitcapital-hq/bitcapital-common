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
        this.http = new base_1.Http(options);
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
                return new models_1.Payment(response.data);
            }
            throw response;
        });
    }
}
exports.default = CustodyBoletoWebService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9keUJvbGV0b1dlYlNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvc2VydmljZXMvZmVhdHVyZXMvQ3VzdG9keUJvbGV0b1dlYlNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFDQUErQztBQUMvQyx5Q0FBNkQ7QUFDN0QsNkNBQThGO0FBSTlGLE1BQXFCLHVCQUF3QixTQUFRLCtCQUFvQjtJQUd2RSxZQUE0QixPQUF1QztRQUNqRSxLQUFLLEVBQUUsQ0FBQztRQURrQixZQUFPLEdBQVAsT0FBTyxDQUFnQztRQUVqRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksV0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFWSxJQUFJLENBQUMsTUFBb0IsRUFBRSxLQUFXOztZQUNqRCxNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLHVCQUF1QixrQkFBSSxNQUFNLElBQUssS0FBSyxFQUFHLENBQUM7WUFFcEYsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFO2dCQUNqQixPQUFPLElBQUksZ0JBQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDbkM7WUFFRCxNQUFNLFFBQVEsQ0FBQztRQUNqQixDQUFDO0tBQUE7SUFFWSxJQUFJLENBQUMsTUFBYyxFQUFFLE1BQW9CLEVBQUUsS0FBVzs7WUFDakUsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUUxRixJQUFJLFFBQVEsQ0FBQyxJQUFJLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUU7Z0JBQ3JDLE9BQU8sSUFBSSxlQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2xDO1lBRUQsTUFBTSxRQUFRLENBQUM7UUFDakIsQ0FBQztLQUFBO0lBRVksT0FBTyxDQUFDLFVBQWtCLEVBQUUsS0FBVzs7WUFDbEQsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsVUFBVSxFQUFFLG9CQUFPLEtBQUssRUFBRyxDQUFDO1lBRXJGLElBQUksUUFBUSxDQUFDLElBQUksSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRTtnQkFDckMsT0FBTyxJQUFJLGVBQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDbEM7WUFFRCxNQUFNLFFBQVEsQ0FBQztRQUNqQixDQUFDO0tBQUE7SUFFWSxRQUFRLENBQUMsT0FBZSxFQUFFLEtBQTBCOztZQUMvRCxNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLDJCQUEyQixrQkFBSSxPQUFPLElBQUssS0FBSyxFQUFHLENBQUM7WUFFekYsSUFBSSxRQUFRLENBQUMsSUFBSSxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFO2dCQUNyQyxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7YUFDdEI7WUFFRCxNQUFNLFFBQVEsQ0FBQztRQUNqQixDQUFDO0tBQUE7SUFFWSxHQUFHLENBQUMsT0FBZSxFQUFFLE1BQW9CLEVBQUUsS0FBMEI7O1lBQ2hGLE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsc0JBQXNCLGtCQUFJLE9BQU8sRUFBRSxNQUFNLElBQUssS0FBSyxFQUFHLENBQUM7WUFFN0YsSUFBSSxRQUFRLENBQUMsSUFBSSxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFO2dCQUNyQyxPQUFPLElBQUksZ0JBQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDbkM7WUFFRCxNQUFNLFFBQVEsQ0FBQztRQUNqQixDQUFDO0tBQUE7Q0FDRjtBQXpERCwwQ0F5REMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwLCBIdHRwT3B0aW9ucyB9IGZyb20gXCIuLi8uLi9iYXNlXCI7XG5pbXBvcnQgeyBXYWxsZXRTY2hlbWEsIFBheW1lbnQsIEJvbGV0byB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcbmltcG9ydCB7IEJhc2VDdXN0b2R5T3B0aW9ucywgQ3VzdG9keUJvbGV0b0ZlYXR1cmUsIEJvbGV0b1BheW1lbnRFeHRyYSB9IGZyb20gXCIuLi8uLi9wcm92aWRlclwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEN1c3RvZHlCb2xldG9XZWJTZXJ2aWNlT3B0aW9ucyBleHRlbmRzIEh0dHBPcHRpb25zLCBCYXNlQ3VzdG9keU9wdGlvbnMge31cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9keUJvbGV0b1dlYlNlcnZpY2UgZXh0ZW5kcyBDdXN0b2R5Qm9sZXRvRmVhdHVyZSB7XG4gIHByb3RlY3RlZCBodHRwOiBIdHRwO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSBvcHRpb25zOiBDdXN0b2R5Qm9sZXRvV2ViU2VydmljZU9wdGlvbnMpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuaHR0cCA9IG5ldyBIdHRwKG9wdGlvbnMpO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGluZm8od2FsbGV0OiBXYWxsZXRTY2hlbWEsIGV4dHJhPzogYW55KTogUHJvbWlzZTxQYXltZW50PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmh0dHAuZ2V0KFwiL3Byb3ZpZGVyL2JvbGV0by9pbmZvXCIsIHsgd2FsbGV0LCAuLi5leHRyYSB9KTtcblxuICAgIGlmIChyZXNwb25zZS5kYXRhKSB7XG4gICAgICByZXR1cm4gbmV3IFBheW1lbnQocmVzcG9uc2UuZGF0YSk7XG4gICAgfVxuXG4gICAgdGhyb3cgcmVzcG9uc2U7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgZW1pdChhbW91bnQ6IHN0cmluZywgd2FsbGV0OiBXYWxsZXRTY2hlbWEsIGV4dHJhPzogYW55KTogUHJvbWlzZTxCb2xldG8+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuaHR0cC5wb3N0KFwiL3Byb3ZpZGVyL2JvbGV0by9lbWl0XCIsIHsgYW1vdW50LCB3YWxsZXQsIGV4dHJhIH0pO1xuXG4gICAgaWYgKHJlc3BvbnNlLmRhdGEgJiYgcmVzcG9uc2UuZGF0YS5pZCkge1xuICAgICAgcmV0dXJuIG5ldyBCb2xldG8ocmVzcG9uc2UuZGF0YSk7XG4gICAgfVxuXG4gICAgdGhyb3cgcmVzcG9uc2U7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgZ2V0QnlJZChleHRlcm5hbElkOiBzdHJpbmcsIGV4dHJhPzogYW55KTogUHJvbWlzZTxCb2xldG8+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuaHR0cC5nZXQoYC9wcm92aWRlci9ib2xldG8vJHtleHRlcm5hbElkfWAsIHsgLi4uZXh0cmEgfSk7XG5cbiAgICBpZiAocmVzcG9uc2UuZGF0YSAmJiByZXNwb25zZS5kYXRhLmlkKSB7XG4gICAgICByZXR1cm4gbmV3IEJvbGV0byhyZXNwb25zZS5kYXRhKTtcbiAgICB9XG5cbiAgICB0aHJvdyByZXNwb25zZTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyB2YWxpZGF0ZShiYXJDb2RlOiBzdHJpbmcsIGV4dHJhPzogQm9sZXRvUGF5bWVudEV4dHJhKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuaHR0cC5nZXQoYC9wcm92aWRlci9ib2xldG8vdmFsaWRhdGVgLCB7IGJhckNvZGUsIC4uLmV4dHJhIH0pO1xuXG4gICAgaWYgKHJlc3BvbnNlLmRhdGEgJiYgcmVzcG9uc2UuZGF0YS5pZCkge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgfVxuXG4gICAgdGhyb3cgcmVzcG9uc2U7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgcGF5KGJhckNvZGU6IHN0cmluZywgd2FsbGV0OiBXYWxsZXRTY2hlbWEsIGV4dHJhPzogQm9sZXRvUGF5bWVudEV4dHJhKTogUHJvbWlzZTxQYXltZW50PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmh0dHAucG9zdChgL3Byb3ZpZGVyL2JvbGV0by9wYXlgLCB7IGJhckNvZGUsIHdhbGxldCwgLi4uZXh0cmEgfSk7XG5cbiAgICBpZiAocmVzcG9uc2UuZGF0YSAmJiByZXNwb25zZS5kYXRhLmlkKSB7XG4gICAgICByZXR1cm4gbmV3IFBheW1lbnQocmVzcG9uc2UuZGF0YSk7XG4gICAgfVxuXG4gICAgdGhyb3cgcmVzcG9uc2U7XG4gIH1cbn1cbiJdfQ==