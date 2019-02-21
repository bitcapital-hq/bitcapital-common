"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("../../base");
const provider_1 = require("../../provider");
class CustodyCardWebService extends provider_1.CustodyCardFeature {
    constructor(options) {
        super();
        this.options = options;
        this.http = new base_1.Http(options);
    }
    info(cardId, extra) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.http.get('/provider/cards/info', Object.assign({ cardId }, extra));
            if (response.data) {
                return response.data;
            }
            throw response;
        });
    }
    getById(cardId, extra) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.http.get(`/provider/cards/${cardId}`, Object.assign({}, extra));
            if (response.status !== 200 || !response.data || !response.data.id)
                throw response;
            return response.data;
        });
    }
    emitPhysical(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.http.post(`/provider/cards/emitPhysical`, payload);
            if (response.status !== 200 || !response.data || !response.data.id)
                throw response;
            return response.data;
        });
    }
    emitVirtual(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.http.post(`/provider/cards/emitVirtual`, payload);
            if (response.status !== 200 || !response.data || !response.data.id)
                throw response;
            return response.data;
        });
    }
    activate(cardId, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.http.post(`/provider/cards/${cardId}/activate`, payload);
            return response.status === 200 ? [true, "SUCCESS"] : [false, response.data.message];
        });
    }
    block(cardId, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.http.post(`/provider/cards/${cardId}/block`, payload);
            return response.status === 200 ? [true, "SUCCESS"] : [false, response.data.message];
        });
    }
    unblock(cardId, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.http.post(`/provider/cards/${cardId}/unblock`, payload);
            return response.status === 200 ? [true, "SUCCESS"] : [false, response.data.message];
        });
    }
}
exports.default = CustodyCardWebService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9keUNhcmRXZWJTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL3NlcnZpY2VzL2ZlYXR1cmVzL0N1c3RvZHlDYXJkV2ViU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUNBQStDO0FBQy9DLDZDQUF3RTtBQWN4RSxNQUFxQixxQkFBc0IsU0FBUSw2QkFBa0I7SUFHbkUsWUFBNEIsT0FBcUM7UUFDL0QsS0FBSyxFQUFFLENBQUM7UUFEa0IsWUFBTyxHQUFQLE9BQU8sQ0FBOEI7UUFFL0QsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFdBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRVksSUFBSSxDQUFDLE1BQWMsRUFBRSxLQUFXOztZQUMzQyxNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLHNCQUFzQixrQkFBSSxNQUFNLElBQUssS0FBSyxFQUFHLENBQUM7WUFFbkYsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFO2dCQUNqQixPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7YUFDdEI7WUFFRCxNQUFNLFFBQVEsQ0FBQztRQUNqQixDQUFDO0tBQUE7SUFFWSxPQUFPLENBQUMsTUFBYyxFQUFFLEtBQVc7O1lBQzlDLE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsbUJBQW1CLE1BQU0sRUFBRSxvQkFBTyxLQUFLLEVBQUcsQ0FBQztZQUVoRixJQUFJLFFBQVEsQ0FBQyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFBRSxNQUFNLFFBQVEsQ0FBQztZQUVuRixPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDdkIsQ0FBQztLQUFBO0lBRVksWUFBWSxDQUFDLE9BQXNDOztZQUM5RCxNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLDhCQUE4QixFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBRS9FLElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUFFLE1BQU0sUUFBUSxDQUFDO1lBRW5GLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQztRQUN2QixDQUFDO0tBQUE7SUFFWSxXQUFXLENBQUMsT0FBcUM7O1lBQzVELE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsNkJBQTZCLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFFOUUsSUFBSSxRQUFRLENBQUMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQUUsTUFBTSxRQUFRLENBQUM7WUFFbkYsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO1FBQ3ZCLENBQUM7S0FBQTtJQUVZLFFBQVEsQ0FBQyxNQUFjLEVBQUUsT0FBOEI7O1lBQ2xFLE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLE1BQU0sV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ3JGLE9BQU8sUUFBUSxDQUFDLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3RGLENBQUM7S0FBQTtJQUVZLEtBQUssQ0FBQyxNQUFjLEVBQUUsT0FBK0I7O1lBQ2hFLE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLE1BQU0sUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ2xGLE9BQU8sUUFBUSxDQUFDLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3RGLENBQUM7S0FBQTtJQUVZLE9BQU8sQ0FBQyxNQUFjLEVBQUUsT0FBaUM7O1lBQ3BFLE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLE1BQU0sVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ3BGLE9BQU8sUUFBUSxDQUFDLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3RGLENBQUM7S0FBQTtDQUNGO0FBeERELHdDQXdEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHAsIEh0dHBPcHRpb25zIH0gZnJvbSBcIi4uLy4uL2Jhc2VcIjtcclxuaW1wb3J0IHsgQmFzZUN1c3RvZHlPcHRpb25zLCBDdXN0b2R5Q2FyZEZlYXR1cmUgfSBmcm9tIFwiLi4vLi4vcHJvdmlkZXJcIjtcclxuaW1wb3J0IHsgXHJcbiAgUGF5bWVudFNjaGVtYSwgXHJcbiAgRW1pdFBoeXNpY2FsQ2FyZFJlcXVlc3RTY2hlbWEsIFxyXG4gIENhcmRTY2hlbWEsIFxyXG4gIEVtaXRWaXJ0dWFsQ2FyZFJlcXVlc3RTY2hlbWEsIFxyXG4gIENhcmRCbG9ja1JlcXVlc3RTY2hlbWEsIFxyXG4gIENhcmRVbmJsb2NrUmVxdWVzdFNjaGVtYSwgXHJcbiAgQ2FyZEJhc2VSZXF1ZXN0U2NoZW1hXHJcbn0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDdXN0b2R5Q2FyZFdlYlNlcnZpY2VPcHRpb25zIGV4dGVuZHMgSHR0cE9wdGlvbnMsIEJhc2VDdXN0b2R5T3B0aW9ucyB7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvZHlDYXJkV2ViU2VydmljZSBleHRlbmRzIEN1c3RvZHlDYXJkRmVhdHVyZSB7XHJcbiAgcHJvdGVjdGVkIGh0dHA6IEh0dHA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSBvcHRpb25zOiBDdXN0b2R5Q2FyZFdlYlNlcnZpY2VPcHRpb25zKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5odHRwID0gbmV3IEh0dHAob3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgaW5mbyhjYXJkSWQ6IHN0cmluZywgZXh0cmE/OiBhbnkpOiBQcm9taXNlPFBheW1lbnRTY2hlbWE+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5odHRwLmdldCgnL3Byb3ZpZGVyL2NhcmRzL2luZm8nLCB7IGNhcmRJZCwgLi4uZXh0cmEgfSk7XHJcblxyXG4gICAgaWYgKHJlc3BvbnNlLmRhdGEpIHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgdGhyb3cgcmVzcG9uc2U7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgZ2V0QnlJZChjYXJkSWQ6IHN0cmluZywgZXh0cmE/OiBhbnkpOiBQcm9taXNlPENhcmRTY2hlbWEgfCB1bmRlZmluZWQ+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5odHRwLmdldChgL3Byb3ZpZGVyL2NhcmRzLyR7Y2FyZElkfWAsIHsgLi4uZXh0cmEgfSk7XHJcblxyXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwIHx8ICFyZXNwb25zZS5kYXRhIHx8ICFyZXNwb25zZS5kYXRhLmlkKSB0aHJvdyByZXNwb25zZTtcclxuXHJcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBlbWl0UGh5c2ljYWwocGF5bG9hZDogRW1pdFBoeXNpY2FsQ2FyZFJlcXVlc3RTY2hlbWEpOiBQcm9taXNlPENhcmRTY2hlbWE+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5odHRwLnBvc3QoYC9wcm92aWRlci9jYXJkcy9lbWl0UGh5c2ljYWxgLCBwYXlsb2FkKTtcclxuXHJcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSAyMDAgfHwgIXJlc3BvbnNlLmRhdGEgfHwgIXJlc3BvbnNlLmRhdGEuaWQpIHRocm93IHJlc3BvbnNlO1xyXG5cclxuICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIGVtaXRWaXJ0dWFsKHBheWxvYWQ6IEVtaXRWaXJ0dWFsQ2FyZFJlcXVlc3RTY2hlbWEpOiBQcm9taXNlPENhcmRTY2hlbWE+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5odHRwLnBvc3QoYC9wcm92aWRlci9jYXJkcy9lbWl0VmlydHVhbGAsIHBheWxvYWQpO1xyXG5cclxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IDIwMCB8fCAhcmVzcG9uc2UuZGF0YSB8fCAhcmVzcG9uc2UuZGF0YS5pZCkgdGhyb3cgcmVzcG9uc2U7XHJcblxyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgYWN0aXZhdGUoY2FyZElkOiBzdHJpbmcsIHBheWxvYWQ6IENhcmRCYXNlUmVxdWVzdFNjaGVtYSk6IFByb21pc2U8W2Jvb2xlYW4sIHN0cmluZ10+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5odHRwLnBvc3QoYC9wcm92aWRlci9jYXJkcy8ke2NhcmRJZH0vYWN0aXZhdGVgLCBwYXlsb2FkKTtcclxuICAgIHJldHVybiByZXNwb25zZS5zdGF0dXMgPT09IDIwMCA/IFt0cnVlLCBcIlNVQ0NFU1NcIl0gOiBbZmFsc2UsIHJlc3BvbnNlLmRhdGEubWVzc2FnZV07XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgYmxvY2soY2FyZElkOiBzdHJpbmcsIHBheWxvYWQ6IENhcmRCbG9ja1JlcXVlc3RTY2hlbWEpOiBQcm9taXNlPFtib29sZWFuLCBzdHJpbmddPiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuaHR0cC5wb3N0KGAvcHJvdmlkZXIvY2FyZHMvJHtjYXJkSWR9L2Jsb2NrYCwgcGF5bG9hZCk7XHJcbiAgICByZXR1cm4gcmVzcG9uc2Uuc3RhdHVzID09PSAyMDAgPyBbdHJ1ZSwgXCJTVUNDRVNTXCJdIDogW2ZhbHNlLCByZXNwb25zZS5kYXRhLm1lc3NhZ2VdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIHVuYmxvY2soY2FyZElkOiBzdHJpbmcsIHBheWxvYWQ6IENhcmRVbmJsb2NrUmVxdWVzdFNjaGVtYSk6IFByb21pc2U8W2Jvb2xlYW4sIHN0cmluZ10+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5odHRwLnBvc3QoYC9wcm92aWRlci9jYXJkcy8ke2NhcmRJZH0vdW5ibG9ja2AsIHBheWxvYWQpO1xyXG4gICAgcmV0dXJuIHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwID8gW3RydWUsIFwiU1VDQ0VTU1wiXSA6IFtmYWxzZSwgcmVzcG9uc2UuZGF0YS5tZXNzYWdlXTtcclxuICB9XHJcbn1cclxuIl19