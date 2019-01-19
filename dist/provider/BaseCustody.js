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
}
exports.default = BaseCustody;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUN1c3RvZHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvcHJvdmlkZXIvQmFzZUN1c3RvZHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSxJQUFZLGdCQU1YO0FBTkQsV0FBWSxnQkFBZ0I7SUFDMUIsMERBQXNDLENBQUE7SUFDdEMsa0VBQThDLENBQUE7SUFDOUMsa0VBQThDLENBQUE7SUFDOUMsNERBQXdDLENBQUE7SUFDeEMsbUNBQWUsQ0FBQTtBQUNqQixDQUFDLEVBTlcsZ0JBQWdCLEdBQWhCLHdCQUFnQixLQUFoQix3QkFBZ0IsUUFNM0I7QUFFRDtDQWlCQztBQWpCRCw4QkFpQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUcmFuc2FjdGlvbiwgVXNlciwgV2FsbGV0IH0gZnJvbSBcIi4uL21vZGVsc1wiO1xuaW1wb3J0IEJhc2VDdXN0b2R5RmVhdHVyZSBmcm9tIFwiLi9CYXNlQ3VzdG9keUZlYXR1cmVcIjtcblxuZXhwb3J0IGVudW0gVW5yZWdpc3RlclJlYXNvbiB7XG4gIFVTRVJfQ0FOQ0VMTEFUSU9OID0gJ3VzZXItY2FuY2VsYXRpb24nLFxuICBNRURJQVRPUl9DQU5DRUxMQVRJT04gPSAnbWVkaWF0b3ItY2FuY2VsYXRpb24nLFxuICBQUk9WSURFUl9DQU5DRUxMQVRJT04gPSAncHJvdmlkZXItY2FuY2VsYXRpb24nLFxuICBBRE1JTl9DQU5DRUxMQVRJT04gPSAnYWRtaW4tY2FuY2VsYXRpb24nLFxuICBPVEhFUiA9ICdvdGhlcicsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEJhc2VDdXN0b2R5IHtcbiAgcHVibGljIGFic3RyYWN0IHJlYWRvbmx5IGZlYXR1cmVzOiBCYXNlQ3VzdG9keUZlYXR1cmVbXTtcblxuICBwdWJsaWMgYWJzdHJhY3QgYXN5bmMgcmVnaXN0ZXIodXNlcjogVXNlciwgd2FsbGV0OiBXYWxsZXQpO1xuXG4gIHB1YmxpYyBhYnN0cmFjdCBhc3luYyB3YWxsZXQod2FsbGV0OiBXYWxsZXQpO1xuXG4gIHB1YmxpYyBhYnN0cmFjdCBhc3luYyB0cmFuc2FjdGlvbih0cmFuc2FjdGlvbjogVHJhbnNhY3Rpb24pO1xuXG4gIHB1YmxpYyBhYnN0cmFjdCBhc3luYyB1cGRhdGUodXNlcjogVXNlciwgd2FsbGV0OiBXYWxsZXQpO1xuXG4gIHB1YmxpYyBhYnN0cmFjdCBhc3luYyBoaXN0b3J5KHdhbGxldDogV2FsbGV0KTtcblxuICBwdWJsaWMgYWJzdHJhY3QgYXN5bmMgYmFsYW5jZSh3YWxsZXQ6IFdhbGxldCk7XG5cbiAgcHVibGljIGFic3RyYWN0IGFzeW5jIHVucmVnaXN0ZXIodXNlcjogVXNlciwgd2FsbGV0OiBXYWxsZXQsIHJlYXNvbjogVW5yZWdpc3RlclJlYXNvbik7XG5cbn0iXX0=