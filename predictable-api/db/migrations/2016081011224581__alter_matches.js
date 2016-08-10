'use strict';

const Nodal = require('nodal');

class AlterMatches extends Nodal.Migration {

  constructor(db) {
    super(db);
    this.id = 2016081011224581;
  }

  up() {

    return [
      this.addColumn("matches", "information", "string"),
      this.addColumn("matches", "venue", "string"),
      this.addColumn("matches", "odds_home", "string"),
      this.addColumn("matches", "odds_away", "string"),
      this.addColumn("matches", "odds_draw", "string")
    ];

  }

  down() {

    return [
      this.dropColumn("matches", "information"),
      this.dropColumn("matches", "venue"),
      this.dropColumn("matches", "odds_home"),
      this.dropColumn("matches", "odds_away"),
      this.dropColumn("matches", "odds_draw")
    ];

  }

}

module.exports = AlterMatches;
