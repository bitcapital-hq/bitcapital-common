"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = require("class-validator");
const base_1 = require("../../../base");
const Consumer_1 = require("../Consumer");
const DocumentState_1 = require("./DocumentState");
const DocumentStatus_1 = require("./DocumentStatus");
const DocumentType_1 = require("./DocumentType");
class Document extends base_1.BaseModel {
    constructor(data = {}) {
        super(data);
        this.consumer = undefined;
        this.type = undefined;
        this.status = undefined;
        this.number = undefined;
        this.front = undefined;
        this.back = undefined;
        this.selfie = undefined;
        this.expiresAt = undefined;
        this.states = undefined;
        Object.assign(this, data);
        this.expiresAt = data.verifiedAt && new Date(data.verifiedAt);
        this.consumer = data.consumer && new Consumer_1.Consumer(data.consumer);
        this.states = data.states && data.states.map(state => new DocumentState_1.DocumentState(state));
    }
}
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Consumer_1.Consumer)
], Document.prototype, "consumer", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsEnum(DocumentType_1.DocumentType),
    __metadata("design:type", String)
], Document.prototype, "type", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsEnum(DocumentStatus_1.DocumentStatus),
    __metadata("design:type", String)
], Document.prototype, "status", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", String)
], Document.prototype, "number", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsBase64(),
    __metadata("design:type", String)
], Document.prototype, "front", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsBase64(),
    __metadata("design:type", String)
], Document.prototype, "back", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsBase64(),
    __metadata("design:type", String)
], Document.prototype, "selfie", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsDate(),
    class_validator_1.MinDate(new Date()) // Don't allow expired documents
    ,
    __metadata("design:type", Date)
], Document.prototype, "expiresAt", void 0);
__decorate([
    class_validator_1.IsOptional(),
    __metadata("design:type", Array)
], Document.prototype, "states", void 0);
exports.Document = Document;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jdW1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9saWIvbW9kZWxzL0NvbnN1bWVyL0RvY3VtZW50L0RvY3VtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscURBQTRGO0FBQzVGLHdDQUEyRDtBQUMzRCwwQ0FBdUQ7QUFDdkQsbURBQXFFO0FBQ3JFLHFEQUFrRDtBQUNsRCxpREFBOEM7QUFjOUMsTUFBYSxRQUFTLFNBQVEsZ0JBQVM7SUFnQ3JDLFlBQVksT0FBZ0MsRUFBRTtRQUM1QyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFoQ0EsYUFBUSxHQUFjLFNBQVMsQ0FBQztRQUk5QyxTQUFJLEdBQWlCLFNBQVMsQ0FBQztRQUkvQixXQUFNLEdBQW1CLFNBQVMsQ0FBQztRQUVyQixXQUFNLEdBQVksU0FBUyxDQUFDO1FBSTFDLFVBQUssR0FBWSxTQUFTLENBQUM7UUFJM0IsU0FBSSxHQUFZLFNBQVMsQ0FBQztRQUkxQixXQUFNLEdBQVksU0FBUyxDQUFDO1FBSzVCLGNBQVMsR0FBVSxTQUFTLENBQUM7UUFFZixXQUFNLEdBQXFCLFNBQVMsQ0FBQztRQUlqRCxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUUxQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLG1CQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksNkJBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7Q0FDRjtBQXZDZTtJQUFiLDRCQUFVLEVBQUU7OEJBQVksbUJBQVE7MENBQWE7QUFJOUM7SUFGQyw0QkFBVSxFQUFFO0lBQ1osd0JBQU0sQ0FBQywyQkFBWSxDQUFDOztzQ0FDVTtBQUkvQjtJQUZDLDRCQUFVLEVBQUU7SUFDWix3QkFBTSxDQUFDLCtCQUFjLENBQUM7O3dDQUNZO0FBRXJCO0lBQWIsNEJBQVUsRUFBRTs7d0NBQTZCO0FBSTFDO0lBRkMsNEJBQVUsRUFBRTtJQUNaLDBCQUFRLEVBQUU7O3VDQUNnQjtBQUkzQjtJQUZDLDRCQUFVLEVBQUU7SUFDWiwwQkFBUSxFQUFFOztzQ0FDZTtBQUkxQjtJQUZDLDRCQUFVLEVBQUU7SUFDWiwwQkFBUSxFQUFFOzt3Q0FDaUI7QUFLNUI7SUFIQyw0QkFBVSxFQUFFO0lBQ1osd0JBQU0sRUFBRTtJQUNSLHlCQUFPLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLGdDQUFnQzs7OEJBQ3pDLElBQUk7MkNBQWE7QUFFZjtJQUFiLDRCQUFVLEVBQUU7O3dDQUFzQztBQTlCckQsNEJBd0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSXNCYXNlNjQsIElzRGF0ZSwgSXNFbnVtLCBJc05vdEVtcHR5LCBJc09wdGlvbmFsLCBNaW5EYXRlIH0gZnJvbSBcImNsYXNzLXZhbGlkYXRvclwiO1xuaW1wb3J0IHsgQmFzZU1vZGVsLCBCYXNlTW9kZWxTY2hlbWEgfSBmcm9tIFwiLi4vLi4vLi4vYmFzZVwiO1xuaW1wb3J0IHsgQ29uc3VtZXIsIENvbnN1bWVyU2NoZW1hIH0gZnJvbSBcIi4uL0NvbnN1bWVyXCI7XG5pbXBvcnQgeyBEb2N1bWVudFN0YXRlLCBEb2N1bWVudFN0YXRlU2NoZW1hIH0gZnJvbSBcIi4vRG9jdW1lbnRTdGF0ZVwiO1xuaW1wb3J0IHsgRG9jdW1lbnRTdGF0dXMgfSBmcm9tIFwiLi9Eb2N1bWVudFN0YXR1c1wiO1xuaW1wb3J0IHsgRG9jdW1lbnRUeXBlIH0gZnJvbSBcIi4vRG9jdW1lbnRUeXBlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRG9jdW1lbnRTY2hlbWEgZXh0ZW5kcyBCYXNlTW9kZWxTY2hlbWEge1xuICBjb25zdW1lcj86IENvbnN1bWVyU2NoZW1hO1xuICBzdGF0dXM/OiBEb2N1bWVudFN0YXR1cztcbiAgdHlwZTogRG9jdW1lbnRUeXBlO1xuICBudW1iZXI/OiBzdHJpbmc7XG4gIGZyb250Pzogc3RyaW5nO1xuICBiYWNrPzogc3RyaW5nO1xuICBzZWxmaWU/OiBzdHJpbmc7XG4gIHZlcmlmaWVkQXQ/OiBEYXRlIHwgc3RyaW5nO1xuICBzdGF0ZXM/OiBEb2N1bWVudFN0YXRlU2NoZW1hW107XG59XG5cbmV4cG9ydCBjbGFzcyBEb2N1bWVudCBleHRlbmRzIEJhc2VNb2RlbCBpbXBsZW1lbnRzIERvY3VtZW50U2NoZW1hIHtcbiAgQElzT3B0aW9uYWwoKSBjb25zdW1lcj86IENvbnN1bWVyID0gdW5kZWZpbmVkO1xuXG4gIEBJc05vdEVtcHR5KClcbiAgQElzRW51bShEb2N1bWVudFR5cGUpXG4gIHR5cGU6IERvY3VtZW50VHlwZSA9IHVuZGVmaW5lZDtcblxuICBASXNOb3RFbXB0eSgpXG4gIEBJc0VudW0oRG9jdW1lbnRTdGF0dXMpXG4gIHN0YXR1czogRG9jdW1lbnRTdGF0dXMgPSB1bmRlZmluZWQ7XG5cbiAgQElzT3B0aW9uYWwoKSBudW1iZXI/OiBzdHJpbmcgPSB1bmRlZmluZWQ7XG5cbiAgQElzT3B0aW9uYWwoKVxuICBASXNCYXNlNjQoKVxuICBmcm9udD86IHN0cmluZyA9IHVuZGVmaW5lZDtcblxuICBASXNPcHRpb25hbCgpXG4gIEBJc0Jhc2U2NCgpXG4gIGJhY2s/OiBzdHJpbmcgPSB1bmRlZmluZWQ7XG5cbiAgQElzT3B0aW9uYWwoKVxuICBASXNCYXNlNjQoKVxuICBzZWxmaWU/OiBzdHJpbmcgPSB1bmRlZmluZWQ7XG5cbiAgQElzT3B0aW9uYWwoKVxuICBASXNEYXRlKClcbiAgQE1pbkRhdGUobmV3IERhdGUoKSkgLy8gRG9uJ3QgYWxsb3cgZXhwaXJlZCBkb2N1bWVudHNcbiAgZXhwaXJlc0F0PzogRGF0ZSA9IHVuZGVmaW5lZDtcblxuICBASXNPcHRpb25hbCgpIHN0YXRlcz86IERvY3VtZW50U3RhdGVbXSA9IHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3RvcihkYXRhOiBQYXJ0aWFsPERvY3VtZW50U2NoZW1hPiA9IHt9KSB7XG4gICAgc3VwZXIoZGF0YSk7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcblxuICAgIHRoaXMuZXhwaXJlc0F0ID0gZGF0YS52ZXJpZmllZEF0ICYmIG5ldyBEYXRlKGRhdGEudmVyaWZpZWRBdCk7XG4gICAgdGhpcy5jb25zdW1lciA9IGRhdGEuY29uc3VtZXIgJiYgbmV3IENvbnN1bWVyKGRhdGEuY29uc3VtZXIpO1xuICAgIHRoaXMuc3RhdGVzID0gZGF0YS5zdGF0ZXMgJiYgZGF0YS5zdGF0ZXMubWFwKHN0YXRlID0+IG5ldyBEb2N1bWVudFN0YXRlKHN0YXRlKSk7XG4gIH1cbn1cbiJdfQ==