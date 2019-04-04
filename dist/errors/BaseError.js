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
        if (typeof Error.captureStackTrace === "function") {
            Error.captureStackTrace(this, this.constructor);
        }
        else {
            this.stack = new Error(message).stack;
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
            details: this.details
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUVycm9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbGliL2Vycm9ycy9CYXNlRXJyb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2QkFBNkI7QUFFN0I7OztHQUdHO0FBQ0gsTUFBYSxnQkFBZ0I7SUFHM0IsWUFBWSxJQUFJLEdBQUcsRUFBRTtRQUNuQixLQUFLLE1BQU0sR0FBRyxJQUFJLElBQUksRUFBRTtZQUN0QixJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDdkI7U0FDRjtJQUNILENBQUM7Q0FDRjtBQVZELDRDQVVDO0FBRUQ7Ozs7Ozs7R0FPRztBQUNILE1BQWEsU0FBVSxTQUFRLEtBQUs7SUFnQmxDLFlBQVksT0FBTyxFQUFFLFVBQWUsSUFBSSxnQkFBZ0IsRUFBRTtRQUN4RCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDMUIsS0FBSyxDQUFDLEdBQUcsT0FBTyxjQUFjLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUM7UUFDL0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztRQUNsQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sWUFBWSxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTdGLElBQUksT0FBTyxLQUFLLENBQUMsaUJBQWlCLEtBQUssVUFBVSxFQUFFO1lBQ2pELEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ2pEO2FBQU07WUFDTCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQztTQUN2QztJQUNILENBQUM7SUFFRDs7T0FFRztJQUNJLFFBQVE7UUFDYixPQUFPO1lBQ0wsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztZQUNyQixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1NBQ3RCLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLE1BQU0sQ0FBQyxTQUFTLEdBQUcsS0FBSztRQUM3QixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDNUIsSUFBSSxTQUFTLEVBQUU7WUFDYixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDNUI7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7Q0FDRjtBQXZERCw4QkF1REMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB1dWlkIGZyb20gXCJ1dWlkXCI7XG5cbi8qKlxuICogVGhlIGJhc2UgZXJyb3IgZGV0YWlscyBlbmFibGVzIHRoZSBkZXZlbG9wZXIgdG8gYWRkXG4gKiBzcGVjaWZpYyBtZXRhZGF0YSB0byB0aGVpciBlcnJvcnMuXG4gKi9cbmV4cG9ydCBjbGFzcyBCYXNlRXJyb3JEZXRhaWxzIHtcbiAgW2tleTogc3RyaW5nXTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKGRhdGEgPSB7fSkge1xuICAgIGZvciAoY29uc3Qga2V5IGluIGRhdGEpIHtcbiAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgdGhpc1trZXldID0gZGF0YVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEFuIGVuaGFuY2VkIGVycm9yIGluc3RhbmNlIGZvciB0aGUgVFMgRnJhbWV3b3JrLlxuICogPGJyIC8+XG4gKiBCYXNpYyBmZWF0dXJlczpcbiAqIC0gVW5pcXVlIHN0YWNrIGlkIHVzaW5nIFVVSUQgdjRcbiAqIC0gU2VyaWFsaXplcnM6IHRvT2JqZWN0IGFuZCB0b0pTT05cbiAqIC0gQmV0dGVyIHN0YWNrIHRyYWNlIG1hcHBpbmcgdXNpbmcgXCJjbGVhbi1zdGFja1wiXG4gKi9cbmV4cG9ydCBjbGFzcyBCYXNlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIC8qKlxuICAgKiBUaGUgdW5pcXVlIGV4Y2VwdGlvbiBpZC5cbiAgICovXG4gIHB1YmxpYyBzdGFja0lkOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBlcnJvciBkZXRhaWxzIGZvciBlYXNpZXIgdHJhY2tpbmcgb2YgZXhjZXB0aW9uc1xuICAgKi9cbiAgcHVibGljIGRldGFpbHM6IEJhc2VFcnJvckRldGFpbHM7XG5cbiAgLyoqXG4gICAqIFRoZSBlcnJvciBvcmlnaW5hbCBtZXNzYWdlIHdpdGhvdXQgdGhlIGdlbmVyYXRlZCBtZXRhZGF0YS5cbiAgICovXG4gIHB1YmxpYyBvcmlnaW5hbE1lc3NhZ2U6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihtZXNzYWdlLCBkZXRhaWxzOiBhbnkgPSBuZXcgQmFzZUVycm9yRGV0YWlscygpKSB7XG4gICAgY29uc3Qgc3RhY2tJZCA9IHV1aWQudjQoKTtcbiAgICBzdXBlcihgJHttZXNzYWdlfSAoc3RhY2tJZDogJHtzdGFja0lkfSlgKTtcbiAgICB0aGlzLnN0YWNrSWQgPSBzdGFja0lkO1xuICAgIHRoaXMub3JpZ2luYWxNZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLm5hbWUgPSB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgdGhpcy5kZXRhaWxzID0gZGV0YWlscyBpbnN0YW5jZW9mIEJhc2VFcnJvckRldGFpbHMgPyBkZXRhaWxzIDogbmV3IEJhc2VFcnJvckRldGFpbHMoZGV0YWlscyk7XG5cbiAgICBpZiAodHlwZW9mIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIHRoaXMuY29uc3RydWN0b3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0YWNrID0gbmV3IEVycm9yKG1lc3NhZ2UpLnN0YWNrO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgcGxhaW4gb2JqZWN0IGZvciB0aGlzIGVycm9yIGluc3RhbmNlLlxuICAgKi9cbiAgcHVibGljIHRvT2JqZWN0KCkge1xuICAgIHJldHVybiB7XG4gICAgICBzdGFjazogdGhpcy5zdGFjayxcbiAgICAgIG1lc3NhZ2U6IHRoaXMubWVzc2FnZSxcbiAgICAgIHN0YWNrSWQ6IHRoaXMuc3RhY2tJZCxcbiAgICAgIGRldGFpbHM6IHRoaXMuZGV0YWlsc1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogR2VuZXJhdGVzIGNsZWFuIG9iamVjdCBmb3IgdGhpcyBlcnJvciBpbnN0YW5jZSByZWFkeSBmb3IgSlNPTiBzdHJpbmdpZmljYXRpb24gKG9wdGlvbmFsKS5cbiAgICpcbiAgICogQHBhcmFtIHN0cmluZ2lmeSBGbGFnIHRvIGVuYWJsZSBzdHJpbmdpZmljYXRpb25cbiAgICovXG4gIHB1YmxpYyB0b0pTT04oc3RyaW5naWZ5ID0gZmFsc2UpOiBhbnkge1xuICAgIGNvbnN0IG9iaiA9IHRoaXMudG9PYmplY3QoKTtcbiAgICBpZiAoc3RyaW5naWZ5KSB7XG4gICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2JqKTtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbiAgfVxufVxuIl19