'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const dbConfig = require("../config/config")

const userModel = require("../models/User")

const connection = new Sequelize(dbConfig.development)

userModel.init(connection)


module.exports = connection;
