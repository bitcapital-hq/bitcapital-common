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
    /* Success states */
    ConsumerStatus["READY"] = "ready";
    ConsumerStatus["REJECTED"] = "rejected";
    /* Pending states */
    ConsumerStatus["PENDING_DOCUMENTS"] = "pending_documents";
    /* Processing states */
    ConsumerStatus["PROCESSING_DOCUMENTS"] = "processing_documents";
    ConsumerStatus["PROCESSING_WALLETS"] = "processing_wallets";
    /* Error states */
    ConsumerStatus["PROVIDER_FAILED"] = "provider_failed";
    ConsumerStatus["INVALID_DOCUMENTS"] = "invalid_documents";
    ConsumerStatus["MANUAL_VERIFICATION"] = "manual_verification";
    /* Blocked state */
    ConsumerStatus["BLOCKED"] = "blocked";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uc3VtZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvbW9kZWxzL0NvbnN1bWVyL0NvbnN1bWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscURBQTZEO0FBQzdELHFDQUF3RDtBQU14RCxJQUFZLGNBbUJYO0FBbkJELFdBQVksY0FBYztJQUN4QixvQkFBb0I7SUFDcEIsaUNBQWUsQ0FBQTtJQUNmLHVDQUFxQixDQUFBO0lBRXJCLG9CQUFvQjtJQUNwQix5REFBdUMsQ0FBQTtJQUV2Qyx1QkFBdUI7SUFDdkIsK0RBQTZDLENBQUE7SUFDN0MsMkRBQXlDLENBQUE7SUFFekMsa0JBQWtCO0lBQ2xCLHFEQUFtQyxDQUFBO0lBQ25DLHlEQUF1QyxDQUFBO0lBQ3ZDLDZEQUEyQyxDQUFBO0lBRTNDLG1CQUFtQjtJQUNuQixxQ0FBbUIsQ0FBQTtBQUNyQixDQUFDLEVBbkJXLGNBQWMsR0FBZCxzQkFBYyxLQUFkLHNCQUFjLFFBbUJ6QjtBQVlELGNBQThCLFNBQVEsZ0JBQVM7SUFZN0MsWUFBWSxJQUE2QjtRQUN2QyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFaZCxTQUFJLEdBQVUsU0FBUyxDQUFDO1FBQ2QsV0FBTSxHQUFZLFNBQVMsQ0FBQztRQUl0QyxXQUFNLEdBQW1CLFNBQVMsQ0FBQztRQUVuQyxjQUFTLEdBQWdCLFNBQVMsQ0FBQztRQUNuQyxXQUFNLEdBQWEsU0FBUyxDQUFDO1FBQzdCLGNBQVMsR0FBZSxTQUFTLENBQUM7SUFJbEMsQ0FBQztDQUNGO0FBYlc7SUFBVCx3QkFBTSxFQUFFOzt3Q0FBNkI7QUFJdEM7SUFGQyw0QkFBVSxFQUFFO0lBQ1osd0JBQU0sQ0FBQyxjQUFjLENBQUM7O3dDQUNZO0FBTnJDLDJCQWVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSXNFbnVtLCBJc05vdEVtcHR5LCBJc1VVSUQgfSBmcm9tIFwiY2xhc3MtdmFsaWRhdG9yXCI7XG5pbXBvcnQgeyBCYXNlTW9kZWwsIEJhc2VNb2RlbFNjaGVtYSB9IGZyb20gXCIuLi8uLi9iYXNlXCI7XG5pbXBvcnQgeyBVc2VyLCBVc2VyU2NoZW1hIH0gZnJvbSBcIi4uL1VzZXJcIjtcbmltcG9ydCBBZGRyZXNzLCB7IEFkZHJlc3NTY2hlbWEgfSBmcm9tIFwiLi9BZGRyZXNzXCI7XG5pbXBvcnQgRG9jdW1lbnQsIHsgRG9jdW1lbnRTY2hlbWEgfSBmcm9tIFwiLi9Eb2N1bWVudFwiO1xuaW1wb3J0IFBob25lLCB7IFBob25lU2NoZW1hIH0gZnJvbSBcIi4vUGhvbmVcIjtcblxuZXhwb3J0IGVudW0gQ29uc3VtZXJTdGF0dXMge1xuICAvKiBTdWNjZXNzIHN0YXRlcyAqL1xuICBSRUFEWSA9IFwicmVhZHlcIixcbiAgUkVKRUNURUQgPSBcInJlamVjdGVkXCIsXG5cbiAgLyogUGVuZGluZyBzdGF0ZXMgKi9cbiAgUEVORElOR19ET0NVTUVOVFMgPSBcInBlbmRpbmdfZG9jdW1lbnRzXCIsXG5cbiAgLyogUHJvY2Vzc2luZyBzdGF0ZXMgKi9cbiAgUFJPQ0VTU0lOR19ET0NVTUVOVFMgPSBcInByb2Nlc3NpbmdfZG9jdW1lbnRzXCIsXG4gIFBST0NFU1NJTkdfV0FMTEVUUyA9IFwicHJvY2Vzc2luZ193YWxsZXRzXCIsXG5cbiAgLyogRXJyb3Igc3RhdGVzICovXG4gIFBST1ZJREVSX0ZBSUxFRCA9IFwicHJvdmlkZXJfZmFpbGVkXCIsXG4gIElOVkFMSURfRE9DVU1FTlRTID0gXCJpbnZhbGlkX2RvY3VtZW50c1wiLFxuICBNQU5VQUxfVkVSSUZJQ0FUSU9OID0gXCJtYW51YWxfdmVyaWZpY2F0aW9uXCIsXG5cbiAgLyogQmxvY2tlZCBzdGF0ZSAqL1xuICBCTE9DS0VEID0gXCJibG9ja2VkXCJcbn1cblxuXG5leHBvcnQgaW50ZXJmYWNlIENvbnN1bWVyU2NoZW1hIGV4dGVuZHMgQmFzZU1vZGVsU2NoZW1hIHtcbiAgc3RhdHVzOiBDb25zdW1lclN0YXR1cztcbiAgdXNlcj86IFVzZXJTY2hlbWE7XG4gIHVzZXJJZD86IHN0cmluZztcbiAgZG9jdW1lbnRzPzogRG9jdW1lbnRTY2hlbWFbXTtcbiAgcGhvbmVzPzogUGhvbmVTY2hlbWFbXTtcbiAgYWRkcmVzc2VzPzogQWRkcmVzc1NjaGVtYVtdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25zdW1lciBleHRlbmRzIEJhc2VNb2RlbCBpbXBsZW1lbnRzIENvbnN1bWVyU2NoZW1hIHtcbiAgdXNlcj86IFVzZXIgPSB1bmRlZmluZWQ7XG4gIEBJc1VVSUQoKSB1c2VySWQ/OiBzdHJpbmcgPSB1bmRlZmluZWQ7XG5cbiAgQElzTm90RW1wdHkoKVxuICBASXNFbnVtKENvbnN1bWVyU3RhdHVzKVxuICBzdGF0dXM6IENvbnN1bWVyU3RhdHVzID0gdW5kZWZpbmVkO1xuXG4gIGRvY3VtZW50cz86IERvY3VtZW50W10gPSB1bmRlZmluZWQ7XG4gIHBob25lcz86IFBob25lW10gPSB1bmRlZmluZWQ7XG4gIGFkZHJlc3Nlcz86IEFkZHJlc3NbXSA9IHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3RvcihkYXRhOiBQYXJ0aWFsPENvbnN1bWVyU2NoZW1hPikge1xuICAgIHN1cGVyKGRhdGEpO1xuICB9XG59XG4iXX0=