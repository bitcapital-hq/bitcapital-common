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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZU1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbGliL2Jhc2UvQmFzZU1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBZ0Y7QUFRaEYsTUFBYSxTQUFTO0lBU3BCLFlBQVksT0FBWSxFQUFFO1FBTjFCLE9BQUUsR0FBWSxTQUFTLENBQUM7UUFFVixjQUFTLEdBQVUsU0FBUyxDQUFDO1FBRTdCLGNBQVMsR0FBVSxTQUFTLENBQUM7UUFHekMsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBRWhELElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUMzQztRQUNELElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUMzQztJQUNILENBQUM7SUFFRDs7OztPQUlHO0lBQ1UsT0FBTyxDQUFFLFFBQWtCOztZQUN0QyxNQUFNLE1BQU0sR0FBRyxNQUFNLDBCQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFcEMsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFDdkIsT0FBTyxJQUFJLENBQUM7YUFDYjtZQUVELElBQUksUUFBUSxFQUFFO2dCQUNaLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDN0Q7WUFFRCxPQUFPLE1BQU0sQ0FBQztRQUNoQixDQUFDO0tBQUE7Q0FDRjtBQW5DQztJQUZDLDRCQUFVLEVBQUU7SUFDWix3QkFBTSxFQUFFOztxQ0FDZTtBQUVWO0lBQWIsNEJBQVUsRUFBRTs4QkFBYSxJQUFJOzRDQUFhO0FBRTdCO0lBQWIsNEJBQVUsRUFBRTs4QkFBYSxJQUFJOzRDQUFhO0FBUDdDLDhCQXNDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElzT3B0aW9uYWwsIElzVVVJRCwgdmFsaWRhdGUsIFZhbGlkYXRpb25FcnJvciB9IGZyb20gXCJjbGFzcy12YWxpZGF0b3JcIjtcblxuZXhwb3J0IGludGVyZmFjZSBCYXNlTW9kZWxTY2hlbWEge1xuICBpZD86IHN0cmluZztcbiAgY3JlYXRlZEF0Pzogc3RyaW5nIHwgRGF0ZTtcbiAgdXBkYXRlZEF0Pzogc3RyaW5nIHwgRGF0ZTtcbn1cblxuZXhwb3J0IGNsYXNzIEJhc2VNb2RlbCB7XG4gIEBJc09wdGlvbmFsKClcbiAgQElzVVVJRCgpXG4gIGlkPzogc3RyaW5nID0gdW5kZWZpbmVkO1xuXG4gIEBJc09wdGlvbmFsKCkgY3JlYXRlZEF0PzogRGF0ZSA9IHVuZGVmaW5lZDtcblxuICBASXNPcHRpb25hbCgpIHVwZGF0ZWRBdD86IERhdGUgPSB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IoZGF0YTogYW55ID0ge30pIHtcbiAgICB0aGlzLmlkID0gZGF0YSAmJiBkYXRhLmlkID8gZGF0YS5pZCA6IHVuZGVmaW5lZDtcblxuICAgIGlmIChkYXRhLmNyZWF0ZWRBdCkge1xuICAgICAgdGhpcy5jcmVhdGVkQXQgPSBuZXcgRGF0ZShkYXRhLmNyZWF0ZWRBdCk7XG4gICAgfVxuICAgIGlmIChkYXRhLnVwZGF0ZWRBdCkge1xuICAgICAgdGhpcy51cGRhdGVkQXQgPSBuZXcgRGF0ZShkYXRhLnVwZGF0ZWRBdCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgbW9kZWwgaXMgdmFsaWQgb3IgYW4gYXJyYXkgb2YgdmFsaWRhdGlvbiBlcnJvcnMgaWYgaW52YWxpZFxuICAgKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFt0b1N0cmluZ10gSWYgdG9TdHJpbmcgaXMgdHJ1ZSwgdGhpcyB3aWxsIHJldHVybiBhIGZvcm1hdHRlZCBlcnJvciBzdHJpbmdcbiAgICovXG4gIHB1YmxpYyBhc3luYyBpc1ZhbGlkPyh0b1N0cmluZz86IGJvb2xlYW4pOiBQcm9taXNlPHN0cmluZyB8IHRydWUgfCBWYWxpZGF0aW9uRXJyb3JbXT4ge1xuICAgIGNvbnN0IGVycm9ycyA9IGF3YWl0IHZhbGlkYXRlKHRoaXMpO1xuXG4gICAgaWYgKGVycm9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0b1N0cmluZykge1xuICAgICAgcmV0dXJuIGVycm9ycy5tYXAoZXJyb3IgPT4gZXJyb3IudG9TdHJpbmcodHJ1ZSkpLmpvaW4oXCI7IFwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JzO1xuICB9XG59XG4iXX0=