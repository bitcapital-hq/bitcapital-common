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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uc3VtZXJTdGF0dXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvbW9kZWxzL0NvbnN1bWVyL0NvbnN1bWVyU3RhdHVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBWSxjQXNCWDtBQXRCRCxXQUFZLGNBQWM7SUFDeEIsb0JBQW9CO0lBQ3BCLGlDQUFlLENBQUE7SUFDZix1Q0FBcUIsQ0FBQTtJQUVyQixvQkFBb0I7SUFDcEIseURBQXVDLENBQUE7SUFDdkMsbURBQWlDLENBQUE7SUFFakMsdUJBQXVCO0lBQ3ZCLCtEQUE2QyxDQUFBO0lBQzdDLDJEQUF5QyxDQUFBO0lBRXpDLGtCQUFrQjtJQUNsQixxREFBbUMsQ0FBQTtJQUNuQyx5REFBdUMsQ0FBQTtJQUN2Qyw2REFBMkMsQ0FBQTtJQUUzQyxtQkFBbUI7SUFDbkIseUNBQXVCLENBQUE7SUFDdkIscUNBQW1CLENBQUE7SUFDbkIscUNBQW1CLENBQUE7QUFDckIsQ0FBQyxFQXRCVyxjQUFjLEdBQWQsc0JBQWMsS0FBZCxzQkFBYyxRQXNCekIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZW51bSBDb25zdW1lclN0YXR1cyB7XHJcbiAgLyogU3VjY2VzcyBzdGF0ZXMgKi9cclxuICBSRUFEWSA9IFwicmVhZHlcIixcclxuICBSRUpFQ1RFRCA9IFwicmVqZWN0ZWRcIixcclxuXHJcbiAgLyogUGVuZGluZyBzdGF0ZXMgKi9cclxuICBQRU5ESU5HX0RPQ1VNRU5UUyA9IFwicGVuZGluZ19kb2N1bWVudHNcIixcclxuICBQRU5ESU5HX1NFTEZJRSA9IFwicGVuZGluZ19zZWxmaWVcIixcclxuXHJcbiAgLyogUHJvY2Vzc2luZyBzdGF0ZXMgKi9cclxuICBQUk9DRVNTSU5HX0RPQ1VNRU5UUyA9IFwicHJvY2Vzc2luZ19kb2N1bWVudHNcIixcclxuICBQUk9DRVNTSU5HX1dBTExFVFMgPSBcInByb2Nlc3Npbmdfd2FsbGV0c1wiLFxyXG5cclxuICAvKiBFcnJvciBzdGF0ZXMgKi9cclxuICBQUk9WSURFUl9GQUlMRUQgPSBcInByb3ZpZGVyX2ZhaWxlZFwiLFxyXG4gIElOVkFMSURfRE9DVU1FTlRTID0gXCJpbnZhbGlkX2RvY3VtZW50c1wiLFxyXG4gIE1BTlVBTF9WRVJJRklDQVRJT04gPSBcIm1hbnVhbF92ZXJpZmljYXRpb25cIixcclxuXHJcbiAgLyogQmxvY2tlZCBzdGF0ZSAqL1xyXG4gIFNVU1BFTkRFRCA9IFwic3VzcGVuZGVkXCIsXHJcbiAgQkxPQ0tFRCA9IFwiYmxvY2tlZFwiLFxyXG4gIERFTEVURUQgPSBcImRlbGV0ZWRcIixcclxufSJdfQ==