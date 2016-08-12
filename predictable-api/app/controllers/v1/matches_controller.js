'use strict';

const Nodal = require('nodal');
const Match = Nodal.require('app/models/match.js');

class V1MatchesController extends Nodal.AuthController {

  index() {

    Match.query()
      .where(this.params.query)
      .end((err, models) => {

        this.respond(err || models);

      });

  }

  show() {

    Match.find(this.params.route.id, (err, model) => {

      this.respond(err || model);

    });

  }

  create() {



  }

  update() {

    Match.update(this.params.route.id, this.params.body, (err, model) => {

      this.respond(err || model);

    });

  }

  destroy() {

    Match.destroy(this.params.route.id, (err, model) => {

      this.respond(err || model);

    });

  }

}

module.exports = V1MatchesController;
