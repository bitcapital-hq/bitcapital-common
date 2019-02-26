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
        this.http = new base_1.Http(options);
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
    onDeposit(amount, wallet, extra) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.http.post("/provider/deposit/postback", { amount, wallet, extra });
            if (response.data && response.data.id) {
                return new models_1.Payment(response.data);
            }
            throw response;
        });
    }
}
exports.default = CustodyDepositWebService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9keURlcG9zaXRXZWJTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL3NlcnZpY2VzL2ZlYXR1cmVzL0N1c3RvZHlEZXBvc2l0V2ViU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUNBQStDO0FBQy9DLHlDQUFxRDtBQUNyRCw2Q0FBMkU7QUFJM0UsTUFBcUIsd0JBQXlCLFNBQVEsZ0NBQXFCO0lBR3pFLFlBQTRCLE9BQXdDO1FBQ2xFLEtBQUssRUFBRSxDQUFDO1FBRGtCLFlBQU8sR0FBUCxPQUFPLENBQWlDO1FBRWxFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVZLElBQUksQ0FBQyxNQUFvQixFQUFFLEtBQVc7O1lBQ2pELE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUU3RSxJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUU7Z0JBQ2pCLE9BQU8sSUFBSSxnQkFBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNuQztZQUVELE1BQU0sUUFBUSxDQUFDO1FBQ2pCLENBQUM7S0FBQTtJQUVZLFNBQVMsQ0FBQyxNQUFjLEVBQUUsTUFBb0IsRUFBRSxLQUFXOztZQUN0RSxNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLDRCQUE0QixFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBRS9GLElBQUksUUFBUSxDQUFDLElBQUksSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRTtnQkFDckMsT0FBTyxJQUFJLGdCQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ25DO1lBRUQsTUFBTSxRQUFRLENBQUM7UUFDakIsQ0FBQztLQUFBO0NBQ0Y7QUEzQkQsMkNBMkJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cCwgSHR0cE9wdGlvbnMgfSBmcm9tIFwiLi4vLi4vYmFzZVwiO1xuaW1wb3J0IHsgUGF5bWVudCwgV2FsbGV0U2NoZW1hIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xuaW1wb3J0IHsgQmFzZUN1c3RvZHlPcHRpb25zLCBDdXN0b2R5RGVwb3NpdEZlYXR1cmUgfSBmcm9tIFwiLi4vLi4vcHJvdmlkZXJcIjtcblxuZXhwb3J0IGludGVyZmFjZSBDdXN0b2R5RGVwb3NpdFdlYlNlcnZpY2VPcHRpb25zIGV4dGVuZHMgSHR0cE9wdGlvbnMsIEJhc2VDdXN0b2R5T3B0aW9ucyB7fVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b2R5RGVwb3NpdFdlYlNlcnZpY2UgZXh0ZW5kcyBDdXN0b2R5RGVwb3NpdEZlYXR1cmUge1xuICBwcm90ZWN0ZWQgaHR0cDogSHR0cDtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVhZG9ubHkgb3B0aW9uczogQ3VzdG9keURlcG9zaXRXZWJTZXJ2aWNlT3B0aW9ucykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5odHRwID0gbmV3IEh0dHAob3B0aW9ucyk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgaW5mbyh3YWxsZXQ6IFdhbGxldFNjaGVtYSwgZXh0cmE/OiBhbnkpOiBQcm9taXNlPFBheW1lbnQ+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuaHR0cC5nZXQoXCIvcHJvdmlkZXIvZGVwb3NpdFwiLCB7IHdhbGxldCwgZXh0cmEgfSk7XG5cbiAgICBpZiAocmVzcG9uc2UuZGF0YSkge1xuICAgICAgcmV0dXJuIG5ldyBQYXltZW50KHJlc3BvbnNlLmRhdGEpO1xuICAgIH1cblxuICAgIHRocm93IHJlc3BvbnNlO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIG9uRGVwb3NpdChhbW91bnQ6IHN0cmluZywgd2FsbGV0OiBXYWxsZXRTY2hlbWEsIGV4dHJhPzogYW55KTogUHJvbWlzZTxQYXltZW50PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmh0dHAucG9zdChcIi9wcm92aWRlci9kZXBvc2l0L3Bvc3RiYWNrXCIsIHsgYW1vdW50LCB3YWxsZXQsIGV4dHJhIH0pO1xuXG4gICAgaWYgKHJlc3BvbnNlLmRhdGEgJiYgcmVzcG9uc2UuZGF0YS5pZCkge1xuICAgICAgcmV0dXJuIG5ldyBQYXltZW50KHJlc3BvbnNlLmRhdGEpO1xuICAgIH1cblxuICAgIHRocm93IHJlc3BvbnNlO1xuICB9XG59XG4iXX0=