import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { HttpInterceptor } from "../../base";
import { CustodyProviderError } from "../../errors";
import { BaseCustody } from "../../provider";

export class CustodyProviderErrorInterceptor implements HttpInterceptor {
  constructor(public readonly provider: BaseCustody) {}

  public async request(request: AxiosRequestConfig) {
    return request;
  }

  public async response(response: AxiosResponse) {
    return response;
  }

  public async error(error: AxiosError) {
    return new CustodyProviderError(this.provider.type, error) as AxiosError;
  }
}
