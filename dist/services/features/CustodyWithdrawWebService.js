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
class CustodyWithdrawWebService extends provider_1.CustodyWithdrawFeature {
    constructor(options) {
        super();
        this.options = options;
        this.http = options.http || new base_1.Http(options);
    }
    info(wallet, extra) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.http.get("/provider/withdraw", { wallet, extra });
            if (response.data) {
                return new models_1.Payment(response.data);
            }
            throw response;
        });
    }
    withdraw(payment, extra) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.http.post("/provider/withdraw/", { payment, extra });
            if (response.data && response.data.id) {
                return new models_1.Payment(response.data);
            }
            throw response;
        });
    }
    onWithdraw(payment, extra) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.http.post("/provider/withdraw/onwithdraw", { payment, extra });
            if (response.data && response.data.id) {
                return new models_1.Payment(response.data);
            }
            throw response;
        });
    }
}
exports.default = CustodyWithdrawWebService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9keVdpdGhkcmF3V2ViU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9zZXJ2aWNlcy9mZWF0dXJlcy9DdXN0b2R5V2l0aGRyYXdXZWJTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQ0FBK0M7QUFDL0MseUNBQW9FO0FBQ3BFLDZDQUE0RTtBQU01RSxNQUFxQix5QkFBMEIsU0FBUSxpQ0FBc0I7SUFHM0UsWUFBNEIsT0FBeUM7UUFDbkUsS0FBSyxFQUFFLENBQUM7UUFEa0IsWUFBTyxHQUFQLE9BQU8sQ0FBa0M7UUFFbkUsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxJQUFJLElBQUksV0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFWSxJQUFJLENBQUMsTUFBb0IsRUFBRSxLQUFXOztZQUNqRCxNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7WUFFOUUsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFO2dCQUNqQixPQUFPLElBQUksZ0JBQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDbkM7WUFFRCxNQUFNLFFBQVEsQ0FBQztRQUNqQixDQUFDO0tBQUE7SUFFWSxRQUFRLENBQUMsT0FBc0IsRUFBRSxLQUFXOztZQUN2RCxNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7WUFFakYsSUFBSSxRQUFRLENBQUMsSUFBSSxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFO2dCQUNyQyxPQUFPLElBQUksZ0JBQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDbkM7WUFFRCxNQUFNLFFBQVEsQ0FBQztRQUNqQixDQUFDO0tBQUE7SUFFWSxVQUFVLENBQUMsT0FBc0IsRUFBRSxLQUFXOztZQUN6RCxNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLCtCQUErQixFQUFFLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7WUFFM0YsSUFBSSxRQUFRLENBQUMsSUFBSSxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFO2dCQUNyQyxPQUFPLElBQUksZ0JBQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDbkM7WUFFRCxNQUFNLFFBQVEsQ0FBQztRQUNqQixDQUFDO0tBQUE7Q0FDRjtBQXJDRCw0Q0FxQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwLCBIdHRwT3B0aW9ucyB9IGZyb20gXCIuLi8uLi9iYXNlXCI7XG5pbXBvcnQgeyBXYWxsZXRTY2hlbWEsIFBheW1lbnQsIFBheW1lbnRTY2hlbWEgfSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XG5pbXBvcnQgeyBCYXNlQ3VzdG9keU9wdGlvbnMsIEN1c3RvZHlXaXRoZHJhd0ZlYXR1cmUgfSBmcm9tIFwiLi4vLi4vcHJvdmlkZXJcIjtcblxuZXhwb3J0IGludGVyZmFjZSBDdXN0b2R5V2l0aGRyYXdXZWJTZXJ2aWNlT3B0aW9ucyBleHRlbmRzIEh0dHBPcHRpb25zLCBCYXNlQ3VzdG9keU9wdGlvbnMge1xuICBodHRwPzogSHR0cDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9keVdpdGhkcmF3V2ViU2VydmljZSBleHRlbmRzIEN1c3RvZHlXaXRoZHJhd0ZlYXR1cmUge1xuICBwdWJsaWMgaHR0cDogSHR0cDtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVhZG9ubHkgb3B0aW9uczogQ3VzdG9keVdpdGhkcmF3V2ViU2VydmljZU9wdGlvbnMpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuaHR0cCA9IG9wdGlvbnMuaHR0cCB8fCBuZXcgSHR0cChvcHRpb25zKTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBpbmZvKHdhbGxldDogV2FsbGV0U2NoZW1hLCBleHRyYT86IGFueSk6IFByb21pc2U8UGF5bWVudD4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5odHRwLmdldChcIi9wcm92aWRlci93aXRoZHJhd1wiLCB7IHdhbGxldCwgZXh0cmEgfSk7XG5cbiAgICBpZiAocmVzcG9uc2UuZGF0YSkge1xuICAgICAgcmV0dXJuIG5ldyBQYXltZW50KHJlc3BvbnNlLmRhdGEpO1xuICAgIH1cblxuICAgIHRocm93IHJlc3BvbnNlO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIHdpdGhkcmF3KHBheW1lbnQ6IFBheW1lbnRTY2hlbWEsIGV4dHJhPzogYW55KTogUHJvbWlzZTxQYXltZW50PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmh0dHAucG9zdChcIi9wcm92aWRlci93aXRoZHJhdy9cIiwgeyBwYXltZW50LCBleHRyYSB9KTtcblxuICAgIGlmIChyZXNwb25zZS5kYXRhICYmIHJlc3BvbnNlLmRhdGEuaWQpIHtcbiAgICAgIHJldHVybiBuZXcgUGF5bWVudChyZXNwb25zZS5kYXRhKTtcbiAgICB9XG5cbiAgICB0aHJvdyByZXNwb25zZTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBvbldpdGhkcmF3KHBheW1lbnQ6IFBheW1lbnRTY2hlbWEsIGV4dHJhPzogYW55KTogUHJvbWlzZTxQYXltZW50PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmh0dHAucG9zdChcIi9wcm92aWRlci93aXRoZHJhdy9vbndpdGhkcmF3XCIsIHsgcGF5bWVudCwgZXh0cmEgfSk7XG5cbiAgICBpZiAocmVzcG9uc2UuZGF0YSAmJiByZXNwb25zZS5kYXRhLmlkKSB7XG4gICAgICByZXR1cm4gbmV3IFBheW1lbnQocmVzcG9uc2UuZGF0YSk7XG4gICAgfVxuXG4gICAgdGhyb3cgcmVzcG9uc2U7XG4gIH1cbn1cbiJdfQ==