'use strict';

const Nodal = require('nodal');
const Prediction = Nodal.require('app/models/prediction.js');


const AuthController = Nodal.require('app/controllers/auth_controller.js');

class V1PredictionsController extends AuthController {

  index() {
    this.authorize((accessToken, user) => {
      Prediction.query()
          .join('user')
          .join('match')
        .where(this.params.query)
        .end((err, models) => {
          this.respond(err || models, ['id', 'result', {match: ['home', 'away']}, {user: ['username', 'email']}]);
        });
    });
  }

  show() {

    this.authorize((accessToken, user) => {
      Prediction.find(this.params.route.id, (err, model) => {

        this.respond(err || model);

      });
    });
  }

  create() {

    this.authorize((accessToken, user) => {

      this.params.body.user_id = user.get('id');

      Prediction.create(this.params.body, (err, model) => {

        this.respond(err || model);

      });
    });


  }

  update() {
    this.authorize((accessToken, user) => {

      Prediction.update(this.params.route.id, this.params.body, (err, model) => {

        this.respond(err || model);

      });
    });
  }

  destroy() {
    this.authorize((accessToken, user) => {
      Prediction.destroy(this.params.route.id, (err, model) => {

        this.respond(err || model);

      });
    });
  }

}

module.exports = V1PredictionsController;
