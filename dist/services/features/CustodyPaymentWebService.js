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
            if (response.data && response.data.length) {
                return new models_1.Transaction(response.data);
            }
            throw response;
        });
    }
}
exports.default = CustodyPaymentWebService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9keVBheW1lbnRXZWJTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL3NlcnZpY2VzL2ZlYXR1cmVzL0N1c3RvZHlQYXltZW50V2ViU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUNBQStDO0FBQy9DLHlDQUE4RDtBQUM5RCw2Q0FBMkU7QUFNM0UsTUFBcUIsd0JBQXlCLFNBQVEsZ0NBQXFCO0lBR3pFLFlBQTRCLE9BQXdDO1FBQ2xFLEtBQUssRUFBRSxDQUFDO1FBRGtCLFlBQU8sR0FBUCxPQUFPLENBQWlDO1FBRWxFLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksSUFBSSxJQUFJLFdBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRVksT0FBTyxDQUFDLE1BQXlCOztZQUM1QyxNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixvQkFBTyxNQUFNLEVBQUcsQ0FBQztZQUUxRSxJQUFJLFFBQVEsQ0FBQyxJQUFJLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ3pDLE9BQU8sSUFBSSxvQkFBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN2QztZQUVELE1BQU0sUUFBUSxDQUFDO1FBQ2pCLENBQUM7S0FBQTtDQUNGO0FBakJELDJDQWlCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHAsIEh0dHBPcHRpb25zIH0gZnJvbSBcIi4uLy4uL2Jhc2VcIjtcbmltcG9ydCB7IFRyYW5zYWN0aW9uU2NoZW1hLCBUcmFuc2FjdGlvbiB9IGZyb20gXCIuLi8uLi9tb2RlbHNcIjtcbmltcG9ydCB7IEJhc2VDdXN0b2R5T3B0aW9ucywgQ3VzdG9keVBheW1lbnRGZWF0dXJlIH0gZnJvbSBcIi4uLy4uL3Byb3ZpZGVyXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3VzdG9keVBheW1lbnRXZWJTZXJ2aWNlT3B0aW9ucyBleHRlbmRzIEh0dHBPcHRpb25zLCBCYXNlQ3VzdG9keU9wdGlvbnMge1xuICBodHRwPzogSHR0cDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9keVBheW1lbnRXZWJTZXJ2aWNlIGV4dGVuZHMgQ3VzdG9keVBheW1lbnRGZWF0dXJlIHtcbiAgcHVibGljIGh0dHA6IEh0dHA7XG5cbiAgY29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5IG9wdGlvbnM6IEN1c3RvZHlQYXltZW50V2ViU2VydmljZU9wdGlvbnMpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuaHR0cCA9IG9wdGlvbnMuaHR0cCB8fCBuZXcgSHR0cChvcHRpb25zKTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBwYXltZW50KHNjaGVtYTogVHJhbnNhY3Rpb25TY2hlbWEpOiBQcm9taXNlPFRyYW5zYWN0aW9uPiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmh0dHAucG9zdChcIi9wcm92aWRlci9wYXltZW50XCIsIHsgLi4uc2NoZW1hIH0pO1xuXG4gICAgaWYgKHJlc3BvbnNlLmRhdGEgJiYgcmVzcG9uc2UuZGF0YS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBuZXcgVHJhbnNhY3Rpb24ocmVzcG9uc2UuZGF0YSk7XG4gICAgfVxuXG4gICAgdGhyb3cgcmVzcG9uc2U7XG4gIH1cbn1cbiJdfQ==