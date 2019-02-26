"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseCustodyFeature_1 = require("../BaseCustodyFeature");
class CustodyBoletoFeature extends BaseCustodyFeature_1.default {
    constructor() {
        super(...arguments);
        this.type = BaseCustodyFeature_1.CustodyFeature.BOLETO;
    }
}
exports.CustodyBoletoFeature = CustodyBoletoFeature;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9keUJvbGV0b0ZlYXR1cmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvcHJvdmlkZXIvZmVhdHVyZXMvQ3VzdG9keUJvbGV0b0ZlYXR1cmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSw4REFBMkU7QUFXM0UsTUFBc0Isb0JBQXFCLFNBQVEsNEJBQWtCO0lBQXJFOztRQUNFLFNBQUksR0FBRyxtQ0FBYyxDQUFDLE1BQU0sQ0FBQztJQTBDL0IsQ0FBQztDQUFBO0FBM0NELG9EQTJDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJvbGV0b1NjaGVtYSwgUGF5bWVudFNjaGVtYSwgV2FsbGV0U2NoZW1hIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5pbXBvcnQgQmFzZUN1c3RvZHlGZWF0dXJlLCB7IEN1c3RvZHlGZWF0dXJlIH0gZnJvbSBcIi4uL0Jhc2VDdXN0b2R5RmVhdHVyZVwiO1xyXG5cclxuZXhwb3J0IHR5cGUgQm9sZXRvUGF5bWVudEV4dHJhID1cclxuICB8IHtcclxuICAgICAgYW1vdW50Pzogc3RyaW5nO1xyXG4gICAgICBkaXNjb3VudD86IG51bWJlcjtcclxuICAgICAgdGF4QW1vdW50PzogbnVtYmVyO1xyXG4gICAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgfVxyXG4gIHwgYW55O1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEN1c3RvZHlCb2xldG9GZWF0dXJlIGV4dGVuZHMgQmFzZUN1c3RvZHlGZWF0dXJlIHtcclxuICB0eXBlID0gQ3VzdG9keUZlYXR1cmUuQk9MRVRPO1xyXG5cclxuICAvKipcclxuICAgKiBHZXRzIGluZm9ybWF0aW9uIGFib3V0IGRlcG9zaXRpbmcgYXNzZXRzIGluIHRoZSBzcGVjaWZpZWQgd2FsbGV0IHVzaW5nXHJcbiAgICogYm9sZXRvcy4gVGhpcyBpcyBhIHV0aWxpdHkgbWV0aG9kIGFuZCBpcyBkaWZmZXJlbnQgZm9yIGVhY2ggcHJvdmlkZXIuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gd2FsbGV0IFRoZSB3YWxsZXQgd2hlcmUgdGhlIGFzc2V0IHdpbGwgYmUgZGVwb3NpdGVkLlxyXG4gICAqL1xyXG4gIHB1YmxpYyBhYnN0cmFjdCBhc3luYyBpbmZvKHdhbGxldDogV2FsbGV0U2NoZW1hLCBleHRyYT86IGFueSk6IFByb21pc2U8YW55PjtcclxuXHJcbiAgLyoqXHJcbiAgICogRW1pdCBhIG5ldyBkZXBvc2l0IEJvbGV0byBpbiB0aGUgY3VzdG9keSB3YWxsZXQsXHJcbiAgICogZG9uZSBmcm9tIG91dHNpZGUgb2YgdGhlIEJpdGNhcGl0YWwgcGxhdGZvcm0sIHN1Y2ggYXMgYSBiYW5raW5nIGRlcG9zaXQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gYW1vdW50IFRoZSBhbW91bnQgdGhhdCB3YXMgZGVwb3NpdGVkXHJcbiAgICogQHBhcmFtIHdhbGxldCBUaGUgd2FsbGV0IGluIHdoaWNoIHRoZSBhbW91bnQgd2FzIGRlcG9zaXRlZCBpbnRvXHJcbiAgICovXHJcbiAgcHVibGljIGFic3RyYWN0IGFzeW5jIGVtaXQoYW1vdW50OiBzdHJpbmcsIHdhbGxldDogV2FsbGV0U2NoZW1hLCBleHRyYT86IGFueSk6IFByb21pc2U8Qm9sZXRvU2NoZW1hPjtcclxuXHJcbiAgLyoqXHJcbiAgICogR2V0cyBCb2xldG8gaW5mb3JtYXRpb24gYmFzZWQgb24gaXRzIGV4dGVybmFsIGlkLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGV4dGVybmFsSWQgVGhlIGJvbGV0byBleHRlcm5hbCBpZGVudGlmaWNhdGlvblxyXG4gICAqL1xyXG4gIHB1YmxpYyBhYnN0cmFjdCBhc3luYyBnZXRCeUlkKGV4dGVybmFsSWQ6IHN0cmluZywgZXh0cmE/OiBhbnkpOiBQcm9taXNlPEJvbGV0b1NjaGVtYSB8IHVuZGVmaW5lZD47XHJcblxyXG4gIC8qKlxyXG4gICAqIFZhbGlkYXRlcyBhbmQgZ2V0cyBib2xldG8gaW5mb3JtYXRpb24gYmFzZWQgb24gaXRzIGJhciBjb2RlXHJcbiAgICpcclxuICAgKiBAcGFyYW0gYmFyY29kZSBUaGUgYm9sZXRvIGJhcmNvZGUgdG8gYmUgdmFsaWRhdGVkXHJcbiAgICogQHBhcmFtIGV4dHJhIFRoZSBleHRyYSBpbmZvcm1hdGlvbiBmb3IgdGhlIGJvbGV0byB2YWxpZGF0aW9uXHJcbiAgICovXHJcbiAgcHVibGljIGFic3RyYWN0IGFzeW5jIHZhbGlkYXRlKGJhcmNvZGU6IHN0cmluZywgZXh0cmE/OiBCb2xldG9QYXltZW50RXh0cmEpOiBQcm9taXNlPGFueT47XHJcblxyXG4gIC8qKlxyXG4gICAqIFBheXMgYSBib2xldG8gYmFzZWQgb24gYSBiYXJDb2RlIHN0cmluZyBhbmQgYSBzb3VyY2Ugd2FsbGV0LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGJhcmNvZGUgVGhlIGJvbGV0byBiYXJjb2RlIHRvIGJlIHBheWVkXHJcbiAgICogQHBhcmFtIHdhbGxldCBUaGUgd2FsbGV0IHRvIGJlIHRoZSBzb3VyY2Ugb2YgdGhlIHBheW1lbnRcclxuICAgKiBAcGFyYW0gZXh0cmEgVGhlIGV4dHJhIGluZm9ybWF0aW9uIGZvciB0aGUgYm9sZXRvIHBheW1lbnRcclxuICAgKi9cclxuICBwdWJsaWMgYWJzdHJhY3QgYXN5bmMgcGF5KGJhcmNvZGU6IHN0cmluZywgd2FsbGV0OiBXYWxsZXRTY2hlbWEsIGV4dHJhPzogQm9sZXRvUGF5bWVudEV4dHJhKTogUHJvbWlzZTxQYXltZW50U2NoZW1hPjtcclxufVxyXG4iXX0=