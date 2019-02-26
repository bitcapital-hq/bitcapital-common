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
            if (response.status !== 200)
                throw response;
            return true;
        });
    }
    block(cardId, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.http.post(`/provider/cards/${cardId}/block`, payload);
            if (response.status !== 200)
                throw response;
            return true;
        });
    }
    unblock(cardId, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.http.post(`/provider/cards/${cardId}/unblock`, payload);
            if (response.status !== 200)
                throw response;
            return true;
        });
    }
    cancel(cardId, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.http.post(`/provider/cards/${cardId}/cancel`, payload);
            if (response.status !== 200)
                throw response;
            return true;
        });
    }
}
exports.default = CustodyCardWebService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9keUNhcmRXZWJTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL3NlcnZpY2VzL2ZlYXR1cmVzL0N1c3RvZHlDYXJkV2ViU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUNBQStDO0FBQy9DLDZDQUF3RTtBQWN4RSxNQUFxQixxQkFBc0IsU0FBUSw2QkFBa0I7SUFHbkUsWUFBNEIsT0FBcUM7UUFDL0QsS0FBSyxFQUFFLENBQUM7UUFEa0IsWUFBTyxHQUFQLE9BQU8sQ0FBOEI7UUFFL0QsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFdBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRVksSUFBSSxDQUFDLE1BQWMsRUFBRSxLQUFXOztZQUMzQyxNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLHNCQUFzQixrQkFBSSxNQUFNLElBQUssS0FBSyxFQUFHLENBQUM7WUFFbkYsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFO2dCQUNqQixPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7YUFDdEI7WUFFRCxNQUFNLFFBQVEsQ0FBQztRQUNqQixDQUFDO0tBQUE7SUFFWSxPQUFPLENBQUMsTUFBYyxFQUFFLEtBQVc7O1lBQzlDLE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsbUJBQW1CLE1BQU0sRUFBRSxvQkFBTyxLQUFLLEVBQUcsQ0FBQztZQUVoRixJQUFJLFFBQVEsQ0FBQyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFBRSxNQUFNLFFBQVEsQ0FBQztZQUVuRixPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDdkIsQ0FBQztLQUFBO0lBRVksWUFBWSxDQUFDLE9BQXNDOztZQUM5RCxNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLDhCQUE4QixFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBRS9FLElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUFFLE1BQU0sUUFBUSxDQUFDO1lBRW5GLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQztRQUN2QixDQUFDO0tBQUE7SUFFWSxXQUFXLENBQUMsT0FBcUM7O1lBQzVELE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsNkJBQTZCLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFFOUUsSUFBSSxRQUFRLENBQUMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQUUsTUFBTSxRQUFRLENBQUM7WUFFbkYsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO1FBQ3ZCLENBQUM7S0FBQTtJQUVZLFFBQVEsQ0FBQyxNQUFjLEVBQUUsT0FBOEI7O1lBQ2xFLE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLE1BQU0sV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBRXJGLElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxHQUFHO2dCQUFFLE1BQU0sUUFBUSxDQUFDO1lBRTVDLE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQztLQUFBO0lBRVksS0FBSyxDQUFDLE1BQWMsRUFBRSxPQUErQjs7WUFDaEUsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsTUFBTSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFFbEYsSUFBSSxRQUFRLENBQUMsTUFBTSxLQUFLLEdBQUc7Z0JBQUUsTUFBTSxRQUFRLENBQUM7WUFFNUMsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDO0tBQUE7SUFFWSxPQUFPLENBQUMsTUFBYyxFQUFFLE9BQWlDOztZQUNwRSxNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixNQUFNLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUVwRixJQUFJLFFBQVEsQ0FBQyxNQUFNLEtBQUssR0FBRztnQkFBRSxNQUFNLFFBQVEsQ0FBQztZQUU1QyxPQUFPLElBQUksQ0FBQztRQUNkLENBQUM7S0FBQTtJQUVZLE1BQU0sQ0FBQyxNQUFjLEVBQUUsT0FBc0M7O1lBQ3hFLE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLE1BQU0sU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBRW5GLElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxHQUFHO2dCQUFFLE1BQU0sUUFBUSxDQUFDO1lBRTVDLE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQztLQUFBO0NBQ0Y7QUF6RUQsd0NBeUVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cCwgSHR0cE9wdGlvbnMgfSBmcm9tIFwiLi4vLi4vYmFzZVwiO1xuaW1wb3J0IHsgQmFzZUN1c3RvZHlPcHRpb25zLCBDdXN0b2R5Q2FyZEZlYXR1cmUgfSBmcm9tIFwiLi4vLi4vcHJvdmlkZXJcIjtcbmltcG9ydCB7XG4gIFBheW1lbnRTY2hlbWEsXG4gIEVtaXRQaHlzaWNhbENhcmRSZXF1ZXN0U2NoZW1hLFxuICBDYXJkU2NoZW1hLFxuICBFbWl0VmlydHVhbENhcmRSZXF1ZXN0U2NoZW1hLFxuICBDYXJkQmxvY2tSZXF1ZXN0U2NoZW1hLFxuICBDYXJkVW5ibG9ja1JlcXVlc3RTY2hlbWEsXG4gIENhcmRCYXNlUmVxdWVzdFNjaGVtYSxcbiAgQ2FyZENhbmNlbGxhdGlvblJlcXVlc3RTY2hlbWFcbn0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEN1c3RvZHlDYXJkV2ViU2VydmljZU9wdGlvbnMgZXh0ZW5kcyBIdHRwT3B0aW9ucywgQmFzZUN1c3RvZHlPcHRpb25zIHt9XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvZHlDYXJkV2ViU2VydmljZSBleHRlbmRzIEN1c3RvZHlDYXJkRmVhdHVyZSB7XG4gIHByb3RlY3RlZCBodHRwOiBIdHRwO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSBvcHRpb25zOiBDdXN0b2R5Q2FyZFdlYlNlcnZpY2VPcHRpb25zKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmh0dHAgPSBuZXcgSHR0cChvcHRpb25zKTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBpbmZvKGNhcmRJZDogc3RyaW5nLCBleHRyYT86IGFueSk6IFByb21pc2U8UGF5bWVudFNjaGVtYT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5odHRwLmdldChcIi9wcm92aWRlci9jYXJkcy9pbmZvXCIsIHsgY2FyZElkLCAuLi5leHRyYSB9KTtcblxuICAgIGlmIChyZXNwb25zZS5kYXRhKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICB9XG5cbiAgICB0aHJvdyByZXNwb25zZTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBnZXRCeUlkKGNhcmRJZDogc3RyaW5nLCBleHRyYT86IGFueSk6IFByb21pc2U8Q2FyZFNjaGVtYSB8IHVuZGVmaW5lZD4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5odHRwLmdldChgL3Byb3ZpZGVyL2NhcmRzLyR7Y2FyZElkfWAsIHsgLi4uZXh0cmEgfSk7XG5cbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSAyMDAgfHwgIXJlc3BvbnNlLmRhdGEgfHwgIXJlc3BvbnNlLmRhdGEuaWQpIHRocm93IHJlc3BvbnNlO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgZW1pdFBoeXNpY2FsKHBheWxvYWQ6IEVtaXRQaHlzaWNhbENhcmRSZXF1ZXN0U2NoZW1hKTogUHJvbWlzZTxDYXJkU2NoZW1hPiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmh0dHAucG9zdChgL3Byb3ZpZGVyL2NhcmRzL2VtaXRQaHlzaWNhbGAsIHBheWxvYWQpO1xuXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwIHx8ICFyZXNwb25zZS5kYXRhIHx8ICFyZXNwb25zZS5kYXRhLmlkKSB0aHJvdyByZXNwb25zZTtcblxuICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGVtaXRWaXJ0dWFsKHBheWxvYWQ6IEVtaXRWaXJ0dWFsQ2FyZFJlcXVlc3RTY2hlbWEpOiBQcm9taXNlPENhcmRTY2hlbWE+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuaHR0cC5wb3N0KGAvcHJvdmlkZXIvY2FyZHMvZW1pdFZpcnR1YWxgLCBwYXlsb2FkKTtcblxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IDIwMCB8fCAhcmVzcG9uc2UuZGF0YSB8fCAhcmVzcG9uc2UuZGF0YS5pZCkgdGhyb3cgcmVzcG9uc2U7XG5cbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBhY3RpdmF0ZShjYXJkSWQ6IHN0cmluZywgcGF5bG9hZDogQ2FyZEJhc2VSZXF1ZXN0U2NoZW1hKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmh0dHAucG9zdChgL3Byb3ZpZGVyL2NhcmRzLyR7Y2FyZElkfS9hY3RpdmF0ZWAsIHBheWxvYWQpO1xuXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwKSB0aHJvdyByZXNwb25zZTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGJsb2NrKGNhcmRJZDogc3RyaW5nLCBwYXlsb2FkOiBDYXJkQmxvY2tSZXF1ZXN0U2NoZW1hKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmh0dHAucG9zdChgL3Byb3ZpZGVyL2NhcmRzLyR7Y2FyZElkfS9ibG9ja2AsIHBheWxvYWQpO1xuXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwKSB0aHJvdyByZXNwb25zZTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIHVuYmxvY2soY2FyZElkOiBzdHJpbmcsIHBheWxvYWQ6IENhcmRVbmJsb2NrUmVxdWVzdFNjaGVtYSk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5odHRwLnBvc3QoYC9wcm92aWRlci9jYXJkcy8ke2NhcmRJZH0vdW5ibG9ja2AsIHBheWxvYWQpO1xuXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwKSB0aHJvdyByZXNwb25zZTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGNhbmNlbChjYXJkSWQ6IHN0cmluZywgcGF5bG9hZDogQ2FyZENhbmNlbGxhdGlvblJlcXVlc3RTY2hlbWEpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuaHR0cC5wb3N0KGAvcHJvdmlkZXIvY2FyZHMvJHtjYXJkSWR9L2NhbmNlbGAsIHBheWxvYWQpO1xuXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwKSB0aHJvdyByZXNwb25zZTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG4iXX0=