"use strict";

import * as mongoose from "mongoose";

var _userSchema = new mongoose.Schema({
  userName: { type: String, required: true, trim: true },
  emailId: { type: String, required: true, trim: true },
  password: { type: String, required: true, trim: true },
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: false, trim: true },
  roles: { type: [String], required: true },
  createdAt: { type: Date, default: Date.now }
})

export default (_userSchema);
