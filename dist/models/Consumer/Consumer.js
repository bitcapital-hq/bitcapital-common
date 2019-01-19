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
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = require("class-validator");
const base_1 = require("../../base");
var ConsumerStatus;
(function (ConsumerStatus) {
    ConsumerStatus["PENDING_DOCUMENTS"] = "pending_documents";
    ConsumerStatus["PENDING_SELFIE"] = "pending_selfie";
    ConsumerStatus["PROCESSING"] = "processing";
    ConsumerStatus["VERIFIED"] = "verified";
    ConsumerStatus["SUSPENDED"] = "suspended";
    ConsumerStatus["DELETED"] = "deleted";
    ConsumerStatus["INVALID_DOCUMENTS"] = "invalid_documennts";
    ConsumerStatus["INVALID_SELFIE"] = "invalid_selfie";
    ConsumerStatus["MANUAL_VERIFICATION"] = "manual_verification";
})(ConsumerStatus = exports.ConsumerStatus || (exports.ConsumerStatus = {}));
class Consumer extends base_1.BaseModel {
    constructor(data) {
        super(data);
        this.user = undefined;
        this.userId = undefined;
        this.status = undefined;
        this.documents = undefined;
        this.phones = undefined;
        this.addresses = undefined;
    }
}
__decorate([
    class_validator_1.IsUUID(),
    __metadata("design:type", String)
], Consumer.prototype, "userId", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsEnum(ConsumerStatus),
    __metadata("design:type", String)
], Consumer.prototype, "status", void 0);
exports.default = Consumer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uc3VtZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvbW9kZWxzL0NvbnN1bWVyL0NvbnN1bWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscURBQTZEO0FBQzdELHFDQUF3RDtBQUt4RCxJQUFZLGNBVVg7QUFWRCxXQUFZLGNBQWM7SUFDeEIseURBQXVDLENBQUE7SUFDdkMsbURBQWlDLENBQUE7SUFDakMsMkNBQXlCLENBQUE7SUFDekIsdUNBQXFCLENBQUE7SUFDckIseUNBQXVCLENBQUE7SUFDdkIscUNBQW1CLENBQUE7SUFDbkIsMERBQXdDLENBQUE7SUFDeEMsbURBQWlDLENBQUE7SUFDakMsNkRBQTJDLENBQUE7QUFDN0MsQ0FBQyxFQVZXLGNBQWMsR0FBZCxzQkFBYyxLQUFkLHNCQUFjLFFBVXpCO0FBV0QsY0FBOEIsU0FBUSxnQkFBUztJQVk3QyxZQUFZLElBQTZCO1FBQ3ZDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQVpkLFNBQUksR0FBVSxTQUFTLENBQUM7UUFDZCxXQUFNLEdBQVcsU0FBUyxDQUFDO1FBSXJDLFdBQU0sR0FBbUIsU0FBUyxDQUFDO1FBRW5DLGNBQVMsR0FBZ0IsU0FBUyxDQUFDO1FBQ25DLFdBQU0sR0FBYSxTQUFTLENBQUM7UUFDN0IsY0FBUyxHQUFlLFNBQVMsQ0FBQztJQUlsQyxDQUFDO0NBQ0Y7QUFiVztJQUFULHdCQUFNLEVBQUU7O3dDQUE0QjtBQUlyQztJQUZDLDRCQUFVLEVBQUU7SUFDWix3QkFBTSxDQUFDLGNBQWMsQ0FBQzs7d0NBQ1k7QUFOckMsMkJBZUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJc05vdEVtcHR5LCBJc0VudW0sIElzVVVJRCB9IGZyb20gXCJjbGFzcy12YWxpZGF0b3JcIjtcbmltcG9ydCB7IEJhc2VNb2RlbFNjaGVtYSwgQmFzZU1vZGVsIH0gZnJvbSBcIi4uLy4uL2Jhc2VcIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vVXNlclwiO1xuaW1wb3J0IFBob25lIGZyb20gXCIuL1Bob25lXCI7XG5pbXBvcnQgQWRkcmVzcyBmcm9tIFwiLi9BZGRyZXNzXCI7XG5cbmV4cG9ydCBlbnVtIENvbnN1bWVyU3RhdHVzIHtcbiAgUEVORElOR19ET0NVTUVOVFMgPSBcInBlbmRpbmdfZG9jdW1lbnRzXCIsXG4gIFBFTkRJTkdfU0VMRklFID0gXCJwZW5kaW5nX3NlbGZpZVwiLFxuICBQUk9DRVNTSU5HID0gXCJwcm9jZXNzaW5nXCIsXG4gIFZFUklGSUVEID0gXCJ2ZXJpZmllZFwiLFxuICBTVVNQRU5ERUQgPSBcInN1c3BlbmRlZFwiLFxuICBERUxFVEVEID0gXCJkZWxldGVkXCIsXG4gIElOVkFMSURfRE9DVU1FTlRTID0gXCJpbnZhbGlkX2RvY3VtZW5udHNcIixcbiAgSU5WQUxJRF9TRUxGSUUgPSBcImludmFsaWRfc2VsZmllXCIsXG4gIE1BTlVBTF9WRVJJRklDQVRJT04gPSBcIm1hbnVhbF92ZXJpZmljYXRpb25cIlxufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbnN1bWVyU2NoZW1hIGV4dGVuZHMgQmFzZU1vZGVsU2NoZW1hIHtcbiAgc3RhdHVzOiBDb25zdW1lclN0YXR1cztcbiAgdXNlcj86IFVzZXI7XG4gIHVzZXJJZDogc3RyaW5nO1xuICBkb2N1bWVudHM/OiBEb2N1bWVudFtdO1xuICBwaG9uZXM/OiBQaG9uZVtdO1xuICBhZGRyZXNzZXM/OiBBZGRyZXNzW107XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnN1bWVyIGV4dGVuZHMgQmFzZU1vZGVsIGltcGxlbWVudHMgQ29uc3VtZXJTY2hlbWEge1xuICB1c2VyPzogVXNlciA9IHVuZGVmaW5lZDtcbiAgQElzVVVJRCgpIHVzZXJJZDogc3RyaW5nID0gdW5kZWZpbmVkO1xuXG4gIEBJc05vdEVtcHR5KClcbiAgQElzRW51bShDb25zdW1lclN0YXR1cylcbiAgc3RhdHVzOiBDb25zdW1lclN0YXR1cyA9IHVuZGVmaW5lZDtcblxuICBkb2N1bWVudHM/OiBEb2N1bWVudFtdID0gdW5kZWZpbmVkO1xuICBwaG9uZXM/OiBQaG9uZVtdID0gdW5kZWZpbmVkO1xuICBhZGRyZXNzZXM/OiBBZGRyZXNzW10gPSB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IoZGF0YTogUGFydGlhbDxDb25zdW1lclNjaGVtYT4pIHtcbiAgICBzdXBlcihkYXRhKTtcbiAgfVxufVxuIl19