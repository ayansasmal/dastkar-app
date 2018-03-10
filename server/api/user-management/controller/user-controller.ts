"use strict";

import * as express from "express";
import userDAO from "../dao/user-dao";
import { ServiceUtils } from '../../../commons/utils/service-utils';
import { ErrorBean, Error } from '../../../commons/beans/error-bean';
import { UserRequestBean } from "../../../commons/beans/user-management-beans";

export class userController {
  static getAll(req: express.Request, res: express.Response) {

    let operationName = 'GetUsers';

    userDAO
    ['getAll']()
      .then(users => res.status(200).json(ServiceUtils.prepareSuccessResponse(operationName, users)))
      .catch(error => res.status(400).json(ServiceUtils.prepareErrorResponse(operationName, error)));
  }

  static createNew(req: express.Request, res: express.Response) {
    let operationName = 'AddUser';
    let _user: UserRequestBean = ServiceUtils.getRequestData(req).getData();

    let errors: ErrorBean = this.validateInput(_user);

    if (errors != null) {
      res.status(400).json(ServiceUtils.prepareErrorResponse(operationName, errors));
    }

    userDAO
    ["createNew"](_user)
      .then(user => res.status(201).json(ServiceUtils.prepareSuccessResponse(operationName, user)))
      .catch(error => res.status(400).json(ServiceUtils.prepareErrorResponse(operationName, error)));
  }

  static search(req: express.Request, res: express.Response) {
    // get the criteria
    let criteria = req.params.criteria;

    // get the search params
    let searchParams = ServiceUtils.getRequestData(req).getData();
    let param = searchParams.param;

    if (criteria == 'userName') {
      // search by username
      let operationName = 'SearchByUsername';
      userDAO
      ["findByUserName"](param)
        .then(user => res.status(200).json(ServiceUtils.prepareSuccessResponse(operationName, user)))
        .catch(error => res.status(400).json(ServiceUtils.prepareErrorResponse(operationName, error)));
    }
    else if (criteria == 'emailId') {
      // search by email id
      let operationName = 'SearchByEmail';
      userDAO
      ["findByEmail"](param)
        .then(user => res.status(200).json(ServiceUtils.prepareSuccessResponse(operationName, user)))
        .catch(error => res.status(400).json(ServiceUtils.prepareErrorResponse(operationName, error)));
    }

  }

  static removeById(req: express.Request, res: express.Response) {
    let _id = req.params.id;

    userDAO
    ["removeById"](_id)
      .then(() => res.status(200).end())
      .catch(error => res.status(400).json(error));
  }

  private static validateInput(user: UserRequestBean): ErrorBean {
    let errorBean = new ErrorBean();
    let hasErrors = false;

    if (!user.$userName || user.$userName == '') {
      hasErrors = true;
      errorBean.addError(new Error("UM-101", "Username cannot be null or blank"));
    }

    if (!user.$emailId || user.$emailId == '') {
      hasErrors = true;
      errorBean.addError(new Error("UM-102", "Email ID cannot be null or blank"));
    }
    return hasErrors ? errorBean : null;
  }
}
