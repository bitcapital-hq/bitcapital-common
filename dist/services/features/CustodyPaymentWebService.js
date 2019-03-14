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
class CustodyPaymentWebService extends provider_1.CustodyPaymentFeature {
    constructor(options) {
        super();
        this.options = options;
        this.http = options.http || new base_1.Http(options);
    }
    payment(schema) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.http.post("/provider/payment", Object.assign({}, schema));
            if (response && response.data) {
                return new models_1.Transaction(response.data);
            }
            throw response;
        });
    }
}
exports.default = CustodyPaymentWebService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9keVBheW1lbnRXZWJTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL3NlcnZpY2VzL2ZlYXR1cmVzL0N1c3RvZHlQYXltZW50V2ViU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUNBQStDO0FBQy9DLHlDQUE4RDtBQUM5RCw2Q0FBMkU7QUFNM0UsTUFBcUIsd0JBQXlCLFNBQVEsZ0NBQXFCO0lBR3pFLFlBQTRCLE9BQXdDO1FBQ2xFLEtBQUssRUFBRSxDQUFDO1FBRGtCLFlBQU8sR0FBUCxPQUFPLENBQWlDO1FBRWxFLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksSUFBSSxJQUFJLFdBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRVksT0FBTyxDQUFDLE1BQXlCOztZQUM1QyxNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixvQkFBTyxNQUFNLEVBQUcsQ0FBQztZQUUxRSxJQUFJLFFBQVEsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFO2dCQUM3QixPQUFPLElBQUksb0JBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDdkM7WUFFRCxNQUFNLFFBQVEsQ0FBQztRQUNqQixDQUFDO0tBQUE7Q0FDRjtBQWpCRCwyQ0FpQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwLCBIdHRwT3B0aW9ucyB9IGZyb20gXCIuLi8uLi9iYXNlXCI7XHJcbmltcG9ydCB7IFRyYW5zYWN0aW9uU2NoZW1hLCBUcmFuc2FjdGlvbiB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcclxuaW1wb3J0IHsgQmFzZUN1c3RvZHlPcHRpb25zLCBDdXN0b2R5UGF5bWVudEZlYXR1cmUgfSBmcm9tIFwiLi4vLi4vcHJvdmlkZXJcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ3VzdG9keVBheW1lbnRXZWJTZXJ2aWNlT3B0aW9ucyBleHRlbmRzIEh0dHBPcHRpb25zLCBCYXNlQ3VzdG9keU9wdGlvbnMge1xyXG4gIGh0dHA/OiBIdHRwO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b2R5UGF5bWVudFdlYlNlcnZpY2UgZXh0ZW5kcyBDdXN0b2R5UGF5bWVudEZlYXR1cmUge1xyXG4gIHB1YmxpYyBodHRwOiBIdHRwO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVhZG9ubHkgb3B0aW9uczogQ3VzdG9keVBheW1lbnRXZWJTZXJ2aWNlT3B0aW9ucykge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuaHR0cCA9IG9wdGlvbnMuaHR0cCB8fCBuZXcgSHR0cChvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBwYXltZW50KHNjaGVtYTogVHJhbnNhY3Rpb25TY2hlbWEpOiBQcm9taXNlPFRyYW5zYWN0aW9uPiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuaHR0cC5wb3N0KFwiL3Byb3ZpZGVyL3BheW1lbnRcIiwgeyAuLi5zY2hlbWEgfSk7XHJcblxyXG4gICAgaWYgKHJlc3BvbnNlICYmIHJlc3BvbnNlLmRhdGEpIHtcclxuICAgICAgcmV0dXJuIG5ldyBUcmFuc2FjdGlvbihyZXNwb25zZS5kYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICB0aHJvdyByZXNwb25zZTtcclxuICB9XHJcbn1cclxuIl19