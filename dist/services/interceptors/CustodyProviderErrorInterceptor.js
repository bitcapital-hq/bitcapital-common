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
const errors_1 = require("../../errors");
class CustodyProviderErrorInterceptor {
    constructor(provider) {
        this.provider = provider;
    }
    request(request) {
        return __awaiter(this, void 0, void 0, function* () {
            return request;
        });
    }
    response(response) {
        return __awaiter(this, void 0, void 0, function* () {
            return response;
        });
    }
    error(error) {
        return __awaiter(this, void 0, void 0, function* () {
            return new errors_1.CustodyProviderError(this.provider.type, error);
        });
    }
}
exports.CustodyProviderErrorInterceptor = CustodyProviderErrorInterceptor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9keVByb3ZpZGVyRXJyb3JJbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9zZXJ2aWNlcy9pbnRlcmNlcHRvcnMvQ3VzdG9keVByb3ZpZGVyRXJyb3JJbnRlcmNlcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRUEseUNBQW9EO0FBR3BELE1BQWEsK0JBQStCO0lBQzFDLFlBQTRCLFFBQXFCO1FBQXJCLGFBQVEsR0FBUixRQUFRLENBQWE7SUFBRyxDQUFDO0lBRXhDLE9BQU8sQ0FBQyxPQUEyQjs7WUFDOUMsT0FBTyxPQUFPLENBQUM7UUFDakIsQ0FBQztLQUFBO0lBRVksUUFBUSxDQUFDLFFBQXVCOztZQUMzQyxPQUFPLFFBQVEsQ0FBQztRQUNsQixDQUFDO0tBQUE7SUFFWSxLQUFLLENBQUMsS0FBaUI7O1lBQ2xDLE9BQU8sSUFBSSw2QkFBb0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxLQUFLLENBQWUsQ0FBQztRQUMzRSxDQUFDO0tBQUE7Q0FDRjtBQWRELDBFQWNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXhpb3NFcnJvciwgQXhpb3NSZXF1ZXN0Q29uZmlnLCBBeGlvc1Jlc3BvbnNlIH0gZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IEh0dHBJbnRlcmNlcHRvciB9IGZyb20gXCIuLi8uLi9iYXNlXCI7XHJcbmltcG9ydCB7IEN1c3RvZHlQcm92aWRlckVycm9yIH0gZnJvbSBcIi4uLy4uL2Vycm9yc1wiO1xyXG5pbXBvcnQgeyBCYXNlQ3VzdG9keSB9IGZyb20gXCIuLi8uLi9wcm92aWRlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEN1c3RvZHlQcm92aWRlckVycm9ySW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSBwcm92aWRlcjogQmFzZUN1c3RvZHkpIHt9XHJcblxyXG4gIHB1YmxpYyBhc3luYyByZXF1ZXN0KHJlcXVlc3Q6IEF4aW9zUmVxdWVzdENvbmZpZykge1xyXG4gICAgcmV0dXJuIHJlcXVlc3Q7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgcmVzcG9uc2UocmVzcG9uc2U6IEF4aW9zUmVzcG9uc2UpIHtcclxuICAgIHJldHVybiByZXNwb25zZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBlcnJvcihlcnJvcjogQXhpb3NFcnJvcikge1xyXG4gICAgcmV0dXJuIG5ldyBDdXN0b2R5UHJvdmlkZXJFcnJvcih0aGlzLnByb3ZpZGVyLnR5cGUsIGVycm9yKSBhcyBBeGlvc0Vycm9yO1xyXG4gIH1cclxufVxyXG4iXX0=