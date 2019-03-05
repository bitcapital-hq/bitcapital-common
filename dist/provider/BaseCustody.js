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
    feature(type) {
        const feature = this.features.find(f => f.type === type);
        if (!feature) {
            throw new Error(`Provider does not support the "${type}" feature, or has not registered its service`);
        }
        return feature;
    }
}
exports.default = BaseCustody;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUN1c3RvZHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvcHJvdmlkZXIvQmFzZUN1c3RvZHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFJQSxJQUFZLGdCQU1YO0FBTkQsV0FBWSxnQkFBZ0I7SUFDMUIsMERBQXNDLENBQUE7SUFDdEMsa0VBQThDLENBQUE7SUFDOUMsa0VBQThDLENBQUE7SUFDOUMsNERBQXdDLENBQUE7SUFDeEMsbUNBQWUsQ0FBQTtBQUNqQixDQUFDLEVBTlcsZ0JBQWdCLEdBQWhCLHdCQUFnQixLQUFoQix3QkFBZ0IsUUFNM0I7QUFJRCxNQUE4QixXQUFXO0lBSXZDLFlBQTBCLE9BQTJCO1FBQTNCLFlBQU8sR0FBUCxPQUFPLENBQW9CO0lBQUcsQ0FBQztJQUVsRCxPQUFPLENBQU8sSUFBb0I7UUFDdkMsTUFBTSxPQUFPLEdBQVEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFDO1FBRTlELElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDWixNQUFNLElBQUksS0FBSyxDQUFDLGtDQUFrQyxJQUFJLDhDQUE4QyxDQUFDLENBQUM7U0FDdkc7UUFFRCxPQUFPLE9BQWUsQ0FBQztJQUN6QixDQUFDO0NBK0JGO0FBN0NELDhCQTZDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFdhbGxldCwgVXNlciB9IGZyb20gXCIuLi9tb2RlbHNcIjtcbmltcG9ydCBCYXNlQ3VzdG9keUZlYXR1cmUsIHsgQ3VzdG9keUZlYXR1cmUgfSBmcm9tIFwiLi9CYXNlQ3VzdG9keUZlYXR1cmVcIjtcbmltcG9ydCB7IEN1c3RvZHlQcm92aWRlciB9IGZyb20gXCIuL0N1c3RvZHlQcm92aWRlclwiO1xuXG5leHBvcnQgZW51bSBVbnJlZ2lzdGVyUmVhc29uIHtcbiAgVVNFUl9DQU5DRUxMQVRJT04gPSBcInVzZXItY2FuY2VsYXRpb25cIixcbiAgTUVESUFUT1JfQ0FOQ0VMTEFUSU9OID0gXCJtZWRpYXRvci1jYW5jZWxhdGlvblwiLFxuICBQUk9WSURFUl9DQU5DRUxMQVRJT04gPSBcInByb3ZpZGVyLWNhbmNlbGF0aW9uXCIsXG4gIEFETUlOX0NBTkNFTExBVElPTiA9IFwiYWRtaW4tY2FuY2VsYXRpb25cIixcbiAgT1RIRVIgPSBcIm90aGVyXCJcbn1cblxuZXhwb3J0IGludGVyZmFjZSBCYXNlQ3VzdG9keU9wdGlvbnMge31cblxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQmFzZUN1c3RvZHkge1xuICBwdWJsaWMgYWJzdHJhY3QgcmVhZG9ubHkgdHlwZTogQ3VzdG9keVByb3ZpZGVyO1xuICBwdWJsaWMgYWJzdHJhY3QgcmVhZG9ubHkgZmVhdHVyZXM6IEJhc2VDdXN0b2R5RmVhdHVyZVtdO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgb3B0aW9uczogQmFzZUN1c3RvZHlPcHRpb25zKSB7fVxuXG4gIHB1YmxpYyBmZWF0dXJlPFR5cGU+KHR5cGU6IEN1c3RvZHlGZWF0dXJlKTogVHlwZSB7XG4gICAgY29uc3QgZmVhdHVyZTogYW55ID0gdGhpcy5mZWF0dXJlcy5maW5kKGYgPT4gZi50eXBlID09PSB0eXBlKTtcblxuICAgIGlmICghZmVhdHVyZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBQcm92aWRlciBkb2VzIG5vdCBzdXBwb3J0IHRoZSBcIiR7dHlwZX1cIiBmZWF0dXJlLCBvciBoYXMgbm90IHJlZ2lzdGVyZWQgaXRzIHNlcnZpY2VgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmVhdHVyZSBhcyBUeXBlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhIG5ldyB3YWxsZXQgaW4gdGhlIHByb3ZpZGVyIGZvciBhIHNwZWNpZmljIFVzZXIuXG4gICAqXG4gICAqIEBwYXJhbSB1c2VyIFRoZSB1c2VyIGluc3RhbmNlIHRvIGJlIHJlZ2lzdGVyZWQgaW4gcHJvdmlkZXJcbiAgICogQHBhcmFtIHdhbGxldCBUaGUgc3BlY2lmaWMgd2FsbGV0IHRvIGJlIHJlZ2lzdGVyZWQgaW4gcHJvdmlkZXJcbiAgICogQHBhcmFtIGV4dGVybmFsSWQgVGhlIElEIG9mIHRoZSBleGlzdGluZyB1c2VyIGluIHRoZSBwcm92aWRlclxuICAgKi9cbiAgcHVibGljIGFic3RyYWN0IGFzeW5jIHJlZ2lzdGVyKHVzZXI6IFVzZXIsIHdhbGxldDogV2FsbGV0LCBleHRlcm5hbElkPzogc3RyaW5nKTogUHJvbWlzZTx7IGV4dGVybmFsSWQ6IHN0cmluZyB9PjtcblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgaW5mb3JtYXRpb24gb2YgYW4gZXhpc3RpbmcgdXNlciBhbmQgd2FsbGV0IGluIHRoZSBleHRlcm5hbCBwcm92aWRlci5cbiAgICpcbiAgICogQHBhcmFtIHVzZXIgVGhlIHVzZXIgaW5zdGFuY2UgdG8gYmUgdXBkYXRlZFxuICAgKiBAcGFyYW0gd2FsbGV0IFRoZSB3YWxsZXQgaW5zdGFuY2UgdG8gYmUgdXBkYXRlZFxuICAgKi9cbiAgcHVibGljIGFic3RyYWN0IGFzeW5jIHVwZGF0ZSh1c2VyOiBVc2VyLCB3YWxsZXQ6IFdhbGxldCk6IFByb21pc2U8eyBleHRlcm5hbElkOiBzdHJpbmcgfT47XG5cbiAgLyoqXG4gICAqIFVucmVnaXN0ZXJzIGEgd2FsbGV0IGZyb20gdGhlIHByb3ZpZGVyIGZvciBhIHNwZWNpZmljIFVzZXIuIFRoaXNcbiAgICogbWF5IGJlIGlycmV2ZXJzaWJsZS5cbiAgICpcbiAgICogQHBhcmFtIHVzZXIgVGhlIHVzZXIgaW5zdGFuY2UgdG8gYmUgdW5yZWdpc3RlcmVkIGluIHByb3ZpZGVyXG4gICAqIEBwYXJhbSB3YWxsZXQgVGhlIHNwZWNpZmljIHdhbGxldCB0byBiZSB1bnJlZ2lzdGVyZWQgaW4gcHJvdmlkZXJcbiAgICovXG4gIHB1YmxpYyBhYnN0cmFjdCBhc3luYyB1bnJlZ2lzdGVyKFxuICAgIHVzZXI6IFVzZXIsXG4gICAgd2FsbGV0OiBXYWxsZXQsXG4gICAgcmVhc29uOiBVbnJlZ2lzdGVyUmVhc29uXG4gICk6IFByb21pc2U8eyBleHRlcm5hbElkOiBzdHJpbmcgfT47XG59XG4iXX0=