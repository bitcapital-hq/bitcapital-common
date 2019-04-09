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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUN1c3RvZHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvcHJvdmlkZXIvQmFzZUN1c3RvZHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFlQSxJQUFZLGdCQU1YO0FBTkQsV0FBWSxnQkFBZ0I7SUFDMUIsMERBQXNDLENBQUE7SUFDdEMsa0VBQThDLENBQUE7SUFDOUMsa0VBQThDLENBQUE7SUFDOUMsNERBQXdDLENBQUE7SUFDeEMsbUNBQWUsQ0FBQTtBQUNqQixDQUFDLEVBTlcsZ0JBQWdCLEdBQWhCLHdCQUFnQixLQUFoQix3QkFBZ0IsUUFNM0I7QUFJRCxNQUE4QixXQUFXO0lBSXZDLFlBQTBCLE9BQTJCO1FBQTNCLFlBQU8sR0FBUCxPQUFPLENBQW9CO0lBQUcsQ0FBQztJQVlsRCxPQUFPLENBQUMsSUFBb0I7UUFDakMsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFDO1FBRXpELElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDWixNQUFNLElBQUksS0FBSyxDQUFDLGtDQUFrQyxJQUFJLDhDQUE4QyxDQUFDLENBQUM7U0FDdkc7UUFFRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0NBbUNGO0FBM0RELDhCQTJEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVzZXJTY2hlbWEsIFdhbGxldFNjaGVtYSB9IGZyb20gXCIuLi9tb2RlbHNcIjtcbmltcG9ydCBCYXNlQ3VzdG9keUZlYXR1cmUsIHsgQ3VzdG9keUZlYXR1cmUgfSBmcm9tIFwiLi9CYXNlQ3VzdG9keUZlYXR1cmVcIjtcbmltcG9ydCB7IEN1c3RvZHlQcm92aWRlciB9IGZyb20gXCIuL0N1c3RvZHlQcm92aWRlclwiO1xuaW1wb3J0IHtcbiAgQ3VzdG9keUF1ZGl0RmVhdHVyZSxcbiAgQ3VzdG9keUJsb2NrRmVhdHVyZSxcbiAgQ3VzdG9keUJvbGV0b0ZlYXR1cmUsXG4gIEN1c3RvZHlDYXJkRmVhdHVyZSxcbiAgQ3VzdG9keURlcG9zaXRGZWF0dXJlLFxuICBDdXN0b2R5UGF5bWVudEZlYXR1cmUsXG4gIEN1c3RvZHlQb3N0YmFja0ZlYXR1cmUsXG4gIEN1c3RvZHlXaXRoZHJhd0ZlYXR1cmUsXG4gIEN1c3RvZHlQaG9uZUNyZWRpdEZlYXR1cmVcbn0gZnJvbSBcIi4vZmVhdHVyZXNcIjtcblxuZXhwb3J0IGVudW0gVW5yZWdpc3RlclJlYXNvbiB7XG4gIFVTRVJfQ0FOQ0VMTEFUSU9OID0gXCJ1c2VyLWNhbmNlbGF0aW9uXCIsXG4gIE1FRElBVE9SX0NBTkNFTExBVElPTiA9IFwibWVkaWF0b3ItY2FuY2VsYXRpb25cIixcbiAgUFJPVklERVJfQ0FOQ0VMTEFUSU9OID0gXCJwcm92aWRlci1jYW5jZWxhdGlvblwiLFxuICBBRE1JTl9DQU5DRUxMQVRJT04gPSBcImFkbWluLWNhbmNlbGF0aW9uXCIsXG4gIE9USEVSID0gXCJvdGhlclwiXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFzZUN1c3RvZHlPcHRpb25zIHt9XG5cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEJhc2VDdXN0b2R5IHtcbiAgcHVibGljIGFic3RyYWN0IHJlYWRvbmx5IHR5cGU6IEN1c3RvZHlQcm92aWRlcjtcbiAgcHVibGljIGFic3RyYWN0IHJlYWRvbmx5IGZlYXR1cmVzOiBCYXNlQ3VzdG9keUZlYXR1cmVbXTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIG9wdGlvbnM6IEJhc2VDdXN0b2R5T3B0aW9ucykge31cblxuICBwdWJsaWMgZmVhdHVyZSh0eXBlOiBDdXN0b2R5RmVhdHVyZS5BVURJVCk6IEN1c3RvZHlBdWRpdEZlYXR1cmU7XG4gIHB1YmxpYyBmZWF0dXJlKHR5cGU6IEN1c3RvZHlGZWF0dXJlLkJMT0NLKTogQ3VzdG9keUJsb2NrRmVhdHVyZTtcbiAgcHVibGljIGZlYXR1cmUodHlwZTogQ3VzdG9keUZlYXR1cmUuQk9MRVRPKTogQ3VzdG9keUJvbGV0b0ZlYXR1cmU7XG4gIHB1YmxpYyBmZWF0dXJlKHR5cGU6IEN1c3RvZHlGZWF0dXJlLkNBUkQpOiBDdXN0b2R5Q2FyZEZlYXR1cmU7XG4gIHB1YmxpYyBmZWF0dXJlKHR5cGU6IEN1c3RvZHlGZWF0dXJlLkRFUE9TSVQpOiBDdXN0b2R5RGVwb3NpdEZlYXR1cmU7XG4gIHB1YmxpYyBmZWF0dXJlKHR5cGU6IEN1c3RvZHlGZWF0dXJlLlBBWU1FTlQpOiBDdXN0b2R5UGF5bWVudEZlYXR1cmU7XG4gIHB1YmxpYyBmZWF0dXJlKHR5cGU6IEN1c3RvZHlGZWF0dXJlLlBPU1RCQUNLKTogQ3VzdG9keVBvc3RiYWNrRmVhdHVyZTtcbiAgcHVibGljIGZlYXR1cmUodHlwZTogQ3VzdG9keUZlYXR1cmUuV0lUSERSQVcpOiBDdXN0b2R5V2l0aGRyYXdGZWF0dXJlO1xuICBwdWJsaWMgZmVhdHVyZSh0eXBlOiBDdXN0b2R5RmVhdHVyZS5QSE9ORV9DUkVESVRTKTogQ3VzdG9keVBob25lQ3JlZGl0RmVhdHVyZTtcbiAgcHVibGljIGZlYXR1cmUodHlwZTogQ3VzdG9keUZlYXR1cmUpOiBCYXNlQ3VzdG9keUZlYXR1cmU7XG4gIHB1YmxpYyBmZWF0dXJlKHR5cGU6IEN1c3RvZHlGZWF0dXJlKTogQmFzZUN1c3RvZHlGZWF0dXJlIHtcbiAgICBjb25zdCBmZWF0dXJlID0gdGhpcy5mZWF0dXJlcy5maW5kKGYgPT4gZi50eXBlID09PSB0eXBlKTtcblxuICAgIGlmICghZmVhdHVyZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBQcm92aWRlciBkb2VzIG5vdCBzdXBwb3J0IHRoZSBcIiR7dHlwZX1cIiBmZWF0dXJlLCBvciBoYXMgbm90IHJlZ2lzdGVyZWQgaXRzIHNlcnZpY2VgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmVhdHVyZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYSBuZXcgd2FsbGV0IGluIHRoZSBwcm92aWRlciBmb3IgYSBzcGVjaWZpYyBVc2VyLlxuICAgKlxuICAgKiBAcGFyYW0gdXNlciBUaGUgdXNlciBpbnN0YW5jZSB0byBiZSByZWdpc3RlcmVkIGluIHByb3ZpZGVyXG4gICAqIEBwYXJhbSB3YWxsZXQgVGhlIHNwZWNpZmljIHdhbGxldCB0byBiZSByZWdpc3RlcmVkIGluIHByb3ZpZGVyXG4gICAqIEBwYXJhbSBleHRlcm5hbElkIFRoZSBJRCBvZiB0aGUgZXhpc3RpbmcgdXNlciBpbiB0aGUgcHJvdmlkZXJcbiAgICovXG4gIHB1YmxpYyBhYnN0cmFjdCBhc3luYyByZWdpc3RlcihcbiAgICB1c2VyOiBVc2VyU2NoZW1hLFxuICAgIHdhbGxldDogV2FsbGV0U2NoZW1hLFxuICAgIGV4dGVybmFsSWQ/OiBhbnlcbiAgKTogUHJvbWlzZTx7IGV4dGVybmFsSWQ6IHN0cmluZyB9PjtcblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgaW5mb3JtYXRpb24gb2YgYW4gZXhpc3RpbmcgdXNlciBhbmQgd2FsbGV0IGluIHRoZSBleHRlcm5hbCBwcm92aWRlci5cbiAgICpcbiAgICogQHBhcmFtIHVzZXIgVGhlIHVzZXIgaW5zdGFuY2UgdG8gYmUgdXBkYXRlZFxuICAgKiBAcGFyYW0gd2FsbGV0IFRoZSB3YWxsZXQgaW5zdGFuY2UgdG8gYmUgdXBkYXRlZFxuICAgKi9cbiAgcHVibGljIGFic3RyYWN0IGFzeW5jIHVwZGF0ZSh1c2VyOiBVc2VyU2NoZW1hLCB3YWxsZXQ6IFdhbGxldFNjaGVtYSk6IFByb21pc2U8eyBleHRlcm5hbElkOiBzdHJpbmcgfT47XG5cbiAgLyoqXG4gICAqIFVucmVnaXN0ZXJzIGEgd2FsbGV0IGZyb20gdGhlIHByb3ZpZGVyIGZvciBhIHNwZWNpZmljIFVzZXIuIFRoaXNcbiAgICogbWF5IGJlIGlycmV2ZXJzaWJsZS5cbiAgICpcbiAgICogQHBhcmFtIHVzZXIgVGhlIHVzZXIgaW5zdGFuY2UgdG8gYmUgdW5yZWdpc3RlcmVkIGluIHByb3ZpZGVyXG4gICAqIEBwYXJhbSB3YWxsZXQgVGhlIHNwZWNpZmljIHdhbGxldCB0byBiZSB1bnJlZ2lzdGVyZWQgaW4gcHJvdmlkZXJcbiAgICovXG4gIHB1YmxpYyBhYnN0cmFjdCBhc3luYyB1bnJlZ2lzdGVyKFxuICAgIHVzZXI6IFVzZXJTY2hlbWEsXG4gICAgd2FsbGV0OiBXYWxsZXRTY2hlbWEsXG4gICAgcmVhc29uOiBVbnJlZ2lzdGVyUmVhc29uXG4gICk6IFByb21pc2U8eyBleHRlcm5hbElkOiBzdHJpbmcgfT47XG59XG4iXX0=