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
const base_1 = require("../../base");
const ConsumerStatus_1 = require("./ConsumerStatus");
const class_validator_1 = require("class-validator");
class ConsumerState extends base_1.BaseModel {
    constructor(data) {
        super(data);
        this.status = undefined;
        this.consumer = undefined;
        this.consumerId = undefined;
    }
}
__decorate([
    class_validator_1.IsEnum(ConsumerStatus_1.ConsumerStatus),
    __metadata("design:type", String)
], ConsumerState.prototype, "status", void 0);
exports.ConsumerState = ConsumerState;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uc3VtZXJTdGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9tb2RlbHMvQ29uc3VtZXIvQ29uc3VtZXJTdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHFDQUF3RDtBQUV4RCxxREFBa0Q7QUFDbEQscURBQXlDO0FBUXpDLE1BQWEsYUFBYyxTQUFRLGdCQUFTO0lBTzFDLFlBQVksSUFBa0M7UUFDNUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBTmQsV0FBTSxHQUFtQixTQUFTLENBQUM7UUFFbkMsYUFBUSxHQUFjLFNBQVMsQ0FBQztRQUNoQyxlQUFVLEdBQVksU0FBUyxDQUFDO0lBSWhDLENBQUM7Q0FDRjtBQVJDO0lBREMsd0JBQU0sQ0FBQywrQkFBYyxDQUFDOzs2Q0FDWTtBQUZyQyxzQ0FVQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VNb2RlbCwgQmFzZU1vZGVsU2NoZW1hIH0gZnJvbSBcIi4uLy4uL2Jhc2VcIjtcbmltcG9ydCB7IENvbnN1bWVyLCBDb25zdW1lclNjaGVtYSB9IGZyb20gXCIuL0NvbnN1bWVyXCI7XG5pbXBvcnQgeyBDb25zdW1lclN0YXR1cyB9IGZyb20gXCIuL0NvbnN1bWVyU3RhdHVzXCI7XG5pbXBvcnQgeyBJc0VudW0gfSBmcm9tIFwiY2xhc3MtdmFsaWRhdG9yXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uc3VtZXJTdGF0ZVNjaGVtYSBleHRlbmRzIEJhc2VNb2RlbFNjaGVtYSB7XG4gIHN0YXR1czogQ29uc3VtZXJTdGF0dXM7XG4gIGNvbnN1bWVyPzogQ29uc3VtZXJTY2hlbWE7XG4gIGNvbnN1bWVySWQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBDb25zdW1lclN0YXRlIGV4dGVuZHMgQmFzZU1vZGVsIGltcGxlbWVudHMgQ29uc3VtZXJTdGF0ZVNjaGVtYSB7XG4gIEBJc0VudW0oQ29uc3VtZXJTdGF0dXMpXG4gIHN0YXR1czogQ29uc3VtZXJTdGF0dXMgPSB1bmRlZmluZWQ7XG4gIFxuICBjb25zdW1lcj86IENvbnN1bWVyID0gdW5kZWZpbmVkO1xuICBjb25zdW1lcklkPzogc3RyaW5nID0gdW5kZWZpbmVkO1xuXG4gIGNvbnN0cnVjdG9yKGRhdGE6IFBhcnRpYWw8Q29uc3VtZXJTdGF0ZVNjaGVtYT4pIHtcbiAgICBzdXBlcihkYXRhKTtcbiAgfVxufVxuIl19