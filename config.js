/* eslint-disable no-undef */
require("dotenv").config();

exports.PORT = process.env.PORT || 5000;

exports.MONGO_URI = process.env.MONGO_URI;

exports.SECRET_KEY = process.env.SECRET_KEY;
