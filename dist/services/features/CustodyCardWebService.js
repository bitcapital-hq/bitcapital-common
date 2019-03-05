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
        this.http = options.http || new base_1.Http(options);
    }
    info(cardId, extra) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.http.get("/provider/cards/info", Object.assign({ cardId }, extra));
            if (response.data) {
                return response.data;
            }
            throw response;
        });
    }
    getById(cardId, extra) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.http.get(`/provider/cards/${cardId}`, Object.assign({}, extra));
            if (!response.data || !response.data.id)
                throw response;
            return response.data;
        });
    }
    emitPhysical(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.http.post(`/provider/cards/emitPhysical`, payload);
            if (!response.data || !response.data.id)
                throw response;
            return response.data;
        });
    }
    emitVirtual(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.http.post(`/provider/cards/emitVirtual`, payload);
            if (!response.data || !response.data.id)
                throw response;
            return response.data;
        });
    }
    activate(cardId, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.http.post(`/provider/cards/${cardId}/activate`, payload);
            return true;
        });
    }
    block(cardId, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.http.post(`/provider/cards/${cardId}/block`, payload);
            return true;
        });
    }
    unblock(cardId, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.http.post(`/provider/cards/${cardId}/unblock`, payload);
            return true;
        });
    }
    cancel(cardId, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.http.post(`/provider/cards/${cardId}/cancel`, payload);
            return true;
        });
    }
}
exports.default = CustodyCardWebService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9keUNhcmRXZWJTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL3NlcnZpY2VzL2ZlYXR1cmVzL0N1c3RvZHlDYXJkV2ViU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUNBQStDO0FBQy9DLDZDQUF3RTtBQWV4RSxNQUFxQixxQkFBc0IsU0FBUSw2QkFBa0I7SUFHbkUsWUFBNEIsT0FBcUM7UUFDL0QsS0FBSyxFQUFFLENBQUM7UUFEa0IsWUFBTyxHQUFQLE9BQU8sQ0FBOEI7UUFFL0QsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxJQUFJLElBQUksV0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFWSxJQUFJLENBQUMsTUFBYyxFQUFFLEtBQVc7O1lBQzNDLE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsc0JBQXNCLGtCQUFJLE1BQU0sSUFBSyxLQUFLLEVBQUcsQ0FBQztZQUVuRixJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUU7Z0JBQ2pCLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQzthQUN0QjtZQUVELE1BQU0sUUFBUSxDQUFDO1FBQ2pCLENBQUM7S0FBQTtJQUVZLE9BQU8sQ0FBQyxNQUFjLEVBQUUsS0FBVzs7WUFDOUMsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsTUFBTSxFQUFFLG9CQUFPLEtBQUssRUFBRyxDQUFDO1lBRWhGLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUFFLE1BQU0sUUFBUSxDQUFDO1lBRXhELE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQztRQUN2QixDQUFDO0tBQUE7SUFFWSxZQUFZLENBQUMsT0FBc0M7O1lBQzlELE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsOEJBQThCLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFFL0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQUUsTUFBTSxRQUFRLENBQUM7WUFFeEQsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO1FBQ3ZCLENBQUM7S0FBQTtJQUVZLFdBQVcsQ0FBQyxPQUFxQzs7WUFDNUQsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyw2QkFBNkIsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUU5RSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFBRSxNQUFNLFFBQVEsQ0FBQztZQUV4RCxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDdkIsQ0FBQztLQUFBO0lBRVksUUFBUSxDQUFDLE1BQWMsRUFBRSxPQUE4Qjs7WUFDbEUsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsTUFBTSxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFFcEUsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDO0tBQUE7SUFFWSxLQUFLLENBQUMsTUFBYyxFQUFFLE9BQStCOztZQUNoRSxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixNQUFNLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUVqRSxPQUFPLElBQUksQ0FBQztRQUNkLENBQUM7S0FBQTtJQUVZLE9BQU8sQ0FBQyxNQUFjLEVBQUUsT0FBaUM7O1lBQ3BFLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLE1BQU0sVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBRW5FLE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQztLQUFBO0lBRVksTUFBTSxDQUFDLE1BQWMsRUFBRSxPQUFzQzs7WUFDeEUsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsTUFBTSxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFFbEUsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDO0tBQUE7Q0FDRjtBQWpFRCx3Q0FpRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwLCBIdHRwT3B0aW9ucyB9IGZyb20gXCIuLi8uLi9iYXNlXCI7XG5pbXBvcnQgeyBCYXNlQ3VzdG9keU9wdGlvbnMsIEN1c3RvZHlDYXJkRmVhdHVyZSB9IGZyb20gXCIuLi8uLi9wcm92aWRlclwiO1xuaW1wb3J0IHtcbiAgRW1pdFBoeXNpY2FsQ2FyZFJlcXVlc3RTY2hlbWEsXG4gIEVtaXRWaXJ0dWFsQ2FyZFJlcXVlc3RTY2hlbWEsXG4gIENhcmRCbG9ja1JlcXVlc3RTY2hlbWEsXG4gIENhcmRVbmJsb2NrUmVxdWVzdFNjaGVtYSxcbiAgQ2FyZEJhc2VSZXF1ZXN0U2NoZW1hLFxuICBDYXJkQ2FuY2VsbGF0aW9uUmVxdWVzdFNjaGVtYSxcbiAgUGF5bWVudCxcbiAgQ2FyZFxufSBmcm9tIFwiLi4vLi4vbW9kZWxzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3VzdG9keUNhcmRXZWJTZXJ2aWNlT3B0aW9ucyBleHRlbmRzIEh0dHBPcHRpb25zLCBCYXNlQ3VzdG9keU9wdGlvbnMge1xuICBodHRwPzogSHR0cDtcbn1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvZHlDYXJkV2ViU2VydmljZSBleHRlbmRzIEN1c3RvZHlDYXJkRmVhdHVyZSB7XG4gIHB1YmxpYyBodHRwOiBIdHRwO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSBvcHRpb25zOiBDdXN0b2R5Q2FyZFdlYlNlcnZpY2VPcHRpb25zKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmh0dHAgPSBvcHRpb25zLmh0dHAgfHwgbmV3IEh0dHAob3B0aW9ucyk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgaW5mbyhjYXJkSWQ6IHN0cmluZywgZXh0cmE/OiBhbnkpOiBQcm9taXNlPFBheW1lbnQ+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuaHR0cC5nZXQoXCIvcHJvdmlkZXIvY2FyZHMvaW5mb1wiLCB7IGNhcmRJZCwgLi4uZXh0cmEgfSk7XG5cbiAgICBpZiAocmVzcG9uc2UuZGF0YSkge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gICAgfVxuXG4gICAgdGhyb3cgcmVzcG9uc2U7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgZ2V0QnlJZChjYXJkSWQ6IHN0cmluZywgZXh0cmE/OiBhbnkpOiBQcm9taXNlPENhcmQgfCB1bmRlZmluZWQ+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuaHR0cC5nZXQoYC9wcm92aWRlci9jYXJkcy8ke2NhcmRJZH1gLCB7IC4uLmV4dHJhIH0pO1xuXG4gICAgaWYgKCFyZXNwb25zZS5kYXRhIHx8ICFyZXNwb25zZS5kYXRhLmlkKSB0aHJvdyByZXNwb25zZTtcblxuICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGVtaXRQaHlzaWNhbChwYXlsb2FkOiBFbWl0UGh5c2ljYWxDYXJkUmVxdWVzdFNjaGVtYSk6IFByb21pc2U8Q2FyZD4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5odHRwLnBvc3QoYC9wcm92aWRlci9jYXJkcy9lbWl0UGh5c2ljYWxgLCBwYXlsb2FkKTtcblxuICAgIGlmICghcmVzcG9uc2UuZGF0YSB8fCAhcmVzcG9uc2UuZGF0YS5pZCkgdGhyb3cgcmVzcG9uc2U7XG5cbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBlbWl0VmlydHVhbChwYXlsb2FkOiBFbWl0VmlydHVhbENhcmRSZXF1ZXN0U2NoZW1hKTogUHJvbWlzZTxDYXJkPiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmh0dHAucG9zdChgL3Byb3ZpZGVyL2NhcmRzL2VtaXRWaXJ0dWFsYCwgcGF5bG9hZCk7XG5cbiAgICBpZiAoIXJlc3BvbnNlLmRhdGEgfHwgIXJlc3BvbnNlLmRhdGEuaWQpIHRocm93IHJlc3BvbnNlO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgYWN0aXZhdGUoY2FyZElkOiBzdHJpbmcsIHBheWxvYWQ6IENhcmRCYXNlUmVxdWVzdFNjaGVtYSk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGF3YWl0IHRoaXMuaHR0cC5wb3N0KGAvcHJvdmlkZXIvY2FyZHMvJHtjYXJkSWR9L2FjdGl2YXRlYCwgcGF5bG9hZCk7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBibG9jayhjYXJkSWQ6IHN0cmluZywgcGF5bG9hZDogQ2FyZEJsb2NrUmVxdWVzdFNjaGVtYSk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGF3YWl0IHRoaXMuaHR0cC5wb3N0KGAvcHJvdmlkZXIvY2FyZHMvJHtjYXJkSWR9L2Jsb2NrYCwgcGF5bG9hZCk7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyB1bmJsb2NrKGNhcmRJZDogc3RyaW5nLCBwYXlsb2FkOiBDYXJkVW5ibG9ja1JlcXVlc3RTY2hlbWEpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBhd2FpdCB0aGlzLmh0dHAucG9zdChgL3Byb3ZpZGVyL2NhcmRzLyR7Y2FyZElkfS91bmJsb2NrYCwgcGF5bG9hZCk7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBjYW5jZWwoY2FyZElkOiBzdHJpbmcsIHBheWxvYWQ6IENhcmRDYW5jZWxsYXRpb25SZXF1ZXN0U2NoZW1hKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgYXdhaXQgdGhpcy5odHRwLnBvc3QoYC9wcm92aWRlci9jYXJkcy8ke2NhcmRJZH0vY2FuY2VsYCwgcGF5bG9hZCk7XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIl19