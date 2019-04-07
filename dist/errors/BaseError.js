"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid = require("uuid");
/**
 * The base error details enables the developer to add
 * specific metadata to their errors.
 */
class BaseErrorDetails {
    constructor(data = {}) {
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                this[key] = data[key];
            }
        }
    }
}
exports.BaseErrorDetails = BaseErrorDetails;
/**
 * An enhanced error instance for the TS Framework.
 * <br />
 * Basic features:
 * - Unique stack id using UUID v4
 * - Serializers: toObject and toJSON
 * - Better stack trace mapping using "clean-stack"
 */
class BaseError extends Error {
    constructor(message, details = new BaseErrorDetails()) {
        const stackId = uuid.v4();
        super(`${message} (stackId: ${stackId})`);
        this.stackId = stackId;
        this.originalMessage = message;
        this.name = this.constructor.name;
        this.details = details instanceof BaseErrorDetails ? details : new BaseErrorDetails(details);
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, this.constructor);
        }
        else {
            this.stack = (new Error(message)).stack;
        }
    }
    /**
     * Generates plain object for this error instance.
     */
    toObject() {
        return {
            stack: this.stack,
            message: this.message,
            stackId: this.stackId,
            details: this.details,
        };
    }
    /**
     * Generates clean object for this error instance ready for JSON stringification (optional).
     *
     * @param stringify Flag to enable stringification
     */
    toJSON(stringify = false) {
        const obj = this.toObject();
        if (stringify) {
            return JSON.stringify(obj);
        }
        return obj;
    }
}
exports.BaseError = BaseError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUVycm9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbGliL2Vycm9ycy9CYXNlRXJyb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2QkFBNkI7QUFFN0I7OztHQUdHO0FBQ0gsTUFBYSxnQkFBZ0I7SUFHM0IsWUFBWSxJQUFJLEdBQUcsRUFBRTtRQUNuQixLQUFLLE1BQU0sR0FBRyxJQUFJLElBQUksRUFBRTtZQUN0QixJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDdkI7U0FDRjtJQUNILENBQUM7Q0FDRjtBQVZELDRDQVVDO0FBRUQ7Ozs7Ozs7R0FPRztBQUNILE1BQWEsU0FBVSxTQUFRLEtBQUs7SUFnQmxDLFlBQVksT0FBTyxFQUFFLFVBQWUsSUFBSSxnQkFBZ0IsRUFBRTtRQUN4RCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDMUIsS0FBSyxDQUFDLEdBQUcsT0FBTyxjQUFjLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUM7UUFDL0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztRQUNsQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sWUFBWSxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTdGLElBQUksT0FBTyxLQUFLLENBQUMsaUJBQWlCLEtBQUssVUFBVSxFQUFFO1lBQ2pELEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ2pEO2FBQU07WUFDTCxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7U0FDekM7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxRQUFRO1FBQ2IsT0FBTztZQUNMLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3JCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztTQUN0QixDQUFDO0lBQ0osQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxNQUFNLENBQUMsU0FBUyxHQUFHLEtBQUs7UUFDN0IsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzVCLElBQUksU0FBUyxFQUFFO1lBQ2IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzVCO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0NBQ0Y7QUF2REQsOEJBdURDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgdXVpZCBmcm9tICd1dWlkJztcblxuLyoqXG4gKiBUaGUgYmFzZSBlcnJvciBkZXRhaWxzIGVuYWJsZXMgdGhlIGRldmVsb3BlciB0byBhZGRcbiAqIHNwZWNpZmljIG1ldGFkYXRhIHRvIHRoZWlyIGVycm9ycy5cbiAqL1xuZXhwb3J0IGNsYXNzIEJhc2VFcnJvckRldGFpbHMge1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoZGF0YSA9IHt9KSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gZGF0YSkge1xuICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICB0aGlzW2tleV0gPSBkYXRhW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQW4gZW5oYW5jZWQgZXJyb3IgaW5zdGFuY2UgZm9yIHRoZSBUUyBGcmFtZXdvcmsuXG4gKiA8YnIgLz5cbiAqIEJhc2ljIGZlYXR1cmVzOlxuICogLSBVbmlxdWUgc3RhY2sgaWQgdXNpbmcgVVVJRCB2NFxuICogLSBTZXJpYWxpemVyczogdG9PYmplY3QgYW5kIHRvSlNPTlxuICogLSBCZXR0ZXIgc3RhY2sgdHJhY2UgbWFwcGluZyB1c2luZyBcImNsZWFuLXN0YWNrXCJcbiAqL1xuZXhwb3J0IGNsYXNzIEJhc2VFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgLyoqXG4gICAqIFRoZSB1bmlxdWUgZXhjZXB0aW9uIGlkLlxuICAgKi9cbiAgcHVibGljIHN0YWNrSWQ6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIGVycm9yIGRldGFpbHMgZm9yIGVhc2llciB0cmFja2luZyBvZiBleGNlcHRpb25zXG4gICAqL1xuICBwdWJsaWMgZGV0YWlsczogQmFzZUVycm9yRGV0YWlscztcblxuICAvKipcbiAgICogVGhlIGVycm9yIG9yaWdpbmFsIG1lc3NhZ2Ugd2l0aG91dCB0aGUgZ2VuZXJhdGVkIG1ldGFkYXRhLlxuICAgKi9cbiAgcHVibGljIG9yaWdpbmFsTWVzc2FnZTogc3RyaW5nO1xuICBcbiAgY29uc3RydWN0b3IobWVzc2FnZSwgZGV0YWlsczogYW55ID0gbmV3IEJhc2VFcnJvckRldGFpbHMoKSkge1xuICAgIGNvbnN0IHN0YWNrSWQgPSB1dWlkLnY0KCk7XG4gICAgc3VwZXIoYCR7bWVzc2FnZX0gKHN0YWNrSWQ6ICR7c3RhY2tJZH0pYCk7XG4gICAgdGhpcy5zdGFja0lkID0gc3RhY2tJZDtcbiAgICB0aGlzLm9yaWdpbmFsTWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgdGhpcy5uYW1lID0gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lO1xuICAgIHRoaXMuZGV0YWlscyA9IGRldGFpbHMgaW5zdGFuY2VvZiBCYXNlRXJyb3JEZXRhaWxzID8gZGV0YWlscyA6IG5ldyBCYXNlRXJyb3JEZXRhaWxzKGRldGFpbHMpO1xuXG4gICAgaWYgKHR5cGVvZiBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgdGhpcy5jb25zdHJ1Y3Rvcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RhY2sgPSAobmV3IEVycm9yKG1lc3NhZ2UpKS5zdGFjaztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2VuZXJhdGVzIHBsYWluIG9iamVjdCBmb3IgdGhpcyBlcnJvciBpbnN0YW5jZS5cbiAgICovXG4gIHB1YmxpYyB0b09iamVjdCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhY2s6IHRoaXMuc3RhY2ssXG4gICAgICBtZXNzYWdlOiB0aGlzLm1lc3NhZ2UsXG4gICAgICBzdGFja0lkOiB0aGlzLnN0YWNrSWQsXG4gICAgICBkZXRhaWxzOiB0aGlzLmRldGFpbHMsXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgY2xlYW4gb2JqZWN0IGZvciB0aGlzIGVycm9yIGluc3RhbmNlIHJlYWR5IGZvciBKU09OIHN0cmluZ2lmaWNhdGlvbiAob3B0aW9uYWwpLlxuICAgKlxuICAgKiBAcGFyYW0gc3RyaW5naWZ5IEZsYWcgdG8gZW5hYmxlIHN0cmluZ2lmaWNhdGlvblxuICAgKi9cbiAgcHVibGljIHRvSlNPTihzdHJpbmdpZnkgPSBmYWxzZSk6IGFueSB7XG4gICAgY29uc3Qgb2JqID0gdGhpcy50b09iamVjdCgpO1xuICAgIGlmIChzdHJpbmdpZnkpIHtcbiAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvYmopO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xuICB9XG59XG4iXX0=