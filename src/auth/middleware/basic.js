'use strict';

const base64 = require('base-64');
const { user } = require('../models/index.js')

module.exports = async (req, res, next) => {

  // if (!req.headers.authorization) { return _authError(); }

  try {

  let basic = req.headers.authorization;
  let authString = basic.split(' ')[1];
  let [username, password] = base64.decode(authString).split(':');

    req.user = await user.authenticateBasic(username, password);

    if (!req.user) throw new Error;

    next();
  } catch (e) {
    console.error(e);
    res.status(403).send('Invalid Login');
  }

}
