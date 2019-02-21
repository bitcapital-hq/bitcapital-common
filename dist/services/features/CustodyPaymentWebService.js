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
class CustodyPaymentWebService extends provider_1.CustodyPaymentFeature {
    constructor(options) {
        super();
        this.options = options;
        this.http = new base_1.Http(options);
    }
    payment(schema) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.http.post('/provider/payment', Object.assign({}, schema));
            if (response.data && response.data.length) {
                return response.data;
            }
            throw response;
        });
    }
}
exports.default = CustodyPaymentWebService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9keVBheW1lbnRXZWJTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL3NlcnZpY2VzL2ZlYXR1cmVzL0N1c3RvZHlQYXltZW50V2ViU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUNBQStDO0FBRS9DLDZDQUEyRTtBQUszRSxNQUFxQix3QkFBeUIsU0FBUSxnQ0FBcUI7SUFHekUsWUFBNEIsT0FBd0M7UUFDbEUsS0FBSyxFQUFFLENBQUM7UUFEa0IsWUFBTyxHQUFQLE9BQU8sQ0FBaUM7UUFFbEUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFdBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRVksT0FBTyxDQUFDLE1BQXFCOztZQUN4QyxNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixvQkFBTSxNQUFNLEVBQUUsQ0FBQztZQUV4RSxJQUFJLFFBQVEsQ0FBQyxJQUFJLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ3pDLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQzthQUN0QjtZQUVELE1BQU0sUUFBUSxDQUFDO1FBQ2pCLENBQUM7S0FBQTtDQUVGO0FBbEJELDJDQWtCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHAsIEh0dHBPcHRpb25zIH0gZnJvbSBcIi4uLy4uL2Jhc2VcIjtcclxuaW1wb3J0IHsgUGF5bWVudFNjaGVtYSB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgQmFzZUN1c3RvZHlPcHRpb25zLCBDdXN0b2R5UGF5bWVudEZlYXR1cmUgfSBmcm9tIFwiLi4vLi4vcHJvdmlkZXJcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ3VzdG9keVBheW1lbnRXZWJTZXJ2aWNlT3B0aW9ucyBleHRlbmRzIEh0dHBPcHRpb25zLCBCYXNlQ3VzdG9keU9wdGlvbnMge1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b2R5UGF5bWVudFdlYlNlcnZpY2UgZXh0ZW5kcyBDdXN0b2R5UGF5bWVudEZlYXR1cmUge1xyXG4gIHByb3RlY3RlZCBodHRwOiBIdHRwO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVhZG9ubHkgb3B0aW9uczogQ3VzdG9keVBheW1lbnRXZWJTZXJ2aWNlT3B0aW9ucykge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuaHR0cCA9IG5ldyBIdHRwKG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIHBheW1lbnQoc2NoZW1hOiBQYXltZW50U2NoZW1hKTogUHJvbWlzZTxQYXltZW50U2NoZW1hPiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuaHR0cC5wb3N0KCcvcHJvdmlkZXIvcGF5bWVudCcsIHsuLi5zY2hlbWF9KTtcclxuXHJcbiAgICBpZiAocmVzcG9uc2UuZGF0YSAmJiByZXNwb25zZS5kYXRhLmxlbmd0aCkge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICB0aHJvdyByZXNwb25zZTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==