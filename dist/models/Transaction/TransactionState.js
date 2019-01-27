"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Transaction_1 = require("./Transaction");
const base_1 = require("../../base");
class TransactionState extends base_1.BaseModel {
    constructor(data = {}) {
        super(data);
        Object.assign(this, data);
        this.consumer = data.consumer && new Transaction_1.default(data.consumer);
    }
}
exports.TransactionState = TransactionState;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHJhbnNhY3Rpb25TdGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9tb2RlbHMvVHJhbnNhY3Rpb24vVHJhbnNhY3Rpb25TdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtDQUF3QztBQUV4QyxxQ0FBdUM7QUFRdkMsTUFBYSxnQkFBaUIsU0FBUSxnQkFBUztJQUs3QyxZQUFZLE9BQXdDLEVBQUU7UUFDcEQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRVosTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUkscUJBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEUsQ0FBQztDQUNGO0FBWkQsNENBWUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhbnNhY3Rpb24gZnJvbSBcIi4vVHJhbnNhY3Rpb25cIjtcbmltcG9ydCB7IFRyYW5zYWN0aW9uU3RhdHVzIH0gZnJvbSBcIi4vVHJhbnNhY3Rpb25TdGF0dXNcIjtcbmltcG9ydCB7IEJhc2VNb2RlbCB9IGZyb20gXCIuLi8uLi9iYXNlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhbnNhY3Rpb25TdGF0ZVNjaGVtYSB7XG4gIGNvbnN1bWVyOiBUcmFuc2FjdGlvbjtcbiAgc3RhdHVzOiBUcmFuc2FjdGlvblN0YXR1cztcbiAgYWRkaXRpb25hbERhdGE/OiBhbnk7XG59XG5cbmV4cG9ydCBjbGFzcyBUcmFuc2FjdGlvblN0YXRlIGV4dGVuZHMgQmFzZU1vZGVsIGltcGxlbWVudHMgVHJhbnNhY3Rpb25TdGF0ZVNjaGVtYSB7XG4gIGNvbnN1bWVyOiBUcmFuc2FjdGlvbjtcbiAgc3RhdHVzOiBUcmFuc2FjdGlvblN0YXR1cztcbiAgYWRkaXRpb25hbERhdGE/OiBhbnk7XG5cbiAgY29uc3RydWN0b3IoZGF0YTogUGFydGlhbDxUcmFuc2FjdGlvblN0YXRlU2NoZW1hPiA9IHt9KSB7XG4gICAgc3VwZXIoZGF0YSk7XG5cbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xuXG4gICAgdGhpcy5jb25zdW1lciA9IGRhdGEuY29uc3VtZXIgJiYgbmV3IFRyYW5zYWN0aW9uKGRhdGEuY29uc3VtZXIpO1xuICB9XG59XG4iXX0=