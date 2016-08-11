'use strict';

const Nodal = require('nodal');

class AlterPredictions extends Nodal.Migration {

  constructor(db) {
    super(db);
    this.id = 2016081116181206;
  }

  up() {

    return [
      this.addColumn("predictions", "processed", "boolean"),
    ];

  }

  down() {

    return [
      this.dropColumn("predictions", "processed")
    ];

  }

}

module.exports = AlterPredictions;
