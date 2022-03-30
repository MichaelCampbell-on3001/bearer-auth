'use strict';



module.exports=()=>{
  const { db } = require('../../src/auth/models');

  db.sync();
}