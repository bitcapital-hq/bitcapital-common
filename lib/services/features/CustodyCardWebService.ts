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

export interface CustodyCardWebServiceOptions extends HttpOptions, BaseCustodyOptions {}

export default class CustodyCardWebService extends CustodyCardFeature {
  protected http: Http;

  constructor(public readonly options: CustodyCardWebServiceOptions) {
    super();
    this.http = new Http(options);
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

    if (response.status !== 200 || !response.data || !response.data.id) throw response;

    return response.data;
  }

  public async emitPhysical(payload: EmitPhysicalCardRequestSchema): Promise<Card> {
    const response = await this.http.post(`/provider/cards/emitPhysical`, payload);

    if (response.status !== 200 || !response.data || !response.data.id) throw response;

    return response.data;
  }

  public async emitVirtual(payload: EmitVirtualCardRequestSchema): Promise<Card> {
    const response = await this.http.post(`/provider/cards/emitVirtual`, payload);

    if (response.status !== 200 || !response.data || !response.data.id) throw response;

    return response.data;
  }

  public async activate(cardId: string, payload: CardBaseRequestSchema): Promise<boolean> {
    const response = await this.http.post(`/provider/cards/${cardId}/activate`, payload);

    if (response.status !== 200) throw response;

    return true;
  }

  public async block(cardId: string, payload: CardBlockRequestSchema): Promise<boolean> {
    const response = await this.http.post(`/provider/cards/${cardId}/block`, payload);

    if (response.status !== 200) throw response;

    return true;
  }

  public async unblock(cardId: string, payload: CardUnblockRequestSchema): Promise<boolean> {
    const response = await this.http.post(`/provider/cards/${cardId}/unblock`, payload);

    if (response.status !== 200) throw response;

    return true;
  }

  public async cancel(cardId: string, payload: CardCancellationRequestSchema): Promise<boolean> {
    const response = await this.http.post(`/provider/cards/${cardId}/cancel`, payload);

    if (response.status !== 200) throw response;

    return true;
  }
}
