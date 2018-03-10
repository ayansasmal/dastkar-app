"use strict";

import * as express from "express";
import {loginDAO} from "../dao/login-dao";

export class loginController {
  static getAll(req:express.Request, res:express.Response) {
    loginDAO
      ['getAll']()
      .then(logins => res.status(200).json(logins))
      .catch(error => res.status(400).json(error));
  }

  static createNew(req:express.Request, res:express.Response) {
    let _login = req.body;

    loginDAO
      ["createNew"](_login)
      .then(login => res.status(201).json(login))
      .catch(error => res.status(400).json(error));
  }

  static removeById(req:express.Request, res:express.Response) {
    let _id = req.params.id;

    loginDAO
      ["removeById"](_id)
      .then(() => res.status(200).end())
      .catch(error => res.status(400).json(error));
  }
}
