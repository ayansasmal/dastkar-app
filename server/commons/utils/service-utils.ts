'use strict';

import * as util from 'util';
import * as express from 'express';
import { Response, Request } from '../beans/api-beans';

export class ServiceUtils {

    static prepareSuccessResponse(operation: String, body: any): Response {
        return new Response(operation, 'Success').SuccessResult(body);
    }

    static prepareErrorResponse(operation: String, body: any): Response {
        return new Response(operation, 'Error').ErrorResult(body);
    }

    static getRequestData(request: express.Request): Request {
        return request.body();
    }

}