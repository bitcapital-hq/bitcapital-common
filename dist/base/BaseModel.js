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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZU1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbGliL2Jhc2UvQmFzZU1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBZ0Y7QUFRaEYsTUFBYSxTQUFTO0lBU3BCLFlBQVksSUFBUztRQUNuQixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7UUFFbEIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzNDO1FBQ0QsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzNDO0lBQ0gsQ0FBQztJQUVEOzs7O09BSUc7SUFDVSxPQUFPLENBQUUsUUFBa0I7O1lBQ3RDLE1BQU0sTUFBTSxHQUFHLE1BQU0sMEJBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUVwQyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUN2QixPQUFPLElBQUksQ0FBQzthQUNiO1lBRUQsSUFBSSxRQUFRLEVBQUU7Z0JBQ1osT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUM3RDtZQUVELE9BQU8sTUFBTSxDQUFDO1FBQ2hCLENBQUM7S0FBQTtDQUNGO0FBcENDO0lBRkMsNEJBQVUsRUFBRTtJQUNaLHdCQUFNLEVBQUU7O3FDQUNHO0FBRUU7SUFBYiw0QkFBVSxFQUFFOzhCQUFhLElBQUk7NENBQUM7QUFFakI7SUFBYiw0QkFBVSxFQUFFOzhCQUFhLElBQUk7NENBQUM7QUFQakMsOEJBdUNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSXNPcHRpb25hbCwgSXNVVUlELCB2YWxpZGF0ZSwgVmFsaWRhdGlvbkVycm9yIH0gZnJvbSBcImNsYXNzLXZhbGlkYXRvclwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCYXNlTW9kZWxTY2hlbWEge1xyXG4gIGlkPzogc3RyaW5nO1xyXG4gIGNyZWF0ZWRBdD86IHN0cmluZyB8IERhdGU7XHJcbiAgdXBkYXRlZEF0Pzogc3RyaW5nIHwgRGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJhc2VNb2RlbCB7XHJcbiAgQElzT3B0aW9uYWwoKVxyXG4gIEBJc1VVSUQoKVxyXG4gIGlkPzogc3RyaW5nO1xyXG5cclxuICBASXNPcHRpb25hbCgpIGNyZWF0ZWRBdD86IERhdGU7XHJcblxyXG4gIEBJc09wdGlvbmFsKCkgdXBkYXRlZEF0PzogRGF0ZTtcclxuXHJcbiAgY29uc3RydWN0b3IoZGF0YTogYW55KSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xyXG4gICAgdGhpcy5pZCA9IGRhdGEuaWQ7XHJcblxyXG4gICAgaWYgKGRhdGEuY3JlYXRlZEF0KSB7XHJcbiAgICAgIHRoaXMuY3JlYXRlZEF0ID0gbmV3IERhdGUoZGF0YS5jcmVhdGVkQXQpO1xyXG4gICAgfVxyXG4gICAgaWYgKGRhdGEudXBkYXRlZEF0KSB7XHJcbiAgICAgIHRoaXMudXBkYXRlZEF0ID0gbmV3IERhdGUoZGF0YS51cGRhdGVkQXQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBtb2RlbCBpcyB2YWxpZCBvciBhbiBhcnJheSBvZiB2YWxpZGF0aW9uIGVycm9ycyBpZiBpbnZhbGlkXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFt0b1N0cmluZ10gSWYgdG9TdHJpbmcgaXMgdHJ1ZSwgdGhpcyB3aWxsIHJldHVybiBhIGZvcm1hdHRlZCBlcnJvciBzdHJpbmdcclxuICAgKi9cclxuICBwdWJsaWMgYXN5bmMgaXNWYWxpZD8odG9TdHJpbmc/OiBib29sZWFuKTogUHJvbWlzZTxzdHJpbmcgfCB0cnVlIHwgVmFsaWRhdGlvbkVycm9yW10+IHtcclxuICAgIGNvbnN0IGVycm9ycyA9IGF3YWl0IHZhbGlkYXRlKHRoaXMpO1xyXG5cclxuICAgIGlmIChlcnJvcnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0b1N0cmluZykge1xyXG4gICAgICByZXR1cm4gZXJyb3JzLm1hcChlcnJvciA9PiBlcnJvci50b1N0cmluZyh0cnVlKSkuam9pbihcIjsgXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBlcnJvcnM7XHJcbiAgfVxyXG59XHJcbiJdfQ==