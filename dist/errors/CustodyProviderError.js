"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts_framework_common_1 = require("ts-framework-common");
class CustodyProviderError extends ts_framework_common_1.BaseError {
    constructor(type, exception) {
        let data = undefined;
        if (exception["response"] && exception["response"]["data"]) {
            data = exception["response"]["data"];
        }
        // Prepare exception message
        let msg = data ? data.message : exception.message;
        msg = msg.replace(new RegExp(/^\[\d{3}\] /), "");
        msg = msg.replace(/\(stackId\:.*\)/, "");
        // Call super for base error construction
        super(msg, {
            provider: type,
            status: exception["response"]["status"],
            url: exception["config"]["url"]
        });
        // Prepare addition axios data, if available
        if (exception["response"]) {
            const error = exception;
            this.response = error.response;
            this.request = error.request;
            this.config = error.config;
            this.stack = exception.stack;
            this.details = Object.assign({ data }, this.details);
        }
    }
}
exports.CustodyProviderError = CustodyProviderError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9keVByb3ZpZGVyRXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvZXJyb3JzL0N1c3RvZHlQcm92aWRlckVycm9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsNkRBQWdEO0FBR2hELE1BQWEsb0JBQXFCLFNBQVEsK0JBQVM7SUFLakQsWUFBWSxJQUFxQixFQUFFLFNBQTZCO1FBQzlELElBQUksSUFBSSxHQUFHLFNBQVMsQ0FBQztRQUVyQixJQUFJLFNBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDMUQsSUFBSSxHQUFHLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN0QztRQUVELDRCQUE0QjtRQUM1QixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUM7UUFDbEQsR0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDakQsR0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFekMseUNBQXlDO1FBQ3pDLEtBQUssQ0FBQyxHQUFHLEVBQUU7WUFDVCxRQUFRLEVBQUUsSUFBSTtZQUNkLE1BQU0sRUFBRSxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQ3ZDLEdBQUcsRUFBRSxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDO1NBQ2hDLENBQUMsQ0FBQztRQUVILDRDQUE0QztRQUM1QyxJQUFJLFNBQVMsQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN6QixNQUFNLEtBQUssR0FBRyxTQUF1QixDQUFDO1lBQ3RDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQztZQUMvQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7WUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1lBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQztZQUM3QixJQUFJLENBQUMsT0FBTyxtQkFBSyxJQUFJLElBQUssSUFBSSxDQUFDLE9BQU8sQ0FBRSxDQUFDO1NBQzFDO0lBQ0gsQ0FBQztDQUNGO0FBbENELG9EQWtDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF4aW9zRXJyb3IsIEF4aW9zUmVxdWVzdENvbmZpZywgQXhpb3NSZXNwb25zZSB9IGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgQmFzZUVycm9yIH0gZnJvbSBcInRzLWZyYW1ld29yay1jb21tb25cIjtcbmltcG9ydCB7IEN1c3RvZHlQcm92aWRlciB9IGZyb20gXCIuLi9wcm92aWRlclwiO1xuXG5leHBvcnQgY2xhc3MgQ3VzdG9keVByb3ZpZGVyRXJyb3IgZXh0ZW5kcyBCYXNlRXJyb3Ige1xuICBjb25maWc/OiBBeGlvc1JlcXVlc3RDb25maWc7XG4gIHJlc3BvbnNlPzogQXhpb3NSZXNwb25zZTtcbiAgcmVxdWVzdD86IGFueTtcblxuICBjb25zdHJ1Y3Rvcih0eXBlOiBDdXN0b2R5UHJvdmlkZXIsIGV4Y2VwdGlvbjogQXhpb3NFcnJvciB8IEVycm9yKSB7XG4gICAgbGV0IGRhdGEgPSB1bmRlZmluZWQ7XG5cbiAgICBpZiAoZXhjZXB0aW9uW1wicmVzcG9uc2VcIl0gJiYgZXhjZXB0aW9uW1wicmVzcG9uc2VcIl1bXCJkYXRhXCJdKSB7XG4gICAgICBkYXRhID0gZXhjZXB0aW9uW1wicmVzcG9uc2VcIl1bXCJkYXRhXCJdO1xuICAgIH1cblxuICAgIC8vIFByZXBhcmUgZXhjZXB0aW9uIG1lc3NhZ2VcbiAgICBsZXQgbXNnID0gZGF0YSA/IGRhdGEubWVzc2FnZSA6IGV4Y2VwdGlvbi5tZXNzYWdlO1xuICAgIG1zZyA9IG1zZy5yZXBsYWNlKG5ldyBSZWdFeHAoL15cXFtcXGR7M31cXF0gLyksIFwiXCIpO1xuICAgIG1zZyA9IG1zZy5yZXBsYWNlKC9cXChzdGFja0lkXFw6LipcXCkvLCBcIlwiKTtcblxuICAgIC8vIENhbGwgc3VwZXIgZm9yIGJhc2UgZXJyb3IgY29uc3RydWN0aW9uXG4gICAgc3VwZXIobXNnLCB7XG4gICAgICBwcm92aWRlcjogdHlwZSxcbiAgICAgIHN0YXR1czogZXhjZXB0aW9uW1wicmVzcG9uc2VcIl1bXCJzdGF0dXNcIl0sXG4gICAgICB1cmw6IGV4Y2VwdGlvbltcImNvbmZpZ1wiXVtcInVybFwiXVxuICAgIH0pO1xuXG4gICAgLy8gUHJlcGFyZSBhZGRpdGlvbiBheGlvcyBkYXRhLCBpZiBhdmFpbGFibGVcbiAgICBpZiAoZXhjZXB0aW9uW1wicmVzcG9uc2VcIl0pIHtcbiAgICAgIGNvbnN0IGVycm9yID0gZXhjZXB0aW9uIGFzIEF4aW9zRXJyb3I7XG4gICAgICB0aGlzLnJlc3BvbnNlID0gZXJyb3IucmVzcG9uc2U7XG4gICAgICB0aGlzLnJlcXVlc3QgPSBlcnJvci5yZXF1ZXN0O1xuICAgICAgdGhpcy5jb25maWcgPSBlcnJvci5jb25maWc7XG4gICAgICB0aGlzLnN0YWNrID0gZXhjZXB0aW9uLnN0YWNrO1xuICAgICAgdGhpcy5kZXRhaWxzID0geyBkYXRhLCAuLi50aGlzLmRldGFpbHMgfTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==