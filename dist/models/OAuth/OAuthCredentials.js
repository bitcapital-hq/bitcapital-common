"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../base");
class OAuthCredentials extends base_1.BaseModel {
    constructor(data) {
        super(data);
        this.virtual = false;
        this.expiresAt = new Date(Date.now() + data.expires_in * 1000);
        this.userId = data.user_id;
        this.virtual = data.virtual || this.virtual;
    }
}
exports.default = OAuthCredentials;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT0F1dGhDcmVkZW50aWFscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9tb2RlbHMvT0F1dGgvT0F1dGhDcmVkZW50aWFscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUF3RDtBQVl4RCxNQUFxQixnQkFBaUIsU0FBUSxnQkFBUztJQVNyRCxZQUFZLElBQXFDO1FBQy9DLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQVRkLFlBQU8sR0FBYSxLQUFLLENBQUM7UUFVeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDOUMsQ0FBQztDQUNGO0FBZkQsbUNBZUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlTW9kZWwsIEJhc2VNb2RlbFNjaGVtYSB9IGZyb20gXCIuLi8uLi9iYXNlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgT0F1dGhDcmVkZW50aWFsc1NjaGVtYSBleHRlbmRzIEJhc2VNb2RlbFNjaGVtYSB7XG4gIGFjY2Vzc190b2tlbjogc3RyaW5nO1xuICByZWZyZXNoX3Rva2VuPzogc3RyaW5nO1xuICB0b2tlbl90eXBlPzogc3RyaW5nO1xuICBleHBpcmVzX2luPzogbnVtYmVyO1xuICB1c2VyX2lkPzogc3RyaW5nO1xuICB2aXJ0dWFsPzogYm9vbGVhbjtcbiAgc2NvcGU6IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPQXV0aENyZWRlbnRpYWxzIGV4dGVuZHMgQmFzZU1vZGVsIHtcbiAgdmlydHVhbD86IGJvb2xlYW4gPSBmYWxzZTtcbiAgYWNjZXNzVG9rZW46IHN0cmluZztcbiAgcmVmcmVzaFRva2VuPzogc3RyaW5nO1xuICB0b2tlblR5cGU/OiBzdHJpbmc7XG4gIHVzZXJJZD86IHN0cmluZztcbiAgZXhwaXJlc0F0PzogRGF0ZTtcbiAgc2NvcGU6IHN0cmluZ1tdO1xuXG4gIGNvbnN0cnVjdG9yKGRhdGE6IFBhcnRpYWw8T0F1dGhDcmVkZW50aWFsc1NjaGVtYT4pIHtcbiAgICBzdXBlcihkYXRhKTtcbiAgICB0aGlzLmV4cGlyZXNBdCA9IG5ldyBEYXRlKERhdGUubm93KCkgKyBkYXRhLmV4cGlyZXNfaW4gKiAxMDAwKTtcbiAgICB0aGlzLnVzZXJJZCA9IGRhdGEudXNlcl9pZDtcbiAgICB0aGlzLnZpcnR1YWwgPSBkYXRhLnZpcnR1YWwgfHwgdGhpcy52aXJ0dWFsO1xuICB9XG59XG4iXX0=