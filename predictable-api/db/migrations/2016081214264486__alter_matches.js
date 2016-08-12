'use strict';

const Nodal = require('nodal');

class AlterMatches extends Nodal.Migration {

  constructor(db) {
    super(db);
    this.id = 2016081214264486;
  }

  up() {

    return [
      this.addColumn("matches", "result", "string"),
      this.addColumn("predictions", "correct", "boolean")
    ];

  }

  down() {

    return [
      this.dropColumn("matches", "result"),
      this.dropColumn("predictions", "correct")
    ];

  }

}

module.exports = AlterMatches;
