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
        this.taxId = undefined;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uc3VtZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvbW9kZWxzL0NvbnN1bWVyL0NvbnN1bWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscURBQTZEO0FBQzdELHFDQUF3RDtBQU14RCxJQUFZLGNBbUJYO0FBbkJELFdBQVksY0FBYztJQUN4QixvQkFBb0I7SUFDcEIsaUNBQWUsQ0FBQTtJQUNmLHVDQUFxQixDQUFBO0lBRXJCLG9CQUFvQjtJQUNwQix5REFBdUMsQ0FBQTtJQUV2Qyx1QkFBdUI7SUFDdkIsK0RBQTZDLENBQUE7SUFDN0MsMkRBQXlDLENBQUE7SUFFekMsa0JBQWtCO0lBQ2xCLHFEQUFtQyxDQUFBO0lBQ25DLHlEQUF1QyxDQUFBO0lBQ3ZDLDZEQUEyQyxDQUFBO0lBRTNDLG1CQUFtQjtJQUNuQixxQ0FBbUIsQ0FBQTtBQUNyQixDQUFDLEVBbkJXLGNBQWMsR0FBZCxzQkFBYyxLQUFkLHNCQUFjLFFBbUJ6QjtBQWFELGNBQThCLFNBQVEsZ0JBQVM7SUFhN0MsWUFBWSxJQUE2QjtRQUN2QyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFiZCxTQUFJLEdBQVUsU0FBUyxDQUFDO1FBQ3hCLFVBQUssR0FBWSxTQUFTLENBQUM7UUFDakIsV0FBTSxHQUFZLFNBQVMsQ0FBQztRQUl0QyxXQUFNLEdBQW1CLFNBQVMsQ0FBQztRQUVuQyxjQUFTLEdBQWdCLFNBQVMsQ0FBQztRQUNuQyxXQUFNLEdBQWEsU0FBUyxDQUFDO1FBQzdCLGNBQVMsR0FBZSxTQUFTLENBQUM7SUFJbEMsQ0FBQztDQUNGO0FBYlc7SUFBVCx3QkFBTSxFQUFFOzt3Q0FBNkI7QUFJdEM7SUFGQyw0QkFBVSxFQUFFO0lBQ1osd0JBQU0sQ0FBQyxjQUFjLENBQUM7O3dDQUNZO0FBUHJDLDJCQWdCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElzRW51bSwgSXNOb3RFbXB0eSwgSXNVVUlEIH0gZnJvbSBcImNsYXNzLXZhbGlkYXRvclwiO1xuaW1wb3J0IHsgQmFzZU1vZGVsLCBCYXNlTW9kZWxTY2hlbWEgfSBmcm9tIFwiLi4vLi4vYmFzZVwiO1xuaW1wb3J0IHsgVXNlciwgVXNlclNjaGVtYSB9IGZyb20gXCIuLi9Vc2VyXCI7XG5pbXBvcnQgQWRkcmVzcywgeyBBZGRyZXNzU2NoZW1hIH0gZnJvbSBcIi4vQWRkcmVzc1wiO1xuaW1wb3J0IERvY3VtZW50LCB7IERvY3VtZW50U2NoZW1hIH0gZnJvbSBcIi4vRG9jdW1lbnRcIjtcbmltcG9ydCBQaG9uZSwgeyBQaG9uZVNjaGVtYSB9IGZyb20gXCIuL1Bob25lXCI7XG5cbmV4cG9ydCBlbnVtIENvbnN1bWVyU3RhdHVzIHtcbiAgLyogU3VjY2VzcyBzdGF0ZXMgKi9cbiAgUkVBRFkgPSBcInJlYWR5XCIsXG4gIFJFSkVDVEVEID0gXCJyZWplY3RlZFwiLFxuXG4gIC8qIFBlbmRpbmcgc3RhdGVzICovXG4gIFBFTkRJTkdfRE9DVU1FTlRTID0gXCJwZW5kaW5nX2RvY3VtZW50c1wiLFxuXG4gIC8qIFByb2Nlc3Npbmcgc3RhdGVzICovXG4gIFBST0NFU1NJTkdfRE9DVU1FTlRTID0gXCJwcm9jZXNzaW5nX2RvY3VtZW50c1wiLFxuICBQUk9DRVNTSU5HX1dBTExFVFMgPSBcInByb2Nlc3Npbmdfd2FsbGV0c1wiLFxuXG4gIC8qIEVycm9yIHN0YXRlcyAqL1xuICBQUk9WSURFUl9GQUlMRUQgPSBcInByb3ZpZGVyX2ZhaWxlZFwiLFxuICBJTlZBTElEX0RPQ1VNRU5UUyA9IFwiaW52YWxpZF9kb2N1bWVudHNcIixcbiAgTUFOVUFMX1ZFUklGSUNBVElPTiA9IFwibWFudWFsX3ZlcmlmaWNhdGlvblwiLFxuXG4gIC8qIEJsb2NrZWQgc3RhdGUgKi9cbiAgQkxPQ0tFRCA9IFwiYmxvY2tlZFwiXG59XG5cblxuZXhwb3J0IGludGVyZmFjZSBDb25zdW1lclNjaGVtYSBleHRlbmRzIEJhc2VNb2RlbFNjaGVtYSB7XG4gIHN0YXR1czogQ29uc3VtZXJTdGF0dXM7XG4gIHVzZXI/OiBVc2VyU2NoZW1hO1xuICB1c2VySWQ/OiBzdHJpbmc7XG4gIHRheElkPzogc3RyaW5nO1xuICBkb2N1bWVudHM/OiBEb2N1bWVudFNjaGVtYVtdO1xuICBwaG9uZXM/OiBQaG9uZVNjaGVtYVtdO1xuICBhZGRyZXNzZXM/OiBBZGRyZXNzU2NoZW1hW107XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnN1bWVyIGV4dGVuZHMgQmFzZU1vZGVsIGltcGxlbWVudHMgQ29uc3VtZXJTY2hlbWEge1xuICB1c2VyPzogVXNlciA9IHVuZGVmaW5lZDtcbiAgdGF4SWQ/OiBzdHJpbmcgPSB1bmRlZmluZWQ7XG4gIEBJc1VVSUQoKSB1c2VySWQ/OiBzdHJpbmcgPSB1bmRlZmluZWQ7XG5cbiAgQElzTm90RW1wdHkoKVxuICBASXNFbnVtKENvbnN1bWVyU3RhdHVzKVxuICBzdGF0dXM6IENvbnN1bWVyU3RhdHVzID0gdW5kZWZpbmVkO1xuXG4gIGRvY3VtZW50cz86IERvY3VtZW50W10gPSB1bmRlZmluZWQ7XG4gIHBob25lcz86IFBob25lW10gPSB1bmRlZmluZWQ7XG4gIGFkZHJlc3Nlcz86IEFkZHJlc3NbXSA9IHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3RvcihkYXRhOiBQYXJ0aWFsPENvbnN1bWVyU2NoZW1hPikge1xuICAgIHN1cGVyKGRhdGEpO1xuICB9XG59XG4iXX0=