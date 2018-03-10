"use strict";

import * as express from "express";
import {userController} from "../controller/user-controller";

export class userRoutes {
  static init(router:express.Router) {
    router
      .route("/api/user")
      .get(userController.getAll)
      .post(userController.createNew);

    router
    .route("api/user/search/:criteria")
    .get(userController.search);

    router
      .route("/api/user/:id")
      .delete(userController.removeById);
  }
}
