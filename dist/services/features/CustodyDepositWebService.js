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
class CustodyDepositWebService extends provider_1.CustodyDepositFeature {
    constructor(options) {
        super();
        this.options = options;
        this.http = options.http || new base_1.Http(options);
    }
    info(wallet, extra) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.http.get("/provider/deposit", { wallet, extra });
            if (response.data) {
                return new models_1.Payment(response.data);
            }
            throw response;
        });
    }
    onDeposit(payment, extra) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.http.post("/provider/deposit/postback", { payment, extra });
            if (response.data && response.data.id) {
                return new models_1.Payment(response.data);
            }
            throw response;
        });
    }
}
exports.default = CustodyDepositWebService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9keURlcG9zaXRXZWJTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL3NlcnZpY2VzL2ZlYXR1cmVzL0N1c3RvZHlEZXBvc2l0V2ViU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUNBQStDO0FBQy9DLHlDQUFvRTtBQUNwRSw2Q0FBMkU7QUFNM0UsTUFBcUIsd0JBQXlCLFNBQVEsZ0NBQXFCO0lBR3pFLFlBQTRCLE9BQXdDO1FBQ2xFLEtBQUssRUFBRSxDQUFDO1FBRGtCLFlBQU8sR0FBUCxPQUFPLENBQWlDO1FBRWxFLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksSUFBSSxJQUFJLFdBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRVksSUFBSSxDQUFDLE1BQW9CLEVBQUUsS0FBVzs7WUFDakQsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBRTdFLElBQUksUUFBUSxDQUFDLElBQUksRUFBRTtnQkFDakIsT0FBTyxJQUFJLGdCQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ25DO1lBRUQsTUFBTSxRQUFRLENBQUM7UUFDakIsQ0FBQztLQUFBO0lBRVksU0FBUyxDQUFDLE9BQXNCLEVBQUUsS0FBVzs7WUFDeEQsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyw0QkFBNEIsRUFBRSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBRXhGLElBQUksUUFBUSxDQUFDLElBQUksSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRTtnQkFDckMsT0FBTyxJQUFJLGdCQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ25DO1lBRUQsTUFBTSxRQUFRLENBQUM7UUFDakIsQ0FBQztLQUFBO0NBQ0Y7QUEzQkQsMkNBMkJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cCwgSHR0cE9wdGlvbnMgfSBmcm9tIFwiLi4vLi4vYmFzZVwiO1xyXG5pbXBvcnQgeyBQYXltZW50LCBXYWxsZXRTY2hlbWEsIFBheW1lbnRTY2hlbWEgfSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XHJcbmltcG9ydCB7IEJhc2VDdXN0b2R5T3B0aW9ucywgQ3VzdG9keURlcG9zaXRGZWF0dXJlIH0gZnJvbSBcIi4uLy4uL3Byb3ZpZGVyXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEN1c3RvZHlEZXBvc2l0V2ViU2VydmljZU9wdGlvbnMgZXh0ZW5kcyBIdHRwT3B0aW9ucywgQmFzZUN1c3RvZHlPcHRpb25zIHtcclxuICBodHRwPzogSHR0cDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9keURlcG9zaXRXZWJTZXJ2aWNlIGV4dGVuZHMgQ3VzdG9keURlcG9zaXRGZWF0dXJlIHtcclxuICBwdWJsaWMgaHR0cDogSHR0cDtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5IG9wdGlvbnM6IEN1c3RvZHlEZXBvc2l0V2ViU2VydmljZU9wdGlvbnMpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLmh0dHAgPSBvcHRpb25zLmh0dHAgfHwgbmV3IEh0dHAob3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgaW5mbyh3YWxsZXQ6IFdhbGxldFNjaGVtYSwgZXh0cmE/OiBhbnkpOiBQcm9taXNlPFBheW1lbnQ+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5odHRwLmdldChcIi9wcm92aWRlci9kZXBvc2l0XCIsIHsgd2FsbGV0LCBleHRyYSB9KTtcclxuXHJcbiAgICBpZiAocmVzcG9uc2UuZGF0YSkge1xyXG4gICAgICByZXR1cm4gbmV3IFBheW1lbnQocmVzcG9uc2UuZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhyb3cgcmVzcG9uc2U7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgb25EZXBvc2l0KHBheW1lbnQ6IFBheW1lbnRTY2hlbWEsIGV4dHJhPzogYW55KTogUHJvbWlzZTxQYXltZW50PiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuaHR0cC5wb3N0KFwiL3Byb3ZpZGVyL2RlcG9zaXQvcG9zdGJhY2tcIiwgeyBwYXltZW50LCBleHRyYSB9KTtcclxuXHJcbiAgICBpZiAocmVzcG9uc2UuZGF0YSAmJiByZXNwb25zZS5kYXRhLmlkKSB7XHJcbiAgICAgIHJldHVybiBuZXcgUGF5bWVudChyZXNwb25zZS5kYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICB0aHJvdyByZXNwb25zZTtcclxuICB9XHJcbn1cclxuIl19