import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { CustodyProvider } from "../provider";
import { BaseError } from "./BaseError";
export declare class CustodyProviderError extends BaseError {
    config?: AxiosRequestConfig;
    response?: AxiosResponse;
    request?: any;
    constructor(type: CustodyProvider, exception: AxiosError | Error);
}
