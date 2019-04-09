/**
 * The base error details enables the developer to add
 * specific metadata to their errors.
 */
export declare class BaseErrorDetails {
    [key: string]: any;
    constructor(data?: {});
}
/**
 * An enhanced error instance for the TS Framework.
 * <br />
 * Basic features:
 * - Unique stack id using UUID v4
 * - Serializers: toObject and toJSON
 * - Better stack trace mapping using "clean-stack"
 */
export declare class BaseError extends Error {
    /**
     * The unique exception id.
     */
    stackId: string;
    /**
     * The error details for easier tracking of exceptions
     */
    details: BaseErrorDetails;
    /**
     * The error original message without the generated metadata.
     */
    originalMessage: string;
    constructor(message: any, details?: any);
    /**
     * Generates plain object for this error instance.
     */
    toObject(): {
        stack: string;
        message: string;
        stackId: string;
        details: BaseErrorDetails;
    };
    /**
     * Generates clean object for this error instance ready for JSON stringification (optional).
     *
     * @param stringify Flag to enable stringification
     */
    toJSON(stringify?: boolean): any;
}
