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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jdW1lbnRTdGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9tb2RlbHMvQ29uc3VtZXIvRG9jdW1lbnQvRG9jdW1lbnRTdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHdDQUEwQztBQUMxQywwQ0FBdUM7QUFVdkMsTUFBYSxhQUFjLFNBQVEsZ0JBQVM7SUFLMUMsWUFBWSxPQUFxQyxFQUFFO1FBQ2pELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNaLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLG1CQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQy9ELENBQUM7Q0FDRjtBQVZELHNDQVVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZU1vZGVsIH0gZnJvbSBcIi4uLy4uLy4uL2Jhc2VcIjtcclxuaW1wb3J0IHsgRG9jdW1lbnQgfSBmcm9tIFwiLi4vRG9jdW1lbnRcIjtcclxuaW1wb3J0IHsgRG9jdW1lbnRTdGF0dXMgfSBmcm9tIFwiLi9Eb2N1bWVudFN0YXR1c1wiO1xyXG5pbXBvcnQgeyBEb2N1bWVudFNjaGVtYSB9IGZyb20gXCIuL0RvY3VtZW50XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERvY3VtZW50U3RhdGVTY2hlbWEge1xyXG4gIGRvY3VtZW50OiBEb2N1bWVudFNjaGVtYTtcclxuICBzdGF0dXM6IERvY3VtZW50U3RhdHVzO1xyXG4gIGFkZGl0aW9uYWxEYXRhPzogYW55O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRTdGF0ZSBleHRlbmRzIEJhc2VNb2RlbCBpbXBsZW1lbnRzIERvY3VtZW50U3RhdGVTY2hlbWEge1xyXG4gIGRvY3VtZW50OiBEb2N1bWVudDtcclxuICBzdGF0dXM6IERvY3VtZW50U3RhdHVzO1xyXG4gIGFkZGl0aW9uYWxEYXRhPzogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcihkYXRhOiBQYXJ0aWFsPERvY3VtZW50U3RhdGVTY2hlbWE+ID0ge30pIHtcclxuICAgIHN1cGVyKGRhdGEpO1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcclxuICAgIHRoaXMuZG9jdW1lbnQgPSBkYXRhLmRvY3VtZW50ICYmIG5ldyBEb2N1bWVudChkYXRhLmRvY3VtZW50KTtcclxuICB9XHJcbn1cclxuIl19