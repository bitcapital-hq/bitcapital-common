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
class CustodyPostbackWebService extends provider_1.CustodyPostbackFeature {
    constructor(options) {
        super();
        this.options = options;
        this.http = options.http || new base_1.Http(options);
    }
    onPostback(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.http.post("/postback/payment", { data });
            if (response.data && response.data.id) {
                return response.data;
            }
            throw response;
        });
    }
}
exports.default = CustodyPostbackWebService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9keVBvc3RiYWNrV2ViU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9zZXJ2aWNlcy9mZWF0dXJlcy9DdXN0b2R5UG9zdGJhY2tXZWJTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQ0FBK0M7QUFDL0MsNkNBQTRFO0FBTTVFLE1BQXFCLHlCQUEwQixTQUFRLGlDQUFzQjtJQUczRSxZQUE0QixPQUF5QztRQUNuRSxLQUFLLEVBQUUsQ0FBQztRQURrQixZQUFPLEdBQVAsT0FBTyxDQUFrQztRQUVuRSxJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLElBQUksSUFBSSxXQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVZLFVBQVUsQ0FBQyxJQUFTOztZQUMvQixNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUVyRSxJQUFJLFFBQVEsQ0FBQyxJQUFJLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUU7Z0JBQ3JDLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQzthQUN0QjtZQUVELE1BQU0sUUFBUSxDQUFDO1FBQ2pCLENBQUM7S0FBQTtDQUNGO0FBakJELDRDQWlCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHAsIEh0dHBPcHRpb25zIH0gZnJvbSBcIi4uLy4uL2Jhc2VcIjtcbmltcG9ydCB7IEJhc2VDdXN0b2R5T3B0aW9ucywgQ3VzdG9keVBvc3RiYWNrRmVhdHVyZSB9IGZyb20gXCIuLi8uLi9wcm92aWRlclwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEN1c3RvZHlQb3N0YmFja1dlYlNlcnZpY2VPcHRpb25zIGV4dGVuZHMgSHR0cE9wdGlvbnMsIEJhc2VDdXN0b2R5T3B0aW9ucyB7XG4gIGh0dHA/OiBIdHRwO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXN0b2R5UG9zdGJhY2tXZWJTZXJ2aWNlIGV4dGVuZHMgQ3VzdG9keVBvc3RiYWNrRmVhdHVyZSB7XG4gIHB1YmxpYyBodHRwOiBIdHRwO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSBvcHRpb25zOiBDdXN0b2R5UG9zdGJhY2tXZWJTZXJ2aWNlT3B0aW9ucykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5odHRwID0gb3B0aW9ucy5odHRwIHx8IG5ldyBIdHRwKG9wdGlvbnMpO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIG9uUG9zdGJhY2soZGF0YTogYW55KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmh0dHAucG9zdChcIi9wb3N0YmFjay9wYXltZW50XCIsIHsgZGF0YSB9KTtcblxuICAgIGlmIChyZXNwb25zZS5kYXRhICYmIHJlc3BvbnNlLmRhdGEuaWQpIHtcbiAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICAgIH1cblxuICAgIHRocm93IHJlc3BvbnNlO1xuICB9XG59XG4iXX0=