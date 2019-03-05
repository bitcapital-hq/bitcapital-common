import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { BaseError } from 'ts-framework-common';
import { CustodyProvider } from "../provider";
export declare class CustodyProviderError extends BaseError {
    config?: AxiosRequestConfig;
    response?: AxiosResponse;
    request?: any;
    constructor(type: CustodyProvider, exception: AxiosError | Error);
}
