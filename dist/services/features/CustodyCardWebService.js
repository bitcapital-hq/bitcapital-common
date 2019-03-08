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
            if (response.data) {
                return response.data;
            }
            throw response;
        });
    }
    emitPhysical(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.http.post(`/provider/cards/emitPhysical`, payload);
            if (response.data) {
                return response.data;
            }
            throw response;
        });
    }
    emitVirtual(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.http.post(`/provider/cards/emitVirtual`, payload);
            if (response.data) {
                return response.data;
            }
            throw response;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9keUNhcmRXZWJTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vbGliL3NlcnZpY2VzL2ZlYXR1cmVzL0N1c3RvZHlDYXJkV2ViU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUNBQStDO0FBQy9DLDZDQUF3RTtBQWV4RSxNQUFxQixxQkFBc0IsU0FBUSw2QkFBa0I7SUFHbkUsWUFBNEIsT0FBcUM7UUFDL0QsS0FBSyxFQUFFLENBQUM7UUFEa0IsWUFBTyxHQUFQLE9BQU8sQ0FBOEI7UUFFL0QsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxJQUFJLElBQUksV0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFWSxJQUFJLENBQUMsTUFBYyxFQUFFLEtBQVc7O1lBQzNDLE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsc0JBQXNCLGtCQUFJLE1BQU0sSUFBSyxLQUFLLEVBQUcsQ0FBQztZQUVuRixJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUU7Z0JBQ2pCLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQzthQUN0QjtZQUVELE1BQU0sUUFBUSxDQUFDO1FBQ2pCLENBQUM7S0FBQTtJQUVZLE9BQU8sQ0FBQyxNQUFjLEVBQUUsS0FBVzs7WUFDOUMsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsTUFBTSxFQUFFLG9CQUFPLEtBQUssRUFBRyxDQUFDO1lBRWhGLElBQUksUUFBUSxDQUFDLElBQUksRUFBRTtnQkFDakIsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO2FBQ3RCO1lBRUQsTUFBTSxRQUFRLENBQUM7UUFDakIsQ0FBQztLQUFBO0lBRVksWUFBWSxDQUFDLE9BQXNDOztZQUM5RCxNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLDhCQUE4QixFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBRS9FLElBQUksUUFBUSxDQUFDLElBQUksRUFBRTtnQkFDakIsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO2FBQ3RCO1lBRUQsTUFBTSxRQUFRLENBQUM7UUFDakIsQ0FBQztLQUFBO0lBRVksV0FBVyxDQUFDLE9BQXFDOztZQUM1RCxNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLDZCQUE2QixFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBRTlFLElBQUksUUFBUSxDQUFDLElBQUksRUFBRTtnQkFDakIsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO2FBQ3RCO1lBRUQsTUFBTSxRQUFRLENBQUM7UUFDakIsQ0FBQztLQUFBO0lBRVksUUFBUSxDQUFDLE1BQWMsRUFBRSxPQUE4Qjs7WUFDbEUsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsTUFBTSxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFFcEUsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDO0tBQUE7SUFFWSxLQUFLLENBQUMsTUFBYyxFQUFFLE9BQStCOztZQUNoRSxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixNQUFNLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUVqRSxPQUFPLElBQUksQ0FBQztRQUNkLENBQUM7S0FBQTtJQUVZLE9BQU8sQ0FBQyxNQUFjLEVBQUUsT0FBaUM7O1lBQ3BFLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLE1BQU0sVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBRW5FLE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQztLQUFBO0lBRVksTUFBTSxDQUFDLE1BQWMsRUFBRSxPQUFzQzs7WUFDeEUsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsTUFBTSxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFFbEUsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDO0tBQUE7Q0FDRjtBQXZFRCx3Q0F1RUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwLCBIdHRwT3B0aW9ucyB9IGZyb20gXCIuLi8uLi9iYXNlXCI7XHJcbmltcG9ydCB7IEJhc2VDdXN0b2R5T3B0aW9ucywgQ3VzdG9keUNhcmRGZWF0dXJlIH0gZnJvbSBcIi4uLy4uL3Byb3ZpZGVyXCI7XHJcbmltcG9ydCB7XHJcbiAgRW1pdFBoeXNpY2FsQ2FyZFJlcXVlc3RTY2hlbWEsXHJcbiAgRW1pdFZpcnR1YWxDYXJkUmVxdWVzdFNjaGVtYSxcclxuICBDYXJkQmxvY2tSZXF1ZXN0U2NoZW1hLFxyXG4gIENhcmRVbmJsb2NrUmVxdWVzdFNjaGVtYSxcclxuICBDYXJkQmFzZVJlcXVlc3RTY2hlbWEsXHJcbiAgQ2FyZENhbmNlbGxhdGlvblJlcXVlc3RTY2hlbWEsXHJcbiAgUGF5bWVudCxcclxuICBDYXJkXHJcbn0gZnJvbSBcIi4uLy4uL21vZGVsc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDdXN0b2R5Q2FyZFdlYlNlcnZpY2VPcHRpb25zIGV4dGVuZHMgSHR0cE9wdGlvbnMsIEJhc2VDdXN0b2R5T3B0aW9ucyB7XHJcbiAgaHR0cD86IEh0dHA7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VzdG9keUNhcmRXZWJTZXJ2aWNlIGV4dGVuZHMgQ3VzdG9keUNhcmRGZWF0dXJlIHtcclxuICBwdWJsaWMgaHR0cDogSHR0cDtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5IG9wdGlvbnM6IEN1c3RvZHlDYXJkV2ViU2VydmljZU9wdGlvbnMpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLmh0dHAgPSBvcHRpb25zLmh0dHAgfHwgbmV3IEh0dHAob3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYXN5bmMgaW5mbyhjYXJkSWQ6IHN0cmluZywgZXh0cmE/OiBhbnkpOiBQcm9taXNlPFBheW1lbnQ+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5odHRwLmdldChcIi9wcm92aWRlci9jYXJkcy9pbmZvXCIsIHsgY2FyZElkLCAuLi5leHRyYSB9KTtcclxuXHJcbiAgICBpZiAocmVzcG9uc2UuZGF0YSkge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICB0aHJvdyByZXNwb25zZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBnZXRCeUlkKGNhcmRJZDogc3RyaW5nLCBleHRyYT86IGFueSk6IFByb21pc2U8Q2FyZCB8IHVuZGVmaW5lZD4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmh0dHAuZ2V0KGAvcHJvdmlkZXIvY2FyZHMvJHtjYXJkSWR9YCwgeyAuLi5leHRyYSB9KTtcclxuXHJcbiAgICBpZiAocmVzcG9uc2UuZGF0YSkge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICB0aHJvdyByZXNwb25zZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBlbWl0UGh5c2ljYWwocGF5bG9hZDogRW1pdFBoeXNpY2FsQ2FyZFJlcXVlc3RTY2hlbWEpOiBQcm9taXNlPENhcmQ+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5odHRwLnBvc3QoYC9wcm92aWRlci9jYXJkcy9lbWl0UGh5c2ljYWxgLCBwYXlsb2FkKTtcclxuXHJcbiAgICBpZiAocmVzcG9uc2UuZGF0YSkge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICB0aHJvdyByZXNwb25zZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBlbWl0VmlydHVhbChwYXlsb2FkOiBFbWl0VmlydHVhbENhcmRSZXF1ZXN0U2NoZW1hKTogUHJvbWlzZTxDYXJkPiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuaHR0cC5wb3N0KGAvcHJvdmlkZXIvY2FyZHMvZW1pdFZpcnR1YWxgLCBwYXlsb2FkKTtcclxuXHJcbiAgICBpZiAocmVzcG9uc2UuZGF0YSkge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICB0aHJvdyByZXNwb25zZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBhY3RpdmF0ZShjYXJkSWQ6IHN0cmluZywgcGF5bG9hZDogQ2FyZEJhc2VSZXF1ZXN0U2NoZW1hKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICBhd2FpdCB0aGlzLmh0dHAucG9zdChgL3Byb3ZpZGVyL2NhcmRzLyR7Y2FyZElkfS9hY3RpdmF0ZWAsIHBheWxvYWQpO1xyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIGJsb2NrKGNhcmRJZDogc3RyaW5nLCBwYXlsb2FkOiBDYXJkQmxvY2tSZXF1ZXN0U2NoZW1hKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICBhd2FpdCB0aGlzLmh0dHAucG9zdChgL3Byb3ZpZGVyL2NhcmRzLyR7Y2FyZElkfS9ibG9ja2AsIHBheWxvYWQpO1xyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIHVuYmxvY2soY2FyZElkOiBzdHJpbmcsIHBheWxvYWQ6IENhcmRVbmJsb2NrUmVxdWVzdFNjaGVtYSk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgYXdhaXQgdGhpcy5odHRwLnBvc3QoYC9wcm92aWRlci9jYXJkcy8ke2NhcmRJZH0vdW5ibG9ja2AsIHBheWxvYWQpO1xyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGFzeW5jIGNhbmNlbChjYXJkSWQ6IHN0cmluZywgcGF5bG9hZDogQ2FyZENhbmNlbGxhdGlvblJlcXVlc3RTY2hlbWEpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIGF3YWl0IHRoaXMuaHR0cC5wb3N0KGAvcHJvdmlkZXIvY2FyZHMvJHtjYXJkSWR9L2NhbmNlbGAsIHBheWxvYWQpO1xyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxufVxyXG4iXX0=