'use strict';

export class Request {
    private clientVersion: string;
    private requestData: any;
    private context: string;

    get getData(): any {
        return this.requestData;
    }

    public get $clientVersion(): string {
        return this.clientVersion;
    }


    public get $context(): string {
        return this.context;
    }


}

export class Response {
    private operation: String;
    private status: String;
    private successResult: any;
    private errorResult: any;

    /**
     * Constructor for Response
     * 
     * @param operation 
     * @param status 
     */

    constructor(operation: String, status: String) {
        this.operation = operation;
        this.status = status;
    }

    /**
     * Setter for Success Result
     * 
     * @param successResult 
     */
    public SuccessResult(successResult: any): Response {
        this.successResult = successResult;
        return this;
    }

    /**
     * Setter for Error Result
     * 
     * @param errorResult 
     */
    public ErrorResult(errorResult: any): Response {
        this.errorResult = errorResult;
        return this;
    }
}