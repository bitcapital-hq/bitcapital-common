import * as uuid from "uuid";

/**
 * The base error details enables the developer to add
 * specific metadata to their errors.
 */
export class BaseErrorDetails {
  [key: string]: any;

  constructor(data = {}) {
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        this[key] = data[key];
      }
    }
  }
}

/**
 * An enhanced error instance for the TS Framework.
 * <br />
 * Basic features:
 * - Unique stack id using UUID v4
 * - Serializers: toObject and toJSON
 * - Better stack trace mapping using "clean-stack"
 */
export class BaseError extends Error {
  /**
   * The unique exception id.
   */
  public stackId: string;

  /**
   * The error details for easier tracking of exceptions
   */
  public details: BaseErrorDetails;

  /**
   * The error original message without the generated metadata.
   */
  public originalMessage: string;

  constructor(message, details: any = new BaseErrorDetails()) {
    const stackId = uuid.v4();
    super(`${message} (stackId: ${stackId})`);
    this.stackId = stackId;
    this.originalMessage = message;
    this.name = this.constructor.name;
    this.details = details instanceof BaseErrorDetails ? details : new BaseErrorDetails(details);

    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = new Error(message).stack;
    }
  }

  /**
   * Generates plain object for this error instance.
   */
  public toObject() {
    return {
      stack: this.stack,
      message: this.message,
      stackId: this.stackId,
      details: this.details
    };
  }

  /**
   * Generates clean object for this error instance ready for JSON stringification (optional).
   *
   * @param stringify Flag to enable stringification
   */
  public toJSON(stringify = false): any {
    const obj = this.toObject();
    if (stringify) {
      return JSON.stringify(obj);
    }
    return obj;
  }
}
