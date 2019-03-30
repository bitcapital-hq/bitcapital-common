"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("../..");
class PhoneCredit extends __1.BaseModel {
    constructor(data) {
        super(data);
        Object.assign(this, data);
    }
}
exports.PhoneCredit = PhoneCredit;
class PhoneCreditDealers extends __1.BaseModel {
    constructor(data) {
        super(data);
        Object.assign(this, data);
    }
}
exports.PhoneCreditDealers = PhoneCreditDealers;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL21vZGVscy9QaG9uZUNyZWRpdC9zY2hlbWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2QkFBbUQ7QUFrQm5ELE1BQWEsV0FBWSxTQUFRLGFBQVM7SUFheEMsWUFBWSxJQUFnQztRQUMxQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDWixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0NBQ0Y7QUFqQkQsa0NBaUJDO0FBU0QsTUFBYSxrQkFBbUIsU0FBUSxhQUFTO0lBSzdDLFlBQVksSUFBdUM7UUFDL0MsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ1osTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztDQUNKO0FBVEQsZ0RBU0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlTW9kZWxTY2hlbWEsIEJhc2VNb2RlbCB9IGZyb20gXCIuLi8uLlwiO1xuXG5cbmV4cG9ydCBpbnRlcmZhY2UgUGhvbmVDcmVkaXRTY2hlbWEgZXh0ZW5kcyBCYXNlTW9kZWxTY2hlbWEge1xuICB3YWxsZXRJZD86IHN0cmluZztcbiAgcHJvdmlkZXJDb2RlOiBzdHJpbmc7XG4gIHBob25lTnVtYmVyOiBzdHJpbmc7XG4gIHBob25lQ29kZTogc3RyaW5nO1xuICBjaG9zZW5BbW91bnQ/OiBzdHJpbmc7XG4gIHByb3ZpZGVyT3JkZXJJZDogc3RyaW5nO1xuICBzdGF0dXM6IHN0cmluZztcbiAgYW1vdW50czpbe1xuICAgICAgaWQ6c3RyaW5nLFxuICAgICAgYW1vdW50OnN0cmluZyxcbiAgICAgIGFtb3VudEtleTpzdHJpbmdcbiAgfV1cbn1cblxuZXhwb3J0IGNsYXNzIFBob25lQ3JlZGl0IGV4dGVuZHMgQmFzZU1vZGVsIGltcGxlbWVudHMgUGhvbmVDcmVkaXRTY2hlbWF7XG4gIHdhbGxldElkPzogc3RyaW5nO1xuICBwcm92aWRlckNvZGU6IHN0cmluZztcbiAgcGhvbmVOdW1iZXI6IHN0cmluZztcbiAgcGhvbmVDb2RlOiBzdHJpbmc7XG4gIGNob3NlbkFtb3VudD86IHN0cmluZztcbiAgcHJvdmlkZXJPcmRlcklkOiBzdHJpbmc7XG4gIHN0YXR1czogc3RyaW5nO1xuICBhbW91bnRzOlt7XG4gICAgaWQ6c3RyaW5nLFxuICAgIGFtb3VudDpzdHJpbmcsXG4gICAgYW1vdW50S2V5OnN0cmluZ1xuICB9XVxuICBjb25zdHJ1Y3RvcihkYXRhOiBQYXJ0aWFsPFBob25lQ3JlZGl0U2NoZW1hPikge1xuICAgIHN1cGVyKGRhdGEpO1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBQaG9uZUNyZWRpdERlYWxlcnNTY2hlbWF7XG4gICAgZGVhbGVyczpbe1xuICAgICAgICBuYW1lOiBzdHJpbmcsXG4gICAgICAgIGNvZGU6IHN0cmluZ1xuICAgIH1dO1xufVxuXG5leHBvcnQgY2xhc3MgUGhvbmVDcmVkaXREZWFsZXJzIGV4dGVuZHMgQmFzZU1vZGVsIGltcGxlbWVudHMgUGhvbmVDcmVkaXREZWFsZXJzU2NoZW1hIHtcbiAgICBkZWFsZXJzOlt7XG4gICAgICAgIG5hbWU6IHN0cmluZyxcbiAgICAgICAgY29kZTogc3RyaW5nXG4gICAgfV07XG4gICAgY29uc3RydWN0b3IoZGF0YTogUGFydGlhbDxQaG9uZUNyZWRpdERlYWxlcnNTY2hlbWE+KSB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xuICAgIH1cbn1cbiJdfQ==