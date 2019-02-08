"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
class Http {
    constructor(options) {
        this.options = options;
        this.client = options.client || axios_1.default.create(options);
    }
    /**
     * Registers an array of interceptors in a single operation.
     *
     * @param interceptors The array of interceptors instances
     */
    interceptors(interceptors) {
        return interceptors.map(i => this.interceptor(i));
    }
    /**
     * Registers a single interceptor in the Http service.
     *
     * @param intercetor The interceptor instance
     */
    interceptor(intercetor) {
        // Bind interceptor methods
        this.client.interceptors.request.use(intercetor.request.bind(intercetor));
        this.client.interceptors.response.use(intercetor.response.bind(intercetor), intercetor.error.bind(intercetor));
    }
    /**
     * Performs a GET request using client.
     *
     * @param {string} url The url for the request.
     * @param {Object | string} [data] The query string data.
     * @param {Object} [options] The request options for the Axios instance.
     *
     * @returns {Promise<any>}
     */
    get(url, data, options) {
        return this.client.get(url, Object.assign({ params: data }, options));
    }
    /**
     * Performs a POST request using client.
     *
     * @param {string} url The url for the request.
     * @param {Object | string} [data] The query string data.
     * @param {Object} [options] The request options for the Axios instance.
     *
     * @returns {Promise<any>}
     */
    post(url, data, options) {
        return this.client.post(url, data, options);
    }
    /**
     * Performs a PUT request using client.
     *
     * @param {string} url The url for the request.
     * @param {Object | string} [data] The query string data.
     * @param {Object} [options] The request options for the Axios instance.
     *
     * @returns {Promise<any>}
     */
    put(url, data, options) {
        return this.client.put(url, data, options);
    }
    /**
     * Performs a DELETE request using client.
     *
     * @param {string} url The url for the request.
     * @param {Object} [options] The request options for the Axios instance.
     *
     * @returns {Promise<any>}
     */
    delete(url, options) {
        return this.client.delete(url, options);
    }
}
exports.Http = Http;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSHR0cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9iYXNlL2h0dHAvSHR0cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlDQUFnRjtBQVdoRixNQUFhLElBQUk7SUFJZixZQUFZLE9BQW9CO1FBQzlCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sSUFBSSxlQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsWUFBWSxDQUFDLFlBQStCO1FBQzFDLE9BQU8sWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILFdBQVcsQ0FBQyxVQUEyQjtRQUNyQywyQkFBMkI7UUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQzFFLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUNqSCxDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7SUFDSCxHQUFHLENBQUMsR0FBVyxFQUFFLElBQXNCLEVBQUUsT0FBNEI7UUFDbkUsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsZ0JBQUUsTUFBTSxFQUFFLElBQUksSUFBSyxPQUFPLENBQVMsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNILElBQUksQ0FBQyxHQUFXLEVBQUUsSUFBc0IsRUFBRSxPQUE0QjtRQUNwRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVEOzs7Ozs7OztPQVFHO0lBQ0gsR0FBRyxDQUFDLEdBQVcsRUFBRSxJQUFzQixFQUFFLE9BQTRCO1FBQ25FLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNILE1BQU0sQ0FBQyxHQUFXLEVBQUUsT0FBNEI7UUFDOUMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDMUMsQ0FBQztDQUNGO0FBL0VELG9CQStFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBeGlvcywgeyBBeGlvc0luc3RhbmNlLCBBeGlvc1JlcXVlc3RDb25maWcsIEF4aW9zUmVzcG9uc2UgfSBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgSHR0cEludGVyY2VwdG9yIH0gZnJvbSBcIi4vSHR0cEludGVyY2VwdG9yXCI7XHJcblxyXG5leHBvcnQgeyBIdHRwSW50ZXJjZXB0b3IgfTtcclxuZXhwb3J0IHR5cGUgSHR0cENsaWVudCA9IEF4aW9zSW5zdGFuY2U7XHJcbmV4cG9ydCB0eXBlIEh0dHBSZXF1ZXN0T3B0aW9ucyA9IEF4aW9zUmVxdWVzdENvbmZpZztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSHR0cE9wdGlvbnMgZXh0ZW5kcyBIdHRwUmVxdWVzdE9wdGlvbnMge1xyXG4gIGNsaWVudD86IEh0dHBDbGllbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBIdHRwIHtcclxuICBwcm90ZWN0ZWQgb3B0aW9uczogSHR0cE9wdGlvbnM7XHJcbiAgcHJvdGVjdGVkIGNsaWVudDogSHR0cENsaWVudDtcclxuXHJcbiAgY29uc3RydWN0b3Iob3B0aW9uczogSHR0cE9wdGlvbnMpIHtcclxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgICB0aGlzLmNsaWVudCA9IG9wdGlvbnMuY2xpZW50IHx8IEF4aW9zLmNyZWF0ZShvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlZ2lzdGVycyBhbiBhcnJheSBvZiBpbnRlcmNlcHRvcnMgaW4gYSBzaW5nbGUgb3BlcmF0aW9uLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGludGVyY2VwdG9ycyBUaGUgYXJyYXkgb2YgaW50ZXJjZXB0b3JzIGluc3RhbmNlc1xyXG4gICAqL1xyXG4gIGludGVyY2VwdG9ycyhpbnRlcmNlcHRvcnM6IEh0dHBJbnRlcmNlcHRvcltdKSB7XHJcbiAgICByZXR1cm4gaW50ZXJjZXB0b3JzLm1hcChpID0+IHRoaXMuaW50ZXJjZXB0b3IoaSkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVnaXN0ZXJzIGEgc2luZ2xlIGludGVyY2VwdG9yIGluIHRoZSBIdHRwIHNlcnZpY2UuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gaW50ZXJjZXRvciBUaGUgaW50ZXJjZXB0b3IgaW5zdGFuY2VcclxuICAgKi9cclxuICBpbnRlcmNlcHRvcihpbnRlcmNldG9yOiBIdHRwSW50ZXJjZXB0b3IpIHtcclxuICAgIC8vIEJpbmQgaW50ZXJjZXB0b3IgbWV0aG9kc1xyXG4gICAgdGhpcy5jbGllbnQuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKGludGVyY2V0b3IucmVxdWVzdC5iaW5kKGludGVyY2V0b3IpKTtcclxuICAgIHRoaXMuY2xpZW50LmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UoaW50ZXJjZXRvci5yZXNwb25zZS5iaW5kKGludGVyY2V0b3IpLCBpbnRlcmNldG9yLmVycm9yLmJpbmQoaW50ZXJjZXRvcikpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUGVyZm9ybXMgYSBHRVQgcmVxdWVzdCB1c2luZyBjbGllbnQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSB1cmwgZm9yIHRoZSByZXF1ZXN0LlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0IHwgc3RyaW5nfSBbZGF0YV0gVGhlIHF1ZXJ5IHN0cmluZyBkYXRhLlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gVGhlIHJlcXVlc3Qgb3B0aW9ucyBmb3IgdGhlIEF4aW9zIGluc3RhbmNlLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBnZXQodXJsOiBzdHJpbmcsIGRhdGE/OiBPYmplY3QgfCBzdHJpbmcsIG9wdGlvbnM/OiBIdHRwUmVxdWVzdE9wdGlvbnMpOiBQcm9taXNlPEF4aW9zUmVzcG9uc2U+IHtcclxuICAgIHJldHVybiB0aGlzLmNsaWVudC5nZXQodXJsLCB7IHBhcmFtczogZGF0YSwgLi4ub3B0aW9ucyB9IGFzIGFueSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBQZXJmb3JtcyBhIFBPU1QgcmVxdWVzdCB1c2luZyBjbGllbnQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSB1cmwgZm9yIHRoZSByZXF1ZXN0LlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0IHwgc3RyaW5nfSBbZGF0YV0gVGhlIHF1ZXJ5IHN0cmluZyBkYXRhLlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gVGhlIHJlcXVlc3Qgb3B0aW9ucyBmb3IgdGhlIEF4aW9zIGluc3RhbmNlLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBwb3N0KHVybDogc3RyaW5nLCBkYXRhPzogT2JqZWN0IHwgc3RyaW5nLCBvcHRpb25zPzogSHR0cFJlcXVlc3RPcHRpb25zKTogUHJvbWlzZTxBeGlvc1Jlc3BvbnNlPiB7XHJcbiAgICByZXR1cm4gdGhpcy5jbGllbnQucG9zdCh1cmwsIGRhdGEsIG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUGVyZm9ybXMgYSBQVVQgcmVxdWVzdCB1c2luZyBjbGllbnQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSB1cmwgZm9yIHRoZSByZXF1ZXN0LlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0IHwgc3RyaW5nfSBbZGF0YV0gVGhlIHF1ZXJ5IHN0cmluZyBkYXRhLlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gVGhlIHJlcXVlc3Qgb3B0aW9ucyBmb3IgdGhlIEF4aW9zIGluc3RhbmNlLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBwdXQodXJsOiBzdHJpbmcsIGRhdGE/OiBPYmplY3QgfCBzdHJpbmcsIG9wdGlvbnM/OiBIdHRwUmVxdWVzdE9wdGlvbnMpOiBQcm9taXNlPEF4aW9zUmVzcG9uc2U+IHtcclxuICAgIHJldHVybiB0aGlzLmNsaWVudC5wdXQodXJsLCBkYXRhLCBvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFBlcmZvcm1zIGEgREVMRVRFIHJlcXVlc3QgdXNpbmcgY2xpZW50LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgdXJsIGZvciB0aGUgcmVxdWVzdC5cclxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIFRoZSByZXF1ZXN0IG9wdGlvbnMgZm9yIHRoZSBBeGlvcyBpbnN0YW5jZS5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgZGVsZXRlKHVybDogc3RyaW5nLCBvcHRpb25zPzogSHR0cFJlcXVlc3RPcHRpb25zKTogUHJvbWlzZTxBeGlvc1Jlc3BvbnNlPiB7XHJcbiAgICByZXR1cm4gdGhpcy5jbGllbnQuZGVsZXRlKHVybCwgb3B0aW9ucyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==