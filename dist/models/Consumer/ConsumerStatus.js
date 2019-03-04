"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ConsumerStatus;
(function (ConsumerStatus) {
    /* Success states */
    ConsumerStatus["READY"] = "ready";
    ConsumerStatus["REJECTED"] = "rejected";
    /* Pending states */
    ConsumerStatus["PENDING_DOCUMENTS"] = "pending_documents";
    ConsumerStatus["PENDING_SELFIE"] = "pending_selfie";
    ConsumerStatus["PENDING_DELETION"] = "pending_deletion";
    /* Processing states */
    ConsumerStatus["PROCESSING_DOCUMENTS"] = "processing_documents";
    ConsumerStatus["PROCESSING_WALLETS"] = "processing_wallets";
    /* Error states */
    ConsumerStatus["PROVIDER_FAILED"] = "provider_failed";
    ConsumerStatus["INVALID_DOCUMENTS"] = "invalid_documents";
    ConsumerStatus["MANUAL_VERIFICATION"] = "manual_verification";
    /* Blocked state */
    ConsumerStatus["SUSPENDED"] = "suspended";
    ConsumerStatus["BLOCKED"] = "blocked";
    ConsumerStatus["DELETED"] = "deleted";
})(ConsumerStatus = exports.ConsumerStatus || (exports.ConsumerStatus = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uc3VtZXJTdGF0dXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvbW9kZWxzL0NvbnN1bWVyL0NvbnN1bWVyU3RhdHVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBWSxjQXVCWDtBQXZCRCxXQUFZLGNBQWM7SUFDeEIsb0JBQW9CO0lBQ3BCLGlDQUFlLENBQUE7SUFDZix1Q0FBcUIsQ0FBQTtJQUVyQixvQkFBb0I7SUFDcEIseURBQXVDLENBQUE7SUFDdkMsbURBQWlDLENBQUE7SUFDakMsdURBQXFDLENBQUE7SUFFckMsdUJBQXVCO0lBQ3ZCLCtEQUE2QyxDQUFBO0lBQzdDLDJEQUF5QyxDQUFBO0lBRXpDLGtCQUFrQjtJQUNsQixxREFBbUMsQ0FBQTtJQUNuQyx5REFBdUMsQ0FBQTtJQUN2Qyw2REFBMkMsQ0FBQTtJQUUzQyxtQkFBbUI7SUFDbkIseUNBQXVCLENBQUE7SUFDdkIscUNBQW1CLENBQUE7SUFDbkIscUNBQW1CLENBQUE7QUFDckIsQ0FBQyxFQXZCVyxjQUFjLEdBQWQsc0JBQWMsS0FBZCxzQkFBYyxRQXVCekIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZW51bSBDb25zdW1lclN0YXR1cyB7XHJcbiAgLyogU3VjY2VzcyBzdGF0ZXMgKi9cclxuICBSRUFEWSA9IFwicmVhZHlcIixcclxuICBSRUpFQ1RFRCA9IFwicmVqZWN0ZWRcIixcclxuXHJcbiAgLyogUGVuZGluZyBzdGF0ZXMgKi9cclxuICBQRU5ESU5HX0RPQ1VNRU5UUyA9IFwicGVuZGluZ19kb2N1bWVudHNcIixcclxuICBQRU5ESU5HX1NFTEZJRSA9IFwicGVuZGluZ19zZWxmaWVcIixcclxuICBQRU5ESU5HX0RFTEVUSU9OID0gXCJwZW5kaW5nX2RlbGV0aW9uXCIsXHJcblxyXG4gIC8qIFByb2Nlc3Npbmcgc3RhdGVzICovXHJcbiAgUFJPQ0VTU0lOR19ET0NVTUVOVFMgPSBcInByb2Nlc3NpbmdfZG9jdW1lbnRzXCIsXHJcbiAgUFJPQ0VTU0lOR19XQUxMRVRTID0gXCJwcm9jZXNzaW5nX3dhbGxldHNcIixcclxuXHJcbiAgLyogRXJyb3Igc3RhdGVzICovXHJcbiAgUFJPVklERVJfRkFJTEVEID0gXCJwcm92aWRlcl9mYWlsZWRcIixcclxuICBJTlZBTElEX0RPQ1VNRU5UUyA9IFwiaW52YWxpZF9kb2N1bWVudHNcIixcclxuICBNQU5VQUxfVkVSSUZJQ0FUSU9OID0gXCJtYW51YWxfdmVyaWZpY2F0aW9uXCIsXHJcblxyXG4gIC8qIEJsb2NrZWQgc3RhdGUgKi9cclxuICBTVVNQRU5ERUQgPSBcInN1c3BlbmRlZFwiLFxyXG4gIEJMT0NLRUQgPSBcImJsb2NrZWRcIixcclxuICBERUxFVEVEID0gXCJkZWxldGVkXCJcclxufVxyXG4iXX0=