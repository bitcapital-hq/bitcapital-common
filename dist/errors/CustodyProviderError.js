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
            status: exception["response"] ? exception["response"]["status"] : undefined,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9keVByb3ZpZGVyRXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvZXJyb3JzL0N1c3RvZHlQcm92aWRlckVycm9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsNkRBQWdEO0FBR2hELE1BQWEsb0JBQXFCLFNBQVEsK0JBQVM7SUFLakQsWUFBWSxJQUFxQixFQUFFLFNBQTZCO1FBQzlELElBQUksSUFBSSxHQUFHLFNBQVMsQ0FBQztRQUVyQixJQUFJLFNBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDMUQsSUFBSSxHQUFHLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN0QztRQUVELDRCQUE0QjtRQUM1QixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUM7UUFDbEQsR0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDakQsR0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFekMseUNBQXlDO1FBQ3pDLEtBQUssQ0FBQyxHQUFHLEVBQUU7WUFDVCxRQUFRLEVBQUUsSUFBSTtZQUNkLE1BQU0sRUFBRSxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUztZQUMzRSxHQUFHLEVBQUUsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQztTQUNoQyxDQUFDLENBQUM7UUFFSCw0Q0FBNEM7UUFDNUMsSUFBSSxTQUFTLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDekIsTUFBTSxLQUFLLEdBQUcsU0FBdUIsQ0FBQztZQUN0QyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7WUFDL0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO1lBQzdCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztZQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUM7WUFDN0IsSUFBSSxDQUFDLE9BQU8sbUJBQUssSUFBSSxJQUFLLElBQUksQ0FBQyxPQUFPLENBQUUsQ0FBQztTQUMxQztJQUNILENBQUM7Q0FDRjtBQWxDRCxvREFrQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBeGlvc0Vycm9yLCBBeGlvc1JlcXVlc3RDb25maWcsIEF4aW9zUmVzcG9uc2UgfSBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgQmFzZUVycm9yIH0gZnJvbSBcInRzLWZyYW1ld29yay1jb21tb25cIjtcclxuaW1wb3J0IHsgQ3VzdG9keVByb3ZpZGVyIH0gZnJvbSBcIi4uL3Byb3ZpZGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ3VzdG9keVByb3ZpZGVyRXJyb3IgZXh0ZW5kcyBCYXNlRXJyb3Ige1xyXG4gIGNvbmZpZz86IEF4aW9zUmVxdWVzdENvbmZpZztcclxuICByZXNwb25zZT86IEF4aW9zUmVzcG9uc2U7XHJcbiAgcmVxdWVzdD86IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IodHlwZTogQ3VzdG9keVByb3ZpZGVyLCBleGNlcHRpb246IEF4aW9zRXJyb3IgfCBFcnJvcikge1xyXG4gICAgbGV0IGRhdGEgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgaWYgKGV4Y2VwdGlvbltcInJlc3BvbnNlXCJdICYmIGV4Y2VwdGlvbltcInJlc3BvbnNlXCJdW1wiZGF0YVwiXSkge1xyXG4gICAgICBkYXRhID0gZXhjZXB0aW9uW1wicmVzcG9uc2VcIl1bXCJkYXRhXCJdO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFByZXBhcmUgZXhjZXB0aW9uIG1lc3NhZ2VcclxuICAgIGxldCBtc2cgPSBkYXRhID8gZGF0YS5tZXNzYWdlIDogZXhjZXB0aW9uLm1lc3NhZ2U7XHJcbiAgICBtc2cgPSBtc2cucmVwbGFjZShuZXcgUmVnRXhwKC9eXFxbXFxkezN9XFxdIC8pLCBcIlwiKTtcclxuICAgIG1zZyA9IG1zZy5yZXBsYWNlKC9cXChzdGFja0lkXFw6LipcXCkvLCBcIlwiKTtcclxuXHJcbiAgICAvLyBDYWxsIHN1cGVyIGZvciBiYXNlIGVycm9yIGNvbnN0cnVjdGlvblxyXG4gICAgc3VwZXIobXNnLCB7XHJcbiAgICAgIHByb3ZpZGVyOiB0eXBlLFxyXG4gICAgICBzdGF0dXM6IGV4Y2VwdGlvbltcInJlc3BvbnNlXCJdID8gZXhjZXB0aW9uW1wicmVzcG9uc2VcIl1bXCJzdGF0dXNcIl0gOiB1bmRlZmluZWQsXHJcbiAgICAgIHVybDogZXhjZXB0aW9uW1wiY29uZmlnXCJdW1widXJsXCJdXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBQcmVwYXJlIGFkZGl0aW9uIGF4aW9zIGRhdGEsIGlmIGF2YWlsYWJsZVxyXG4gICAgaWYgKGV4Y2VwdGlvbltcInJlc3BvbnNlXCJdKSB7XHJcbiAgICAgIGNvbnN0IGVycm9yID0gZXhjZXB0aW9uIGFzIEF4aW9zRXJyb3I7XHJcbiAgICAgIHRoaXMucmVzcG9uc2UgPSBlcnJvci5yZXNwb25zZTtcclxuICAgICAgdGhpcy5yZXF1ZXN0ID0gZXJyb3IucmVxdWVzdDtcclxuICAgICAgdGhpcy5jb25maWcgPSBlcnJvci5jb25maWc7XHJcbiAgICAgIHRoaXMuc3RhY2sgPSBleGNlcHRpb24uc3RhY2s7XHJcbiAgICAgIHRoaXMuZGV0YWlscyA9IHsgZGF0YSwgLi4udGhpcy5kZXRhaWxzIH07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==