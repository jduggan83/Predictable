'use strict';

const Nodal = require('nodal');

class CreateMatches extends Nodal.Migration {

  constructor(db) {
    super(db);
    this.id = 2016080913303731;
  }

  up() {

    return [
      this.createTable("matches", [{"name":"home","type":"string"},{"name":"away","type":"string"}])
    ];

  }

  down() {

    return [
      this.dropTable("matches")
    ];

  }

}

module.exports = CreateMatches;
