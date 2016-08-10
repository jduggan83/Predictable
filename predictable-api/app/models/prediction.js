'use strict';

const Nodal = require('nodal');
const User = Nodal.require('app/models/user.js');
const Match = Nodal.require('app/models/match.js');

class Prediction extends Nodal.Model {}

Prediction.setDatabase(Nodal.require('db/main.js'));
Prediction.setSchema(Nodal.my.Schema.models.Prediction);

Prediction.joinsTo(User, {multiple: true});
Prediction.joinsTo(Match, {multiple: true});

module.exports = Prediction;
