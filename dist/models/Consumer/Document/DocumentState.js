"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../../base");
const Document_1 = require("../Document");
class DocumentState extends base_1.BaseModel {
    constructor(data = {}) {
        super(data);
        Object.assign(this, data);
        this.document = data.document && new Document_1.Document(data.document);
    }
}
exports.DocumentState = DocumentState;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jdW1lbnRTdGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9tb2RlbHMvQ29uc3VtZXIvRG9jdW1lbnQvRG9jdW1lbnRTdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHdDQUEwQztBQUMxQywwQ0FBdUM7QUFVdkMsTUFBYSxhQUFjLFNBQVEsZ0JBQVM7SUFLMUMsWUFBWSxPQUFxQyxFQUFFO1FBQ2pELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVaLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRTFCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLG1CQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQy9ELENBQUM7Q0FDRjtBQVpELHNDQVlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZU1vZGVsIH0gZnJvbSBcIi4uLy4uLy4uL2Jhc2VcIjtcbmltcG9ydCB7IERvY3VtZW50IH0gZnJvbSBcIi4uL0RvY3VtZW50XCI7XG5pbXBvcnQgeyBEb2N1bWVudFN0YXR1cyB9IGZyb20gXCIuL0RvY3VtZW50U3RhdHVzXCI7XG5pbXBvcnQgeyBEb2N1bWVudFNjaGVtYSB9IGZyb20gXCIuL0RvY3VtZW50XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRG9jdW1lbnRTdGF0ZVNjaGVtYSB7XG4gIGRvY3VtZW50OiBEb2N1bWVudFNjaGVtYTtcbiAgc3RhdHVzOiBEb2N1bWVudFN0YXR1cztcbiAgYWRkaXRpb25hbERhdGE/OiBhbnk7XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudFN0YXRlIGV4dGVuZHMgQmFzZU1vZGVsIGltcGxlbWVudHMgRG9jdW1lbnRTdGF0ZVNjaGVtYSB7XG4gIGRvY3VtZW50OiBEb2N1bWVudDtcbiAgc3RhdHVzOiBEb2N1bWVudFN0YXR1cztcbiAgYWRkaXRpb25hbERhdGE/OiBhbnk7XG5cbiAgY29uc3RydWN0b3IoZGF0YTogUGFydGlhbDxEb2N1bWVudFN0YXRlU2NoZW1hPiA9IHt9KSB7XG4gICAgc3VwZXIoZGF0YSk7XG5cbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xuXG4gICAgdGhpcy5kb2N1bWVudCA9IGRhdGEuZG9jdW1lbnQgJiYgbmV3IERvY3VtZW50KGRhdGEuZG9jdW1lbnQpO1xuICB9XG59XG4iXX0=