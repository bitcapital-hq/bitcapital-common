"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = require("class-validator");
class BaseModel {
    constructor(data) {
        Object.assign(this, data);
        this.id = data.id;
        if (data.createdAt) {
            this.createdAt = new Date(data.createdAt);
        }
        if (data.updatedAt) {
            this.updatedAt = new Date(data.updatedAt);
        }
    }
    /**
     * Returns true if the model is valid or an array of validation errors if invalid
     *
     * @param {boolean} [toString] If toString is true, this will return a formatted error string
     */
    isValid(toString) {
        return __awaiter(this, void 0, void 0, function* () {
            const errors = yield class_validator_1.validate(this);
            if (errors.length === 0) {
                return true;
            }
            if (toString) {
                return errors.map(error => error.toString(true)).join("; ");
            }
            return errors;
        });
    }
}
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsUUID(),
    __metadata("design:type", String)
], BaseModel.prototype, "id", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Date)
], BaseModel.prototype, "createdAt", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Date)
], BaseModel.prototype, "updatedAt", void 0);
exports.BaseModel = BaseModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZU1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbGliL2Jhc2UvQmFzZU1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBZ0Y7QUFRaEYsTUFBYSxTQUFTO0lBU3BCLFlBQVksSUFBUztRQUNuQixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7UUFFbEIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzNDO1FBQ0QsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzNDO0lBQ0gsQ0FBQztJQUVEOzs7O09BSUc7SUFDVSxPQUFPLENBQUUsUUFBa0I7O1lBQ3RDLE1BQU0sTUFBTSxHQUFHLE1BQU0sMEJBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUVwQyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUN2QixPQUFPLElBQUksQ0FBQzthQUNiO1lBRUQsSUFBSSxRQUFRLEVBQUU7Z0JBQ1osT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUM3RDtZQUVELE9BQU8sTUFBTSxDQUFDO1FBQ2hCLENBQUM7S0FBQTtDQUNGO0FBcENDO0lBRkMsNEJBQVUsRUFBRTtJQUNaLHdCQUFNLEVBQUU7O3FDQUNHO0FBRUU7SUFBYiw0QkFBVSxFQUFFOzhCQUFhLElBQUk7NENBQUM7QUFFakI7SUFBYiw0QkFBVSxFQUFFOzhCQUFhLElBQUk7NENBQUM7QUFQakMsOEJBdUNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSXNPcHRpb25hbCwgSXNVVUlELCB2YWxpZGF0ZSwgVmFsaWRhdGlvbkVycm9yIH0gZnJvbSBcImNsYXNzLXZhbGlkYXRvclwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJhc2VNb2RlbFNjaGVtYSB7XG4gIGlkPzogc3RyaW5nO1xuICBjcmVhdGVkQXQ/OiBzdHJpbmcgfCBEYXRlO1xuICB1cGRhdGVkQXQ/OiBzdHJpbmcgfCBEYXRlO1xufVxuXG5leHBvcnQgY2xhc3MgQmFzZU1vZGVsIHtcbiAgQElzT3B0aW9uYWwoKVxuICBASXNVVUlEKClcbiAgaWQ/OiBzdHJpbmc7XG5cbiAgQElzT3B0aW9uYWwoKSBjcmVhdGVkQXQ/OiBEYXRlO1xuXG4gIEBJc09wdGlvbmFsKCkgdXBkYXRlZEF0PzogRGF0ZTtcblxuICBjb25zdHJ1Y3RvcihkYXRhOiBhbnkpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xuICAgIHRoaXMuaWQgPSBkYXRhLmlkO1xuXG4gICAgaWYgKGRhdGEuY3JlYXRlZEF0KSB7XG4gICAgICB0aGlzLmNyZWF0ZWRBdCA9IG5ldyBEYXRlKGRhdGEuY3JlYXRlZEF0KTtcbiAgICB9XG4gICAgaWYgKGRhdGEudXBkYXRlZEF0KSB7XG4gICAgICB0aGlzLnVwZGF0ZWRBdCA9IG5ldyBEYXRlKGRhdGEudXBkYXRlZEF0KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBtb2RlbCBpcyB2YWxpZCBvciBhbiBhcnJheSBvZiB2YWxpZGF0aW9uIGVycm9ycyBpZiBpbnZhbGlkXG4gICAqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3RvU3RyaW5nXSBJZiB0b1N0cmluZyBpcyB0cnVlLCB0aGlzIHdpbGwgcmV0dXJuIGEgZm9ybWF0dGVkIGVycm9yIHN0cmluZ1xuICAgKi9cbiAgcHVibGljIGFzeW5jIGlzVmFsaWQ/KHRvU3RyaW5nPzogYm9vbGVhbik6IFByb21pc2U8c3RyaW5nIHwgdHJ1ZSB8IFZhbGlkYXRpb25FcnJvcltdPiB7XG4gICAgY29uc3QgZXJyb3JzID0gYXdhaXQgdmFsaWRhdGUodGhpcyk7XG5cbiAgICBpZiAoZXJyb3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRvU3RyaW5nKSB7XG4gICAgICByZXR1cm4gZXJyb3JzLm1hcChlcnJvciA9PiBlcnJvci50b1N0cmluZyh0cnVlKSkuam9pbihcIjsgXCIpO1xuICAgIH1cblxuICAgIHJldHVybiBlcnJvcnM7XG4gIH1cbn1cbiJdfQ==