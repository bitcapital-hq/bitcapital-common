"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ConsumerStatus;
(function (ConsumerStatus) {
    /* Success states */
    ConsumerStatus["READY"] = "ready";
    ConsumerStatus["REJECTED"] = "rejected";
    /* Pending states */
    ConsumerStatus["PENDING_DOCUMENTS"] = "pending_documents";
    /* Processing states */
    ConsumerStatus["PROCESSING_DOCUMENTS"] = "processing_documents";
    ConsumerStatus["PROCESSING_WALLETS"] = "processing_wallets";
    /* Error states */
    ConsumerStatus["PROVIDER_FAILED"] = "provider_failed";
    ConsumerStatus["INVALID_DOCUMENTS"] = "invalid_documents";
    ConsumerStatus["MANUAL_VERIFICATION"] = "manual_verification";
    /* Blocked state */
    ConsumerStatus["BLOCKED"] = "blocked";
})(ConsumerStatus = exports.ConsumerStatus || (exports.ConsumerStatus = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uc3VtZXJTdGF0dXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvbW9kZWxzL0NvbnN1bWVyL0NvbnN1bWVyU3RhdHVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBWSxjQW1CWDtBQW5CRCxXQUFZLGNBQWM7SUFDeEIsb0JBQW9CO0lBQ3BCLGlDQUFlLENBQUE7SUFDZix1Q0FBcUIsQ0FBQTtJQUVyQixvQkFBb0I7SUFDcEIseURBQXVDLENBQUE7SUFFdkMsdUJBQXVCO0lBQ3ZCLCtEQUE2QyxDQUFBO0lBQzdDLDJEQUF5QyxDQUFBO0lBRXpDLGtCQUFrQjtJQUNsQixxREFBbUMsQ0FBQTtJQUNuQyx5REFBdUMsQ0FBQTtJQUN2Qyw2REFBMkMsQ0FBQTtJQUUzQyxtQkFBbUI7SUFDbkIscUNBQW1CLENBQUE7QUFDckIsQ0FBQyxFQW5CVyxjQUFjLEdBQWQsc0JBQWMsS0FBZCxzQkFBYyxRQW1CekIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZW51bSBDb25zdW1lclN0YXR1cyB7XG4gIC8qIFN1Y2Nlc3Mgc3RhdGVzICovXG4gIFJFQURZID0gXCJyZWFkeVwiLFxuICBSRUpFQ1RFRCA9IFwicmVqZWN0ZWRcIixcblxuICAvKiBQZW5kaW5nIHN0YXRlcyAqL1xuICBQRU5ESU5HX0RPQ1VNRU5UUyA9IFwicGVuZGluZ19kb2N1bWVudHNcIixcblxuICAvKiBQcm9jZXNzaW5nIHN0YXRlcyAqL1xuICBQUk9DRVNTSU5HX0RPQ1VNRU5UUyA9IFwicHJvY2Vzc2luZ19kb2N1bWVudHNcIixcbiAgUFJPQ0VTU0lOR19XQUxMRVRTID0gXCJwcm9jZXNzaW5nX3dhbGxldHNcIixcblxuICAvKiBFcnJvciBzdGF0ZXMgKi9cbiAgUFJPVklERVJfRkFJTEVEID0gXCJwcm92aWRlcl9mYWlsZWRcIixcbiAgSU5WQUxJRF9ET0NVTUVOVFMgPSBcImludmFsaWRfZG9jdW1lbnRzXCIsXG4gIE1BTlVBTF9WRVJJRklDQVRJT04gPSBcIm1hbnVhbF92ZXJpZmljYXRpb25cIixcblxuICAvKiBCbG9ja2VkIHN0YXRlICovXG4gIEJMT0NLRUQgPSBcImJsb2NrZWRcIlxufSJdfQ==