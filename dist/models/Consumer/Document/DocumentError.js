"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jdW1lbnRFcnJvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9tb2RlbHMvQ29uc3VtZXIvRG9jdW1lbnQvRG9jdW1lbnRFcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQVkseUJBaUJYO0FBakJELFdBQVkseUJBQXlCO0lBQ25DLG9EQUF1QixDQUFBO0lBQ3ZCLGdEQUFtQixDQUFBO0lBQ25CLG9EQUF1QixDQUFBO0lBQ3ZCLGtEQUFxQixDQUFBO0lBQ3JCLHNFQUF5QyxDQUFBO0lBQ3pDLDBDQUFhLENBQUE7SUFDYiw4RUFBaUQsQ0FBQTtJQUNqRCxrRUFBcUMsQ0FBQTtJQUNyQyxvRUFBdUMsQ0FBQTtJQUN2Qyw4REFBaUMsQ0FBQTtJQUNqQyxvRUFBdUMsQ0FBQTtJQUN2Qyw0REFBK0IsQ0FBQTtJQUMvQixzRUFBeUMsQ0FBQTtJQUN6Qyx3RUFBMkMsQ0FBQTtJQUMzQyxzRkFBeUQsQ0FBQTtJQUN6RCxzREFBeUIsQ0FBQTtBQUMzQixDQUFDLEVBakJXLHlCQUF5QixHQUF6QixpQ0FBeUIsS0FBekIsaUNBQXlCLFFBaUJwQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBlbnVtIERvY3VtZW50VmVyaWZpY2F0aW9uRXJyb3Ige1xuICBOT19NQVRDSFMgPSBcIm5vX21hdGNoc1wiLFxuICBJU19ERUFEID0gXCJpc19kZWFkXCIsXG4gIFNVU1BFTkRFRCA9IFwic3VzcGVuZGVkXCIsXG4gIENBTkNFTEVEID0gXCJjYW5jZWxlZFwiLFxuICBQRU5ESU5HX1JFR1VMQVRJT04gPSBcInBlbmRpbmdfcmVndWxhdGlvblwiLFxuICBOVUxMID0gXCJudWxsXCIsXG4gIElOQ09NUExFVEVfVEFYX0lEX0RBVEEgPSBcImluY29tcGxldGVfdGF4X2lkX2RhdGFcIixcbiAgRkFDRV9ESUROVF9NQVRDSCA9IFwiZmFjZV9kaWRudF9tYXRjaFwiLFxuICBSRUNPR05JVElPTl9FUlJPUiA9IFwicmVjb2duaXRpb25fZXJyb3JcIixcbiAgTk9fRE9DX1BJQ1RVUkUgPSBcIm5vX2RvY19waWN0dXJlXCIsXG4gIE5PX0ZBQ0lBTF9QSUNUVVJFID0gXCJub19mYWNpYWxfcGljdHVyZVwiLFxuICBOT19JTkZPX0ZPVU5EID0gXCJub19pbmZvX2ZvdW5kXCIsXG4gIERPQ19JU19OT1RfQkFTRV82NCA9IFwiZG9jX2lzX25vdF9iYXNlXzY0XCIsXG4gIEZBQ0VfSVNfTk9UX0JBU0VfNjQgPSBcImZhY2VfaXNfbm90X2Jhc2VfNjRcIixcbiAgUE9MSVRJQ0FMTFlfRVhQT1NFRF9QRVJTT04gPSBcInBvbGl0aWNhbGx5X2V4cG9zZWRfcGVyc29uXCIsXG4gIFNBTkNUSU9ORUQgPSBcInNhbmN0aW9uZWRcIlxufSJdfQ==