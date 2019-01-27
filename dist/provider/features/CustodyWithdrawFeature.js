"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseCustodyFeature_1 = require("../BaseCustodyFeature");
class CustodyWithdrawFeature extends BaseCustodyFeature_1.default {
    constructor() {
        super(...arguments);
        this.type = BaseCustodyFeature_1.CustodyFeature.WITHDRAW;
    }
}
exports.default = CustodyWithdrawFeature;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9keVdpdGhkcmF3RmVhdHVyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9wcm92aWRlci9mZWF0dXJlcy9DdXN0b2R5V2l0aGRyYXdGZWF0dXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsOERBQTJFO0FBRTNFLDRCQUFxRCxTQUFRLDRCQUFrQjtJQUEvRTs7UUFDRSxTQUFJLEdBQUcsbUNBQWMsQ0FBQyxRQUFRLENBQUM7SUE0QmpDLENBQUM7Q0FBQTtBQTdCRCx5Q0E2QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYXltZW50U2NoZW1hLCBXYWxsZXQgfSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XG5pbXBvcnQgQmFzZUN1c3RvZHlGZWF0dXJlLCB7IEN1c3RvZHlGZWF0dXJlIH0gZnJvbSBcIi4uL0Jhc2VDdXN0b2R5RmVhdHVyZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBDdXN0b2R5V2l0aGRyYXdGZWF0dXJlIGV4dGVuZHMgQmFzZUN1c3RvZHlGZWF0dXJlIHtcbiAgdHlwZSA9IEN1c3RvZHlGZWF0dXJlLldJVEhEUkFXO1xuXG4gIC8qKlxuICAgKiBHZXRzIGluZm9ybWF0aW9uIGFib3V0IHdpdGhkcmF3aW5nIGFzc2V0cyBmcm9tIHRoZSBzcGVjaWZpZWQgd2FsbGV0LiBUaGlzXG4gICAqIGlzIGEgdXRpbGl0eSBtZXRob2QgYW5kIGlzIGRpZmZlcmVudCBmb3IgZWFjaCBwcm92aWRlci5cbiAgICogXG4gICAqIEBwYXJhbSB3YWxsZXQgVGhlIHdhbGxldCB3aGVyZSB0aGUgYXNzZXQgd2lsbCBiZSBkZXBvc2l0ZWQuXG4gICAqL1xuICBwdWJsaWMgYWJzdHJhY3QgYXN5bmMgaW5mbyh3YWxsZXQ6IFdhbGxldCk6IFByb21pc2U8YW55PjtcblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBzeW5jaHJvbm91cyB3aXRoZHJhd2FsIGluIHRoZSBjdXN0b2R5IHdhbGxldCwgbWF5XG4gICAqIG5vdCBiZSBhdmFpbGFibGUgZm9yIGFsbCBwcm92aWRlcnMuXG4gICAqIFxuICAgKiBAcGFyYW0gYW1vdW50IFRoZSBhbW91bnQgdG8gYmUgd2l0aGRyYXdlZFxuICAgKiBAcGFyYW0gd2FsbGV0IFRoZSB3YWxsZXQgdG8gYmUgd2l0aGRyYXdlZCBmcm9tXG4gICAqL1xuICBwdWJsaWMgYWJzdHJhY3QgYXN5bmMgd2l0aGRyYXc/KGFtb3VudDogc3RyaW5nLCB3YWxsZXQ6IFdhbGxldCwgZXh0cmE/OiBhbnkpOiBQcm9taXNlPFBheW1lbnRTY2hlbWE+O1xuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBhbiBhc3luY2hyb25vdXMgd2l0aGRyYXcgaW4gdGhlIGN1c3RvZHkgd2FsbGV0LCBcbiAgICogZG9uZSBmcm9tIG91dHNpZGUgb2YgdGhlIEJpdGNhcGl0YWwgcGxhdGZvcm0sIHN1Y2ggYXMgYSBiYW5raW5nIHdpdGhkcmF3LlxuICAgKiBcbiAgICogQHBhcmFtIGFtb3VudCBUaGUgYW1vdW50IHRoYXQgd2FzIHdpdGhkcmF3ZWRcbiAgICogQHBhcmFtIHdhbGxldCBUaGUgd2FsbGV0IGluIHdoaWNoIHRoZSBhbW91bnQgd2FzIHdpdGhkcmF3ZWQgZnJvbVxuICAgKi9cbiAgcHVibGljIGFic3RyYWN0IGFzeW5jIG9uV2l0aGRyYXcoYW1vdW50OiBzdHJpbmcsIHdhbGxldDogV2FsbGV0KTogUHJvbWlzZTxQYXltZW50U2NoZW1hPjtcblxufSJdfQ==