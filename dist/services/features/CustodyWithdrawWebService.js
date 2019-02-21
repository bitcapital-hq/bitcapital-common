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
class CustodyWithdrawWebService extends provider_1.CustodyWithdrawFeature {
    constructor(options) {
        super();
        this.options = options;
        this.http = new base_1.Http(options);
    }
    info(wallet, extra) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.http.get('/provider/withdraw', { wallet, extra });
            if (response.data) {
                return response.data;
            }
            throw response;
        });
    }
    withdraw(amount, wallet, extra) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.http.post('/provider/withdraw', { amount, wallet, extra });
            if (response.data && response.data.id) {
                return response.data;
            }
            throw response;
        });
    }
    onWithdraw(amount, wallet, extra) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.http.post('/provider/withdraw/postback', { amount, wallet, extra });
            if (response.data && response.data.id) {
                return response.data;
            }
            throw response;
        });
    }
}
exports.default = CustodyWithdrawWebService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9keVdpdGhkcmF3V2ViU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9zZXJ2aWNlcy9mZWF0dXJlcy9DdXN0b2R5V2l0aGRyYXdXZWJTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQ0FBK0M7QUFFL0MsNkNBQTRFO0FBSzVFLE1BQXFCLHlCQUEwQixTQUFRLGlDQUFzQjtJQUczRSxZQUE0QixPQUF5QztRQUNuRSxLQUFLLEVBQUUsQ0FBQztRQURrQixZQUFPLEdBQVAsT0FBTyxDQUFrQztRQUVuRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksV0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFWSxJQUFJLENBQUMsTUFBb0IsRUFBRSxLQUFXOztZQUNqRCxNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7WUFFOUUsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFO2dCQUNqQixPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7YUFDdEI7WUFFRCxNQUFNLFFBQVEsQ0FBQztRQUNqQixDQUFDO0tBQUE7SUFFWSxRQUFRLENBQUMsTUFBYyxFQUFFLE1BQW9CLEVBQUUsS0FBVzs7WUFDckUsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUV2RixJQUFJLFFBQVEsQ0FBQyxJQUFJLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUU7Z0JBQ3JDLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQzthQUN0QjtZQUVELE1BQU0sUUFBUSxDQUFDO1FBQ2pCLENBQUM7S0FBQTtJQUVZLFVBQVUsQ0FBQyxNQUFjLEVBQUUsTUFBb0IsRUFBRSxLQUFXOztZQUN2RSxNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLDZCQUE2QixFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBRWhHLElBQUksUUFBUSxDQUFDLElBQUksSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRTtnQkFDckMsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO2FBQ3RCO1lBRUQsTUFBTSxRQUFRLENBQUM7UUFDakIsQ0FBQztLQUFBO0NBRUY7QUF0Q0QsNENBc0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cCwgSHR0cE9wdGlvbnMgfSBmcm9tIFwiLi4vLi4vYmFzZVwiO1xyXG5pbXBvcnQgeyBQYXltZW50U2NoZW1hLCBXYWxsZXRTY2hlbWEgfSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IEJhc2VDdXN0b2R5T3B0aW9ucywgQ3VzdG9keVdpdGhkcmF3RmVhdHVyZSB9IGZyb20gXCIuLi8uLi9wcm92aWRlclwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDdXN0b2R5V2l0aGRyYXdXZWJTZXJ2aWNlT3B0aW9ucyBleHRlbmRzIEh0dHBPcHRpb25zLCBCYXNlQ3VzdG9keU9wdGlvbnMge1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b2R5V2l0aGRyYXdXZWJTZXJ2aWNlIGV4dGVuZHMgQ3VzdG9keVdpdGhkcmF3RmVhdHVyZSB7XHJcbiAgcHJvdGVjdGVkIGh0dHA6IEh0dHA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSBvcHRpb25zOiBDdXN0b2R5V2l0aGRyYXdXZWJTZXJ2aWNlT3B0aW9ucykge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuaHR0cCA9IG5ldyBIdHRwKG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIGluZm8od2FsbGV0OiBXYWxsZXRTY2hlbWEsIGV4dHJhPzogYW55KTogUHJvbWlzZTxQYXltZW50U2NoZW1hPiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuaHR0cC5nZXQoJy9wcm92aWRlci93aXRoZHJhdycsIHsgd2FsbGV0LCBleHRyYSB9KTtcclxuXHJcbiAgICBpZiAocmVzcG9uc2UuZGF0YSkge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICB0aHJvdyByZXNwb25zZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyB3aXRoZHJhdyhhbW91bnQ6IHN0cmluZywgd2FsbGV0OiBXYWxsZXRTY2hlbWEsIGV4dHJhPzogYW55KTogUHJvbWlzZTxQYXltZW50U2NoZW1hPiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuaHR0cC5wb3N0KCcvcHJvdmlkZXIvd2l0aGRyYXcnLCB7IGFtb3VudCwgd2FsbGV0LCBleHRyYSB9KTtcclxuXHJcbiAgICBpZiAocmVzcG9uc2UuZGF0YSAmJiByZXNwb25zZS5kYXRhLmlkKSB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIHRocm93IHJlc3BvbnNlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIG9uV2l0aGRyYXcoYW1vdW50OiBzdHJpbmcsIHdhbGxldDogV2FsbGV0U2NoZW1hLCBleHRyYT86IGFueSk6IFByb21pc2U8UGF5bWVudFNjaGVtYT4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmh0dHAucG9zdCgnL3Byb3ZpZGVyL3dpdGhkcmF3L3Bvc3RiYWNrJywgeyBhbW91bnQsIHdhbGxldCwgZXh0cmEgfSk7XHJcblxyXG4gICAgaWYgKHJlc3BvbnNlLmRhdGEgJiYgcmVzcG9uc2UuZGF0YS5pZCkge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICB0aHJvdyByZXNwb25zZTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==