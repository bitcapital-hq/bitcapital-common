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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9keUJvbGV0b0ZlYXR1cmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvcHJvdmlkZXIvZmVhdHVyZXMvQ3VzdG9keUJvbGV0b0ZlYXR1cmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSw4REFBMkU7QUFXM0UsTUFBc0Isb0JBQXFCLFNBQVEsNEJBQWtCO0lBQXJFOztRQUNFLFNBQUksR0FBRyxtQ0FBYyxDQUFDLE1BQU0sQ0FBQztJQTBDL0IsQ0FBQztDQUFBO0FBM0NELG9EQTJDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJvbGV0b1NjaGVtYSwgUGF5bWVudFNjaGVtYSwgV2FsbGV0U2NoZW1hIH0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xuaW1wb3J0IEJhc2VDdXN0b2R5RmVhdHVyZSwgeyBDdXN0b2R5RmVhdHVyZSB9IGZyb20gXCIuLi9CYXNlQ3VzdG9keUZlYXR1cmVcIjtcblxuZXhwb3J0IHR5cGUgQm9sZXRvUGF5bWVudEV4dHJhID1cbiAgfCB7XG4gICAgICBhbW91bnQ/OiBzdHJpbmc7XG4gICAgICBkaXNjb3VudD86IG51bWJlcjtcbiAgICAgIHRheEFtb3VudD86IG51bWJlcjtcbiAgICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgfVxuICB8IGFueTtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEN1c3RvZHlCb2xldG9GZWF0dXJlIGV4dGVuZHMgQmFzZUN1c3RvZHlGZWF0dXJlIHtcbiAgdHlwZSA9IEN1c3RvZHlGZWF0dXJlLkJPTEVUTztcblxuICAvKipcbiAgICogR2V0cyBpbmZvcm1hdGlvbiBhYm91dCBkZXBvc2l0aW5nIGFzc2V0cyBpbiB0aGUgc3BlY2lmaWVkIHdhbGxldCB1c2luZ1xuICAgKiBib2xldG9zLiBUaGlzIGlzIGEgdXRpbGl0eSBtZXRob2QgYW5kIGlzIGRpZmZlcmVudCBmb3IgZWFjaCBwcm92aWRlci5cbiAgICpcbiAgICogQHBhcmFtIHdhbGxldCBUaGUgd2FsbGV0IHdoZXJlIHRoZSBhc3NldCB3aWxsIGJlIGRlcG9zaXRlZC5cbiAgICovXG4gIHB1YmxpYyBhYnN0cmFjdCBhc3luYyBpbmZvKHdhbGxldDogV2FsbGV0U2NoZW1hLCBleHRyYT86IGFueSk6IFByb21pc2U8YW55PjtcblxuICAvKipcbiAgICogRW1pdCBhIG5ldyBkZXBvc2l0IEJvbGV0byBpbiB0aGUgY3VzdG9keSB3YWxsZXQsXG4gICAqIGRvbmUgZnJvbSBvdXRzaWRlIG9mIHRoZSBCaXRjYXBpdGFsIHBsYXRmb3JtLCBzdWNoIGFzIGEgYmFua2luZyBkZXBvc2l0LlxuICAgKlxuICAgKiBAcGFyYW0gYW1vdW50IFRoZSBhbW91bnQgdGhhdCB3YXMgZGVwb3NpdGVkXG4gICAqIEBwYXJhbSB3YWxsZXQgVGhlIHdhbGxldCBpbiB3aGljaCB0aGUgYW1vdW50IHdhcyBkZXBvc2l0ZWQgaW50b1xuICAgKi9cbiAgcHVibGljIGFic3RyYWN0IGFzeW5jIGVtaXQoYW1vdW50OiBzdHJpbmcsIHdhbGxldDogV2FsbGV0U2NoZW1hLCBleHRyYT86IGFueSk6IFByb21pc2U8Qm9sZXRvU2NoZW1hPjtcblxuICAvKipcbiAgICogR2V0cyBCb2xldG8gaW5mb3JtYXRpb24gYmFzZWQgb24gaXRzIGV4dGVybmFsIGlkLlxuICAgKlxuICAgKiBAcGFyYW0gZXh0ZXJuYWxJZCBUaGUgYm9sZXRvIGV4dGVybmFsIGlkZW50aWZpY2F0aW9uXG4gICAqL1xuICBwdWJsaWMgYWJzdHJhY3QgYXN5bmMgZ2V0QnlJZChleHRlcm5hbElkOiBzdHJpbmcsIGV4dHJhPzogYW55KTogUHJvbWlzZTxCb2xldG9TY2hlbWEgfCB1bmRlZmluZWQ+O1xuXG4gIC8qKlxuICAgKiBWYWxpZGF0ZXMgYW5kIGdldHMgYm9sZXRvIGluZm9ybWF0aW9uIGJhc2VkIG9uIGl0cyBiYXIgY29kZVxuICAgKlxuICAgKiBAcGFyYW0gYmFyY29kZSBUaGUgYm9sZXRvIGJhcmNvZGUgdG8gYmUgdmFsaWRhdGVkXG4gICAqIEBwYXJhbSBleHRyYSBUaGUgZXh0cmEgaW5mb3JtYXRpb24gZm9yIHRoZSBib2xldG8gdmFsaWRhdGlvblxuICAgKi9cbiAgcHVibGljIGFic3RyYWN0IGFzeW5jIHZhbGlkYXRlKGJhcmNvZGU6IHN0cmluZywgZXh0cmE/OiBCb2xldG9QYXltZW50RXh0cmEpOiBQcm9taXNlPGFueT47XG5cbiAgLyoqXG4gICAqIFBheXMgYSBib2xldG8gYmFzZWQgb24gYSBiYXJDb2RlIHN0cmluZyBhbmQgYSBzb3VyY2Ugd2FsbGV0LlxuICAgKlxuICAgKiBAcGFyYW0gYmFyY29kZSBUaGUgYm9sZXRvIGJhcmNvZGUgdG8gYmUgcGF5ZWRcbiAgICogQHBhcmFtIHdhbGxldCBUaGUgd2FsbGV0IHRvIGJlIHRoZSBzb3VyY2Ugb2YgdGhlIHBheW1lbnRcbiAgICogQHBhcmFtIGV4dHJhIFRoZSBleHRyYSBpbmZvcm1hdGlvbiBmb3IgdGhlIGJvbGV0byBwYXltZW50XG4gICAqL1xuICBwdWJsaWMgYWJzdHJhY3QgYXN5bmMgcGF5KGJhcmNvZGU6IHN0cmluZywgd2FsbGV0OiBXYWxsZXRTY2hlbWEsIGV4dHJhPzogQm9sZXRvUGF5bWVudEV4dHJhKTogUHJvbWlzZTxQYXltZW50U2NoZW1hPjtcbn1cbiJdfQ==