import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { CustodyProvider } from "../provider";
import { BaseError } from "./BaseError";

export class CustodyProviderError extends BaseError {
  config?: AxiosRequestConfig;
  response?: AxiosResponse;
  request?: any;

  constructor(type: CustodyProvider, exception: AxiosError | Error) {
    let data = undefined;

    if (exception["response"] && exception["response"]["data"]) {
      data = exception["response"]["data"];
    }

    // Prepare exception message
    let msg = data ? data.message : exception.message;
    msg = msg.replace(new RegExp(/^\[\d{3}\] /), "");
    msg = msg.replace(/\(stackId\:.*\)/, "");

    // Call super for base error construction
    super(msg, {
      provider: type,
      status: exception["response"] ? exception["response"]["status"] : undefined,
      url: exception["config"]["url"]
    });

    // Prepare addition axios data, if available
    if (exception["response"]) {
      const error = exception as AxiosError;
      this.response = error.response;
      this.request = error.request;
      this.config = error.config;
      this.stack = exception.stack;
      this.details = { data, ...this.details };
    }
  }
}
