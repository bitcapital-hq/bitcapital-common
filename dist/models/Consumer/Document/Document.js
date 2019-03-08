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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jdW1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9saWIvbW9kZWxzL0NvbnN1bWVyL0RvY3VtZW50L0RvY3VtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscURBQTRGO0FBQzVGLHdDQUEyRDtBQUMzRCwwQ0FBdUQ7QUFDdkQsbURBQXFFO0FBQ3JFLHFEQUFrRDtBQUNsRCxpREFBOEM7QUFjOUMsTUFBYSxRQUFTLFNBQVEsZ0JBQVM7SUFnQ3JDLFlBQVksT0FBZ0MsRUFBRTtRQUM1QyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFoQ0EsYUFBUSxHQUFjLFNBQVMsQ0FBQztRQUk5QyxTQUFJLEdBQWlCLFNBQVMsQ0FBQztRQUkvQixXQUFNLEdBQW1CLFNBQVMsQ0FBQztRQUVyQixXQUFNLEdBQVksU0FBUyxDQUFDO1FBSTFDLFVBQUssR0FBWSxTQUFTLENBQUM7UUFJM0IsU0FBSSxHQUFZLFNBQVMsQ0FBQztRQUkxQixXQUFNLEdBQVksU0FBUyxDQUFDO1FBSzVCLGNBQVMsR0FBVSxTQUFTLENBQUM7UUFFZixXQUFNLEdBQXFCLFNBQVMsQ0FBQztRQUlqRCxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUUxQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLG1CQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksNkJBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7Q0FDRjtBQXZDZTtJQUFiLDRCQUFVLEVBQUU7OEJBQVksbUJBQVE7MENBQWE7QUFJOUM7SUFGQyw0QkFBVSxFQUFFO0lBQ1osd0JBQU0sQ0FBQywyQkFBWSxDQUFDOztzQ0FDVTtBQUkvQjtJQUZDLDRCQUFVLEVBQUU7SUFDWix3QkFBTSxDQUFDLCtCQUFjLENBQUM7O3dDQUNZO0FBRXJCO0lBQWIsNEJBQVUsRUFBRTs7d0NBQTZCO0FBSTFDO0lBRkMsNEJBQVUsRUFBRTtJQUNaLDBCQUFRLEVBQUU7O3VDQUNnQjtBQUkzQjtJQUZDLDRCQUFVLEVBQUU7SUFDWiwwQkFBUSxFQUFFOztzQ0FDZTtBQUkxQjtJQUZDLDRCQUFVLEVBQUU7SUFDWiwwQkFBUSxFQUFFOzt3Q0FDaUI7QUFLNUI7SUFIQyw0QkFBVSxFQUFFO0lBQ1osd0JBQU0sRUFBRTtJQUNSLHlCQUFPLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLGdDQUFnQzs7OEJBQ3pDLElBQUk7MkNBQWE7QUFFZjtJQUFiLDRCQUFVLEVBQUU7O3dDQUFzQztBQTlCckQsNEJBd0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSXNCYXNlNjQsIElzRGF0ZSwgSXNFbnVtLCBJc05vdEVtcHR5LCBJc09wdGlvbmFsLCBNaW5EYXRlIH0gZnJvbSBcImNsYXNzLXZhbGlkYXRvclwiO1xyXG5pbXBvcnQgeyBCYXNlTW9kZWwsIEJhc2VNb2RlbFNjaGVtYSB9IGZyb20gXCIuLi8uLi8uLi9iYXNlXCI7XHJcbmltcG9ydCB7IENvbnN1bWVyLCBDb25zdW1lclNjaGVtYSB9IGZyb20gXCIuLi9Db25zdW1lclwiO1xyXG5pbXBvcnQgeyBEb2N1bWVudFN0YXRlLCBEb2N1bWVudFN0YXRlU2NoZW1hIH0gZnJvbSBcIi4vRG9jdW1lbnRTdGF0ZVwiO1xyXG5pbXBvcnQgeyBEb2N1bWVudFN0YXR1cyB9IGZyb20gXCIuL0RvY3VtZW50U3RhdHVzXCI7XHJcbmltcG9ydCB7IERvY3VtZW50VHlwZSB9IGZyb20gXCIuL0RvY3VtZW50VHlwZVwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEb2N1bWVudFNjaGVtYSBleHRlbmRzIEJhc2VNb2RlbFNjaGVtYSB7XHJcbiAgY29uc3VtZXI/OiBDb25zdW1lclNjaGVtYTtcclxuICBzdGF0dXM/OiBEb2N1bWVudFN0YXR1cztcclxuICB0eXBlOiBEb2N1bWVudFR5cGU7XHJcbiAgbnVtYmVyPzogc3RyaW5nO1xyXG4gIGZyb250Pzogc3RyaW5nO1xyXG4gIGJhY2s/OiBzdHJpbmc7XHJcbiAgc2VsZmllPzogc3RyaW5nO1xyXG4gIHZlcmlmaWVkQXQ/OiBEYXRlIHwgc3RyaW5nO1xyXG4gIHN0YXRlcz86IERvY3VtZW50U3RhdGVTY2hlbWFbXTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERvY3VtZW50IGV4dGVuZHMgQmFzZU1vZGVsIGltcGxlbWVudHMgRG9jdW1lbnRTY2hlbWEge1xyXG4gIEBJc09wdGlvbmFsKCkgY29uc3VtZXI/OiBDb25zdW1lciA9IHVuZGVmaW5lZDtcclxuXHJcbiAgQElzTm90RW1wdHkoKVxyXG4gIEBJc0VudW0oRG9jdW1lbnRUeXBlKVxyXG4gIHR5cGU6IERvY3VtZW50VHlwZSA9IHVuZGVmaW5lZDtcclxuXHJcbiAgQElzTm90RW1wdHkoKVxyXG4gIEBJc0VudW0oRG9jdW1lbnRTdGF0dXMpXHJcbiAgc3RhdHVzOiBEb2N1bWVudFN0YXR1cyA9IHVuZGVmaW5lZDtcclxuXHJcbiAgQElzT3B0aW9uYWwoKSBudW1iZXI/OiBzdHJpbmcgPSB1bmRlZmluZWQ7XHJcblxyXG4gIEBJc09wdGlvbmFsKClcclxuICBASXNCYXNlNjQoKVxyXG4gIGZyb250Pzogc3RyaW5nID0gdW5kZWZpbmVkO1xyXG5cclxuICBASXNPcHRpb25hbCgpXHJcbiAgQElzQmFzZTY0KClcclxuICBiYWNrPzogc3RyaW5nID0gdW5kZWZpbmVkO1xyXG5cclxuICBASXNPcHRpb25hbCgpXHJcbiAgQElzQmFzZTY0KClcclxuICBzZWxmaWU/OiBzdHJpbmcgPSB1bmRlZmluZWQ7XHJcblxyXG4gIEBJc09wdGlvbmFsKClcclxuICBASXNEYXRlKClcclxuICBATWluRGF0ZShuZXcgRGF0ZSgpKSAvLyBEb24ndCBhbGxvdyBleHBpcmVkIGRvY3VtZW50c1xyXG4gIGV4cGlyZXNBdD86IERhdGUgPSB1bmRlZmluZWQ7XHJcblxyXG4gIEBJc09wdGlvbmFsKCkgc3RhdGVzPzogRG9jdW1lbnRTdGF0ZVtdID0gdW5kZWZpbmVkO1xyXG5cclxuICBjb25zdHJ1Y3RvcihkYXRhOiBQYXJ0aWFsPERvY3VtZW50U2NoZW1hPiA9IHt9KSB7XHJcbiAgICBzdXBlcihkYXRhKTtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XHJcblxyXG4gICAgdGhpcy5leHBpcmVzQXQgPSBkYXRhLnZlcmlmaWVkQXQgJiYgbmV3IERhdGUoZGF0YS52ZXJpZmllZEF0KTtcclxuICAgIHRoaXMuY29uc3VtZXIgPSBkYXRhLmNvbnN1bWVyICYmIG5ldyBDb25zdW1lcihkYXRhLmNvbnN1bWVyKTtcclxuICAgIHRoaXMuc3RhdGVzID0gZGF0YS5zdGF0ZXMgJiYgZGF0YS5zdGF0ZXMubWFwKHN0YXRlID0+IG5ldyBEb2N1bWVudFN0YXRlKHN0YXRlKSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==