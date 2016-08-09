'use strict';

const Nodal = require('nodal');
const Prediction = Nodal.require('app/models/prediction.js');

class V1PredictionsController extends Nodal.Controller {

  index() {

    Prediction.query()
      .where(this.params.query)
      .end((err, models) => {

        this.respond(err || models);

      });

  }

  show() {

    Prediction.find(this.params.route.id, (err, model) => {

      this.respond(err || model);

    });

  }

  create() {

    Prediction.create(this.params.body, (err, model) => {

      this.respond(err || model);

    });

  }

  update() {

    Prediction.update(this.params.route.id, this.params.body, (err, model) => {

      this.respond(err || model);

    });

  }

  destroy() {

    Prediction.destroy(this.params.route.id, (err, model) => {

      this.respond(err || model);

    });

  }

}

module.exports = V1PredictionsController;
