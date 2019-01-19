"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../base");
var OAuthClientStatus;
(function (OAuthClientStatus) {
    OAuthClientStatus["ACTIVE"] = "active";
    OAuthClientStatus["INACTIVE"] = "inactive";
})(OAuthClientStatus = exports.OAuthClientStatus || (exports.OAuthClientStatus = {}));
class OAuthClient extends base_1.BaseModel {
    constructor(data) {
        super(data);
    }
}
exports.default = OAuthClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT0F1dGhDbGllbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvbW9kZWxzL09BdXRoL09BdXRoQ2xpZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQXdEO0FBRXhELElBQVksaUJBR1g7QUFIRCxXQUFZLGlCQUFpQjtJQUMzQixzQ0FBaUIsQ0FBQTtJQUNqQiwwQ0FBcUIsQ0FBQTtBQUN2QixDQUFDLEVBSFcsaUJBQWlCLEdBQWpCLHlCQUFpQixLQUFqQix5QkFBaUIsUUFHNUI7QUFTRCxpQkFBaUMsU0FBUSxnQkFBUztJQU1oRCxZQUFZLElBQXVCO1FBQ2pDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNkLENBQUM7Q0FDRjtBQVRELDhCQVNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZU1vZGVsU2NoZW1hLCBCYXNlTW9kZWwgfSBmcm9tIFwiLi4vLi4vYmFzZVwiO1xuXG5leHBvcnQgZW51bSBPQXV0aENsaWVudFN0YXR1cyB7XG4gIEFDVElWRSA9IFwiYWN0aXZlXCIsXG4gIElOQUNUSVZFID0gXCJpbmFjdGl2ZVwiXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgT0F1dGhDbGllbnRTY2hlbWEgZXh0ZW5kcyBCYXNlTW9kZWxTY2hlbWEge1xuICBjbGllbnRJZDogc3RyaW5nO1xuICBjbGllbnRTZWNyZXQ/OiBzdHJpbmc7XG4gIHBsYXRmb3JtOiBzdHJpbmc7XG4gIHN0YXR1czogT0F1dGhDbGllbnRTdGF0dXM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9BdXRoQ2xpZW50IGV4dGVuZHMgQmFzZU1vZGVsIGltcGxlbWVudHMgT0F1dGhDbGllbnRTY2hlbWEge1xuICBjbGllbnRJZDogc3RyaW5nO1xuICBjbGllbnRTZWNyZXQ/OiBzdHJpbmc7XG4gIHBsYXRmb3JtOiBzdHJpbmc7XG4gIHN0YXR1czogT0F1dGhDbGllbnRTdGF0dXM7XG5cbiAgY29uc3RydWN0b3IoZGF0YTogT0F1dGhDbGllbnRTY2hlbWEpIHtcbiAgICBzdXBlcihkYXRhKTtcbiAgfVxufVxuIl19