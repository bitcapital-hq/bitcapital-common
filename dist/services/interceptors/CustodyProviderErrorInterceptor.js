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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9keVByb3ZpZGVyRXJyb3JJbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9zZXJ2aWNlcy9pbnRlcmNlcHRvcnMvQ3VzdG9keVByb3ZpZGVyRXJyb3JJbnRlcmNlcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRUEseUNBQW9EO0FBR3BELE1BQWEsK0JBQStCO0lBQzFDLFlBQTRCLFFBQXFCO1FBQXJCLGFBQVEsR0FBUixRQUFRLENBQWE7SUFDakQsQ0FBQztJQUVZLE9BQU8sQ0FBQyxPQUEyQjs7WUFDOUMsT0FBTyxPQUFPLENBQUM7UUFDakIsQ0FBQztLQUFBO0lBRVksUUFBUSxDQUFDLFFBQXVCOztZQUMzQyxPQUFPLFFBQVEsQ0FBQztRQUNsQixDQUFDO0tBQUE7SUFFWSxLQUFLLENBQUMsS0FBaUI7O1lBQ2xDLE9BQU8sSUFBSSw2QkFBb0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxLQUFLLENBQWUsQ0FBQztRQUMzRSxDQUFDO0tBQUE7Q0FFRjtBQWhCRCwwRUFnQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBeGlvc0Vycm9yLCBBeGlvc1JlcXVlc3RDb25maWcsIEF4aW9zUmVzcG9uc2UgfSBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IEh0dHBJbnRlcmNlcHRvciB9IGZyb20gXCIuLi8uLi9iYXNlXCI7XG5pbXBvcnQgeyBDdXN0b2R5UHJvdmlkZXJFcnJvciB9IGZyb20gXCIuLi8uLi9lcnJvcnNcIjtcbmltcG9ydCB7IEJhc2VDdXN0b2R5IH0gZnJvbSBcIi4uLy4uL3Byb3ZpZGVyXCI7XG5cbmV4cG9ydCBjbGFzcyBDdXN0b2R5UHJvdmlkZXJFcnJvckludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcbiAgY29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5IHByb3ZpZGVyOiBCYXNlQ3VzdG9keSkge1xuICB9XG5cbiAgcHVibGljIGFzeW5jIHJlcXVlc3QocmVxdWVzdDogQXhpb3NSZXF1ZXN0Q29uZmlnKSB7XG4gICAgcmV0dXJuIHJlcXVlc3Q7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgcmVzcG9uc2UocmVzcG9uc2U6IEF4aW9zUmVzcG9uc2UpIHtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgZXJyb3IoZXJyb3I6IEF4aW9zRXJyb3IpIHtcbiAgICByZXR1cm4gbmV3IEN1c3RvZHlQcm92aWRlckVycm9yKHRoaXMucHJvdmlkZXIudHlwZSwgZXJyb3IpIGFzIEF4aW9zRXJyb3I7XG4gIH1cblxufSJdfQ==