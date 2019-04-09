import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { HttpInterceptor } from "../../base";
import { BaseCustody } from "../../provider";
export declare class CustodyProviderErrorInterceptor implements HttpInterceptor {
    readonly provider: BaseCustody;
    constructor(provider: BaseCustody);
    request(request: AxiosRequestConfig): Promise<AxiosRequestConfig>;
    response(response: AxiosResponse): Promise<AxiosResponse<any>>;
    error(error: AxiosError): Promise<AxiosError>;
}
