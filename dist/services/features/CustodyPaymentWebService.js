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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9keVBheW1lbnRXZWJTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL3NlcnZpY2VzL2ZlYXR1cmVzL0N1c3RvZHlQYXltZW50V2ViU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUNBQStDO0FBQy9DLHlDQUE4RDtBQUM5RCw2Q0FBMkU7QUFNM0UsTUFBcUIsd0JBQXlCLFNBQVEsZ0NBQXFCO0lBR3pFLFlBQTRCLE9BQXdDO1FBQ2xFLEtBQUssRUFBRSxDQUFDO1FBRGtCLFlBQU8sR0FBUCxPQUFPLENBQWlDO1FBRWxFLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksSUFBSSxJQUFJLFdBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRVksT0FBTyxDQUFDLE1BQXlCOztZQUM1QyxNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixvQkFBTyxNQUFNLEVBQUcsQ0FBQztZQUUxRSxJQUFJLFFBQVEsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFO2dCQUM3QixPQUFPLElBQUksb0JBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDdkM7WUFFRCxNQUFNLFFBQVEsQ0FBQztRQUNqQixDQUFDO0tBQUE7Q0FDRjtBQWpCRCwyQ0FpQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwLCBIdHRwT3B0aW9ucyB9IGZyb20gXCIuLi8uLi9iYXNlXCI7XG5pbXBvcnQgeyBUcmFuc2FjdGlvblNjaGVtYSwgVHJhbnNhY3Rpb24gfSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XG5pbXBvcnQgeyBCYXNlQ3VzdG9keU9wdGlvbnMsIEN1c3RvZHlQYXltZW50RmVhdHVyZSB9IGZyb20gXCIuLi8uLi9wcm92aWRlclwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEN1c3RvZHlQYXltZW50V2ViU2VydmljZU9wdGlvbnMgZXh0ZW5kcyBIdHRwT3B0aW9ucywgQmFzZUN1c3RvZHlPcHRpb25zIHtcbiAgaHR0cD86IEh0dHA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvZHlQYXltZW50V2ViU2VydmljZSBleHRlbmRzIEN1c3RvZHlQYXltZW50RmVhdHVyZSB7XG4gIHB1YmxpYyBodHRwOiBIdHRwO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSBvcHRpb25zOiBDdXN0b2R5UGF5bWVudFdlYlNlcnZpY2VPcHRpb25zKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmh0dHAgPSBvcHRpb25zLmh0dHAgfHwgbmV3IEh0dHAob3B0aW9ucyk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgcGF5bWVudChzY2hlbWE6IFRyYW5zYWN0aW9uU2NoZW1hKTogUHJvbWlzZTxUcmFuc2FjdGlvbj4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5odHRwLnBvc3QoXCIvcHJvdmlkZXIvcGF5bWVudFwiLCB7IC4uLnNjaGVtYSB9KTtcblxuICAgIGlmIChyZXNwb25zZSAmJiByZXNwb25zZS5kYXRhKSB7XG4gICAgICByZXR1cm4gbmV3IFRyYW5zYWN0aW9uKHJlc3BvbnNlLmRhdGEpO1xuICAgIH1cblxuICAgIHRocm93IHJlc3BvbnNlO1xuICB9XG59XG4iXX0=