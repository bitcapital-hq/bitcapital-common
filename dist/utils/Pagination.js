"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_LIMIT = 25;
/**
 * The extended Array with the pagination data.
 */
class PaginatedArray extends Array {
}
exports.PaginatedArray = PaginatedArray;
class PaginationUtil {
    /**
     * Merge the response data with pagination headers.
     *
     * @param data The input array data
     * @param headers The map of the response headers
     */
    static parse(data = [], headers = {}) {
        data.dataLength = headers["x-data-length"] ? parseInt(headers["x-data-length"], exports.DEFAULT_LIMIT) : undefined;
        data.dataSkip = headers["x-data-skip"] ? parseInt(headers["x-data-skip"], exports.DEFAULT_LIMIT) : undefined;
        data.dataLimit = headers["x-data-limit"] ? parseInt(headers["x-data-limit"], exports.DEFAULT_LIMIT) : undefined;
        return data;
    }
}
exports.PaginationUtil = PaginationUtil;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFnaW5hdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi91dGlscy9QYWdpbmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQWEsUUFBQSxhQUFhLEdBQUcsRUFBRSxDQUFDO0FBMEJoQzs7R0FFRztBQUNILG9CQUErQixTQUFRLEtBQVE7Q0FJOUM7QUFKRCx3Q0FJQztBQUVEO0lBQ0U7Ozs7O09BS0c7SUFDSSxNQUFNLENBQUMsS0FBSyxDQUFJLE9BQTBCLEVBQUUsRUFBRSxVQUFlLEVBQUU7UUFDcEUsSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLEVBQUUscUJBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDM0csSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEVBQUUscUJBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDckcsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLEVBQUUscUJBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDeEcsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0NBQ0Y7QUFiRCx3Q0FhQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBERUZBVUxUX0xJTUlUID0gMjU7XG5cbi8qKlxuICogVXRpbGl0eSBmb3IgaGFuZGxpbmcgc2ltcGxlIHBhZ2luYXRpb24gb3B0aW9ucy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgaW50ZXJmYWNlIFBhZ2luYXRpb24ge1xuICAvKipcbiAgICogVGhlIGNvdW50IG9mIGl0ZW1zIHRvIHNraXAgaW4gdGhlIHN0YXJ0IG9mIHRoZSByZXN1bHRzLlxuICAgKi9cbiAgc2tpcD86IG51bWJlcjtcblxuICAvKipcbiAgICogVGhlIGNvdW50IG9mIGl0ZW1zIGluIGVhY2ggcGFnZSBvZiB0aGUgcmVzdWx0cy5cbiAgICovXG4gIGxpbWl0PzogbnVtYmVyO1xufVxuXG4vKipcbiAqIFBhZ2luYXRpb24gZGF0YSBmb3IgZXh0ZW5kaW5nIHRoZSBBcnJheS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQYWdpbmF0aW9uRGF0YSB7XG4gIGRhdGFMZW5ndGg/OiBudW1iZXI7XG4gIGRhdGFMaW1pdD86IG51bWJlcjtcbiAgZGF0YVNraXA/OiBudW1iZXI7XG59XG5cbi8qKlxuICogVGhlIGV4dGVuZGVkIEFycmF5IHdpdGggdGhlIHBhZ2luYXRpb24gZGF0YS5cbiAqL1xuZXhwb3J0IGNsYXNzIFBhZ2luYXRlZEFycmF5PFQ+IGV4dGVuZHMgQXJyYXk8VD4gaW1wbGVtZW50cyBQYWdpbmF0aW9uRGF0YSB7XG4gIGRhdGFMZW5ndGg/OiBudW1iZXI7XG4gIGRhdGFMaW1pdD86IG51bWJlcjtcbiAgZGF0YVNraXA/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uVXRpbCB7XG4gIC8qKlxuICAgKiBNZXJnZSB0aGUgcmVzcG9uc2UgZGF0YSB3aXRoIHBhZ2luYXRpb24gaGVhZGVycy5cbiAgICpcbiAgICogQHBhcmFtIGRhdGEgVGhlIGlucHV0IGFycmF5IGRhdGFcbiAgICogQHBhcmFtIGhlYWRlcnMgVGhlIG1hcCBvZiB0aGUgcmVzcG9uc2UgaGVhZGVyc1xuICAgKi9cbiAgcHVibGljIHN0YXRpYyBwYXJzZTxUPihkYXRhOiBQYWdpbmF0ZWRBcnJheTxUPiA9IFtdLCBoZWFkZXJzOiBhbnkgPSB7fSk6IFBhZ2luYXRlZEFycmF5PFQ+IHtcbiAgICBkYXRhLmRhdGFMZW5ndGggPSBoZWFkZXJzW1wieC1kYXRhLWxlbmd0aFwiXSA/IHBhcnNlSW50KGhlYWRlcnNbXCJ4LWRhdGEtbGVuZ3RoXCJdLCBERUZBVUxUX0xJTUlUKSA6IHVuZGVmaW5lZDtcbiAgICBkYXRhLmRhdGFTa2lwID0gaGVhZGVyc1tcIngtZGF0YS1za2lwXCJdID8gcGFyc2VJbnQoaGVhZGVyc1tcIngtZGF0YS1za2lwXCJdLCBERUZBVUxUX0xJTUlUKSA6IHVuZGVmaW5lZDtcbiAgICBkYXRhLmRhdGFMaW1pdCA9IGhlYWRlcnNbXCJ4LWRhdGEtbGltaXRcIl0gPyBwYXJzZUludChoZWFkZXJzW1wieC1kYXRhLWxpbWl0XCJdLCBERUZBVUxUX0xJTUlUKSA6IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxufVxuIl19