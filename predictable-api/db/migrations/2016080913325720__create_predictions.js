'use strict';

const Nodal = require('nodal');

class CreatePredictions extends Nodal.Migration {

  constructor(db) {
    super(db);
    this.id = 2016080913325720;
  }

  up() {

    return [
      this.createTable("predictions", [{"name":"match_id","type":"int"},{"name":"result","type":"string"},{"name":"user_id","type":"int"},{"name":"match_id","type":"int"}])
    ];

  }

  down() {

    return [
      this.dropTable("predictions")
    ];

  }

}

module.exports = CreatePredictions;
