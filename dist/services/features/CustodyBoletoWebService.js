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
    getByDateRange(walletId, start, end, extra) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.http.get(`/provider/boleto/getByDateRange/${walletId}/${start}/${end}`, Object.assign({ walletId,
                start,
                end }, extra));
            if (response.data) {
                return response.data;
            }
            throw response;
        });
    }
}
exports.default = CustodyBoletoWebService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9keUJvbGV0b1dlYlNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvc2VydmljZXMvZmVhdHVyZXMvQ3VzdG9keUJvbGV0b1dlYlNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFDQUErQztBQUMvQyx5Q0FBNEU7QUFDNUUsNkNBQThGO0FBTTlGLE1BQXFCLHVCQUF3QixTQUFRLCtCQUFvQjtJQUd2RSxZQUE0QixPQUF1QztRQUNqRSxLQUFLLEVBQUUsQ0FBQztRQURrQixZQUFPLEdBQVAsT0FBTyxDQUFnQztRQUVqRSxJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLElBQUksSUFBSSxXQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVZLElBQUksQ0FBQyxNQUFvQixFQUFFLEtBQVc7O1lBQ2pELE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsdUJBQXVCLGtCQUFJLE1BQU0sSUFBSyxLQUFLLEVBQUcsQ0FBQztZQUVwRixJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUU7Z0JBQ2pCLE9BQU8sSUFBSSxnQkFBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNuQztZQUVELE1BQU0sUUFBUSxDQUFDO1FBQ2pCLENBQUM7S0FBQTtJQUVZLElBQUksQ0FBQyxNQUFjLEVBQUUsTUFBb0IsRUFBRSxLQUFXOztZQUNqRSxNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBRTFGLElBQUksUUFBUSxDQUFDLElBQUksSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRTtnQkFDckMsT0FBTyxJQUFJLGVBQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDbEM7WUFFRCxNQUFNLFFBQVEsQ0FBQztRQUNqQixDQUFDO0tBQUE7SUFFWSxPQUFPLENBQUMsVUFBa0IsRUFBRSxLQUFXOztZQUNsRCxNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLG9CQUFvQixVQUFVLEVBQUUsb0JBQU8sS0FBSyxFQUFHLENBQUM7WUFFckYsSUFBSSxRQUFRLENBQUMsSUFBSSxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFO2dCQUNyQyxPQUFPLElBQUksZUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNsQztZQUVELE1BQU0sUUFBUSxDQUFDO1FBQ2pCLENBQUM7S0FBQTtJQUVZLFFBQVEsQ0FBQyxPQUFlLEVBQUUsS0FBMEI7O1lBQy9ELE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsMkJBQTJCLGtCQUFJLE9BQU8sSUFBSyxLQUFLLEVBQUcsQ0FBQztZQUV6RixJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUU7Z0JBQ2pCLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQzthQUN0QjtZQUVELE1BQU0sUUFBUSxDQUFDO1FBQ2pCLENBQUM7S0FBQTtJQUVZLEdBQUcsQ0FBQyxPQUFlLEVBQUUsT0FBc0IsRUFBRSxLQUEwQjs7WUFDbEYsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxzQkFBc0Isa0JBQUksT0FBTyxFQUFFLE9BQU8sSUFBSyxLQUFLLEVBQUcsQ0FBQztZQUU5RixJQUFJLFFBQVEsQ0FBQyxJQUFJLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUU7Z0JBQ3JDLE9BQU8sSUFBSSxnQkFBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNuQztZQUVELE1BQU0sUUFBUSxDQUFDO1FBQ2pCLENBQUM7S0FBQTtJQUVZLGNBQWMsQ0FBQyxRQUFnQixFQUFFLEtBQVcsRUFBRSxHQUFTLEVBQUUsS0FBVzs7WUFDL0UsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsUUFBUSxJQUFJLEtBQUssSUFBSSxHQUFHLEVBQUUsa0JBQ2hHLFFBQVE7Z0JBQ1IsS0FBSztnQkFDTCxHQUFHLElBQ0EsS0FBSyxFQUNSLENBQUM7WUFFSCxJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUU7Z0JBQ2pCLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQzthQUN0QjtZQUVELE1BQU0sUUFBUSxDQUFDO1FBQ2pCLENBQUM7S0FBQTtDQUNGO0FBeEVELDBDQXdFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHAsIEh0dHBPcHRpb25zIH0gZnJvbSBcIi4uLy4uL2Jhc2VcIjtcbmltcG9ydCB7IFdhbGxldFNjaGVtYSwgUGF5bWVudCwgQm9sZXRvLCBQYXltZW50U2NoZW1hIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xuaW1wb3J0IHsgQmFzZUN1c3RvZHlPcHRpb25zLCBDdXN0b2R5Qm9sZXRvRmVhdHVyZSwgQm9sZXRvUGF5bWVudEV4dHJhIH0gZnJvbSBcIi4uLy4uL3Byb3ZpZGVyXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3VzdG9keUJvbGV0b1dlYlNlcnZpY2VPcHRpb25zIGV4dGVuZHMgSHR0cE9wdGlvbnMsIEJhc2VDdXN0b2R5T3B0aW9ucyB7XG4gIGh0dHA/OiBIdHRwO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b2R5Qm9sZXRvV2ViU2VydmljZSBleHRlbmRzIEN1c3RvZHlCb2xldG9GZWF0dXJlIHtcbiAgcHVibGljIGh0dHA6IEh0dHA7XG5cbiAgY29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5IG9wdGlvbnM6IEN1c3RvZHlCb2xldG9XZWJTZXJ2aWNlT3B0aW9ucykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5odHRwID0gb3B0aW9ucy5odHRwIHx8IG5ldyBIdHRwKG9wdGlvbnMpO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGluZm8od2FsbGV0OiBXYWxsZXRTY2hlbWEsIGV4dHJhPzogYW55KTogUHJvbWlzZTxQYXltZW50PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmh0dHAuZ2V0KFwiL3Byb3ZpZGVyL2JvbGV0by9pbmZvXCIsIHsgd2FsbGV0LCAuLi5leHRyYSB9KTtcblxuICAgIGlmIChyZXNwb25zZS5kYXRhKSB7XG4gICAgICByZXR1cm4gbmV3IFBheW1lbnQocmVzcG9uc2UuZGF0YSk7XG4gICAgfVxuXG4gICAgdGhyb3cgcmVzcG9uc2U7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgZW1pdChhbW91bnQ6IHN0cmluZywgd2FsbGV0OiBXYWxsZXRTY2hlbWEsIGV4dHJhPzogYW55KTogUHJvbWlzZTxCb2xldG8+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuaHR0cC5wb3N0KFwiL3Byb3ZpZGVyL2JvbGV0by9lbWl0XCIsIHsgYW1vdW50LCB3YWxsZXQsIGV4dHJhIH0pO1xuXG4gICAgaWYgKHJlc3BvbnNlLmRhdGEgJiYgcmVzcG9uc2UuZGF0YS5pZCkge1xuICAgICAgcmV0dXJuIG5ldyBCb2xldG8ocmVzcG9uc2UuZGF0YSk7XG4gICAgfVxuXG4gICAgdGhyb3cgcmVzcG9uc2U7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgZ2V0QnlJZChleHRlcm5hbElkOiBzdHJpbmcsIGV4dHJhPzogYW55KTogUHJvbWlzZTxCb2xldG8+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuaHR0cC5nZXQoYC9wcm92aWRlci9ib2xldG8vJHtleHRlcm5hbElkfWAsIHsgLi4uZXh0cmEgfSk7XG5cbiAgICBpZiAocmVzcG9uc2UuZGF0YSAmJiByZXNwb25zZS5kYXRhLmlkKSB7XG4gICAgICByZXR1cm4gbmV3IEJvbGV0byhyZXNwb25zZS5kYXRhKTtcbiAgICB9XG5cbiAgICB0aHJvdyByZXNwb25zZTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyB2YWxpZGF0ZShiYXJDb2RlOiBzdHJpbmcsIGV4dHJhPzogQm9sZXRvUGF5bWVudEV4dHJhKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuaHR0cC5nZXQoYC9wcm92aWRlci9ib2xldG8vdmFsaWRhdGVgLCB7IGJhckNvZGUsIC4uLmV4dHJhIH0pO1xuXG4gICAgaWYgKHJlc3BvbnNlLmRhdGEpIHtcbiAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgIH1cblxuICAgIHRocm93IHJlc3BvbnNlO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIHBheShiYXJDb2RlOiBzdHJpbmcsIHBheW1lbnQ6IFBheW1lbnRTY2hlbWEsIGV4dHJhPzogQm9sZXRvUGF5bWVudEV4dHJhKTogUHJvbWlzZTxQYXltZW50U2NoZW1hPiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmh0dHAucG9zdChgL3Byb3ZpZGVyL2JvbGV0by9wYXlgLCB7IGJhckNvZGUsIHBheW1lbnQsIC4uLmV4dHJhIH0pO1xuXG4gICAgaWYgKHJlc3BvbnNlLmRhdGEgJiYgcmVzcG9uc2UuZGF0YS5pZCkge1xuICAgICAgcmV0dXJuIG5ldyBQYXltZW50KHJlc3BvbnNlLmRhdGEpO1xuICAgIH1cblxuICAgIHRocm93IHJlc3BvbnNlO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGdldEJ5RGF0ZVJhbmdlKHdhbGxldElkOiBzdHJpbmcsIHN0YXJ0OiBEYXRlLCBlbmQ6IERhdGUsIGV4dHJhPzogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuaHR0cC5nZXQoYC9wcm92aWRlci9ib2xldG8vZ2V0QnlEYXRlUmFuZ2UvJHt3YWxsZXRJZH0vJHtzdGFydH0vJHtlbmR9YCwge1xuICAgICAgd2FsbGV0SWQsXG4gICAgICBzdGFydCxcbiAgICAgIGVuZCxcbiAgICAgIC4uLmV4dHJhXG4gICAgfSk7XG5cbiAgICBpZiAocmVzcG9uc2UuZGF0YSkge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgfVxuXG4gICAgdGhyb3cgcmVzcG9uc2U7XG4gIH1cbn1cbiJdfQ==