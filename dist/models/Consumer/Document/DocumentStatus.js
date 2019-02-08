"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jdW1lbnRTdGF0dXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9saWIvbW9kZWxzL0NvbnN1bWVyL0RvY3VtZW50L0RvY3VtZW50U3RhdHVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBWSxjQWFYO0FBYkQsV0FBWSxjQUFjO0lBQ3hCLG9CQUFvQjtJQUNwQix1Q0FBcUIsQ0FBQTtJQUNyQix5REFBdUMsQ0FBQTtJQUN2QyxxREFBbUMsQ0FBQTtJQUVuQyxvQkFBb0I7SUFDcEIsNkRBQTJDLENBQUE7SUFDM0MsMkNBQXlCLENBQUE7SUFFekIsa0JBQWtCO0lBQ2xCLDZEQUEyQyxDQUFBO0lBQzNDLDJFQUF5RCxDQUFBO0FBQzNELENBQUMsRUFiVyxjQUFjLEdBQWQsc0JBQWMsS0FBZCxzQkFBYyxRQWF6QiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBlbnVtIERvY3VtZW50U3RhdHVzIHtcclxuICAvKiBTdWNjZXNzIHN0YXRlcyAqL1xyXG4gIFZFUklGSUVEID0gXCJ2ZXJpZmllZFwiLFxyXG4gIE1BTlVBTExZX1ZFUklGSUVEID0gXCJtYW51YWxseV92ZXJpZmllZFwiLFxyXG4gIERFTEVURURfQllfVVNFUiA9IFwiZGVsZXRlZF9ieV91c2VyXCIsXHJcblxyXG4gIC8qIFBlbmRpbmcgc3RhdGVzICovXHJcbiAgUEVORElOR19JTkZPUk1BVElPTiA9IFwicGVuZGluZ19pbmZvcm1hdGlvblwiLFxyXG4gIFBST0NFU1NJTkcgPSBcInByb2Nlc3NpbmdcIixcclxuXHJcbiAgLyogRXJyb3Igc3RhdGVzICovXHJcbiAgRkFJTEVEX1ZFUklGSUNBVElPTiA9IFwiZmFpbGVkX3ZlcmlmaWNhdGlvblwiLFxyXG4gIEZBSUxFRF9NQU5VQUxfVkVSSUZJQ0FUSU9OID0gXCJmYWlsZWRfbWFudWFsX3ZlcmlmaWNhdGlvblwiXHJcbn1cclxuIl19