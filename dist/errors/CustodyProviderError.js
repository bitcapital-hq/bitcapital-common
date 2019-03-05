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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9keVByb3ZpZGVyRXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvZXJyb3JzL0N1c3RvZHlQcm92aWRlckVycm9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsNkRBQWdEO0FBR2hELE1BQWEsb0JBQXFCLFNBQVEsK0JBQVM7SUFLakQsWUFBWSxJQUFxQixFQUFFLFNBQTZCO1FBQzlELElBQUksSUFBSSxHQUFHLFNBQVMsQ0FBQztRQUVyQixJQUFJLFNBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDMUQsSUFBSSxHQUFHLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN0QztRQUVELDRCQUE0QjtRQUM1QixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUM7UUFDbEQsR0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDakQsR0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFekMseUNBQXlDO1FBQ3pDLEtBQUssQ0FBQyxHQUFHLEVBQUU7WUFDVCxRQUFRLEVBQUUsSUFBSTtZQUNkLE1BQU0sRUFBRSxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUztZQUMzRSxHQUFHLEVBQUUsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQztTQUNoQyxDQUFDLENBQUM7UUFFSCw0Q0FBNEM7UUFDNUMsSUFBSSxTQUFTLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDekIsTUFBTSxLQUFLLEdBQUcsU0FBdUIsQ0FBQztZQUN0QyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7WUFDL0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO1lBQzdCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztZQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUM7WUFDN0IsSUFBSSxDQUFDLE9BQU8sbUJBQUssSUFBSSxJQUFLLElBQUksQ0FBQyxPQUFPLENBQUUsQ0FBQztTQUMxQztJQUNILENBQUM7Q0FDRjtBQWxDRCxvREFrQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBeGlvc0Vycm9yLCBBeGlvc1JlcXVlc3RDb25maWcsIEF4aW9zUmVzcG9uc2UgfSBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IEJhc2VFcnJvciB9IGZyb20gXCJ0cy1mcmFtZXdvcmstY29tbW9uXCI7XG5pbXBvcnQgeyBDdXN0b2R5UHJvdmlkZXIgfSBmcm9tIFwiLi4vcHJvdmlkZXJcIjtcblxuZXhwb3J0IGNsYXNzIEN1c3RvZHlQcm92aWRlckVycm9yIGV4dGVuZHMgQmFzZUVycm9yIHtcbiAgY29uZmlnPzogQXhpb3NSZXF1ZXN0Q29uZmlnO1xuICByZXNwb25zZT86IEF4aW9zUmVzcG9uc2U7XG4gIHJlcXVlc3Q/OiBhbnk7XG5cbiAgY29uc3RydWN0b3IodHlwZTogQ3VzdG9keVByb3ZpZGVyLCBleGNlcHRpb246IEF4aW9zRXJyb3IgfCBFcnJvcikge1xuICAgIGxldCBkYXRhID0gdW5kZWZpbmVkO1xuXG4gICAgaWYgKGV4Y2VwdGlvbltcInJlc3BvbnNlXCJdICYmIGV4Y2VwdGlvbltcInJlc3BvbnNlXCJdW1wiZGF0YVwiXSkge1xuICAgICAgZGF0YSA9IGV4Y2VwdGlvbltcInJlc3BvbnNlXCJdW1wiZGF0YVwiXTtcbiAgICB9XG5cbiAgICAvLyBQcmVwYXJlIGV4Y2VwdGlvbiBtZXNzYWdlXG4gICAgbGV0IG1zZyA9IGRhdGEgPyBkYXRhLm1lc3NhZ2UgOiBleGNlcHRpb24ubWVzc2FnZTtcbiAgICBtc2cgPSBtc2cucmVwbGFjZShuZXcgUmVnRXhwKC9eXFxbXFxkezN9XFxdIC8pLCBcIlwiKTtcbiAgICBtc2cgPSBtc2cucmVwbGFjZSgvXFwoc3RhY2tJZFxcOi4qXFwpLywgXCJcIik7XG5cbiAgICAvLyBDYWxsIHN1cGVyIGZvciBiYXNlIGVycm9yIGNvbnN0cnVjdGlvblxuICAgIHN1cGVyKG1zZywge1xuICAgICAgcHJvdmlkZXI6IHR5cGUsXG4gICAgICBzdGF0dXM6IGV4Y2VwdGlvbltcInJlc3BvbnNlXCJdID8gZXhjZXB0aW9uW1wicmVzcG9uc2VcIl1bXCJzdGF0dXNcIl0gOiB1bmRlZmluZWQsXG4gICAgICB1cmw6IGV4Y2VwdGlvbltcImNvbmZpZ1wiXVtcInVybFwiXVxuICAgIH0pO1xuXG4gICAgLy8gUHJlcGFyZSBhZGRpdGlvbiBheGlvcyBkYXRhLCBpZiBhdmFpbGFibGVcbiAgICBpZiAoZXhjZXB0aW9uW1wicmVzcG9uc2VcIl0pIHtcbiAgICAgIGNvbnN0IGVycm9yID0gZXhjZXB0aW9uIGFzIEF4aW9zRXJyb3I7XG4gICAgICB0aGlzLnJlc3BvbnNlID0gZXJyb3IucmVzcG9uc2U7XG4gICAgICB0aGlzLnJlcXVlc3QgPSBlcnJvci5yZXF1ZXN0O1xuICAgICAgdGhpcy5jb25maWcgPSBlcnJvci5jb25maWc7XG4gICAgICB0aGlzLnN0YWNrID0gZXhjZXB0aW9uLnN0YWNrO1xuICAgICAgdGhpcy5kZXRhaWxzID0geyBkYXRhLCAuLi50aGlzLmRldGFpbHMgfTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==