"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const base_1 = require("../../base");
const User_1 = require("../User");
class OAuthRefreshToken extends base_1.BaseModel {
    constructor(data) {
        super(data);
        Object.assign(this, data);
        this.expires = data.expires && new Date(data.expires);
        this.user = data.user && new User_1.User(data.user);
        this.client = data.client && new _1.OAuthClient(data.client);
        this.accessToken = data.accessToken && new _1.OAuthAccessToken(data.accessToken);
    }
}
exports.OAuthRefreshToken = OAuthRefreshToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT0F1dGhSZWZyZXNoVG9rZW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvbW9kZWxzL09BdXRoL09BdXRoUmVmcmVzaFRva2VuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsd0JBQWtEO0FBQ2xELHFDQUF3RDtBQUN4RCxrQ0FBMkM7QUFhM0MsTUFBYSxpQkFBa0IsU0FBUSxnQkFBUztJQVE5QyxZQUFZLElBQXNDO1FBQ2hELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVaLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRTFCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksV0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxjQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLG1CQUFnQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNoRixDQUFDO0NBQ0Y7QUFsQkQsOENBa0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT0F1dGhBY2Nlc3NUb2tlbiwgT0F1dGhDbGllbnQgfSBmcm9tIFwiLlwiO1xuaW1wb3J0IHsgQmFzZU1vZGVsLCBCYXNlTW9kZWxTY2hlbWEgfSBmcm9tIFwiLi4vLi4vYmFzZVwiO1xuaW1wb3J0IHsgVXNlciwgVXNlclNjaGVtYSB9IGZyb20gXCIuLi9Vc2VyXCI7XG5pbXBvcnQgeyBPQXV0aEFjY2Vzc1Rva2VuU2NoZW1hIH0gZnJvbSBcIi4vT0F1dGhBY2Nlc3NUb2tlblwiO1xuaW1wb3J0IHsgT0F1dGhDbGllbnRTY2hlbWEgfSBmcm9tIFwiLi9PQXV0aENsaWVudFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIE9BdXRoUmVmcmVzaFRva2VuU2NoZW1hIGV4dGVuZHMgQmFzZU1vZGVsU2NoZW1hIHtcbiAgaWQ6IHN0cmluZztcbiAgcmVmcmVzaFRva2VuOiBzdHJpbmc7XG4gIGV4cGlyZXM6IHN0cmluZyB8IERhdGU7XG4gIHVzZXI6IFVzZXJTY2hlbWE7XG4gIGNsaWVudDogT0F1dGhDbGllbnRTY2hlbWE7XG4gIGFjY2Vzc1Rva2VuOiBPQXV0aEFjY2Vzc1Rva2VuU2NoZW1hO1xufVxuXG5leHBvcnQgY2xhc3MgT0F1dGhSZWZyZXNoVG9rZW4gZXh0ZW5kcyBCYXNlTW9kZWwgaW1wbGVtZW50cyBPQXV0aFJlZnJlc2hUb2tlblNjaGVtYSB7XG4gIGlkOiBzdHJpbmc7XG4gIHJlZnJlc2hUb2tlbjogc3RyaW5nO1xuICBleHBpcmVzOiBEYXRlO1xuICB1c2VyOiBVc2VyO1xuICBjbGllbnQ6IE9BdXRoQ2xpZW50O1xuICBhY2Nlc3NUb2tlbjogT0F1dGhBY2Nlc3NUb2tlbjtcblxuICBjb25zdHJ1Y3RvcihkYXRhOiBQYXJ0aWFsPE9BdXRoUmVmcmVzaFRva2VuU2NoZW1hPikge1xuICAgIHN1cGVyKGRhdGEpO1xuXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcblxuICAgIHRoaXMuZXhwaXJlcyA9IGRhdGEuZXhwaXJlcyAmJiBuZXcgRGF0ZShkYXRhLmV4cGlyZXMpO1xuICAgIHRoaXMudXNlciA9IGRhdGEudXNlciAmJiBuZXcgVXNlcihkYXRhLnVzZXIpO1xuICAgIHRoaXMuY2xpZW50ID0gZGF0YS5jbGllbnQgJiYgbmV3IE9BdXRoQ2xpZW50KGRhdGEuY2xpZW50KTtcbiAgICB0aGlzLmFjY2Vzc1Rva2VuID0gZGF0YS5hY2Nlc3NUb2tlbiAmJiBuZXcgT0F1dGhBY2Nlc3NUb2tlbihkYXRhLmFjY2Vzc1Rva2VuKTtcbiAgfVxufVxuIl19