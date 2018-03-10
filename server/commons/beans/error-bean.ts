'use strict';

export class Error {
    private errorCode: string;
    private errorMessage: string;

    constructor(code: string, message: string) {
        this.errorCode = code;
        this.errorMessage = message;
    }
}

export class ErrorBean {
    private errors: Error[];

    /**
     * Add errors to the existing list of errors
     * 
     * @param error
     */
    
    public addError(error: Error) {
        this.errors.push(error);
    }

    /**
     * getErrors
     */
    public getErrors():Error[] {
        return this.errors;
    }
}