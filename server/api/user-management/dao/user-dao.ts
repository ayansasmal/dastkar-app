"use strict";

import * as mongoose from "mongoose";
import * as Promise from "bluebird";
import userSchema from "../model/user-model";
import * as _ from "lodash";

userSchema.static("getAll", () => {
  return new Promise((resolve, reject) => {
    let _query = {};

    userModel
      .find(_query)
      .exec((err, users) => {
        err ? reject(err)
          : resolve(users);
      });
  });
});

userSchema.static("createNew", (user) => {
  return new Promise((resolve, reject) => {
    if (!_.isObject(user)) {
      return reject(new TypeError("User is not a valid object."));
    }

    let _something = new user(user);

    _something.save((err, saved) => {
      err ? reject(err)
        : resolve(saved);
    });
  });
});

userSchema.static("findByUserName", (userName) => {
  return new Promise((resolve, reject) => {
    if (!_.isString(userName)) {
      return reject(new TypeError("user name is not a valid string."));
    }

    userModel
      .findOne({userName : userName}).lean()
      .exec((err, deleted) => {
        err ? reject(err)
          : resolve();
      });
  });
});

userSchema.static("findByEmail", (emailId) => {
  return new Promise((resolve, reject) => {
    if (!_.isString(emailId)) {
      return reject(new TypeError("email ID is not a valid string."));
    }

    userModel
      .findOne({emailId : emailId}).lean()
      .exec((err, deleted) => {
        err ? reject(err)
          : resolve();
      });
  });
});

let userModel = mongoose.model("user", userSchema);

export default userModel;
