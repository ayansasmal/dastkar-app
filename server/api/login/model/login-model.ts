"use strict";

import * as mongoose from "mongoose";

var _loginSchema = new mongoose.Schema({
  somethingSomething: {type: String, required: true, trim: true},
  createdAt: {type: Date, default: Date.now}
})

export default (_loginSchema);
