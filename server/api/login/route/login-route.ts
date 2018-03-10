"use strict";

import * as express from "express";
import {loginController} from "../controller/login-controller";

export class loginRoutes {
  static init(router:express.Router) {
    router
      .route("/api/login")
      .get(loginController.getAll)
      .post(loginController.createNew);

    router
      .route("/api/login/:id")
      .delete(loginController.removeById);
  }
}
