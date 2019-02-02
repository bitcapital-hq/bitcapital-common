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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uc3VtZXJTdGF0dXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvbW9kZWxzL0NvbnN1bWVyL0NvbnN1bWVyU3RhdHVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBWSxjQXNCWDtBQXRCRCxXQUFZLGNBQWM7SUFDeEIsb0JBQW9CO0lBQ3BCLGlDQUFlLENBQUE7SUFDZix1Q0FBcUIsQ0FBQTtJQUVyQixvQkFBb0I7SUFDcEIseURBQXVDLENBQUE7SUFDdkMsbURBQWlDLENBQUE7SUFFakMsdUJBQXVCO0lBQ3ZCLCtEQUE2QyxDQUFBO0lBQzdDLDJEQUF5QyxDQUFBO0lBRXpDLGtCQUFrQjtJQUNsQixxREFBbUMsQ0FBQTtJQUNuQyx5REFBdUMsQ0FBQTtJQUN2Qyw2REFBMkMsQ0FBQTtJQUUzQyxtQkFBbUI7SUFDbkIseUNBQXVCLENBQUE7SUFDdkIscUNBQW1CLENBQUE7SUFDbkIscUNBQW1CLENBQUE7QUFDckIsQ0FBQyxFQXRCVyxjQUFjLEdBQWQsc0JBQWMsS0FBZCxzQkFBYyxRQXNCekIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZW51bSBDb25zdW1lclN0YXR1cyB7XG4gIC8qIFN1Y2Nlc3Mgc3RhdGVzICovXG4gIFJFQURZID0gXCJyZWFkeVwiLFxuICBSRUpFQ1RFRCA9IFwicmVqZWN0ZWRcIixcblxuICAvKiBQZW5kaW5nIHN0YXRlcyAqL1xuICBQRU5ESU5HX0RPQ1VNRU5UUyA9IFwicGVuZGluZ19kb2N1bWVudHNcIixcbiAgUEVORElOR19TRUxGSUUgPSBcInBlbmRpbmdfc2VsZmllXCIsXG5cbiAgLyogUHJvY2Vzc2luZyBzdGF0ZXMgKi9cbiAgUFJPQ0VTU0lOR19ET0NVTUVOVFMgPSBcInByb2Nlc3NpbmdfZG9jdW1lbnRzXCIsXG4gIFBST0NFU1NJTkdfV0FMTEVUUyA9IFwicHJvY2Vzc2luZ193YWxsZXRzXCIsXG5cbiAgLyogRXJyb3Igc3RhdGVzICovXG4gIFBST1ZJREVSX0ZBSUxFRCA9IFwicHJvdmlkZXJfZmFpbGVkXCIsXG4gIElOVkFMSURfRE9DVU1FTlRTID0gXCJpbnZhbGlkX2RvY3VtZW50c1wiLFxuICBNQU5VQUxfVkVSSUZJQ0FUSU9OID0gXCJtYW51YWxfdmVyaWZpY2F0aW9uXCIsXG5cbiAgLyogQmxvY2tlZCBzdGF0ZSAqL1xuICBTVVNQRU5ERUQgPSBcInN1c3BlbmRlZFwiLFxuICBCTE9DS0VEID0gXCJibG9ja2VkXCIsXG4gIERFTEVURUQgPSBcImRlbGV0ZWRcIixcbn0iXX0=