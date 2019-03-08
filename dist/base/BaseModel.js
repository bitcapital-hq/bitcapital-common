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
    constructor(data = {}) {
        this.id = undefined;
        this.createdAt = undefined;
        this.updatedAt = undefined;
        this.id = data && data.id ? data.id : undefined;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZU1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbGliL2Jhc2UvQmFzZU1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBZ0Y7QUFRaEYsTUFBYSxTQUFTO0lBU3BCLFlBQVksT0FBWSxFQUFFO1FBTjFCLE9BQUUsR0FBWSxTQUFTLENBQUM7UUFFVixjQUFTLEdBQVUsU0FBUyxDQUFDO1FBRTdCLGNBQVMsR0FBVSxTQUFTLENBQUM7UUFHekMsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBRWhELElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUMzQztRQUNELElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUMzQztJQUNILENBQUM7SUFFRDs7OztPQUlHO0lBQ1UsT0FBTyxDQUFFLFFBQWtCOztZQUN0QyxNQUFNLE1BQU0sR0FBRyxNQUFNLDBCQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFcEMsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFDdkIsT0FBTyxJQUFJLENBQUM7YUFDYjtZQUVELElBQUksUUFBUSxFQUFFO2dCQUNaLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDN0Q7WUFFRCxPQUFPLE1BQU0sQ0FBQztRQUNoQixDQUFDO0tBQUE7Q0FDRjtBQW5DQztJQUZDLDRCQUFVLEVBQUU7SUFDWix3QkFBTSxFQUFFOztxQ0FDZTtBQUVWO0lBQWIsNEJBQVUsRUFBRTs4QkFBYSxJQUFJOzRDQUFhO0FBRTdCO0lBQWIsNEJBQVUsRUFBRTs4QkFBYSxJQUFJOzRDQUFhO0FBUDdDLDhCQXNDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElzT3B0aW9uYWwsIElzVVVJRCwgdmFsaWRhdGUsIFZhbGlkYXRpb25FcnJvciB9IGZyb20gXCJjbGFzcy12YWxpZGF0b3JcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmFzZU1vZGVsU2NoZW1hIHtcclxuICBpZD86IHN0cmluZztcclxuICBjcmVhdGVkQXQ/OiBzdHJpbmcgfCBEYXRlO1xyXG4gIHVwZGF0ZWRBdD86IHN0cmluZyB8IERhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNlTW9kZWwge1xyXG4gIEBJc09wdGlvbmFsKClcclxuICBASXNVVUlEKClcclxuICBpZD86IHN0cmluZyA9IHVuZGVmaW5lZDtcclxuXHJcbiAgQElzT3B0aW9uYWwoKSBjcmVhdGVkQXQ/OiBEYXRlID0gdW5kZWZpbmVkO1xyXG5cclxuICBASXNPcHRpb25hbCgpIHVwZGF0ZWRBdD86IERhdGUgPSB1bmRlZmluZWQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRhdGE6IGFueSA9IHt9KSB7XHJcbiAgICB0aGlzLmlkID0gZGF0YSAmJiBkYXRhLmlkID8gZGF0YS5pZCA6IHVuZGVmaW5lZDtcclxuXHJcbiAgICBpZiAoZGF0YS5jcmVhdGVkQXQpIHtcclxuICAgICAgdGhpcy5jcmVhdGVkQXQgPSBuZXcgRGF0ZShkYXRhLmNyZWF0ZWRBdCk7XHJcbiAgICB9XHJcbiAgICBpZiAoZGF0YS51cGRhdGVkQXQpIHtcclxuICAgICAgdGhpcy51cGRhdGVkQXQgPSBuZXcgRGF0ZShkYXRhLnVwZGF0ZWRBdCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIG1vZGVsIGlzIHZhbGlkIG9yIGFuIGFycmF5IG9mIHZhbGlkYXRpb24gZXJyb3JzIGlmIGludmFsaWRcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3RvU3RyaW5nXSBJZiB0b1N0cmluZyBpcyB0cnVlLCB0aGlzIHdpbGwgcmV0dXJuIGEgZm9ybWF0dGVkIGVycm9yIHN0cmluZ1xyXG4gICAqL1xyXG4gIHB1YmxpYyBhc3luYyBpc1ZhbGlkPyh0b1N0cmluZz86IGJvb2xlYW4pOiBQcm9taXNlPHN0cmluZyB8IHRydWUgfCBWYWxpZGF0aW9uRXJyb3JbXT4ge1xyXG4gICAgY29uc3QgZXJyb3JzID0gYXdhaXQgdmFsaWRhdGUodGhpcyk7XHJcblxyXG4gICAgaWYgKGVycm9ycy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRvU3RyaW5nKSB7XHJcbiAgICAgIHJldHVybiBlcnJvcnMubWFwKGVycm9yID0+IGVycm9yLnRvU3RyaW5nKHRydWUpKS5qb2luKFwiOyBcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGVycm9ycztcclxuICB9XHJcbn1cclxuIl19