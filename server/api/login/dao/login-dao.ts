"use strict";

import * as mongoose from "mongoose";
import * as Promise from "bluebird";
import loginSchema from "../model/login-model";
import * as _ from "lodash";

loginSchema.static("getAll", () => {
  return new Promise((resolve, reject) => {
    let _query = {};

    login
    .find(_query)
    .exec((err, todos) => {
      err ? reject(err)
      : resolve(todos);
    });
  });
});

loginSchema.static("createNew", (login) => {
  return new Promise((resolve, reject) => {
      if (!_.isObject(login)) {
        return reject(new TypeError("Todo is not a valid object."));
      }

      let _something = new login(login);

      _something.save((err, saved) => {
        err ? reject(err)
        : resolve(saved);
      });
  });
});

loginSchema.static("removeById", (id) => {
  return new Promise((resolve, reject) => {
      if (!_.isString(id)) {
        return reject(new TypeError("Id is not a valid string."));
      }

      login
      .findByIdAndRemove(id)
      .exec((err, deleted) => {
        err ? reject(err)
        : resolve();
      });
    });
});

let loginModel = mongoose.model("login", loginSchema);

export default loginModel;
