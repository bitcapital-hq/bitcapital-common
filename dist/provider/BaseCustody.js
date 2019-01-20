"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UnregisterReason;
(function (UnregisterReason) {
    UnregisterReason["USER_CANCELLATION"] = "user-cancelation";
    UnregisterReason["MEDIATOR_CANCELLATION"] = "mediator-cancelation";
    UnregisterReason["PROVIDER_CANCELLATION"] = "provider-cancelation";
    UnregisterReason["ADMIN_CANCELLATION"] = "admin-cancelation";
    UnregisterReason["OTHER"] = "other";
})(UnregisterReason = exports.UnregisterReason || (exports.UnregisterReason = {}));
class BaseCustody {
    constructor(options) {
        this.options = options;
    }
}
exports.default = BaseCustody;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUN1c3RvZHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvcHJvdmlkZXIvQmFzZUN1c3RvZHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSxJQUFZLGdCQU1YO0FBTkQsV0FBWSxnQkFBZ0I7SUFDMUIsMERBQXNDLENBQUE7SUFDdEMsa0VBQThDLENBQUE7SUFDOUMsa0VBQThDLENBQUE7SUFDOUMsNERBQXdDLENBQUE7SUFDeEMsbUNBQWUsQ0FBQTtBQUNqQixDQUFDLEVBTlcsZ0JBQWdCLEdBQWhCLHdCQUFnQixLQUFoQix3QkFBZ0IsUUFNM0I7QUFNRDtJQUdFLFlBQTBCLE9BQTJCO1FBQTNCLFlBQU8sR0FBUCxPQUFPLENBQW9CO0lBRXJELENBQUM7Q0F5Q0Y7QUE5Q0QsOEJBOENDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHJhbnNhY3Rpb24sIFVzZXIsIFdhbGxldCB9IGZyb20gXCIuLi9tb2RlbHNcIjtcbmltcG9ydCBCYXNlQ3VzdG9keUZlYXR1cmUgZnJvbSBcIi4vQmFzZUN1c3RvZHlGZWF0dXJlXCI7XG5cbmV4cG9ydCBlbnVtIFVucmVnaXN0ZXJSZWFzb24ge1xuICBVU0VSX0NBTkNFTExBVElPTiA9ICd1c2VyLWNhbmNlbGF0aW9uJyxcbiAgTUVESUFUT1JfQ0FOQ0VMTEFUSU9OID0gJ21lZGlhdG9yLWNhbmNlbGF0aW9uJyxcbiAgUFJPVklERVJfQ0FOQ0VMTEFUSU9OID0gJ3Byb3ZpZGVyLWNhbmNlbGF0aW9uJyxcbiAgQURNSU5fQ0FOQ0VMTEFUSU9OID0gJ2FkbWluLWNhbmNlbGF0aW9uJyxcbiAgT1RIRVIgPSAnb3RoZXInLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJhc2VDdXN0b2R5T3B0aW9ucyB7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQmFzZUN1c3RvZHkge1xuICBwdWJsaWMgYWJzdHJhY3QgcmVhZG9ubHkgZmVhdHVyZXM6IEJhc2VDdXN0b2R5RmVhdHVyZVtdO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgb3B0aW9uczogQmFzZUN1c3RvZHlPcHRpb25zKSB7XG4gICAgXG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGEgbmV3IHdhbGxldCBpbiB0aGUgcHJvdmlkZXIgZm9yIGEgc3BlY2lmaWMgVXNlci5cbiAgICogXG4gICAqIEBwYXJhbSB1c2VyIFRoZSB1c2VyIGluc3RhbmNlIHRvIGJlIHJlZ2lzdGVyZWQgaW4gcHJvdmlkZXJcbiAgICogQHBhcmFtIHdhbGxldCBUaGUgc3BlY2lmaWMgd2FsbGV0IHRvIGJlIHJlZ2lzdGVyZWQgaW4gcHJvdmlkZXJcbiAgICovXG4gIHB1YmxpYyBhYnN0cmFjdCBhc3luYyByZWdpc3Rlcih1c2VyOiBVc2VyLCB3YWxsZXQ6IFdhbGxldCk6IFByb21pc2U8e2lkOiBzdHJpbmd9PjtcblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgaW5mb3JtYXRpb24gb2YgYW4gZXhpc3RpbmcgdXNlciBhbmQgd2FsbGV0IGluIHRoZSBleHRlcm5hbCBwcm92aWRlci5cbiAgICogXG4gICAqIEBwYXJhbSB1c2VyIFRoZSB1c2VyIGluc3RhbmNlIHRvIGJlIHVwZGF0ZWRcbiAgICogQHBhcmFtIHdhbGxldCBUaGUgd2FsbGV0IGluc3RhbmNlIHRvIGJlIHVwZGF0ZWRcbiAgICovXG4gIHB1YmxpYyBhYnN0cmFjdCBhc3luYyB1cGRhdGUodXNlcjogVXNlciwgd2FsbGV0OiBXYWxsZXQpOiBQcm9taXNlPHtpZDogc3RyaW5nfT47XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGhpc3Rvcnkgb2YgdHJhbnNhY3Rpb25zIGluIHRoZSBleHRlcm5hbCBwcm92aWRlci5cbiAgICogXG4gICAqIEBwYXJhbSB3YWxsZXQgVGhlIHdhbGxldCBpbnN0YW5jZSB0byBnZXQgdGhlIGhpc3RvcnkgZnJvbSBcbiAgICovXG4gIHB1YmxpYyBhYnN0cmFjdCBhc3luYyBoaXN0b3J5KHdhbGxldDogV2FsbGV0KTogUHJvbWlzZTxUcmFuc2FjdGlvbltdPjtcblxuICAvKipcbiAgICogR2V0cyB0aGUgY3VycmVudCBiYWxhbmNlIGluIHRoZSBleHRlcm5hbCBjdXN0b2R5IHByb3ZpZGVyLlxuICAgKiBcbiAgICogQHBhcmFtIHdhbGxldCBUaGUgd2FsbGV0IGluc3RhbmNlIHRvIGdldCB0aGUgaGlzdG9yeSBmcm9tIFxuICAgKi9cbiAgcHVibGljIGFic3RyYWN0IGFzeW5jIGJhbGFuY2Uod2FsbGV0OiBXYWxsZXQpOiBQcm9taXNlPHt2YWx1ZTogc3RyaW5nfT47XG5cbiAgLyoqXG4gICAqIFVucmVnaXN0ZXJzIGEgd2FsbGV0IGZyb20gdGhlIHByb3ZpZGVyIGZvciBhIHNwZWNpZmljIFVzZXIuIFRoaXNcbiAgICogbWF5IGJlIGlycmV2ZXJzaWJsZS5cbiAgICogXG4gICAqIEBwYXJhbSB1c2VyIFRoZSB1c2VyIGluc3RhbmNlIHRvIGJlIHVucmVnaXN0ZXJlZCBpbiBwcm92aWRlclxuICAgKiBAcGFyYW0gd2FsbGV0IFRoZSBzcGVjaWZpYyB3YWxsZXQgdG8gYmUgdW5yZWdpc3RlcmVkIGluIHByb3ZpZGVyXG4gICAqL1xuICBwdWJsaWMgYWJzdHJhY3QgYXN5bmMgdW5yZWdpc3Rlcih1c2VyOiBVc2VyLCB3YWxsZXQ6IFdhbGxldCwgcmVhc29uOiBVbnJlZ2lzdGVyUmVhc29uKTogUHJvbWlzZTx7aWQ6IHN0cmluZ30+O1xuXG59Il19