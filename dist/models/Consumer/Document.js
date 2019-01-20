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
const base_1 = require("../../base");
var DocumentType;
(function (DocumentType) {
    DocumentType["TAX_ID"] = "tax_id";
    DocumentType["BRL_IDENTITY"] = "brl_identity";
    DocumentType["BRL_INDIVIDUAL_REG"] = "brl_individual_reg";
    DocumentType["BRL_DRIVERS_LICENSE"] = "brl_drivers_license";
    DocumentType["BRL_ADDRESS_STATEMENT"] = "brl_address_statement";
    DocumentType["PASSPORT"] = "passport";
})(DocumentType = exports.DocumentType || (exports.DocumentType = {}));
var DocumentVerificationError;
(function (DocumentVerificationError) {
    DocumentVerificationError["NO_MATCHS"] = "no_matchs";
    DocumentVerificationError["IS_DEAD"] = "is_dead";
    DocumentVerificationError["SUSPENDED"] = "suspended";
    DocumentVerificationError["CANCELED"] = "canceled";
    DocumentVerificationError["PENDING_REGULATION"] = "pending_regulation";
    DocumentVerificationError["NULL"] = "null";
    DocumentVerificationError["INCOMPLETE_TAX_ID_DATA"] = "incomplete_tax_id_data";
    DocumentVerificationError["FACE_DIDNT_MATCH"] = "face_didnt_match";
    DocumentVerificationError["RECOGNITION_ERROR"] = "recognition_error";
    DocumentVerificationError["NO_DOC_PICTURE"] = "no_doc_picture";
    DocumentVerificationError["NO_FACIAL_PICTURE"] = "no_facial_picture";
    DocumentVerificationError["NO_INFO_FOUND"] = "no_info_found";
    DocumentVerificationError["DOC_IS_NOT_BASE_64"] = "doc_is_not_base_64";
    DocumentVerificationError["FACE_IS_NOT_BASE_64"] = "face_is_not_base_64";
    DocumentVerificationError["POLITICALLY_EXPOSED_PERSON"] = "politically_exposed_person";
    DocumentVerificationError["SANCTIONED"] = "sanctioned";
})(DocumentVerificationError = exports.DocumentVerificationError || (exports.DocumentVerificationError = {}));
var DocumentStatus;
(function (DocumentStatus) {
    /* Success states */
    DocumentStatus["VERIFIED"] = "verified";
    DocumentStatus["MANUALLY_VERIFIED"] = "manually_verified";
    DocumentStatus["DELETED_BY_USER"] = "deleted_by_user";
    /* Pending states */
    DocumentStatus["PENDING_INFORMATION"] = "pending_information";
    DocumentStatus["PROCESSING"] = "processing";
    /* Error states */
    DocumentStatus["FAILED_VERIFICATION"] = "failed_verification";
    DocumentStatus["FAILED_MANUAL_VERIFICATION"] = "failed_manual_verification";
})(DocumentStatus = exports.DocumentStatus || (exports.DocumentStatus = {}));
class Document extends base_1.BaseModel {
    constructor(data) {
        super(data);
        this.consumer = undefined;
        this.consumerId = undefined;
        this.type = undefined;
        this.status = undefined;
        this.number = undefined;
        this.front = undefined;
        this.back = undefined;
        this.selfie = undefined;
        this.verifiedAt = undefined;
        this.verifiedAt = data.verifiedAt instanceof Date ? data.verifiedAt : new Date(data.verifiedAt);
    }
}
__decorate([
    class_validator_1.IsUUID(),
    __metadata("design:type", String)
], Document.prototype, "consumerId", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsEnum(DocumentType),
    __metadata("design:type", String)
], Document.prototype, "type", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsEnum(DocumentStatus),
    __metadata("design:type", String)
], Document.prototype, "status", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsNotEmpty(),
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
    class_validator_1.MaxDate(new Date(new Date().getTime() + 5 * 60000)) // Now + 5min for server time differences
    ,
    __metadata("design:type", Date)
], Document.prototype, "verifiedAt", void 0);
exports.default = Document;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jdW1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvbW9kZWxzL0NvbnN1bWVyL0RvY3VtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEscURBQW9HO0FBQ3BHLHFDQUF3RDtBQUd4RCxJQUFZLFlBT1g7QUFQRCxXQUFZLFlBQVk7SUFDdEIsaUNBQWlCLENBQUE7SUFDakIsNkNBQTZCLENBQUE7SUFDN0IseURBQXlDLENBQUE7SUFDekMsMkRBQTJDLENBQUE7SUFDM0MsK0RBQStDLENBQUE7SUFDL0MscUNBQXFCLENBQUE7QUFDdkIsQ0FBQyxFQVBXLFlBQVksR0FBWixvQkFBWSxLQUFaLG9CQUFZLFFBT3ZCO0FBRUQsSUFBWSx5QkFpQlg7QUFqQkQsV0FBWSx5QkFBeUI7SUFDbkMsb0RBQXVCLENBQUE7SUFDdkIsZ0RBQW1CLENBQUE7SUFDbkIsb0RBQXVCLENBQUE7SUFDdkIsa0RBQXFCLENBQUE7SUFDckIsc0VBQXlDLENBQUE7SUFDekMsMENBQWEsQ0FBQTtJQUNiLDhFQUFpRCxDQUFBO0lBQ2pELGtFQUFxQyxDQUFBO0lBQ3JDLG9FQUF1QyxDQUFBO0lBQ3ZDLDhEQUFpQyxDQUFBO0lBQ2pDLG9FQUF1QyxDQUFBO0lBQ3ZDLDREQUErQixDQUFBO0lBQy9CLHNFQUF5QyxDQUFBO0lBQ3pDLHdFQUEyQyxDQUFBO0lBQzNDLHNGQUF5RCxDQUFBO0lBQ3pELHNEQUF5QixDQUFBO0FBQzNCLENBQUMsRUFqQlcseUJBQXlCLEdBQXpCLGlDQUF5QixLQUF6QixpQ0FBeUIsUUFpQnBDO0FBRUQsSUFBWSxjQWFYO0FBYkQsV0FBWSxjQUFjO0lBQ3hCLG9CQUFvQjtJQUNwQix1Q0FBcUIsQ0FBQTtJQUNyQix5REFBdUMsQ0FBQTtJQUN2QyxxREFBbUMsQ0FBQTtJQUVuQyxvQkFBb0I7SUFDcEIsNkRBQTJDLENBQUE7SUFDM0MsMkNBQXlCLENBQUE7SUFFekIsa0JBQWtCO0lBQ2xCLDZEQUEyQyxDQUFBO0lBQzNDLDJFQUF5RCxDQUFBO0FBQzNELENBQUMsRUFiVyxjQUFjLEdBQWQsc0JBQWMsS0FBZCxzQkFBYyxRQWF6QjtBQWVELGNBQThCLFNBQVEsZ0JBQVM7SUErQjdDLFlBQVksSUFBNkI7UUFDdkMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBL0JkLGFBQVEsR0FBYyxTQUFTLENBQUM7UUFDdEIsZUFBVSxHQUFXLFNBQVMsQ0FBQztRQUl6QyxTQUFJLEdBQWlCLFNBQVMsQ0FBQztRQUkvQixXQUFNLEdBQW1CLFNBQVMsQ0FBQztRQUluQyxXQUFNLEdBQVksU0FBUyxDQUFDO1FBSTVCLFVBQUssR0FBWSxTQUFTLENBQUM7UUFHM0IsU0FBSSxHQUFZLFNBQVMsQ0FBQztRQUcxQixXQUFNLEdBQVksU0FBUyxDQUFDO1FBSzVCLGVBQVUsR0FBVSxTQUFTLENBQUM7UUFJNUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxZQUFZLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2xHLENBQUM7Q0FDRjtBQWpDVztJQUFULHdCQUFNLEVBQUU7OzRDQUFnQztBQUl6QztJQUZDLDRCQUFVLEVBQUU7SUFDWix3QkFBTSxDQUFDLFlBQVksQ0FBQzs7c0NBQ1U7QUFJL0I7SUFGQyw0QkFBVSxFQUFFO0lBQ1osd0JBQU0sQ0FBQyxjQUFjLENBQUM7O3dDQUNZO0FBSW5DO0lBRkMsNEJBQVUsRUFBRTtJQUNaLDRCQUFVLEVBQUU7O3dDQUNlO0FBSTVCO0lBRkMsNEJBQVUsRUFBRTtJQUNaLDBCQUFRLEVBQUU7O3VDQUNnQjtBQUczQjtJQUZDLDRCQUFVLEVBQUU7SUFDWiwwQkFBUSxFQUFFOztzQ0FDZTtBQUcxQjtJQUZDLDRCQUFVLEVBQUU7SUFDWiwwQkFBUSxFQUFFOzt3Q0FDaUI7QUFLNUI7SUFIQyw0QkFBVSxFQUFFO0lBQ1osd0JBQU0sRUFBRTtJQUNSLHlCQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyx5Q0FBeUM7OzhCQUNqRixJQUFJOzRDQUFhO0FBN0JoQywyQkFtQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJc0Jhc2U2NCwgSXNEYXRlLCBJc0VudW0sIElzTm90RW1wdHksIElzT3B0aW9uYWwsIElzVVVJRCwgTWF4RGF0ZSB9IGZyb20gXCJjbGFzcy12YWxpZGF0b3JcIjtcbmltcG9ydCB7IEJhc2VNb2RlbFNjaGVtYSwgQmFzZU1vZGVsIH0gZnJvbSBcIi4uLy4uL2Jhc2VcIjtcbmltcG9ydCBDb25zdW1lciwgeyBDb25zdW1lclNjaGVtYSB9IGZyb20gXCIuL0NvbnN1bWVyXCI7XG5cbmV4cG9ydCBlbnVtIERvY3VtZW50VHlwZSB7XG4gIFRBWF9JRCA9IFwidGF4X2lkXCIsIC8vIENQRlxuICBCUkxfSURFTlRJVFkgPSBcImJybF9pZGVudGl0eVwiLFxuICBCUkxfSU5ESVZJRFVBTF9SRUcgPSBcImJybF9pbmRpdmlkdWFsX3JlZ1wiLFxuICBCUkxfRFJJVkVSU19MSUNFTlNFID0gXCJicmxfZHJpdmVyc19saWNlbnNlXCIsXG4gIEJSTF9BRERSRVNTX1NUQVRFTUVOVCA9IFwiYnJsX2FkZHJlc3Nfc3RhdGVtZW50XCIsXG4gIFBBU1NQT1JUID0gXCJwYXNzcG9ydFwiXG59XG5cbmV4cG9ydCBlbnVtIERvY3VtZW50VmVyaWZpY2F0aW9uRXJyb3Ige1xuICBOT19NQVRDSFMgPSBcIm5vX21hdGNoc1wiLFxuICBJU19ERUFEID0gXCJpc19kZWFkXCIsXG4gIFNVU1BFTkRFRCA9IFwic3VzcGVuZGVkXCIsXG4gIENBTkNFTEVEID0gXCJjYW5jZWxlZFwiLFxuICBQRU5ESU5HX1JFR1VMQVRJT04gPSBcInBlbmRpbmdfcmVndWxhdGlvblwiLFxuICBOVUxMID0gXCJudWxsXCIsXG4gIElOQ09NUExFVEVfVEFYX0lEX0RBVEEgPSBcImluY29tcGxldGVfdGF4X2lkX2RhdGFcIixcbiAgRkFDRV9ESUROVF9NQVRDSCA9IFwiZmFjZV9kaWRudF9tYXRjaFwiLFxuICBSRUNPR05JVElPTl9FUlJPUiA9IFwicmVjb2duaXRpb25fZXJyb3JcIixcbiAgTk9fRE9DX1BJQ1RVUkUgPSBcIm5vX2RvY19waWN0dXJlXCIsXG4gIE5PX0ZBQ0lBTF9QSUNUVVJFID0gXCJub19mYWNpYWxfcGljdHVyZVwiLFxuICBOT19JTkZPX0ZPVU5EID0gXCJub19pbmZvX2ZvdW5kXCIsXG4gIERPQ19JU19OT1RfQkFTRV82NCA9IFwiZG9jX2lzX25vdF9iYXNlXzY0XCIsXG4gIEZBQ0VfSVNfTk9UX0JBU0VfNjQgPSBcImZhY2VfaXNfbm90X2Jhc2VfNjRcIixcbiAgUE9MSVRJQ0FMTFlfRVhQT1NFRF9QRVJTT04gPSBcInBvbGl0aWNhbGx5X2V4cG9zZWRfcGVyc29uXCIsXG4gIFNBTkNUSU9ORUQgPSBcInNhbmN0aW9uZWRcIlxufVxuXG5leHBvcnQgZW51bSBEb2N1bWVudFN0YXR1cyB7XG4gIC8qIFN1Y2Nlc3Mgc3RhdGVzICovXG4gIFZFUklGSUVEID0gXCJ2ZXJpZmllZFwiLFxuICBNQU5VQUxMWV9WRVJJRklFRCA9IFwibWFudWFsbHlfdmVyaWZpZWRcIixcbiAgREVMRVRFRF9CWV9VU0VSID0gXCJkZWxldGVkX2J5X3VzZXJcIixcblxuICAvKiBQZW5kaW5nIHN0YXRlcyAqL1xuICBQRU5ESU5HX0lORk9STUFUSU9OID0gXCJwZW5kaW5nX2luZm9ybWF0aW9uXCIsXG4gIFBST0NFU1NJTkcgPSBcInByb2Nlc3NpbmdcIixcblxuICAvKiBFcnJvciBzdGF0ZXMgKi9cbiAgRkFJTEVEX1ZFUklGSUNBVElPTiA9IFwiZmFpbGVkX3ZlcmlmaWNhdGlvblwiLFxuICBGQUlMRURfTUFOVUFMX1ZFUklGSUNBVElPTiA9IFwiZmFpbGVkX21hbnVhbF92ZXJpZmljYXRpb25cIlxufVxuXG5cbmV4cG9ydCBpbnRlcmZhY2UgRG9jdW1lbnRTY2hlbWEgZXh0ZW5kcyBCYXNlTW9kZWxTY2hlbWEge1xuICBjb25zdW1lcj86IENvbnN1bWVyU2NoZW1hO1xuICBzdGF0dXM6IERvY3VtZW50U3RhdHVzO1xuICBjb25zdW1lcklkPzogc3RyaW5nO1xuICB0eXBlOiBEb2N1bWVudFR5cGU7XG4gIG51bWJlcj86IHN0cmluZztcbiAgZnJvbnQ/OiBzdHJpbmc7XG4gIGJhY2s/OiBzdHJpbmc7XG4gIHNlbGZpZT86IHN0cmluZztcbiAgdmVyaWZpZWRBdD86IERhdGUgfCBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERvY3VtZW50IGV4dGVuZHMgQmFzZU1vZGVsIGltcGxlbWVudHMgRG9jdW1lbnRTY2hlbWEge1xuICBjb25zdW1lcj86IENvbnN1bWVyID0gdW5kZWZpbmVkO1xuICBASXNVVUlEKCkgY29uc3VtZXJJZDogc3RyaW5nID0gdW5kZWZpbmVkO1xuXG4gIEBJc05vdEVtcHR5KClcbiAgQElzRW51bShEb2N1bWVudFR5cGUpXG4gIHR5cGU6IERvY3VtZW50VHlwZSA9IHVuZGVmaW5lZDtcblxuICBASXNOb3RFbXB0eSgpXG4gIEBJc0VudW0oRG9jdW1lbnRTdGF0dXMpXG4gIHN0YXR1czogRG9jdW1lbnRTdGF0dXMgPSB1bmRlZmluZWQ7XG5cbiAgQElzT3B0aW9uYWwoKVxuICBASXNOb3RFbXB0eSgpXG4gIG51bWJlcj86IHN0cmluZyA9IHVuZGVmaW5lZDtcblxuICBASXNPcHRpb25hbCgpXG4gIEBJc0Jhc2U2NCgpXG4gIGZyb250Pzogc3RyaW5nID0gdW5kZWZpbmVkO1xuICBASXNPcHRpb25hbCgpXG4gIEBJc0Jhc2U2NCgpXG4gIGJhY2s/OiBzdHJpbmcgPSB1bmRlZmluZWQ7XG4gIEBJc09wdGlvbmFsKClcbiAgQElzQmFzZTY0KClcbiAgc2VsZmllPzogc3RyaW5nID0gdW5kZWZpbmVkO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgQElzRGF0ZSgpXG4gIEBNYXhEYXRlKG5ldyBEYXRlKG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgNSAqIDYwMDAwKSkgLy8gTm93ICsgNW1pbiBmb3Igc2VydmVyIHRpbWUgZGlmZmVyZW5jZXNcbiAgdmVyaWZpZWRBdD86IERhdGUgPSB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IoZGF0YTogUGFydGlhbDxEb2N1bWVudFNjaGVtYT4pIHtcbiAgICBzdXBlcihkYXRhKTtcbiAgICB0aGlzLnZlcmlmaWVkQXQgPSBkYXRhLnZlcmlmaWVkQXQgaW5zdGFuY2VvZiBEYXRlID8gZGF0YS52ZXJpZmllZEF0IDogbmV3IERhdGUoZGF0YS52ZXJpZmllZEF0KTtcbiAgfVxufVxuIl19