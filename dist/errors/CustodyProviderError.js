"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseError_1 = require("./BaseError");
class CustodyProviderError extends BaseError_1.BaseError {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9keVByb3ZpZGVyRXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvZXJyb3JzL0N1c3RvZHlQcm92aWRlckVycm9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsMkNBQXdDO0FBRXhDLE1BQWEsb0JBQXFCLFNBQVEscUJBQVM7SUFLakQsWUFBWSxJQUFxQixFQUFFLFNBQTZCO1FBQzlELElBQUksSUFBSSxHQUFHLFNBQVMsQ0FBQztRQUVyQixJQUFJLFNBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDMUQsSUFBSSxHQUFHLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN0QztRQUVELDRCQUE0QjtRQUM1QixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUM7UUFDbEQsR0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDakQsR0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFekMseUNBQXlDO1FBQ3pDLEtBQUssQ0FBQyxHQUFHLEVBQUU7WUFDVCxRQUFRLEVBQUUsSUFBSTtZQUNkLE1BQU0sRUFBRSxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUztZQUMzRSxHQUFHLEVBQUUsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQztTQUNoQyxDQUFDLENBQUM7UUFFSCw0Q0FBNEM7UUFDNUMsSUFBSSxTQUFTLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDekIsTUFBTSxLQUFLLEdBQUcsU0FBdUIsQ0FBQztZQUN0QyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7WUFDL0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO1lBQzdCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztZQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUM7WUFDN0IsSUFBSSxDQUFDLE9BQU8sbUJBQUssSUFBSSxJQUFLLElBQUksQ0FBQyxPQUFPLENBQUUsQ0FBQztTQUMxQztJQUNILENBQUM7Q0FDRjtBQWxDRCxvREFrQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBeGlvc0Vycm9yLCBBeGlvc1JlcXVlc3RDb25maWcsIEF4aW9zUmVzcG9uc2UgfSBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IEN1c3RvZHlQcm92aWRlciB9IGZyb20gXCIuLi9wcm92aWRlclwiO1xuaW1wb3J0IHsgQmFzZUVycm9yIH0gZnJvbSBcIi4vQmFzZUVycm9yXCI7XG5cbmV4cG9ydCBjbGFzcyBDdXN0b2R5UHJvdmlkZXJFcnJvciBleHRlbmRzIEJhc2VFcnJvciB7XG4gIGNvbmZpZz86IEF4aW9zUmVxdWVzdENvbmZpZztcbiAgcmVzcG9uc2U/OiBBeGlvc1Jlc3BvbnNlO1xuICByZXF1ZXN0PzogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHR5cGU6IEN1c3RvZHlQcm92aWRlciwgZXhjZXB0aW9uOiBBeGlvc0Vycm9yIHwgRXJyb3IpIHtcbiAgICBsZXQgZGF0YSA9IHVuZGVmaW5lZDtcblxuICAgIGlmIChleGNlcHRpb25bXCJyZXNwb25zZVwiXSAmJiBleGNlcHRpb25bXCJyZXNwb25zZVwiXVtcImRhdGFcIl0pIHtcbiAgICAgIGRhdGEgPSBleGNlcHRpb25bXCJyZXNwb25zZVwiXVtcImRhdGFcIl07XG4gICAgfVxuXG4gICAgLy8gUHJlcGFyZSBleGNlcHRpb24gbWVzc2FnZVxuICAgIGxldCBtc2cgPSBkYXRhID8gZGF0YS5tZXNzYWdlIDogZXhjZXB0aW9uLm1lc3NhZ2U7XG4gICAgbXNnID0gbXNnLnJlcGxhY2UobmV3IFJlZ0V4cCgvXlxcW1xcZHszfVxcXSAvKSwgXCJcIik7XG4gICAgbXNnID0gbXNnLnJlcGxhY2UoL1xcKHN0YWNrSWRcXDouKlxcKS8sIFwiXCIpO1xuXG4gICAgLy8gQ2FsbCBzdXBlciBmb3IgYmFzZSBlcnJvciBjb25zdHJ1Y3Rpb25cbiAgICBzdXBlcihtc2csIHtcbiAgICAgIHByb3ZpZGVyOiB0eXBlLFxuICAgICAgc3RhdHVzOiBleGNlcHRpb25bXCJyZXNwb25zZVwiXSA/IGV4Y2VwdGlvbltcInJlc3BvbnNlXCJdW1wic3RhdHVzXCJdIDogdW5kZWZpbmVkLFxuICAgICAgdXJsOiBleGNlcHRpb25bXCJjb25maWdcIl1bXCJ1cmxcIl1cbiAgICB9KTtcblxuICAgIC8vIFByZXBhcmUgYWRkaXRpb24gYXhpb3MgZGF0YSwgaWYgYXZhaWxhYmxlXG4gICAgaWYgKGV4Y2VwdGlvbltcInJlc3BvbnNlXCJdKSB7XG4gICAgICBjb25zdCBlcnJvciA9IGV4Y2VwdGlvbiBhcyBBeGlvc0Vycm9yO1xuICAgICAgdGhpcy5yZXNwb25zZSA9IGVycm9yLnJlc3BvbnNlO1xuICAgICAgdGhpcy5yZXF1ZXN0ID0gZXJyb3IucmVxdWVzdDtcbiAgICAgIHRoaXMuY29uZmlnID0gZXJyb3IuY29uZmlnO1xuICAgICAgdGhpcy5zdGFjayA9IGV4Y2VwdGlvbi5zdGFjaztcbiAgICAgIHRoaXMuZGV0YWlscyA9IHsgZGF0YSwgLi4udGhpcy5kZXRhaWxzIH07XG4gICAgfVxuICB9XG59XG4iXX0=