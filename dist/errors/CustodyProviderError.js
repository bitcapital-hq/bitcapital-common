"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts_framework_common_1 = require("ts-framework-common");
class CustodyProviderError extends ts_framework_common_1.BaseError {
    constructor(type, exception) {
        let data = undefined;
        if (exception['response'] && exception['response']['data']) {
            data = exception['response']['data'];
        }
        // Prepare exception message
        let msg = data ? data.message : exception.message;
        msg = msg.replace(new RegExp(/^\[\d{3}\] /), '');
        msg = msg.replace(/\(stackId\:.*\)/, '');
        // Call super for base error construction
        super(msg, {
            provider: type,
            status: exception['response']['status'],
            url: exception['config']['url'],
        });
        // Prepare addition axios data, if available
        if (exception['response']) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9keVByb3ZpZGVyRXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvZXJyb3JzL0N1c3RvZHlQcm92aWRlckVycm9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsNkRBQWdEO0FBR2hELE1BQWEsb0JBQXFCLFNBQVEsK0JBQVM7SUFLakQsWUFBWSxJQUFxQixFQUFFLFNBQTZCO1FBQzlELElBQUksSUFBSSxHQUFHLFNBQVMsQ0FBQztRQUVyQixJQUFJLFNBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDMUQsSUFBSSxHQUFHLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN0QztRQUVELDRCQUE0QjtRQUM1QixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUM7UUFDbEQsR0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDakQsR0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFekMseUNBQXlDO1FBQ3pDLEtBQUssQ0FBQyxHQUFHLEVBQUU7WUFDVCxRQUFRLEVBQUUsSUFBSTtZQUNkLE1BQU0sRUFBRSxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsUUFBUSxDQUFDO1lBQ3ZDLEdBQUcsRUFBRSxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDO1NBQ2hDLENBQUMsQ0FBQztRQUVILDRDQUE0QztRQUM1QyxJQUFJLFNBQVMsQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN6QixNQUFNLEtBQUssR0FBRyxTQUF1QixDQUFDO1lBQ3RDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQztZQUMvQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7WUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1lBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQztZQUM3QixJQUFJLENBQUMsT0FBTyxtQkFBSyxJQUFJLElBQUssSUFBSSxDQUFDLE9BQU8sQ0FBRSxDQUFDO1NBQzFDO0lBQ0gsQ0FBQztDQUNGO0FBbENELG9EQWtDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF4aW9zRXJyb3IsIEF4aW9zUmVxdWVzdENvbmZpZywgQXhpb3NSZXNwb25zZSB9IGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgQmFzZUVycm9yIH0gZnJvbSAndHMtZnJhbWV3b3JrLWNvbW1vbic7XG5pbXBvcnQgeyBDdXN0b2R5UHJvdmlkZXIgfSBmcm9tIFwiLi4vcHJvdmlkZXJcIjtcblxuZXhwb3J0IGNsYXNzIEN1c3RvZHlQcm92aWRlckVycm9yIGV4dGVuZHMgQmFzZUVycm9yIHtcbiAgY29uZmlnPzogQXhpb3NSZXF1ZXN0Q29uZmlnO1xuICByZXNwb25zZT86IEF4aW9zUmVzcG9uc2U7XG4gIHJlcXVlc3Q/OiBhbnk7XG5cbiAgY29uc3RydWN0b3IodHlwZTogQ3VzdG9keVByb3ZpZGVyLCBleGNlcHRpb246IEF4aW9zRXJyb3IgfCBFcnJvcikge1xuICAgIGxldCBkYXRhID0gdW5kZWZpbmVkO1xuXG4gICAgaWYgKGV4Y2VwdGlvblsncmVzcG9uc2UnXSAmJiBleGNlcHRpb25bJ3Jlc3BvbnNlJ11bJ2RhdGEnXSkge1xuICAgICAgZGF0YSA9IGV4Y2VwdGlvblsncmVzcG9uc2UnXVsnZGF0YSddO1xuICAgIH1cblxuICAgIC8vIFByZXBhcmUgZXhjZXB0aW9uIG1lc3NhZ2VcbiAgICBsZXQgbXNnID0gZGF0YSA/IGRhdGEubWVzc2FnZSA6IGV4Y2VwdGlvbi5tZXNzYWdlO1xuICAgIG1zZyA9IG1zZy5yZXBsYWNlKG5ldyBSZWdFeHAoL15cXFtcXGR7M31cXF0gLyksICcnKTtcbiAgICBtc2cgPSBtc2cucmVwbGFjZSgvXFwoc3RhY2tJZFxcOi4qXFwpLywgJycpO1xuXG4gICAgLy8gQ2FsbCBzdXBlciBmb3IgYmFzZSBlcnJvciBjb25zdHJ1Y3Rpb25cbiAgICBzdXBlcihtc2csIHtcbiAgICAgIHByb3ZpZGVyOiB0eXBlLFxuICAgICAgc3RhdHVzOiBleGNlcHRpb25bJ3Jlc3BvbnNlJ11bJ3N0YXR1cyddLFxuICAgICAgdXJsOiBleGNlcHRpb25bJ2NvbmZpZyddWyd1cmwnXSxcbiAgICB9KTtcblxuICAgIC8vIFByZXBhcmUgYWRkaXRpb24gYXhpb3MgZGF0YSwgaWYgYXZhaWxhYmxlXG4gICAgaWYgKGV4Y2VwdGlvblsncmVzcG9uc2UnXSkge1xuICAgICAgY29uc3QgZXJyb3IgPSBleGNlcHRpb24gYXMgQXhpb3NFcnJvcjtcbiAgICAgIHRoaXMucmVzcG9uc2UgPSBlcnJvci5yZXNwb25zZTtcbiAgICAgIHRoaXMucmVxdWVzdCA9IGVycm9yLnJlcXVlc3Q7XG4gICAgICB0aGlzLmNvbmZpZyA9IGVycm9yLmNvbmZpZztcbiAgICAgIHRoaXMuc3RhY2sgPSBleGNlcHRpb24uc3RhY2s7XG4gICAgICB0aGlzLmRldGFpbHMgPSB7IGRhdGEsIC4uLnRoaXMuZGV0YWlscyB9O1xuICAgIH1cbiAgfVxufVxuIl19