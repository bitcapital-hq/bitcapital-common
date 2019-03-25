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
class CustodyPhoneCreditWebService extends provider_1.CustodyPhoneCreditFeature {
    constructor(options = {}) {
        super();
        this.options = options;
        this.http = new base_1.Http(options);
    }
    getMobileCreditProviders() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.http.get("/provider/mobile/providers/info");
            if (response.data) {
                return response.data;
            }
            throw response;
        });
    }
}
exports.default = CustodyPhoneCreditWebService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9keVBob25lQ3JlZGl0V2ViU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9zZXJ2aWNlcy9mZWF0dXJlcy9DdXN0b2R5UGhvbmVDcmVkaXRXZWJTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQ0FBK0M7QUFDL0MsNkNBQStFO0FBTS9FLE1BQXFCLDRCQUE2QixTQUFRLG9DQUF5QjtJQUcvRSxZQUE0QixVQUErQyxFQUFFO1FBQ3pFLEtBQUssRUFBRSxDQUFDO1FBRGdCLFlBQU8sR0FBUCxPQUFPLENBQTBDO1FBRXpFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVVLHdCQUF3Qjs7WUFDakMsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1lBRXhFLElBQUksUUFBUSxDQUFDLElBQUksRUFBRTtnQkFDZixPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7YUFDeEI7WUFFRCxNQUFNLFFBQVEsQ0FBQztRQUNuQixDQUFDO0tBQUE7Q0FDSjtBQWpCRCwrQ0FpQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwLCBIdHRwT3B0aW9ucyB9IGZyb20gXCIuLi8uLi9iYXNlXCI7XG5pbXBvcnQgeyBCYXNlQ3VzdG9keU9wdGlvbnMsIEN1c3RvZHlQaG9uZUNyZWRpdEZlYXR1cmUgfSBmcm9tIFwiLi4vLi4vcHJvdmlkZXJcIjtcblxuZXhwb3J0IGludGVyZmFjZSBDdXN0b2R5UGhvbmVDcmVkaXRXZWJTZXJ2aWNlT3B0aW9ucyBleHRlbmRzIEh0dHBPcHRpb25zLCBCYXNlQ3VzdG9keU9wdGlvbnMge1xuICAgIGh0dHA/OiBIdHRwO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b2R5UGhvbmVDcmVkaXRXZWJTZXJ2aWNlIGV4dGVuZHMgQ3VzdG9keVBob25lQ3JlZGl0RmVhdHVyZSB7XG4gICAgcHVibGljIGh0dHA6IEh0dHA7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVhZG9ubHkgb3B0aW9uczogQ3VzdG9keVBob25lQ3JlZGl0V2ViU2VydmljZU9wdGlvbnMgPSB7fSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmh0dHAgPSBuZXcgSHR0cChvcHRpb25zKTtcbiAgICAgIH1cbiAgICBcbiAgICBwdWJsaWMgYXN5bmMgZ2V0TW9iaWxlQ3JlZGl0UHJvdmlkZXJzKCl7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5odHRwLmdldChcIi9wcm92aWRlci9tb2JpbGUvcHJvdmlkZXJzL2luZm9cIik7XG5cbiAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhyb3cgcmVzcG9uc2U7XG4gICAgfVxufSJdfQ==