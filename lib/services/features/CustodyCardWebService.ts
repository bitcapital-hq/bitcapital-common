import { Http, HttpOptions } from "../../base";
import { BaseCustodyOptions, CustodyCardFeature } from "../../provider";
import {
  EmitPhysicalCardRequestSchema,
  EmitVirtualCardRequestSchema,
  CardBlockRequestSchema,
  CardUnblockRequestSchema,
  CardBaseRequestSchema,
  CardCancellationRequestSchema,
  Payment,
  Card
} from "../../models";

export interface CustodyCardWebServiceOptions extends HttpOptions, BaseCustodyOptions {
  http?: Http;
}
export default class CustodyCardWebService extends CustodyCardFeature {
  public http: Http;

  constructor(public readonly options: CustodyCardWebServiceOptions) {
    super();
    this.http = options.http || new Http(options);
  }

  public async info(cardId: string, extra?: any): Promise<Payment> {
    const response = await this.http.get("/provider/cards/info", { cardId, ...extra });

    if (response.data) {
      return response.data;
    }

    throw response;
  }

  public async getById(cardId: string, extra?: any): Promise<Card | undefined> {
    const response = await this.http.get(`/provider/cards/${cardId}`, { ...extra });

    if (!response.data || !response.data.id) throw response;

    return response.data;
  }

  public async emitPhysical(payload: EmitPhysicalCardRequestSchema): Promise<Card> {
    const response = await this.http.post(`/provider/cards/emitPhysical`, payload);

    if (!response.data || !response.data.id) throw response;

    return response.data;
  }

  public async emitVirtual(payload: EmitVirtualCardRequestSchema): Promise<Card> {
    const response = await this.http.post(`/provider/cards/emitVirtual`, payload);

    if (!response.data || !response.data.id) throw response;

    return response.data;
  }

  public async activate(cardId: string, payload: CardBaseRequestSchema): Promise<boolean> {
    await this.http.post(`/provider/cards/${cardId}/activate`, payload);

    return true;
  }

  public async block(cardId: string, payload: CardBlockRequestSchema): Promise<boolean> {
    await this.http.post(`/provider/cards/${cardId}/block`, payload);

    return true;
  }

  public async unblock(cardId: string, payload: CardUnblockRequestSchema): Promise<boolean> {
    await this.http.post(`/provider/cards/${cardId}/unblock`, payload);

    return true;
  }

  public async cancel(cardId: string, payload: CardCancellationRequestSchema): Promise<boolean> {
    await this.http.post(`/provider/cards/${cardId}/cancel`, payload);

    return true;
  }
}
